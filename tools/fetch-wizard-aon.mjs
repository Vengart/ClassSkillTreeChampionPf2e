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

import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, FORCE } from './pf2-common.mjs';
import { writeWizard } from './build-wizard.mjs';
import { writeSource } from './class-build.mjs';

const ES = 'https://elasticsearch.aonprd.com/aon/_search';
const SITE = 'https://2e.aonprd.com';
const CACHE = path.join(DATA_DIR, 'cache', 'wizard-aon');

async function search(name, body) {
    const file = path.join(CACHE, `${name}.json`);
    if (!FORCE) {
        try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch { /* нет в кеше */ }
    }
    const res = await fetch(ES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0 (feat-tree fetcher)' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`${res.status} ${ES} (${name})`);
    const docs = (await res.json()).hits.hits.map((h) => h._source);
    await fs.mkdir(CACHE, { recursive: true });
    await fs.writeFile(file, JSON.stringify(docs, null, 1), 'utf8');
    return docs;
}

// ---------- разметка AoN (markdown + свои теги) → HTML ----------

const ACTION_KEY = { 'Single Action': '1', 'Two Actions': '2', 'Three Actions': '3', 'Free Action': '4', Reaction: '5' };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(s) {
    return s
        .replace(/<actions string="([^"]*)"\s*\/>/g, (_, a) => (ACTION_KEY[a] ? `<span class="action-icon">${ACTION_KEY[a]}</span>` : ''))
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u.startsWith('/') ? SITE + u : u}">${t}</a>`)
        .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
        .replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s.,;:)]|$)/g, '$1<i>$2</i>')
        .replace(/(^|[\s(])_([^_\s][^_]*?)_(?=[\s.,;:)]|$)/g, '$1<i>$2</i>');
}

export function aonToHtml(md) {
    if (!md) return '';
    const text = md
        .replace(/\r/g, '')
        .replace(/<title[\s\S]*?<\/title>/g, '')
        .replace(/<traits>[\s\S]*?<\/traits>/g, '')
        .replace(/<\/?(column|row|aside|additional-info|document|summary|spoilers|center|nethys-search|filter-buttons)[^>]*>/g, '\n')
        .replace(/<br\s*\/?>/g, '\n<br>\n');
    const out = [];
    for (const block of text.split(/\n\s*\n/)) {
        const lines = block.split('\n').map((l) => l.trim()).filter((l) => l && l !== '<br>');
        if (!lines.length) continue;
        if (lines.length === 1 && /^-{3,}$/.test(lines[0])) { out.push('<hr>'); continue; }
        if (lines.every((l) => /^[-*] /.test(l))) {
            out.push(`<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`);
            continue;
        }
        if (lines.every((l) => /^\|.*\|$/.test(l))) {
            const rows = lines.filter((l) => !/^\|[\s:|-]+\|$/.test(l))
                .map((l) => l.slice(1, -1).split('|').map((c) => inline(c.trim())));
            out.push(`<table>${rows.map((r, i) => `<tr>${r.map((c) => (i ? `<td>${c}</td>` : `<th>${c}</th>`)).join('')}</tr>`).join('')}</table>`);
            continue;
        }
        let i = 0;
        const para = [];
        for (; i < lines.length; i++) {
            const h = lines[i].match(/^#{1,6}\s+(.*)$/);
            if (h) { if (para.length) out.push(`<p>${inline(para.splice(0).join(' '))}</p>`); out.push(`<h4>${inline(h[1])}</h4>`); }
            else if (/^-{3,}$/.test(lines[i])) { if (para.length) out.push(`<p>${inline(para.splice(0).join(' '))}</p>`); out.push('<hr>'); }
            else if (/^[-*] /.test(lines[i])) { if (para.length) out.push(`<p>${inline(para.splice(0).join(' '))}</p>`); out.push(`<ul><li>${inline(lines[i].slice(2))}</li></ul>`); }
            else para.push(lines[i]);
        }
        if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
    }
    return out.join('').replace(/<\/ul><ul>/g, '');
}

/** Разбор записи: шапка (Source / Prerequisites / Requirements …) и тело после первой черты «---». */
function splitDoc(md) {
    const m = (md || '').replace(/\r/g, '').match(/^([\s\S]*?)\n-{3,}\n([\s\S]*)$/);
    const head = m ? m[1] : '';
    const body = m ? m[2] : md || '';
    const fields = {};
    for (const f of head.matchAll(/\*\*([A-Z][A-Za-z ]+)\*\*\s*([\s\S]*?)(?=\n\s*\*\*[A-Z][A-Za-z ]+\*\*|<\/column>|$)/g)) {
        fields[f[1].trim()] = f[2].replace(/<\/?column[^>]*>/g, '').trim();
    }
    return { fields, body };
}

const idFromUrl = (u) => Number((u || '').match(/ID=(\d+)/)?.[1]);
const slugify = (s) => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const remasterOnly = (docs) => docs.filter((d) => !d.remaster_id?.length);
/** Записи до Player Core без пары в Remaster помечаются legacy. */
const isLegacy = (d) => !d.legacy_id?.length && (d.release_date || '') < '2023-11-01';

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

const feats = [...byName.values()].map((d) => {
    const { fields, body } = splitDoc(d.markdown);
    const prereqMd = fields.Prerequisites || '';
    const prereqLinks = [...prereqMd.matchAll(/\[([^\]]+)\]\(\/Feats\.aspx\?ID=(\d+)\)/g)]
        .map((m) => ({ type: 'feat', id: remapId.get(Number(m[2])) || Number(m[2]), name: m[1] }));
    const extra = {};
    for (const k of ['Requirements', 'Trigger', 'Frequency', 'Access', 'Cost']) if (fields[k]) extra[k] = inline(fields[k]);
    const traits = [...(d.markdown || '').matchAll(/<trait label="([^"]+)"/g)].map((m) => ({ slug: slugify(m[1]), name: m[1] }));
    return {
        id: idFromUrl(d.url),
        name: d.name,
        nameEn: d.name,
        url: SITE + d.url,
        level: d.level,
        actions: ACTION_KEY[d.actions] || (d.actions?.includes(' to ') ? d.actions : ''),
        traits,
        rarity: d.rarity || 'common',
        legacy: isLegacy(d),
        source: d.primary_source_raw || d.primary_source || '',
        prerequisitesHtml: prereqMd ? inline(prereqMd) : '',
        prerequisitesText: (d.prerequisite || '').trim(),
        prereqLinks,
        fields: extra,
        html: aonToHtml(body),
    };
}).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

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
