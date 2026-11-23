// ============================================================
// Граф черт Волшебника (1–20 уровень) из data/wizard/source/aon.json (Archives of Nethys)
// и тексты переводов: AoN, pf2.ru (source/pf2ru.json), Док и Юра (manual/doc-yura.json).
//
//   node tools/build-wizard.mjs   — пересобрать data/wizard/build/ без скачивания
//
// Ручные данные — в data/wizard/manual/:
//   rules.json   темы и тема по названию черты, исправления критериев (overrides), «пассивные»
//                критерии (passivePrereq — есть у каждого волшебника или не отслеживаются),
//                единая теория (бонусная ячейка), диссертация, дающая фамильяра, группы выбора
//   images.json  иконки узлов и черт
//   labels.json  переводы (термины) и подписи узлов, которых нет на сайтах: корень, группы, темы
//   doc-yura.json перевод Дока и Юры, переписанный со скриншотов Foundry
// // ============================================================

import { computeTreeLayout, GEOMETRY } from './tree-layout.mjs';
import { readSource, readManual, writeBuild, isMain } from './class-build.mjs';
import { wizardTranslations } from './build-wizard-i18n.mjs';

// ---------- ручные данные (data/wizard/manual) ----------

const rules = await readManual('wizard', 'rules');
const images = await readManual('wizard', 'images');
export const labels = await readManual('wizard', 'labels');
const LA = labels.texts.aon;

export const MAX_LEVEL = rules.class.maxLevel;
const SCHOOL_UNIFIED = rules.schoolUnified;
const THESIS_FAMILIAR = rules.thesisFamiliar;

const THEMES = rules.themes.map((id) => ({ id, name: LA[id].name, html: LA[id].html, image: images.nodes[id] }));
const THEME_ORDER = rules.themes;
/** Тема черты по названию; остальные черты с дескриптором spellshape → «Spellshape». */
const THEME_BY_NAME = rules.themeByName;
function themeOf(f) {
    if (THEME_BY_NAME[f.nameEn]) return THEME_BY_NAME[f.nameEn];
    if (f.traits.some((t) => t.slug === 'spellshape' || t.slug === 'metamagic')) return 'theme-metamagic';
    return null;
}
/** Иконки — из BG3 wiki (images/wizard/). Черта без иконки получает иконку своей темы. */
const FEAT_IMAGES = images.feats;
const THEME_IMAGE = Object.fromEntries(THEMES.map((t) => [t.id, t.image]));
/** Критерии без ссылок на черты, выполненные у каждого волшебника или не отслеживаемые деревом. */
const PASSIVE_PREREQ = rules.passivePrereq.map((re) => new RegExp(re, 'i'));
/** Черты-критерии вне дерева (общие/навыковые) — без предупреждения. */
const OUTSIDE_FEATS = new Set(rules.outsideFeats);
/** Ручные критерии по английскому названию черты ('@Имя' — id черты по названию). */
const OVERRIDES = rules.overrides;

const shortSchool = (name) => name.replace(/^School of (the )?/, '');
const cardId = (prefix, slug) => `${prefix}-${slug.replace(/^school-of-(the-)?/, '')}`;

