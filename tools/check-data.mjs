// ============================================================
// Проверка данных классов (без зависимостей).
//
//   node tools/check-data.mjs            — все классы
//   node tools/check-data.mjs wizard     — один класс
//
// 1. Ручные файлы data/<класс>/manual/*.json — по своим схемам из data/schema/
//    (поле $schema в файле). Проверяется подмножество JSON Schema, которое там используется:
//    type, enum, pattern, minimum/maximum, minItems, required, properties,
//    additionalProperties, items, $ref на #/definitions.
// 2. Ссылки: темы, группы и узлы из правил есть в собранном графе; названия черт
//    (themeByName, overrides, images.feats, переводы) есть в скачанных данных; файлы иконок
//    лежат в images/; у каждого узла есть текст в каждом переводе.
// Код выхода 1, если есть ошибки.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, classDir, readJson } from './class-build.mjs';

const errors = [];
const warns = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warns.push(`${where}: ${msg}`);
const exists = (f) => fs.access(f).then(() => true, () => false);

// ---------- JSON Schema (подмножество) ----------

const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v);
function validate(v, schema, root, at, where) {
    if (schema.$ref) {
        const target = schema.$ref.replace(/^#\//, '').split('/').reduce((o, k) => o?.[k], root);
        if (!target) return err(where, `${at}: нет определения ${schema.$ref}`);
        return validate(v, target, root, at, where);
    }
    if (schema.enum && !schema.enum.some((e) => e === v)) return err(where, `${at}: ${JSON.stringify(v)} — не из ${JSON.stringify(schema.enum)}`);
    if (schema.type) {
        const t = typeOf(v);
        const ok = t === schema.type || (schema.type === 'number' && t === 'integer');
        if (!ok) return err(where, `${at}: ожидался ${schema.type}, а здесь ${t}`);
    }
    if (typeof v === 'string' && schema.pattern && !new RegExp(schema.pattern, 'u').test(v)) err(where, `${at}: «${v}» не подходит под ${schema.pattern}`);
    if (typeof v === 'number') {
        if (schema.minimum !== undefined && v < schema.minimum) err(where, `${at}: ${v} < ${schema.minimum}`);
        if (schema.maximum !== undefined && v > schema.maximum) err(where, `${at}: ${v} > ${schema.maximum}`);
    }
    if (Array.isArray(v)) {
        if (schema.minItems !== undefined && v.length < schema.minItems) err(where, `${at}: меньше ${schema.minItems} элементов`);
        if (schema.items) v.forEach((x, i) => validate(x, schema.items, root, `${at}[${i}]`, where));
    }
    if (typeOf(v) === 'object') {
        for (const k of schema.required || []) if (!(k in v)) err(where, `${at}: нет поля «${k}»`);
        for (const [k, x] of Object.entries(v)) {
            const p = schema.properties?.[k];
            if (p) validate(x, p, root, `${at}.${k}`, where);
            else if (schema.additionalProperties === false) err(where, `${at}: лишнее поле «${k}»`);
            else if (typeof schema.additionalProperties === 'object') validate(x, schema.additionalProperties, root, `${at}.${k}`, where);
        }
    }
}

// ---------- собранные файлы (window.CLASS_DATA / CLASS_TEXT) ----------

async function readBuild(cls) {
    const dir = classDir(cls, 'build');
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(await fs.readFile(path.join(dir, 'graph.js'), 'utf8'), ctx);
    const graph = ctx.window.CLASS_DATA;
    for (const l of graph?.meta.langs || []) {
        const f = path.join(dir, `text-${l.id}.js`);
        if (await exists(f)) vm.runInContext(await fs.readFile(f, 'utf8'), ctx);
    }
    return { graph, texts: ctx.window.CLASS_TEXT || {} };
}

// ---------- класс ----------

async function checkClass(cls) {
    const manualDir = classDir(cls, 'manual');
    const manual = {};
    for (const f of (await fs.readdir(manualDir)).filter((f) => f.endsWith('.json'))) {
        const where = `data/${cls}/manual/${f}`;
        let data;
        try { data = JSON.parse(await fs.readFile(path.join(manualDir, f), 'utf8')); } catch (e) { err(where, `не JSON: ${e.message}`); continue; }
        manual[f.replace(/\.json$/, '')] = data;
        if (!data.$schema) { warn(where, 'нет поля $schema — схема не проверяется'); continue; }
        const schemaFile = path.resolve(manualDir, data.$schema);
        if (!(await exists(schemaFile))) { err(where, `нет схемы ${data.$schema}`); continue; }
        const schema = JSON.parse(await fs.readFile(schemaFile, 'utf8'));
        validate(data, schema, schema, '$', where);
    }
    const { rules, images, labels } = manual;
    if (!rules || !images || !labels) return err(`data/${cls}/manual`, 'нужны rules.json, images.json и labels.json');

    // скачанные данные: английские названия черт
    const sourceDir = classDir(cls, 'source');
    const sources = {};
    for (const f of (await fs.readdir(sourceDir)).filter((f) => f.endsWith('.json'))) sources[f.replace(/\.json$/, '')] = await readJson(path.join(sourceDir, f));
    const main = sources.aon || sources.pf2ru;
    const featNames = new Set((main?.feats || []).map((f) => f.nameEn));
    const optionNames = new Set([...(main?.schools || []), ...(main?.theses || [])].map((x) => x.name));
    const nameRef = (where, name) => { if (!featNames.has(name)) err(where, `черты «${name}» нет в data/${cls}/source`); };

    // собранный граф
    let build;
    try { build = await readBuild(cls); } catch (e) { return err(`data/${cls}/build`, `не читается: ${e.message} — пересоберите класс`); }
    const { graph, texts } = build;
    const ids = new Set(graph.nodes.map((n) => n.id));
    const idRef = (where, id) => { if (!ids.has(id)) err(where, `узла «${id}» нет в графе`); };
    const reqRef = (where, x) => (x.startsWith('@') ? nameRef(where, x.slice(1)) : idRef(where, x));

    const R = `data/${cls}/manual/rules.json`;
    rules.themes.forEach((id) => idRef(`${R} themes`, id));
    for (const [name, theme] of Object.entries(rules.themeByName)) {
        nameRef(`${R} themeByName`, name);
        if (!rules.themes.includes(theme)) err(`${R} themeByName`, `«${name}»: темы «${theme}» нет в themes`);
    }
    for (const [name, o] of Object.entries(rules.overrides)) {
        nameRef(`${R} overrides`, name);
        for (const x of [...(o.requires || []).flat(), ...(o.forbids || []), ...(o.grantedBy || [])]) reqRef(`${R} overrides «${name}»`, x);
    }
    for (const g of rules.cardGroups) { idRef(`${R} cardGroups`, g.id); if (g.bonus) idRef(`${R} cardGroups ${g.id}.bonus`, g.bonus.id); }
    for (const b of rules.bonusSlots || []) idRef(`${R} bonusSlots`, b.id);
    for (const b of rules.blessings || []) idRef(`${R} blessings`, b.id);
    for (const k of ['schoolUnified', 'thesisFamiliar']) if (rules[k]) idRef(`${R} ${k}`, rules[k]);
    for (const name of rules.outsideFeats || []) if (featNames.has(name)) warn(`${R} outsideFeats`, `«${name}» есть среди черт класса`);
    for (const re of rules.passivePrereq || []) { try { new RegExp(re, 'i'); } catch (e) { err(`${R} passivePrereq`, e.message); } }

    const I = `data/${cls}/manual/images.json`;
    for (const id of Object.keys(images.nodes)) idRef(`${I} nodes`, id);
    for (const name of Object.keys(images.feats)) nameRef(`${I} feats`, name);
    for (const file of new Set([...Object.values(images.nodes), ...Object.values(images.feats)])) {
        if (!(await exists(path.join(ROOT, 'images', file)))) err(I, `нет файла images/${file}`);
    }

    const L = `data/${cls}/manual/labels.json`;
    const langIds = labels.langs.map((l) => l.id);
    for (const lang of Object.keys(labels.texts)) {
        if (!langIds.includes(lang)) err(`${L} texts`, `перевода «${lang}» нет в langs`);
        for (const id of Object.keys(labels.texts[lang])) idRef(`${L} texts.${lang}`, id);
    }
    // базовый перевод должен подписать корень, группы и темы (на сайтах их нет)
    const base = labels.texts[langIds[0]] || {};
    for (const id of ['root', ...rules.themes, ...rules.cardGroups.map((g) => g.id)]) {
        if (!base[id]?.name) err(`${L} texts.${langIds[0]}`, `нет названия узла «${id}»`);
    }

    // переводы, набранные вручную (всё в manual, кроме rules/images/labels)
    for (const [f, tr] of Object.entries(manual)) {
        if (['rules', 'images', 'labels'].includes(f)) continue;
        const where = `data/${cls}/manual/${f}.json`;
        for (const name of Object.keys(tr.feats || {})) nameRef(`${where} feats`, name);
        for (const name of [...Object.keys(tr.schools || {}), ...Object.keys(tr.theses || {})]) {
            if (!optionNames.has(name)) err(where, `школы или диссертации «${name}» нет в data/${cls}/source`);
        }
    }

    // сборка: совпадает с manual и у каждого узла есть тексты
    const B = `data/${cls}/build`;
    if (graph.meta.classId !== cls) err(`${B}/graph.js`, `classId «${graph.meta.classId}», а папка «${cls}»`);
    const builtLangs = (graph.meta.langs || []).map((l) => l.id).join(',');
    if (builtLangs !== langIds.join(',')) err(B, `переводы в сборке (${builtLangs}) не те, что в labels.json (${langIds.join(',')}) — пересоберите`);
    for (const lang of langIds) {
        const t = texts[lang];
        if (!t) { err(B, `нет text-${lang}.js — пересоберите`); continue; }
        const noName = graph.nodes.filter((n) => !t[n.id]?.name).map((n) => n.id);
        if (noName.length) err(`${B}/text-${lang}.js`, `узлы без названия: ${noName.slice(0, 5).join(', ')}${noName.length > 5 ? '…' : ''}`);
        const extra = Object.keys(t).filter((id) => !ids.has(id));
        if (extra.length) err(`${B}/text-${lang}.js`, `тексты узлов, которых нет в графе: ${extra.slice(0, 5).join(', ')}`);
    }
    for (const e of graph.edges) for (const id of [e.from, e.to]) if (id && !ids.has(id)) err(`${B}/graph.js`, `связь ведёт к несуществующему узлу «${id}»`);
    for (const w of graph.warnings || []) warn(`${B}/graph.js`, w);
    console.log(`${cls}: узлов ${graph.nodes.length}, черт в source ${featNames.size}, переводы: ${langIds.join(', ')}`);
}

const all = (await fs.readdir(path.join(ROOT, 'data'), { withFileTypes: true }))
    .filter((d) => d.isDirectory() && !['schema', 'cache'].includes(d.name)).map((d) => d.name);
const only = process.argv.slice(2);
for (const cls of only.length ? only : all) await checkClass(cls);
for (const w of warns) console.warn('  ? ' + w);
for (const e of errors) console.error('  ✗ ' + e);
console.log(errors.length ? `ошибок: ${errors.length}` : '✓ данные в порядке');
process.exit(errors.length ? 1 : 0);
