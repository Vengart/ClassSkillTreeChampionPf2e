// ============================================================
// Поборник с Archives of Nethys (2e.aonprd.com), на английском — тексты для локализации «оригинал».
//
//   node tools/fetch-champion-aon.mjs          — скачать (с кешем в data/cache/champion-aon)
//   node tools/fetch-champion-aon.mjs --force  — перекачать
//
// Граф поборника строится по pf2.ru (data/champion/source/pf2ru.json); отсюда берутся только тексты
// к тем же узлам: черты и призвания — по id (на pf2.ru и AoN они совпадают), заклинания преданности —
// по id, освящение и благословения — из особенностей класса «Deity» и «Blessing of the Devoted».
// Берутся версии Remaster (Player Core 2): записи с remaster_id — старые копии, они пропускаются.
// Результат: data/champion/source/aon.json и сборка data/champion/build/ (через build-graph.mjs).
// ============================================================

import { readSource, writeSource } from './class-build.mjs';
import { writeChampion } from './build-graph.mjs';
import { makeSearch, SITE, ACTION_KEY, inline, aonToHtml, splitDoc, idFromUrl, slugify, remasterOnly, featFromDoc } from './aon-common.mjs';

const search = makeSearch('champion-aon');
const CLASS_URL = '/Classes.aspx?ID=58';

// ---------- загрузка ----------
const allFeats = await search('feats', {
    size: 500,
    query: { bool: { must: [{ match: { category: 'feat' } }, { match: { trait_raw: 'Champion' } }] } },
    _source: { excludes: ['text', 'search_markdown'] },
});
const causeDocs = remasterOnly(await search('causes', { size: 50, query: { match: { category: 'cause' } } }));
const featureDocs = (await search('features', {
    size: 60,
    query: { bool: { must: [{ match: { category: 'class-feature' } }, { match_phrase: { url: CLASS_URL } }] } },
})).filter((d) => d.url === CLASS_URL);
const spellDocs = await search('spells', {
    size: 10,
    query: { terms: { url: ['/Spells.aspx?ID=2047', '/Spells.aspx?ID=2048', '/Spells.aspx?ID=2049'] } },
});
// ответные действия призваний: <document id="action-2808" /> в тексте призвания
const actionIds = [...new Set(causeDocs.flatMap((d) => [...(d.markdown || '').matchAll(/<document[^>]*id="(action-\d+)"/g)].map((m) => m[1])))];
const actionDocs = await search('cause-actions', { size: 50, query: { ids: { values: actionIds } } });

// ---------- черты ----------
const remapId = new Map();
for (const d of allFeats) {
    const r = d.remaster_id?.[0];
    if (r) remapId.set(idFromUrl(d.url), Number(r.replace('feat-', '')));
}
const feats = remasterOnly(allFeats).map((d) => featFromDoc(d, remapId))
    .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

// ---------- текст записи без строки «Source» ----------
const bodyHtml = (md) => aonToHtml(splitDoc(md).body || md).replace(/^<p><b>Source<\/b>[\s\S]*?<\/p>/, '');
/** Действие (ответное действие призвания): название, шапка (триггер, требования…), описание. */
function actionHtml(d) {
    const { fields, body } = splitDoc(d.markdown);
    const head = ['Trigger', 'Requirements', 'Frequency'].filter((k) => fields[k]).map((k) => `<b>${k}:</b> ${inline(fields[k])}`).join('<br>');
    const icon = ACTION_KEY[d.actions] ? ` <span class="action-icon">${ACTION_KEY[d.actions]}</span>` : '';
    return `<h4 class="sub-ability">Champion's Reaction: ${d.name}${icon}</h4>${head ? head + '<hr>' : ''}${aonToHtml(body)}`;
}

