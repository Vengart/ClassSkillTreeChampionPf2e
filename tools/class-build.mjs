// ============================================================
// Общие функции сборки классов: где лежат данные, чтение ручных файлов,
// запись собранного графа и текстов.
//
//   data/<класс>/source/   скачивается загрузчиками (руками не правится)
//   data/<класс>/manual/   правится руками: rules.json, images.json, labels.json, переводы
//   data/<класс>/build/    собирается, сайт читает только его:
//       graph.js           window.CLASS_DATA — узлы (id, вид, уровень, требования, тема, иконка,
//                          координаты), связи, настройки класса; без текстов
//       text-<язык>.js     window.CLASS_TEXT[<язык>] — тексты узлов: название, описание, критерии…
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const classDir = (cls, ...parts) => path.join(ROOT, 'data', cls, ...parts);

/** Поля узла, которые зависят от перевода. Всё остальное — структура графа. */
export const TEXT_FIELDS = ['name', 'short', 'html', 'prereqText', 'prereqHtml', 'fields', 'traits', 'url', 'source', 'hint', 'note'];

export async function readJson(file) {
    const data = JSON.parse(await fs.readFile(file, 'utf8'));
    delete data.$schema;
    return data;
}
export const readSource = (cls, name) => readJson(classDir(cls, 'source', `${name}.json`));
export const readManual = (cls, name) => readJson(classDir(cls, 'manual', `${name}.json`));

export async function writeSource(cls, name, data) {
    await fs.mkdir(classDir(cls, 'source'), { recursive: true });
    await fs.writeFile(classDir(cls, 'source', `${name}.json`), JSON.stringify(data, null, 1), 'utf8');
    console.log(`✓ data/${cls}/source/${name}.json`);
}

/** Текстовые поля узла (пустые значения пропускаются). */
export function textOf(n) {
    const t = {};
    for (const k of TEXT_FIELDS) if (n[k] !== undefined && n[k] !== null) t[k] = n[k];
    return t;
}

/**
 * Записать собранный класс.
 *   graph  — { meta, nodes, edges, warnings }; узлы с текстами базового перевода (meta.defaultLang)
 *   langs  — список переводов из manual/labels.json (первый — базовый, если не задан defaultLang)
 *   extra  — { <язык>: { <id узла>: поля } } для остальных переводов: поля перекрывают базовый текст,
 *            даже пустые («критериев нет» — значит нет)
 */
export async function writeBuild(cls, graph, langs, extra, by) {
    const base = graph.meta.defaultLang || langs[0].id;
    const texts = Object.fromEntries(langs.map((l) => [l.id, {}]));
    const structure = graph.nodes.map((n) => {
        const s = {};
        for (const [k, v] of Object.entries(n)) if (!TEXT_FIELDS.includes(k)) s[k] = v;
        for (const l of langs) {
            const t = textOf(n);
            const over = l.id === base ? null : extra[l.id]?.[n.id];
            if (over) for (const [k, v] of Object.entries(over)) if (v !== undefined) t[k] = v;
            for (const k of Object.keys(t)) if (t[k] === null) delete t[k];
            texts[l.id][n.id] = t;
        }
        return s;
    });
    const meta = { ...graph.meta, defaultLang: base, langs };
    const dir = classDir(cls, 'build');
    await fs.mkdir(dir, { recursive: true });
    const head = `// Сгенерировано ${by} — не редактируйте вручную (правьте data/${cls}/manual или source и пересоберите).\n`;
    await fs.writeFile(path.join(dir, 'graph.js'),
        head + `window.CLASS_DATA = ${JSON.stringify({ meta, nodes: structure, edges: graph.edges }, null, 1)};\n`, 'utf8');
    for (const l of langs) {
        await fs.writeFile(path.join(dir, `text-${l.id}.js`),
            head + `(window.CLASS_TEXT = window.CLASS_TEXT || {})[${JSON.stringify(l.id)}] = ${JSON.stringify(texts[l.id], null, 1)};\n`, 'utf8');
    }
    console.log(`✓ data/${cls}/build/ — graph.js (узлов ${structure.length}, связей ${graph.edges.length}), ` +
        `тексты: ${langs.map((l) => l.id).join(', ')}`);
    for (const w of graph.warnings || []) console.warn('  ! ' + w);
}

/** Запущен ли модуль как скрипт (node tools/xxx.mjs). */
export const isMain = (metaUrl) => process.argv[1] && fileURLToPath(metaUrl) === path.resolve(process.argv[1]);
