// ============================================================
// Сборка графа поборника из data/champion/source/pf2ru.json.
//
//   node tools/build-graph.mjs      — пересобрать data/champion/build/ без скачивания
//
// Ручные данные — в data/champion/manual/:
//   rules.json   какие призвания требуют освящения, благословения, заклинания преданности,
//                исправления критериев (overrides), темы и тема по названию черты, группы выбора
//   images.json  иконки узлов и черт
//   labels.json  переводы (сейчас только pf2.ru) и подписи узлов, которых нет на сайте: корень, группы, темы
// Здесь остаётся только логика: как текстовые критерии («благословенный щит»,
// «аура поборника»…) превращаются в связи.
//
// Требования узла: requires = [[a, b], [c]]  →  (a ИЛИ b) И c
//                  forbids  = [x]           →  нельзя, если взят x
// ============================================================

import { computeTreeLayout, GEOMETRY } from './tree-layout.mjs';
import { readSource, readManual, writeBuild, isMain } from './class-build.mjs';

// ---------- ручные данные (data/champion/manual) ----------

const rules = await readManual('champion', 'rules');
const images = await readManual('champion', 'images');
const labels = await readManual('champion', 'labels');
const L = labels.texts.pf2ru;

/** Освящение призваний: holy / unholy / null (любое). */
const CAUSE_SANCT = rules.causeSanct;
const BLESSINGS = rules.blessings.map((b) => ({ ...b, image: images.nodes[b.id] }));
/** Только эти заклинания выбираются при создании (остальные дают черты). */
const DEVOTION_SPELLS = rules.devotionSpells;
const IMAGES = images.nodes;
/** Картинки черт по английскому названию. */
const FEAT_IMAGES = images.feats;
/** Ручные переопределения требований (по английскому названию черты). */
const OVERRIDES = rules.overrides;
/** Узлы-темы: стволы, от которых растут черты без черт-предшественников. */
const THEMES = rules.themes.map((id) => ({ id, name: L[id].name, html: L[id].html, image: images.nodes[id] }));
const THEME_BY_NAME = rules.themeByName;

/** Тема черты без черт-предшественников: сначала ручной список (rules.themeByName), потом по критериям. */
function themeOf(n) {
    if (THEME_BY_NAME[n.nameEn]) return THEME_BY_NAME[n.nameEn];
    const ids = (n.requires || []).flat();
    if (ids.some((id) => id.startsWith('cause-') || id === 'group-cause')) return 'theme-cause';
    if (ids.some((id) => id.startsWith('spell-') || id === 'group-devotion')) return 'theme-devotion';
    if (ids.some((id) => id.startsWith('blessing-') || id === 'group-blessing')) return 'theme-blessing';
    if (ids.some((id) => id.startsWith('sanct-'))) return 'theme-sanct';
    return null;
}

// ---------- сборка ----------

/**
 * Черты, которых нет на pf2.ru, но они есть в другом переводе (rules.extraFeats): берутся с AoN
 * (data/champion/source/aon.json) на английском и помечаются для pf2.ru пометкой labels.notes.noRu.
 */
function extraFeats(raw, aon) {
    if (!aon || !(rules.extraFeats || []).length) return [];
    const have = new Set(raw.feats.map((f) => f.nameEn));
    const out = [];
    for (const name of rules.extraFeats) {
        if (have.has(name)) continue;
        const f = aon.feats.find((x) => x.name === name);
        if (!f) { console.warn(`  ! черты «${name}» нет на AoN`); continue; }
        out.push({ ...f, note: labels.notes?.noRu, extra: true });
    }
    return out;
}

