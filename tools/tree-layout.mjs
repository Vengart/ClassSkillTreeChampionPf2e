// ============================================================
// Раскладка «дерево со стволами» (ветка tree-trunk): все ветки растут от корня вверх,
// у каждого уровня черт — одна строка на всё дерево.
//
//   ур.4    o   o       o─┐            ← черты одного уровня рядом по горизонтали
//           │ ┌─┘──────────┘  ← «рельс» в просвете над строкой ведёт к дальним колонкам
//   ур.2  o─┤   o─┐
//   ур.1    ├─o   │                    ← у цепочки свой ствол между колонками
//        [Метамагия]  [Бой]  [Связь]   ← темы
//   ────────┴────────┬──────           ← шина
//                 Корень
//
// Колонки (дорожки) считаются от ствола наружу по обе стороны темы. Связи — ломаные
// из горизонталей и вертикалей: вертикали идут по границам между дорожками (мимо узлов
// и подписей), горизонтали — по строке узла (только к соседней дорожке) или по рельсу
// над строкой. Всё детерминированно, без оптимизации. Подписи — под узлами.
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
    STEP: 200,      // шаг между дорожками; вертикали связей — посередине между ними (подпись ≤ 150 их не задевает)
    ROW: 130,       // шаг между строками уровней
    RAIL: 40,       // рельс — на столько выше центра узлов строки (между узлами и подписями строки выше)
    HUB_Y: 300,     // строка тем (над корнем)
    BUS_GAP: 110,   // шина под темами
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

    // ---------- строки: одна на уровень, общая для всего дерева ----------
    const featLevels = [...new Set(nodes.filter((n) => n.kind === 'feat').map((n) => n.level))].sort((a, b) => a - b);
    const rowOfLevel = new Map(featLevels.map((lv, i) => [lv, i]));
    const row = (id) => rowOfLevel.get(byId.get(id).level);
    const hy = -G.HUB_Y;
    const rowY = (r) => hy - (r + 1) * G.ROW;
    // рельс строки r; r = −1 — просвет между темой и первой строкой
    const railY = (r) => (r >= 0 ? rowY(r) - G.RAIL : (hy + rowY(0)) / 2);

    // ---------- дорожки ----------
    // Дорожка j стороны s: центр laneX(j); граница b — между дорожками b−1 и b (граница 0 — ствол темы).
    const lane = new Map(), sideOf = new Map(), railRow = new Map(), spineOf = new Map();
    /**
     * Дети одного родителя (темы или черты) раскладываются наружу от его ствола-границы spineB.
     * Цепочки (черты с детьми) — каждая в своём блоке дорожек, ближе к стволу — старшие: горизонталь
     * к младшей цепочке идёт ниже начала их стволов. Рельс цепочки (railRow) — не выше начала стволов
     * более близких цепочек.
     * Черты без детей: «высокие» (их строка не ниже рельса какой-нибудь цепочки) — во внутренние
     * дорожки перед цепочками; «низкие» занимают первую свободную клетку своей строки, в том числе
     * под блоками цепочек: их связь проходит ниже всех стволов, которые она пересекала бы.
     * Возвращает число занятых дорожек.
     */
    function layoutGroup(spineB, children, side, parentRow) {
        const plain = children.filter((c) => !kids.get(c).length);
        const chains = children.filter((c) => kids.get(c).length)
            .sort((x, y) => row(y) - row(x) || byId.get(x).name.localeCompare(byId.get(y).name, 'ru'));
        // рельсы цепочек не зависят от дорожек
        let lowestInner = Infinity;
        for (const c of chains) {
            railRow.set(c, Math.max(Math.min(row(c), lowestInner - 1), parentRow));
            lowestInner = Math.min(lowestInner, row(c));
        }
        const qMin = Math.min(Infinity, ...chains.map((c) => railRow.get(c)));
        const taken = new Set();                       // "дорожка|строка"
        const put = (c, j) => { lane.set(c, j); sideOf.set(c, side); railRow.set(c, row(c)); taken.add(`${j}|${row(c)}`); };
        // высокие черты без детей — внутрь
        const high = plain.filter((c) => row(c) >= qMin);
        const perRow = new Map();
        for (const c of high) { const k = perRow.get(row(c)) || 0; perRow.set(row(c), k + 1); put(c, spineB + k); }
        const inner = Math.max(0, ...perRow.values());
        // блоки цепочек
        let cursor = spineB + inner;
        const blocks = [];   // { from, q } — с дорожки from и выше строки рельса q всё занято цепочкой
        for (const c of chains) {
            lane.set(c, cursor); sideOf.set(c, side); spineOf.set(c, cursor + 1);
            taken.add(`${cursor}|${row(c)}`);
            blocks.push({ from: cursor, q: railRow.get(c) });
            const w = 1 + layoutGroup(cursor + 1, kids.get(c), side, row(c));
            for (let j = cursor; j < cursor + w; j++) for (let r = 0; r < featLevels.length; r++) {
                // клетки блока занимают его потомки — отметим занятые
                for (const d of descendants(c)) if (lane.get(d) === j && row(d) === r) taken.add(`${j}|${r}`);
            }
            cursor += w;
        }
        let width = cursor - spineB;
        // низкие черты без детей — в первую подходящую клетку своей строки
        for (const c of plain.filter((x) => row(x) < qMin)) {
            const r = row(c);
            let j = spineB;
            while (taken.has(`${j}|${r}`) || blocks.some((bl) => bl.from <= j && r >= bl.q)) j++;
            put(c, j);
            width = Math.max(width, j - spineB + 1);
        }
        return width;
    }
    const descCache = new Map();
    function descendants(id) {
        if (!descCache.has(id)) descCache.set(id, kids.get(id).flatMap((c) => [c, ...descendants(c)]));
        return descCache.get(id);
    }

    // колонны тем: цепочки — поочерёдно по сторонам (сначала старшие), черты без детей — туда,
    // где в их строке меньше черт
    const hubs = themeOrder.filter((id) => byId.has(id));
    for (const n of nodes) if (n.kind === 'hub' && !hubs.includes(n.id)) hubs.push(n.id);
    const columns = hubs.map((hub) => {
        const sides = { [-1]: [], [1]: [] };
        const perRow = { [-1]: new Map(), [1]: new Map() };
        const chainCount = { [-1]: 0, [1]: 0 };
        const children = kids.get(hub);
        for (const c of children.filter((x) => kids.get(x).length).sort((a, b) => row(b) - row(a))) {
            const sd = chainCount[1] < chainCount[-1] ? 1 : chainCount[-1] < chainCount[1] ? -1 : (sides[1].length <= sides[-1].length ? 1 : -1);
            sides[sd].push(c); chainCount[sd]++;
        }
        for (const c of children.filter((x) => !kids.get(x).length)) {
            const n1 = perRow[1].get(row(c)) || 0, n2 = perRow[-1].get(row(c)) || 0;
            const sd = n1 !== n2 ? (n1 < n2 ? 1 : -1) : (sides[1].length <= sides[-1].length ? 1 : -1);
            sides[sd].push(c);
            perRow[sd].set(row(c), (perRow[sd].get(row(c)) || 0) + 1);
        }
        const lanes = { [-1]: layoutGroup(0, sides[-1], -1, -1), [1]: layoutGroup(0, sides[1], 1, -1) };
        const reach = (sd) => (lanes[sd] ? half + (lanes[sd] - 1) * G.STEP : 0) + G.CAPTION.feat.maxW / 2;
        return { hub, sides, left: reach(-1), right: reach(1) };
    });

    // ---------- координаты и связи ----------
    setPos('root', 0, 0);
    let cursor = 0;
    for (const col of columns) { col.x = cursor + col.left; cursor = col.x + col.right + G.COL_GAP; }
    const shift = -(cursor - G.COL_GAP) / 2;
    const busY = -(G.HUB_Y - G.BUS_GAP);
    for (const col of columns) {
        const hx = col.x + shift;
        setPos(col.hub, hx, hy);
        paths.set(`root>${col.hub}`, [[0, 0], [0, busY], [hx, busY], [hx, hy]]);
        const laneX = (sd, j) => hx + sd * (half + j * G.STEP);
        const bX = (sd, b) => hx + sd * b * G.STEP;

        const place = (id) => {
            setPos(id, laneX(sideOf.get(id), lane.get(id)), rowY(row(id)));
            for (const c of kids.get(id)) place(c);
        };
        for (const sd of [-1, 1]) for (const id of col.sides[sd]) place(id);

        /** Связь от ствола-границы spineB (начиная с точки start) к черте c. */
        const route = (start, spineB, c) => {
            const sd = sideOf.get(c), n = byId.get(c);
            const sx = bX(sd, spineB), cb = lane.get(c);   // граница у ребёнка со стороны ствола
            const pts = [...start];
            if (cb === spineB) {
                pts.push([sx, n.y], [n.x, n.y]);           // соседняя дорожка — прямо по строке
            } else {
                const ry = railY(railRow.get(c));
                const cx = bX(sd, cb);
                pts.push([sx, ry], [cx, ry], [cx, n.y], [n.x, n.y]);
            }
            // убрать точки, лежащие на одной прямой с соседями
            return pts.filter((p, i) => {
                if (i === 0 || i === pts.length - 1) return true;
                const a = pts[i - 1], b = pts[i + 1];
                return !((a[0] === p[0] && p[0] === b[0]) || (a[1] === p[1] && p[1] === b[1]));
            });
        };
        const walk = (pid) => {
            const p = byId.get(pid), spineB = spineOf.get(pid);
            for (const c of kids.get(pid)) {
                const sx = bX(sideOf.get(c), spineB);
                paths.set(`${pid}>${c}`, route([[p.x, p.y], [sx, p.y]], spineB, c));
                if (kids.get(c).length) walk(c);
            }
        };
        for (const sd of [-1, 1]) {
            for (const id of col.sides[sd]) {
                paths.set(`${col.hub}>${id}`, route([[hx, hy]], 0, id));
                if (kids.get(id).length) walk(id);
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
