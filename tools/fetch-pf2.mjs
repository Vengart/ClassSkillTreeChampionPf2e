#!/usr/bin/env node
// ============================================================
// Загрузчик данных с pf2.ru для дерева черт Поборника.
//
//   node tools/fetch-pf2.mjs
//
// 1. Скачивает страницу класса и вытаскивает JSON-таблицы черт
//    и заклинаний (атрибут items у <pf2-table>).
// 2. Для каждой черты / заклинания / призвания скачивает
//    «вьюбокс» (/viewbox/<type>/<id>) — HTML с описанием.
// 3. Вырезает разделы «Освящение», «Аура поборника»,
//    «Благословение верного» со вкладки details.
// 4. Сохраняет всё в data/pf2-raw.json (сырые данные) и
//    собирает граф в data/champion-data.js (см. build-graph.mjs).
//
// Запросы идут последовательно с паузой, чтобы не нагружать сайт.
// Уже скачанные описания кешируются в data/cache/.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildGraph } from './build-graph.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(ROOT, 'data');
const CACHE_DIR = path.join(DATA_DIR, 'cache');
const BASE = 'https://pf2.ru';
const CLASS_SLUG = 'champion';
const DELAY_MS = 350;
const FORCE = process.argv.includes('--force');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, cacheName) {
    const cacheFile = cacheName && path.join(CACHE_DIR, cacheName);
    if (cacheFile && !FORCE) {
        try { return await fs.readFile(cacheFile, 'utf8'); } catch { /* нет в кеше */ }
    }
    for (let attempt = 0; attempt < 4; attempt++) {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (feat-tree fetcher)' } });
        if (res.ok) {
            const text = await res.text();
            if (cacheFile) await fs.writeFile(cacheFile, text, 'utf8');
            await sleep(DELAY_MS);
            return text;
        }
        if (![425, 429, 502, 503].includes(res.status)) throw new Error(`${res.status} ${url}`);
        await sleep(1500 * (attempt + 1));
    }
    throw new Error(`Не удалось скачать ${url}`);
}

const decodeAttr = (s) => s
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&');

// ---------- очистка HTML описаний ----------

