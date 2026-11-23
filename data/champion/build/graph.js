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
   "maxX": 4844,
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
     "id": "theme-cause",
     "x": 64,
     "w": 980
    },
    {
     "id": "theme-sanct",
     "x": 1080,
     "w": 280
    },
    {
     "id": "theme-aura",
     "x": 1396,
     "w": 420
    },
    {
     "id": "theme-combat",
     "x": 1852,
     "w": 280
    },
    {
     "id": "theme-shield",
     "x": 2168,
     "w": 140
    },
    {
     "id": "theme-blessing",
     "x": 2344,
     "w": 420
    },
    {
     "id": "theme-devotion",
     "x": 2800,
     "w": 420
    },
    {
     "id": "theme-faith",
     "x": 3256,
     "w": 980
    },
    {
     "id": "theme-steed",
     "x": 4272,
     "w": 560
    }
   ],
   "rowH": 104
  },
  "defaultLang": "pf2ru",
  "langs": [
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
     "prereq": "Требования"
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
   "level": 0
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
   "x": 64,
   "y": 0,
   "plateW": 968
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "theme-devotion",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2800,
   "y": 0,
   "plateW": 408
  },
  {
   "image": "oath-of-defender.webp",
   "id": "theme-blessing",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2344,
   "y": 0,
   "plateW": 408
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "theme-aura",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1396,
   "y": 0,
   "plateW": 408
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "theme-shield",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 2168,
   "y": 0,
   "plateW": 128
  },
  {
   "image": "Horse.webp",
   "id": "theme-steed",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 4272,
   "y": 0,
   "plateW": 548
  },
  {
   "image": "prayer.webp",
   "id": "theme-faith",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 3256,
   "y": 0,
   "plateW": 968
  },
  {
   "image": "Holy.webp",
   "id": "theme-sanct",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1080,
   "y": 0,
   "plateW": 268
  },
  {
   "image": "fight.webp",
   "id": "theme-combat",
   "kind": "hub",
   "level": 0,
   "requires": [],
   "x": 1852,
   "y": 0,
   "plateW": 268
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
   "x": 4342,
   "y": 110,
   "captionSide": "below",
   "captionW": 99
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
   "x": 134,
   "y": 110,
   "captionSide": "below",
   "captionW": 83
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
   "x": 274,
   "y": 110,
   "captionSide": "below",
   "captionW": 68
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
   "x": 4026,
   "y": 110,
   "captionSide": "below",
   "captionW": 106
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
   "x": 414,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 554,
   "y": 110,
   "captionSide": "below",
   "captionW": 106
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
   "x": 2238,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 694,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4166,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 834,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 974,
   "y": 110,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3326,
   "y": 110,
   "captionSide": "below",
   "captionW": 114
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
   "x": 3466,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3606,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3326,
   "y": 214,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3746,
   "y": 214,
   "captionSide": "below",
   "captionW": 114
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
   "x": 3886,
   "y": 214,
   "captionSide": "below",
   "captionW": 99
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
   "x": 1466,
   "y": 318,
   "captionSide": "below",
   "captionW": 83
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
   "x": 1606,
   "y": 318,
   "captionSide": "below",
   "captionW": 99
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
   "x": 2870,
   "y": 318,
   "captionSide": "below",
   "captionW": 91
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
   "x": 3150,
   "y": 318,
   "captionSide": "below",
   "captionW": 99
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
   "x": 3010,
   "y": 318,
   "captionSide": "below",
   "captionW": 76
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
   "x": 4342,
   "y": 318,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4622,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1922,
   "y": 422,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1466,
   "y": 422,
   "captionSide": "below",
   "captionW": 114
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
   "x": 2062,
   "y": 422,
   "captionSide": "below",
   "captionW": 76
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
   "x": 2694,
   "y": 422,
   "captionSide": "below",
   "captionW": 68
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
   "x": 2238,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2414,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4342,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4026,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2870,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3150,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3010,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1150,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1290,
   "y": 526,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4482,
   "y": 526,
   "captionSide": "below",
   "captionW": 61
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
   "x": 4762,
   "y": 630,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2414,
   "y": 630,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2554,
   "y": 630,
   "captionSide": "below",
   "captionW": 106
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
   "x": 2694,
   "y": 630,
   "captionSide": "below",
   "captionW": 91
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
   "x": 1466,
   "y": 734,
   "captionSide": "below",
   "captionW": 68
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
   "x": 274,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4342,
   "y": 734,
   "captionSide": "below",
   "captionW": 106
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
   "x": 2238,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3010,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4482,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3326,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1922,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2870,
   "y": 734,
   "captionSide": "below",
   "captionW": 116
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
   "x": 134,
   "y": 734,
   "captionSide": "below",
   "captionW": 114
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
   "x": 1466,
   "y": 838,
   "captionSide": "below",
   "captionW": 76
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
   "x": 1606,
   "y": 838,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1746,
   "y": 838,
   "captionSide": "below",
   "captionW": 106
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
   "x": 1922,
   "y": 838,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2062,
   "y": 838,
   "captionSide": "below",
   "captionW": 116
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
   "x": 274,
   "y": 942,
   "captionSide": "below",
   "captionW": 83
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
   "x": 134,
   "y": 942,
   "captionSide": "below",
   "captionW": 114
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
   "x": 4762,
   "y": 942,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2694,
   "y": 942,
   "captionSide": "below",
   "captionW": 106
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
   "x": 2870,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
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
   "x": 134,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
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
   "x": 3010,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
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
   "x": 4166,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1150,
   "y": 1046,
   "captionSide": "below",
   "captionW": 91
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
   "x": 1290,
   "y": 1046,
   "captionSide": "below",
   "captionW": 116
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
   "x": 1150,
   "y": 1150,
   "captionSide": "below",
   "captionW": 116
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
   "x": 2414,
   "y": 1150,
   "captionSide": "below",
   "captionW": 99
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
   "x": 2554,
   "y": 1150,
   "captionSide": "below",
   "captionW": 114
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
   "x": 2694,
   "y": 1150,
   "captionSide": "below",
   "captionW": 83
  }
 ],
 "edges": [
  {
   "from": "theme-steed",
   "to": "feat-5885",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     4272,
     0
    ],
    [
     4272,
     110
    ],
    [
     4342,
     110
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
   "from": "theme-cause",
   "to": "feat-5891",
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
   "from": "theme-faith",
   "to": "feat-5883",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     3256,
     0
    ],
    [
     3256,
     81
    ],
    [
     3956,
     81
    ],
    [
     3956,
     110
    ],
    [
     4026,
     110
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
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     344,
     81
    ],
    [
     344,
     110
    ],
    [
     414,
     110
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
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     484,
     81
    ],
    [
     484,
     110
    ],
    [
     554,
     110
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
     2168,
     0
    ],
    [
     2168,
     110
    ],
    [
     2238,
     110
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
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     624,
     81
    ],
    [
     624,
     110
    ],
    [
     694,
     110
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
     3256,
     0
    ],
    [
     3256,
     81
    ],
    [
     4096,
     81
    ],
    [
     4096,
     110
    ],
    [
     4166,
     110
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
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     764,
     81
    ],
    [
     764,
     110
    ],
    [
     834,
     110
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
     64,
     0
    ],
    [
     64,
     81
    ],
    [
     904,
     81
    ],
    [
     904,
     110
    ],
    [
     974,
     110
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
     3256,
     0
    ],
    [
     3256,
     110
    ],
    [
     3326,
     110
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
     3256,
     0
    ],
    [
     3256,
     185
    ],
    [
     3396,
     185
    ],
    [
     3396,
     214
    ],
    [
     3466,
     214
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
     3256,
     0
    ],
    [
     3256,
     185
    ],
    [
     3536,
     185
    ],
    [
     3536,
     214
    ],
    [
     3606,
     214
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
     3256,
     0
    ],
    [
     3256,
     214
    ],
    [
     3326,
     214
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
     3256,
     0
    ],
    [
     3256,
     185
    ],
    [
     3676,
     185
    ],
    [
     3676,
     214
    ],
    [
     3746,
     214
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
     3256,
     0
    ],
    [
     3256,
     185
    ],
    [
     3816,
     185
    ],
    [
     3816,
     214
    ],
    [
     3886,
     214
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
     1396,
     0
    ],
    [
     1396,
     318
    ],
    [
     1466,
     318
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
     1396,
     0
    ],
    [
     1396,
     289
    ],
    [
     1536,
     289
    ],
    [
     1536,
     318
    ],
    [
     1606,
     318
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
     2800,
     0
    ],
    [
     2800,
     318
    ],
    [
     2870,
     318
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
     2800,
     0
    ],
    [
     2800,
     289
    ],
    [
     3080,
     289
    ],
    [
     3080,
     318
    ],
    [
     3150,
     318
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
     2800,
     0
    ],
    [
     2800,
     289
    ],
    [
     2940,
     289
    ],
    [
     2940,
     318
    ],
    [
     3010,
     318
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     318
    ],
    [
     4342,
     318
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     393
    ],
    [
     4552,
     393
    ],
    [
     4552,
     422
    ],
    [
     4622,
     422
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
     1852,
     0
    ],
    [
     1852,
     422
    ],
    [
     1922,
     422
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
     1396,
     0
    ],
    [
     1396,
     422
    ],
    [
     1466,
     422
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
     1852,
     0
    ],
    [
     1852,
     393
    ],
    [
     1992,
     393
    ],
    [
     1992,
     422
    ],
    [
     2062,
     422
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
     2344,
     0
    ],
    [
     2344,
     393
    ],
    [
     2624,
     393
    ],
    [
     2624,
     422
    ],
    [
     2694,
     422
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
     2168,
     0
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
   "from": "theme-blessing",
   "to": "feat-5907",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     2344,
     0
    ],
    [
     2344,
     526
    ],
    [
     2414,
     526
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     526
    ],
    [
     4342,
     526
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
     4026,
     110
    ],
    [
     4096,
     110
    ],
    [
     4096,
     526
    ],
    [
     4026,
     526
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
     2870,
     318
    ],
    [
     2940,
     318
    ],
    [
     2940,
     526
    ],
    [
     2870,
     526
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
     3150,
     318
    ],
    [
     3220,
     318
    ],
    [
     3220,
     526
    ],
    [
     3150,
     526
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
     3010,
     318
    ],
    [
     3080,
     318
    ],
    [
     3080,
     526
    ],
    [
     3010,
     526
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
     1080,
     0
    ],
    [
     1080,
     526
    ],
    [
     1150,
     526
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
     1080,
     0
    ],
    [
     1080,
     497
    ],
    [
     1220,
     497
    ],
    [
     1220,
     526
    ],
    [
     1290,
     526
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     526
    ],
    [
     4482,
     526
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
     4622,
     422
    ],
    [
     4692,
     422
    ],
    [
     4692,
     630
    ],
    [
     4762,
     630
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
     2344,
     0
    ],
    [
     2344,
     630
    ],
    [
     2414,
     630
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
     2344,
     0
    ],
    [
     2344,
     601
    ],
    [
     2484,
     601
    ],
    [
     2484,
     630
    ],
    [
     2554,
     630
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
     2694,
     422
    ],
    [
     2764,
     422
    ],
    [
     2764,
     630
    ],
    [
     2694,
     630
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
     1396,
     0
    ],
    [
     1396,
     734
    ],
    [
     1466,
     734
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
     64,
     0
    ],
    [
     64,
     705
    ],
    [
     204,
     705
    ],
    [
     204,
     734
    ],
    [
     274,
     734
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     734
    ],
    [
     4342,
     734
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
     2168,
     0
    ],
    [
     2168,
     734
    ],
    [
     2238,
     734
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
     3010,
     318
    ],
    [
     3080,
     318
    ],
    [
     3080,
     734
    ],
    [
     3010,
     734
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
     4342,
     110
    ],
    [
     4412,
     110
    ],
    [
     4412,
     734
    ],
    [
     4482,
     734
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
     3326,
     214
    ],
    [
     3396,
     214
    ],
    [
     3396,
     734
    ],
    [
     3326,
     734
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
     1852,
     0
    ],
    [
     1852,
     734
    ],
    [
     1922,
     734
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
     2800,
     0
    ],
    [
     2800,
     734
    ],
    [
     2870,
     734
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
   "from": "theme-aura",
   "to": "feat-5920",
   "kind": "theme",
   "primary": true,
   "points": [
    [
     1396,
     0
    ],
    [
     1396,
     838
    ],
    [
     1466,
     838
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
     1396,
     0
    ],
    [
     1396,
     809
    ],
    [
     1536,
     809
    ],
    [
     1536,
     838
    ],
    [
     1606,
     838
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
     1396,
     0
    ],
    [
     1396,
     809
    ],
    [
     1676,
     809
    ],
    [
     1676,
     838
    ],
    [
     1746,
     838
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
     1852,
     0
    ],
    [
     1852,
     838
    ],
    [
     1922,
     838
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
     1852,
     0
    ],
    [
     1852,
     809
    ],
    [
     1992,
     809
    ],
    [
     1992,
     838
    ],
    [
     2062,
     838
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
     274,
     734
    ],
    [
     344,
     734
    ],
    [
     344,
     942
    ],
    [
     274,
     942
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
   "from": "feat-5908",
   "to": "feat-5923",
   "kind": "req",
   "primary": true,
   "points": [
    [
     4762,
     630
    ],
    [
     4832,
     630
    ],
    [
     4832,
     942
    ],
    [
     4762,
     942
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
     2694,
     422
    ],
    [
     2764,
     422
    ],
    [
     2764,
     942
    ],
    [
     2694,
     942
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
     2800,
     0
    ],
    [
     2800,
     1046
    ],
    [
     2870,
     1046
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
     64,
     0
    ],
    [
     64,
     1046
    ],
    [
     134,
     1046
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
     3010,
     318
    ],
    [
     3080,
     318
    ],
    [
     3080,
     1046
    ],
    [
     3010,
     1046
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
     4166,
     110
    ],
    [
     4236,
     110
    ],
    [
     4236,
     1046
    ],
    [
     4166,
     1046
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
     1080,
     0
    ],
    [
     1080,
     1046
    ],
    [
     1150,
     1046
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
     1080,
     0
    ],
    [
     1080,
     1017
    ],
    [
     1220,
     1017
    ],
    [
     1220,
     1046
    ],
    [
     1290,
     1046
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
     1080,
     0
    ],
    [
     1080,
     1150
    ],
    [
     1150,
     1150
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
     2344,
     0
    ],
    [
     2344,
     1150
    ],
    [
     2414,
     1150
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
     2344,
     0
    ],
    [
     2344,
     1121
    ],
    [
     2484,
     1121
    ],
    [
     2484,
     1150
    ],
    [
     2554,
     1150
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
     2344,
     0
    ],
    [
     2344,
     1121
    ],
    [
     2624,
     1121
    ],
    [
     2624,
     1150
    ],
    [
     2694,
     1150
    ]
   ]
  }
 ]
};
