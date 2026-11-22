// ============================================================
// Раскладка «дерево со стволами» (ветка tree-trunk).
//
//   Поборник
//      │
//   ───┴──────────┬──────────┬───  ← шина от корня к темам
//   [Призвание] [Преданность] [Скакун] …
//      │            │
//   o──┼──o      o──┼──o            ← ствол темы, черты слева и справа,
//      │            │  └──o           сверху вниз по возрастанию уровня
//   o──┼──o      o──┘                ← у черты с детьми свой короткий ствол,
//      │                               ветка уходит дальше наружу
//
// Всё строится детерминированно, без оптимизации: связи — ломаные из
// горизонтальных и вертикальных отрезков, поддеревья не пересекаются
// по построению. Подписи — под узлами.
// ============================================================

export const GEOMETRY = {
    SIZE: { root: 120, hub: 84, feat: 62, group: 78, option: 64 },
    CAPTION: {
        root: { fs: 28, maxW: 260, lines: 1 },
        hub: { fs: 19, maxW: 170, lines: 2 },
        feat: { fs: 15, maxW: 150, lines: 2 },
        group: { fs: 19, maxW: 170, lines: 2 },
        option: { fs: 17, maxW: 170, lines: 2 },
    },
    CAPTION_GAP: 8,
    CHAR_W: 0.7,
    STEP: 250,      // по горизонтали: узел → его ствол → ребёнок (половина шага до ствола)
    ROW: 120,       // по вертикали между строками черт
    HUB_Y: 300,     // строка тем
    BUS_GAP: 110,   // шина над темами
    COL_GAP: 90,    // промежуток между колоннами тем
};
const G = GEOMETRY;

/** Порядок тем поборника слева направо: родственные рядом (другие классы передают свой). */
const THEME_ORDER = ['theme-cause', 'theme-sanct', 'theme-aura', 'theme-combat', 'theme-shield',
    'theme-blessing', 'theme-devotion', 'theme-faith', 'theme-steed'];

export function captionBox(n) {
    if (n.kind === 'root') return { w: 0, h: 0 };
    const c = G.CAPTION[n.kind] || G.CAPTION.feat;
    const full = n.name.length * c.fs * G.CHAR_W;
    const lines = full <= c.maxW ? 1 : 2;
    return { w: Math.ceil(lines === 1 ? full : c.maxW), h: Math.ceil(lines * c.fs * 1.15) };
}

