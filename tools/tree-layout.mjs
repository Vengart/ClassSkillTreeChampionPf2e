// ============================================================
// Раскладка «дерево со стволами» (ветка tree-trunk).
//
//   Поборник
//      │
//   ───┴──────────┬──────────┬───  ← шина от корня к темам
//   [Призвание] [Преданность] [Скакун] …
//      │            │
//   o──┼──o      o──┼──o            ← ствол темы, черты слева и справа,
//      │            │  └──o           черты одного уровня — в одной строке (полосы уровней)
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

    const half = G.STEP / 2;
    const setPos = (id, x, y) => { const n = byId.get(id); n.x = Math.round(x); n.y = Math.round(y); };
    const paths = new Map(); // "from>to" → точки ломаной

    // ---------- полосы уровней ----------
    // Черты одного уровня стоят в одной строке во всех темах своей половины дерева (верхней или нижней):
    // у каждого уровня — своя полоса, её высота = наибольшее число черт этого уровня в одной колонке.
    // Колонка (дорожка) — сторона ствола темы и шаг наружу: дорожка 0 — черты прямо у ствола темы,
    // дальше — поддеревья черт с детьми. Каждое поддерево получает свои дорожки, поэтому стволы
    // разных поддеревьев не накладываются; ближе к стволу темы — поддеревья старших черт, чтобы
    // горизонталь от младшей черты к её детям не пересекала чужие стволы.

    /** Раздаёт дорожки поддереву черты: дети — в дорожке start, поддеревья детей — дальше. */
    // ближе к стволу — поддерево, чья черта дальше от корня: старший уровень, при равном — позже в списке
    // (она же ниже по подстроке полосы); тогда горизонталь к детям не пересекает чужих стволов
    const innerFirst = (list) => (a, b) => byId.get(b).level - byId.get(a).level || list.indexOf(b) - list.indexOf(a);
    const lane = new Map();
    function allocate(id, start) {
        let next = start + 1;
        const list = kids.get(id);
        const withKids = list.filter((c) => kids.get(c).length).sort(innerFirst(list));
        for (const c of kids.get(id)) lane.set(c, start);
        for (const c of withKids) next += allocate(c, next);
        return next - start;
    }

    // колонны тем: черты у ствола делятся на стороны так, чтобы черт одного уровня на стороне было поменьше
    const hubs = themeOrder.filter((id) => byId.has(id));
    for (const n of nodes) if (n.kind === 'hub' && !hubs.includes(n.id)) hubs.push(n.id);
    const sideOf = new Map(), hubOf = new Map();
    const columns = hubs.map((hub) => {
        const sides = { [-1]: { items: [], lanes: 1, perLevel: new Map() }, [1]: { items: [], lanes: 1, perLevel: new Map() } };
        for (const c of kids.get(hub)) {
            const lv = byId.get(c).level;
            const cnt = (sd) => sides[sd].perLevel.get(lv) || 0;
            const side = cnt(1) !== cnt(-1) ? (cnt(1) < cnt(-1) ? 1 : -1)
                : sides[1].lanes !== sides[-1].lanes ? (sides[1].lanes < sides[-1].lanes ? 1 : -1)
                : (sides[1].items.length <= sides[-1].items.length ? 1 : -1);
            sides[side].items.push(c);
            sides[side].perLevel.set(lv, cnt(side) + 1);
            lane.set(c, 0);
        }
        for (const sd of [-1, 1]) {
            // поддеревья: старшие (дальние от корня) — ближе к стволу темы
            const items = sides[sd].items;
            const roots = items.filter((c) => kids.get(c).length).sort(innerFirst(items));
            let next = 1;
            for (const c of roots) next += allocate(c, next);
            sides[sd].lanes = next;
        }
        const mark = (id, sd) => { sideOf.set(id, sd); hubOf.set(id, hub); for (const c of kids.get(id)) mark(c, sd); };
        for (const sd of [-1, 1]) for (const c of sides[sd].items) mark(c, sd);
        const reach = (sd) => (sides[sd].items.length ? half + (sides[sd].lanes - 1) * G.STEP : 0) + G.CAPTION.feat.maxW / 2;
        return { hub, sides, left: reach(-1), right: reach(1) };
    });

    // Две полосы тем: первые растут от корня вверх, остальные — вниз.
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
        // строки полос уровней в этой половине дерева
        const bandHubs = new Set(band.cols.map((c) => c.hub));
        const feats = nodes.filter((n) => n.kind === 'feat' && bandHubs.has(hubOf.get(n.id)));
        const laneKey = (n) => `${hubOf.get(n.id)}|${sideOf.get(n.id)}|${lane.get(n.id)}`;
        const levelRows = new Map();   // уровень → строк в полосе
        const count = new Map();
        for (const n of feats) {
            const k = `${laneKey(n)}|${n.level}`;
            count.set(k, (count.get(k) || 0) + 1);
            levelRows.set(n.level, Math.max(levelRows.get(n.level) || 0, count.get(k)));
        }
        const levelStart = new Map();
        let rowCursor = 0;
        for (const lv of [...levelRows.keys()].sort((a, b) => a - b)) { levelStart.set(lv, rowCursor); rowCursor += levelRows.get(lv); }
        const subrow = new Map();
        const rowOf = (n) => {
            const k = `${laneKey(n)}|${n.level}`;
            const r = subrow.get(k) || 0;
            subrow.set(k, r + 1);
            return levelStart.get(n.level) + r;
        };

        let cursor = 0;
        for (const col of band.cols) { col.x = cursor + col.left; cursor = col.x + col.right + G.COL_GAP; }
        const shift = -(cursor - G.COL_GAP) / 2;
        const v = band.dir; // −1 — вверх от корня, +1 — вниз
        const busY = v * (G.HUB_Y - G.BUS_GAP);
        for (const col of band.cols) {
            const hx = col.x + shift, hy = v * G.HUB_Y;
            setPos(col.hub, hx, hy);
            paths.set(`root>${col.hub}`, [[0, 0], [0, busY], [hx, busY], [hx, hy]]);
            const laneX = (sd, l) => hx + sd * (half + l * G.STEP);
            const rowY = (r) => hy + v * (r + 1) * G.ROW;
            // черта и её поддерево: дорожка → x, полоса уровня (+ подстрока) → y
            const place = (id, sd) => {
                const n = byId.get(id);
                setPos(id, laneX(sd, lane.get(id)), rowY(rowOf(n)));
                for (const c of kids.get(id)) place(c, sd);
            };
            for (const sd of [-1, 1]) {
                for (const id of col.sides[sd].items) {
                    place(id, sd);
                    const n = byId.get(id);
                    paths.set(`${col.hub}>${id}`, [[hx, hy], [hx, n.y], [n.x, n.y]]);
                }
            }
            // связи черта → дети: вбок до короткого ствола перед колонкой детей, вдоль него, к ребёнку
            for (const id of [...col.sides[-1].items, ...col.sides[1].items]) {
                const walk = (pid) => {
                    const p = byId.get(pid);
                    for (const c of kids.get(pid)) {
                        const ch = byId.get(c), sd = sideOf.get(c);
                        const trunkX = ch.x - sd * half;
                        paths.set(`${pid}>${c}`, ch.y === p.y && lane.get(c) === lane.get(pid) + 1
                            ? [[p.x, p.y], [ch.x, ch.y]]
                            : [[p.x, p.y], [trunkX, p.y], [trunkX, ch.y], [ch.x, ch.y]]);
                        walk(c);
                    }
                };
                walk(id);
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
