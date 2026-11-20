'use strict';
// ============================================================
// Дерево черт Поборника (PF2e) в духе пассивного дерева PoE2.
// Данные: data/champion-data.js (генерируется tools/fetch-pf2.mjs)
// ============================================================

const DATA = window.CHAMPION_DATA;
const NODES = new Map(DATA.nodes.map((n) => [n.id, n]));
const EDGES = DATA.edges;
const STORAGE_KEY = 'pf2e-champion-build-v2';

// ---------- геометрия ----------
// Координаты узлов посчитаны заранее (tools/layout.mjs): без наложений
// узлов, без пересечений рёбер и без рёбер поверх чужих узлов.

const GEO = DATA.meta.geometry;
const { SIZE, R_GROUP, R_OPTION, FEAT_LEVELS } = GEO;
const featRadius = (level) => GEO.R_FEAT0 + (level <= 1 ? 0 : Math.ceil(level / 2)) * GEO.R_STEP;
const sizeOf = (n) => SIZE[n.kind] || 54;

// ---------- состояние сборки ----------

const state = {
    level: 1,
    chosen: new Set(),
    search: '',
    showUncommon: true,
    showUnholy: true,
    onlyAvailable: false,
};

const isGranted = (n) => n.kind === 'root' || n.kind === 'feature';
const isChoice = (n) => n.kind === 'option' || n.kind === 'feat';

function slotsTotal(level) { return 1 + Math.floor(level / 2); }
function slotLevels(level) { return FEAT_LEVELS.filter((l) => l <= level); }

function satisfied(id, chosen = state.chosen) {
    const n = NODES.get(id);
    if (!n) return false;
    if (isGranted(n)) return state.level >= n.level;
    if (n.kind === 'group') return [...chosen].some((c) => NODES.get(c).group === id);
    return chosen.has(id);
}

/** Проверяет, что взятые черты можно разложить по ячейкам черт класса. */
function featsFit(featIds, level) {
    const feats = featIds.map((id) => NODES.get(id).level).sort((a, b) => a - b);
    const slots = slotLevels(level);
    let s = 0;
    for (const lvl of feats) {
        while (s < slots.length && slots[s] < lvl) s++;
        if (s >= slots.length) return false;
        s++;
    }
    return true;
}

const chosenFeats = (chosen = state.chosen) => [...chosen].filter((id) => NODES.get(id).kind === 'feat');

function blessingLimit(chosen = state.chosen) {
    return 1 + (chosen.has('feat-5907') ? 1 : 0); // «Второе благословление»
}

/** Причины, по которым узел нельзя взять (пустой массив — можно). */
function blockers(n, chosen = state.chosen) {
    const out = [];
    if (!isChoice(n)) return out;
    if (state.level < n.level) out.push(`Нужен ${n.level} уровень`);
    for (const clause of n.requires || []) {
        if (!clause.some((id) => satisfied(id, chosen))) {
            out.push('Нужно: ' + clause.map((id) => NODES.get(id).name).join(' или '));
        }
    }
    for (const id of n.forbids || []) {
        if (chosen.has(id)) out.push(`Несовместимо с «${NODES.get(id).name}»`);
    }
    if (n.kind === 'feat' && !chosen.has(n.id)) {
        if (!featsFit([...chosenFeats(chosen), n.id], state.level)) out.push('Нет свободной ячейки черты подходящего уровня');
    }
    if (n.group === 'group-blessing' && !chosen.has(n.id)) {
        const taken = [...chosen].filter((id) => NODES.get(id).group === 'group-blessing').length;
        if (taken >= blessingLimit(chosen)) out.push('Благословение уже выбрано (второе даёт черта «Второе благословление»)');
    }
    return out;
}

