// ============================================================
// Сборка графа из сырых данных pf2.ru.
//
//   node tools/build-graph.mjs      — пересобрать data/champion-data.js
//                                     из data/pf2-raw.json без скачивания
//
// Здесь живут «ручные» правила, которых нет в машиночитаемом виде
// на сайте: какие призвания требуют освящения, как текстовые
// критерии («благословенный щит», «аура поборника»…) превращаются
// в связи, картинки узлов и т.п.
//
// Требования узла: requires = [[a, b], [c]]  →  (a ИЛИ b) И c
//                  forbids  = [x]           →  нельзя, если взят x
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { computeLayout, GEOMETRY } from './layout.mjs';

// ---------- ручные данные ----------

/** Освящение призваний: holy / unholy / null (любое). */
const CAUSE_SANCT = { 9: 'holy', 14: 'holy', 8: 'unholy', 10: 'unholy', 11: null, 12: null, 13: null };

const BLESSINGS = [
    { id: 'blessing-armament', key: 'Благословенное оружие', image: 'DevWeapon.webp' },
    { id: 'blessing-shield', key: 'Благословенный щит', image: 'DevShield.webp' },
    { id: 'blessing-swiftness', key: 'Благословенная скорость', image: 'DevProvornost.webp' },
];

/** Только эти заклинания выбираются при создании (остальные дают черты). */
const DEVOTION_SPELLS = [2047, 2049, 2048];

const IMAGES = {
    root: 'startChampIcon.webp',
    'group-sanct': 'Holy.webp',
    'group-cause': 'brave.webp',
    'group-devotion': 'prayer.webp',
    'group-blessing': 'oath-of-defender.webp',
    'sanct-holy': 'Holy.webp',
    'sanct-unholy': 'Unholy.webp',
    'cause-11': 'SubClassJustice.webp',
    'cause-12': 'SubClassLiberation.webp',
    'cause-13': 'SubClassObedience.webp',
    'cause-14': 'SubClassRedemption.webp',
    'cause-9': 'SubClassVelichie.webp',
    'cause-8': 'SubClassDesecration.webp',
    'cause-10': 'SubClassInequality.webp',
    'spell-2047': 'SpellLayOfHands.webp',
    'spell-2049': 'SpellShieldsOfTheSpirit.webp',
    'spell-2048': 'SpellTouchOfCorruption.webp',
    'feature-aura': '300px-Hunger_of_Hadar.webp',
    'shield-block': 'shieldfeatsprotection.webp',
};

/** Картинки черт по английскому названию. */
const FEAT_IMAGES = {
    "Deity's Domain": 'prayer.webp', 'Desperate Prayer': 'prayer.webp', 'Splinter Faith': 'prayer.webp',
    'Defensive Advance': 'shieldfeatsprotection.webp', 'Faithful Steed': 'Horse.webp',
    'Oath of The Slayer': 'oath-of-assassin.webp', 'Oath of The Defender': 'oath-of-defender.webp',
    'Oath of The Avenger': 'oath-of-avenger.webp', 'Divine Grace': 'prayer.webp', 'Divine Health': 'health.webp',
    'Aura of Despair': 'Unholy.webp', 'Aura of Courage': '300px-Dethrone.webp',
    Security: 'SpellShieldsOfTheSpirit.webp', Mercy: 'SpellLayOfHands.webp', Cruelty: 'SpellTouchOfCorruption.webp',
    'Acclimated Mount': 'Horse.webp', 'Loyal Warhorse': 'Horse.webp', 'Expand Aura': '300px-Hunger_of_Hadar.webp',
    'Reactive Strike': 'fight.webp', Smite: 'smite.webp', 'Shield Warden': 'shieldfeatsprotection.webp',
    'Quick Shield Block': 'shieldfeatsprotection.webp', 'Greater Cruelty': 'SpellTouchOfCorruption.webp',
    'Greater Security': 'SpellShieldsOfTheSpirit.webp', 'Greater Mercy': 'SpellLayOfHands.webp',
    "Advanced Deity's Domain": 'prayer.webp', 'Heal Mount': 'SpellLayOfHands.webp',
    'Sense Holiness': 'sight.webp', 'Sense Unholiness': 'sight.webp', 'Faithful Stride': 'Horse.webp',
    'Second Blessing': 'oath-of-defender.webp', 'Imposing Destrier': 'Horse.webp',
    'Radiant Armament': 'DevWeapon.webp', 'Spectral Advance': 'DevProvornost.webp',
    'Shield of Reckoning': 'DevShield.webp', 'Devoted Focus': 'prayer.webp',
    'Aura of Faith': '300px-Calm_Emotions.webp', 'Blessed Counterstrike': 'fight.webp',
    'Divine Wall': 'shieldfeatsprotection.webp', "Champion's Sacrifice": 'smite.webp',
    'Enforce Oath': 'oath-of-avenger.webp', 'Pale Horse': 'Unholy.webp', 'Affliction Mercy': 'SpellLayOfHands.webp',
    "Steed's Toppling Strike": 'Horse.webp', 'Gruesome Strike': 'Unholy.webp', 'Aura of Life': '300px-Cure_Wounds.webp',
    'Aura of Righteousness': 'Holy.webp', 'Aura of Determination': 'brave.webp',
    'Divine Reflexes': '300px-Longstrider.webp', 'Exalted Greatness': '300px-Conjure_Barrage.webp',
    'Instrument of Zeal': 'fight.webp', 'Instrument of Slaughter': 'Unholy.webp', 'Auspicious Mount': 'Horse.webp',
    'Shield of Grace': 'shieldfeatsprotection.webp', 'Rejuvenating Touch': 'SpellLayOfHands.webp',
    'Ultimate Mercy': 'SpellLayOfHands.webp', 'Swift Retribution': 'fight.webp', 'Celestial Form': 'Holy.webp',
    'Fiendish Form': '300px-Planar_Binding.webp', 'Retributive Focus': 'prayer.webp', 'Sacred Defender': 'Holy.webp',
    'Armament Paragon': 'DevWeapon.webp', 'Shield Paragon': 'DevShield.webp', 'Swift Paragon': 'DevProvornost.webp',
    'Weight of Guilt': 'SubClassRedemption.webp', 'Iron Repercussions': 'SubClassObedience.webp',
    'Vicious Vengeance': 'SubClassInequality.webp', 'Brilliant Flash': 'SubClassVelichie.webp',
    'Ongoing Selfishness': 'SubClassDesecration.webp', 'Nimble Reprisal': 'SubClassJustice.webp',
    'Unimpeded Step': 'SubClassLiberation.webp',
};

