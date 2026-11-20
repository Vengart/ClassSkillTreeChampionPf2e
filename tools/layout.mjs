// ============================================================
// Раскладка дерева: считается один раз при сборке графа,
// координаты записываются в data/champion-data.js.
//
// 1. Начальная раскладка — радиальное дерево: каждый узел лежит на
//    кольце своего уровня, ветка получает угловой сектор
//    пропорционально размеру поддерева.
// 2. Узлы ставятся на общую угловую сетку из GRID слотов: соседи на
//    любом кольце отстоят на одинаковый угол, а цепочка в одном слоте —
//    прямой луч от центра.
// 3. Оптимизация (имитация отжига): узлы переходят между слотами своего
//    кольца, подписи — между 8 позициями вокруг узла. Радиус = уровень,
//    он не меняется. Штрафы:
//      - узлы накладываются друг на друга;
//      - рёбра пересекаются;
//      - ребро проходит через чужой узел или подпись;
//      - острый излом цепочки родитель → узел → ребёнок;
//      - рёбра из одного узла выходят почти под одним углом (сливаются);
//      - разрывы между соседями одной ветки на кольце;
//      - длина рёбер и уход от «тематического» места (слабые).
// ============================================================

export const GEOMETRY = {
    SIZE: { root: 132, group: 90, option: 74, feature: 72, feat: 62 },
    R_GROUP: 160,   // группы и варианты на холсте не рисуются (карточки сверху),
    R_OPTION: 330,  // на этом кольце — классовые особенности (аура, блок щитом)
    R_FEAT0: 620,
    R_STEP: 205,
    // подписи под узлами: размер шрифта, макс. ширина строки, отступ от узла
    CAPTION: {
        root: { fs: 28, maxW: 260, lines: 1 },
        group: { fs: 19, maxW: 170, lines: 2 },
        option: { fs: 17, maxW: 170, lines: 2 },
        feature: { fs: 17, maxW: 170, lines: 2 },
        feat: { fs: 15, maxW: 150, lines: 2 },
    },
    CAPTION_GAP: 8,
    CHAR_W: 0.7, // ширина символа в долях кегля с запасом (замерено в браузере: до 0.67)
    FEAT_LEVELS: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    LABEL_GAP: 0.12, // зазор сверху под подписи уровней (рад)
};

const G = GEOMETRY;
export const featRadius = (level) => G.R_FEAT0 + (level <= 1 ? 0 : Math.ceil(level / 2)) * G.R_STEP;

function nodeRadius(n) {
    if (n.kind === 'root') return 0;
    if (n.kind === 'group') return G.R_GROUP;
    if (n.kind === 'option' || n.kind === 'feature') return G.R_OPTION;
    return featRadius(n.level);
}

/** Порядок секторов вокруг центра (тематические группы рядом). */
const ROOT_ORDER = [
    'group-sanct', 'feat-7520', 'feat-7521', 'feat-7525', 'feat-7526', 'feat-5931',
    'group-cause', 'feat-5915',
    'feat-5884', 'feat-5883', 'group-devotion',
    'feat-5892', 'feat-5893', 'feature-aura', 'feat-5922', 'feat-7524',
    'shield-block', 'feat-5882', 'feat-5917',
    'group-blessing',
    'feat-7518', 'feat-7517', 'feat-7519', 'feat-5832', 'feat-5901',
];

/** Черты без критериев кладём рядом с их темой (связь не рисуется). */
const LAYOUT_ANCHOR = {
    'feat-7520': 'sanct-holy', 'feat-7525': 'sanct-holy',
    'feat-7521': 'sanct-unholy', 'feat-7526': 'sanct-unholy',
    'feat-5882': 'shield-block', 'feat-5917': 'shield-block',
    'feat-5915': 'group-cause',
    'feat-7596': 'feat-5883',
    // скакун рядом с «Возложением рук» — их соединяет «Исцеление скакуна»
    'feat-5885': 'spell-2047',
    'feat-5832': 'group-cause', 'feat-5901': 'group-cause',
};

const KIND_RANK = { feat: 4, feature: 3, option: 2, group: 1, root: 0 };

