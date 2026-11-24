// ============================================================
// Данные для экспорта сборки волшебника в Foundry VTT (вызывается из tools/build-wizard.mjs).
//
// Источники:
//   • data/wizard/source/foundry.json         — предметы системы pf2e (tools/fetch-wizard-foundry.mjs);
//   • data/wizard/manual/foundry-ru.json       — их русские версии из персонажей Foundry
//   • data/wizard/manual/foundry-template.json — шаблон персонажа   (tools/import-foundry-actors.mjs).
// Предмет берётся русским из foundry-ru.json; если его там нет — английский из репозитория pf2e
// с названием и описанием из перевода Дока и Юры (это перевод того же модуля Foundry), если они есть.
// Результат: data/wizard/build/foundry.js — window.CLASS_FOUNDRY = { template, items, nodes },
// грузится сайтом только при экспорте.
// ============================================================

import fs from 'node:fs/promises';
import { classDir, readSource, readManual } from './class-build.mjs';

const exists = (f) => fs.access(f).then(() => true, () => false);

/** graph — граф волшебника, doc — тексты перевода Дока и Юры по id узла. Возвращает false, если данных нет. */
export async function writeWizardFoundry(graph, doc, rules) {
    if (!(await exists(classDir('wizard', 'source', 'foundry.json'))) || !(await exists(classDir('wizard', 'manual', 'foundry-template.json')))) {
        console.log('  Foundry: нет source/foundry.json или manual/foundry-template.json — экспорт в Foundry недоступен');
        return false;
    }
    const src = await readSource('wizard', 'foundry');
    const template = await readManual('wizard', 'foundry-template');
    const ru = (await exists(classDir('wizard', 'manual', 'foundry-ru.json'))) ? await readManual('wizard', 'foundry-ru') : {};
    const FNAME = rules.foundryNames || {};

    // узел графа по английскому названию предмета Foundry
    const nodeByEn = new Map();
    for (const n of graph.nodes) {
        if (n.kind === 'feat') nodeByEn.set(FNAME[n.nameEn] || n.nameEn, n);
        if (n.kind === 'option') nodeByEn.set(n.name, n);   // у школ и диссертаций name — английский (AoN)
    }
    const uuidOf = (e) => `Compendium.pf2e.${e.pack}.Item.${e._id}`;
    const uuidByName = new Map(src.items.map((e) => [`${e.pack}|${e.name}`, uuidOf(e)]));
    /** «Compendium.pf2e.<пак>.Item.<название>» (так в исходниках системы) → ссылка по id, как в компендиуме. */
    const known = src.uuids || {};   // из tools/fetch-wizard-foundry.mjs: заклинания, эффекты, действия…
    const fixUuid = (u) => {
        const m = /^Compendium\.pf2e\.([\w-]+)\.Item\.(.+)$/.exec(u || '');
        return (m && (uuidByName.get(`${m[1]}|${m[2]}`) || known[u])) || u;
    };
    /** Все ссылки в тексте предмета (описание, правила) — по id. */
    const fixAll = (item) => JSON.parse(JSON.stringify(item)
        .replace(/Compendium\.pf2e\.[\w-]+\.Item\.[^\]}"]+/g, (u) => fixUuid(u)));
    let unresolved = new Set();

    const items = {}, nodes = {};
    let fromRu = 0, fromDoc = 0, en = 0;
    for (const e of src.items) {
        const uuid = uuidOf(e);
        const node = nodeByEn.get(e.name);
        let item;
        if (ru[e.name]) {
            item = structuredClone(ru[e.name]);
            fromRu++;
        } else {
            const { pack, path, _id, folder, ...rest } = structuredClone(e);
            item = { ...rest, folder: null, effects: rest.effects || [], ownership: { default: 0 }, flags: rest.flags || {},
                _stats: { systemId: 'pf2e', compendiumSource: uuid } };
            // в исходниках системы slug пустой — в компендиуме он из английского названия
            item.system.slug = item.system.slug || e.name.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            const t = node && doc[node.id];
            // перевод модуля Foundry (Док и Юра): название и, если есть, описание
            if (t?.name && t.name !== e.name) {
                item.name = t.name;
                item.flags.babele = { translated: true, hasTranslation: true, originalName: e.name, originalPayload: {}, lang: 'en' };
                if (t.html) item.system.description.value = t.html;
                fromDoc++;
            } else en++;
        }
        item._stats = { ...(item._stats || {}), compendiumSource: uuid };
        item = fixAll(item);
        for (const m of JSON.stringify(item).matchAll(/Compendium\.pf2e\.[\w-]+\.Item\.([^\]}"]+)/g)) {
            if (!/^[A-Za-z0-9]{16}$/.test(m[1]) && !m[1].startsWith('{')) unresolved.add(m[0]);
        }
        items[uuid] = item;
        if (node) nodes[node.id] = uuid;
    }
    const missing = graph.nodes.filter((n) => (n.kind === 'feat' || n.kind === 'option') && !nodes[n.id]).map((n) => n.nameEn || n.name);
    const data = { source: src.source, commit: src.commit, template, items, nodes };
    await fs.writeFile(classDir('wizard', 'build', 'foundry.js'),
        `// Собрано tools/build-wizard.mjs — не редактировать вручную.\nwindow.CLASS_FOUNDRY = ${JSON.stringify(data)};\n`, 'utf8');
    console.log(`  Foundry: предметов ${Object.keys(items).length} (русских из персонажей ${fromRu}, с переводом Дока и Юры ${fromDoc}, ` +
        `английских ${en})${missing.length ? `; нет в Foundry: ${missing.join(', ')}` : ''}` +
        `${unresolved.size ? `; ссылок без id: ${unresolved.size} (${[...unresolved].slice(0, 5).join(', ')}…)` : '; все ссылки по id'}`);
    return true;
}
