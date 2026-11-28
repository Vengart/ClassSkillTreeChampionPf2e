// Сгенерировано tools/build-graph.mjs — не редактируйте вручную (правьте data/champion/manual или source и пересоберите).
window.CLASS_DATA = {
 "meta": {
  "classId": "champion",
  "className": "Поборник",
  "classGen": "поборника",
  "source": "https://pf2.ru/classes/champion?tab=feats",
  "fetchedAt": "2026-11-20T20:00:27.888Z",
  "featLevels": [
   1,
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
  "cardGroups": [
   {
    "id": "group-sanct",
    "optional": true
   },
   {
    "id": "group-cause"
   },
   {
    "id": "group-devotion"
   },
   {
    "id": "group-blessing",
    "multi": true,
    "fromLevel": 3,
    "limit": 1,
    "bonus": {
     "id": "feat-5907",
     "add": 1
    }
   }
  ],
  "filters": [
   "uncommon",
   "unholy"
  ],
  "legend": [
   "sanct",
   "card"
  ],
  "updateCmd": "node tools/fetch-pf2.mjs",
  "note": "Русский · pf2.ru",
  "pendingLangs": [],
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
   "minX": -3160,
   "maxX": 3160,
   "minY": -1820,
   "maxY": 1840
  },
  "grid": {
   "halves": [
    {
     "v": -1,
     "after": -44,
     "start": -365,
     "minX": -2900,
     "maxX": 2900,
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
     "minX": -3140,
     "maxX": 3140,
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
       "level": 16,
       "y": 1470
      },
      {
       "level": 18,
       "y": 1600
      },
      {
       "level": 20,
       "y": 1730
      }
     ]
    }
   ]
  },
  "defaultLang": "pf2ru",
  "langs": [
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
     "prereq": "Требования"
    }
   },
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
   "image": "startChampIcon.webp",
   "id": "root",
   "kind": "root",
   "nameEn": "Champion",
   "level": 0,
   "x": 0,
   "y": 0
  },
  {
   "image": "Holy.webp",
   "id": "group-sanct",
   "kind": "group",
   "level": 0,
   "branch": "sanct"
  },
  {
   "image": "Holy.webp",
   "id": "sanct-holy",
   "kind": "option",
   "group": "group-sanct",
   "nameEn": "Holy",
   "level": 1,
   "branch": "sanct",
   "rarity": "common",
   "requires": []
  },
  {
   "image": "Unholy.webp",
   "id": "sanct-unholy",
   "kind": "option",
   "group": "group-sanct",
   "nameEn": "Unholy",
   "level": 1,
   "branch": "sanct",
   "rarity": "uncommon",
   "requires": []
  },
  {
   "image": "brave.webp",
   "id": "group-cause",
   "kind": "group",
   "level": 0,
   "branch": "cause"
  },
  {
   "image": "SubClassLiberation.webp",
   "id": "cause-12",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "common",
   "sanct": null,
   "requires": []
  },
  {
   "image": "SubClassRedemption.webp",
   "id": "cause-14",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "common",
   "sanct": "holy",
   "requires": [
    [
     "sanct-holy"
    ]
   ]
  },
  {
   "image": "SubClassObedience.webp",
   "id": "cause-13",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "common",
   "sanct": null,
   "requires": []
  },
  {
   "image": "SubClassInequality.webp",
   "id": "cause-10",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "uncommon",
   "sanct": "unholy",
   "requires": [
    [
     "sanct-unholy"
    ]
   ]
  },
  {
   "image": "SubClassVelichie.webp",
   "id": "cause-9",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "common",
   "sanct": "holy",
   "requires": [
    [
     "sanct-holy"
    ]
   ]
  },
  {
   "image": "SubClassDesecration.webp",
   "id": "cause-8",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "uncommon",
   "sanct": "unholy",
   "requires": [
    [
     "sanct-unholy"
    ]
   ]
  },
  {
   "image": "SubClassJustice.webp",
   "id": "cause-11",
   "kind": "option",
   "group": "group-cause",
   "level": 1,
   "branch": "cause",
   "rarity": "common",
   "sanct": null,
   "requires": []
  },
  {
   "image": "prayer.webp",
   "id": "group-devotion",
   "kind": "group",
   "level": 0,
   "branch": "devotion"
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "spell-2047",
   "kind": "option",
   "group": "group-devotion",
   "nameEn": "Lay on Hands",
   "level": 1,
   "branch": "devotion",
   "actions": "1",
   "rarity": "common",
   "requires": []
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "spell-2049",
   "kind": "option",
   "group": "group-devotion",
   "nameEn": "Shields of the Spirit",
   "level": 1,
   "branch": "devotion",
   "actions": "1",
   "rarity": "common",
   "requires": []
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "spell-2048",
   "kind": "option",
   "group": "group-devotion",
   "nameEn": "Touch of the Void",
   "level": 1,
   "branch": "devotion",
   "actions": "1",
   "rarity": "common",
   "requires": []
  },
  {
   "image": "oath-of-defender.webp",
   "id": "group-blessing",
   "kind": "group",
   "level": 0,
   "branch": "blessing"
  },
  {
   "image": "DevWeapon.webp",
   "id": "blessing-armament",
   "kind": "option",
   "group": "group-blessing",
   "level": 3,
   "branch": "blessing",
   "requires": []
  },
  {
   "image": "DevShield.webp",
   "id": "blessing-shield",
   "kind": "option",
   "group": "group-blessing",
   "level": 3,
   "branch": "blessing",
   "requires": []
  },
  {
   "image": "DevProvornost.webp",
   "id": "blessing-swiftness",
   "kind": "option",
   "group": "group-blessing",
   "level": 3,
   "branch": "blessing",
   "requires": []
  },
  {
   "image": "brave.webp",
   "id": "theme-cause",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -2100,
   "y": -300,
   "captionSide": "right",
   "captionW": 120
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "theme-devotion",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -2340,
   "y": 300,
   "captionSide": "right",
   "captionW": 147
  },
  {
   "image": "oath-of-defender.webp",
   "id": "theme-blessing",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2100,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "theme-aura",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -620,
   "y": -300,
   "captionSide": "right",
   "captionW": 54
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "theme-shield",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1260,
   "y": -300,
   "captionSide": "right",
   "captionW": 40
  },
  {
   "image": "Horse.webp",
   "id": "theme-steed",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1740,
   "y": 300,
   "captionSide": "right",
   "captionW": 80
  },
  {
   "image": "prayer.webp",
   "id": "theme-faith",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -100,
   "y": 300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "Holy.webp",
   "id": "theme-sanct",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": -1060,
   "y": -300,
   "captionSide": "right",
   "captionW": 120
  },
  {
   "image": "fight.webp",
   "id": "theme-combat",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 420,
   "y": -300,
   "captionSide": "right",
   "captionW": 40
  },
  {
   "image": "Horse.webp",
   "id": "feat-5885",
   "kind": "feat",
   "nameEn": "Faithful Steed",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-steed",
   "theme": "theme-steed",
   "x": 2040,
   "y": 430,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SubClassLiberation.webp",
   "id": "feat-5889",
   "kind": "feat",
   "nameEn": "Unimpeded Step",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-12"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2200,
   "y": -430,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "SubClassRedemption.webp",
   "id": "feat-5891",
   "kind": "feat",
   "nameEn": "Weight of Guilt",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-14"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2000,
   "y": -430,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "prayer.webp",
   "id": "feat-5883",
   "kind": "feat",
   "nameEn": "Deity's Domain",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -1000,
   "y": 430,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "SubClassObedience.webp",
   "id": "feat-5886",
   "kind": "feat",
   "nameEn": "Iron Repercussions",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-13"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2400,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassInequality.webp",
   "id": "feat-5890",
   "kind": "feat",
   "nameEn": "Vicious Vengeance",
   "level": 1,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [
    [
     "cause-10"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -1800,
   "y": -430,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5882",
   "kind": "feat",
   "nameEn": "Defensive Advance",
   "level": 1,
   "actions": "2",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1160,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassVelichie.webp",
   "id": "feat-5881",
   "kind": "feat",
   "nameEn": "Brilliant Flash",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-9"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2600,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5884",
   "kind": "feat",
   "nameEn": "Desperate Prayer",
   "level": 1,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 1200,
   "y": 430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassDesecration.webp",
   "id": "feat-5888",
   "kind": "feat",
   "nameEn": "Ongoing Selfishness",
   "level": 1,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [
    [
     "cause-8"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -1600,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassJustice.webp",
   "id": "feat-5887",
   "kind": "feat",
   "nameEn": "Nimble Reprisal",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-11"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2800,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-7596",
   "kind": "feat",
   "nameEn": "Splinter Faith",
   "level": 1,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -200,
   "y": 430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5892",
   "kind": "feat",
   "nameEn": "Divine Grace",
   "level": 2,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 0,
   "y": 560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "health.webp",
   "id": "feat-5893",
   "kind": "feat",
   "nameEn": "Divine Health",
   "level": 2,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -200,
   "y": 560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-defender.webp",
   "id": "feat-7518",
   "kind": "feat",
   "nameEn": "Oath of The Defender",
   "level": 2,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -600,
   "y": 560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-avenger.webp",
   "id": "feat-7517",
   "kind": "feat",
   "nameEn": "Oath of The Avenger",
   "level": 2,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 200,
   "y": 560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-assassin.webp",
   "id": "feat-7519",
   "kind": "feat",
   "nameEn": "Oath of The Slayer",
   "level": 2,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 800,
   "y": 560,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "300px-Dethrone.webp",
   "id": "feat-5894",
   "kind": "feat",
   "nameEn": "Aura of Courage",
   "level": 4,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -520,
   "y": -690,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5895",
   "kind": "feat",
   "nameEn": "Aura of Despair",
   "level": 4,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [
    [
     "sanct-unholy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -720,
   "y": -690,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "feat-5898",
   "kind": "feat",
   "nameEn": "Security",
   "level": 4,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "spell-2049"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2040,
   "y": 690,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "feat-5896",
   "kind": "feat",
   "nameEn": "Cruelty",
   "level": 4,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "spell-2048"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2840,
   "y": 690,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5897",
   "kind": "feat",
   "nameEn": "Mercy",
   "level": 4,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -1640,
   "y": 690,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "Horse.webp",
   "id": "feat-7991",
   "kind": "feat",
   "nameEn": "Acclimated Mount",
   "level": 4,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2240,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-5900",
   "kind": "feat",
   "nameEn": "Loyal Warhorse",
   "level": 6,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2640,
   "y": 820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5832",
   "kind": "feat",
   "nameEn": "Reactive Strike",
   "level": 6,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 120,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "feat-5899",
   "kind": "feat",
   "nameEn": "Expand Aura",
   "level": 6,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -520,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "smite.webp",
   "id": "feat-5901",
   "kind": "feat",
   "nameEn": "Smite",
   "level": 6,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 520,
   "y": -820,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-4807",
   "kind": "feat",
   "nameEn": "Shield Warden",
   "level": 6,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-shield"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2600,
   "y": -820,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-4816",
   "kind": "feat",
   "nameEn": "Quick Shield Block",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1160,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-defender.webp",
   "id": "feat-5907",
   "kind": "feat",
   "nameEn": "Second Blessing",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "group-blessing"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2000,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5906",
   "kind": "feat",
   "nameEn": "Heal Mount",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ],
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2240,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5902",
   "kind": "feat",
   "nameEn": "Advanced Deity's Domain",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5883"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5883",
   "theme": "theme-faith",
   "x": -1200,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "feat-5905",
   "kind": "feat",
   "nameEn": "Greater Security",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5898"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5898",
   "theme": "theme-devotion",
   "x": -1840,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "feat-5903",
   "kind": "feat",
   "nameEn": "Greater Cruelty",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5896"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5896",
   "theme": "theme-devotion",
   "x": -3040,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5904",
   "kind": "feat",
   "nameEn": "Greater Mercy",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": -1440,
   "y": 950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "sight.webp",
   "id": "feat-7521",
   "kind": "feat",
   "nameEn": "Sense Unholiness",
   "level": 8,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -960,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "sight.webp",
   "id": "feat-7520",
   "kind": "feat",
   "nameEn": "Sense Holiness",
   "level": 8,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -1160,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-7992",
   "kind": "feat",
   "nameEn": "Faithful Stride",
   "level": 8,
   "actions": "2/3",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2440,
   "y": 950,
   "captionSide": "below",
   "captionW": 84
  },
  {
   "image": "Horse.webp",
   "id": "feat-5908",
   "kind": "feat",
   "nameEn": "Imposing Destrier",
   "level": 10,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5900"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5900",
   "theme": "theme-steed",
   "x": 2840,
   "y": 1080,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevProvornost.webp",
   "id": "feat-5911",
   "kind": "feat",
   "nameEn": "Spectral Advance",
   "level": 10,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-swiftness"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2200,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevWeapon.webp",
   "id": "feat-5909",
   "kind": "feat",
   "nameEn": "Radiant Armament",
   "level": 10,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-armament"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2000,
   "y": -1080,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "DevShield.webp",
   "id": "feat-5910",
   "kind": "feat",
   "nameEn": "Shield of Reckoning",
   "level": 10,
   "actions": "5",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-4807"
    ],
    [
     "blessing-shield"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4807",
   "theme": "theme-blessing",
   "x": 2800,
   "y": -1080,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "300px-Calm_Emotions.webp",
   "id": "feat-5913",
   "kind": "feat",
   "nameEn": "Aura of Faith",
   "level": 12,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "sanct-holy",
     "sanct-unholy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -720,
   "y": -1210,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "fight.webp",
   "id": "feat-5914",
   "kind": "feat",
   "nameEn": "Blessed Counterstrike",
   "level": 12,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-9",
     "cause-14",
     "cause-11",
     "cause-12"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -1600,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Unholy.webp",
   "id": "feat-7523",
   "kind": "feat",
   "nameEn": "Pale Horse",
   "level": 12,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2240,
   "y": 1210,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5917",
   "kind": "feat",
   "nameEn": "Divine Wall",
   "level": 12,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1360,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5912",
   "kind": "feat",
   "nameEn": "Affliction Mercy",
   "level": 12,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": -1440,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-7993",
   "kind": "feat",
   "nameEn": "Steed's Toppling Strike",
   "level": 12,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 2440,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-avenger.webp",
   "id": "feat-7522",
   "kind": "feat",
   "nameEn": "Enforce Oath",
   "level": 12,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-7518",
     "feat-7517",
     "feat-7519"
    ]
   ],
   "forbids": [],
   "parentId": "feat-7518",
   "theme": "theme-faith",
   "x": -800,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "smite.webp",
   "id": "feat-5915",
   "kind": "feat",
   "nameEn": "Champion's Sacrifice",
   "level": 12,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [
    "sanct-unholy"
   ],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 320,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5916",
   "kind": "feat",
   "nameEn": "Devoted Focus",
   "level": 12,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "group-devotion"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2440,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5918",
   "kind": "feat",
   "nameEn": "Gruesome Strike",
   "level": 12,
   "actions": "1",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-10",
     "cause-8",
     "cause-13"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2000,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Cure_Wounds.webp",
   "id": "feat-5920",
   "kind": "feat",
   "nameEn": "Aura of Life",
   "level": 14,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -520,
   "y": -1340,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "Holy.webp",
   "id": "feat-5921",
   "kind": "feat",
   "nameEn": "Aura of Righteousness",
   "level": 14,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -720,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "brave.webp",
   "id": "feat-5919",
   "kind": "feat",
   "nameEn": "Aura of Determination",
   "level": 14,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -320,
   "y": -1340,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "300px-Longstrider.webp",
   "id": "feat-5922",
   "kind": "feat",
   "nameEn": "Divine Reflexes",
   "level": 14,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 520,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Conjure_Barrage.webp",
   "id": "feat-7524",
   "kind": "feat",
   "nameEn": "Exalted Greatness",
   "level": 14,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 320,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5925",
   "kind": "feat",
   "nameEn": "Instrument of Zeal",
   "level": 16,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5914"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5914",
   "theme": "theme-cause",
   "x": -1400,
   "y": -1470,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5924",
   "kind": "feat",
   "nameEn": "Instrument of Slaughter",
   "level": 16,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "cause-10",
     "cause-8",
     "cause-13"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2200,
   "y": -1470,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-5923",
   "kind": "feat",
   "nameEn": "Auspicious Mount",
   "level": 16,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5908"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5908",
   "theme": "theme-steed",
   "x": 3040,
   "y": 1470,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5926",
   "kind": "feat",
   "nameEn": "Shield of Grace",
   "level": 16,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-4807"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4807",
   "theme": "theme-blessing",
   "x": 2800,
   "y": -1470,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5927",
   "kind": "feat",
   "nameEn": "Rejuvenating Touch",
   "level": 18,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2440,
   "y": 1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5928",
   "kind": "feat",
   "nameEn": "Swift Retribution",
   "level": 18,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "group-cause"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2000,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5929",
   "kind": "feat",
   "nameEn": "Ultimate Mercy",
   "level": 18,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": -1440,
   "y": 1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-7527",
   "kind": "feat",
   "nameEn": "Retributive Focus",
   "level": 18,
   "actions": "4",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-5884"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5884",
   "theme": "theme-faith",
   "x": 1400,
   "y": 1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Planar_Binding.webp",
   "id": "feat-7526",
   "kind": "feat",
   "nameEn": "Fiendish Form",
   "level": 18,
   "actions": null,
   "rarity": "uncommon",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -960,
   "y": -1600,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "Holy.webp",
   "id": "feat-7525",
   "kind": "feat",
   "nameEn": "Celestial Form",
   "level": 18,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -1160,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Holy.webp",
   "id": "feat-5931",
   "kind": "feat",
   "nameEn": "Sacred Defender",
   "level": 20,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -960,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevWeapon.webp",
   "id": "feat-5930",
   "kind": "feat",
   "nameEn": "Armament Paragon",
   "level": 20,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-armament"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2200,
   "y": -1730,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "DevProvornost.webp",
   "id": "feat-5933",
   "kind": "feat",
   "nameEn": "Swift Paragon",
   "level": 20,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-swiftness"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2000,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevShield.webp",
   "id": "feat-5932",
   "kind": "feat",
   "nameEn": "Shield Paragon",
   "level": 20,
   "actions": null,
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "blessing-shield"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": 2400,
   "y": -1730,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-3622",
   "kind": "feat",
   "nameEn": "Agile Shield Grip",
   "level": 1,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1360,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-1087",
   "kind": "feat",
   "nameEn": "Everstand Stance",
   "level": 1,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1560,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-3624",
   "kind": "feat",
   "nameEn": "Reliable Squire",
   "level": 2,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 520,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-3623",
   "kind": "feat",
   "nameEn": "Devoted Guardian",
   "level": 2,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1160,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-3625",
   "kind": "feat",
   "nameEn": "Resilient Mind",
   "level": 2,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -400,
   "y": 560,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "prayer.webp",
   "id": "feat-3629",
   "kind": "feat",
   "nameEn": "Inspiring Resilience",
   "level": 4,
   "actions": "5",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 0,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-3630",
   "kind": "feat",
   "nameEn": "Knock Sense",
   "level": 4,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 320,
   "y": -690,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "prayer.webp",
   "id": "feat-8478",
   "kind": "feat",
   "nameEn": "Sacral Lord",
   "level": 4,
   "actions": "",
   "rarity": "rare",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 400,
   "y": 690,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-1089",
   "kind": "feat",
   "nameEn": "Light of Revelation",
   "level": 4,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2240,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-1090",
   "kind": "feat",
   "nameEn": "Sun Blade",
   "level": 4,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2640,
   "y": 690,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-1671",
   "kind": "feat",
   "nameEn": "Accelerating Touch",
   "level": 4,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2440,
   "y": 690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-1088",
   "kind": "feat",
   "nameEn": "Everstand Strike",
   "level": 4,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [
    [
     "feat-1087"
    ]
   ],
   "forbids": [],
   "parentId": "feat-1087",
   "theme": "theme-shield",
   "x": 1760,
   "y": -690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-9512",
   "kind": "feat",
   "nameEn": "Chiardmar Steed",
   "level": 6,
   "actions": "",
   "rarity": "uncommon",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-steed",
   "theme": "theme-steed",
   "x": 1640,
   "y": 820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-9513",
   "kind": "feat",
   "nameEn": "Nidarrmar Steed",
   "level": 6,
   "actions": "",
   "rarity": "uncommon",
   "legacy": false,
   "requires": [],
   "forbids": [],
   "parentId": "theme-steed",
   "theme": "theme-steed",
   "x": 1840,
   "y": 820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-3634",
   "kind": "feat",
   "nameEn": "Shield Wall",
   "level": 6,
   "actions": "5",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1360,
   "y": -820,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "fight.webp",
   "id": "feat-1678",
   "kind": "feat",
   "nameEn": "Sacrifice Armor",
   "level": 8,
   "actions": "5",
   "rarity": "common",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": 720,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-1091",
   "kind": "feat",
   "nameEn": "Impassable Wall Stance",
   "level": 8,
   "actions": "1",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [
    [
     "feat-5832"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5832",
   "theme": "theme-combat",
   "x": -80,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-1682",
   "kind": "feat",
   "nameEn": "Resilient Touch",
   "level": 10,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2240,
   "y": 1080,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-3639",
   "kind": "feat",
   "nameEn": "Holy Light",
   "level": 10,
   "actions": "2",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": -200,
   "y": 1080,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "brave.webp",
   "id": "feat-248",
   "kind": "feat",
   "nameEn": "Liberating Stride",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "cause-12"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -1800,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-3641",
   "kind": "feat",
   "nameEn": "Necromantic Deflection",
   "level": 12,
   "actions": "",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": 1160,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "brave.webp",
   "id": "feat-247",
   "kind": "feat",
   "nameEn": "Lasting Doubt",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "cause-14"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -2200,
   "y": -1210,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-1683",
   "kind": "feat",
   "nameEn": "Amplifying Touch",
   "level": 12,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": -2240,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-3640",
   "kind": "feat",
   "nameEn": "Miraculous Intervention",
   "level": 12,
   "actions": "5",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 0,
   "y": 1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-1688",
   "kind": "feat",
   "nameEn": "Greater Interpose",
   "level": 14,
   "actions": "",
   "rarity": "common",
   "legacy": true,
   "requires": [
    [
     "feat-1678"
    ]
   ],
   "forbids": [],
   "parentId": "feat-1678",
   "theme": "theme-combat",
   "x": 920,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-8479",
   "kind": "feat",
   "nameEn": "Sacral Monarch",
   "level": 14,
   "actions": "",
   "rarity": "common",
   "legacy": false,
   "requires": [
    [
     "feat-8478"
    ]
   ],
   "forbids": [],
   "parentId": "feat-8478",
   "theme": "theme-faith",
   "x": 600,
   "y": 1340,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "feat-2747",
   "kind": "feat",
   "nameEn": "Everdistant Defense",
   "level": 20,
   "actions": "5",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -720,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-1242",
   "kind": "feat",
   "nameEn": "Banishing Blow",
   "level": 20,
   "actions": "4",
   "rarity": "uncommon",
   "legacy": true,
   "requires": [
    [
     "feat-7519"
    ]
   ],
   "forbids": [],
   "parentId": "feat-7519",
   "theme": "theme-faith",
   "x": 1000,
   "y": 1730,
   "captionSide": "below",
   "captionW": 147
  }
 ],
 "edges": [
  {
   "from": "root",
   "to": "theme-cause",
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
     -2100,
     -190
    ],
    [
     -2100,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-devotion",
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
     -2340,
     190
    ],
    [
     -2340,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-blessing",
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
     2100,
     -190
    ],
    [
     2100,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-aura",
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
     -620,
     -190
    ],
    [
     -620,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-shield",
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
     1260,
     -190
    ],
    [
     1260,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-steed",
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
     1740,
     190
    ],
    [
     1740,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-faith",
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
     -100,
     190
    ],
    [
     -100,
     300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-sanct",
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
     -1060,
     -190
    ],
    [
     -1060,
     -300
    ]
   ]
  },
  {
   "from": "root",
   "to": "theme-combat",
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
     420,
     -190
    ],
    [
     420,
     -300
    ]
   ]
  },
  {
   "from": "theme-steed",
   "to": "feat-5885",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1740,
     300
    ],
    [
     1740,
     390
    ],
    [
     1940,
     390
    ],
    [
     1940,
     430
    ],
    [
     2040,
     430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5889",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -430
    ],
    [
     -2200,
     -430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5891",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -430
    ],
    [
     -2000,
     -430
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-5883",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     390
    ],
    [
     -900,
     390
    ],
    [
     -900,
     430
    ],
    [
     -1000,
     430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5886",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -470
    ],
    [
     -2300,
     -470
    ],
    [
     -2300,
     -430
    ],
    [
     -2400,
     -430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5890",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -470
    ],
    [
     -1900,
     -470
    ],
    [
     -1900,
     -430
    ],
    [
     -1800,
     -430
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-5882",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -430
    ],
    [
     1160,
     -430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5881",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -470
    ],
    [
     -2500,
     -470
    ],
    [
     -2500,
     -430
    ],
    [
     -2600,
     -430
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-5884",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     390
    ],
    [
     1100,
     390
    ],
    [
     1100,
     430
    ],
    [
     1200,
     430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5888",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -470
    ],
    [
     -1700,
     -470
    ],
    [
     -1700,
     -430
    ],
    [
     -1600,
     -430
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5887",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -470
    ],
    [
     -2700,
     -470
    ],
    [
     -2700,
     -430
    ],
    [
     -2800,
     -430
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-7596",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     430
    ],
    [
     -200,
     430
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-5892",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     560
    ],
    [
     0,
     560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-5893",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     560
    ],
    [
     -200,
     560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-7518",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     520
    ],
    [
     -500,
     520
    ],
    [
     -500,
     560
    ],
    [
     -600,
     560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-7517",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     520
    ],
    [
     100,
     520
    ],
    [
     100,
     560
    ],
    [
     200,
     560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-7519",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     520
    ],
    [
     700,
     520
    ],
    [
     700,
     560
    ],
    [
     800,
     560
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5894",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -690
    ],
    [
     -520,
     -690
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5895",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -690
    ],
    [
     -720,
     -690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-5898",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     650
    ],
    [
     -2140,
     650
    ],
    [
     -2140,
     690
    ],
    [
     -2040,
     690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-5896",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     650
    ],
    [
     -2740,
     650
    ],
    [
     -2740,
     690
    ],
    [
     -2840,
     690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-5897",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     520
    ],
    [
     -1740,
     520
    ],
    [
     -1740,
     690
    ],
    [
     -1640,
     690
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-7991",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     690
    ],
    [
     2240,
     690
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-5900",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     780
    ],
    [
     2540,
     780
    ],
    [
     2540,
     820
    ],
    [
     2640,
     820
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-5832",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -860
    ],
    [
     220,
     -860
    ],
    [
     220,
     -820
    ],
    [
     120,
     -820
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5899",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -820
    ],
    [
     -520,
     -820
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-5901",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -820
    ],
    [
     520,
     -820
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-4807",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -860
    ],
    [
     2500,
     -860
    ],
    [
     2500,
     -820
    ],
    [
     2600,
     -820
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-4816",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -950
    ],
    [
     1160,
     -950
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5907",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -950
    ],
    [
     2000,
     -950
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-5906",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     950
    ],
    [
     2240,
     950
    ]
   ]
  },
  {
   "from": "feat-5883",
   "to": "feat-5902",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -1000,
     430
    ],
    [
     -1100,
     430
    ],
    [
     -1100,
     950
    ],
    [
     -1200,
     950
    ]
   ]
  },
  {
   "from": "feat-5898",
   "to": "feat-5905",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -2040,
     690
    ],
    [
     -1940,
     690
    ],
    [
     -1940,
     950
    ],
    [
     -1840,
     950
    ]
   ]
  },
  {
   "from": "feat-5896",
   "to": "feat-5903",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -2840,
     690
    ],
    [
     -2940,
     690
    ],
    [
     -2940,
     950
    ],
    [
     -3040,
     950
    ]
   ]
  },
  {
   "from": "feat-5897",
   "to": "feat-5904",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -1640,
     690
    ],
    [
     -1540,
     690
    ],
    [
     -1540,
     950
    ],
    [
     -1440,
     950
    ]
   ]
  },
  {
   "from": "theme-sanct",
   "to": "feat-7521",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -1060,
     -300
    ],
    [
     -1060,
     -950
    ],
    [
     -960,
     -950
    ]
   ]
  },
  {
   "from": "theme-sanct",
   "to": "feat-7520",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -1060,
     -300
    ],
    [
     -1060,
     -950
    ],
    [
     -1160,
     -950
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-7992",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     910
    ],
    [
     2340,
     910
    ],
    [
     2340,
     950
    ],
    [
     2440,
     950
    ]
   ]
  },
  {
   "from": "feat-5900",
   "to": "feat-5908",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2640,
     820
    ],
    [
     2740,
     820
    ],
    [
     2740,
     1080
    ],
    [
     2840,
     1080
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5911",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -1080
    ],
    [
     2200,
     -1080
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5909",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -1080
    ],
    [
     2000,
     -1080
    ]
   ]
  },
  {
   "from": "feat-4807",
   "to": "feat-5910",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2600,
     -820
    ],
    [
     2700,
     -820
    ],
    [
     2700,
     -1080
    ],
    [
     2800,
     -1080
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5913",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -1210
    ],
    [
     -720,
     -1210
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5914",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1250
    ],
    [
     -1700,
     -1250
    ],
    [
     -1700,
     -1210
    ],
    [
     -1600,
     -1210
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-7523",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     1210
    ],
    [
     2240,
     1210
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-5917",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -1210
    ],
    [
     1360,
     -1210
    ]
   ]
  },
  {
   "from": "feat-5897",
   "to": "feat-5912",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -1640,
     690
    ],
    [
     -1540,
     690
    ],
    [
     -1540,
     1210
    ],
    [
     -1440,
     1210
    ]
   ]
  },
  {
   "from": "feat-5885",
   "to": "feat-7993",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2040,
     430
    ],
    [
     2140,
     430
    ],
    [
     2140,
     1170
    ],
    [
     2340,
     1170
    ],
    [
     2340,
     1210
    ],
    [
     2440,
     1210
    ]
   ]
  },
  {
   "from": "feat-7518",
   "to": "feat-7522",
   "kind": "or",
   "primary": true,
   "points": [
    [
     -600,
     560
    ],
    [
     -700,
     560
    ],
    [
     -700,
     1210
    ],
    [
     -800,
     1210
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-5915",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -1210
    ],
    [
     320,
     -1210
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-5916",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     1210
    ],
    [
     -2440,
     1210
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5918",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1210
    ],
    [
     -2000,
     -1210
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5920",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -1340
    ],
    [
     -520,
     -1340
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5921",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -1340
    ],
    [
     -720,
     -1340
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-5919",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -1380
    ],
    [
     -420,
     -1380
    ],
    [
     -420,
     -1340
    ],
    [
     -320,
     -1340
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-5922",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -1340
    ],
    [
     520,
     -1340
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-7524",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -1340
    ],
    [
     320,
     -1340
    ]
   ]
  },
  {
   "from": "feat-5914",
   "to": "feat-5925",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -1600,
     -1210
    ],
    [
     -1500,
     -1210
    ],
    [
     -1500,
     -1470
    ],
    [
     -1400,
     -1470
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5924",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1470
    ],
    [
     -2200,
     -1470
    ]
   ]
  },
  {
   "from": "feat-5908",
   "to": "feat-5923",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2840,
     1080
    ],
    [
     2940,
     1080
    ],
    [
     2940,
     1470
    ],
    [
     3040,
     1470
    ]
   ]
  },
  {
   "from": "feat-4807",
   "to": "feat-5926",
   "kind": "req",
   "primary": true,
   "points": [
    [
     2600,
     -820
    ],
    [
     2700,
     -820
    ],
    [
     2700,
     -1470
    ],
    [
     2800,
     -1470
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-5927",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     1600
    ],
    [
     -2440,
     1600
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-5928",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1600
    ],
    [
     -2000,
     -1600
    ]
   ]
  },
  {
   "from": "feat-5897",
   "to": "feat-5929",
   "kind": "req",
   "primary": true,
   "points": [
    [
     -1640,
     690
    ],
    [
     -1540,
     690
    ],
    [
     -1540,
     1600
    ],
    [
     -1440,
     1600
    ]
   ]
  },
  {
   "from": "feat-5884",
   "to": "feat-7527",
   "kind": "req",
   "primary": true,
   "points": [
    [
     1200,
     430
    ],
    [
     1300,
     430
    ],
    [
     1300,
     1600
    ],
    [
     1400,
     1600
    ]
   ]
  },
  {
   "from": "theme-sanct",
   "to": "feat-7526",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -1060,
     -300
    ],
    [
     -1060,
     -1600
    ],
    [
     -960,
     -1600
    ]
   ]
  },
  {
   "from": "theme-sanct",
   "to": "feat-7525",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -1060,
     -300
    ],
    [
     -1060,
     -1600
    ],
    [
     -1160,
     -1600
    ]
   ]
  },
  {
   "from": "theme-sanct",
   "to": "feat-5931",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -1060,
     -300
    ],
    [
     -1060,
     -1730
    ],
    [
     -960,
     -1730
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5930",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -1730
    ],
    [
     2200,
     -1730
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5933",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -1730
    ],
    [
     2000,
     -1730
    ]
   ]
  },
  {
   "from": "theme-blessing",
   "to": "feat-5932",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2100,
     -300
    ],
    [
     2100,
     -1770
    ],
    [
     2300,
     -1770
    ],
    [
     2300,
     -1730
    ],
    [
     2400,
     -1730
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-3622",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -430
    ],
    [
     1360,
     -430
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-1087",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -470
    ],
    [
     1460,
     -470
    ],
    [
     1460,
     -430
    ],
    [
     1560,
     -430
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-3624",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -560
    ],
    [
     520,
     -560
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-3623",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -560
    ],
    [
     1160,
     -560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-3625",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     520
    ],
    [
     -300,
     520
    ],
    [
     -300,
     560
    ],
    [
     -400,
     560
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-3629",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     690
    ],
    [
     0,
     690
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-3630",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -690
    ],
    [
     320,
     -690
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-8478",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     650
    ],
    [
     300,
     650
    ],
    [
     300,
     690
    ],
    [
     400,
     690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-1089",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     690
    ],
    [
     -2240,
     690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-1090",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     650
    ],
    [
     -2540,
     650
    ],
    [
     -2540,
     690
    ],
    [
     -2640,
     690
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-1671",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     690
    ],
    [
     -2440,
     690
    ]
   ]
  },
  {
   "from": "feat-1087",
   "to": "feat-1088",
   "kind": "req",
   "primary": true,
   "points": [
    [
     1560,
     -430
    ],
    [
     1660,
     -430
    ],
    [
     1660,
     -690
    ],
    [
     1760,
     -690
    ]
   ]
  },
  {
   "from": "theme-steed",
   "to": "feat-9512",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1740,
     300
    ],
    [
     1740,
     820
    ],
    [
     1640,
     820
    ]
   ]
  },
  {
   "from": "theme-steed",
   "to": "feat-9513",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1740,
     300
    ],
    [
     1740,
     820
    ],
    [
     1840,
     820
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-3634",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -820
    ],
    [
     1360,
     -820
    ]
   ]
  },
  {
   "from": "theme-combat",
   "to": "feat-1678",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     420,
     -300
    ],
    [
     420,
     -990
    ],
    [
     620,
     -990
    ],
    [
     620,
     -950
    ],
    [
     720,
     -950
    ]
   ]
  },
  {
   "from": "feat-5832",
   "to": "feat-1091",
   "kind": "req",
   "primary": true,
   "points": [
    [
     120,
     -820
    ],
    [
     20,
     -820
    ],
    [
     20,
     -950
    ],
    [
     -80,
     -950
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-1682",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     1080
    ],
    [
     -2240,
     1080
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-3639",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     1080
    ],
    [
     -200,
     1080
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-248",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1250
    ],
    [
     -1900,
     -1250
    ],
    [
     -1900,
     -1210
    ],
    [
     -1800,
     -1210
    ]
   ]
  },
  {
   "from": "theme-shield",
   "to": "feat-3641",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1260,
     -300
    ],
    [
     1260,
     -1210
    ],
    [
     1160,
     -1210
    ]
   ]
  },
  {
   "from": "theme-cause",
   "to": "feat-247",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2100,
     -300
    ],
    [
     -2100,
     -1210
    ],
    [
     -2200,
     -1210
    ]
   ]
  },
  {
   "from": "theme-devotion",
   "to": "feat-1683",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -2340,
     300
    ],
    [
     -2340,
     1210
    ],
    [
     -2240,
     1210
    ]
   ]
  },
  {
   "from": "theme-faith",
   "to": "feat-3640",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -100,
     300
    ],
    [
     -100,
     1210
    ],
    [
     0,
     1210
    ]
   ]
  },
  {
   "from": "feat-1678",
   "to": "feat-1688",
   "kind": "req",
   "primary": true,
   "points": [
    [
     720,
     -950
    ],
    [
     820,
     -950
    ],
    [
     820,
     -1340
    ],
    [
     920,
     -1340
    ]
   ]
  },
  {
   "from": "feat-8478",
   "to": "feat-8479",
   "kind": "req",
   "primary": true,
   "points": [
    [
     400,
     690
    ],
    [
     500,
     690
    ],
    [
     500,
     1340
    ],
    [
     600,
     1340
    ]
   ]
  },
  {
   "from": "theme-aura",
   "to": "feat-2747",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     -620,
     -300
    ],
    [
     -620,
     -1730
    ],
    [
     -720,
     -1730
    ]
   ]
  },
  {
   "from": "feat-7519",
   "to": "feat-1242",
   "kind": "req",
   "primary": true,
   "points": [
    [
     800,
     560
    ],
    [
     900,
     560
    ],
    [
     900,
     1730
    ],
    [
     1000,
     1730
    ]
   ]
  }
 ]
};
