// ============================================================
// Предметы Foundry VTT (система pf2e) для экспорта сборки волшебника — из открытого репозитория
// системы на GitHub (foundryvtt/pf2e, исходники компендиумов, на английском).
//
//   node tools/fetch-wizard-foundry.mjs          — скачать (с кешем в data/cache/wizard-foundry)
//   node tools/fetch-wizard-foundry.mjs --force  — перекачать
//
// Берутся: все классовые черты волшебника, общие классовые черты с теми же названиями, что
// в data/wizard/source/aon.json, школы и диссертации, а также то, что они выдают (GrantItem —
// например, «Фамильяр» → «Питомец»). Русские тексты накладываются при сборке (tools/build-wizard.mjs).
// Результат: data/wizard/source/foundry.json; затем node tools/build-wizard.mjs.
// ============================================================

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { readSource, readManual, writeSource } from './class-build.mjs';
import { DATA_DIR, FORCE, get } from './pf2-common.mjs';

const REPO = 'foundryvtt/pf2e';
const CACHE = path.join(DATA_DIR, 'cache', 'wizard-foundry');

// Список файлов — из «лёгкого» клона репозитория (только деревья, без содержимого файлов: несколько МБ),
// а не через GitHub API: у того лимит 60 запросов в час. Сами файлы — с raw.githubusercontent.com.
const REPO_DIR = path.join(CACHE, 'repo');
const git = (...args) => execFileSync('git', ['-C', REPO_DIR, ...args], { encoding: 'utf8', maxBuffer: 1 << 28 });
if (FORCE) fs.rmSync(REPO_DIR, { recursive: true, force: true });
if (!fs.existsSync(path.join(REPO_DIR, '.git'))) {
    fs.mkdirSync(CACHE, { recursive: true });
    execFileSync('git', ['clone', '--depth', '1', '--filter=blob:none', '--no-checkout', `https://github.com/${REPO}.git`, REPO_DIR], { stdio: 'inherit' });
}
const ref = git('rev-parse', '--abbrev-ref', 'HEAD').trim();
const commit = git('rev-parse', 'HEAD').trim();
const FILES = git('ls-tree', '-r', '--name-only', 'HEAD', 'packs/pf2e').split('\n')
    .filter((f) => f.endsWith('.json')).map((f) => f.slice('packs/pf2e/'.length));
const RAW = `https://raw.githubusercontent.com/${REPO}/${commit}/packs/pf2e`;
console.log(`pf2e: ветка ${ref}, коммит ${commit.slice(0, 10)}, файлов в паках ${FILES.length}`);

const json = async (url, file) => JSON.parse(await get(url, file && path.join(CACHE, file)));
/** Файлы папки (без вложенных и служебных _folders.json). */
const list = async (dir) => FILES.filter((f) => f.startsWith(`${dir}/`) && !f.slice(dir.length + 1).includes('/'))
    .map((f) => ({ name: f.slice(dir.length + 1) })).filter((x) => !x.name.startsWith('_'));
/** Подпапки папки. */
const subdirs = (dir) => [...new Set(FILES.filter((f) => f.startsWith(`${dir}/`) && f.slice(dir.length + 1).includes('/'))
    .map((f) => `${dir}/${f.slice(dir.length + 1).split('/')[0]}`))];
const fetchItem = async (dir, file) => {
    const item = await json(`${RAW}/${dir}/${file}`, `${commit.slice(0, 10)}/${dir.replace(/\//g, '_')}__${file}`);
    // папка компендиума: черты — feats-srd, особенности классов — classfeatures
    const pack = dir.startsWith('feats/') ? 'feats-srd' : dir.startsWith('class-features') ? 'classfeatures' : dir.split('/')[0];
    return { pack, path: `${dir}/${file}`, item };
};