export function buildGraph(raw, aon = null) {
    raw = { ...raw, feats: [...raw.feats, ...extraFeats(raw, aon)] };
    const nodes = [];
    const warnings = [];
    const add = (n) => { nodes.push({ image: IMAGES[n.id] || null, ...n }); return n; };

    add({ id: 'root', kind: 'root', nameEn: 'Champion', level: 0, ...L.root });

    // --- Освящение ---
    add({ id: 'group-sanct', kind: 'group', level: 0, branch: 'sanct', html: raw.features.sanctification, ...L['group-sanct'] });
    for (const [id, key, en] of [['sanct-holy', 'Священный', 'Holy'], ['sanct-unholy', 'Нечестивый', 'Unholy']]) {
        add({ id, kind: 'option', group: 'group-sanct', name: key, nameEn: en, level: 1, branch: 'sanct',
            rarity: id === 'sanct-unholy' ? 'uncommon' : 'common',
            html: raw.features.sanctOptions[key] || '', requires: [] });
    }

    // --- Призвание ---
    add({ id: 'group-cause', kind: 'group', level: 0, branch: 'cause', html: raw.features.cause, ...L['group-cause'] });
    for (const c of raw.causes) {
        const sanct = CAUSE_SANCT[c.id];
        // убираем строку «Источник» и заглушку вложенного вьюбокса
        let html = c.html
            .replace(/^<b>Источник:<\/b>[\s\S]*?<br>\s*/, '')
            .replace(/<h2[\s\S]*$/, '')
            .trim();
        if (c.reaction) {
            const f = Object.entries(c.reaction.fields).filter(([k]) => k !== 'Источник')
                .map(([k, v]) => `<b>${k}:</b> ${v}`).join('<br>');
            html += `<h4 class="sub-ability">Ответное действие: ${c.reaction.name}</h4>${f ? f + '<hr>' : ''}${c.reaction.html}`;
        }
        add({
            id: `cause-${c.id}`, kind: 'option', group: 'group-cause', name: c.name, level: 1, branch: 'cause',
            url: c.url, html, rarity: sanct === 'unholy' ? 'uncommon' : 'common',
            sanct, requires: sanct ? [[`sanct-${sanct}`]] : [],
            prereqText: sanct === 'holy' ? 'освящение «священный»' : sanct === 'unholy' ? 'освящение «нечестивый»' : '',
        });
    }

    // --- Заклинания преданности ---
    add({ id: 'group-devotion', kind: 'group', level: 0, branch: 'devotion', html: raw.features.devotion, ...L['group-devotion'] });
    for (const id of DEVOTION_SPELLS) {
        const s = raw.spells.find((x) => x.id === id);
        if (!s) { warnings.push(`нет заклинания ${id}`); continue; }
        add({ id: `spell-${id}`, kind: 'option', group: 'group-devotion', name: s.name, nameEn: s.nameEn, level: 1,
            branch: 'devotion', url: s.url, actions: s.actions, traits: s.traits, rarity: 'common',
            fields: s.fields, html: s.html, requires: [] });
    }

    // --- Благословение верного ---
    add({ id: 'group-blessing', kind: 'group', level: 0, branch: 'blessing', html: raw.features.blessing, ...L['group-blessing'] });
    for (const b of BLESSINGS) {
        add({ id: b.id, kind: 'option', group: 'group-blessing', name: b.key, level: 3, branch: 'blessing',
            image: b.image, html: raw.features.blessingOptions[b.key] || '', requires: [] });
    }

    // Аура поборника и Блок щитом — гарантированные особенности 1 уровня:
    // они есть у каждого поборника, поэтому узлами не рисуются, а условия
    // «аура поборника» / «Блок щитом» в критериях черт считаются выполненными.

    // --- Темы: промежуточные узлы между корнем и чертами ---
    for (const th of THEMES) {
        add({ id: th.id, kind: 'hub', name: th.name, level: 0, image: th.image, html: th.html, requires: [] });
    }

    // --- Черты ---
    const featIds = new Set(raw.feats.map((f) => f.id));
    for (const f of raw.feats) {
        const id = `feat-${f.id}`;
        let requires = [];
        let forbids = [];
        for (const l of f.prereqLinks) {
            if (l.type === 'feat') {
                if (l.id === 5212) { /* Блок щитом есть у всех */ }
                else if (featIds.has(l.id)) requires.push([`feat-${l.id}`]);
                else warnings.push(`${f.name}: неизвестная черта ${l.id}`);
            } else if (l.type === 'spell') {
                if (DEVOTION_SPELLS.includes(l.id)) requires.push([`spell-${l.id}`]);
            } else if (l.type === 'championcause') {
                requires.push([`cause-${l.id}`]);
            } else if (l.type === 'trait') {
                if (l.id === 517) requires.push(['sanct-holy']);
                else if (l.id === 521) requires.push(['sanct-unholy']);
            }
        }
        const t = f.prerequisitesText.toLowerCase();
        if (t.includes('благословенное оружие')) requires.push(['blessing-armament']);
        if (t.includes('благословенный щит')) requires.push(['blessing-shield']);
        if (t.includes('благословенная скорость')) requires.push(['blessing-swiftness']);
        if (t.includes('благословение верного')) requires.push(['group-blessing']);
        if (t.includes('заклинания преданности')) requires.push(['group-devotion']);
        if (/^ответное действие поборника$/.test(t.trim())) requires.push(['group-cause']);
        if (/клятва/.test(t) && /дескриптор/.test(t)) {
            requires = [raw.feats.filter((x) => x.traits.some((tr) => tr.slug === 'oath')).map((x) => `feat-${x.id}`)];
        }

        const ov = OVERRIDES[f.nameEn];
        if (ov) { requires = ov.requires ?? requires; forbids = ov.forbids ?? forbids; }

        // убрать дубли
        const seen = new Set();
        requires = requires.filter((c) => { const k = c.join('|'); if (seen.has(k)) return false; seen.add(k); return true; });

        const guaranteed = /аура поборника|блок щитом/.test(t);
        if (f.prerequisitesText && requires.length === 0 && !ov && !guaranteed) {
            warnings.push(`${f.name}: критерии не распознаны → «${f.prerequisitesText}»`);
        }

        add({
            id, kind: 'feat', name: f.name, nameEn: f.nameEn, level: f.level, url: f.url,
            actions: f.actions, traits: f.traits, rarity: f.rarity, legacy: f.legacy, source: f.source,
            prereqText: f.prerequisitesText, prereqHtml: f.prerequisitesHtml,
            fields: f.fields, html: f.html, requires, forbids,
            image: FEAT_IMAGES[f.nameEn] || null,
            ...(f.extra ? { note: f.note } : {}),
        });
        if (!FEAT_IMAGES[f.nameEn] && !f.extra) warnings.push(`${f.name}: нет картинки`);
    }

    // --- Связи ---
    const ids = new Set(nodes.map((n) => n.id));
    const edges = [];
    const pushEdge = (from, to, kind) => {
        if (!ids.has(from) || !ids.has(to)) { warnings.push(`связь ${from} → ${to}: узел не найден`); return; }
        if (!edges.some((e) => e.from === from && e.to === to)) edges.push({ from, to, kind });
    };
    // Дерево: у каждой черты один родитель. Если среди критериев есть черты —
    // родитель самая высокоуровневая из них, иначе — узел темы.
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const feats = nodes.filter((n) => n.kind === 'feat');
    for (const n of feats) {
        const featReqs = (n.requires || []).map((cl) => cl.filter((id) => byId.get(id)?.kind === 'feat')).filter((cl) => cl.length);
        if (featReqs.length) {
            const cands = featReqs.map((cl) => cl[0]).sort((a, b) => byId.get(b).level - byId.get(a).level);
            n.parentId = cands[0];
        } else {
            n.parentId = themeOf(n);
            if (!n.parentId) warnings.push(`${n.name}: тема не определена`);
        }
    }
    // тема у цепочек — от корня цепочки
    for (const n of feats) {
        let cur = n;
        while (byId.get(cur.parentId)?.kind === 'feat') cur = byId.get(cur.parentId);
        n.theme = cur.parentId;
    }
    for (const n of feats) if (!n.image) n.image = IMAGES[n.theme] || null;
    for (const th of THEMES) pushEdge('root', th.id, 'struct');
    for (const n of feats) {
        if (byId.get(n.parentId)?.kind === 'hub') pushEdge(n.parentId, n.id, 'theme');
        // связи только между чертами: карточки (призвание, заклинание, благословение,
        // освящение) показываются значками на узле
        for (const clause of n.requires || []) {
            for (const from of clause) {
                if (byId.get(from)?.kind === 'feat') pushEdge(from, n.id, clause.length > 1 ? 'or' : 'req');
            }
        }
    }
    for (const e of edges) e.primary = byId.get(e.to).parentId === e.from || e.kind === 'struct';

    // раскладка: стволы тем
    const layout = computeTreeLayout(nodes, edges, { log: true });

    return {
        meta: {
            classId: rules.class.id, className: L.root.name, classGen: rules.class.gen,
            source: raw.source, fetchedAt: raw.fetchedAt,
            featLevels: rules.class.featLevels, maxLevel: rules.class.maxLevel,
            // группы выбора: limit — сколько можно взять, bonus — черта, дающая ещё одну
            cardGroups: rules.cardGroups,
            filters: rules.filters,
            legend: rules.legend,
            updateCmd: 'node tools/fetch-pf2.mjs',
            note: 'Русский · pf2.ru',
            pendingLangs: labels.pendingLangs || [],
            geometry: GEOMETRY, layout: layout.stats, bounds: layout.bounds, grid: layout.grid,
        },
        nodes,
        edges,
        warnings,
    };
}

