// ============================================================
// Раскладка «сетка уровни × ветки»: колонки — темы (ветки) с заголовками-плашками сверху,
// строки — уровни черт сверху вниз (1, 2, 4 … 20).
//
//   [Метамагия]     [Бой]          [Связь]        ← плашки тем (заголовки колонок)
//   │               │              │
//   ├─o             ├─o            │              ← строка уровня: черты колонки по дорожкам
//   │ ┌──────┐      │              ├─o
//   ├─o      │      ├─o─┐          │
//   │      o─┘      │   ├─o        │              ← у цепочки свой ствол между дорожками
//
// Колонка: ствол темы — левая граница, дорожки идут вправо. Связи — ломаные из горизонталей
// и вертикалей: вертикали — по границам между дорожками (мимо узлов и подписей), горизонтали —
// по строке узла (к соседней дорожке) или по «рельсу» в просвете над строкой.
// Всё детерминированно, без оптимизации. Подписи — под узлами. Корень на холсте не рисуется.
// ============================================================

export const GEOMETRY = {
    SIZE: { root: 0, hub: 32, feat: 36, group: 36, option: 36 },
    CAPTION: {
        feat: { fs: 13, maxW: 116, lines: 2 },
        option: { fs: 13, maxW: 116, lines: 2 },
    },
    CAPTION_GAP: 6,
    CHAR_W: 0.58,
    STEP: 140,      // ширина дорожки; вертикали связей — по границам дорожек (подпись ≤ 116 их не задевает)
    ROW: 104,       // шаг между строками уровней (подпись в 2–3 строки при отдалении не налезает на строку ниже)
    RAIL: 29,       // рельс — на столько выше центра узлов строки (между подписями строки выше и узлами)
    FIRST: 110,     // первая строка — ниже плашек тем
    COL_GAP: 36,    // промежуток между колонками
    AXIS_W: 64,     // место слева под подписи уровней
};
const G = GEOMETRY;

/** Порядок тем поборника слева направо: родственные рядом (другие классы передают свой). */
const THEME_ORDER = ['theme-cause', 'theme-sanct', 'theme-aura', 'theme-combat', 'theme-shield',
    'theme-blessing', 'theme-devotion', 'theme-faith', 'theme-steed'];