const aon = await readSource('wizard', 'aon');
const rules = await readManual('wizard', 'rules');
/** Названия черт в Foundry, если отличаются от AoN (manual/rules.json → foundryNames). */
const FNAME = rules.foundryNames || {};
const featNames = new Set(aon.feats.map((f) => FNAME[f.nameEn] || f.nameEn));
const LEVELS = ['1', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'];
const out = [];

// черты волшебника и общие классовые черты из списка AoN
for (const folder of ['feats/class/wizard', 'feats/class/shared-class-feats']) {
    for (const lv of LEVELS) {
        const dir = `${folder}/level-${lv}`;
        for (const f of await list(dir)) {
            const e = await fetchItem(dir, f.name);
            if (folder.endsWith('wizard') || featNames.has(e.item.name)) out.push(e);
        }
    }
}
// школы — все файлы папки; диссертации и «Арканная школа / диссертация» — по названию файла
for (const f of await list('class-features/wizard')) out.push(await fetchItem('class-features/wizard', f.name));
for (const slug of [...aon.theses.map((t) => t.slug), 'arcane-school', 'arcane-thesis']) {
    out.push(await fetchItem('class-features', `${slug}.json`));
}

// то, что выдают взятые предметы (GrantItem с прямой ссылкой «Compendium.pf2e.<пак>.Item.<название>»)
const PACK_DIR = { 'feats-srd': 'feats', classfeatures: 'class-features' };
const have = new Set(out.map((e) => e.item.name));
const slugify = (s) => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
for (let i = 0; i < out.length; i++) {
    for (const r of out[i].item.system?.rules || []) {
        const m = r.key === 'GrantItem' && /^Compendium\.pf2e\.([\w-]+)\.Item\.(.+)$/.exec(r.uuid || '');
        if (!m || have.has(m[2]) || !PACK_DIR[m[1]]) continue;
        // общие черты лежат по уровням: ищем файл по названию
        const base = PACK_DIR[m[1]];
        const dirs = base === 'feats' ? [...subdirs('feats/general'), ...subdirs('feats/skill')] : ['class-features'];
        for (const dir of dirs) {
            const hit = (await list(dir)).find((f) => f.name === `${slugify(m[2])}.json`);
            if (hit) { out.push(await fetchItem(dir, hit.name)); have.add(m[2]); break; }
        }
        if (!have.has(m[2])) console.warn(`  не найдено: ${m[2]} (выдаёт «${out[i].item.name}»)`);
    }
}

// ---------- ссылки по названию → по id ----------
// В исходниках системы ссылки записаны названиями (@UUID[Compendium.pf2e.spells-srd.Item.Fireball]),
// в собранном компендиуме — по id; Foundry находит только по id, иначе пишет «Unknown».
// Находим id каждой упомянутой записи: файл в папке пака называется slug названия.
const PACK_FOLDER = {
    'spells-srd': 'spells', 'feat-effects': 'feat-effects', actionspf2e: 'actions', conditionitems: 'conditions',
    classfeatures: 'class-features', 'familiar-abilities': 'familiar-abilities', 'feats-srd': 'feats',
    'bestiary-family-ability-glossary': 'bestiary-family-ability-glossary', 'equipment-srd': 'equipment',
};
const isId = (s) => /^[A-Za-z0-9]{16}$/.test(s);
const refs = new Map();   // пак → названия
for (const e of out) {
    for (const m of JSON.stringify(e.item).matchAll(/Compendium\.pf2e\.([\w-]+)\.Item\.([^\]}"]+)/g)) {
        if (isId(m[2])) continue;
        if (!refs.has(m[1])) refs.set(m[1], new Set());
        refs.get(m[1]).add(m[2]);
    }
}
const uuids = {};
const unresolved = [];
for (const [pack, names] of refs) {
    const folder = PACK_FOLDER[pack];
    const inPack = folder ? FILES.filter((f) => f.startsWith(`${folder}/`)).map((f) => f.slice(folder.length + 1)) : [];
    if (!inPack.length) { unresolved.push(...[...names].map((n) => `${pack}: ${n}`)); continue; }
    const bySlug = new Map(inPack.map((p) => [p.split('/').pop().replace(/\.json$/, ''), p]));
    for (const name of names) {
        const p = bySlug.get(slugify(name));
        if (!p) { unresolved.push(`${pack}: ${name}`); continue; }
        const doc = await json(`${RAW}/${folder}/${p}`, `${commit.slice(0, 10)}/ref_${folder}__${p.replace(/\//g, '_')}`);
        if (doc.name !== name) { unresolved.push(`${pack}: ${name} (файл ${p} — «${doc.name}»)`); continue; }
        uuids[`Compendium.pf2e.${pack}.Item.${name}`] = `Compendium.pf2e.${pack}.Item.${doc._id}`;
    }
}
console.log(`  ссылки: найдено ${Object.keys(uuids).length}${unresolved.length ? `, не найдено ${unresolved.length}: ${unresolved.join('; ')}` : ''}`);

const missing = aon.feats.filter((f) => f.level <= 20 && !have.has(FNAME[f.nameEn] || f.nameEn)).map((f) => f.nameEn);
if (missing.length) console.warn(`  нет в Foundry: ${missing.join(', ')}`);
await writeSource('wizard', 'foundry', {
    source: `https://github.com/${REPO}`, ref, commit, fetchedAt: new Date().toISOString(),
    items: out.map(({ pack, path: p, item }) => ({ pack, path: p, ...item })),
    uuids,
});
console.log(`✓ data/wizard/source/foundry.json — предметов ${out.length}`);