export function buildWizardGraph(raw) {
    const nodes = [];
    const warnings = [];
    const add = (n) => { nodes.push({ image: null, ...n }); return n; };

    add({
        id: 'root', kind: 'root', name: LA.root.name, nameEn: 'Wizard', level: 0, image: images.nodes.root,
        url: raw.source,
        html: LA.root.html + '<hr><h4 class="sub-ability">Arcane Bond</h4>' + raw.features.bond +
            (raw.features.bondAction ? `<h4 class="sub-ability">Drain Bonded Item</h4>${raw.features.bondAction}` : ''),
    });

    // --- Школа магии ---
    add({ id: 'group-school', kind: 'group', level: 0, html: raw.features.school, ...LA['group-school'] });
    for (const s of raw.schools) {
        add({ id: cardId('school', s.slug), kind: 'option', group: 'group-school', name: s.name, short: shortSchool(s.name),
            level: 1, url: s.url, html: s.html, source: s.source, requires: [] });
    }
    if (!nodes.some((n) => n.id === SCHOOL_UNIFIED)) warnings.push(`нет школы ${SCHOOL_UNIFIED}`);

    // --- Магическая диссертация ---
    add({ id: 'group-thesis', kind: 'group', level: 0, html: raw.features.thesis, ...LA['group-thesis'] });
    for (const t of raw.theses) {
        add({ id: `thesis-${t.slug}`, kind: 'option', group: 'group-thesis', name: t.name, level: 1,
            url: t.url, html: t.html, source: t.source, requires: [] });
    }
    if (!nodes.some((n) => n.id === THESIS_FAMILIAR)) warnings.push(`нет диссертации ${THESIS_FAMILIAR}`);

    for (const th of THEMES) add({ id: th.id, kind: 'hub', name: th.name, level: 0, image: th.image, html: th.html, requires: [] });

    // --- Черты ---
    const feats = raw.feats.filter((f) => f.level <= MAX_LEVEL);
    const featIds = new Set(feats.map((f) => f.id));
    const idByName = new Map(feats.map((f) => [f.nameEn, `feat-${f.id}`]));
    for (const f of feats) {
        let requires = [];
        let forbids = [];
        for (const l of f.prereqLinks) {
            if (l.type !== 'feat') continue;
            if (featIds.has(l.id)) requires.push([`feat-${l.id}`]);
            else if (!OUTSIDE_FEATS.has(l.name)) warnings.push(`${f.name}: черта «${l.name}» (${l.id}) не найдена`);
        }
        const ov = OVERRIDES[f.nameEn];
        if (ov) {
            requires = (ov.requires ?? requires).map((c) => c.map((id) => (id.startsWith('@') ? idByName.get(id.slice(1)) : id)));
            forbids = ov.forbids ?? forbids;
        } else if (f.prerequisitesText && requires.length === 0) {
            const parts = f.prerequisitesText.split(/;\s*/);
            if (!parts.every((p) => PASSIVE_PREREQ.some((re) => re.test(p.trim())))) {
                warnings.push(`${f.name}: критерии не распознаны → «${f.prerequisitesText}»`);
            }
        }

        add({
            id: `feat-${f.id}`, kind: 'feat', name: f.name, nameEn: f.nameEn, level: f.level, url: f.url,
            actions: f.actions, traits: f.traits.filter((t) => t.slug !== 'wizard'), rarity: f.rarity,
            legacy: f.legacy, source: f.source,
            prereqText: f.prerequisitesText, prereqHtml: f.prerequisitesHtml,
            fields: f.fields, html: f.html, requires, forbids,
            image: FEAT_IMAGES[f.nameEn] || null,
            ...(f.nameEn === 'Familiar' ? { grantedBy: THESIS_FAMILIAR } : {}),
        });
        if (!FEAT_IMAGES[f.nameEn]) warnings.push(`${f.name}: нет иконки (берётся иконка темы)`);
    }

    // --- Дерево: родитель черты — черта-критерий старшего уровня, иначе тема ---
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const featNodes = nodes.filter((n) => n.kind === 'feat');
    for (const n of featNodes) {
        const featReqs = n.requires.flat().filter((id) => byId.get(id)?.kind === 'feat')
            .sort((a, b) => byId.get(b).level - byId.get(a).level);
        n.parentId = featReqs[0] || themeOf(feats.find((f) => `feat-${f.id}` === n.id));
        if (!n.parentId) warnings.push(`${n.name}: тема не определена — допишите THEME_BY_NAME`);
    }
    for (const n of featNodes) {
        let cur = n;
        while (byId.get(cur.parentId)?.kind === 'feat') cur = byId.get(cur.parentId);
        n.theme = cur.parentId;
        n.image = n.image || THEME_IMAGE[n.theme] || null;
    }
    const edges = [];
    const pushEdge = (from, to, kind) => {
        if (!edges.some((e) => e.from === from && e.to === to)) edges.push({ from, to, kind });
    };
    for (const th of THEMES) pushEdge('root', th.id, 'struct');
    for (const n of featNodes) {
        if (byId.get(n.parentId)?.kind === 'hub') pushEdge(n.parentId, n.id, 'theme');
        for (const clause of n.requires) {
            for (const from of clause) if (byId.get(from)?.kind === 'feat') pushEdge(from, n.id, clause.length > 1 ? 'or' : 'req');
        }
    }
    for (const e of edges) e.primary = byId.get(e.to).parentId === e.from || e.kind === 'struct';

    const layout = computeTreeLayout(nodes, edges, { log: true, themeOrder: THEME_ORDER });

    return {
        meta: {
            classId: rules.class.id, className: LA.root.name, classGen: rules.class.gen,
            source: raw.source, sourceName: raw.sourceName || 'pf2.ru', fetchedAt: raw.fetchedAt,
            featLevels: raw.featLevels.length ? raw.featLevels : rules.class.featLevels,
            maxLevel: MAX_LEVEL,
            note: 'English · Archives of Nethys',
            bonusSlots: rules.bonusSlots,
            cardGroups: rules.cardGroups,
            filters: rules.filters,
            legend: rules.legend,
            updateCmd: 'node tools/fetch-wizard-aon.mjs',
            geometry: GEOMETRY, layout: layout.stats, bounds: layout.bounds,
        },
        nodes,
        edges,
        warnings,
    };
}

/** Собрать волшебника: граф и тексты всех переводов → data/wizard/build/. */
export async function writeWizard(raw, by) {
    const graph = buildWizardGraph(raw);
    await writeBuild('wizard', graph, labels.langs, await wizardTranslations(graph, labels), by);
}

// запуск как скрипта: пересобрать из data/wizard/source/aon.json
if (isMain(import.meta.url)) await writeWizard(await readSource('wizard', 'aon'), 'tools/build-wizard.mjs');