export function captionBox(n) {
    if (n.kind !== 'feat' && n.kind !== 'option') return { w: 0, h: 0 };
    const c = G.CAPTION[n.kind] || G.CAPTION.feat;
    const full = n.name.length * c.fs * G.CHAR_W;
    const lines = full <= c.maxW ? 1 : 2;
    return { w: Math.ceil(lines === 1 ? full : c.maxW), h: Math.ceil(lines * c.fs * 1.25) };
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

    // ---------- строки: одна на уровень ----------
    const featLevels = [...new Set(nodes.filter((n) => n.kind === 'feat').map((n) => n.level))].sort((a, b) => a - b);
    const rowOfLevel = new Map(featLevels.map((lv, i) => [lv, i]));
    const row = (id) => rowOfLevel.get(byId.get(id).level);
    const rowY = (r) => G.FIRST + r * G.ROW;
    // рельс строки r — в просвете над ней; рельс «над первой строкой» (r = −1) — между плашкой и строкой 0
    const railY = (r) => (r >= 0 ? rowY(r) - G.RAIL : rowY(0) / 2);

    // ---------- дорожки ----------
    // Дорожка j: центр laneX(j); граница b — между дорожками b−1 и b (граница 0 — ствол темы).
    // Связь к черте в дорожке ствола идёт прямо по строке; к дальней — по «рельсу» в просвете над
    // строкой черты (коридор от ствола), затем вниз по левой границе её дорожки.
    const lane = new Map(), railRow = new Map(), spineOf = new Map();
    const rel = new Map();   // дорожка относительно ствола родителя
    const NODE_TOP = G.SIZE.feat / 2 + 4;
    const CAP_BOTTOM = G.SIZE.feat / 2 + G.CAPTION_GAP + 2 * 13 * 1.25 + 2;
    /**
     * Дети одного родителя раскладываются вправо от его ствола. Каждый ребёнок — прямоугольник
     * «дорожки × высота»: черта без детей — одна дорожка, цепочка — блок из своей дорожки и дорожек
     * потомков; по высоте — от его строки до подписи нижнего потомка. Дети ставятся сверху вниз
     * в самую левую дорожку, где: прямоугольник не налезает на уже поставленные; его коридор
     * (рельс от ствола) не режет ни одного прямоугольника; ни один уже проложенный коридор не режет его.
     * Ставятся снизу вверх: рельс верхнего ребёнка тогда проходит над нижними и их не режет.
     * Черта без детей может встать прямо под родителем-чертой (underParent): связь идёт от ствола
     * родителя влево по её строке. Так цепочки разных уровней делят дорожки, и колонка остаётся узкой.
     * Возвращает { width, maxRow }.
     */
    function layoutGroup(children, parentRow, underParent = false) {
        const items = [...children].sort((x, y) => row(y) - row(x)
            || kids.get(y).length - kids.get(x).length || byId.get(x).name.localeCompare(byId.get(y).name, 'ru'));
        // родитель-черта занимает свою дорожку (−1 относительно своего ствола) на своей строке
        const placed = underParent ? [{ L: -1, w: 1, corr: -Infinity, top: rowY(parentRow) - NODE_TOP,
            body: [rowY(parentRow) - NODE_TOP, rowY(parentRow) + CAP_BOTTOM] }] : [];
        const cut = (a0, a1, b0, b1) => a0 < b1 && b0 < a1;
        const within = (y, r) => y >= r[0] && y <= r[1];
        let width = 0, maxRow = -1;
        for (const c of items) {
            const sub = kids.get(c).length ? layoutGroup(kids.get(c), row(c), true) : { width: 0, maxRow: row(c) };
            const w = 1 + sub.width, bottom = Math.max(row(c), sub.maxRow);
            const body = [rowY(row(c)) - NODE_TOP, rowY(bottom) + CAP_BOTTOM];
            /** Можно ли поставить в дорожку L с рельсом в просвете над строкой q. */
            const fits = (L, q) => {
                const corr = railY(q), top = L > 0 ? corr - 2 : body[0];
                return !placed.some((p) =>
                    // прямоугольники (с вертикалью от рельса) налезают друг на друга
                    (cut(L, L + w, p.L, p.L + p.w) && cut(top, body[1], p.top, p.body[1]))
                    // наш рельс режет его прямоугольник или его вертикаль
                    || (L > 0 && ((cut(0, L, p.L, p.L + p.w) && within(corr, p.body))
                        || (p.L > 0 && p.L < L && corr > p.corr && corr < p.body[0])))
                    // его рельс режет наш прямоугольник или нашу вертикаль
                    || (p.L > 0 && ((cut(L, L + w, 0, p.L) && within(p.corr, body))
                        || (L > 0 && L < p.L && p.corr > corr && p.corr < body[0]))));
            };
            // самая левая дорожка; рельс — как можно ближе к строке черты, но не выше строки под родителем
            let L = underParent && !kids.get(c).length ? -1 : 0, q = row(c);
            for (;; L++) {
                if (L <= 0) { if (fits(L, q)) break; continue; }
                let ok = false;
                for (q = row(c); q >= Math.max(parentRow + 1, 0); q--) if (fits(L, q)) { ok = true; break; }
                if (ok) break;
            }
            const corr = railY(q);
            placed.push({ L, w, body, corr, top: L > 0 ? corr - 2 : body[0] });
            rel.set(c, L);
            railRow.set(c, q);
            width = Math.max(width, L + w);
            maxRow = Math.max(maxRow, bottom);
        }
        return { width, maxRow };
    }
    /** Абсолютные дорожки: дети черты считаются от дорожки справа от неё. */
    function resolve(children, base) {
        for (const c of children) {
            lane.set(c, base + rel.get(c));
            spineOf.set(c, lane.get(c) + 1);
            resolve(kids.get(c), lane.get(c) + 1);
        }
    }

    // ---------- колонки тем ----------
    const hubs = themeOrder.filter((id) => byId.has(id));
    for (const n of nodes) if (n.kind === 'hub' && !hubs.includes(n.id)) hubs.push(n.id);
    let cursorX = G.AXIS_W;
    const columns = hubs.map((hub) => {
        const lanes = Math.max(1, layoutGroup(kids.get(hub), -1).width);
        resolve(kids.get(hub), 0);
        const col = { id: hub, x: cursorX, w: lanes * G.STEP };
        cursorX += col.w + G.COL_GAP;
        return col;
    });

    // ---------- координаты и связи ----------
    for (const col of columns) {
        const hx = col.x;
        setPos(col.id, hx, 0);
        byId.get(col.id).plateW = col.w - 12;
        const laneX = (j) => hx + half + j * G.STEP;
        const bX = (b) => hx + b * G.STEP;
        const place = (id) => {
            setPos(id, laneX(lane.get(id)), rowY(row(id)));
            for (const c of kids.get(id)) place(c);
        };
        for (const id of kids.get(col.id)) place(id);

        /** Связь от ствола-границы spineB (начиная с точек start) к черте c. */
        const route = (start, spineB, c) => {
            const n = byId.get(c);
            const sx = bX(spineB), cb = lane.get(c);
            const pts = [...start];
            if (cb === spineB || cb === spineB - 1) pts.push([sx, n.y], [n.x, n.y]);
            else {
                const ry = railY(railRow.get(c)), cx = bX(cb);
                pts.push([sx, ry], [cx, ry], [cx, n.y], [n.x, n.y]);
            }
            return pts.filter((p, i) => {
                if (i === 0 || i === pts.length - 1) return true;
                const a = pts[i - 1], b = pts[i + 1];
                return !((a[0] === p[0] && p[0] === b[0]) || (a[1] === p[1] && p[1] === b[1]));
            });
        };
        const walk = (pid) => {
            const p = byId.get(pid), spineB = spineOf.get(pid);
            for (const c of kids.get(pid)) {
                paths.set(`${pid}>${c}`, route([[p.x, p.y], [bX(spineB), p.y]], spineB, c));
                if (kids.get(c).length) walk(c);
            }
        };
        for (const id of kids.get(col.id)) {
            paths.set(`${col.id}>${id}`, route([[hx, 0]], 0, id));
            if (kids.get(id).length) walk(id);
        }
    }

    // связи: основные — по ломаным; дополнительные (вторая черта-критерий) и корень → темы
    // на холсте не рисуются — они есть в подсказке
    const drawn = [];
    for (const e of edges) {
        const p = paths.get(`${e.from}>${e.to}`);
        if (p) drawn.push({ ...e, points: p });
    }
    edges.length = 0;
    edges.push(...drawn);

    for (const n of nodes) {
        if (n.kind === 'feat') { n.captionSide = 'below'; n.captionW = captionBox(n).w; }
    }

    const stats = checkLayout(nodes, drawn);
    const bounds = {
        minX: 0, maxX: cursorX - G.COL_GAP + 12,
        minY: -40, maxY: rowY(featLevels.length - 1) + G.ROW - 20,
    };
    const grid = {
        rows: featLevels.map((level, i) => ({ level, y: rowY(i) })),
        columns: columns.map((c) => ({ id: c.id, x: c.x, w: c.w })),
        rowH: G.ROW,
    };
    if (log) console.log(`  сетка: ${columns.length} веток × ${featLevels.length} уровней, ширина ${Math.round(bounds.maxX - bounds.minX)}px, ` +
        `высота ${Math.round(bounds.maxY - bounds.minY)}px; наложений узлов ${stats.overlaps}, ` +
        `задетых подписей ${stats.captions}, пересечений связей ${stats.crossings}`);
    return { stats, bounds, grid };
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
    const placed = nodes.filter((n) => (n.kind === 'feat' || n.kind === 'hub') && n.x !== undefined);
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
        if (n.kind !== 'feat') continue;
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
