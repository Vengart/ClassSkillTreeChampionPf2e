'use strict';
// ============================================================
// Деревья классовых черт PF2e в духе пассивного дерева PoE2.
// Класс выбирается вкладкой (?class=…); данные — data/<класс>-data.js
// (поборник — tools/fetch-pf2.mjs, волшебник — tools/fetch-wizard-aon.mjs).
// ============================================================

/** Вкладки классов. Новый класс: data/<id>-data.js + строка здесь и в index.html. */
const CLASSES = [
    { id: 'champion', name: 'Поборник' },
    { id: 'wizard', name: 'Волшебник', note: 'EN · 1–20' },
];
const DATA = window.CLASS_DATA;
const META = DATA.meta;
const CLASS_ID = META.classId;
/** Тексты узлов по переводам: data/<класс>/build/text-<язык>.js. */
const TEXTS = window.CLASS_TEXT || {};
const LANGS = (META.langs || []).filter((l) => TEXTS[l.id]);
const DEFAULT_LANG = TEXTS[META.defaultLang] ? META.defaultLang : LANGS[0]?.id;
// до выбора перевода у узлов — тексты базового
for (const n of DATA.nodes) Object.assign(n, TEXTS[DEFAULT_LANG]?.[n.id]);
const NODES = new Map(DATA.nodes.map((n) => [n.id, n]));
const EDGES = DATA.edges;
const STORAGE_KEY = `pf2e-${CLASS_ID}-build-v2`;

// ---------- геометрия ----------
// Координаты узлов и ломаные связей посчитаны заранее (tools/tree-layout.mjs):
// корень → шина → темы → стволы тем → черты.

const GEO = DATA.meta.geometry;
const { SIZE } = GEO;
/** Уровни, на которых класс получает классовую черту. */
const FEAT_LEVELS = META.featLevels;
const MAX_LEVEL = META.maxLevel || 20;
/** Карточки выбора сверху: { id, optional, multi, fromLevel, limit, bonus }. */
const CARD_GROUPS = META.cardGroups;
const CARD_GROUP = new Map(CARD_GROUPS.map((g) => [g.id, g]));
/** Размер узла на холсте — из CSS-токенов (--node-feat и т.д.); координаты раскладки те же. */
const tokenPx = (name) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0;
const NODE_SIZE = { feat: tokenPx('--node-feat'), hub: tokenPx('--node-hub'), root: tokenPx('--node-root') };
const sizeOf = (n) => NODE_SIZE[n.kind] || SIZE[n.kind] || 54;

// ---------- состояние сборки ----------

const state = {
    level: 1,
    chosen: new Set(),
    search: '',
    showUncommon: true,
    showUnholy: true,
    onlyAvailable: false,
};

const isGranted = (n) => n.kind === 'root';
/** Узел даётся другим выбором (например, «Фамильяр» — диссертацией). */
const grantedBy = (n, chosen = state.chosen) => (n.grantedBy && chosen.has(n.grantedBy) ? NODES.get(n.grantedBy) : null);
const isChoice = (n) => n.kind === 'option' || n.kind === 'feat';

/** Ячейки черт класса: по таблице класса и дополнительные (школа единой теории и т.п.). */
function slotLevels(level, chosen = state.chosen) {
    const extra = (META.bonusSlots || []).filter((b) => chosen.has(b.id)).map((b) => b.level);
    return [...FEAT_LEVELS, ...extra].filter((l) => l <= level).sort((a, b) => a - b);
}
function slotsTotal(level) { return slotLevels(level).length; }

function satisfied(id, chosen = state.chosen) {
    const n = NODES.get(id);
    if (!n) return false;
    if (isGranted(n)) return state.level >= n.level;
    if (n.kind === 'group') return [...chosen].some((c) => NODES.get(c).group === id);
    return chosen.has(id) || !!grantedBy(n, chosen);
}

/** Проверяет, что взятые черты можно разложить по ячейкам черт класса. */
function featsFit(featIds, level, chosen = state.chosen) {
    const feats = featIds.map((id) => NODES.get(id).level).sort((a, b) => a - b);
    const slots = slotLevels(level, chosen);
    let s = 0;
    for (const lvl of feats) {
        while (s < slots.length && slots[s] < lvl) s++;
        if (s >= slots.length) return false;
        s++;
    }
    return true;
}

const chosenFeats = (chosen = state.chosen) => [...chosen].filter((id) => NODES.get(id).kind === 'feat');

/** Сколько вариантов группы можно взять (благословение поборника — 1, с чертой — 2). */
function groupLimit(gid, chosen = state.chosen) {
    const g = CARD_GROUP.get(gid);
    if (!g) return 1;
    return (g.limit || 1) + (g.bonus && chosen.has(g.bonus.id) ? g.bonus.add : 0);
}
const isMulti = (gid) => !!CARD_GROUP.get(gid)?.multi;

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
    const giver = grantedBy(n, chosen);
    if (giver) { out.push(`Уже даётся: «${giver.name}»`); return out; }
    if (n.kind === 'feat' && !chosen.has(n.id)) {
        if (!featsFit([...chosenFeats(chosen), n.id], state.level, chosen)) out.push('Нет свободной ячейки черты подходящего уровня');
    }
    if (isMulti(n.group) && !chosen.has(n.id)) {
        const taken = [...chosen].filter((id) => NODES.get(id).group === n.group).length;
        const g = CARD_GROUP.get(n.group);
        if (taken >= groupLimit(n.group, chosen)) out.push(`«${NODES.get(n.group).name}» уже выбрано${g.bonus ? ` (ещё одно даёт черта «${NODES.get(g.bonus.id)?.name}»)` : ''}`);
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
                || (n.forbids || []).some((x) => others.has(x))
                || !!grantedBy(n, others); // теперь даётся бесплатно — ячейка освобождается
            if (bad) { state.chosen.delete(id); removed.push(n); changed = true; }
        }
        // лишние варианты в группах с несколькими выборами
        for (const g of CARD_GROUPS.filter((x) => x.multi)) {
            const picked = [...state.chosen].filter((id) => NODES.get(id).group === g.id);
            while (picked.length > groupLimit(g.id)) { const id = picked.pop(); state.chosen.delete(id); removed.push(NODES.get(id)); changed = true; }
        }
        // черты, не влезающие в ячейки: снимаем самые высокоуровневые
        let feats = chosenFeats().sort((a, b) => NODES.get(b).level - NODES.get(a).level);
        while (feats.length && !featsFit(feats, state.level)) {
            const id = feats.shift(); state.chosen.delete(id); removed.push(NODES.get(id)); changed = true;
        }
    }
    return removed;
}

// ---------- история изменений (кнопка «Отменить», Ctrl+Z) ----------