export function computeTreeLayout(nodes, edges, { log = false, themeOrder = THEME_ORDER } = {}) {
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const kids = new Map(nodes.map((n) => [n.id, []]));
    for (const n of nodes) if (n.kind === 'feat' && n.parentId) kids.get(n.parentId).push(n.id);
    const byLevel = (a, b) => byId.get(a).level - byId.get(b).level || byId.get(a).name.localeCompare(byId.get(b).name, 'ru');
    for (const list of kids.values()) list.sort(byLevel);

    // размеры поддерева черты: высота в строках, ширина в шагах наружу
    const hCache = new Map(), wCache = new Map();
    const height = (id) => {
        if (!hCache.has(id)) hCache.set(id, Math.max(1, kids.get(id).reduce((s, c) => s + height(c), 0)));
        return hCache.get(id);
    };
    const width = (id) => {
        if (!wCache.has(id)) wCache.set(id, 1 + Math.max(0, ...kids.get(id).map(width)));
        return wCache.get(id);
    };

    const half = G.STEP / 2;
    const setPos = (id, x, y) => { const n = byId.get(id); n.x = Math.round(x); n.y = Math.round(y); };
    const paths = new Map(); // "from>to" → точки ломаной

    /** Черта и её поддерево; dir = +1 вправо, −1 влево от ствола. */
    function placeFeat(id, x, y, dir, v = 1) {
        setPos(id, x, y);
        const ch = kids.get(id);
        if (!ch.length) return;
        const trunkX = x + dir * half;
        let cy = y;
        for (const c of ch) {
            const cx = x + dir * G.STEP;
            placeFeat(c, cx, cy, dir, v);
            paths.set(`${id}>${c}`, cy === y ? [[x, y], [cx, cy]] : [[x, y], [trunkX, y], [trunkX, cy], [cx, cy]]);
            cy += v * height(c) * G.ROW;
        }
    }

    // колонны тем
    const hubs = themeOrder.filter((id) => byId.has(id));
    for (const n of nodes) if (n.kind === 'hub' && !hubs.includes(n.id)) hubs.push(n.id);
    const columns = hubs.map((hub) => {
        // черты темы делятся на левую и правую стороны ствола по очереди уровней,
        // каждая следующая идёт на ту сторону, где сейчас короче
        const sides = { [-1]: { rows: 0, items: [] }, [1]: { rows: 0, items: [] } };
        for (const c of kids.get(hub)) {
            const side = sides[1].rows < sides[-1].rows ? 1 : sides[-1].rows < sides[1].rows ? -1 : (sides[1].items.length <= sides[-1].items.length ? 1 : -1);
            sides[side].items.push({ id: c, row: sides[side].rows });
            sides[side].rows += height(c);
        }
        const reach = (side) => Math.max(0, ...sides[side].items.map((it) => half + (width(it.id) - 1) * G.STEP))
            + G.CAPTION.feat.maxW / 2;
        return { hub, sides, left: reach(-1), right: reach(1), rows: Math.max(sides[1].rows, sides[-1].rows) };
    });

    // Две полосы: первые темы растут от корня вверх, остальные — вниз.
    // Делим по ширине пополам, сохраняя порядок (родственные темы рядом).
    const colW = (c) => c.left + c.right + G.COL_GAP;
    const total = columns.reduce((sum, c) => sum + colW(c), 0);
    let acc = 0, splitAt = columns.length;
    for (let i = 0; i < columns.length; i++) {
        if (acc + colW(columns[i]) / 2 > total / 2) { splitAt = i; break; }
        acc += colW(columns[i]);
    }
    const bands = [{ cols: columns.slice(0, splitAt), dir: -1 }, { cols: columns.slice(splitAt), dir: 1 }];

    setPos('root', 0, 0);
    for (const band of bands) {
        let cursor = 0;
        for (const col of band.cols) { col.x = cursor + col.left; cursor = col.x + col.right + G.COL_GAP; }
        const shift = -(cursor - G.COL_GAP) / 2;
        const v = band.dir; // −1 — вверх от корня, +1 — вниз
        const busY = v * (G.HUB_Y - G.BUS_GAP);
        for (const col of band.cols) {
            const hx = col.x + shift, hy = v * G.HUB_Y;
            setPos(col.hub, hx, hy);
            paths.set(`root>${col.hub}`, [[0, 0], [0, busY], [hx, busY], [hx, hy]]);
            for (const side of [-1, 1]) {
                for (const it of col.sides[side].items) {
                    const y = hy + v * (it.row + 1) * G.ROW;
                    const x = hx + side * half;
                    placeFeat(it.id, x, y, side, v);
                    paths.set(`${col.hub}>${it.id}`, [[hx, hy], [hx, y], [x, y]]);
                }
            }
        }
    }

    // связи: основные — по ломаным дерева; дополнительные (вторая черта-критерий,
    // например «любая клятва») на холсте не рисуются — они есть в подсказке
    const drawn = [];
    for (const e of edges) {
        const p = paths.get(`${e.from}>${e.to}`);
        if (p) drawn.push({ ...e, points: p });
    }
    edges.length = 0;
    edges.push(...drawn);

    for (const n of nodes) {
        if (n.kind === 'feat' || n.kind === 'hub') {
            n.captionSide = n.kind === 'hub' ? 'right' : 'below';
            n.captionW = captionBox(n).w;
        }
    }

    const stats = checkLayout(nodes, drawn);
    const placed = nodes.filter((n) => n.x !== undefined && (n.kind === 'feat' || n.kind === 'hub' || n.kind === 'root'));
    const bounds = {
        minX: Math.min(...placed.map((n) => n.x)) - 120, maxX: Math.max(...placed.map((n) => n.x)) + 120,
        minY: Math.min(...placed.map((n) => n.y)) - 90, maxY: Math.max(...placed.map((n) => n.y)) + 110,
    };
    if (log) console.log(`  дерево: ${columns.length} тем, ширина ${Math.round(bounds.maxX - bounds.minX)}px, ` +
        `высота ${Math.round(bounds.maxY - bounds.minY)}px; наложений узлов ${stats.overlaps}, ` +
        `задетых подписей ${stats.captions}, пересечений связей ${stats.crossings}`);
    return { stats, bounds };
}

