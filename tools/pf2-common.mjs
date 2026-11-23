// ============================================================
// Общие функции загрузки и разбора страниц pf2.ru
// (используются загрузчиками классов: fetch-pf2.mjs; волшебник берёт с AoN — fetch-wizard-aon.mjs).
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA_DIR = path.join(ROOT, 'data');
export const BASE = 'https://pf2.ru';
const DELAY_MS = 350;
export const FORCE = process.argv.includes('--force');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** GET с кешем на диске (cacheFile — полный путь или null) и повтором при 429/5xx. */
export async function get(url, cacheFile) {
    if (cacheFile && !FORCE) {
        try { return await fs.readFile(cacheFile, 'utf8'); } catch { /* нет в кеше */ }
    }
    for (let attempt = 0; attempt < 4; attempt++) {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (feat-tree fetcher)' } });
        if (res.ok) {
            const text = await res.text();
            if (cacheFile) {
                await fs.mkdir(path.dirname(cacheFile), { recursive: true });
                await fs.writeFile(cacheFile, text, 'utf8');
            }
            await sleep(DELAY_MS);
            return text;
        }
        if (![425, 429, 502, 503].includes(res.status)) throw new Error(`${res.status} ${url}`);
        await sleep(1500 * (attempt + 1));
    }
    throw new Error(`Не удалось скачать ${url}`);
}

export const decodeAttr = (s) => s
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** JSON-таблицы <pf2-table items='…'> со страницы класса. */
export function readTables(html) {
    return [...html.matchAll(/<pf2-table[^>]*?items='([^']*)'/g)].map((m) => JSON.parse(decodeAttr(m[1]))).flat();
}

// ---------- очистка HTML описаний ----------

export function cleanHtml(html) {
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

export const stripTags = (html) => cleanHtml(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Разбирает вьюбокс: шапку («Источник», «Критерии»…) и тело описания. */
export function parseViewbox(html) {
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

export function parseTraits(traitsHtml = '') {
    const traits = [...traitsHtml.matchAll(/href="\/traits\/([^"]+)"[^>]*>([^<]+)</g)]
        .map((m) => ({ slug: m[1], name: m[2].trim() }));
    let rarity = 'common';
    if (/trait-uncommon/.test(traitsHtml)) rarity = 'uncommon';
    if (/trait-rare/.test(traitsHtml)) rarity = 'rare';
    if (/trait-unique/.test(traitsHtml)) rarity = 'unique';
    return { traits: traits.filter((t) => !['uncommon', 'rare', 'unique'].includes(t.slug)), rarity };
}

export function parseActions(actionsHtml = '') {
    return [...actionsHtml.matchAll(/action-icon">([^<]+)</g)].map((m) => m[1]).join('/') || null;
}

export function parsePrereqLinks(html = '') {
    return [...html.matchAll(/data-key="(\w+)\/(\d+)"/g)].map((m) => ({ type: m[1], id: Number(m[2]) }));
}

/** Вырезает раздел страницы details между якорем id и следующим якорем. */
export function sliceSection(html, anchorId) {
    const start = html.indexOf(`id="${anchorId}"`);
    if (start < 0) return '';
    const after = html.indexOf('class="anchor--link"', start + 10);
    let chunk = html.slice(start, after > 0 ? after : undefined);
    chunk = chunk.replace(/^[^>]*>\s*(<\/a>)?/, '').replace(/<a[^>]*$/, '');
    chunk = chunk.replace(/<h[23][^>]*>[\s\S]*?<\/h[23]>/, '');
    return chunk;
}

/** Делит раздел вида «<b>Название:</b> текст<br>» на пункты. */
export function splitBoldItems(sectionHtml) {
    const out = {};
    const re = /<b>([^<]+?):<\/b>([\s\S]*?)(?=<br>\s*<b>|<b>[^<]+?:<\/b>|$)/g;
    let m;
    while ((m = re.exec(sectionHtml))) out[m[1].trim()] = cleanHtml(m[2]).replace(/^(<br>\s*)+|(<br>\s*)+$/g, '');
    return out;
}

/** Строка таблицы черт → объект черты (с телом из вьюбокса). */
export function featFromRow(r, vb) {
    const { traits, rarity } = parseTraits(r.traits);
    return {
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
    };
}

/** Уровни, на которых класс получает классовую черту (по таблице развития класса). */
export function classFeatLevels(detailsHtml, anchor) {
    const rows = [...detailsHtml.matchAll(/<tr>\s*<td>\s*(\d+)\s*<\/td>\s*<td>([\s\S]*?)<\/td>/g)];
    return [...new Set(rows.filter((m) => m[2].includes(`#${anchor}`)).map((m) => Number(m[1])))].sort((a, b) => a - b);
}

/** Карточки-подклассы со вкладок класса (школы магии, диссертации…): id-якоря → название, ссылка, тело. */
export function parseItemCards(html, anchorPrefix) {
    const out = [];
    const re = new RegExp(`<a id="(${anchorPrefix}-[^"]+)"\\s+class="anchor"><\\/a>\\s*<div class="item-output item-output--card[^"]*"[^>]*>`, 'g');
    let m;
    while ((m = re.exec(html))) {
        const start = m.index + m[0].length;
        const next = html.indexOf('<a id="', start);
        const block = html.slice(start, next > 0 ? next : undefined);
        const head = block.match(/class="header-link[^"]*"\s+href="([^"]+)">\s*([^<]+?)\s*<\/a>/);
        const body = (block.match(/<div class="item-output--body[^"]*">([\s\S]*)<\/div>\s*<\/div>/) || [])[1] || '';
        out.push({
            slug: m[1].slice(anchorPrefix.length + 1),
            name: head ? head[2] : m[1],
            url: head ? encodeURI(head[1]) : null,
            html: cleanHtml(body).replace(/^<b>Источник:<\/b>[\s\S]*?<br>\s*/, ''),
            links: parsePrereqLinks(body),
        });
    }
    return out;
}
