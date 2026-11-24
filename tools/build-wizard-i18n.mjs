// ============================================================
// Тексты переводов волшебника (вызывается из tools/build-wizard.mjs).
//
// Граф один на все переводы: меняется только текст узлов. Источники:
//   • data/wizard/source/pf2ru.json   — pf2.ru (tools/fetch-wizard-pf2ru.mjs);
//   • data/wizard/manual/doc-yura.json — перевод Дока и Юры (pf2e.ru), переписанный со скриншотов
//                                       Foundry VTT (images/foundryDocTranslation, в git не входят);
//   • data/wizard/manual/labels.json   — подписи тем, групп и корня (texts) и пометки (notes).
// Чего нет в переводе, остаётся оригиналом AoN на английском (с пометкой): сами не переводим
// и из соседнего перевода не берём — так видно, какой контент в переводе ещё не добавлен.
// Возвращает { pf2ru: {<id узла>: поля}, doc: {...} } — поля перекрывают оригинал AoN.
// ============================================================

import { readSource, readManual } from './class-build.mjs';

export async function wizardTranslations(graph, labels) {
    const ru = await readSource('wizard', 'pf2ru');
    const doc = await readManual('wizard', 'doc-yura');
    const OWN = labels.texts;
    const NOTE = labels.notes;

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
            else { out.pf2ru[n.id] = { note: NOTE.noRuText }; stats.pf2ru.fallback++; }
            // Док и Юра (дескрипторы в Foundry английские — остаются как в оригинале AoN)
            if (d) { out.doc[n.id] = fromDoc(d); stats.doc.own++; }
            else { out.doc[n.id] = { note: NOTE.noDocText }; stats.doc.fallback++; }
        } else if (n.kind === 'option') {
            const list = n.group === 'group-school' ? 'schools' : 'theses';
            const r = ru[list][n.name];
            const dName = doc[list]?.[n.name];
            if (r) out.pf2ru[n.id] = { name: r.name, short: r.name.replace(/^Школа\s+(магии\s+)?/, '').replace(/^./, (c) => c.toUpperCase()), html: r.html, url: r.url };
            else out.pf2ru[n.id] = { note: NOTE.noRuText.replace('этой черты', 'этого варианта') };
            if (dName) {
                // в переводе Дока и Юры есть только название — описание остаётся оригиналом AoN
                out.doc[n.id] = {
                    name: dName,
                    short: dName.replace(/^Школа\s+/, '').replace(/^./, (c) => c.toUpperCase()),
                    note: NOTE.docNameOnlyAon,
                };
            } else out.doc[n.id] = { note: NOTE.noDocText.replace('Этой способности', 'Этого варианта') };
        } else {
            for (const lang of ['pf2ru', 'doc']) {
                const own = OWN[lang][n.id];
                if (own) out[lang][n.id] = { ...own, ...(n.kind === 'group' || n.kind === 'root' ? { note: NOTE.ownEn } : {}) };
            }
        }
    }
    console.log(`  переводы — pf2.ru: своих ${stats.pf2ru.own}, оригиналом AoN ${stats.pf2ru.fallback}; ` +
        `Док и Юра: своих ${stats.doc.own}, оригиналом AoN ${stats.doc.fallback}`);
    return out;
}