function cleanHtml(html) {
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        // «ромбики» раскрытия на сайте нам не нужны
        .replace(/<span class="rhombus"[^>]*><\/span>/g, '')
        .replace(/<span class="rhombus-wrap">\s*([\s\S]*?)<\/span>/g, '$1')
        .replace(/\s(on\w+|itemID|itemType|itemId|data-quicklink-bound|style)="[^"]*"/g, '')
        .replace(/\s(on\w+|itemID|itemType)=\S+/g, '')
        // относительные ссылки → абсолютные на pf2.ru
        .replace(/href="\/(?!\/)/g, `href="${BASE}/`)
        .replace(/­/g, '') // мягкие переносы из вёрстки книги
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{2,}/g, '\n')
        .trim();
}

const stripTags = (html) => cleanHtml(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Разбирает вьюбокс: шапку («Источник», «Критерии»…) и тело описания. */
function parseViewbox(html) {
    const m = html.match(/<div class="item-box-in"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>|<script|$)/);
    let inner = m ? m[1] : '';
    inner = inner.replace(/<script[\s\S]*$/i, '');
    const hr = inner.indexOf('<hr>');
    const head = hr >= 0 ? inner.slice(0, hr) : '';
    const body = hr >= 0 ? inner.slice(hr + 4) : inner;
    const fields = {};
    for (const line of head.split(/<br>|\n/)) {
        const f = line.match(/<b>([^<:]+):<\/b>\s*([\s\S]*)/);
        if (f) fields[f[1].trim()] = cleanHtml(f[2]).replace(/\.\s*$/, '');
    }
    // вложенные действия (ответное действие призвания и т.п.)
    const nested = [...html.matchAll(/const itemBoxId = '(\w+)-(\d+)-ru-item-box'/g)]
        .map((x) => ({ type: x[1], id: x[2] }));
    return { fields, html: cleanHtml(body), nested };
}

function parseTraits(traitsHtml = '') {
    const traits = [...traitsHtml.matchAll(/href="\/traits\/([^"]+)"[^>]*>([^<]+)</g)]
        .map((m) => ({ slug: m[1], name: m[2].trim() }));
    let rarity = 'common';
    if (/trait-uncommon/.test(traitsHtml)) rarity = 'uncommon';
    if (/trait-rare/.test(traitsHtml)) rarity = 'rare';
    if (/trait-unique/.test(traitsHtml)) rarity = 'unique';
    return { traits: traits.filter((t) => !['uncommon', 'rare', 'unique'].includes(t.slug)), rarity };
}

function parseActions(actionsHtml = '') {
    return [...actionsHtml.matchAll(/action-icon">([^<]+)</g)].map((m) => m[1]).join('/') || null;
}

function parsePrereqLinks(html = '') {
    return [...html.matchAll(/data-key="(\w+)\/(\d+)"/g)].map((m) => ({ type: m[1], id: Number(m[2]) }));
}

/** Вырезает раздел страницы details между якорем id и следующим якорем. */
function sliceSection(html, anchorId) {
    const start = html.indexOf(`id="${anchorId}"`);
    if (start < 0) return '';
    const after = html.indexOf('class="anchor--link"', start + 10);
    let chunk = html.slice(start, after > 0 ? after : undefined);
    chunk = chunk.replace(/^[^>]*>\s*(<\/a>)?/, '').replace(/<a[^>]*$/, '');
    chunk = chunk.replace(/<h[23][^>]*>[\s\S]*?<\/h[23]>/, '');
    return chunk;
}

/** Делит раздел вида «<b>Название:</b> текст<br>» на пункты. */
function splitBoldItems(sectionHtml) {
    const out = {};
    const re = /<b>([^<]+?):<\/b>([\s\S]*?)(?=<br>\s*<b>|<b>[^<]+?:<\/b>|$)/g;
    let m;
    while ((m = re.exec(sectionHtml))) out[m[1].trim()] = cleanHtml(m[2]).replace(/^(<br>\s*)+|(<br>\s*)+$/g, '');
    return out;
}

async function main() {
    await fs.mkdir(CACHE_DIR, { recursive: true });

    console.log('→ страница класса (черты)');
    const featsPage = await get(`${BASE}/classes/${CLASS_SLUG}?tab=feats`, `class-feats.html`);
    const tables = [...featsPage.matchAll(/<pf2-table[^>]*?items='([^']*)'/g)].map((m) => JSON.parse(decodeAttr(m[1])));
    const featRows = tables.flat().filter((r) => r.item_type === 'feat');
    const spellRows = tables.flat().filter((r) => r.item_type === 'spell');
    console.log(`  черт: ${featRows.length}, заклинаний: ${spellRows.length}`);

    console.log('→ страница класса (особенности)');
    const details = await get(`${BASE}/classes/${CLASS_SLUG}?tab=details`, `class-details.html`);

    const feats = [];
    for (const [i, r] of featRows.entries()) {
        process.stdout.write(`\r  черты ${i + 1}/${featRows.length}   `);
        const vb = parseViewbox(await get(`${BASE}/viewbox/feats/${r.id}?lang=ru`, `feat-${r.id}.html`));
        const { traits, rarity } = parseTraits(r.traits);
        feats.push({
            id: r.id,
            name: r.rus_name || r.name,
            nameEn: r.name,
            url: BASE + encodeURI(r.item_url),
            level: r.level_sort,
            actions: parseActions(r.actions),
            traits,
            rarity,
            legacy: !!r.is_legacy,
            source: r.source,
            prerequisitesHtml: r.prerequisites === '-' ? '' : cleanHtml(r.prerequisites),
            prerequisitesText: r.prerequisites === '-' ? '' : stripTags(r.prerequisites),
            prereqLinks: parsePrereqLinks(r.prerequisites),
            fields: vb.fields,
            html: vb.html,
        });
    }
    console.log();

    const spells = [];
    for (const r of spellRows) {
        const vb = parseViewbox(await get(`${BASE}/viewbox/spells/${r.id}?lang=ru`, `spell-${r.id}.html`));
        const { traits, rarity } = parseTraits(r.traits);
        spells.push({
            id: r.id, name: r.rus_name || r.name, nameEn: r.name, url: BASE + encodeURI(r.item_url),
            level: r.level_sort, actions: parseActions(r.actions), traits, rarity, source: r.source,
            fields: vb.fields, html: vb.html,
        });
    }
    console.log(`  заклинания: ${spells.length}`);

    // Призвания: id берём из критериев черт (championcause/N)
    const causeIds = [...new Set(feats.flatMap((f) => f.prereqLinks.filter((l) => l.type === 'championcause').map((l) => l.id)))];
    const causes = [];
    for (const id of causeIds) {
        const raw = await get(`${BASE}/viewbox/championcauses/${id}?lang=ru`, `cause-${id}.html`);
        const vb = parseViewbox(raw);
        const name = (raw.match(/item-header-name"[^>]*>\s*([^<]+?)\s*</) || [])[1] || `cause ${id}`;
        // ответное действие призвания
        let reaction = null;
        for (const n of vb.nested.filter((x) => x.type === 'action')) {
            const araw = await get(`${BASE}/viewbox/actions/${n.id}?lang=ru`, `action-${n.id}.html`);
            const avb = parseViewbox(araw);
            reaction = {
                id: Number(n.id),
                name: (araw.match(/item-header-name"[^>]*>\s*([^<]+?)\s*</) || [])[1] || '',
                fields: avb.fields,
                html: avb.html,
            };
        }
        causes.push({ id, name, url: `${BASE}/championcauses/${id}`, fields: vb.fields, html: vb.html, reaction });
    }
    console.log(`  призвания: ${causes.length}`);

    // Shield Block (feat 5212) — классовая особенность 1 уровня
    const sbRaw = await get(`${BASE}/viewbox/feats/5212?lang=ru`, `feat-5212.html`);
    const shieldBlock = { id: 5212, name: 'Блок щитом', url: `${BASE}/feats/shield%20block`, ...parseViewbox(sbRaw) };

    const sanctSection = sliceSection(details, 'освящение');
    const raw = {
        fetchedAt: new Date().toISOString(),
        source: `${BASE}/classes/${CLASS_SLUG}?tab=feats`,
        feats,
        spells,
        causes,
        features: {
            shieldBlock,
            aura: cleanHtml(sliceSection(details, 'аура-поборника')),
            cause: cleanHtml(sliceSection(details, 'призвание')),
            devotion: cleanHtml(sliceSection(details, 'заклинания-преданности')),
            sanctification: cleanHtml(sanctSection.split(/<b>/)[0] || sanctSection),
            sanctOptions: splitBoldItems(sanctSection),
            blessing: cleanHtml((sliceSection(details, 'благословение-верного').split('<b>')[0]) || ''),
            blessingOptions: splitBoldItems(sliceSection(details, 'благословение-верного')),
        },
    };

    await fs.writeFile(path.join(DATA_DIR, 'pf2-raw.json'), JSON.stringify(raw, null, 2), 'utf8');
    console.log('✓ data/pf2-raw.json');

    const graph = buildGraph(raw);
    await fs.writeFile(
        path.join(DATA_DIR, 'champion-data.js'),
        `// Сгенерировано tools/fetch-pf2.mjs — не редактируйте вручную.\n` +
        `// Источник: ${raw.source} (${raw.fetchedAt})\n` +
        `window.CHAMPION_DATA = ${JSON.stringify(graph, null, 1)};\n`,
        'utf8',
    );
    console.log(`✓ data/champion-data.js — узлов: ${graph.nodes.length}, связей: ${graph.edges.length}`);
    for (const w of graph.warnings) console.warn('  ! ' + w);
}

main().catch((e) => { console.error(e); process.exit(1); });