/**
 * Тексты локализации «оригинал» (Archives of Nethys, data/champion/source/aon.json) к узлам графа pf2.ru:
 * черты и призвания — по id, заклинания — по id, освящение и благословения — по варианту.
 * Каждое текстовое поле задаётся явно (null — убрать), чтобы русский текст pf2.ru не просачивался.
 * Чего на AoN нет, остаётся текстом pf2.ru — сборка об этом предупреждает.
 */
function aonTexts(graph, aon) {
    const LA = labels.texts.aon || {};
    const empty = { name: null, short: null, html: null, prereqText: null, prereqHtml: null, fields: null, traits: null, url: null, source: null, hint: null, note: null };
    const out = {};
    const missing = [];
    const feats = new Map(aon.feats.map((f) => [f.id, f]));
    const causes = new Map(aon.causes.map((c) => [c.id, c]));
    const spells = new Map(aon.spells.map((x) => [x.id, x]));
    const SANCT = { 'sanct-holy': 'Holy', 'sanct-unholy': 'Unholy' };
    const BLESS = { 'blessing-armament': 'Blessed Armament', 'blessing-shield': 'Blessed Shield', 'blessing-swiftness': 'Blessed Swiftness' };
    const GROUP_HTML = { 'group-sanct': 'sanctification', 'group-cause': 'cause', 'group-devotion': 'devotion', 'group-blessing': 'blessing' };
    for (const n of graph.nodes) {
        let t = null;
        const num = Number(n.id.split('-').pop());
        if (n.kind === 'root') t = { ...LA.root, url: aon.source };
        else if (n.kind === 'group') t = { ...LA[n.id], html: aon.features[GROUP_HTML[n.id]] };
        else if (n.kind === 'hub') t = LA[n.id];
        else if (SANCT[n.id]) t = { name: SANCT[n.id], html: aon.features.sanctOptions[SANCT[n.id]] };
        else if (BLESS[n.id]) t = { name: BLESS[n.id], html: aon.features.blessingOptions[BLESS[n.id]] };
        else if (n.id.startsWith('cause-') && causes.has(num)) {
            const c = causes.get(num);
            t = { name: c.name, html: c.html, url: c.url,
                prereqText: n.sanct === 'holy' ? 'holy sanctification' : n.sanct === 'unholy' ? 'unholy sanctification' : null };
        } else if (n.id.startsWith('spell-') && spells.has(num)) {
            const x = spells.get(num);
            t = { name: x.name, html: x.html, url: x.url, traits: x.traits, fields: x.fields, source: x.source };
        } else if (n.kind === 'feat' && feats.has(num)) {
            const f = feats.get(num);
            t = { name: f.name, html: f.html, url: f.url, source: f.source, traits: f.traits, fields: f.fields,
                prereqText: f.prerequisitesText, prereqHtml: f.prerequisitesHtml };
        }
        if (!t || !t.name) { missing.push(n.id); continue; }
        out[n.id] = { ...empty, ...t };
    }
    console.log(`  оригинал (AoN): текстов ${Object.keys(out).length}${missing.length ? `; нет на AoN — остаются pf2.ru: ${missing.join(', ')}` : ''}`);
    return out;
}