const undoStack = [];
const UNDO_LIMIT = 50;
function pushUndo(before) {
    if (before === encodeBuild()) return;
    undoStack.push(before);
    if (undoStack.length > UNDO_LIMIT) undoStack.shift();
    updateUndo();
}
function updateUndo() {
    for (const b of document.querySelectorAll('[data-undo]')) b.disabled = !undoStack.length;
}
/** Восстановить сборку из строки encodeBuild() — тот же путь, что при загрузке. */
function applyBuild(s) {
    const b = decodeBuild(s);
    state.level = b.level;
    state.chosen.clear();
    b.chosen.sort((a, c) => NODES.get(a).level - NODES.get(c).level);
    for (const id of b.chosen) state.chosen.add(id);
    prune();
    save();
    render();
    refreshDetails();
    refreshTooltip();
}
function undo() {
    if (!undoStack.length) return;
    applyBuild(undoStack.pop());
    updateUndo();
    toast('Отменено последнее изменение');
}

function toggle(n) {
    const before = encodeBuild();
    if (!isChoice(n)) {
        openDetails(n);
        return;
    }
    if (grantedBy(n)) {
        toast(`«${n.name}» уже даёт «${grantedBy(n).name}» — ячейка черты не тратится`);
        return;
    }
    if (state.chosen.has(n.id)) {
        state.chosen.delete(n.id);
        const removed = prune();
        if (removed.length) toast(`Снято также: ${removed.map((r) => r.name).join(', ')}`);
    } else {
        // взаимоисключающие варианты: замена соседнего
        let replaced = null;
        if (n.kind === 'option' && !isMulti(n.group)) {
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
    pushUndo(before);
    save();
    render();
    refreshDetails();
    refreshTooltip();
}

// ---------- сохранение ----------

function encodeBuild() {
    return `${state.level}.${[...state.chosen].join(',')}`;
}
function decodeBuild(s) {
    const [lvl, list] = String(s).split('.');
    const level = Math.min(MAX_LEVEL, Math.max(1, parseInt(lvl, 10) || 1));
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
const SOURCE_NAME = META.sourceName || 'pf2.ru';
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
            if (child.tagName === 'A' && href && /^https:\/\/(pf2\.ru|2e\.aonprd\.com)\//.test(href)) {
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

const RARITY_LABEL = { common: '', uncommon: 'Необычный', rare: 'Редкий', unique: 'Уникальный' };

// ---------- переводы текстов (data/<класс>/build/text-<язык>.js) ----------
// Граф один на все переводы: при переключении меняются только поля текста узлов (название, описание,
// критерии, поля, дескрипторы, ссылка) — они целиком берутся из текста выбранного перевода.
const TEXT_FIELDS = ['name', 'short', 'html', 'prereqText', 'prereqHtml', 'fields', 'traits', 'url', 'source', 'hint', 'note'];
const LANG_KEY = `pf2e-${CLASS_ID}-lang`;
const DEFAULT_TERMS = { feat: 'черта', feats: 'черты', Feat: 'Черта', Feats: 'Черты', prereq: 'Требования' };
let lang = DEFAULT_LANG;
/** Термины текущего перевода: «черта» (AoN, pf2.ru) или «способность» (Док и Юра). */
let T = DEFAULT_TERMS;
const langInfo = (id = lang) => LANGS.find((l) => l.id === id);
function applyLang(id) {
    if (!langInfo(id)) id = DEFAULT_LANG;
    lang = id;
    T = langInfo()?.terms || DEFAULT_TERMS;
    const texts = TEXTS[id] || {};
    for (const n of DATA.nodes) {
        for (const k of TEXT_FIELDS) delete n[k];
        Object.assign(n, texts[n.id]);
    }
}
/** Названия узла во всех переводах (для карточки: «как это называется у других»). */
function otherNames(n) {
    return LANGS.filter((l) => l.id !== lang).map((l) => {
        const name = TEXTS[l.id][n.id]?.name;
        return name ? [l.label, name] : null;
    }).filter((x) => x && x[1] !== n.name);
}
try { applyLang(localStorage.getItem(LANG_KEY) || DEFAULT_LANG); } catch { applyLang(DEFAULT_LANG); }

/** Подзаголовок карточки: что это за узел. */
function cardSubtitle(n) {
    if (n.kind === 'feat') return `Классовая ${T.feat} ${META.classGen}`;
    if (n.kind === 'option') return NODES.get(n.group)?.name || 'Вариант выбора';
    if (n.kind === 'group') return 'Группа выбора';
    if (n.kind === 'hub') return 'Ветка дерева';
    return 'Класс';
}
/** Стоимость узла в ячейках черт. */
function costText(n) {
    if (!isChoice(n)) return '';
    if (grantedBy(n)) return `бесплатно — даёт «${esc(grantedBy(n).name)}»`;
    if (n.kind === 'feat') {
        const used = chosenFeats().length, total = slotsTotal(state.level);
        return `1 ячейка (${T.feat} класса) · свободно ${Math.max(0, total - used)} из ${total}`;
    }
    return `выбор при создании, ячейку (${T.feat}) не тратит`;
}
/** Широкая кнопка «Взять» / «Убрать» (в подсказке и в правой панели). */
function takeButton(n) {
    if (!isChoice(n)) return '';
    const on = state.chosen.has(n.id);
    const disabled = !on && (blockers(n).length > 0 || !!grantedBy(n));
    const label = on ? 'Убрать' : grantedBy(n) ? 'Уже есть' : 'Взять';
    return `<button type="button" class="btn-take${on ? ' is-on' : ''}" data-take="${esc(n.id)}"${disabled ? ' disabled' : ''}>${label}</button>`;
}

/**
 * Карточка узла в духе D&D Beyond: название, источник, подзаголовок, метки «Уровень / Требования /
 * Стоимость», описание, причина запрета и кнопка. full — правая панель (всё описание и ссылка на источник),
 * иначе — подсказка (описание обрезано, внизу — клавиши).
 */
function cardHtml(n, full) {
    const traits = [
        RARITY_LABEL[n.rarity] && `<span class="trait trait-${n.rarity}">${RARITY_LABEL[n.rarity]}</span>`,
        ...(n.traits || []).map((t) => `<span class="trait">${esc(t.name)}</span>`),
    ].filter(Boolean).join('');

    const prereq = n.prereqHtml ? sanitize(n.prereqHtml) : esc(n.prereqText || '');
    const meta = [];
    if ((n.kind === 'feat' || n.kind === 'option') && n.level) meta.push(['Уровень', String(n.level)]);
    if (isChoice(n)) meta.push([esc(T.prereq), prereq || 'нет']);
    for (const [k, v] of Object.entries(n.fields || {})) {
        if (!['Источник', 'Критерии'].includes(k)) meta.push([esc(k), sanitize(v)]);
    }
    if (isChoice(n)) meta.push(['Стоимость', costText(n)]);

    const why = blockers(n);
    let status = '';
    if (isGranted(n)) status = `<p class="status st-granted">Есть у каждого ${esc(META.classGen)}</p>`;
    else if (grantedBy(n)) status = `<p class="status st-granted">Даётся: «${esc(grantedBy(n).name)}»</p>`;
    else if (!state.chosen.has(n.id) && why.length) status = `<p class="status st-locked">${why.map(esc).join('<br>')}</p>`;

    return `
        <header class="card-head">
            <h3 class="card-title">${esc(n.name)} ${actionsHtml(n.actions)}</h3>
            ${n.source ? `<div class="card-source">${esc(n.source)}</div>` : ''}
            <div class="card-sub">${esc(cardSubtitle(n))}</div>
            ${full && otherNames(n).length ? `<div class="card-alt">${otherNames(n).map(([l, v]) => `<span><b>${esc(l)}:</b> ${esc(v)}</span>`).join('')}</div>` : ''}
        </header>
        ${traits ? `<div class="traits">${traits}</div>` : ''}
        ${meta.length ? `<dl class="card-meta">${meta.map(([k, v]) => `<dt>${k}:</dt><dd>${v}</dd>`).join('')}</dl>` : ''}
        ${n.kind === 'hub' ? '' : `<div class="card-body ${full ? '' : 'clamp'}">
            <div class="desc">${sanitize(n.html)}</div>
            ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}
        </div>`}
        ${n.note ? `<p class="tr-note">${esc(n.note)}</p>` : ''}
        ${status}
        ${takeButton(n)}
        ${full && n.url ? `<a class="src" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer">Открыть на ${esc(/pf2\.ru/.test(n.url) ? 'pf2.ru' : /aonprd/.test(n.url) ? 'Archives of Nethys' : SOURCE_NAME)} ↗</a>` : ''}
        ${full && isChoice(n) ? `<p class="tip-keys">Двойной клик или Enter — ${state.chosen.has(n.id) ? 'убрать' : 'взять'} · Esc — закрыть</p>` : ''}
        ${full && !isChoice(n) ? '<p class="tip-keys">Esc — закрыть</p>' : ''}`;
}

/** Первая строка описания простым текстом — для подсказки при наведении. */
function plainText(html) {
    const d = document.createElement('div');
    d.innerHTML = sanitize(html || '');
    return d.textContent.replace(/\s+/g, ' ').trim();
}
/**
 * Компактная подсказка при наведении: название, уровень, статус или причина запрета и одна
 * строка описания. Без кнопок — всё остальное в правой панели (ЛКМ по узлу).
 */
function tipHtml(n) {
    const sub = (n.kind === 'feat' || n.kind === 'option') && n.level
        ? `Уровень ${n.level} · ${esc(cardSubtitle(n))}` : esc(cardSubtitle(n));
    let status = '';
    if (isChoice(n)) {
        const why = blockers(n);
        if (isGranted(n)) status = `<p class="tip-status st-granted">Есть у каждого ${esc(META.classGen)}</p>`;
        else if (grantedBy(n)) status = `<p class="tip-status st-granted">Даётся: «${esc(grantedBy(n).name)}»</p>`;
        else if (state.chosen.has(n.id)) status = '<p class="tip-status st-on">Взято</p>';
        else if (why.length) status = `<p class="tip-status st-locked">${why.map(esc).join('<br>')}</p>`;
        else status = '<p class="tip-status st-avail">Можно взять</p>';
    }
    const line = n.kind === 'hub' ? '' : plainText(n.html);
    return `<div class="tip-title">${esc(n.name)} ${actionsHtml(n.actions)}</div>
        <div class="tip-sub">${sub}</div>
        ${status}
        ${line ? `<p class="tip-desc">${esc(line)}</p>` : ''}`;
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
const reqBadges = [];
const isCard = (n) => n.kind === 'group' || n.kind === 'option';
const edgeEls = [];

function svg(tag, attrs, parent) {
    const el = document.createElementNS(SVGNS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (parent) parent.appendChild(el);
    return el;
}

function buildScene() {
    // связи — ломаные из раскладки; концы подрезаются по краю узлов
    const trim = (p, q, r) => {
        const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1;
        return [p[0] + dx / len * r, p[1] + dy / len * r];
    };
    // Связи со общим участком ствола раньше рисовались целиком одна за другой: тёмная подложка
    // следующей ложилась поверх светлой середины предыдущей, и на стволе виднелись две параллельные
    // полоски. Теперь три слоя: все подложки → все свечения → все середины (подсвеченные — сверху, см. render).
    const layers = ['base', 'glow', 'core'].map((name) => svg('g', { class: `edge-layer layer-${name}` }, edgesLayer));
    // сначала связи к темам и стволы (под чертами), затем остальные
    const ordered = [...EDGES].sort((p, q) => (p.kind === 'struct' ? 0 : 1) - (q.kind === 'struct' ? 0 : 1));
    for (const e of ordered) {
        const a = NODES.get(e.from), b = NODES.get(e.to);
        const pts = (e.points || [[a.x, a.y], [b.x, b.y]]).map((p) => [...p]);
        pts[0] = trim(pts[0], pts[1], sizeOf(a) / 2 + 2);
        const n = pts.length;
        pts[n - 1] = trim(pts[n - 1], pts[n - 2], sizeOf(b) / 2 + 2);
        const d = pts.map((p) => p.join(',')).join(' ');
        const cls = `edge edge-${e.kind} ${e.primary ? 'primary' : 'secondary'}`;
        const gs = ['edge-base', 'edge-glow', 'edge-core'].map((part, i) => {
            const g = svg('g', { class: cls }, layers[i]);
            svg('polyline', { points: d, class: part }, g);
            return g;
        });
        edgeEls.push({ e, gs, rank: 0 });
    }

    // узлы (группы выбора и их варианты — карточки в верхней панели, не на холсте)
    for (const n of DATA.nodes) {
        if (isCard(n)) continue;
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
            cap.style.maxWidth = `${c.maxW}px`;
            cap.textContent = n.name;
            el.appendChild(cap);
        } else {
            // центральный узел: название класса и счётчик потраченных ячеек черт (обновляет renderPanel)
            const cap = document.createElement('span');
            cap.className = 'caption cap-right root-caption';
            cap.innerHTML = `<span class="root-name">${esc(n.name)}</span>` +
                '<span class="root-points">потрачено <b id="root-used">0</b> / <b id="root-total">0</b></span>';
            el.appendChild(cap);
            n.captionSide = 'right';
        }
        const sanctReq = (n.requires || []).find((cl) => cl.every((id) => id.startsWith('sanct-')));
        if ((n.kind === 'feat' || n.kind === 'option') && (sanctReq || n.forbids?.some((id) => id.startsWith('sanct-')))) {
            const badge = document.createElement('span');
            const holy = sanctReq?.includes('sanct-holy'), unholy = sanctReq?.includes('sanct-unholy');
            badge.className = `badge ${holy && unholy ? 'b-any' : holy ? 'b-holy' : unholy ? 'b-unholy' : 'b-not-unholy'}`;
            el.appendChild(badge);
        }
        if (n.kind === 'feat') {
            const lv = document.createElement('span');
            lv.className = 'lvl-badge';
            lv.textContent = n.level;
            lv.setAttribute('aria-hidden', 'true');
            el.appendChild(lv);
        }
        if (n.kind === 'feat' || n.kind === 'option') {
            // значок замка — виден только у заблокированного узла (.node.locked, style.css)
            const lock = document.createElement('span');
            lock.className = 'lock-badge';
            lock.setAttribute('aria-hidden', 'true');
            el.appendChild(lock);
        }
        // требования-карточки (призвание, заклинание, благословение) — медальоны слева сверху
        const cardReqs = (n.requires || []).filter((cl) => cl.every((id) => isCard(NODES.get(id)) && !id.startsWith('sanct-')));
        cardReqs.slice(0, 2).forEach((clause, k) => {
            const first = NODES.get(clause[0]);
            const icon = clause.length === 1 ? first : NODES.get(first.kind === 'group' ? first.id : first.group);
            const b = document.createElement('span');
            b.className = `req-badge req-${k}`;
            // у карточек без иконок (школы волшебника) — знак-ромб вместо пустого кольца
            if (icon.image) b.style.backgroundImage = `url("images/${icon.image}")`;
            else b.classList.add('no-art');
            b.setAttribute('aria-hidden', 'true');
            el.appendChild(b);
            reqBadges.push({ el: b, clause });
        });
        nodesLayer.appendChild(el);
        nodeEls.set(n.id, el);
    }
    buildChoiceBar();   // группы выбора в сайдбаре
}

// ---------- сайдбар: группы выбора ----------
// Школа и диссертация волшебника, освящение / призвание / заклинание / благословение поборника.
// Каждая группа — раздел со списком вариантов, раскрывается кнопкой +/−; выбранный вариант
// отмечен акцентной полосой слева. ⓘ — полное описание в правой панели.

const cardEls = new Map();
const NAV_KEY = `pf2e-${CLASS_ID}-nav`;   // какие разделы свёрнуты (удобство, только в этом браузере)
function readNav() {
    try { return JSON.parse(localStorage.getItem(NAV_KEY)) || {}; } catch { return {}; }
}
function setSectionOpen(key, open, remember = true) {
    const sec = document.querySelector(`[data-sec-block="${key}"]`);
    if (!sec) return;
    sec.classList.toggle('collapsed', !open);
    const btn = sec.querySelector('.sec-toggle');
    btn.setAttribute('aria-expanded', String(open));
    btn.title = open ? 'Свернуть' : 'Развернуть';
    if (!remember) return;
    const nav = readNav();
    nav[key] = open;
    try { localStorage.setItem(NAV_KEY, JSON.stringify(nav)); } catch { /* нет доступа */ }
}

/** После загрузки сборки: раздел группы открыт, пока в нём ничего не выбрано; дальше — как оставил пользователь. */
function initNavSections() {
    const nav = readNav();
    for (const { id: gid } of CARD_GROUPS) {
        const picked = [...state.chosen].some((id) => NODES.get(id).group === gid);
        setSectionOpen(gid, nav[gid] ?? !picked, false);
    }
}

function buildChoiceBar() {
    const box = $('#choice-groups');
    for (const { id: gid } of CARD_GROUPS) {
        const g = NODES.get(gid);
        const sec = document.createElement('section');
        sec.className = 'block nav-group';
        sec.dataset.secBlock = gid;
        // заголовок раздела: название, подсказка (выбранное / «не выбрано»), ⓘ и +/−
        const head = document.createElement('h2');
        head.className = 'sec-head';
        head.innerHTML = `<button type="button" class="sec-toggle choice-head" data-sec="${esc(gid)}" aria-expanded="true">` +
            `<span class="nav-title">${esc(g.name)}</span><small class="choice-hint"></small>` +
            '<span class="nav-sign" aria-hidden="true"></span></button>' +
            `<button type="button" class="nav-more" data-more="${esc(gid)}" title="Описание: ${esc(g.name)}" aria-label="Описание: ${esc(g.name)}">i</button>`;
        sec.appendChild(head);
        cardEls.set(gid, head.querySelector('.choice-head'));
        const list = document.createElement('ul');
        list.className = 'nav-list';
        for (const o of DATA.nodes.filter((x) => x.group === gid)) {
            const li = document.createElement('li');
            li.className = 'nav-row';
            const c = document.createElement('button');
            c.type = 'button';
            c.className = `nav-item choice-card rarity-${o.rarity || 'common'}`;
            c.dataset.id = o.id;
            c.innerHTML = (o.image ? `<span class="nav-icon" style="background-image:url('images/${o.image}')" aria-hidden="true"></span>` : '') +
                `<span class="nav-name">${esc(o.name)}</span>` +
                (o.sanct ? `<span class="badge b-${o.sanct}" title="Нужно освящение «${o.sanct === 'holy' ? 'священный' : 'нечестивый'}»"></span>` : '');
            li.appendChild(c);
            li.insertAdjacentHTML('beforeend', `<button type="button" class="nav-more" data-more="${esc(o.id)}" title="Описание" aria-label="Описание: ${esc(o.name)}">i</button>`);
            list.appendChild(li);
            cardEls.set(o.id, c);
        }
        sec.appendChild(list);
        box.appendChild(sec);
    }

    box.addEventListener('click', (ev) => {
        const more = ev.target.closest('[data-more]');
        if (more) { openDetails(NODES.get(more.dataset.more)); return; }
        const c = ev.target.closest('.nav-item[data-id]');
        if (c) toggle(NODES.get(c.dataset.id));
    });
    box.addEventListener('pointerover', (ev) => {
        const c = ev.target.closest('.nav-item[data-id]');
        if (!c) return;
        hoverId = c.dataset.id;
        showTooltip(NODES.get(hoverId), c);
        render();
    });
    box.addEventListener('pointerout', (ev) => {
        const c = ev.target.closest('.nav-item[data-id]');
        if (!c || c.contains(ev.relatedTarget)) return;
        hoverId = null;
        hideTooltip();
        render();
    });
}
// раскрытие разделов сайдбара (группы выбора, «Черты», «Поиск», «Как пользоваться»)
$('#panel').addEventListener('click', (ev) => {
    const t = ev.target.closest('.sec-toggle');
    if (!t) return;
    const key = t.dataset.sec;
    setSectionOpen(key, document.querySelector(`[data-sec-block="${key}"]`).classList.contains('collapsed'));
});
for (const key of ['feats', 'search', 'help']) {
    const open = readNav()[key];
    if (open !== undefined) setSectionOpen(key, open, false);
}

let hoverId = null;

function render() {
    const searchQ = state.search.trim().toLowerCase();
    const pathIds = hoverId ? requirementPath(hoverId) : null;
    // при наведении всё, что не входит в цепочку требований, отступает на второй план
    viewport.classList.toggle('tracing', !!pathIds && pathIds.size > 1);

    for (const n of DATA.nodes) {
        const el = nodeEls.get(n.id) || cardEls.get(n.id);
        if (!el) continue;
        const on = isGranted(n) ? state.level >= n.level
            : n.kind === 'group' ? satisfied(n.id)
            : n.kind === 'hub' ? DATA.nodes.some((x) => x.theme === n.id && satisfied(x.id))
            : state.chosen.has(n.id) || !!grantedBy(n);
        const avail = !on && isChoice(n) && blockers(n).length === 0;
        const hiddenByFilter = (!state.showUncommon && n.rarity === 'uncommon' && !on)
            || (!state.showUnholy && isUnholy(n) && !on);
        const match = searchQ && [n.name, n.nameEn, ...otherNames(n).map((x) => x[1])]
            .some((v) => (v || '').toLowerCase().includes(searchQ));
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
    const raised = [];
    for (const item of edgeEls) {
        const { e, gs } = item;
        const fromOn = nodeEls.get(e.from).classList.contains('on');
        const toEl = nodeEls.get(e.to);
        const toOn = toEl.classList.contains('on');
        const on = fromOn && toOn;
        const avail = fromOn && !toOn && toEl.classList.contains('avail');
        const inPath = !!pathIds && pathIds.has(e.from) && pathIds.has(e.to);
        const filtered = nodeEls.get(e.from).classList.contains('filtered') || toEl.classList.contains('filtered');
        const dim = !!searchQ && !toEl.classList.contains('match');
        for (const g of gs) {
            g.classList.toggle('on', on);
            g.classList.toggle('avail', avail);
            g.classList.toggle('in-path', inPath);
            g.classList.toggle('filtered', filtered);
            g.classList.toggle('dim', dim);
        }
        // на общем стволе подсвеченная связь должна лежать поверх обычных
        const rank = inPath ? 3 : on ? 2 : avail ? 1 : 0;
        if (rank !== item.rank) { item.rank = rank; raised.push(item); }
    }
    if (raised.length) {
        for (const item of [...edgeEls].filter((x) => x.rank > 0).sort((p, q) => p.rank - q.rank)) {
            item.gs[1].parentNode.appendChild(item.gs[1]);
            item.gs[2].parentNode.appendChild(item.gs[2]);
        }
    }
    for (const { el, clause } of reqBadges) {
        el.classList.toggle('met', clause.some((id) => satisfied(id)));
    }
    // подсказки в заголовках групп
    for (const g of CARD_GROUPS) {
        const pickedIds = [...state.chosen].filter((id) => NODES.get(id).group === g.id);
        const picked = pickedIds.length;
        let hint = '';
        const names = pickedIds.map((id) => NODES.get(id).short || NODES.get(id).name).join(', ');
        if (g.fromLevel && state.level < g.fromLevel) hint = `с ${g.fromLevel} уровня`;
        else if (!picked) hint = g.optional ? 'не обязательно' : 'не выбрано';
        else hint = g.multi ? `${names} · ${picked} / ${groupLimit(g.id)}` : names;
        cardEls.get(g.id).classList.toggle('picked', !!picked);
        cardEls.get(g.id).querySelector('.choice-hint').textContent = hint;
    }
    renderPanel();
    scheduleLabels();   // приоритет подписей зависит от состояния узлов
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
        if (n.kind === 'group' || n.kind === 'hub') parents.push('root');
        if (n.parentId) parents.push(n.parentId);
        for (const p of parents) if (!out.has(p)) { out.add(p); stack.push(p); }
    }
    return out;
}

// ---------- панель ----------

// ---------- линия «Текущий уровень» ----------
// В каждой половине дерева (вверх и вниз от корня) — пунктир сразу за строкой последнего
// доступного уровня: всё между корнем и линией уже можно брать.
const GRID_HALVES = (META.grid && META.grid.halves) || [];
const levelLines = $('#level-lines');
function buildLevelLines() {
    levelLines.innerHTML = GRID_HALVES.map((h) =>
        `<div class="level-line" style="left:${h.minX}px;width:${h.maxX - h.minX}px"><span class="level-line-text"></span></div>`).join('');
}
function renderLevelLines() {
    GRID_HALVES.forEach((h, i) => {
        const el = levelLines.children[i];
        let k = -1;
        h.rows.forEach((r, j) => { if (r.level <= state.level) k = j; });
        el.style.top = `${k < 0 ? h.start : h.rows[k].y + h.after}px`;
        el.classList.toggle('up', h.v < 0);
        el.firstChild.textContent = `Текущий уровень: ${state.level}`;
    });
}

function renderPanel() {
    renderLevelLines();
    $('#level').value = state.level;
    $('#level-out').textContent = state.level;
    const used = chosenFeats().length, total = slotsTotal(state.level);
    $('#points-used').textContent = used;
    $('#points-total').textContent = total;
    $('#hdr-used').textContent = used;
    $('#hdr-total').textContent = total;
    $('#app-header').classList.toggle('over', used > total);
    $('#root-used').textContent = used;
    $('#root-total').textContent = total;
    nodeEls.get('root')?.querySelector('.root-points').classList.toggle('over', used > total);
    $('#points-fill').style.width = `${Math.min(100, used / total * 100)}%`;

    const feats = DATA.nodes.filter((n) => n.kind === 'feat' && (state.chosen.has(n.id) || grantedBy(n)))
        .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, 'ru'));
    $('#feat-list').innerHTML = feats.map((f) =>
        `<li><button class="feat-item" data-focus="${f.id}"><span class="lvl">${f.level}</span>${esc(f.name)}` +
        `${grantedBy(f) ? ` <small class="muted">— даёт «${esc(grantedBy(f).name)}»</small>` : ''}</button></li>`).join('');
    $('#feat-empty').hidden = feats.length > 0;
    $('#feat-count').textContent = feats.length ? `(${feats.length})` : '';
}

// ---------- подсказка и подробности ----------

// Два независимых состояния: hoverId — узел под курсором (компактная подсказка и подсветка цепочки),
// selectedId — узел, открытый в правой панели (ЛКМ). Для выбранного узла подсказка не показывается.
let tipFor = null;      // { id, el, place } — для кого открыта подсказка
function refreshTooltip() {
    if (tipFor && !tooltip.classList.contains('hidden')) showTooltip(NODES.get(tipFor.id), tipFor.el, tipFor.place);
}
function showTooltip(n, el, place = 'side') {
    if (n.id === selectedId) { hideTooltip(); return; }
    tipFor = { id: n.id, el, place };
    tooltip.innerHTML = tipHtml(n);
    tooltip.className = `tooltip rarity-${n.rarity || 'common'}`;
    const r = el.getBoundingClientRect();
    const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    let x = r.right + 14, y = r.top + r.height / 2 - th / 2;
    if (place === 'below') { x = Math.min(innerWidth - tw - 10, Math.max(10, r.left + r.width / 2 - tw / 2)); y = r.bottom + 12; }
    else if (x + tw > innerWidth - 10) x = r.left - tw - 14;
    y = Math.max(10, Math.min(innerHeight - th - 10, y));
    tooltip.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
}
function hideTooltip() { tipFor = null; tooltip.className = 'tooltip hidden'; }
document.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-take]');
    if (b && !b.disabled) toggle(NODES.get(b.dataset.take));
});

let selectedId = null;
/** Выбрать узел: полная карточка в правой панели (на узком экране — выезжает снизу). */
function openDetails(n) {
    if (selectedId !== n.id) nodeEls.get(selectedId)?.classList.remove('selected');
    selectedId = n.id;
    nodeEls.get(n.id)?.classList.add('selected');
    $('#details-content').innerHTML = `<div class="card rarity-${n.rarity || 'common'}">${cardHtml(n, true)}</div>`;
    $('#details').classList.remove('hidden');
    if (isNarrow()) setPanelCollapsed(true);
    if (tipFor?.id === n.id) hideTooltip();
}
function refreshDetails() {
    if (selectedId) openDetails(NODES.get(selectedId));
}
function closeDetails() {
    nodeEls.get(selectedId)?.classList.remove('selected');
    selectedId = null;
    $('#details').classList.add('hidden');
}

let toastTimer = 0;
function toast(msg, warn = false) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = `toast ${warn ? 'warn' : ''}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.add('hidden'), 3200);
}
function shake(n) {
    const el = nodeEls.get(n.id) || cardEls.get(n.id);
    el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
}

// ---------- камера: панорама и масштаб ----------

const cam = { x: 0, y: 0, k: 0.5 };
const MIN_K = 0.07, MAX_K = 2;

function applyCam() {
    world.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.k})`;
    viewport.style.setProperty('--k', cam.k);
    if (cam.k !== labels.k) scheduleLabels();
}

// ---------- читаемость подписей при любом масштабе ----------
// Подписи живут в координатах дерева и уменьшаются вместе с ним. Чтобы на экране они не были мельче
// --label-min, при отдалении они увеличиваются (CSS scale вокруг точки у узла). Подпись, которая
// после этого налезла бы на другие подписи или узлы, прячется (.cap-off) — видна при наведении.
// Приоритет: темы → выбранные → доступные → остальные, младшие уровни раньше.

const labels = { k: null, raf: 0, boxes: null };
const cssPx = (name) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0;
const LABEL = {
    min: cssPx('--label-min'), minHub: cssPx('--label-min-hub'),
    fs: cssPx('--label-fs'), fsHub: cssPx('--label-fs-hub'),
    badgeMin: cssPx('--badge-min'), badgeFs: cssPx('--badge-fs'), rootPointsFs: cssPx('--root-points-fs'),
};
const CAP_GAP = 8;     // отступ подписи от рамки — как в .cap-* (style.css)
const BADGE_H = 18;    // высота .lvl-badge (style.css)

// ---------- слишком светлые иконки ----------
// Иконки BG3 в основном тёмные; несколько почти белых (свиток Oghma и т.п.) выбиваются из палитры.
// Для каждой иконки один раз на маленьком холсте считается доля почти белых непрозрачных пикселей:
// у белых силуэтов она ~1, у обычных иконок ≤ 0.35. Выше порога (--art-white-max) — класс .bright-art
// и тёплый тон --art-tone (style.css). Порог и тон — токены, без списка файлов.
function toneBrightIcons() {
    const max = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--art-white-max')) || 0.6;
    const byImage = new Map();
    for (const [id, el] of nodeEls) {
        const img = NODES.get(id).image;
        if (img) (byImage.get(img) || byImage.set(img, []).get(img)).push(el);
    }
    const c = document.createElement('canvas');
    c.width = c.height = 24;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    for (const [src, els] of byImage) {
        const im = new Image();
        im.onload = () => {
            ctx.clearRect(0, 0, 24, 24);
            ctx.drawImage(im, 0, 0, 24, 24);
            let white = 0, cnt = 0;
            const d = ctx.getImageData(0, 0, 24, 24).data;
            for (let i = 0; i < d.length; i += 4) {
                if (d[i + 3] < 128) continue;   // прозрачный фон не считаем
                if ((0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255 > 0.8) white++;
                cnt++;
            }
            const bright = cnt && white / cnt > max;
            for (const el of els) el.classList.toggle('bright-art', !!bright);
        };
        im.src = `images/${src}`;
    }
}

function scheduleLabels() {
    if (!labels.raf) labels.raf = requestAnimationFrame(() => { labels.raf = 0; updateLabels(); });
}
/** Размеры подписей без масштаба — один раз (и после загрузки шрифтов). */
function measureLabels() {
    labels.boxes = [];
    for (const [id, el] of nodeEls) {
        const cap = el.querySelector('.caption');
        if (!cap) continue;
        const n = NODES.get(id);
        labels.boxes.push({ n, el, cap, side: n.captionSide || 'below', w: cap.offsetWidth, h: cap.offsetHeight, size: sizeOf(n) });
    }
    labels.k = null;
    scheduleLabels();
}
/** Прямоугольник подписи в координатах дерева при увеличении s. */
function captionRect(b, s) {
    const { n, side, size } = b, w = b.w * s, h = b.h * s, r = size / 2 + CAP_GAP, d = size * 0.3536 + 4;
    let x, y;
    switch (side) {
        case 'above': x = n.x - w / 2; y = n.y - r - h; break;
        case 'right': x = n.x + r; y = n.y - h / 2; break;
        case 'left': x = n.x - r - w; y = n.y - h / 2; break;
        case 'below-right': x = n.x + d; y = n.y + d; break;
        case 'below-left': x = n.x - d - w; y = n.y + d; break;
        case 'above-right': x = n.x + d; y = n.y - d - h; break;
        case 'above-left': x = n.x - d - w; y = n.y - d - h; break;
        default: x = n.x - w / 2; y = n.y + r;
    }
    return { x1: x, y1: y, x2: x + w, y2: y + h };
}
function updateLabels() {
    if (!labels.boxes) return;
    const k = cam.k;
    labels.k = k;
    const capFs = { feat: LABEL.fs, option: LABEL.fs, hub: LABEL.fsHub };
    const capScale = (kind, min) => Math.max(1, min / ((capFs[kind] || LABEL.fs) * k));
    const scale = { feat: capScale('feat', LABEL.min), hub: capScale('hub', LABEL.minHub), option: capScale('option', LABEL.min),
        root: Math.max(1, LABEL.min / (LABEL.rootPointsFs * k)) };   // по меньшей строке — счётчику
    viewport.style.setProperty('--cap-s-feat', scale.feat);
    viewport.style.setProperty('--cap-s-hub', scale.hub);
    viewport.style.setProperty('--cap-s-option', scale.option);
    viewport.style.setProperty('--cap-s-root', scale.root);

    // бейдж уровня: не мельче --badge-min; прячется, когда перерастает половину узла
    const badgeS = Math.max(1, LABEL.badgeMin / (LABEL.badgeFs * k));
    viewport.style.setProperty('--badge-s', badgeS);
    viewport.classList.toggle('badges-off', BADGE_H * badgeS > NODE_SIZE.feat * 0.5);

    // жадная расстановка подписей по приоритету, без наложений
    const pad = 4 / k;   // зазор между подписями — 4px на экране
    const heading = (b) => b.n.kind === 'hub' || b.n.kind === 'root';
    const rank = (b) => (heading(b) ? 0 : b.el.classList.contains('on') ? 1 : b.el.classList.contains('avail') ? 2 : 3);
    const order = labels.boxes.filter((b) => !b.el.classList.contains('filtered'))
        .sort((a, b) => rank(a) - rank(b) || (a.n.level || 0) - (b.n.level || 0));
    const nodeRects = order.map((b) => ({ id: b.n.id, x1: b.n.x - b.size / 2, y1: b.n.y - b.size / 2, x2: b.n.x + b.size / 2, y2: b.n.y + b.size / 2 }));
    const hit = (a, b) => a.x1 < b.x2 + pad && b.x1 < a.x2 + pad && a.y1 < b.y2 + pad && b.y1 < a.y2 + pad;
    const placed = [];
    for (const b of order) {
        const s = scale[b.n.kind] || scale.option;
        const r = captionRect(b, s);
        // заголовки веток уступают только друг другу (узлы им не помеха); остальные подписи — всем
        const ok = heading(b)
            ? !placed.some((p) => hit(r, p))
            : !placed.some((p) => hit(r, p)) && !nodeRects.some((nr) => nr.id !== b.n.id && hit(r, nr));
        b.cap.classList.toggle('cap-off', !ok);
        if (ok) placed.push(r);
    }
}
function zoomAt(factor, cx, cy) {
    const k = Math.min(MAX_K, Math.max(MIN_K, cam.k * factor));
    const f = k / cam.k;
    cam.x = cx - (cx - cam.x) * f;
    cam.y = cy - (cy - cam.y) * f;
    cam.k = k;
    applyCam();
}
/**
 * Свободная от панелей часть экрана: правее левой панели, ниже верхней.
 * Легенда в правом нижнем углу отнимает либо полосу справа, либо полосу снизу —
 * выбирается та, при которой дерево (aspect = ширина / высота) помещается крупнее.
 */
function freeArea(aspect = 1) {
    const vw = viewport.clientWidth, vh = viewport.clientHeight, M = 12;
    const panel = document.body.classList.contains('panel-collapsed') ? null : $('#panel').getBoundingClientRect();
    const area = { left: (panel ? panel.right : 0) + M, top: $('#app-header').getBoundingClientRect().bottom + M, right: vw - M,
        bottom: vh - M };
    const legend = $('#map-legend')?.getBoundingClientRect();
    const zoomCtl = $('#zoom-ctl').getBoundingClientRect();
    const corner = { w: vw - Math.min(legend?.width ? legend.left : vw, zoomCtl.left), h: vh - Math.min(legend?.height ? legend.top : vh, zoomCtl.top) };
    const byRight = { ...area, right: vw - corner.w - M };
    const byBottom = { ...area, bottom: vh - corner.h - M };
    const fit = (a) => Math.min((a.right - a.left) / aspect, a.bottom - a.top);
    return fit(byRight) >= fit(byBottom) ? byRight : byBottom;
}
function centerOn(x, y, k = cam.k, animate = true, area = freeArea()) {
    cam.k = k;
    cam.x = (area.left + area.right) / 2 - x * k;
    cam.y = (area.top + area.bottom) / 2 - y * k;
    world.classList.toggle('animate', animate);
    applyCam();
    if (animate) setTimeout(() => world.classList.remove('animate'), 450);
}
/** Вписать всё дерево в свободную область (кнопка ⤢, клавиши 0 / Home). */
function fitAll(animate = true) {
    const b = DATA.meta.bounds;
    const bw = b.maxX - b.minX, bh = b.maxY - b.minY;
    const area = freeArea(bw / bh);
    const w = area.right - area.left - 16, h = area.bottom - area.top - 16;
    if (w <= 0 || h <= 0) return; // окно ещё не показано
    const k = Math.min(w / bw, h / bh);
    centerOn((b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2, Math.max(MIN_K, Math.min(1, k)), animate, area);
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
        if (!drag.moved && drag.node && ev.type === 'pointerup') tapNode(NODES.get(drag.node));
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
// ЛКМ по узлу — выбрать (панель справа), второй щелчок по тому же узлу подряд — взять / убрать.
// Двойной клик считаем сами: из-за захвата указателя событие dblclick приходит не на узел.
let lastTap = { id: null, t: 0 };
function tapNode(n) {
    const now = performance.now(), dbl = lastTap.id === n.id && now - lastTap.t < 400;
    lastTap = dbl ? { id: null, t: 0 } : { id: n.id, t: now };
    if (dbl && isChoice(n)) toggle(n);
    else openDetails(n);
}
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
    if (ev.key === 'Escape') hideTooltip();
});
// с клавиатуры: подсказка у узла в фокусе (Tab) и цепочка требований — как при наведении
nodesLayer.addEventListener('focusin', (ev) => {
    const el = ev.target.closest('.node');
    if (!el || drag) return;
    showTooltip(NODES.get(el.dataset.id), el);
    if (el.matches(':focus-visible')) { hoverId = el.dataset.id; render(); }
});
nodesLayer.addEventListener('focusout', (ev) => {
    if (ev.relatedTarget?.closest?.('.node')) return;
    hideTooltip();
    if (hoverId) { hoverId = null; render(); }
});

// ---------- элементы панели ----------

let levelBefore = null;   // сборка до начала движения ползунка — для «Отменить»
$('#level').addEventListener('input', (ev) => {
    if (levelBefore === null) levelBefore = encodeBuild();
    state.level = Number(ev.target.value);
    const removed = prune();
    if (removed.length) toast(`Снято из-за уровня: ${removed.map((r) => r.name).join(', ')}`, true);
    save();
    render();
    refreshDetails();
});
$('#level').addEventListener('change', () => {
    if (levelBefore !== null) pushUndo(levelBefore);
    levelBefore = null;
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
function resetBuild() {
    const before = encodeBuild();
    state.chosen.clear();
    state.level = 1;
    history.replaceState(null, '', location.pathname + location.search);
    pushUndo(before);
    save();
    render();
    refreshTooltip();
    if (before !== encodeBuild()) toast('Сборка сброшена — «Отменить» вернёт её');
}
// подтверждение больше не нужно: сброс можно отменить
for (const b of document.querySelectorAll('[data-reset]')) b.addEventListener('click', resetBuild);
for (const b of document.querySelectorAll('[data-undo]')) b.addEventListener('click', undo);
$('#btn-share').addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}?class=${CLASS_ID}#b=${encodeURIComponent(encodeBuild())}`;
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
    if ((ev.ctrlKey || ev.metaKey) && !ev.shiftKey && ev.key.toLowerCase() === 'z' && !ev.target.matches('input[type=search]')) {
        ev.preventDefault();
        undo();
        return;
    }
    if (ev.target.matches('input')) return;
    if (ev.key === 'Escape') { hideTooltip(); closeDetails(); }
    if (ev.key === '0' || ev.key === 'Home') fitAll();
});
for (const b of document.querySelectorAll('[data-zoom]')) {
    // масштаб кнопками — относительно центра свободной области
    b.addEventListener('click', () => {
        const a = freeArea();
        zoomAt(Number(b.dataset.zoom), (a.left + a.right) / 2, (a.top + a.bottom) / 2);
    });
}
$('#btn-fit').addEventListener('click', () => fitAll());
addEventListener('resize', () => applyCam());
/** Высота шапки — отступ для боковых панелей (CSS --header-h); на узком экране шапка переносится. */
function syncHeaderHeight() {
    document.documentElement.style.setProperty('--header-h', `${$('#app-header').offsetHeight}px`);
}
if ('ResizeObserver' in window) new ResizeObserver(syncHeaderHeight).observe($('#app-header'));

