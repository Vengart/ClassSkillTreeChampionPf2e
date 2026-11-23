// ============================================================
// Переводы текстов волшебника → data/wizard-i18n.js (window.CLASS_I18N).
//
//   node tools/build-wizard-i18n.mjs
//
// Граф один на все переводы (data/wizard-data.js, Archives of Nethys): меняется только текст узлов —
// названия, описания, критерии, поля, дескрипторы. Источники:
//   • data/wizard-pf2ru.json   — pf2.ru (tools/fetch-wizard-pf2ru.mjs);
//   • data/wizard-doc-raw.json — перевод Дока и Юры (pf2e.ru), расшифрованный со скриншотов Foundry VTT
//                                (images/foundryDocTranslation, в git не входят).
// Чего нет в переводе, берётся из соседнего русского перевода, иначе — оригинал AoN, с пометкой.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
const readJson = async (f) => JSON.parse(await fs.readFile(path.join(DATA, f), 'utf8'));
const readJs = async (f) => {
    const s = await fs.readFile(path.join(DATA, f), 'utf8');
    return JSON.parse(s.slice(s.indexOf('{'), s.lastIndexOf('}') + 1));
};

const graph = await readJs('wizard-data.js');
const ru = await readJson('wizard-pf2ru.json');
const doc = await readJson('wizard-doc-raw.json');

/** Подписи узлов, которые придумал сайт (темы, группы, корень), — в каждом переводе своими терминами. */
const OWN = {
    pf2ru: {
        root: { name: 'Волшебник' },
        'group-school': { name: 'Школа магии', hint: 'Выберите одну школу. Школа единой магической теории даёт дополнительную черту волшебника 1 уровня.' },
        'group-thesis': { name: 'Магическая диссертация', hint: 'Выберите одну диссертацию.' },
        'theme-metamagic': { name: 'Метамагия' },
        'theme-battle': { name: 'Контрзаклинания и защита' },
        'theme-book': { name: 'Книга и ячейки' },
        'theme-bond': { name: 'Мистическая связь и школа' },
        'theme-mind': { name: 'Иллюзии и влияние' },
        'theme-necro': { name: 'Нежить' },
        'theme-familiar': { name: 'Фамильяр' },
    },
    doc: {
        root: { name: 'Волшебник' },
        'group-school': { name: 'Арканная школа', hint: 'Выберите одну школу. Учение единой магической теории даёт дополнительную способность волшебника 1 уровня.' },
        'group-thesis': { name: 'Диссертация', hint: 'Выберите одну диссертацию.' },
        'theme-metamagic': { name: 'Формы заклинаний' },
        'theme-battle': { name: 'Контрзаклинания и защита' },
        'theme-book': { name: 'Книга и слоты' },
        'theme-bond': { name: 'Арканная связь и школа' },
        'theme-mind': { name: 'Иллюзии и влияние' },
        'theme-necro': { name: 'Нежить' },
        'theme-familiar': { name: 'Фамильяр' },
    },
};

const NOTE = {
    noRu: 'На pf2.ru этой черты нет — показан перевод Дока и Юры.',
    noRuText: 'На pf2.ru этой черты нет — показан оригинал Archives of Nethys.',
    noDoc: 'Этой способности нет на скриншотах перевода Дока и Юры — показан перевод pf2.ru.',
    noDocText: 'Этой способности нет в переводе Дока и Юры — показан оригинал Archives of Nethys.',
    docNameOnly: 'В переводе Дока и Юры есть только название — описание из pf2.ru.',
    docNameOnlyAon: 'В переводе Дока и Юры есть только название — описание из оригинала Archives of Nethys.',
    partial: 'Текст на скриншоте Foundry обрезан — полностью он есть в модуле перевода Foundry.',
    ownEn: 'Описание есть только в оригинале Archives of Nethys.',
};
const fromDoc = (d) => ({
    name: d.name,
    html: d.html,
    prereqText: d.prereq || '',
    prereqHtml: '',
    fields: d.fields || {},
    ...(d.partial ? { note: NOTE.partial } : {}),
});
const fromRu = (r) => ({
    name: r.name, html: r.html, prereqText: r.prereqText, prereqHtml: r.prereqHtml,
    fields: r.fields, traits: (r.traits || []).filter((t) => t.slug !== 'wizard'), url: r.url, source: r.source,
});