/** Снимает всё, что перестало удовлетворять условиям. Возвращает снятые узлы. */
function prune() {
    const removed = [];
    let changed = true;
    while (changed) {
        changed = false;
        for (const id of [...state.chosen]) {
            const n = NODES.get(id);
            const others = new Set(state.chosen); others.delete(id);
            const bad = state.level < n.level
                || (n.requires || []).some((cl) => !cl.some((x) => satisfied(x, others)))
                || (n.forbids || []).some((x) => others.has(x));
            if (bad) { state.chosen.delete(id); removed.push(n); changed = true; }
        }
        // лишние благословения
        const bless = [...state.chosen].filter((id) => NODES.get(id).group === 'group-blessing');
        while (bless.length > blessingLimit()) { const id = bless.pop(); state.chosen.delete(id); removed.push(NODES.get(id)); changed = true; }
        // черты, не влезающие в ячейки: снимаем самые высокоуровневые
        let feats = chosenFeats().sort((a, b) => NODES.get(b).level - NODES.get(a).level);
        while (feats.length && !featsFit(feats, state.level)) {
            const id = feats.shift(); state.chosen.delete(id); removed.push(NODES.get(id)); changed = true;
        }
    }
    return removed;
}

function toggle(n) {
    if (!isChoice(n)) {
        openDetails(n);
        return;
    }
    if (state.chosen.has(n.id)) {
        state.chosen.delete(n.id);
        const removed = prune();
        if (removed.length) toast(`Снято также: ${removed.map((r) => r.name).join(', ')}`);
    } else {
        // взаимоисключающие варианты: замена соседнего
        let replaced = null;
        if (n.kind === 'option' && n.group !== 'group-blessing') {
            for (const id of [...state.chosen]) {
                if (NODES.get(id).group === n.group) { state.chosen.delete(id); replaced = id; }
            }
        }
        const why = blockers(n);
        if (why.length) {
            if (replaced) state.chosen.add(replaced);
            shake(n);
            toast(why.join(' · '), true);
            return;
        }
        state.chosen.add(n.id);
        const removed = prune();
        if (removed.length) toast(`Снято: ${removed.map((r) => r.name).join(', ')}`);
    }
    save();
    render();
    refreshDetails();
}

// ---------- сохранение ----------

function encodeBuild() {
    return `${state.level}.${[...state.chosen].join(',')}`;
}
function decodeBuild(s) {
    const [lvl, list] = String(s).split('.');
    const level = Math.min(20, Math.max(1, parseInt(lvl, 10) || 1));
    const chosen = (list || '').split(',').filter((id) => NODES.has(id) && isChoice(NODES.get(id)));
    return { level, chosen };
}
function save() {
    try { localStorage.setItem(STORAGE_KEY, encodeBuild()); } catch { /* приватный режим */ }
}
function load() {
    let raw = null;
    const m = location.hash.match(/b=([^&]+)/);
    if (m) raw = decodeURIComponent(m[1]);
    if (!raw) { try { raw = localStorage.getItem(STORAGE_KEY); } catch { /* нет доступа */ } }
    if (!raw) return;
    const b = decodeBuild(raw);
    state.level = b.level;
    // добавляем в порядке уровней, чтобы условия проверялись корректно
    b.chosen.sort((a, c) => NODES.get(a).level - NODES.get(c).level);
    for (const id of b.chosen) state.chosen.add(id);
    prune();
}

// ---------- безопасный HTML описаний ----------

