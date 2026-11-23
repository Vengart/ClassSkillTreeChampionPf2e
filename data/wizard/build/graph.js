// Сгенерировано tools/build-wizard.mjs — не редактируйте вручную (правьте data/wizard/manual или source и пересоберите).
window.CLASS_DATA = {
 "meta": {
  "classId": "wizard",
  "className": "Wizard",
  "classGen": "волшебника",
  "source": "https://2e.aonprd.com/Classes.aspx?ID=39",
  "sourceName": "Archives of Nethys",
  "fetchedAt": "2026-11-22T17:43:14.590Z",
  "featLevels": [
   2,
   4,
   6,
   8,
   10,
   12,
   14,
   16,
   18,
   20
  ],
  "maxLevel": 20,
  "note": "English · Archives of Nethys",
  "bonusSlots": [
   {
    "id": "school-unified-magical-theory",
    "level": 1
   }
  ],
  "cardGroups": [
   {
    "id": "group-school",
    "compact": true,
    "noImages": true
   },
   {
    "id": "group-thesis",
    "compact": true,
    "noImages": true
   }
  ],
  "filters": [
   "uncommon"
  ],
  "legend": [
   "card"
  ],
  "updateCmd": "node tools/fetch-wizard-aon.mjs",
  "geometry": {
   "SIZE": {
    "root": 0,
    "hub": 32,
    "feat": 36,
    "group": 36,
    "option": 36
   },
   "CAPTION": {
    "feat": {
     "fs": 13,
     "maxW": 116,
     "lines": 2
    },
    "option": {
     "fs": 13,
     "maxW": 116,
     "lines": 2
    }
   },
   "CAPTION_GAP": 6,
   "CHAR_W": 0.58,
   "STEP": 140,
   "ROW": 104,
   "RAIL": 29,
   "FIRST": 110,
   "COL_GAP": 36,
   "AXIS_W": 64
  },
  "layout": {
   "overlaps": 0,
   "captions": 0,
   "crossings": 0
  },
  "bounds": {
   "minX": 0,
   "maxX": 2672,
   "minY": -40,
   "maxY": 1234
  },
  "grid": {
   "rows": [
    {
     "level": 1,
     "y": 110
    },
    {
     "level": 2,
     "y": 214
    },
    {
     "level": 4,
     "y": 318
    },
    {
     "level": 6,
     "y": 422
    },
    {
     "level": 8,
     "y": 526
    },
    {
     "level": 10,
     "y": 630
    },
    {
     "level": 12,
     "y": 734
    },
    {
     "level": 14,
     "y": 838
    },
    {
     "level": 16,
     "y": 942
    },
    {
     "level": 18,
     "y": 1046
    },
    {
     "level": 20,
     "y": 1150
    }
   ],
   "columns": [
    {
     "id": "theme-metamagic",
     "x": 64,
     "w": 280
    },
    {
     "id": "theme-battle",
     "x": 380,
     "w": 560
    },
    {
     "id": "theme-book",
     "x": 976,
     "w": 560
    },
    {
     "id": "theme-bond",
     "x": 1572,
     "w": 420
    },
    {
     "id": "theme-mind",
     "x": 2028,
     "w": 280
    },
    {
     "id": "theme-necro",
     "x": 2344,
     "w": 140
    },
    {
     "id": "theme-familiar",
     "x": 2520,
     "w": 140
    }
   ],
   "rowH": 104
  },
  "defaultLang": "aon",
  "langs": [
   {
    "id": "aon",
    "label": "AoN",
    "title": "Archives of Nethys — оригинал на английском",
    "source": "Archives of Nethys",
    "terms": {
     "feat": "черта",
     "feats": "черты",
     "Feat": "Черта",
     "Feats": "Черты",
     "prereq": "Требования"
    }
   },
   {
    "id": "pf2ru",
    "label": "pf2.ru",
    "title": "Перевод сайта pf2.ru",
    "source": "pf2.ru",
    "terms": {
     "feat": "черта",
     "feats": "черты",
     "Feat": "Черта",
     "Feats": "Черты",
     "prereq": "Критерии"
    }
   },
   {
    "id": "doc",
    "label": "Док и Юра",
    "title": "Перевод Дока и Юры (pf2e.ru) — как в модуле перевода Foundry VTT",
    "source": "перевод Дока и Юры (Foundry)",
    "terms": {
     "feat": "способность",
     "feats": "способности",
     "Feat": "Способность",
     "Feats": "Способности",
     "prereq": "Предварительные условия"
    }
   }
  ]
 },
 "nodes": [
  {
   "image": "wizard/Class_Wizard_Badge_Icon.png",
   "id": "root",
   "kind": "root",
   "nameEn": "Wizard",
   "level": 0
  },
  {
   "image": null,
   "id": "group-school",
   "kind": "group",
   "level": 0
  },
  {
   "image": null,
   "id": "school-red-mantis-magic-school",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-ars-grammatica",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-battle-magic",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-breathtaking-influence",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-civic-wizardry",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-corentyn-armada",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-gates",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-kalistrade",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-keen-inquiry",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-magical-technologies",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-mentalism",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-nexian-spaces",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-protean-form",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-quantic-control",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-rooted-wisdom",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-shadow-veils",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-thassilonian-rune-magic",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-boundary",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-reclamation",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "school-unified-magical-theory",
   "kind": "option",
   "group": "group-school",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "group-thesis",
   "kind": "group",
   "level": 0
  },
  {
   "image": null,
   "id": "thesis-experimental-spellshaping",
   "kind": "option",
   "group": "group-thesis",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-improved-familiar-attunement",
   "kind": "option",
   "group": "group-thesis",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-spell-blending",
   "kind": "option",
   "group": "group-thesis",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-spell-substitution",
   "kind": "option",
   "group": "group-thesis",
   "level": 1,
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-staff-nexus",
   "kind": "option",
   "group": "group-thesis",
   "level": 1,
   "requires": []
  },
  {
   "image": "wizard/Sculpt_Spells_Icon.webp",
   "id": "theme-metamagic",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 64,
   "y": 0,
   "plateW": 268
  },
  {
   "image": "wizard/Class_Wizard_Abjuration_Badge_Icon.png",
   "id": "theme-battle",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 380,
   "y": 0,
   "plateW": 548
  },
  {
   "image": "wizard/Oghma_Icon.webp",
   "id": "theme-book",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 976,
   "y": 0,
   "plateW": 548
  },
  {
   "image": "wizard/Transmuters_Stone_passive_feature_Icon.webp",
   "id": "theme-bond",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1572,
   "y": 0,
   "plateW": 408
  },
  {
   "image": "wizard/Class_Wizard_Illusion_Badge_Icon.png",
   "id": "theme-mind",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2028,
   "y": 0,
   "plateW": 268
  },
  {
   "image": "wizard/Class_Wizard_Necromancy_Badge_Icon.png",
   "id": "theme-necro",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2344,
   "y": 0,
   "plateW": 128
  },
  {
   "image": "wizard/Find_Familiar_Cat_Icon.webp",
   "id": "theme-familiar",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2520,
   "y": 0,
   "plateW": 128
  },
  {
   "image": "wizard/Counterspell_Icon.webp",
   "id": "feat-4994",
   "kind": "feat",
   "nameEn": "Counterspell",
   "level": 1,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 870,
   "y": 110,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Benign_Transposition_Teleport_Icon.webp",
   "id": "feat-5024",
   "kind": "feat",
   "nameEn": "Familiar",
   "level": 1,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "grantedBy": "thesis-improved-familiar-attunement",
   "parentId": "theme-familiar",
   "theme": "theme-familiar",
   "x": 2590,
   "y": 110,
   "captionSide": "below",
   "captionW": 61
  },
  {
   "image": "wizard/Witch_Bolt_Icon.webp",
   "id": "feat-4577",
   "kind": "feat",
   "nameEn": "Reach Spell",
   "level": 1,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 110,
   "captionSide": "below",
   "captionW": 83
  },
  {
   "image": "wizard/Oghma_Icon.webp",
   "id": "feat-5025",
   "kind": "feat",
   "nameEn": "Spellbook Prodigy",
   "level": 1,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Thunderwave_Icon.webp",
   "id": "feat-4715",
   "kind": "feat",
   "nameEn": "Widen Spell",
   "level": 1,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 110,
   "captionSide": "below",
   "captionW": 83
  },
  {
   "image": "wizard/Potent_Cantrip_Icon.webp",
   "id": "feat-4580",
   "kind": "feat",
   "nameEn": "Cantrip Expansion",
   "level": 2,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Invisibility_spell_Icon.webp",
   "id": "feat-4997",
   "kind": "feat",
   "nameEn": "Conceal Spell",
   "level": 2,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 214,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Fire_Shield_Icon.webp",
   "id": "feat-9388",
   "kind": "feat",
   "nameEn": "Elemental Defense",
   "level": 2,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Protection_from_Energy_Icon.webp",
   "id": "feat-5026",
   "kind": "feat",
   "nameEn": "Energy Ablation",
   "level": 2,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 590,
   "y": 214,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Conjure_Minor_Elemental_Azer_Icon.webp",
   "id": "feat-4717",
   "kind": "feat",
   "nameEn": "Enhanced Familiar",
   "level": 2,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5024",
     "thesis-improved-familiar-attunement"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5024",
   "theme": "theme-familiar",
   "x": 2590,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Sleep_Icon.webp",
   "id": "feat-5027",
   "kind": "feat",
   "nameEn": "Nonlethal Spell",
   "level": 2,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 214,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Magic_Weapon_Icon.webp",
   "id": "feat-5028",
   "kind": "feat",
   "nameEn": "Bespell Strikes",
   "level": 4,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 318,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Mage_Hand_Icon.webp",
   "id": "feat-5029",
   "kind": "feat",
   "nameEn": "Call Wizardly Tools",
   "level": 4,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1642,
   "y": 318,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Disguise_Self_Icon.webp",
   "id": "feat-9389",
   "kind": "feat",
   "nameEn": "Incriminating Spell",
   "level": 4,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 318,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Seeming_Icon.webp",
   "id": "feat-3421",
   "kind": "feat",
   "nameEn": "Irezoko Tattoo",
   "level": 4,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1782,
   "y": 318,
   "captionSide": "below",
   "captionW": 106
  },
  {
   "image": "wizard/Empowered_Evocation_Icon.webp",
   "id": "feat-5030",
   "kind": "feat",
   "nameEn": "Linked Focus",
   "level": 4,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "group-school"
    ]
   ],
   "forbids": [
    "school-unified-magical-theory"
   ],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1922,
   "y": 318,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Arcane_Ward_Icon.webp",
   "id": "feat-5031",
   "kind": "feat",
   "nameEn": "Spell Protection Array",
   "level": 4,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 590,
   "y": 318,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Inured_to_Undeath_Icon.webp",
   "id": "feat-3483",
   "kind": "feat",
   "nameEn": "Undying Conviction",
   "level": 4,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 2414,
   "y": 318,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Improved_Minor_Illusion_Icon.webp",
   "id": "feat-5032",
   "kind": "feat",
   "nameEn": "Convincing Illusion",
   "level": 6,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": 2098,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Fireball_Icon.webp",
   "id": "feat-3632",
   "kind": "feat",
   "nameEn": "Detonating Spell",
   "level": 6,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Conjure_Elemental_Icon.webp",
   "id": "feat-5033",
   "kind": "feat",
   "nameEn": "Explosive Arrival",
   "level": 6,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Ottos_Irresistible_Dance_Icon.webp",
   "id": "feat-5034",
   "kind": "feat",
   "nameEn": "Irresistible Magic",
   "level": 6,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Enlarge_Reduce_Icon.webp",
   "id": "feat-9393",
   "kind": "feat",
   "nameEn": "Shrink Spell",
   "level": 6,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 870,
   "y": 422,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Mirror_Image_Icon.webp",
   "id": "feat-5035",
   "kind": "feat",
   "nameEn": "Split Slot",
   "level": 6,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 422,
   "captionSide": "below",
   "captionW": 76
  },
  {
   "image": "wizard/Stoneskin_Icon.webp",
   "id": "feat-4602",
   "kind": "feat",
   "nameEn": "Steady Spellcasting",
   "level": 6,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 590,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Expert_Divination_Icon.webp",
   "id": "feat-5036",
   "kind": "feat",
   "nameEn": "Advanced School Spell",
   "level": 8,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1642,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Arcane_Recovery_Icon.webp",
   "id": "feat-5037",
   "kind": "feat",
   "nameEn": "Bond Conservation",
   "level": 8,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1782,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Confusion_Icon.webp",
   "id": "feat-4386",
   "kind": "feat",
   "nameEn": "Chaotic Spell",
   "level": 8,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 526,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Polymorph_Icon.webp",
   "id": "feat-5038",
   "kind": "feat",
   "nameEn": "Form Retention",
   "level": 8,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 526,
   "captionSide": "below",
   "captionW": 106
  },
  {
   "image": "wizard/Bladesong_Icon.webp",
   "id": "feat-4130",
   "kind": "feat",
   "nameEn": "Helt's Spelldance",
   "level": 8,
   "actions": "3",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": 2098,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Gust_of_Wind_Icon.webp",
   "id": "feat-9390",
   "kind": "feat",
   "nameEn": "Knockback Spell",
   "level": 8,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 526,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Portent_Icon.webp",
   "id": "feat-5039",
   "kind": "feat",
   "nameEn": "Knowledge is Power (Wizard)",
   "level": 8,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1186,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Charm_Person_Icon.webp",
   "id": "feat-9395",
   "kind": "feat",
   "nameEn": "Spellbinding Speech",
   "level": 8,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": 2238,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Lightning_Bolt_Icon.webp",
   "id": "feat-4743",
   "kind": "feat",
   "nameEn": "Overwhelming Energy",
   "level": 10,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 630,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Haste_Icon.webp",
   "id": "feat-4614",
   "kind": "feat",
   "nameEn": "Quickened Casting",
   "level": 10,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 630,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Glyph_of_Warding_Icon.webp",
   "id": "feat-5040",
   "kind": "feat",
   "nameEn": "Scroll Adept",
   "level": 10,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 630,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Focused_Conjuration_Icon.webp",
   "id": "feat-9392",
   "kind": "feat",
   "nameEn": "Shared Focus",
   "level": 10,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1642,
   "y": 630,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Third_Eye_See_Invisibility_Icon.webp",
   "id": "feat-9394",
   "kind": "feat",
   "nameEn": "Spatial Awareness",
   "level": 10,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 630,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Remove_Curse_Icon.webp",
   "id": "feat-5041",
   "kind": "feat",
   "nameEn": "Clever Counterspell",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 870,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Scorching_Ray_Icon.webp",
   "id": "feat-5042",
   "kind": "feat",
   "nameEn": "Forcible Energy",
   "level": 12,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 734,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/See_Invisibility_Icon.webp",
   "id": "feat-5043",
   "kind": "feat",
   "nameEn": "Keen Magical Detection",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Third_Eye_Darkvision_Icon.webp",
   "id": "feat-5044",
   "kind": "feat",
   "nameEn": "Magic Sense",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 590,
   "y": 734,
   "captionSide": "below",
   "captionW": 83
  },
  {
   "image": "wizard/Create_Undead_Icon.webp",
   "id": "feat-3484",
   "kind": "feat",
   "nameEn": "Necromancer's Visage",
   "level": 12,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 2414,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Misty_Step_Icon.webp",
   "id": "feat-9391",
   "kind": "feat",
   "nameEn": "Redirect Teleportation",
   "level": 12,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 730,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Transmuters_Stone_Constitution_Icon.webp",
   "id": "feat-5045",
   "kind": "feat",
   "nameEn": "Bonded Focus",
   "level": 14,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1642,
   "y": 838,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Colour_Spray_Icon.webp",
   "id": "feat-9387",
   "kind": "feat",
   "nameEn": "Dizzying Spell",
   "level": 14,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 838,
   "captionSide": "below",
   "captionW": 106
  },
  {
   "image": "wizard/Projected_Ward_Icon.webp",
   "id": "feat-5016",
   "kind": "feat",
   "nameEn": "Reflect Spell",
   "level": 14,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 870,
   "y": 838,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Ice_Storm_Icon.webp",
   "id": "feat-5046",
   "kind": "feat",
   "nameEn": "Secondary Detonation Array",
   "level": 14,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 838,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Animate_Dead_Icon.webp",
   "id": "feat-3485",
   "kind": "feat",
   "nameEn": "Sepulchral Sublimation",
   "level": 14,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 2414,
   "y": 838,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Blink_Icon.webp",
   "id": "feat-2731",
   "kind": "feat",
   "nameEn": "Shift Spell",
   "level": 14,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": 450,
   "y": 838,
   "captionSide": "below",
   "captionW": 83
  },
  {
   "image": "wizard/Arcane_Lock_Icon.webp",
   "id": "feat-5047",
   "kind": "feat",
   "nameEn": "Superior Bond",
   "level": 14,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": 1782,
   "y": 838,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Flaming_Sphere_Icon.webp",
   "id": "feat-4629",
   "kind": "feat",
   "nameEn": "Effortless Concentration",
   "level": 16,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 942,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Sunbeam_Icon.webp",
   "id": "feat-5048",
   "kind": "feat",
   "nameEn": "Scintillating Spell",
   "level": 16,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 942,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Experimental_Alchemy_Icon.webp",
   "id": "feat-5049",
   "kind": "feat",
   "nameEn": "Spell Tinker",
   "level": 16,
   "actions": "2",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1186,
   "y": 942,
   "captionSide": "below",
   "captionW": 91
  },
  {
   "image": "wizard/Arcane_Gate_Icon.webp",
   "id": "feat-5050",
   "kind": "feat",
   "nameEn": "Infinite Possibilities",
   "level": 18,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Split_Enchantment_Icon.webp",
   "id": "feat-5051",
   "kind": "feat",
   "nameEn": "Reprepare Spell",
   "level": 18,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1466,
   "y": 1046,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Detect_Thoughts_Icon.webp",
   "id": "feat-5052",
   "kind": "feat",
   "nameEn": "Second Thoughts",
   "level": 18,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": 2098,
   "y": 1046,
   "captionSide": "below",
   "captionW": 114
  },
  {
   "image": "wizard/Mystra_Icon.webp",
   "id": "feat-5053",
   "kind": "feat",
   "nameEn": "Archwizard's Might",
   "level": 20,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1046,
   "y": 1150,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Telekinesis_Icon.webp",
   "id": "feat-1246",
   "kind": "feat",
   "nameEn": "Reclaim Spell",
   "level": 20,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [
    [
     "feat-5051"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5051",
   "theme": "theme-book",
   "x": 1466,
   "y": 1150,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Chromatic_Orb_Icon.webp",
   "id": "feat-5054",
   "kind": "feat",
   "nameEn": "Spell Combination",
   "level": 20,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1186,
   "y": 1150,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Magic_Missile_Icon.webp",
   "id": "feat-5055",
   "kind": "feat",
   "nameEn": "Spell Mastery",
   "level": 20,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 1326,
   "y": 1150,
   "captionSide": "below",
   "captionW": 99
  },
  {
   "image": "wizard/Chain_Lightning_Icon.webp",
   "id": "feat-5056",
   "kind": "feat",
   "nameEn": "Spellshape Mastery",
   "level": 20,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 134,
   "y": 1150,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Otilukes_Resilient_Sphere_Icon.webp",
   "id": "feat-2759",
   "kind": "feat",
   "nameEn": "Worldsphere Gravity",
   "level": 20,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": 274,
   "y": 1150,
   "captionSide": "below",
   "captionW": 116
  }
 ],
 "edges": [
  {
   "from": "theme-battle",
   "to": "feat-4994",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     81
    ],
    [
     800,
     81
    ],
    [
     800,
     110
    ],
    [
     870,
     110
    ]
   ]
  },
  {
   "from": "theme-familiar",
   "to": "feat-5024",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2520,
     0
    ],
    [
     2520,
     110
    ],
    [
     2590,
     110
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4577",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     110
    ],
    [
     134,
     110
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5025",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     110
    ],
    [
     1046,
     110
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4715",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     204,
     81
    ],
    [
     204,
     110
    ],
    [
     274,
     110
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-4580",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     214
    ],
    [
     1046,
     214
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4997",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     214
    ],
    [
     134,
     214
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-9388",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     214
    ],
    [
     450,
     214
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5026",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     185
    ],
    [
     520,
     185
    ],
    [
     520,
     214
    ],
    [
     590,
     214
    ]
   ]
  },
  {
   "from": "feat-5024",
   "to": "feat-4717",
   "kind": "or",
   "primary": true,
   "points": [
    [
     2590,
     110
    ],
    [
     2660,
     110
    ],
    [
     2660,
     214
    ],
    [
     2590,
     214
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5027",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     185
    ],
    [
     204,
     185
    ],
    [
     204,
     214
    ],
    [
     274,
     214
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5028",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     318
    ],
    [
     450,
     318
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5029",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     318
    ],
    [
     1642,
     318
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-9389",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     318
    ],
    [
     134,
     318
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-3421",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     289
    ],
    [
     1712,
     289
    ],
    [
     1712,
     318
    ],
    [
     1782,
     318
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5030",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     289
    ],
    [
     1852,
     289
    ],
    [
     1852,
     318
    ],
    [
     1922,
     318
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5031",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     289
    ],
    [
     520,
     289
    ],
    [
     520,
     318
    ],
    [
     590,
     318
    ]
   ]
  },
  {
   "from": "theme-necro",
   "to": "feat-3483",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2344,
     0
    ],
    [
     2344,
     318
    ],
    [
     2414,
     318
    ]
   ]
  },
  {
   "from": "theme-mind",
   "to": "feat-5032",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2028,
     0
    ],
    [
     2028,
     422
    ],
    [
     2098,
     422
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-3632",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     422
    ],
    [
     134,
     422
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5033",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     393
    ],
    [
     204,
     393
    ],
    [
     204,
     422
    ],
    [
     274,
     422
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5034",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     422
    ],
    [
     450,
     422
    ]
   ]
  },
  {
   "from": "feat-4994",
   "to": "feat-9393",
   "kind": "req",
   "primary": true,
   "points": [
    [
     870,
     110
    ],
    [
     940,
     110
    ],
    [
     940,
     422
    ],
    [
     870,
     422
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5035",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     422
    ],
    [
     1046,
     422
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-4602",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     393
    ],
    [
     520,
     393
    ],
    [
     520,
     422
    ],
    [
     590,
     422
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5036",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     526
    ],
    [
     1642,
     526
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5037",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     497
    ],
    [
     1712,
     497
    ],
    [
     1712,
     526
    ],
    [
     1782,
     526
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4386",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     526
    ],
    [
     134,
     526
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5038",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     526
    ],
    [
     1046,
     526
    ]
   ]
  },
  {
   "from": "theme-mind",
   "to": "feat-4130",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2028,
     0
    ],
    [
     2028,
     526
    ],
    [
     2098,
     526
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-9390",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     497
    ],
    [
     204,
     497
    ],
    [
     204,
     526
    ],
    [
     274,
     526
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5039",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     497
    ],
    [
     1116,
     497
    ],
    [
     1116,
     526
    ],
    [
     1186,
     526
    ]
   ]
  },
  {
   "from": "theme-mind",
   "to": "feat-9395",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2028,
     0
    ],
    [
     2028,
     497
    ],
    [
     2168,
     497
    ],
    [
     2168,
     526
    ],
    [
     2238,
     526
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4743",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     630
    ],
    [
     134,
     630
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-4614",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     601
    ],
    [
     204,
     601
    ],
    [
     204,
     630
    ],
    [
     274,
     630
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5040",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     630
    ],
    [
     1046,
     630
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-9392",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     630
    ],
    [
     1642,
     630
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-9394",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     630
    ],
    [
     450,
     630
    ]
   ]
  },
  {
   "from": "feat-4994",
   "to": "feat-5041",
   "kind": "req",
   "primary": true,
   "points": [
    [
     870,
     110
    ],
    [
     940,
     110
    ],
    [
     940,
     734
    ],
    [
     870,
     734
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5042",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     734
    ],
    [
     134,
     734
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5043",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     734
    ],
    [
     450,
     734
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-5044",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     705
    ],
    [
     520,
     705
    ],
    [
     520,
     734
    ],
    [
     590,
     734
    ]
   ]
  },
  {
   "from": "theme-necro",
   "to": "feat-3484",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2344,
     0
    ],
    [
     2344,
     734
    ],
    [
     2414,
     734
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-9391",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     705
    ],
    [
     660,
     705
    ],
    [
     660,
     734
    ],
    [
     730,
     734
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5045",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     838
    ],
    [
     1642,
     838
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-9387",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     838
    ],
    [
     134,
     838
    ]
   ]
  },
  {
   "from": "feat-4994",
   "to": "feat-5016",
   "kind": "req",
   "primary": true,
   "points": [
    [
     870,
     110
    ],
    [
     940,
     110
    ],
    [
     940,
     838
    ],
    [
     870,
     838
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5046",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     809
    ],
    [
     204,
     809
    ],
    [
     204,
     838
    ],
    [
     274,
     838
    ]
   ]
  },
  {
   "from": "theme-necro",
   "to": "feat-3485",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2344,
     0
    ],
    [
     2344,
     838
    ],
    [
     2414,
     838
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-2731",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     380,
     0
    ],
    [
     380,
     838
    ],
    [
     450,
     838
    ]
   ]
  },
  {
   "from": "theme-bond",
   "to": "feat-5047",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1572,
     0
    ],
    [
     1572,
     809
    ],
    [
     1712,
     809
    ],
    [
     1712,
     838
    ],
    [
     1782,
     838
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-4629",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     942
    ],
    [
     1046,
     942
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5048",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     942
    ],
    [
     134,
     942
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5049",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     913
    ],
    [
     1116,
     913
    ],
    [
     1116,
     942
    ],
    [
     1186,
     942
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5050",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     1046
    ],
    [
     1046,
     1046
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5051",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     1017
    ],
    [
     1396,
     1017
    ],
    [
     1396,
     1046
    ],
    [
     1466,
     1046
    ]
   ]
  },
  {
   "from": "theme-mind",
   "to": "feat-5052",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2028,
     0
    ],
    [
     2028,
     1046
    ],
    [
     2098,
     1046
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5053",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     1150
    ],
    [
     1046,
     1150
    ]
   ]
  },
  {
   "from": "feat-5051",
   "to": "feat-1246",
   "kind": "req",
   "primary": true,
   "points": [
    [
     1466,
     1046
    ],
    [
     1536,
     1046
    ],
    [
     1536,
     1150
    ],
    [
     1466,
     1150
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5054",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     1121
    ],
    [
     1116,
     1121
    ],
    [
     1116,
     1150
    ],
    [
     1186,
     1150
    ]
   ]
  },
  {
   "from": "theme-book",
   "to": "feat-5055",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     976,
     0
    ],
    [
     976,
     1121
    ],
    [
     1256,
     1121
    ],
    [
     1256,
     1150
    ],
    [
     1326,
     1150
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-5056",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     1150
    ],
    [
     134,
     1150
    ]
   ]
  },
  {
   "from": "theme-metamagic",
   "to": "feat-2759",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     64,
     0
    ],
    [
     64,
     1121
    ],
    [
     204,
     1121
    ],
    [
     204,
     1150
    ],
    [
     274,
     1150
    ]
   ]
  }
 ]
};