const out = { pf2ru: {}, doc: {} };
const stats = { pf2ru: { own: 0, fallback: 0 }, doc: { own: 0, fallback: 0 } };

for (const n of graph.nodes) {
    if (n.kind === 'feat') {
        const r = ru.feats[n.nameEn], d = doc.feats[n.nameEn];
        // pf2.ru
        if (r) { out.pf2ru[n.id] = fromRu(r); stats.pf2ru.own++; }
        else if (d) { out.pf2ru[n.id] = { ...fromDoc(d), note: NOTE.noRu }; stats.pf2ru.fallback++; }
        else { out.pf2ru[n.id] = { note: NOTE.noRuText }; stats.pf2ru.fallback++; }
        // Док и Юра (дескрипторы в Foundry английские — берём русские из pf2.ru, если есть)
        if (d) { out.doc[n.id] = { ...fromDoc(d), ...(r ? { traits: fromRu(r).traits } : {}) }; stats.doc.own++; }
        else if (r) { out.doc[n.id] = { ...fromRu(r), note: NOTE.noDoc }; stats.doc.fallback++; }
        else { out.doc[n.id] = { note: NOTE.noDocText }; stats.doc.fallback++; }
    } else if (n.kind === 'option') {
        const list = n.group === 'group-school' ? 'schools' : 'theses';
        const r = ru[list][n.name];
        const dName = doc[list]?.[n.name];
        if (r) out.pf2ru[n.id] = { name: r.name, short: r.name.replace(/^Школа\s+(магии\s+)?/, '').replace(/^./, (c) => c.toUpperCase()), html: r.html, url: r.url };
        else out.pf2ru[n.id] = { note: NOTE.ownEn };
        if (dName) {
            out.doc[n.id] = {
                name: dName,
                short: dName.replace(/^Школа\s+/, '').replace(/^./, (c) => c.toUpperCase()),
                ...(r ? { html: r.html, note: NOTE.docNameOnly } : { note: NOTE.docNameOnlyAon }),
            };
        } else if (r) out.doc[n.id] = { name: r.name, html: r.html, note: NOTE.noDoc.replace('способности', 'школы') };
        else out.doc[n.id] = { note: NOTE.ownEn };
    } else {
        for (const lang of ['pf2ru', 'doc']) {
            const own = OWN[lang][n.id];
            if (own) out[lang][n.id] = { ...own, ...(n.kind === 'group' || n.kind === 'root' ? { note: NOTE.ownEn } : {}) };
        }
    }
}

const I18N = {
    langs: [
        { id: 'aon', label: 'AoN', title: 'Archives of Nethys — оригинал на английском',
            source: 'Archives of Nethys', terms: { feat: 'черта', feats: 'черты', Feat: 'Черта', Feats: 'Черты', prereq: 'Требования' } },
        { id: 'pf2ru', label: 'pf2.ru', title: 'Перевод сайта pf2.ru',
            source: 'pf2.ru', url: ru.source, terms: { feat: 'черта', feats: 'черты', Feat: 'Черта', Feats: 'Черты', prereq: 'Критерии' } },
        { id: 'doc', label: 'Док и Юра', title: 'Перевод Дока и Юры (pf2e.ru) — как в модуле перевода Foundry VTT',
            source: 'перевод Дока и Юры (Foundry)', terms: { feat: 'способность', feats: 'способности', Feat: 'Способность', Feats: 'Способности', prereq: 'Предварительные условия' } },
    ],
    nodes: out,
};

await fs.writeFile(path.join(DATA, 'wizard-i18n.js'),
    '// Сгенерировано tools/build-wizard-i18n.mjs — не редактировать вручную.\n' +
    `window.CLASS_I18N = ${JSON.stringify(I18N)};\n`, 'utf8');
console.log(`✓ data/wizard-i18n.js — pf2.ru: своих ${stats.pf2ru.own}, из другого перевода ${stats.pf2ru.fallback}; ` +
    `Док и Юра: своих ${stats.doc.own}, из другого перевода ${stats.doc.fallback}`);
