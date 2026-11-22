// ============================================================
// Граф черт Волшебника (1–20 уровень) из data/wizard-raw.json.
// Данные — Archives of Nethys, на английском (tools/fetch-wizard-aon.mjs).
//
//   node tools/build-wizard.mjs   — пересобрать data/wizard-data.js без скачивания
//
// Карточки сверху: школа магии и магическая диссертация (по одной, без иконок).
// Ручные правила:
//   • критерии-навыки («Trained in Arcana», «Expert in Performance»…) и классовые умения,
//     которые есть у каждого волшебника (arcane bond, focus pool, archwizard's spellcraft),
//     считаются выполненными — текст критерия остаётся на карточке;
//   • «Familiar» даёт диссертация Improved Familiar Attunement;
//   • «Linked Focus» требует школу с учебным планом (любая, кроме единой теории);
//   • School of Unified Magical Theory даёт дополнительную черту волшебника 1 уровня.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { computeTreeLayout, GEOMETRY } from './tree-layout.mjs';
import { writeClassData } from './pf2-common.mjs';

export const MAX_LEVEL = 20;

const SCHOOL_UNIFIED = 'school-unified-magical-theory';
const THESIS_FAMILIAR = 'thesis-improved-familiar-attunement';

const THEMES = [
    { id: 'theme-metamagic', name: 'Spellshape', image: 'Sculpt_Spells_Icon.webp',
        html: 'Feats with the spellshape trait: they alter the next spell you cast — its range, area, damage or how noticeable it is.' },
    { id: 'theme-battle', name: 'Counterspell & Defense', image: 'Class_Wizard_Abjuration_Badge_Icon.png',
        html: 'Counterspelling, protective arrays and the senses and reflexes a wizard relies on in a fight.' },
    { id: 'theme-book', name: 'Spellbook & Slots', image: 'Oghma_Icon.webp',
        html: 'Your spellbook, cantrips, scrolls and the way you prepare and recover spell slots.' },
    { id: 'theme-bond', name: 'Arcane Bond & School', image: 'Transmuters_Stone_passive_feature_Icon.webp',
        html: 'Your bonded item, school spells and focus points. Every wizard has an arcane bond from 1st level.' },
    { id: 'theme-mind', name: 'Illusion & Influence', image: 'Class_Wizard_Illusion_Badge_Icon.png',
        html: 'Illusions, words and performances that bend the minds of others.' },
    { id: 'theme-necro', name: 'Undeath', image: 'Class_Wizard_Necromancy_Badge_Icon.png',
        html: 'Uncommon feats for those who create or control undead (Book of the Dead).' },
    { id: 'theme-familiar', name: 'Familiar', image: 'Find_Familiar_Cat_Icon.webp',
        html: 'Your familiar and its growth. The Improved Familiar Attunement thesis also grants the Familiar feat.' },
];
const THEME_ORDER = THEMES.map((t) => t.id);

/** Тема черты по названию; остальные черты с дескриптором spellshape → «Spellshape». */
const THEME_BY_NAME = {
    Counterspell: 'theme-battle', 'Energy Ablation': 'theme-battle', 'Elemental Defense': 'theme-battle',
    'Spell Protection Array': 'theme-battle', 'Bespell Strikes': 'theme-battle', 'Steady Spellcasting': 'theme-battle',
    'Irresistible Magic': 'theme-battle', 'Keen Magical Detection': 'theme-battle', 'Magic Sense': 'theme-battle',
    'Spatial Awareness': 'theme-battle', 'Redirect Teleportation': 'theme-battle', 'Shift Spell': 'theme-battle',

    'Spellbook Prodigy': 'theme-book', 'Cantrip Expansion': 'theme-book', 'Split Slot': 'theme-book',
    'Knowledge is Power (Wizard)': 'theme-book', 'Scroll Adept': 'theme-book', 'Form Retention': 'theme-book',
    'Effortless Concentration': 'theme-book', 'Spell Tinker': 'theme-book', 'Infinite Possibilities': 'theme-book',
    'Reprepare Spell': 'theme-book', 'Spell Combination': 'theme-book', 'Spell Mastery': 'theme-book',
    "Archwizard's Might": 'theme-book', 'Spellshape Mastery': 'theme-metamagic',

    'Call Wizardly Tools': 'theme-bond', 'Linked Focus': 'theme-bond', 'Advanced School Spell': 'theme-bond',
    'Bond Conservation': 'theme-bond', 'Shared Focus': 'theme-bond', 'Bonded Focus': 'theme-bond',
    'Superior Bond': 'theme-bond', 'Irezoko Tattoo': 'theme-bond',

    'Convincing Illusion': 'theme-mind', 'Spellbinding Speech': 'theme-mind', "Helt's Spelldance": 'theme-mind',
    'Second Thoughts': 'theme-mind',

    'Undying Conviction': 'theme-necro', "Necromancer's Visage": 'theme-necro', 'Sepulchral Sublimation': 'theme-necro',

    Familiar: 'theme-familiar',
};
function themeOf(f) {
    if (THEME_BY_NAME[f.nameEn]) return THEME_BY_NAME[f.nameEn];
    if (f.traits.some((t) => t.slug === 'spellshape' || t.slug === 'metamagic')) return 'theme-metamagic';
    return null;
}