// ---------- класс: заголовки, вкладки, фильтры ----------

/** Кнопки перевода в шапке (только у классов с несколькими переводами). */
function buildLangSwitch() {
    const box = $('#lang-switch');
    if (LANGS.length < 2) return;
    box.hidden = false;
    box.innerHTML = '<span class="lang-label">Перевод:</span>' + LANGS.map((l) =>
        `<button type="button" class="lang-btn" role="radio" data-lang="${esc(l.id)}" title="${esc(l.title)}">${esc(l.label)}</button>`).join('');
    box.addEventListener('click', (ev) => {
        const b = ev.target.closest('[data-lang]');
        if (b && b.dataset.lang !== lang) setLang(b.dataset.lang);
    });
    markLang();
}
function markLang() {
    for (const b of document.querySelectorAll('.lang-btn')) {
        const on = b.dataset.lang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-checked', String(on));
    }
}
/** Переключить перевод: меняется текст в узлах, сайдбаре и карточках; граф и раскладка — те же. */
function setLang(id) {
    applyLang(id);
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* нет доступа */ }
    markLang();
    refreshTexts();
    render();
    refreshDetails();
    refreshTooltip();
    measureLabels();   // ширина подписей изменилась — пересчитать, какие помещаются
    toast(`Локализация: ${langInfo().title}`);
}
/** Переписать тексты, которые были вставлены в DOM при построении. */
function refreshTexts() {
    for (const [id, el] of nodeEls) {
        const n = NODES.get(id);
        el.setAttribute('aria-label', `${n.name}${n.level ? `, уровень ${n.level}` : ''}`);
        const cap = el.querySelector('.caption:not(.root-caption)');
        if (cap) cap.textContent = n.name;
        const rn = el.querySelector('.root-name');
        if (rn) rn.textContent = n.name;
        const lv = el.querySelector('.lvl-badge');
    }
    for (const [id, el] of cardEls) {
        const n = NODES.get(id);
        const title = el.querySelector('.nav-title');
        if (title) title.textContent = n.name;
        const name = el.querySelector('.nav-name');
        if (name) name.textContent = n.name;
    }
    for (const b of document.querySelectorAll('#choice-groups [data-more]')) {
        const n = NODES.get(b.dataset.more);
        b.title = `Описание: ${n.name}`;
        b.setAttribute('aria-label', b.title);
    }
    setTermLabels();
}
/** Подписи интерфейса, где встречается слово «черта» / «способность». */
function setTermLabels() {
    const featsHead = document.querySelector('[data-sec="feats"] span');
    if (featsHead) featsHead.textContent = T.Feats;
    const pts = $('.points-text');
    if (pts) pts.firstChild.textContent = `${T.Feats} класса: `;
    const search = $('#search');
    if (search) search.placeholder = `Название (${T.feat === 'черта' ? 'черты' : 'способности'})…`;
    const src = langInfo();
    // шапка: название класса и пометка о текстах — по выбранному переводу
    const root = NODES.get('root');
    $('#class-name').textContent = root.name || META.className;
    document.title = `${$('#class-name').textContent} — дерево ${T.feats === 'черты' ? 'черт' : 'способностей'}`;
    $('#class-note').textContent = src && src.id !== DEFAULT_LANG ? `Тексты: ${src.label}` : (META.note || '');
    const cardNames = CARD_GROUPS.map((g) => NODES.get(g.id).name.toLowerCase());
    $('#legend-cards').textContent = `Слева — группы выбора: ${cardNames.join(', ')}`;
    $('#legend-card-req').textContent = `нужна карточка (${cardNames.join(', ')})`;
    $('#data-source').innerHTML = `Данные: <a href="${esc(META.source)}" target="_blank" rel="noopener noreferrer">${esc(SOURCE_NAME)}</a>` +
        (src && src.id !== DEFAULT_LANG ? `, тексты: ${esc(src.source)}` : '') +
        `, обновлено ${new Date(META.fetchedAt).toLocaleDateString('ru-RU')}. Обновить: <code>${esc(META.updateCmd || 'node tools/fetch-pf2.mjs')}</code>`;
}

