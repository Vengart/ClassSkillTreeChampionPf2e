#!/usr/bin/env node
// ============================================================
// Загрузчик данных с pf2.ru для дерева черт Поборника
// (волшебник — tools/fetch-wizard-aon.mjs).
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
import { buildGraph } from './build-graph.mjs';
import {
    DATA_DIR, BASE, get as getUrl, readTables, cleanHtml, parseViewbox, parseTraits, parseActions,
    sliceSection, splitBoldItems, featFromRow, writeClassData,
} from './pf2-common.mjs';

const CACHE_DIR = path.join(DATA_DIR, 'cache');
const CLASS_SLUG = 'champion';
const get = (url, name) => getUrl(url, name && path.join(CACHE_DIR, name));

async function main() {
    await fs.mkdir(CACHE_DIR, { recursive: true });

    console.log('→ страница класса (черты)');
    const featsPage = await get(`${BASE}/classes/${CLASS_SLUG}?tab=feats`, `class-feats.html`);
    const tables = readTables(featsPage);
    const featRows = tables.filter((r) => r.item_type === 'feat');
    const spellRows = tables.filter((r) => r.item_type === 'spell');
    console.log(`  черт: ${featRows.length}, заклинаний: ${spellRows.length}`);

    console.log('→ страница класса (особенности)');
    const details = await get(`${BASE}/classes/${CLASS_SLUG}?tab=details`, `class-details.html`);

    const feats = [];
    for (const [i, r] of featRows.entries()) {
        process.stdout.write(`\r  черты ${i + 1}/${featRows.length}   `);
        const vb = parseViewbox(await get(`${BASE}/viewbox/feats/${r.id}?lang=ru`, `feat-${r.id}.html`));
        feats.push(featFromRow(r, vb));
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

    await writeClassData('champion', buildGraph(raw), raw, 'tools/fetch-pf2.mjs');
}

main().catch((e) => { console.error(e); process.exit(1); });