/** Иконки — из BG3 wiki (images/wizard/), подобраны по смыслу. Черта без иконки получает иконку своей темы. */
const FEAT_IMAGES = {
    // Spellshape
    'Reach Spell': 'Witch_Bolt_Icon.webp',               // луч, бьющий далеко
    'Widen Spell': 'Thunderwave_Icon.webp',              // расходящаяся волна
    'Conceal Spell': 'Invisibility_spell_Icon.webp',
    'Nonlethal Spell': 'Sleep_Icon.webp',
    'Incriminating Spell': 'Disguise_Self_Icon.webp',    // вина на другом
    'Detonating Spell': 'Fireball_Icon.webp',
    'Explosive Arrival': 'Conjure_Elemental_Icon.webp',  // призванный появляется со взрывом
    'Chaotic Spell': 'Confusion_Icon.webp',
    'Knockback Spell': 'Gust_of_Wind_Icon.webp',
    'Overwhelming Energy': 'Lightning_Bolt_Icon.webp',
    'Quickened Casting': 'Haste_Icon.webp',
    'Forcible Energy': 'Scorching_Ray_Icon.webp',
    'Dizzying Spell': 'Colour_Spray_Icon.webp',
    'Secondary Detonation Array': 'Ice_Storm_Icon.webp', // град вторичных разрывов
    'Scintillating Spell': 'Sunbeam_Icon.webp',
    'Worldsphere Gravity': 'Otilukes_Resilient_Sphere_Icon.webp',
    'Spellshape Mastery': 'Chain_Lightning_Icon.webp',
    // Counterspell & Defense
    Counterspell: 'Counterspell_Icon.webp',
    'Energy Ablation': 'Protection_from_Energy_Icon.webp',
    'Elemental Defense': 'Fire_Shield_Icon.webp',
    'Spell Protection Array': 'Arcane_Ward_Icon.webp',   // круг рун
    'Bespell Strikes': 'Magic_Weapon_Icon.webp',
    'Shrink Spell': 'Enlarge_Reduce_Icon.webp',
    'Steady Spellcasting': 'Stoneskin_Icon.webp',
    'Irresistible Magic': 'Ottos_Irresistible_Dance_Icon.webp',
    'Clever Counterspell': 'Remove_Curse_Icon.webp',
    'Reflect Spell': 'Projected_Ward_Icon.webp',
    'Keen Magical Detection': 'See_Invisibility_Icon.webp',
    'Magic Sense': 'Third_Eye_Darkvision_Icon.webp',
    'Spatial Awareness': 'Third_Eye_See_Invisibility_Icon.webp',
    'Redirect Teleportation': 'Misty_Step_Icon.webp',
    'Shift Spell': 'Blink_Icon.webp',
    // Spellbook & Slots
    'Spellbook Prodigy': 'Oghma_Icon.webp',              // свиток знаний
    'Cantrip Expansion': 'Potent_Cantrip_Icon.webp',
    'Split Slot': 'Mirror_Image_Icon.webp',              // одна ячейка — два варианта
    'Knowledge is Power (Wizard)': 'Portent_Icon.webp',
    'Scroll Adept': 'Glyph_of_Warding_Icon.webp',
    'Form Retention': 'Polymorph_Icon.webp',
    'Effortless Concentration': 'Flaming_Sphere_Icon.webp', // поддерживаемое заклинание
    'Spell Tinker': 'Experimental_Alchemy_Icon.webp',
    'Infinite Possibilities': 'Arcane_Gate_Icon.webp',
    'Reprepare Spell': 'Split_Enchantment_Icon.webp',
    'Reclaim Spell': 'Telekinesis_Icon.webp',
    'Spell Combination': 'Chromatic_Orb_Icon.webp',
    'Spell Mastery': 'Magic_Missile_Icon.webp',
    "Archwizard's Might": 'Mystra_Icon.webp',
    // Arcane Bond & School
    'Call Wizardly Tools': 'Mage_Hand_Icon.webp',
    'Linked Focus': 'Empowered_Evocation_Icon.webp',
    'Advanced School Spell': 'Expert_Divination_Icon.webp',
    'Bond Conservation': 'Arcane_Recovery_Icon.webp',
    'Shared Focus': 'Focused_Conjuration_Icon.webp',
    'Bonded Focus': 'Transmuters_Stone_Constitution_Icon.webp',
    'Superior Bond': 'Arcane_Lock_Icon.webp',
    'Irezoko Tattoo': 'Seeming_Icon.webp',
    // Illusion & Influence
    'Convincing Illusion': 'Improved_Minor_Illusion_Icon.webp',
    'Spellbinding Speech': 'Charm_Person_Icon.webp',
    "Helt's Spelldance": 'Bladesong_Icon.webp',
    'Second Thoughts': 'Detect_Thoughts_Icon.webp',
    // Undeath
    'Undying Conviction': 'Inured_to_Undeath_Icon.webp',
    "Necromancer's Visage": 'Create_Undead_Icon.webp',
    'Sepulchral Sublimation': 'Animate_Dead_Icon.webp',
    // Familiar
    Familiar: 'Benign_Transposition_Teleport_Icon.webp', // двое связанных
    'Enhanced Familiar': 'Conjure_Minor_Elemental_Azer_Icon.webp',
};
const img = (file) => (file ? `wizard/${file}` : null);
const THEME_IMAGE = Object.fromEntries(THEMES.map((t) => [t.id, img(t.image)]));