function primaryParent(n, byId) {
    if (n.kind === 'root') return null;
    if (n.kind === 'group' || n.kind === 'feature') return 'root';
    if (n.kind === 'option') return n.group;
    const req = n.requires || [];
    if (!req.length) return LAYOUT_ANCHOR[n.id] || 'root';
    const cands = req.map((clause) => {
        if (clause.length > 1) {
            const groups = new Set(clause.map((id) => byId.get(id)?.group).filter(Boolean));
            if (groups.size === 1) return [...groups][0];
        }
        return clause[0];
    });
    cands.sort((a, b) => {
        const A = byId.get(a), B = byId.get(b);
        return (KIND_RANK[B.kind] - KIND_RANK[A.kind]) || (B.level - A.level);
    });
    return cands[0];
}

/**
 * Группы выбора и их варианты (освящение, призвание, заклинание преданности,
 * благословение) вынесены карточками в верхнюю панель — на холсте их нет.
 */
export const isCardNode = (n) => n.kind === 'group' || n.kind === 'option';

/** Какие связи рисуются (и участвуют в раскладке). */
export function drawnEdges(nodes, edges) {
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const out = [];
    for (const e of edges) {
        const from = byId.get(e.from), to = byId.get(e.to);
        // связи с карточками не рисуются: требование показывается значком на узле
        if (isCardNode(from) || isCardNode(to)) continue;
        out.push({ ...e, primary: to.parentId === e.from });
    }
    return out;
}

// ---------- начальная раскладка ----------

function initialLayout(nodes) {
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const children = new Map(nodes.map((n) => [n.id, []]));
    for (const n of nodes) {
        n.parentId = primaryParent(n, byId);
        if (n.parentId) children.get(n.parentId).push(n.id);
    }
    const wCache = new Map();
    const weight = (id) => {
        if (wCache.has(id)) return wCache.get(id);
        const n = byId.get(id);
        // карточки на холсте не стоят — сектор определяется только видимыми чертами
        const minW = isCardNode(n) ? 0 : 1;
        const w = Math.max(minW, children.get(id).reduce((s, c) => s + weight(c), 0));
        wCache.set(id, w);
        return w;
    };
    const orderIdx = (id) => { const i = ROOT_ORDER.indexOf(id); return i < 0 ? 999 : i; };
    for (const [id, list] of children) {
        list.sort((a, b) => {
            if (id === 'root') return orderIdx(a) - orderIdx(b) || byId.get(a).level - byId.get(b).level;
            const A = byId.get(a), B = byId.get(b);
            return A.level - B.level || A.name.localeCompare(B.name, 'ru');
        });
        if (id !== 'root' && list.length > 2) {
            const sorted = [...list].sort((a, b) => weight(b) - weight(a));
            const mid = [];
            sorted.forEach((x, i) => (i % 2 ? mid.push(x) : mid.unshift(x)));
            list.splice(0, list.length, ...mid);
        }
    }
    const assign = (id, a0, a1) => {
        const n = byId.get(id);
        n.angle = (a0 + a1) / 2;
        n.r = nodeRadius(n);
        const ch = children.get(id);
        const total = ch.reduce((s, c) => s + weight(c), 0);
        let a = a0;
        for (const c of ch) {
            const span = total ? (a1 - a0) * weight(c) / total : 0;
            assign(c, a, a + span);
            a += span;
        }
    };
    const start = -Math.PI / 2 + G.LABEL_GAP / 2;
    assign('root', start, start + Math.PI * 2 - G.LABEL_GAP);
}

// ---------- оптимизация ----------