function setupClass() {
    const root = NODES.get('root');
    document.title = `${META.className} — дерево черт`;
    $('#class-name').textContent = META.className;
    if (META.note) $('#class-note').textContent = META.note;
    if (root.image) $('.crest').style.backgroundImage = `url("images/${root.image}")`;
    $('#level').max = MAX_LEVEL;
    $('#level-max').textContent = MAX_LEVEL < 20 ? `из ${MAX_LEVEL}` : '';
    const tabs = $('#class-tabs');
    tabs.innerHTML = CLASSES.map((c) => `<a class="class-tab${c.id === CLASS_ID ? ' active' : ''}" href="?class=${c.id}"` +
        `${c.id === CLASS_ID ? ' aria-current="page"' : ''}>${esc(c.name)}${c.note ? `<small>${esc(c.note)}</small>` : ''}</a>`).join('');
    // фильтры и легенда, относящиеся к другим классам, прячем
    for (const el of document.querySelectorAll('[data-filter]')) el.hidden = !(META.filters || []).includes(el.dataset.filter);
    for (const el of document.querySelectorAll('[data-legend]')) el.hidden = !(META.legend || []).includes(el.dataset.legend);
    const cardNames = CARD_GROUPS.map((g) => NODES.get(g.id).name.toLowerCase());
    $('#legend-cards').textContent = `Слева — группы выбора: ${cardNames.join(', ')}`;
    $('#legend-card-req').textContent = `нужна карточка (${cardNames.join(', ')})`;
    // значок в легенде — как на узлах: иконка первой карточки или ромб, если иконок у карточек нет
    const sample = DATA.nodes.find((x) => x.group === CARD_GROUPS[0]?.id && x.image);
    const lg = $('.legend-req');
    if (lg) {
        lg.style.backgroundImage = sample ? `url("images/${sample.image}")` : '';
        lg.classList.toggle('no-art', !sample);
    }
}

// ---------- старт ----------

const isNarrow = () => matchMedia('(max-width: 720px)').matches;
if (isNarrow()) setPanelCollapsed(true);
setupClass();
buildScene();
buildLevelLines();
measureLabels();
toneBrightIcons();
document.fonts?.ready.then(measureLabels);   // ширина подписей меняется, когда догружается шрифт
syncHeaderHeight();
load();
initNavSections();
buildLangSwitch();
setTermLabels();
render();
updateUndo();
fitAll(false);