// ---------- призвания ----------
const causes = causeDocs.map((d) => {
    let md = d.markdown || '';
    const reactions = [];
    md = md.replace(/<title level="2">Champion's Reaction<\/title>\s*<document[^>]*id="(action-\d+)"[^>]*\/>/, (_, id) => {
        const a = actionDocs.find((x) => x.id === id || `action-${idFromUrl(x.url)}` === id);
        if (a) reactions.push(actionHtml(a));
        return '\n\n%%REACTION%%\n\n';
    });
    // усиления ответного действия: <title level="2" right="Level 9">Relentless Reaction</title> → заголовок раздела
    md = md.replace(/<title level="2"(?: right="Level (\d+)")?>([^<]+)<\/title>/g,
        (_, lv, name) => `\n\n### ${name.trim()}${lv ? ` (Level ${lv})` : ''}\n\n`);
    // «Source» — в начале, без черты «---»: убираем строкой
    const html = aonToHtml(md.replace(/\*\*Source\*\*[^\n]*\n/, ''))
        .replace(/<p>%%REACTION%%<\/p>/, reactions.join(''));
    return { id: idFromUrl(d.url), name: d.name, url: SITE + d.url, html };
}).sort((a, b) => a.id - b.id);

// ---------- заклинания преданности ----------
const spells = remasterOnly(spellDocs).map((d) => {
    const { fields } = splitDoc(d.markdown);
    const keep = {};
    for (const k of ['Requirements', 'Trigger', 'Range', 'Area', 'Target', 'Targets', 'Defense', 'Duration']) {
        const v = (fields[k] || '').replace(/<\/?row[^>]*>/g, '').trim();
        if (v) keep[k] = inline(v);
    }
    return {
        id: idFromUrl(d.url), name: d.name, nameEn: d.name, url: SITE + d.url,
        actions: ACTION_KEY[d.actions] || '',
        traits: [...(d.markdown || '').matchAll(/<trait label="([^"]+)"/g)].map((m) => ({ slug: slugify(m[1]), name: m[1] })),
        source: d.primary_source_raw || d.primary_source || '',
        fields: keep, html: bodyHtml(d.markdown),
    };
});

// ---------- особенности класса ----------
const feature = (name) => {
    const d = featureDocs.find((x) => x.name === name);
    if (!d) throw new Error(`нет особенности «${name}»`);
    return splitDoc(d.markdown).body || d.markdown;
};
/** Раздел «<title level="3">name</title> …» до следующего заголовка. */
const section = (md, name) => {
    const m = md.match(new RegExp(`<title level="3"[^>]*>${name}</title>([\\s\\S]*?)(?=<title |$)`));
    if (!m) throw new Error(`нет раздела «${name}»`);
    return m[1];
};
/** Варианты «**Имя:** текст» → { имя: html }; текст до первого варианта — вступление. */
function options(md, names) {
    const out = {};
    let intro = md;
    for (const n of names) {
        const re = new RegExp(`\\*\\*${n}:\\*\\*\\s*([\\s\\S]*?)(?=\\*\\*(?:${names.join('|')}):\\*\\*|$)`);
        const m = md.match(re);
        if (!m) throw new Error(`нет варианта «${n}»`);
        out[n] = aonToHtml(m[1].replace(/<br\s*\/?>\s*$/, '').trim());
        intro = intro.replace(m[0], '');
    }
    return { intro: aonToHtml(intro.replace(/(<br\s*\/?>\s*)+$/, '').trim()), out };
}
const sanct = options(section(feature('Deity'), 'Sanctification'), ['Holy', 'Unholy']);
const bless = options(feature('Blessing of the Devoted'), ['Blessed Armament', 'Blessed Shield', 'Blessed Swiftness']);

const raw = {
    fetchedAt: new Date().toISOString(),
    source: SITE + CLASS_URL,
    sourceName: 'Archives of Nethys',
    feats,
    causes,
    spells,
    features: {
        cause: aonToHtml(feature('Cause')),
        devotion: aonToHtml(feature('Devotion Spells')),
        sanctification: sanct.intro,
        sanctOptions: sanct.out,
        blessing: bless.intro,
        blessingOptions: bless.out,
    },
};
console.log(`черт ${feats.length}, призваний ${causes.length}, заклинаний ${spells.length}, ответных действий ${actionDocs.length}`);
await writeSource('champion', 'aon', raw);
await writeChampion(await readSource('champion', 'pf2ru'), 'tools/fetch-champion-aon.mjs');