// ---------- проверка результата ----------

function segRect(ax, ay, bx, by, x0, y0, x1, y1) {
    let t0 = 0, t1 = 1;
    const dx = bx - ax, dy = by - ay;
    const p = [-dx, dx, -dy, dy], q = [ax - x0, x1 - ax, ay - y0, y1 - ay];
    for (let i = 0; i < 4; i++) {
        if (p[i] === 0) { if (q[i] < 0) return false; continue; }
        const t = q[i] / p[i];
        if (p[i] < 0) { if (t > t1) return false; if (t > t0) t0 = t; } else { if (t < t0) return false; if (t < t1) t1 = t; }
    }
    return true;
}

function checkLayout(nodes, edges) {
    const placed = nodes.filter((n) => n.kind === 'feat' || n.kind === 'hub' || n.kind === 'root');
    const size = (n) => G.SIZE[n.kind] || 62;
    let overlaps = 0, captions = 0, crossings = 0;
    for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
            const a = placed[i], b = placed[j];
            if (Math.hypot(a.x - b.x, a.y - b.y) < (size(a) + size(b)) / 2 + 20) overlaps++;
        }
    }
    // отрезки связей без частей под узлами-концами
    const segs = [];
    for (const e of edges) {
        const pts = e.points;
        for (let k = 0; k + 1 < pts.length; k++) segs.push({ e, a: pts[k], b: pts[k + 1] });
    }
    const rect = (n) => {
        const c = captionBox(n);
        if (n.captionSide === 'right') {
            const left = n.x + size(n) / 2 + G.CAPTION_GAP;
            return [left, n.y - c.h / 2, left + c.w, n.y + c.h / 2];
        }
        const top = n.y + size(n) / 2 + G.CAPTION_GAP;
        return [n.x - c.w / 2, top, n.x + c.w / 2, top + c.h];
    };
    for (const n of placed) {
        if (n.kind === 'root') continue;
        const [x0, y0, x1, y1] = rect(n);
        const hit = segs.some((s) => segRect(s.a[0], s.a[1], s.b[0], s.b[1], x0, y0, x1, y1))
            || placed.some((m) => {
                if (m === n) return false;
                const nx = Math.max(x0, Math.min(m.x, x1)), ny = Math.max(y0, Math.min(m.y, y1));
                if (Math.hypot(m.x - nx, m.y - ny) < size(m) / 2) return true;
                if (m.kind === 'root') return false;
                const [u0, v0, u1, v1] = rect(m);
                return x0 < u1 && u0 < x1 && y0 < v1 && v0 < y1;
            });
        if (hit) { captions++; if (process.env.LAYOUT_DEBUG) console.log('    подпись задета:', n.name); }
    }
    // пересечения: собственные отрезки ломаных разных связей, не делящих концы
    const cross = (p1, p2, p3, p4) => {
        const d = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
        return (d(p3, p4, p1) > 0) !== (d(p3, p4, p2) > 0) && (d(p1, p2, p3) > 0) !== (d(p1, p2, p4) > 0)
            && d(p3, p4, p1) !== 0 && d(p3, p4, p2) !== 0 && d(p1, p2, p3) !== 0 && d(p1, p2, p4) !== 0;
    };
    for (let i = 0; i < segs.length; i++) {
        for (let j = i + 1; j < segs.length; j++) {
            if (segs[i].e === segs[j].e) continue;
            if (cross(segs[i].a, segs[i].b, segs[j].a, segs[j].b)) crossings++;
        }
    }
    return { overlaps, captions, crossings };
}