/** Детерминированный ГПСЧ, чтобы раскладка не «прыгала» между сборками. */
function rng(seed) {
    let s = seed >>> 0;
    return () => {
        s = (s + 0x6D2B79F5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function segIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
    const d1 = (dx - cx) * (ay - cy) - (dy - cy) * (ax - cx);
    const d2 = (dx - cx) * (by - cy) - (dy - cy) * (bx - cx);
    const d3 = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    const d4 = (bx - ax) * (dy - ay) - (by - ay) * (dx - ax);
    return ((d1 > 0) !== (d2 > 0)) && ((d3 > 0) !== (d4 > 0));
}

function pointSegDist(px, py, ax, ay, bx, by) {
    const vx = bx - ax, vy = by - ay;
    const len2 = vx * vx + vy * vy || 1;
    let t = ((px - ax) * vx + (py - ay) * vy) / len2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
}

/** Размер прямоугольника подписи узла (как в CSS: перенос по maxW). */
export function captionBox(n) {
    if (n.kind === 'root') return { w: 0, h: 0 };
    const c = G.CAPTION[n.kind] || G.CAPTION.feat;
    const full = n.name.length * c.fs * G.CHAR_W;
    // в одну строку — по длине текста, иначе две строки во всю maxW.
    // Приложение задаёт подписи ровно эту ширину, так что отрисовка совпадает с расчётом.
    const lines = full <= c.maxW ? 1 : 2;
    const w = Math.ceil(lines === 1 ? full : c.maxW);
    return { w, h: Math.ceil(lines * c.fs * 1.15) };
}

function segRect(ax, ay, bx, by, x0, y0, x1, y1) {
    // отсечение Лианга — Барски
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

function rectCircle(x0, y0, x1, y1, cx, cy, rad) {
    const nx = Math.max(x0, Math.min(cx, x1)), ny = Math.max(y0, Math.min(cy, y1));
    return Math.hypot(cx - nx, cy - ny) < rad;
}

const W = {
    overlap: 40,       // за пиксель нехватки зазора (в квадрате)
    cross: 9000,       // пересечение двух рёбер
    crossSecondary: 1500,
    through: 3000,     // ребро проходит через узел
    throughPx: 20,     // + за пиксель нехватки зазора
    angle: 2500,       // рёбра из узла сливаются
    length: 0.6,       // за пиксель длины ребра
    anchor: 400,       // уход от исходного угла (за рад^2)
    even: Number(process.env.LAYOUT_EVEN || 600),  // разрыв между соседями одной ветки (за лишний слот^2)
    gap: Number(process.env.LAYOUT_GAP || 8000),   // пустота на кольце (за долю идеального шага^2)
    balance: Number(process.env.LAYOUT_BAL || 1500), // смещение центра тяжести (за 100px^2)
    bend: 9000,        // излом цепочки: за (лишний угол / 90°)^2
    caption: 2500,     // ребро / узел / другая подпись поверх подписи
};
const NODE_GAP = 56;      // минимальный зазор между краями узлов
const EDGE_CLEAR = 24;    // минимальный зазор между ребром и чужим узлом
const CAP_PAD = 8;        // поля вокруг подписи
const MIN_EDGE_ANGLE = 0.26; // ~15° между рёбрами из одного узла
export const SIDES = ['below', 'above', 'right', 'left', 'below-right', 'below-left', 'above-right', 'above-left'];
const GRID = Number(process.env.LAYOUT_GRID || 40); // число угловых слотов на окружности
const GAP_MAX = Number(process.env.LAYOUT_GAPMAX || 1.8); // допустимый промежуток на кольце, в идеальных шагах 2π/m
const BEND_OK = 0.3;         // ~17°: такой излом цепочки ещё считается «прямой»

export function computeLayout(nodes, edges, { seeds = [21, 2, 13], ...opts } = {}) {
    let best = null;
    for (const seed of seeds) {
        const res = computeLayoutOnce(nodes, edges, { ...opts, seed, log: !!process.env.LAYOUT_DEBUG });
        const score = res.stats.overlaps * 1000 + res.stats.through * 100 + res.stats.crossings * 10 + res.stats.captions * 10 + res.stats.bends * 3 + res.stats.unevenness + Math.max(0, res.stats.maxGap - GAP_MAX) * 20 + res.stats.offset / 10;
        if (!best || score < best.score) best = { score, seed, pos: nodes.map((n) => [n.angle, n.x, n.y, n.captionSide]), res };
        if (score === 0) break; // идеальная раскладка — дальше не ищем
    }
    nodes.forEach((n, i) => { [n.angle, n.x, n.y, n.captionSide] = best.pos[i]; });
    if (opts.log) console.log(`  раскладка (seed ${best.seed}): пересечений ${best.res.stats.crossings}, рёбер через узлы ${best.res.stats.through}, наложений ${best.res.stats.overlaps}, задетых подписей ${best.res.stats.captions}, изломов > 45° ${best.res.stats.bends} (макс. ${best.res.stats.maxBend}°), разрывов в ветках ${best.res.stats.unevenness}, макс. пустота ${best.res.stats.maxGap} шага, смещение центра ${best.res.stats.offset}px`);
    return best.res;
}

function computeLayoutOnce(nodes, edges, { iterations = 600000, seed = 7, log = false } = {}) {
    initialLayout(nodes);
    const E = drawnEdges(nodes, edges);
    const N = nodes.length;
    const idx = new Map(nodes.map((n, i) => [n.id, i]));
    const hidden = nodes.map(isCardNode);
    const active = []; // узлы, которые есть на холсте
    nodes.forEach((n, i) => { if (!hidden[i]) active.push(i); });
    const size = nodes.map((n) => G.SIZE[n.kind] || 54);
    const r = nodes.map((n) => n.r);
    const ang = nodes.map((n) => n.angle);
    const ang0 = ang.slice();
    const fixed = nodes.map((n, i) => n.kind === 'root' || hidden[i]);
    const x = new Float64Array(N), y = new Float64Array(N);
    // сторона подписи — индекс в SIDES (снизу, сверху, справа, слева и четыре диагонали)
    const side = new Uint8Array(N);
    const cap = nodes.map((n, i) => (hidden[i] ? { w: 0, h: 0 } : captionBox(n)));
    const cr = new Float64Array(N * 4); // прямоугольники подписей (с полями)
    const updCap = (i) => {
        const w = cap[i].w, h = cap[i].h, s2 = size[i] / 2 + G.CAPTION_GAP, o = i * 4;
        const d45 = (size[i] / 2) * Math.SQRT1_2 + G.CAPTION_GAP / 2;
        if (!w) { cr[o] = cr[o + 1] = cr[o + 2] = cr[o + 3] = 1e9; return; }
        let x0, y0;
        switch (side[i]) {
            case 0: x0 = x[i] - w / 2; y0 = y[i] + s2; break;
            case 1: x0 = x[i] - w / 2; y0 = y[i] - s2 - h; break;
            case 2: x0 = x[i] + s2; y0 = y[i] - h / 2; break;
            case 3: x0 = x[i] - s2 - w; y0 = y[i] - h / 2; break;
            // по диагонали: от точки на рамке узла под 45°
            case 4: x0 = x[i] + d45; y0 = y[i] + d45; break;          // снизу справа
            case 5: x0 = x[i] - d45 - w; y0 = y[i] + d45; break;      // снизу слева
            case 6: x0 = x[i] + d45; y0 = y[i] - d45 - h; break;      // сверху справа
            default: x0 = x[i] - d45 - w; y0 = y[i] - d45 - h;        // сверху слева
        }
        cr[o] = x0 - CAP_PAD; cr[o + 1] = y0 - CAP_PAD; cr[o + 2] = x0 + w + CAP_PAD; cr[o + 3] = y0 + h + CAP_PAD;
    };
    const place = (i) => { x[i] = Math.cos(ang[i]) * r[i]; y[i] = Math.sin(ang[i]) * r[i]; updCap(i); };
    for (let i = 0; i < N; i++) place(i);

    const ea = E.map((e) => idx.get(e.from));
    const eb = E.map((e) => idx.get(e.to));
    const ew = E.map((e) => (e.primary ? W.cross : W.crossSecondary));
    const incident = Array.from({ length: N }, () => []);
    E.forEach((_, k) => { incident[ea[k]].push(k); incident[eb[k]].push(k); });
    const ringOf = r.map((ri) => Math.round(ri));
    const capRect = (i) => [cr[i * 4], cr[i * 4 + 1], cr[i * 4 + 2], cr[i * 4 + 3]];
    // отрезок ребра без частей, спрятанных под узлами
    const edgeSeg = (k) => {
        const a = ea[k], b = eb[k];
        const dx = x[b] - x[a], dy = y[b] - y[a], len = Math.hypot(dx, dy) || 1;
        const ra = size[a] / 2, rb = size[b] / 2;
        return [x[a] + dx / len * ra, y[a] + dy / len * ra, x[b] - dx / len * rb, y[b] - dy / len * rb];
    };
    function captionTerms(i) {
        // подпись узла i против всех узлов, подписей и рёбер (+ подписи других против узла i)
        let c = 0;
        const [x0, y0, x1, y1] = capRect(i);
        for (const j of active) {
            if (j === i) continue;
            if (Math.abs(r[j] - r[i]) > 700) continue;
            if (rectCircle(x0, y0, x1, y1, x[j], y[j], size[j] / 2)) c += W.caption;
            const [u0, v0, u1, v1] = capRect(j);
            if (rectCircle(u0, v0, u1, v1, x[i], y[i], size[i] / 2)) c += W.caption;
            if (x0 < u1 && u0 < x1 && y0 < v1 && v0 < y1) c += W.caption;
        }
        for (let k = 0; k < E.length; k++) {
            const sgm = edgeSeg(k);
            if (segRect(sgm[0], sgm[1], sgm[2], sgm[3], x0, y0, x1, y1)) c += W.caption;
        }
        return c;
    }

    // --- слагаемые, в которых участвует узел i ---
    function nodeTerms(i) {
        let c = 0;
        // наложение узлов
        for (const j of active) {
            if (j === i) continue;
            if (Math.abs(r[j] - r[i]) > 300) continue;
            const need = (size[i] + size[j]) / 2 + NODE_GAP;
            const d = Math.hypot(x[i] - x[j], y[i] - y[j]);
            if (d < need) c += W.overlap * (need - d) ** 2;
        }
        // чужие рёбра поверх узла i
        for (let k = 0; k < E.length; k++) {
            if (ea[k] === i || eb[k] === i) continue;
            const need = size[i] / 2 + EDGE_CLEAR;
            const d = pointSegDist(x[i], y[i], x[ea[k]], y[ea[k]], x[eb[k]], y[eb[k]]);
            if (d < need) c += W.through + W.throughPx * (need - d) ** 2;
        }
        // привязка к теме
        const da = Math.atan2(Math.sin(ang[i] - ang0[i]), Math.cos(ang[i] - ang0[i]));
        c += W.anchor * da * da;
        c += captionTerms(i);
        return c;
    }

    function edgeTerms(k, skip) {
        let c = 0;
        const a = ea[k], b = eb[k];
        const ax = x[a], ay = y[a], bx = x[b], by = y[b];
        c += W.length * Math.hypot(bx - ax, by - ay);
        // пересечения с другими рёбрами
        for (let m = 0; m < E.length; m++) {
            if (m === k || skip?.has(m)) continue;
            const c1 = ea[m], d1 = eb[m];
            if (c1 === a || c1 === b || d1 === a || d1 === b) continue;
            if (segIntersect(ax, ay, bx, by, x[c1], y[c1], x[d1], y[d1])) c += Math.max(ew[k], ew[m]);
        }
        // ребро поверх чужих узлов
        for (const j of active) {
            if (j === a || j === b) continue;
            const need = size[j] / 2 + EDGE_CLEAR;
            const d = pointSegDist(x[j], y[j], ax, ay, bx, by);
            if (d < need) c += W.through + W.throughPx * (need - d) ** 2;
        }
        // ребро поверх подписей
        const sgm = edgeSeg(k);
        for (const j of active) {
            const [x0, y0, x1, y1] = capRect(j);
            if (segRect(sgm[0], sgm[1], sgm[2], sgm[3], x0, y0, x1, y1)) c += W.caption;
        }
        return c;
    }

    function angleTerms(i) {
        // рёбра, выходящие из узла i, не должны сливаться
        const inc = incident[i];
        if (inc.length < 2) return 0;
        const dirs = inc.map((k) => {
            const o = ea[k] === i ? eb[k] : ea[k];
            return Math.atan2(y[o] - y[i], x[o] - x[i]);
        });
        let c = 0;
        for (let p = 0; p < dirs.length; p++) {
            for (let q = p + 1; q < dirs.length; q++) {
                const d = Math.abs(Math.atan2(Math.sin(dirs[p] - dirs[q]), Math.cos(dirs[p] - dirs[q])));
                if (d < MIN_EDGE_ANGLE) c += W.angle * (1 - d / MIN_EDGE_ANGLE);
            }
        }
        return c;
    }

    // основной родитель узла (входящее основное ребро) и основные дети
    const parentEdge = new Int32Array(N).fill(-1);
    const childEdges = Array.from({ length: N }, () => []);
    E.forEach((e, k) => {
        if (!e.primary) return;
        if (parentEdge[eb[k]] < 0) parentEdge[eb[k]] = k;
        childEdges[ea[k]].push(k);
    });
    const bendable = nodes.map((n) => n.kind !== 'root' && n.kind !== 'group');
    const turnAt = (v, k) => {
        const p = ea[parentEdge[v]], c = eb[k];
        const a1 = Math.atan2(y[v] - y[p], x[v] - x[p]);
        const a2 = Math.atan2(y[c] - y[v], x[c] - x[v]);
        return Math.abs(Math.atan2(Math.sin(a2 - a1), Math.cos(a2 - a1)));
    };
    function bendTerms(v) {
        // цепочка родитель → v → ребёнок должна идти почти по прямой
        if (!bendable[v] || parentEdge[v] < 0) return 0;
        let c = 0;
        for (const k of childEdges[v]) {
            const t = turnAt(v, k);
            if (t > BEND_OK) c += W.bend * ((t - BEND_OK) / (Math.PI / 2)) ** 2;
        }
        return c;
    }

    // Равномерность «внутри ветки»: соседние на кольце узлы одной ветки
    // стоят ровно через BRANCH_STEP пикселей дуги; между разными ветками —
    // не ближе этого шага (больше — можно, это промежуток между ветками).
    const branch = nodes.map((n) => {
        let cur = n;
        while (cur.parentId && cur.parentId !== 'root') cur = nodes[idx.get(cur.parentId)];
        return cur.id;
    });
    const SLOT = (2 * Math.PI) / GRID;
    const slot = new Int32Array(N);
    const slotAngle = (k) => -Math.PI / 2 + (k + 0.5) * SLOT;
    const ringList = new Map();
    for (let i = 0; i < N; i++) if (!fixed[i]) { if (!ringList.has(ringOf[i])) ringList.set(ringOf[i], []); ringList.get(ringOf[i]).push(i); }
    // минимальный шаг в слотах, при котором узлы кольца не накладываются
    const ringMinSlots = new Map();
    for (const [key, list] of ringList) {
        const need = Math.max(...list.map((i) => size[i])) + NODE_GAP;
        ringMinSlots.set(key, Math.max(1, Math.ceil(need / (SLOT * r[list[0]]))));
    }
    const norm = (v) => ((v % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    function ringPairs(key) {
        const list = ringList.get(key).slice().sort((p, q) => norm(ang[p]) - norm(ang[q]));
        return list.map((i, k) => {
            const j = list[(k + 1) % list.length];
            let g = norm(ang[j]) - norm(ang[i]);
            if (k + 1 >= list.length) g += 2 * Math.PI;
            return { i, j, g, same: branch[i] === branch[j] };
        });
    }
    function evenRing(key) {
        // соседи одной ветки на кольце — через минимально возможное число слотов
        const list = ringList.get(key);
        if (!list || list.length < 2) return 0;
        const minGap = ringMinSlots.get(key);
        let c = 0;
        // кольцо должно быть заполнено равномерно: промежуток больше
        // GAP_MAX × (2π/m) — пустота, штраф растёт квадратично
        const ideal = (2 * Math.PI) / list.length;
        let g2 = 0;
        for (const p of ringPairs(key)) {
            if (p.g > GAP_MAX * ideal) g2 += ((p.g - GAP_MAX * ideal) / ideal) ** 2;
            if (!p.same) continue;
            const gs = Math.round(p.g / SLOT);
            if (gs > minGap) c += (gs - minGap) ** 2;
        }
        return W.even * c + W.gap * g2;
    }

    // общий баланс: «центр тяжести» узлов холста — в центре дерева
    let sumX = 0, sumY = 0;
    const balanceTerm = () => {
        let bx = 0, by = 0;
        for (const i of active) { bx += x[i]; by += y[i]; }
        sumX = bx; sumY = by;
        const d = Math.hypot(bx, by) / active.length;
        return W.balance * (d / 100) ** 2;
    };

    /** Все слагаемые, затрагиваемые перемещением набора узлов. */
    function localCost(set) {
        let c = 0;
        const edgesTouched = new Set();
        const angleNodes = new Set();
        for (const i of set) {
            c += nodeTerms(i);
            for (const k of incident[i]) {
                edgesTouched.add(k);
                angleNodes.add(ea[k]); angleNodes.add(eb[k]);
            }
        }
        const done = new Set();
        for (const k of edgesTouched) { c += edgeTerms(k, done); done.add(k); }
        for (const i of angleNodes) c += angleTerms(i) + bendTerms(i);
        const ringsTouched = new Set();
        for (const i of set) if (!fixed[i]) ringsTouched.add(ringOf[i]);
        for (const key of ringsTouched) c += evenRing(key);
        c += balanceTerm();
        return c;
    }

    function totalStats() {
        let crossings = 0, through = 0, overlaps = 0;
        for (let k = 0; k < E.length; k++) {
            for (let m = k + 1; m < E.length; m++) {
                const a = ea[k], b = eb[k], c1 = ea[m], d1 = eb[m];
                if (c1 === a || c1 === b || d1 === a || d1 === b) continue;
                if (segIntersect(x[a], y[a], x[b], y[b], x[c1], y[c1], x[d1], y[d1])) crossings++;
            }
            for (const j of active) {
                if (j === ea[k] || j === eb[k]) continue;
                if (pointSegDist(x[j], y[j], x[ea[k]], y[ea[k]], x[eb[k]], y[eb[k]]) < size[j] / 2 + 4) through++;
            }
        }
        for (const i of active) {
            for (const j of active) {
                if (j <= i) continue;
                if (Math.hypot(x[i] - x[j], y[i] - y[j]) < (size[i] + size[j]) / 2 + 6) overlaps++;
            }
        }
        // подписи, которые задевает ребро, узел или другая подпись (без полей)
        let captions = 0;
        const tight = (i) => { const o = i * 4; return [cr[o] + CAP_PAD, cr[o + 1] + CAP_PAD, cr[o + 2] - CAP_PAD, cr[o + 3] - CAP_PAD]; };
        for (const i of active) {
            if (!cap[i].w) continue;
            const [x0, y0, x1, y1] = tight(i);
            let hit = false;
            for (let k = 0; k < E.length && !hit; k++) { const g = edgeSeg(k); hit = segRect(g[0], g[1], g[2], g[3], x0, y0, x1, y1); }
            for (let j = 0; j < N && !hit; j++) {
                if (j === i || hidden[j]) continue;
                const [u0, v0, u1, v1] = tight(j);
                hit = rectCircle(x0, y0, x1, y1, x[j], y[j], size[j] / 2) || (x0 < u1 && u0 < x1 && y0 < v1 && v0 < y1);
            }
            if (hit) { captions++; if (process.env.LAYOUT_DEBUG) console.log('    подпись задета:', nodes[i].name); }
        }
        // острые изломы цепочек (> 45°)
        let bends = 0, maxBend = 0;
        for (let v = 0; v < N; v++) {
            if (!bendable[v] || parentEdge[v] < 0) continue;
            for (const k of childEdges[v]) {
                const t = turnAt(v, k);
                maxBend = Math.max(maxBend, t);
                if (t > Math.PI / 4) { bends++; if (process.env.LAYOUT_DEBUG) console.log('    излом:', nodes[ea[parentEdge[v]]].name, '→', nodes[v].name, '→', nodes[eb[k]].name, Math.round(t * 180 / Math.PI) + '°'); }
            }
        }
        // разрывы внутри веток: соседи одной ветки дальше минимального шага
        let unevenness = 0;
        for (const key of ringList.keys()) {
            if (ringList.get(key).length < 2) continue;
            for (const p of ringPairs(key)) if (p.same && Math.round(p.g / SLOT) > ringMinSlots.get(key)) unevenness++;
        }
        // пустоты: худшее отношение промежутка на кольце к идеальному шагу 2π/m
        let maxGap = 0;
        for (const key of ringList.keys()) {
            const m = ringList.get(key).length;
            if (m < 2) continue;
            for (const p of ringPairs(key)) maxGap = Math.max(maxGap, p.g / ((2 * Math.PI) / m));
        }
        balanceTerm();
        const offset = Math.round(Math.hypot(sumX, sumY) / active.length);
        return { crossings, through, overlaps, captions, bends, maxBend: Math.round(maxBend * 180 / Math.PI), unevenness,
            maxGap: +maxGap.toFixed(2), offset };
    }

    const rand = rng(seed);
    const movable = [];
    for (let i = 0; i < N; i++) if (!fixed[i]) movable.push(i);
    const byRing = new Map();
    for (const i of movable) {
        if (!byRing.has(ringOf[i])) byRing.set(ringOf[i], []);
        byRing.get(ringOf[i]).push(i);
    }
    const rings = [...byRing.values()];

    // Угловая сетка: все узлы стоят в слотах шириной 2π/GRID. Соседи на кольце —
    // на одинаковом шаге, цепочка в одном слоте — прямой луч от центра.
    const occupied = new Map(); // "кольцо:слот" → узел
    const key2 = (i, k) => ringOf[i] + ':' + k;
    const setSlot = (i, k) => { slot[i] = k; ang[i] = slotAngle(k); place(i); occupied.set(key2(i, k), i); };
    const norm2 = (k) => ((k % GRID) + GRID) % GRID;
    for (const i of movable.slice().sort((p, q) => r[p] - r[q])) {
        let k0 = Math.round((norm(ang[i] + Math.PI / 2) / SLOT) - 0.5);
        for (let dk = 0; dk < GRID; dk++) {
            const k = norm2(k0 + (dk % 2 ? (dk + 1) / 2 : -dk / 2));
            if (!occupied.has(key2(i, k))) { setSlot(i, k); break; }
        }
    }
    const before = totalStats();

    const T0 = 3000, T1 = 0.5;
    for (let it = 0; it < iterations; it++) {
        const t = it / iterations;
        const T = T0 * Math.pow(T1 / T0, t);
        if (rand() < 0.12) {
            // перенос подписи на другую сторону узла
            const f = (rand() * N) | 0;
            const old = side[f];
            const c0 = localCost([f]);
            side[f] = (old + 1 + ((rand() * (SIDES.length - 1)) | 0)) % SIDES.length; updCap(f);
            const c1 = localCost([f]);
            if (c1 > c0 && rand() >= Math.exp((c0 - c1) / T)) { side[f] = old; updCap(f); }
            continue;
        }
        // перенос узла в другой слот своего кольца (занятый — обмен)
        const i = movable[(rand() * movable.length) | 0];
        const reach = rand() < 0.8 ? 1 + ((rand() * Math.max(2, 6 * (1 - t))) | 0) : (rand() * GRID) | 0;
        const kNew = norm2(slot[i] + (rand() < 0.5 ? reach : -reach));
        if (kNew === slot[i]) continue;
        const j = occupied.get(key2(i, kNew));
        const set = j === undefined ? [i] : [i, j];
        const kOld = slot[i];
        const c0 = localCost(set);
        occupied.delete(key2(i, kOld));
        if (j !== undefined) { occupied.delete(key2(j, kNew)); setSlot(j, kOld); }
        setSlot(i, kNew);
        const c1 = localCost(set);
        if (c1 > c0 && rand() >= Math.exp((c0 - c1) / T)) {
            occupied.delete(key2(i, kNew));
            if (j !== undefined) { occupied.delete(key2(j, kOld)); setSlot(j, kNew); }
            setSlot(i, kOld);
        }
    }

    const after = totalStats();
    if (log) console.log(`  раскладка: пересечений ${before.crossings} → ${after.crossings}, ` +
        `рёбер через узлы ${before.through} → ${after.through}, наложений ${before.overlaps} → ${after.overlaps}`);

    nodes.forEach((n, i) => {
        n.angle = +ang[i].toFixed(5);
        n.x = +x[i].toFixed(1);
        n.y = +y[i].toFixed(1);
        n.captionSide = SIDES[side[i]];
        n.captionW = cap[i].w;
    });
    if (log) {
        const nm = (i) => nodes[i].name;
        for (let k = 0; k < E.length; k++) for (let m = k + 1; m < E.length; m++) {
            const a = ea[k], b = eb[k], c1 = ea[m], d1 = eb[m];
            if (c1 === a || c1 === b || d1 === a || d1 === b) continue;
            if (segIntersect(x[a], y[a], x[b], y[b], x[c1], y[c1], x[d1], y[d1]))
                console.log(`    × ${nm(a)}→${nm(b)}${E[k].primary ? '' : '*'}  /  ${nm(c1)}→${nm(d1)}${E[m].primary ? '' : '*'}`);
        }
    }
    return { edges: E, stats: after };
}
