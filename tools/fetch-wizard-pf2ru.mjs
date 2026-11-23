// ============================================================
// Перевод pf2.ru для волшебника — тексты к тем же узлам, что в data/wizard-raw.json (Archives of Nethys).
//
//   node tools/fetch-wizard-pf2ru.mjs          — скачать (с кешем в data/cache/wizard-ru)
//   node tools/fetch-wizard-pf2ru.mjs --force  — перекачать
//
// Граф не меняется: черты сопоставляются по id (на pf2.ru и AoN они совпадают), при расхождении —
// по английскому названию; школы и диссертации — по названию карточки.
// Результат: data/wizard-pf2ru.json; затем tools/build-wizard-i18n.mjs собирает data/wizard-i18n.js.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, BASE, get, readTables, parseViewbox, parseItemCards, parseTraits, cleanHtml, stripTags } from './pf2-common.mjs';

const CACHE = path.join(DATA_DIR, 'cache', 'wizard-ru');
const cached = (url, file) => get(url, path.join(CACHE, file));

const aon = JSON.parse(await fs.readFile(path.join(DATA_DIR, 'wizard-raw.json'), 'utf8'));

// ---------- черты ----------
const rows = readTables(await cached(`${BASE}/classes/wizard?tab=feats`, 'class-feats.html'))
    .filter((r) => r.id && r.level_sort !== undefined);
const byId = new Map(rows.map((r) => [Number(r.id), r]));
const byName = new Map(rows.filter((r) => !r.is_legacy).map((r) => [r.name, r]));

const feats = {};
const missing = [];
for (const f of aon.feats) {
    const r = byId.get(f.id) || byName.get(f.nameEn);
    if (!r) { missing.push(f.nameEn); continue; }
    const vb = parseViewbox(await cached(`${BASE}/viewbox/feats/${r.id}?lang=ru`, `feat-${r.id}.html`));
    const prereq = r.prerequisites && r.prerequisites !== '-' ? r.prerequisites : '';
    const fields = { ...vb.fields };
    delete fields['Источник'];
    delete fields['Критерии'];
    feats[f.nameEn] = {
        name: r.rus_name || r.name,
        traits: parseTraits(r.traits).traits,
        html: vb.html,
        prereqHtml: prereq ? cleanHtml(prereq) : '',
        prereqText: prereq ? stripTags(prereq) : '',
        fields,
        url: BASE + encodeURI(r.item_url),
        source: r.source || '',
        translated: !r.is_not_translated,
    };
}

// ---------- школы и диссертации (карточки на странице класса) ----------
const details = await cached(`${BASE}/classes/wizard?tab=details`, 'class-details.html');
const norm = (s) => s.toLowerCase().replace(/^school of (the )?/, '').replace(/[^a-z]/g, '');
const pick = (cards, list) => {
    const out = {};
    for (const item of list) {
        const card = cards.find((c) => norm(c.slug.replace(/-/g, ' ')) === norm(item.name) || c.slug === item.slug);
        if (card) out[item.name] = { name: card.name, html: card.html, url: card.url ? BASE + card.url : '' };
    }
    return out;
};
const schools = pick(parseItemCards(details, 'wizardarcaneschool'), aon.schools);
const theses = pick(parseItemCards(details, 'wizardarcanethesis'), aon.theses);

const out = {
    source: `${BASE}/classes/wizard`,
    fetchedAt: new Date().toISOString(),
    feats, schools, theses,
};
await fs.writeFile(path.join(DATA_DIR, 'wizard-pf2ru.json'), JSON.stringify(out, null, 1), 'utf8');
console.log(`черт ${Object.keys(feats).length}/${aon.feats.length}, школ ${Object.keys(schools).length}/${aon.schools.length}, ` +
    `диссертаций ${Object.keys(theses).length}/${aon.theses.length}`);
if (missing.length) console.log('  ! нет на pf2.ru:', missing.join(', '));
const noSchool = aon.schools.filter((s) => !schools[s.name]).map((s) => s.name);
if (noSchool.length) console.log('  ! школы без перевода pf2.ru:', noSchool.join(', '));