/**
 * Критерии без ссылок на черты, которые выполнены у каждого волшебника
 * или не отслеживаются деревом (навыки, нежить) — считаем выполненными.
 */
const PASSIVE_PREREQ = [
    /^(trained|expert|master|legendary) in /i,
    /^arcane bond$/i, /^focus pool$/i, /^archwizard'?s spellcraft$/i,
    /create or control undead/i, /necromancer wizard/i,
];
/** Черты-критерии вне дерева (общие/навыковые) — без предупреждения. */
const OUTSIDE_FEATS = new Set(['Quick Recognition']);

/** Ручные критерии по английскому названию черты ('@Имя' — id черты по названию). */
const OVERRIDES = {
    'Enhanced Familiar': { requires: [['@Familiar', THESIS_FAMILIAR]] },
    'Linked Focus': { requires: [['group-school']], forbids: [SCHOOL_UNIFIED] },
};

const shortSchool = (name) => name.replace(/^School of (the )?/, '');
const cardId = (prefix, slug) => `${prefix}-${slug.replace(/^school-of-(the-)?/, '')}`;

export function buildWizardGraph(raw) {
    const nodes = [];
    const warnings = [];
    const add = (n) => { nodes.push({ image: null, ...n }); return n; };

    add({
        id: 'root', kind: 'root', name: 'Wizard', nameEn: 'Wizard', level: 0, image: img('Class_Wizard_Badge_Icon.png'),
        url: raw.source,
        html: 'A scholar who masters magic through study and experiment. Pick an arcane school and an arcane thesis above, ' +
            'then your wizard feats.<hr><h4 class="sub-ability">Arcane Bond</h4>' + raw.features.bond +
            (raw.features.bondAction ? `<h4 class="sub-ability">Drain Bonded Item</h4>${raw.features.bondAction}` : ''),
    });

    // --- Школа магии ---
    add({ id: 'group-school', kind: 'group', name: 'Arcane School', level: 0, html: raw.features.school,
        hint: 'Pick one school. The School of Unified Magical Theory grants an extra 1st-level wizard feat.' });
    for (const s of raw.schools) {
        add({ id: cardId('school', s.slug), kind: 'option', group: 'group-school', name: s.name, short: shortSchool(s.name),
            level: 1, url: s.url, html: s.html, source: s.source, requires: [] });
    }
    if (!nodes.some((n) => n.id === SCHOOL_UNIFIED)) warnings.push(`нет школы ${SCHOOL_UNIFIED}`);

    // --- Магическая диссертация ---
    add({ id: 'group-thesis', kind: 'group', name: 'Arcane Thesis', level: 0, html: raw.features.thesis,
        hint: 'Pick one thesis.' });
    for (const t of raw.theses) {
        add({ id: `thesis-${t.slug}`, kind: 'option', group: 'group-thesis', name: t.name, level: 1,
            url: t.url, html: t.html, source: t.source, requires: [] });
    }
    if (!nodes.some((n) => n.id === THESIS_FAMILIAR)) warnings.push(`нет диссертации ${THESIS_FAMILIAR}`);

    for (const th of THEMES) add({ id: th.id, kind: 'hub', name: th.name, level: 0, image: img(th.image), html: th.html, requires: [] });

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
            image: img(FEAT_IMAGES[f.nameEn]),
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
            classId: 'wizard', className: 'Wizard', classGen: 'волшебника',
            source: raw.source, sourceName: raw.sourceName || 'pf2.ru', fetchedAt: raw.fetchedAt,
            featLevels: raw.featLevels.length ? raw.featLevels : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            maxLevel: MAX_LEVEL,
            note: 'English · Archives of Nethys',
            bonusSlots: [{ id: SCHOOL_UNIFIED, level: 1 }],
            cardGroups: [{ id: 'group-school', compact: true, noImages: true }, { id: 'group-thesis', compact: true, noImages: true }],
            filters: ['uncommon'],
            legend: ['card'],
            updateCmd: 'node tools/fetch-wizard-aon.mjs',
            geometry: GEOMETRY, layout: layout.stats, bounds: layout.bounds,
        },
        nodes,
        edges,
        warnings,
    };
}

// запуск как скрипта: пересобрать из wizard-raw.json
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    const raw = JSON.parse(await fs.readFile(path.join(ROOT, 'data', 'wizard-raw.json'), 'utf8'));
    await writeClassData('wizard', buildWizardGraph(raw), raw, 'tools/build-wizard.mjs');
}