/** Записать собранного поборника: data/champion/build/graph.js и тексты (pf2.ru и, если скачан, оригинал AoN). */
export async function writeChampion(raw, by) {
    let aon = null;
    try { aon = await readSource('champion', 'aon'); } catch { console.log('  нет data/champion/source/aon.json — оригинал не собирается (node tools/fetch-champion-aon.mjs)'); }
    const graph = buildGraph(raw, aon);
    const langs = aon ? labels.langs : labels.langs.filter((l) => !['aon', 'doc'].includes(l.id));
    const extra = {};
    if (aon) {
        extra.aon = aonTexts(graph, aon);
        extra.doc = await docTexts(graph, extra.aon);
    }
    await writeBuild('champion', graph, langs, extra, by);
}

/**
 * Тексты перевода Дока и Юры (data/champion/manual/doc-yura.json, по английскому названию черты).
 * Чего в переводе нет, показывается оригиналом AoN с пометкой — сами не переводим и из pf2.ru не берём.
 * Названия корня, групп и тем — наши подписи интерфейса (как у pf2.ru), описания групп и вариантов — AoN.
 */
async function docTexts(graph, aonText) {
    const doc = await readManual('champion', 'doc-yura');
    const N = labels.notes || {};
    const LD = labels.texts.doc || {};
    const out = {};
    let own = 0, en = 0;
    for (const n of graph.nodes) {
        const a = aonText[n.id];
        const d = n.kind === 'feat' ? doc.feats[n.nameEn] : null;
        if (d) {
            out[n.id] = { ...a, name: d.name, html: d.html, prereqText: d.prereq ?? null, prereqHtml: null,
                fields: d.fields || null, note: null, ...(d.partial ? { note: N.partial } : {}) };
            own++;
        } else if (LD[n.id]) {
            // подписи и тексты из перевода (labels.texts.doc): у побуждений — краткая строка перевода,
            // ниже полный текст оригинала; у заклинаний — только название
            const t = LD[n.id];
            const html = t.html ?? (t.short ? `<p>${t.short}</p><hr>${a?.html || ''}` : a?.html);
            out[n.id] = { ...a, name: t.name, html, hint: t.hint ?? null, note: t.note ?? null, short: null };
            if (n.id.startsWith('cause-')) {
                out[n.id].prereqText = n.sanct === 'holy' ? 'освящение «святое»' : n.sanct === 'unholy' ? 'освящение «нечестивое»' : null;
            }
        } else if (n.kind === 'root' || n.kind === 'hub' || n.kind === 'group') {
            out[n.id] = { ...a, name: L[n.id]?.name ?? a?.name, hint: L[n.id]?.hint ?? null,
                note: n.kind === 'hub' ? null : N.ownEn };
        } else {
            out[n.id] = { ...a, note: n.kind === 'feat' ? N.noDoc : N.ownEn };
            if (n.kind === 'feat') en++;
        }
    }
    console.log(`  pf2e.ru (Док и Юра): черт своих ${own}, оригиналом AoN ${en}`);
    return out;
}

// запуск как скрипта: пересобрать из data/champion/source/pf2ru.json
if (isMain(import.meta.url)) await writeChampion(await readSource('champion', 'pf2ru'), 'tools/build-graph.mjs');