const ALLOWED_TAGS = new Set(['B', 'STRONG', 'I', 'EM', 'BR', 'HR', 'UL', 'OL', 'LI', 'P', 'SPAN', 'A', 'H4', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH', 'SUP', 'SUB', 'DIV']);
const ACTION_GLYPH = { 1: '◆', 2: '◆◆', 3: '◆◆◆', 4: '◇', 5: '⟲' };
const ACTION_NAME = { 1: 'одно действие', 2: 'два действия', 3: 'три действия', 4: 'свободное действие', 5: 'ответное действие' };

function sanitize(html) {
    const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
    const walk = (el) => {
        for (const child of [...el.childNodes]) {
            if (child.nodeType === 3) continue;
            if (child.nodeType !== 1 || !ALLOWED_TAGS.has(child.tagName)) {
                if (child.nodeType === 1 && !['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT'].includes(child.tagName)) {
                    walk(child);
                    child.replaceWith(...child.childNodes);
                } else child.remove();
                continue;
            }
            const cls = child.getAttribute('class') || '';
            const href = child.getAttribute('href');
            for (const a of [...child.attributes]) child.removeAttribute(a.name);
            if (child.tagName === 'A' && href && /^https:\/\/pf2\.ru\//.test(href)) {
                child.setAttribute('href', href);
                child.setAttribute('target', '_blank');
                child.setAttribute('rel', 'noopener noreferrer');
            }
            if (/action-icon/.test(cls)) {
                const k = child.textContent.trim();
                child.className = 'act';
                child.title = ACTION_NAME[k] || '';
                child.textContent = ACTION_GLYPH[k] || k;
            }
            if (/sub-ability/.test(cls)) child.className = 'sub-ability';
            walk(child);
        }
    };
    const root = doc.body.firstChild;
    walk(root);
    return root.innerHTML;
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function actionsHtml(a) {
    if (!a) return '';
    return a.split('/').map((k) => `<span class="act" title="${ACTION_NAME[k] || ''}">${ACTION_GLYPH[k] || esc(k)}</span>`).join(' / ');
}

const KIND_LABEL = { root: 'Класс', group: 'Выбор', option: 'Вариант', feature: 'Классовая особенность', feat: 'Черта' };
const RARITY_LABEL = { common: '', uncommon: 'Необычный', rare: 'Редкий', unique: 'Уникальный' };

function cardHtml(n, full) {
    const lvl = n.kind === 'feat' ? `Черта ${n.level}` : n.kind === 'option' && n.level > 1 ? `Уровень ${n.level}` : KIND_LABEL[n.kind];
    const traits = [
        RARITY_LABEL[n.rarity] && `<span class="trait trait-${n.rarity}">${RARITY_LABEL[n.rarity]}</span>`,
        ...(n.traits || []).map((t) => `<span class="trait">${esc(t.name)}</span>`),
    ].filter(Boolean).join('');
    const why = blockers(n);
    let status = '';
    if (isGranted(n)) status = '<div class="status st-granted">Есть у каждого поборника</div>';
    else if (state.chosen.has(n.id)) status = '<div class="status st-on">Выбрано · ЛКМ — снять</div>';
    else if (isChoice(n) && !why.length) status = '<div class="status st-avail">Доступно · ЛКМ — взять</div>';
    else if (why.length) status = `<div class="status st-locked">${why.map(esc).join('<br>')}</div>`;

    const prereq = n.prereqHtml ? sanitize(n.prereqHtml) : esc(n.prereqText);
    const fields = Object.entries(n.fields || {})
        .filter(([k]) => !['Источник', 'Критерии'].includes(k))
        .map(([k, v]) => `<div><b>${esc(k)}:</b> ${sanitize(v)}</div>`).join('');

    return `
        <div class="card-head">
            <div class="card-title">${esc(n.name)} ${actionsHtml(n.actions)}</div>
            <div class="card-level">${esc(lvl)}</div>
        </div>
        ${n.nameEn && n.nameEn !== n.name ? `<div class="card-en">${esc(n.nameEn)}</div>` : ''}
        ${traits ? `<div class="traits">${traits}</div>` : ''}
        <div class="card-body ${full ? '' : 'clamp'}">
            ${prereq ? `<div class="prereq"><b>Критерии:</b> ${prereq}</div>` : ''}
            ${fields ? `<div class="fields">${fields}</div>` : ''}
            ${(prereq || fields) && n.html ? '<hr>' : ''}
            <div class="desc">${sanitize(n.html)}</div>
            ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}
        </div>
        ${status}
        ${full && n.url ? `<a class="src" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer">Открыть на pf2.ru ↗</a>` : ''}
        ${!full ? '<div class="more">ПКМ — подробнее</div>' : ''}`;
}

// ---------- DOM ----------

const $ = (s) => document.querySelector(s);
const viewport = $('#viewport');
const world = $('#world');
const nodesLayer = $('#nodes-layer');
const edgesLayer = $('#edges-layer');
const ringsLayer = $('#rings-layer');
const tooltip = $('#tooltip');
const SVGNS = 'http://www.w3.org/2000/svg';

const nodeEls = new Map();
const edgeEls = [];

function svg(tag, attrs, parent) {
    const el = document.createElementNS(SVGNS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (parent) parent.appendChild(el);
    return el;
}

function buildScene() {
    // кольца уровней
    const defs = svg('defs', {}, ringsLayer);
    const grad = svg('radialGradient', { id: 'core-glow' }, defs);
    svg('stop', { offset: '0%', 'stop-color': '#f3c66b', 'stop-opacity': '0.28' }, grad);
    svg('stop', { offset: '100%', 'stop-color': '#f3c66b', 'stop-opacity': '0' }, grad);
    svg('circle', { cx: 0, cy: 0, r: R_OPTION * 1.35, fill: 'url(#core-glow)' }, ringsLayer);
    svg('circle', { cx: 0, cy: 0, r: R_GROUP, class: 'ring ring-inner' }, ringsLayer);
    svg('circle', { cx: 0, cy: 0, r: R_OPTION, class: 'ring ring-inner' }, ringsLayer);
    svg('circle', { cx: 0, cy: 0, r: R_OPTION + 110, class: 'ring ring-ornament' }, ringsLayer);
    for (const l of FEAT_LEVELS) {
        const r = featRadius(l);
        svg('circle', { cx: 0, cy: 0, r, class: 'ring', 'data-level': l }, ringsLayer);
        // подпись уровня — в промежутке между узлами кольца, ближайшем к верху
        const onRing = DATA.nodes.filter((n) => n.kind === 'feat' && featRadius(n.level) === r)
            .map((n) => Math.atan2(n.y, n.x)).sort((p, q) => p - q);
        let la = -Math.PI / 2;
        if (onRing.length) {
            let best = Infinity;
            onRing.forEach((a1, i2) => {
                const a2 = i2 + 1 < onRing.length ? onRing[i2 + 1] : onRing[0] + Math.PI * 2;
                const mid = (a1 + a2) / 2;
                const d = Math.abs(Math.atan2(Math.sin(mid + Math.PI / 2), Math.cos(mid + Math.PI / 2)));
                if (d < best) { best = d; la = mid; }
            });
        }
        const label = svg('text', { x: Math.cos(la) * r, y: Math.sin(la) * r, class: 'ring-label', 'data-level': l }, ringsLayer);
        label.textContent = `${l} ур.`;
    }

    // связи (набор рисуемых связей тоже определяет tools/layout.mjs)
    const drawn = EDGES;
    for (const e of drawn) {
        const a = NODES.get(e.from), b = NODES.get(e.to);
        const dx = b.x - a.x, dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const ra = sizeOf(a) / 2 + 2, rb = sizeOf(b) / 2 + 2;
        const x1 = a.x + dx / len * ra, y1 = a.y + dy / len * ra;
        const x2 = b.x - dx / len * rb, y2 = b.y - dy / len * rb;
        const g = svg('g', { class: `edge edge-${e.kind} ${e.primary ? 'primary' : 'secondary'}` }, edgesLayer);
        svg('line', { x1, y1, x2, y2, class: 'edge-base' }, g);
        svg('line', { x1, y1, x2, y2, class: 'edge-glow' }, g);
        svg('line', { x1, y1, x2, y2, class: 'edge-core' }, g);
        edgeEls.push({ e, g });
    }

    // узлы
    for (const n of DATA.nodes) {
        const el = document.createElement('button');
        el.type = 'button';
        el.className = `node kind-${n.kind} rarity-${n.rarity || 'common'}`;
        el.style.left = `${n.x}px`;
        el.style.top = `${n.y}px`;
        el.style.setProperty('--size', `${sizeOf(n)}px`);
        el.setAttribute('aria-label', `${n.name}${n.level ? `, уровень ${n.level}` : ''}`);
        el.dataset.id = n.id;
        const art = document.createElement('span');
        art.className = 'art';
        if (n.image) art.style.backgroundImage = `url("images/${n.image}")`;
        else art.textContent = n.name.slice(0, 1);
        el.appendChild(art);
        if (n.kind !== 'root') {
            // сторону подписи выбрала раскладка (tools/layout.mjs), чтобы её не задевали связи
            const c = GEO.CAPTION[n.kind] || GEO.CAPTION.feat;
            const cap = document.createElement('span');
            cap.className = `caption cap-${n.captionSide || 'below'}`;
            cap.style.fontSize = `${c.fs}px`;
            cap.style.width = `${n.captionW || c.maxW}px`;
            cap.textContent = n.name;
            el.appendChild(cap);
        }
        const sanctReq = (n.requires || []).find((cl) => cl.every((id) => id.startsWith('sanct-')));
        if ((n.kind === 'feat' || n.kind === 'option') && (sanctReq || n.forbids?.length)) {
            const badge = document.createElement('span');
            const holy = sanctReq?.includes('sanct-holy'), unholy = sanctReq?.includes('sanct-unholy');
            badge.className = `badge ${holy && unholy ? 'b-any' : holy ? 'b-holy' : unholy ? 'b-unholy' : 'b-not-unholy'}`;
            badge.title = holy && unholy ? 'Нужно освящение' : holy ? 'Нужно освящение «священный»' : unholy ? 'Нужно освящение «нечестивый»' : 'Недоступно нечестивым';
            el.appendChild(badge);
        }
        nodesLayer.appendChild(el);
        nodeEls.set(n.id, el);
    }
}

let hoverId = null;

function render() {
    const searchQ = state.search.trim().toLowerCase();
    const pathIds = hoverId ? requirementPath(hoverId) : null;

    for (const n of DATA.nodes) {
        const el = nodeEls.get(n.id);
        const on = isGranted(n) ? state.level >= n.level : n.kind === 'group' ? satisfied(n.id) : state.chosen.has(n.id);
        const avail = !on && isChoice(n) && blockers(n).length === 0;
        const hiddenByFilter = (!state.showUncommon && n.rarity === 'uncommon' && !on)
            || (!state.showUnholy && isUnholy(n) && !on);
        const match = searchQ && (n.name.toLowerCase().includes(searchQ) || (n.nameEn || '').toLowerCase().includes(searchQ));
        const dim = (searchQ && !match) || (state.onlyAvailable && isChoice(n) && !on && !avail);
        el.classList.toggle('on', on);
        el.classList.toggle('avail', avail);
        el.classList.toggle('locked', isChoice(n) && !on && !avail);
        el.classList.toggle('over-level', isChoice(n) && n.level > state.level);
        el.classList.toggle('filtered', hiddenByFilter);
        el.classList.toggle('dim', !!dim);
        el.classList.toggle('match', !!match);
        el.classList.toggle('in-path', !!pathIds && pathIds.has(n.id));
    }
    for (const { e, g } of edgeEls) {
        const a = NODES.get(e.from), b = NODES.get(e.to);
        const fromOn = nodeEls.get(e.from).classList.contains('on');
        const toEl = nodeEls.get(e.to);
        const toOn = toEl.classList.contains('on');
        g.classList.toggle('on', fromOn && toOn);
        g.classList.toggle('avail', fromOn && !toOn && toEl.classList.contains('avail'));
        g.classList.toggle('in-path', !!pathIds && pathIds.has(e.from) && pathIds.has(e.to));
        g.classList.toggle('filtered', nodeEls.get(e.from).classList.contains('filtered') || toEl.classList.contains('filtered'));
        g.classList.toggle('dim', !!searchQ && !(nodeEls.get(e.to).classList.contains('match')));
        void a; void b;
    }
    for (const t of ringsLayer.querySelectorAll('[data-level]')) {
        t.classList.toggle('reached', Number(t.dataset.level) <= state.level);
    }
    renderPanel();
}

function isUnholy(n) {
    return n.id === 'sanct-unholy' || n.sanct === 'unholy'
        || (n.requires || []).some((cl) => cl.length === 1 && (cl[0] === 'sanct-unholy' || NODES.get(cl[0]).sanct === 'unholy'));
}

/** Все узлы, нужные для взятия данного (для подсветки пути при наведении). */
function requirementPath(id) {
    const out = new Set([id]);
    const stack = [id];
    while (stack.length) {
        const n = NODES.get(stack.pop());
        const parents = [...(n.requires || []).flat()];
        if (n.kind === 'option') parents.push(n.group);
        if (n.kind === 'group' || n.kind === 'feature') parents.push('root');
        for (const p of parents) if (!out.has(p)) { out.add(p); stack.push(p); }
    }
    return out;
}

// ---------- панель ----------

function renderPanel() {
    $('#level').value = state.level;
    $('#level-out').textContent = state.level;
    const used = chosenFeats().length, total = slotsTotal(state.level);
    $('#points-used').textContent = used;
    $('#points-total').textContent = total;
    $('#points-fill').style.width = `${Math.min(100, used / total * 100)}%`;

    const groups = ['group-sanct', 'group-cause', 'group-devotion', 'group-blessing'];
    $('#choices').innerHTML = groups.map((g) => {
        const picked = [...state.chosen].filter((id) => NODES.get(id).group === g).map((id) => NODES.get(id));
        const val = picked.length
            ? picked.map((p) => `<button class="chip" data-focus="${p.id}">${esc(p.name)}</button>`).join(' ')
            : `<button class="chip chip-empty" data-focus="${g}">${g === 'group-sanct' ? 'без освящения' : 'не выбрано'}</button>`;
        return `<dt>${esc(NODES.get(g).name)}</dt><dd>${val}</dd>`;
    }).join('');

    const feats = chosenFeats().map((id) => NODES.get(id)).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, 'ru'));
    $('#feat-list').innerHTML = feats.map((f) =>
        `<li><button class="feat-item" data-focus="${f.id}"><span class="lvl">${f.level}</span>${esc(f.name)}</button></li>`).join('');
    $('#feat-empty').hidden = feats.length > 0;
    $('#feat-count').textContent = feats.length ? `(${feats.length})` : '';
}

// ---------- подсказка и подробности ----------

function showTooltip(n, el) {
    tooltip.innerHTML = cardHtml(n, false);
    tooltip.className = `tooltip card rarity-${n.rarity || 'common'}`;
    const r = el.getBoundingClientRect();
    const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    let x = r.right + 14, y = r.top + r.height / 2 - th / 2;
    if (x + tw > innerWidth - 10) x = r.left - tw - 14;
    y = Math.max(10, Math.min(innerHeight - th - 10, y));
    tooltip.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
}
function hideTooltip() { tooltip.className = 'tooltip hidden'; }

let detailsId = null;
function openDetails(n) {
    detailsId = n.id;
    $('#details-content').innerHTML = `<div class="card rarity-${n.rarity || 'common'}">${cardHtml(n, true)}</div>`;
    $('#details').classList.remove('hidden');
    if (isNarrow()) setPanelCollapsed(true);
    hideTooltip();
}
function refreshDetails() {
    if (detailsId) openDetails(NODES.get(detailsId));
}
function closeDetails() { detailsId = null; $('#details').classList.add('hidden'); }

let toastTimer = 0;
function toast(msg, warn = false) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = `toast ${warn ? 'warn' : ''}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.add('hidden'), 3200);
}
function shake(n) {
    const el = nodeEls.get(n.id);
    el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
}

// ---------- камера: панорама и масштаб ----------

const cam = { x: 0, y: 0, k: 0.5 };
const MIN_K = 0.07, MAX_K = 2;

function applyCam() {
    world.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.k})`;
    viewport.style.setProperty('--k', cam.k);
    // подписи появляются по мере приближения: группы → варианты → черты
    viewport.classList.toggle('z-far', cam.k < 0.22);
    viewport.classList.toggle('z-mid', cam.k < 0.4);
}
function zoomAt(factor, cx, cy) {
    const k = Math.min(MAX_K, Math.max(MIN_K, cam.k * factor));
    const f = k / cam.k;
    cam.x = cx - (cx - cam.x) * f;
    cam.y = cy - (cy - cam.y) * f;
    cam.k = k;
    applyCam();
}
function centerOn(x, y, k = cam.k, animate = true) {
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    const panelW = document.body.classList.contains('panel-collapsed') ? 0 : $('#panel').offsetWidth;
    cam.k = k;
    cam.x = panelW / 2 + vw / 2 - x * k;
    cam.y = vh / 2 - y * k;
    world.classList.toggle('animate', animate);
    applyCam();
    if (animate) setTimeout(() => world.classList.remove('animate'), 450);
}
function fitAll() {
    const R = featRadius(20) + 160;
    const panelW = document.body.classList.contains('panel-collapsed') ? 0 : $('#panel').offsetWidth;
    const k = Math.min((viewport.clientWidth - panelW) / (2 * R), viewport.clientHeight / (2 * R));
    centerOn(0, 0, Math.max(MIN_K, k));
}
function focusNode(id) {
    const n = NODES.get(id);
    centerOn(n.x, n.y, Math.max(cam.k, 0.6));
    const el = nodeEls.get(id);
    el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse');
}

// указатели: перетаскивание мышью/пальцем, щипок для масштаба
const pointers = new Map();
let drag = null;

viewport.addEventListener('pointerdown', (ev) => {
    if (ev.button !== 0 && ev.pointerType === 'mouse') return;
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    viewport.setPointerCapture(ev.pointerId);
    const nodeEl = ev.target.closest('.node');
    drag = { sx: ev.clientX, sy: ev.clientY, cx: cam.x, cy: cam.y, moved: false, node: nodeEl?.dataset.id || null };
    if (pointers.size === 2) {
        const [p1, p2] = [...pointers.values()];
        drag.pinch = { d: Math.hypot(p1.x - p2.x, p1.y - p2.y), k: cam.k };
    }
});
viewport.addEventListener('pointermove', (ev) => {
    if (!pointers.has(ev.pointerId)) return;
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (!drag) return;
    if (pointers.size === 2 && drag.pinch) {
        const [p1, p2] = [...pointers.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        zoomAt((drag.pinch.k * d / drag.pinch.d) / cam.k, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        drag.moved = true;
        return;
    }
    const dx = ev.clientX - drag.sx, dy = ev.clientY - drag.sy;
    if (!drag.moved && Math.hypot(dx, dy) < 5) return;
    drag.moved = true;
    viewport.classList.add('dragging');
    hideTooltip();
    cam.x = drag.cx + dx; cam.y = drag.cy + dy;
    applyCam();
});
function endPointer(ev) {
    if (!pointers.has(ev.pointerId)) return;
    pointers.delete(ev.pointerId);
    if (drag && pointers.size === 0) {
        if (!drag.moved && drag.node && ev.type === 'pointerup') toggle(NODES.get(drag.node));
        drag = null;
        viewport.classList.remove('dragging');
    }
}
viewport.addEventListener('pointerup', endPointer);
viewport.addEventListener('pointercancel', endPointer);
viewport.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    zoomAt(Math.exp(-ev.deltaY * 0.0015), ev.clientX, ev.clientY);
}, { passive: false });
viewport.addEventListener('contextmenu', (ev) => {
    const nodeEl = ev.target.closest('.node');
    ev.preventDefault();
    if (nodeEl) openDetails(NODES.get(nodeEl.dataset.id));
});
nodesLayer.addEventListener('pointerover', (ev) => {
    const el = ev.target.closest('.node');
    if (!el || drag?.moved) return;
    hoverId = el.dataset.id;
    showTooltip(NODES.get(hoverId), el);
    render();
});
nodesLayer.addEventListener('pointerout', (ev) => {
    const el = ev.target.closest('.node');
    if (!el || el.contains(ev.relatedTarget)) return;
    hoverId = null;
    hideTooltip();
    render();
});
// клавиатура: Enter/пробел на узле
nodesLayer.addEventListener('keydown', (ev) => {
    const el = ev.target.closest('.node');
    if (!el) return;
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle(NODES.get(el.dataset.id)); }
    if (ev.key === 'i') openDetails(NODES.get(el.dataset.id));
});
nodesLayer.addEventListener('focusin', (ev) => {
    const el = ev.target.closest('.node');
    if (el && !drag) showTooltip(NODES.get(el.dataset.id), el);
});

// ---------- элементы панели ----------

$('#level').addEventListener('input', (ev) => {
    state.level = Number(ev.target.value);
    const removed = prune();
    if (removed.length) toast(`Снято из-за уровня: ${removed.map((r) => r.name).join(', ')}`, true);
    save();
    render();
    refreshDetails();
});
$('#search').addEventListener('input', (ev) => {
    state.search = ev.target.value;
    render();
});
$('#search').addEventListener('keydown', (ev) => {
    if (ev.key !== 'Enter') return;
    const first = [...nodeEls.entries()].find(([, el]) => el.classList.contains('match'));
    if (first) focusNode(first[0]);
});
$('#f-uncommon').addEventListener('change', (ev) => { state.showUncommon = ev.target.checked; render(); });
$('#f-unholy').addEventListener('change', (ev) => { state.showUnholy = ev.target.checked; render(); });
$('#f-avail').addEventListener('change', (ev) => { state.onlyAvailable = ev.target.checked; render(); });
$('#btn-center').addEventListener('click', fitAll);
$('#btn-reset').addEventListener('click', () => {
    if (!state.chosen.size || confirm('Сбросить сборку?')) {
        state.chosen.clear();
        state.level = 1;
        history.replaceState(null, '', location.pathname);
        save();
        render();
    }
});
$('#btn-share').addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}#b=${encodeURIComponent(encodeBuild())}`;
    history.replaceState(null, '', url);
    try { await navigator.clipboard.writeText(url); toast('Ссылка на сборку скопирована'); } catch { toast('Ссылка в адресной строке'); }
});
$('#panel').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-focus]');
    if (b) focusNode(b.dataset.focus);
});
function setPanelCollapsed(v) {
    document.body.classList.toggle('panel-collapsed', v);
    $('#panel-toggle').textContent = v ? '›' : '‹';
}
$('#panel-toggle').addEventListener('click', () => {
    const collapse = !document.body.classList.contains('panel-collapsed');
    setPanelCollapsed(collapse);
    if (!collapse && isNarrow()) closeDetails();
});
$('#details-close').addEventListener('click', closeDetails);
document.addEventListener('keydown', (ev) => {
    if (ev.target.matches('input')) return;
    if (ev.key === 'Escape') closeDetails();
    if (ev.key === '0' || ev.key === 'Home') fitAll();
});
for (const b of document.querySelectorAll('[data-zoom]')) {
    b.addEventListener('click', () => zoomAt(Number(b.dataset.zoom), innerWidth / 2, innerHeight / 2));
}
addEventListener('resize', () => applyCam());

// ---------- старт ----------

const isNarrow = () => matchMedia('(max-width: 720px)').matches;
if (isNarrow()) setPanelCollapsed(true);
buildScene();
load();
const dt = new Date(DATA.meta.fetchedAt);
$('#data-source').innerHTML = `Данные: <a href="${esc(DATA.meta.source)}" target="_blank" rel="noopener noreferrer">pf2.ru</a>, ` +
    `обновлено ${dt.toLocaleDateString('ru-RU')}. Обновить: <code>node tools/fetch-pf2.mjs</code>`;
render();
fitAll();
