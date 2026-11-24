// ============================================================
// Шаблон персонажа и русские тексты предметов для экспорта в Foundry VTT — из персонажей,
// выгруженных из Foundry (ПКМ по персонажу → Export Data).
//
//   node tools/import-foundry-actors.mjs <шаблон.json> [ещё.json …]
//
// Первый файл — шаблон: самый подробный персонаж (класс, особенности класса по уровням,
// действия, запись заклинаний…). Из него убирается всё, что задаёт сборка: классовые черты,
// школа и диссертация и то, что они выдают; остальное экспорт сохраняет как есть.
// Из всех файлов собираются русские версии предметов (перевод модуля Foundry через Babele)
// по английскому названию — экспорт берёт их вместо английских из data/wizard/source/foundry.json.
// Результат: data/wizard/manual/foundry-template.json и foundry-ru.json.
// ============================================================

import fs from 'node:fs/promises';
import { classDir } from './class-build.mjs';

const files = process.argv.slice(2);
if (!files.length) {
    console.error('Укажите файлы персонажей: node tools/import-foundry-actors.mjs <шаблон.json> [ещё.json …]');
    process.exit(1);
}
const actors = await Promise.all(files.map(async (f) => JSON.parse(await fs.readFile(f, 'utf8'))));

/** Убрать личное: владельцев, папки, кто и когда менял. */
function clean(doc) {
    doc.ownership = { default: 0 };
    if ('folder' in doc) doc.folder = null;
    if (doc._stats) {
        doc._stats = { ...doc._stats, lastModifiedBy: null, exportSource: null, duplicateSource: null };
    }
    return doc;
}
const isChoiceOption = (it) => (it.system?.traits?.otherTags || []).some((t) => /^wizard-arcane-(school|thesis)$/.test(t));

// ---------- шаблон ----------
const tpl = structuredClone(actors[0]);
const cls = tpl.items.find((it) => it.type === 'class');
if (!cls) throw new Error('В шаблоне нет предмета класса');
const byId = new Map(tpl.items.map((it) => [it._id, it]));
const grantedBy = (it) => it.flags?.pf2e?.grantedBy?.id;
/** Оставляем: класс, его особенности (location = id класса), не-черты (действия, записи заклинаний)
 *  и всё, что они выдают; убираем выборы сборки и то, что выдают они. */
const keep = new Set();
const base = (it) => it.type === 'class' || it.system?.location === cls._id || (it.type !== 'feat' && !grantedBy(it));
for (const it of tpl.items) if (base(it) && !isChoiceOption(it)) keep.add(it._id);
let grew = true;
while (grew) {
    grew = false;
    for (const it of tpl.items) {
        if (keep.has(it._id) || isChoiceOption(it)) continue;
        const g = grantedBy(it);
        if (g && keep.has(g) && byId.get(g)?.system?.location === cls._id && it.type !== 'feat') { keep.add(it._id); grew = true; }
        else if (g && keep.has(g) && it.type !== 'feat') { keep.add(it._id); grew = true; }
    }
}
tpl.items = tpl.items.filter((it) => keep.has(it._id)).map((it) => {
    clean(it);
    // выданное убранными предметами больше не числится за оставшимися
    const grants = it.flags?.pf2e?.itemGrants;
    if (grants) for (const [k, v] of Object.entries(grants)) if (!keep.has(v.id)) delete grants[k];
    // выбор школы / диссертации задаёт экспорт
    for (const r of it.system?.rules || []) if (r.key === 'ChoiceSet' && /^arcane(School|Thesis)$/.test(r.flag)) delete r.selection;
    return it;
});
clean(tpl);
if (tpl.prototypeToken) tpl.prototypeToken.name = tpl.name;
const removed = actors[0].items.filter((it) => !keep.has(it._id)).map((it) => it.name);

// ---------- русские версии предметов ----------
const ru = {};
for (const a of actors) {
    for (const it of a.items) {
        const en = it.flags?.babele?.originalName;
        if (!en || it.type !== 'feat' || ru[en]) continue;
        const c = clean(structuredClone(it));
        delete c._id;
        delete c.sort;
        if (c.flags?.pf2e) { delete c.flags.pf2e.grantedBy; delete c.flags.pf2e.itemGrants; }
        c.system.location = null;
        if (c.system.level) delete c.system.level.taken;
        for (const r of c.system.rules || []) if (r.key === 'ChoiceSet') delete r.selection;
        ru[en] = c;
    }
}

await fs.writeFile(classDir('wizard', 'manual', 'foundry-template.json'), JSON.stringify(tpl, null, 1) + '\n');
await fs.writeFile(classDir('wizard', 'manual', 'foundry-ru.json'), JSON.stringify(ru, null, 1) + '\n');
console.log(`✓ data/wizard/manual/foundry-template.json — «${tpl.name}», предметов ${tpl.items.length} (убрано: ${removed.join(', ')})`);
console.log(`✓ data/wizard/manual/foundry-ru.json — русских предметов ${Object.keys(ru).length}`);
