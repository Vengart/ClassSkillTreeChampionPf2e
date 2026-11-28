// ============================================================
// Волшебник с Archives of Nethys (2e.aonprd.com), на английском.
//
//   node tools/fetch-wizard-aon.mjs          — скачать (с кешем в data/cache/wizard-aon)
//   node tools/fetch-wizard-aon.mjs --force  — перекачать
//
// Сайт AoN сам строит страницы из открытого поискового индекса
// https://elasticsearch.aonprd.com/aon (без ключей) — берём данные оттуда же.
// Берутся версии Remaster: если у записи есть remaster_id, это старая (legacy) копия, она пропускается.
// Результат: data/wizard/source/aon.json и сборка data/wizard/build/ (через build-wizard.mjs).
// ============================================================

import { makeSearch, SITE, aonToHtml, splitDoc, idFromUrl, slugify, remasterOnly, featFromDoc } from './aon-common.mjs';
import { writeWizard } from './build-wizard.mjs';
import { writeSource } from './class-build.mjs';

const search = makeSearch('wizard-aon');

// ---------- загрузка ----------

const allFeats = await search('feats', {
    size: 500,
    query: { bool: { must: [{ match: { category: 'feat' } }, { match: { trait_raw: 'Wizard' } }] } },
    _source: { excludes: ['text', 'search_markdown'] },
});
const cards = await search('schools-theses', { size: 200, query: { terms: { category: ['arcane-school', 'arcane-thesis'] } } });
const features = await search('features', {
    size: 50,
    query: { bool: { must: [{ terms: { category: ['class-feature', 'action'] } }, { bool: { should: [
        { match_phrase: { name: 'Arcane Bond' } }, { match_phrase: { name: 'Arcane School' } },
        { match_phrase: { name: 'Arcane Thesis' } }, { match_phrase: { name: 'Drain Bonded Item' } },
    ] } }] } },
});

// старый id черты → id её версии Remaster (критерии иногда ссылаются на старую копию)
const remapId = new Map();
for (const d of allFeats) {
    const r = d.remaster_id?.[0];
    if (r) remapId.set(idFromUrl(d.url), Number(r.replace('feat-', '')));
}

// черта с одинаковым названием может быть дважды (Spell Mastery из Player Core и из AP) — оставляем Remaster/обычную
const byName = new Map();
for (const d of remasterOnly(allFeats)) {
    const prev = byName.get(d.name);
    const score = (x) => (x.legacy_id?.length ? 2 : 0) + (x.rarity === 'common' ? 1 : 0);
    if (!prev || score(d) > score(prev)) byName.set(d.name, d);
}

const feats = [...byName.values()].map((d) => featFromDoc(d, remapId)).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

const cardOut = (d) => ({ slug: slugify(d.name), name: d.name, url: SITE + d.url, source: d.primary_source || '',
    html: aonToHtml(splitDoc(d.markdown).body || d.markdown).replace(/^<p><b>Source<\/b>[\s\S]*?<\/p>/, '') });
// школы Remaster: всё, кроме девяти школ Core Rulebook
const schools = cards.filter((d) => d.category === 'arcane-school' && d.primary_source !== 'Core Rulebook')
    .map(cardOut).sort((a, b) => a.name.localeCompare(b.name));
const theses = remasterOnly(cards.filter((d) => d.category === 'arcane-thesis')).map(cardOut)
    .sort((a, b) => a.name.localeCompare(b.name));

const feature = (name, cat = 'class-feature') => {
    const d = remasterOnly(features).find((x) => x.name === name && x.category === cat);
    if (!d) { console.warn(`! нет «${name}»`); return ''; }
    return aonToHtml(splitDoc(d.markdown).body || d.markdown);
};

const raw = {
    fetchedAt: new Date().toISOString(),
    source: `${SITE}/Classes.aspx?ID=39`,
    sourceName: 'Archives of Nethys',
    featLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    feats,
    schools,
    theses,
    features: {
        bond: feature('Arcane Bond'),
        bondAction: feature('Drain Bonded Item', 'action'),
        school: feature('Arcane School'),
        thesis: feature('Arcane Thesis'),
    },
};
console.log(`черт ${feats.length}, школ ${schools.length}, диссертаций ${theses.length}`);
await writeSource('wizard', 'aon', raw);
await writeWizard(raw, 'tools/fetch-wizard-aon.mjs');