/** Ручные переопределения требований (по английскому названию черты). */
const OVERRIDES = {
    // в критериях смешаны условия для Воина и старой редакции
    'Shield Warden': { requires: [['shield-block'], ['blessing-shield']] },
    // на сайте «священный и нечестивый» — по смыслу «или»
    'Aura of Faith': { requires: [['sanct-holy', 'sanct-unholy']] },
    "Champion's Sacrifice": { requires: [], forbids: ['sanct-unholy'] },
    // ответное действие, дающее устойчивость к урону
    'Blessed Counterstrike': { requires: [['cause-9', 'cause-14', 'cause-11', 'cause-12']] },
    // ответное действие, дающее доп. урон
    'Gruesome Strike': { requires: [['cause-10', 'cause-8', 'cause-13']] },
    'Instrument of Slaughter': { requires: [['cause-10', 'cause-8', 'cause-13']] },
    'Instrument of Zeal': { requires: [['feat-5914']] },
    'Shield of Reckoning': { requires: [['feat-4807'], ['blessing-shield']] },
    // «Требования», а не критерии — к постройке не относится
    'Divine Wall': { requires: [] },
};

// ---------- сборка ----------

export function buildGraph(raw) {
    const nodes = [];
    const warnings = [];
    const add = (n) => { nodes.push({ image: IMAGES[n.id] || null, ...n }); return n; };

    add({
        id: 'root', kind: 'root', name: 'Поборник', nameEn: 'Champion', level: 0,
        url: 'https://pf2.ru/classes/champion?tab=details',
        html: 'Посланник божества и его преданный служитель. Кликайте по узлам, чтобы собрать персонажа: ' +
            'сначала выберите освящение, призвание и заклинание преданности, затем черты.',
    });

    // --- Освящение ---
    add({ id: 'group-sanct', kind: 'group', name: 'Освящение', level: 0, branch: 'sanct', html: raw.features.sanctification,
        hint: 'Необязательный выбор: священный, нечестивый или без освящения.' });
    for (const [id, key, en] of [['sanct-holy', 'Священный', 'Holy'], ['sanct-unholy', 'Нечестивый', 'Unholy']]) {
        add({ id, kind: 'option', group: 'group-sanct', name: key, nameEn: en, level: 1, branch: 'sanct',
            rarity: id === 'sanct-unholy' ? 'uncommon' : 'common',
            html: raw.features.sanctOptions[key] || '', requires: [] });
    }

    // --- Призвание ---
    add({ id: 'group-cause', kind: 'group', name: 'Призвание', level: 0, branch: 'cause', html: raw.features.cause,
        hint: 'Выберите одно призвание. Оно даёт ответное действие поборника.' });
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
    add({ id: 'group-devotion', kind: 'group', name: 'Заклинания преданности', level: 0, branch: 'devotion',
        html: raw.features.devotion, hint: 'Выберите одно заклинание преданности.' });
    for (const id of DEVOTION_SPELLS) {
        const s = raw.spells.find((x) => x.id === id);
        if (!s) { warnings.push(`нет заклинания ${id}`); continue; }
        add({ id: `spell-${id}`, kind: 'option', group: 'group-devotion', name: s.name, nameEn: s.nameEn, level: 1,
            branch: 'devotion', url: s.url, actions: s.actions, traits: s.traits, rarity: 'common',
            fields: s.fields, html: s.html, requires: [] });
    }

    // --- Благословение верного ---
    add({ id: 'group-blessing', kind: 'group', name: 'Благословение верного', level: 0, branch: 'blessing',
        html: raw.features.blessing, hint: 'Доступно с 3 уровня. Черта «Второе благословление» позволяет взять ещё одно.' });
    for (const b of BLESSINGS) {
        add({ id: b.id, kind: 'option', group: 'group-blessing', name: b.key, level: 3, branch: 'blessing',
            image: b.image, html: raw.features.blessingOptions[b.key] || '', requires: [] });
    }

    // --- Классовые особенности 1 уровня (есть у всех) ---
    add({ id: 'feature-aura', kind: 'feature', name: 'Аура поборника', level: 1, branch: 'aura',
        html: raw.features.aura, requires: [] });
    add({ id: 'shield-block', kind: 'feature', name: 'Блок щитом', nameEn: 'Shield Block', level: 1, branch: 'shield',
        url: raw.features.shieldBlock.url, fields: raw.features.shieldBlock.fields, html: raw.features.shieldBlock.html,
        requires: [] });

    // --- Черты ---
    const featIds = new Set(raw.feats.map((f) => f.id));
    for (const f of raw.feats) {
        const id = `feat-${f.id}`;
        let requires = [];
        let forbids = [];
        for (const l of f.prereqLinks) {
            if (l.type === 'feat') {
                if (l.id === 5212) requires.push(['shield-block']);
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
        if (t.includes('аура поборника')) requires.push(['feature-aura']);
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

        if (f.prerequisitesText && requires.length === 0 && !ov) {
            warnings.push(`${f.name}: критерии не распознаны → «${f.prerequisitesText}»`);
        }

        add({
            id, kind: 'feat', name: f.name, nameEn: f.nameEn, level: f.level, url: f.url,
            actions: f.actions, traits: f.traits, rarity: f.rarity, legacy: f.legacy, source: f.source,
            prereqText: f.prerequisitesText, prereqHtml: f.prerequisitesHtml,
            fields: f.fields, html: f.html, requires, forbids,
            image: FEAT_IMAGES[f.nameEn] || null,
        });
        if (!FEAT_IMAGES[f.nameEn]) warnings.push(`${f.name}: нет картинки`);
    }

    // --- Связи ---
    const ids = new Set(nodes.map((n) => n.id));
    const edges = [];
    const pushEdge = (from, to, kind) => {
        if (!ids.has(from) || !ids.has(to)) { warnings.push(`связь ${from} → ${to}: узел не найден`); return; }
        if (!edges.some((e) => e.from === from && e.to === to)) edges.push({ from, to, kind });
    };
    for (const g of ['group-sanct', 'group-cause', 'group-devotion', 'group-blessing', 'feature-aura', 'shield-block']) {
        pushEdge('root', g, 'struct');
    }
    for (const n of nodes) {
        if (n.kind === 'option') pushEdge(n.group, n.id, 'struct');
        for (const clause of n.requires || []) {
            for (const from of clause) pushEdge(from, n.id, clause.length > 1 ? 'or' : 'req');
        }
    }

    // раскладка: координаты узлов и набор рисуемых связей
    const layout = computeLayout(nodes, edges, { log: true });
    if (layout.stats.overlaps) warnings.push(`раскладка: наложений узлов — ${layout.stats.overlaps}`);

    return {
        meta: { source: raw.source, fetchedAt: raw.fetchedAt, className: 'Поборник', geometry: GEOMETRY, layout: layout.stats },
        nodes,
        edges: layout.edges,
        warnings,
    };
}

// запуск как скрипта: пересобрать из pf2-raw.json
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    const raw = JSON.parse(await fs.readFile(path.join(ROOT, 'data', 'pf2-raw.json'), 'utf8'));
    const graph = buildGraph(raw);
    await fs.writeFile(
        path.join(ROOT, 'data', 'champion-data.js'),
        `// Сгенерировано tools/build-graph.mjs — не редактируйте вручную.\n` +
        `// Источник: ${raw.source} (${raw.fetchedAt})\n` +
        `window.CHAMPION_DATA = ${JSON.stringify(graph, null, 1)};\n`,
        'utf8',
    );
    console.log(`✓ data/champion-data.js — узлов: ${graph.nodes.length}, связей: ${graph.edges.length}`);
    for (const w of graph.warnings) console.warn('  ! ' + w);
}
