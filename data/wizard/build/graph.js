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
    "root": 120,
    "hub": 84,
    "feat": 62,
    "group": 78,
    "option": 64
   },
   "CAPTION": {
    "root": {
     "fs": 28,
     "maxW": 260,
     "lines": 1
    },
    "hub": {
     "fs": 19,
     "maxW": 170,
     "lines": 2
    },
    "feat": {
     "fs": 15,
     "maxW": 150,
     "lines": 2
    },
    "group": {
     "fs": 19,
     "maxW": 170,
     "lines": 2
    },
    "option": {
     "fs": 17,
     "maxW": 170,
     "lines": 2
    }
   },
   "CAPTION_GAP": 8,
   "CHAR_W": 0.7,
   "STEP": 200,
   "ROW": 130,
   "RAIL": 40,
   "HUB_Y": 300,
   "BUS_GAP": 110,
   "COL_GAP": 90
  },
  "layout": {
   "overlaps": 0,
   "captions": 0,
   "crossings": 0
  },
  "bounds": {
   "minX": -1260,
   "maxX": 1260,
   "minY": -1820,
   "maxY": 1580
  },
  "grid": {
   "halves": [
    {
     "v": -1,
     "after": -44,
     "start": -365,
     "minX": -1240,
     "maxX": 1240,
     "rows": [
      {
       "level": 1,
       "y": -430
      },
      {
       "level": 2,
       "y": -560
      },
      {
       "level": 4,
       "y": -690
      },
      {
       "level": 6,
       "y": -820
      },
      {
       "level": 8,
       "y": -950
      },
      {
       "level": 10,
       "y": -1080
      },
      {
       "level": 12,
       "y": -1210
      },
      {
       "level": 14,
       "y": -1340
      },
      {
       "level": 16,
       "y": -1470
      },
      {
       "level": 18,
       "y": -1600
      },
      {
       "level": 20,
       "y": -1730
      }
     ]
    },
    {
     "v": 1,
     "after": 86,
     "start": 365,
     "minX": -1010,
     "maxX": 1010,
     "rows": [
      {
       "level": 1,
       "y": 430
      },
      {
       "level": 2,
       "y": 560
      },
      {
       "level": 4,
       "y": 690
      },
      {
       "level": 6,
       "y": 820
      },
      {
       "level": 8,
       "y": 950
      },
      {
       "level": 10,
       "y": 1080
      },
      {
       "level": 12,
       "y": 1210
      },
      {
       "level": 14,
       "y": 1340
      },
      {
       "level": 18,
       "y": 1470
      }
     ]
    }
   ]
  },
  "defaultLang": "aon",
  "langs": [
   {
    "id": "aon",
    "label": "оригинал",
    "title": "Оригинал (Archives of Nethys)",
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
    "title": "Офф. перевод Hobby Games (pf2.ru)",
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
    "label": "pf2e.ru",
    "title": "Фан. перевод Юры и Дока (pf2e.ru)",
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
   "level": 0,
   "x": 0,
   "y": 0
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
   "x": -1040,
   "y": -300,
   "captionSide": "right",
   "captionW": 133
  },
  {
   "image": "wizard/Class_Wizard_Abjuration_Badge_Icon.png",
   "id": "theme-battle",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -600,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Oghma_Icon.webp",
   "id": "theme-book",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 440,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Transmuters_Stone_passive_feature_Icon.webp",
   "id": "theme-bond",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -810,
   "y": 300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Class_Wizard_Illusion_Badge_Icon.png",
   "id": "theme-mind",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -170,
   "y": 300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Class_Wizard_Necromancy_Badge_Icon.png",
   "id": "theme-necro",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 270,
   "y": 300,
   "captionSide": "right",
   "captionW": 94
  },
  {
   "image": "wizard/Find_Familiar_Cat_Icon.webp",
   "id": "theme-familiar",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 610,
   "y": 300,
   "captionSide": "right",
   "captionW": 107
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
   "x": -100,
   "y": -430,
   "captionSide": "below",
   "captionW": 126
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
   "x": 710,
   "y": 430,
   "captionSide": "below",
   "captionW": 84
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
   "x": -940,
   "y": -430,
   "captionSide": "below",
   "captionW": 116
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
   "x": 340,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -430,
   "captionSide": "below",
   "captionW": 116
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
   "x": 540,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -560,
   "captionSide": "below",
   "captionW": 137
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
   "x": -700,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
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
   "x": -500,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
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
   "x": 910,
   "y": 560,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
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
   "x": -700,
   "y": -690,
   "captionSide": "below",
   "captionW": 150
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
   "x": -710,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -690,
   "captionSide": "below",
   "captionW": 150
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
   "x": -910,
   "y": 690,
   "captionSide": "below",
   "captionW": 147
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
   "x": -510,
   "y": 690,
   "captionSide": "below",
   "captionW": 126
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
   "x": -500,
   "y": -690,
   "captionSide": "below",
   "captionW": 150
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
   "x": 370,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
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
   "x": -70,
   "y": 820,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
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
   "x": -700,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
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
   "x": 100,
   "y": -820,
   "captionSide": "below",
   "captionW": 126
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
   "x": 340,
   "y": -820,
   "captionSide": "below",
   "captionW": 105
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
   "x": -500,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
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
   "x": -910,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
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
   "x": -710,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -950,
   "captionSide": "below",
   "captionW": 137
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
   "x": 540,
   "y": -950,
   "captionSide": "below",
   "captionW": 147
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
   "x": -270,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
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
   "x": 340,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
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
   "x": -70,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
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
   "x": 540,
   "y": -1080,
   "captionSide": "below",
   "captionW": 126
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
   "x": -910,
   "y": 1080,
   "captionSide": "below",
   "captionW": 126
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
   "x": -700,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
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
   "x": 100,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
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
   "x": -1140,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
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
   "x": -500,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
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
   "x": -700,
   "y": -1210,
   "captionSide": "below",
   "captionW": 116
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
   "x": 170,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
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
   "x": -300,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
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
   "x": -710,
   "y": 1340,
   "captionSide": "below",
   "captionW": 126
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
   "x": -940,
   "y": -1340,
   "captionSide": "below",
   "captionW": 147
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
   "x": 100,
   "y": -1340,
   "captionSide": "below",
   "captionW": 137
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
   "x": -1140,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
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
   "x": 370,
   "y": 1340,
   "captionSide": "below",
   "captionW": 150
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
   "x": -700,
   "y": -1340,
   "captionSide": "below",
   "captionW": 116
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
   "x": -910,
   "y": 1340,
   "captionSide": "below",
   "captionW": 137
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
   "x": 340,
   "y": -1470,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -1470,
   "captionSide": "below",
   "captionW": 150
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
   "x": 540,
   "y": -1470,
   "captionSide": "below",
   "captionW": 126
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
   "x": 340,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
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
   "x": 940,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
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
   "x": -270,
   "y": 1470,
   "captionSide": "below",
   "captionW": 150
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
   "x": 540,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
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
   "x": 1140,
   "y": -1730,
   "captionSide": "below",
   "captionW": 137
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
   "x": 340,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
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
   "x": 740,
   "y": -1730,
   "captionSide": "below",
   "captionW": 137
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
   "x": -1140,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
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
   "x": -940,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  }
 ],
 "edges": [
  {
   "from": "root",
   "to": "theme-metamagic",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     -190
    ],
    [
     -1040,
     -190
    ],
    [
     -1040,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-battle",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     -190
    ],
    [
     -600,
     -190
    ],
    [
     -600,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-book",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     -190
    ],
    [
     440,
     -190
    ],
    [
     440,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-bond",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     190
    ],
    [
     -810,
     190
    ],
    [
     -810,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-mind",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     190
    ],
    [
     -170,
     190
    ],
    [
     -170,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-necro",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     190
    ],
    [
     270,
     190
    ],
    [
     270,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-familiar",
   "kind": "struct",
   "primary": true,
   "points": [
    [
     0,
     0
    ],
    [
     0,
     190
    ],
    [
     610,
     190
    ],
    [
     610,
     300
    ]
   ]
  },
  {
   "from": "theme-battle",
   "to": "feat-4994",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -600,
     -300
    ],
    [
     -600,
     -470
    ],
    [
     -200,
     -470
    ],
    [
     -200,
     -430
    ],
    [
     -100,
     -430
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
     610,
     300
    ],
    [
     610,
     430
    ],
    [
     710,
     430
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
     -1040,
     -300
    ],
    [
     -1040,
     -430
    ],
    [
     -940,
     -430
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
     440,
     -300
    ],
    [
     440,
     -430
    ],
    [
     340,
     -430
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
     -1040,
     -300
    ],
    [
     -1040,
     -430
    ],
    [
     -1140,
     -430
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
     440,
     -300
    ],
    [
     440,
     -560
    ],
    [
     540,
     -560
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
     -1040,
     -300
    ],
    [
     -1040,
     -560
    ],
    [
     -940,
     -560
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
     -600,
     -300
    ],
    [
     -600,
     -560
    ],
    [
     -700,
     -560
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
     -600,
     -300
    ],
    [
     -600,
     -560
    ],
    [
     -500,
     -560
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
     710,
     430
    ],
    [
     810,
     430
    ],
    [
     810,
     560
    ],
    [
     910,
     560
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
     -1040,
     -300
    ],
    [
     -1040,
     -560
    ],
    [
     -1140,
     -560
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
     -600,
     -300
    ],
    [
     -600,
     -690
    ],
    [
     -700,
     -690
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
     -810,
     300
    ],
    [
     -810,
     690
    ],
    [
     -710,
     690
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
     -1040,
     -300
    ],
    [
     -1040,
     -690
    ],
    [
     -940,
     -690
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
     -810,
     300
    ],
    [
     -810,
     690
    ],
    [
     -910,
     690
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
     -810,
     300
    ],
    [
     -810,
     650
    ],
    [
     -610,
     650
    ],
    [
     -610,
     690
    ],
    [
     -510,
     690
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
     -600,
     -300
    ],
    [
     -600,
     -690
    ],
    [
     -500,
     -690
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
     270,
     300
    ],
    [
     270,
     690
    ],
    [
     370,
     690
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
     -170,
     300
    ],
    [
     -170,
     820
    ],
    [
     -70,
     820
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
     -1040,
     -300
    ],
    [
     -1040,
     -820
    ],
    [
     -1140,
     -820
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
     -1040,
     -300
    ],
    [
     -1040,
     -820
    ],
    [
     -940,
     -820
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
     -600,
     -300
    ],
    [
     -600,
     -820
    ],
    [
     -700,
     -820
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
     -100,
     -430
    ],
    [
     0,
     -430
    ],
    [
     0,
     -820
    ],
    [
     100,
     -820
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
     440,
     -300
    ],
    [
     440,
     -820
    ],
    [
     340,
     -820
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
     -600,
     -300
    ],
    [
     -600,
     -820
    ],
    [
     -500,
     -820
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
     -810,
     300
    ],
    [
     -810,
     950
    ],
    [
     -910,
     950
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
     -810,
     300
    ],
    [
     -810,
     950
    ],
    [
     -710,
     950
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
     -1040,
     -300
    ],
    [
     -1040,
     -950
    ],
    [
     -1140,
     -950
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
     440,
     -300
    ],
    [
     440,
     -950
    ],
    [
     540,
     -950
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
     -170,
     300
    ],
    [
     -170,
     950
    ],
    [
     -270,
     950
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
     -1040,
     -300
    ],
    [
     -1040,
     -950
    ],
    [
     -940,
     -950
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
     440,
     -300
    ],
    [
     440,
     -950
    ],
    [
     340,
     -950
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
     -170,
     300
    ],
    [
     -170,
     950
    ],
    [
     -70,
     950
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
     -1040,
     -300
    ],
    [
     -1040,
     -1080
    ],
    [
     -1140,
     -1080
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
     -1040,
     -300
    ],
    [
     -1040,
     -1080
    ],
    [
     -940,
     -1080
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
     440,
     -300
    ],
    [
     440,
     -1080
    ],
    [
     540,
     -1080
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
     -810,
     300
    ],
    [
     -810,
     1080
    ],
    [
     -910,
     1080
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
     -600,
     -300
    ],
    [
     -600,
     -1080
    ],
    [
     -700,
     -1080
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
     -100,
     -430
    ],
    [
     0,
     -430
    ],
    [
     0,
     -1210
    ],
    [
     100,
     -1210
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
     -1040,
     -300
    ],
    [
     -1040,
     -1210
    ],
    [
     -1140,
     -1210
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
     -600,
     -300
    ],
    [
     -600,
     -1210
    ],
    [
     -500,
     -1210
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
     -600,
     -300
    ],
    [
     -600,
     -1210
    ],
    [
     -700,
     -1210
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
     270,
     300
    ],
    [
     270,
     1210
    ],
    [
     170,
     1210
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
     -600,
     -300
    ],
    [
     -600,
     -1250
    ],
    [
     -400,
     -1250
    ],
    [
     -400,
     -1210
    ],
    [
     -300,
     -1210
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
     -810,
     300
    ],
    [
     -810,
     1340
    ],
    [
     -710,
     1340
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
     -1040,
     -300
    ],
    [
     -1040,
     -1340
    ],
    [
     -940,
     -1340
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
     -100,
     -430
    ],
    [
     0,
     -430
    ],
    [
     0,
     -1340
    ],
    [
     100,
     -1340
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
     -1040,
     -300
    ],
    [
     -1040,
     -1340
    ],
    [
     -1140,
     -1340
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
     270,
     300
    ],
    [
     270,
     1340
    ],
    [
     370,
     1340
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
     -600,
     -300
    ],
    [
     -600,
     -1340
    ],
    [
     -700,
     -1340
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
     -810,
     300
    ],
    [
     -810,
     1340
    ],
    [
     -910,
     1340
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
     440,
     -300
    ],
    [
     440,
     -1470
    ],
    [
     340,
     -1470
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
     -1040,
     -300
    ],
    [
     -1040,
     -1470
    ],
    [
     -940,
     -1470
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
     440,
     -300
    ],
    [
     440,
     -1470
    ],
    [
     540,
     -1470
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
     440,
     -300
    ],
    [
     440,
     -1600
    ],
    [
     340,
     -1600
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
     440,
     -300
    ],
    [
     440,
     -1640
    ],
    [
     840,
     -1640
    ],
    [
     840,
     -1600
    ],
    [
     940,
     -1600
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
     -170,
     300
    ],
    [
     -170,
     1470
    ],
    [
     -270,
     1470
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
     440,
     -300
    ],
    [
     440,
     -1730
    ],
    [
     540,
     -1730
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
     940,
     -1600
    ],
    [
     1040,
     -1600
    ],
    [
     1040,
     -1730
    ],
    [
     1140,
     -1730
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
     440,
     -300
    ],
    [
     440,
     -1730
    ],
    [
     340,
     -1730
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
     440,
     -300
    ],
    [
     440,
     -1770
    ],
    [
     640,
     -1770
    ],
    [
     640,
     -1730
    ],
    [
     740,
     -1730
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
     -1040,
     -300
    ],
    [
     -1040,
     -1730
    ],
    [
     -1140,
     -1730
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
     -1040,
     -300
    ],
    [
     -1040,
     -1730
    ],
    [
     -940,
     -1730
    ]
   ]
  }
 ]
};
