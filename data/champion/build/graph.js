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
   "minX": -2510,
   "maxX": 2510,
   "minY": -1690,
   "maxY": 1580
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
   "x": -1400,
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
   "x": -1890,
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
   "x": 1400,
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
   "x": -120,
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
   "x": 960,
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
   "x": 1290,
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
   "x": -50,
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
   "x": -560,
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
   "x": 520,
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
   "x": 1390,
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
   "x": -1500,
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
   "x": -1300,
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
   "x": -550,
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
   "x": -1700,
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
   "x": -1100,
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
   "x": 1060,
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
   "x": -1900,
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
   "x": 850,
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
   "x": -900,
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
   "x": -2100,
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
   "x": -150,
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
   "x": 50,
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
   "x": -150,
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
   "x": 450,
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
   "x": 250,
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
   "x": -350,
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
   "x": -20,
   "y": -560,
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
   "x": -220,
   "y": -560,
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
   "x": -1590,
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
   "x": -2190,
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
   "x": -1190,
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
   "x": 1590,
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
   "x": 1990,
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
   "x": 620,
   "y": -690,
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
   "x": -20,
   "y": -690,
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
   "x": 420,
   "y": -690,
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
   "x": 1900,
   "y": -690,
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
   "x": 860,
   "y": -820,
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
   "x": 1300,
   "y": -820,
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
   "x": 1590,
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
   "x": -750,
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
   "x": -1390,
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
   "x": -2390,
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
   "x": -990,
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
   "x": -460,
   "y": -820,
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
   "x": -660,
   "y": -820,
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
   "x": 1790,
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
   "x": 2190,
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
   "x": 1500,
   "y": -950,
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
   "x": 1300,
   "y": -950,
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
   "x": 2100,
   "y": -950,
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
   "x": -220,
   "y": -1080,
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
   "x": -1100,
   "y": -1080,
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
   "x": 1590,
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
   "x": 1060,
   "y": -1080,
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
   "x": -990,
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
   "x": 1790,
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
   "x": 650,
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
   "x": 620,
   "y": -1080,
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
   "x": -1990,
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
   "x": -1300,
   "y": -1080,
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
   "x": -20,
   "y": -1210,
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
   "x": -220,
   "y": -1210,
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
   "x": 180,
   "y": -1210,
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
   "x": 420,
   "y": -1210,
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
   "x": 620,
   "y": -1210,
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
   "x": -900,
   "y": -1340,
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
   "x": -1500,
   "y": -1340,
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
   "x": 2390,
   "y": 1340,
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
   "x": 2100,
   "y": -1340,
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
   "x": -1790,
   "y": 1470,
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
   "x": -1300,
   "y": -1470,
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
   "x": -990,
   "y": 1470,
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
   "x": 1050,
   "y": 1470,
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
   "x": -460,
   "y": -1470,
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
   "x": -660,
   "y": -1470,
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
   "x": -460,
   "y": -1600,
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
   "x": 1500,
   "y": -1600,
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
   "x": 1300,
   "y": -1600,
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
   "x": 1700,
   "y": -1600,
   "captionSide": "below",
   "captionW": 116
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
     -1400,
     -190
    ],
    [
     -1400,
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
     -1890,
     190
    ],
    [
     -1890,
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
     1400,
     -190
    ],
    [
     1400,
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
     -120,
     -190
    ],
    [
     -120,
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
     960,
     -190
    ],
    [
     960,
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
     1290,
     190
    ],
    [
     1290,
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
     -50,
     190
    ],
    [
     -50,
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
     -560,
     -190
    ],
    [
     -560,
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
     520,
     -190
    ],
    [
     520,
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
     1290,
     300
    ],
    [
     1290,
     430
    ],
    [
     1390,
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
     -1400,
     -300
    ],
    [
     -1400,
     -430
    ],
    [
     -1500,
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
     -1400,
     -300
    ],
    [
     -1400,
     -430
    ],
    [
     -1300,
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
     -50,
     300
    ],
    [
     -50,
     390
    ],
    [
     -450,
     390
    ],
    [
     -450,
     430
    ],
    [
     -550,
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
     -1400,
     -300
    ],
    [
     -1400,
     -470
    ],
    [
     -1600,
     -470
    ],
    [
     -1600,
     -430
    ],
    [
     -1700,
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
     -1400,
     -300
    ],
    [
     -1400,
     -470
    ],
    [
     -1200,
     -470
    ],
    [
     -1200,
     -430
    ],
    [
     -1100,
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
     960,
     -300
    ],
    [
     960,
     -430
    ],
    [
     1060,
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
     -1400,
     -300
    ],
    [
     -1400,
     -470
    ],
    [
     -1800,
     -470
    ],
    [
     -1800,
     -430
    ],
    [
     -1900,
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
     -50,
     300
    ],
    [
     -50,
     390
    ],
    [
     750,
     390
    ],
    [
     750,
     430
    ],
    [
     850,
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
     -1400,
     -300
    ],
    [
     -1400,
     -470
    ],
    [
     -1000,
     -470
    ],
    [
     -1000,
     -430
    ],
    [
     -900,
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
     -1400,
     -300
    ],
    [
     -1400,
     -470
    ],
    [
     -2000,
     -470
    ],
    [
     -2000,
     -430
    ],
    [
     -2100,
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
     -50,
     300
    ],
    [
     -50,
     430
    ],
    [
     -150,
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
     -50,
     300
    ],
    [
     -50,
     560
    ],
    [
     50,
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
     -50,
     300
    ],
    [
     -50,
     560
    ],
    [
     -150,
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
     -50,
     300
    ],
    [
     -50,
     520
    ],
    [
     350,
     520
    ],
    [
     350,
     560
    ],
    [
     450,
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
     -50,
     300
    ],
    [
     -50,
     520
    ],
    [
     150,
     520
    ],
    [
     150,
     560
    ],
    [
     250,
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
     -50,
     300
    ],
    [
     -50,
     520
    ],
    [
     -250,
     520
    ],
    [
     -250,
     560
    ],
    [
     -350,
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
     -120,
     -300
    ],
    [
     -120,
     -560
    ],
    [
     -20,
     -560
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
     -120,
     -300
    ],
    [
     -120,
     -560
    ],
    [
     -220,
     -560
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
     -1890,
     300
    ],
    [
     -1890,
     650
    ],
    [
     -1690,
     650
    ],
    [
     -1690,
     690
    ],
    [
     -1590,
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
     -1890,
     300
    ],
    [
     -1890,
     650
    ],
    [
     -2090,
     650
    ],
    [
     -2090,
     690
    ],
    [
     -2190,
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
     -1890,
     300
    ],
    [
     -1890,
     520
    ],
    [
     -1290,
     520
    ],
    [
     -1290,
     690
    ],
    [
     -1190,
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     690
    ],
    [
     1590,
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     780
    ],
    [
     1890,
     780
    ],
    [
     1890,
     820
    ],
    [
     1990,
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
     520,
     -300
    ],
    [
     520,
     -690
    ],
    [
     620,
     -690
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
     -120,
     -300
    ],
    [
     -120,
     -690
    ],
    [
     -20,
     -690
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
     520,
     -300
    ],
    [
     520,
     -690
    ],
    [
     420,
     -690
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
     1400,
     -300
    ],
    [
     1400,
     -730
    ],
    [
     1800,
     -730
    ],
    [
     1800,
     -690
    ],
    [
     1900,
     -690
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
     960,
     -300
    ],
    [
     960,
     -820
    ],
    [
     860,
     -820
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
     1400,
     -300
    ],
    [
     1400,
     -820
    ],
    [
     1300,
     -820
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     950
    ],
    [
     1590,
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
     -550,
     430
    ],
    [
     -650,
     430
    ],
    [
     -650,
     950
    ],
    [
     -750,
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
     -1590,
     690
    ],
    [
     -1490,
     690
    ],
    [
     -1490,
     950
    ],
    [
     -1390,
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
     -2190,
     690
    ],
    [
     -2290,
     690
    ],
    [
     -2290,
     950
    ],
    [
     -2390,
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
     -1190,
     690
    ],
    [
     -1090,
     690
    ],
    [
     -1090,
     950
    ],
    [
     -990,
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
     -560,
     -300
    ],
    [
     -560,
     -820
    ],
    [
     -460,
     -820
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
     -560,
     -300
    ],
    [
     -560,
     -820
    ],
    [
     -660,
     -820
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     910
    ],
    [
     1690,
     910
    ],
    [
     1690,
     950
    ],
    [
     1790,
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
     1990,
     820
    ],
    [
     2090,
     820
    ],
    [
     2090,
     1080
    ],
    [
     2190,
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
     1400,
     -300
    ],
    [
     1400,
     -950
    ],
    [
     1500,
     -950
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
     1400,
     -300
    ],
    [
     1400,
     -950
    ],
    [
     1300,
     -950
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
     1900,
     -690
    ],
    [
     2000,
     -690
    ],
    [
     2000,
     -950
    ],
    [
     2100,
     -950
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
     -120,
     -300
    ],
    [
     -120,
     -1080
    ],
    [
     -220,
     -1080
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
     -1400,
     -300
    ],
    [
     -1400,
     -1120
    ],
    [
     -1200,
     -1120
    ],
    [
     -1200,
     -1080
    ],
    [
     -1100,
     -1080
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     1210
    ],
    [
     1590,
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
     960,
     -300
    ],
    [
     960,
     -1080
    ],
    [
     1060,
     -1080
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
     -1190,
     690
    ],
    [
     -1090,
     690
    ],
    [
     -1090,
     1210
    ],
    [
     -990,
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
     1390,
     430
    ],
    [
     1490,
     430
    ],
    [
     1490,
     1170
    ],
    [
     1690,
     1170
    ],
    [
     1690,
     1210
    ],
    [
     1790,
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
     450,
     560
    ],
    [
     550,
     560
    ],
    [
     550,
     1210
    ],
    [
     650,
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
     520,
     -300
    ],
    [
     520,
     -1080
    ],
    [
     620,
     -1080
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
     -1890,
     300
    ],
    [
     -1890,
     1210
    ],
    [
     -1990,
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
     -1400,
     -300
    ],
    [
     -1400,
     -1080
    ],
    [
     -1300,
     -1080
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
     -120,
     -300
    ],
    [
     -120,
     -1210
    ],
    [
     -20,
     -1210
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
     -120,
     -300
    ],
    [
     -120,
     -1210
    ],
    [
     -220,
     -1210
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
     -120,
     -300
    ],
    [
     -120,
     -1250
    ],
    [
     80,
     -1250
    ],
    [
     80,
     -1210
    ],
    [
     180,
     -1210
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
     520,
     -300
    ],
    [
     520,
     -1210
    ],
    [
     420,
     -1210
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
     520,
     -300
    ],
    [
     520,
     -1210
    ],
    [
     620,
     -1210
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
     -1100,
     -1080
    ],
    [
     -1000,
     -1080
    ],
    [
     -1000,
     -1340
    ],
    [
     -900,
     -1340
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
     -1400,
     -300
    ],
    [
     -1400,
     -1340
    ],
    [
     -1500,
     -1340
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
     2190,
     1080
    ],
    [
     2290,
     1080
    ],
    [
     2290,
     1340
    ],
    [
     2390,
     1340
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
     1900,
     -690
    ],
    [
     2000,
     -690
    ],
    [
     2000,
     -1340
    ],
    [
     2100,
     -1340
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
     -1890,
     300
    ],
    [
     -1890,
     1470
    ],
    [
     -1790,
     1470
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
     -1400,
     -300
    ],
    [
     -1400,
     -1470
    ],
    [
     -1300,
     -1470
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
     -1190,
     690
    ],
    [
     -1090,
     690
    ],
    [
     -1090,
     1470
    ],
    [
     -990,
     1470
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
     850,
     430
    ],
    [
     950,
     430
    ],
    [
     950,
     1470
    ],
    [
     1050,
     1470
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
     -560,
     -300
    ],
    [
     -560,
     -1470
    ],
    [
     -460,
     -1470
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
     -560,
     -300
    ],
    [
     -560,
     -1470
    ],
    [
     -660,
     -1470
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
     -560,
     -300
    ],
    [
     -560,
     -1600
    ],
    [
     -460,
     -1600
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
     1400,
     -300
    ],
    [
     1400,
     -1600
    ],
    [
     1500,
     -1600
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
     1400,
     -300
    ],
    [
     1400,
     -1600
    ],
    [
     1300,
     -1600
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
     1400,
     -300
    ],
    [
     1400,
     -1640
    ],
    [
     1600,
     -1640
    ],
    [
     1600,
     -1600
    ],
    [
     1700,
     -1600
    ]
   ]
  }
 ]
};
