// Сгенерировано tools/fetch-wizard-aon.mjs — не редактируйте вручную.
// Источник: https://2e.aonprd.com/Classes.aspx?ID=39 (2026-11-22T17:43:14.590Z)
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
   "STEP": 250,
   "ROW": 120,
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
   "minX": -1042,
   "maxX": 1043,
   "minY": -1470,
   "maxY": 890
  }
 },
 "nodes": [
  {
   "image": "wizard/Class_Wizard_Badge_Icon.png",
   "id": "root",
   "kind": "root",
   "name": "Wizard",
   "nameEn": "Wizard",
   "level": 0,
   "url": "https://2e.aonprd.com/Classes.aspx?ID=39",
   "html": "A scholar who masters magic through study and experiment. Pick an arcane school and an arcane thesis above, then your wizard feats.<hr><h4 class=\"sub-ability\">Arcane Bond</h4><p>You place some of your magical power in a bonded item. Each day when you prepare your spells, you can designate a single item you own as your bonded item. This is typically an item associated with spellcasting, such as a wand, ring, or staff, but you are free to designate a weapon or other item. You gain the Drain Bonded Item free action.</p><h4 class=\"sub-ability\">Drain Bonded Item</h4><p>You expend the magical power stored in your bonded item. During the current turn, you can cast one spell you prepared today and already cast, without spending a spell slot. You must still Cast the Spell and meet the spell's other requirements.</p>",
   "x": 0,
   "y": 0
  },
  {
   "image": null,
   "id": "group-school",
   "kind": "group",
   "name": "Arcane School",
   "level": 0,
   "html": "<p>Most wizards acquire their knowledge of spells from a formal educational institution, such as the Arcanamirium or the Magaambya. At 1st level, you choose your <a href=\"https://2e.aonprd.com/ArcaneSchools.aspx\">arcane school</a>, which grants you magical abilities.</p><p>You gain additional spells and spell slots from the curriculum taught at the school you attended. Some wizards follow the school of unified magical theory, which attempts to forge a new school by studying independently and drawing information from a multitude of texts and tutors. Though a wizard with this approach lacks the focus of formal training, they have greater flexibility.</p>",
   "hint": "Pick one school. The School of Unified Magical Theory grants an extra 1st-level wizard feat."
  },
  {
   "image": null,
   "id": "school-red-mantis-magic-school",
   "kind": "option",
   "group": "group-school",
   "name": "Red Mantis Magic School",
   "short": "Red Mantis Magic School",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=23",
   "html": "<p>While any thug can commit a murder, proper assassination requires finesse and guile. Deep within the Crimson Citadel, the Red Mantis assassins have developed a specific selection of spells they teach to all magically capable members. These spells complement the assassins’ clandestine and deadly methods.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1528\">Figment</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1546\">Gouging Claw</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1531\">Fleet Step</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1568\">Illusory Disguise</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1709\">Sure Strike</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1577\">Invisibility</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1606\">Mist</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1465\">Clairaudience</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1622\">Paralyze</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1466\">Clairvoyance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1724\">Translocate</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1551\">Hallucination</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1570\">Illusory Scene</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1605\">Mislead</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1630\">Phantasmal Calamity</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1505\">Duplicate Foe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1640\">Project Image</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1490\">Disappearance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1734\">Unrelenting Observation</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1629\">Phantasmagoria</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2130\">Debilitating Terror</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2131\">Shroud of the Mantis</a></li></ul>",
   "source": "Prey for Death",
   "requires": []
  },
  {
   "image": null,
   "id": "school-ars-grammatica",
   "kind": "option",
   "group": "group-school",
   "name": "School of Ars Grammatica",
   "short": "Ars Grammatica",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=16",
   "html": "<p>Runes and wards, numbers and letters—they underpin all magic, making them the logical subject for a wizard who studies fundamental forces. Perhaps you studied at the Pathfinder Society's School of Spells or a similar institution, but whether you're lacing your words with magic to compel others, casting wards around your workshop, or destabilizing the very structure of an opponent's spells, you know this unassuming school carries elegant power.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1598\">Message</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1673\">Sigil</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1470\">Command</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1491\">Disguise Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1657\">Runic Body</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1658\">Runic Weapon</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1493\">Dispel Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1723\">Translate</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1516\">Enthrall</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1739\">Veil of Privacy</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1494\">Dispelling Globe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1693\">Suggestion</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1665\">Sending</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1728\">Truespeech</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1650\">Repulsion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1683\">Spellwrack</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1472\">Contingency</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1635\">Planar Seal</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1734\">Unrelenting Observation</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1488\">Detonate Magic</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1894\">Protective Wards</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1895\">Rune of Observation</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-battle-magic",
   "kind": "option",
   "group": "group-school",
   "name": "School of Battle Magic",
   "short": "Battle Magic",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=22",
   "html": "<p>Magic is power, and there are always those who will use power for the art of battle. You may have studied in the military of a nation of the brink of war—Cheliax and Andoran perhaps, or Geb and Nex. You summon whirling energies that can lay waste to both soldiers and armies, while being sure not to neglect arcane countermeasures for common tactical complications or the shields and defenses that keep combatants alive on the battlefield.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1671\">Shield</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1718\">Telekinetic Projectile</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1457\">Breathe Fire</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1536\">Force Barrage</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1611\">Mystic Armor</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1606\">Mist</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1651\">Resist Energy</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1506\">Earthbind</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1530\">Fireball</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1748\">Wall of Fire</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1758\">Weapon Storm</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1559\">Howling Blizzard</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1571\">Impaling Spike</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1462\">Chain Lightning</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1492\">Disintegrate</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1512\">Energy Aegis</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1726\">True Target</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1444\">Arctic Rift</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1484\">Desiccate</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1521\">Falling Stars</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1896\">Force Bolt</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1897\">Energy Absorption</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-breathtaking-influence",
   "kind": "option",
   "group": "group-school",
   "name": "School of Breathtaking Influence",
   "short": "Breathtaking Influence",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=31",
   "html": "<p>You have sway in powerful social circles and pride yourself on being able to predict and manipulate opponents. Less scrupulous academies openly teach this curriculum to aspiring politicians, while other colleges frame it as the study of countering mental manipulation. These spells are staples in Quantium, where ambition and ruthlessness are measures of success.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1482\">Daze</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2748\">Infectious Enthusiasm</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1470\">Command</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1524\">Fear</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1675\">Sleep</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1454\">Blood Vendetta</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2787\">Phantom Crowd</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1516\">Enthrall</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2769\">Mind of Menace</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1471\">Confusion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1620\">Outcast's Curse</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1692\">Subconscious Suggestion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1757\">Wave of Despair</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1501\">Dominate</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1614\">Never Mind</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1472\">Contingency</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2796\">Puppet Strings</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1988\">Dream Council</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1556\">Hidden Mind</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2036\">Telepathic Demand</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2920\">Appeal to Authority</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2921\">Hot Air</a></li></ul>",
   "source": "Impossible Magic",
   "requires": []
  },
  {
   "image": null,
   "id": "school-civic-wizardry",
   "kind": "option",
   "group": "group-school",
   "name": "School of Civic Wizardry",
   "short": "Civic Wizardry",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=18",
   "html": "<p>Whether you studied in Manaket's Occularium or the Academy of Applied Magic, you learned that the fruits of arcane studies—like any other field—should ultimately help the common citizen. You've learned the humble art of construction, of finding lost people and things, of moving speedily among buildings and moats—yet these same arts can be turned to demolition, and the constructs you animate to build bridges can just as easily tear them down.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1639\">Prestidigitation</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1646\">Read Aura</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1561\">Hydraulic Push</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1642\">Pummeling Rubble</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1696\">Summon Construct</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1653\">Revealing Light</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1756\">Water Walk</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1474\">Cozy Cabin</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1659\">Safe Passage</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1477\">Creation</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1732\">Unfettered Movement</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1473\">Control Water</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1751\">Wall of Stone</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1492\">Disintegrate</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1749\">Wall of Force</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1634\">Planar Palace</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1652\">Retrocognition</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1507\">Earthquake</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1633\">Pinpoint</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1537\">Foresight</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1900\">Earthworks</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1901\">Community Restoration</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-corentyn-armada",
   "kind": "option",
   "group": "group-school",
   "name": "School of Corentyn Armada",
   "short": "Corentyn Armada",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=35",
   "html": "<p>The Corentyn armada is well-known for their fierceness in battle, a reputation owed in large part to their naval wizards, each an expert in both tactics and torrential magic. Many such wizards are assigned to a ship in the armada, and they often take an apprentice along with them for the sea voyage.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1598\">Message</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2031\">Spout</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1550\">Gust of Wind</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1561\">Hydraulic Push</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2934\">Rude Awakening</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1755\">Water Breathing</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1756\">Water Walk</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1984\">Crashing Wave</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2001\">Ice Storm</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1719\">Telepathy</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1473\">Control Water</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2936\">Searing Rain</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1462\">Chain Lightning</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1727\">Truesight</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1512\">Energy Aegis</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1640\">Project Image</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1444\">Arctic Rift</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1484\">Desiccate</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1759\">Wrathful Storm</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2938\">Control Currents</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2939\">Choking Fog</a></li></ul>",
   "source": "Cheliax, Infernal Inheritance",
   "requires": []
  },
  {
   "image": null,
   "id": "school-gates",
   "kind": "option",
   "group": "group-school",
   "name": "School of Gates",
   "short": "Gates",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=28",
   "html": "<p><i><a href=\"https://2e.aonprd.com/pathfinder-society\"><b>PFS Note</b></a> Characters from Kyonin have access to this option.</i></p><p>Some are content to stay in place and let the world shape them, but you prefer to move at your own pace. You’ve studied the ancient aiudara and other structures to learn the magic of transposition, using your knowledge to move across great distances and even planes. With knowledge as your path and magic as your key, there’s no door you can’t open, and no world you won’t explore.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1598\">Message</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1715\">Telekinetic Hand</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1531\">Fleet Step</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1589\">Lock</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2037\">Thoughtful Gift</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1581\">Knock</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2486\">Warping Pull</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2481\">Echo Jump</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2485\">Trade Items</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1532\">Flicker</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1724\">Translocate</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2483\">King's Castle</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1591\">Magic Passage</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1978\">Collective Transposition</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1720\">Teleport</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1576\">Interplanar Teleport</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1635\">Planar Seal</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2484\">Sudden Transposition</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2482\">Forest of Gates</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2479\">Friendly Push</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2480\">Rapid Retreat</a></li></ul>",
   "source": "Shining Kingdoms",
   "requires": []
  },
  {
   "image": null,
   "id": "school-kalistrade",
   "kind": "option",
   "group": "group-school",
   "name": "School of Kalistrade",
   "short": "Kalistrade",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=27",
   "html": "<p>Power and money are closely intertwined, and you recognize the potential for magic to assist in your pursuit of wealth and influence. Though you might study this school without joining the <a href=\"https://2e.aonprd.com/Deities.aspx?ID=23\">Prophets of Kalistrade</a>, most who do so are either a part of the organization or local to Kerse and therefore used to the customs and culture of the Kalistocrats. You deploy magic to help you see through the illusions and trickery of others. At the same time, you push boundaries and exploit loopholes to get ahead of your competitors.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1639\">Prestidigitation</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1646\">Read Aura</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1439\">Alarm</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1463\">Charm</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1579\">Item Facade</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1543\">Ghostly Carrier</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1577\">Invisibility</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1465\">Clairaudience</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1739\">Veil of Privacy</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1620\">Outcast's Curse</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1693\">Suggestion</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2002\">Imaginary Lockbox</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1692\">Subconscious Suggestion</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1650\">Repulsion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1662\">Scrying</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1640\">Project Image</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1652\">Retrocognition</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1490\">Disappearance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1556\">Hidden Mind</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2018\">Resplendent Mansion</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2465\">Unexpected Windfall</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2466\">Capital Dividend</a></li></ul>",
   "source": "Shining Kingdoms",
   "requires": []
  },
  {
   "image": null,
   "id": "school-keen-inquiry",
   "kind": "option",
   "group": "group-school",
   "name": "School of Keen Inquiry",
   "short": "Keen Inquiry",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=32",
   "html": "<p>You’re a scholar of truth, seeking knowledge about the nature of existence and events past, present, and future. Whether you share or obfuscate that truth—best reserve judgment until you know what you’re working with. Quantium’s elite claim agents of Her Most Keen Eye, Nex’s network of spies, developed this curriculum, but it’s a staple in many politically oriented colleges.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1485\">Detect Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1673\">Sigil</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1491\">Disguise Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1568\">Illusory Disguise</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1603\">Mindlink</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1581\">Knock</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1663\">See the Unseen</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1465\">Clairaudience</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1588\">Locate</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1466\">Clairvoyance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1487\">Detect Scrying</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1601\">Mind Probe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1661\">Scouting Eye</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1662\">Scrying</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1727\">Truesight</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1652\">Retrocognition</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1726\">True Target</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1490\">Disappearance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1633\">Pinpoint</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1537\">Foresight</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2922\">Fact Check</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2923\">Unsettling Perspective</a></li></ul>",
   "source": "Impossible Magic",
   "requires": []
  },
  {
   "image": null,
   "id": "school-magical-technologies",
   "kind": "option",
   "group": "group-school",
   "name": "School of Magical Technologies",
   "short": "Magical Technologies",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=29",
   "html": "<p>At the height of ancient Azlant, the study of magical technologies—better known as magitech—was considered among the most prestigious of arcane specializations, and practitioners were both well regarded and well paid. While some magitech specialists trained in academies or as apprentices, others studied at religious cloisters dedicated to the worship of <a href=\"https://2e.aonprd.com/Deities.aspx?ID=404\">Amaznen</a>, a now-dead god of invention and <a href=\"https://2e.aonprd.com/Domains.aspx?ID=82\">magic</a>. Today, practitioners are more likely to learn from scraps of ancient spellbooks, forgotten lore unearthed in Azlanti ruins, or from a time‑displaced graduate like Anoreth Zorillen. Modern magitech schools exist today, divorced from their ancient Azlanti origins but no less prestigious, including the famed Clockwork Cathedral in Absalom and temples of <a href=\"https://2e.aonprd.com/Deities.aspx?ID=333\">Brigh</a>, goddess of clockwork and invention.</p><p>As a student of magical technologies, you’ve learned the art of fusing magic with mundane technology to create something truly unique.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1375\">Needle Darts</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1671\">Shield</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1597\">Mending</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1658\">Runic Weapon</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1696\">Summon Construct</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1964\">Animated Assault</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1987\">Dismantle</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2026\">Shrink Item</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1416\">Wooden Double</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1477\">Creation</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1758\">Weapon Storm</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1571\">Impaling Spike</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1751\">Wall of Stone</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1370\">Field of Razors</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1628\">Petrify</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1365\">Beheading Buzz Saw</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2006\">Lifewood Cage</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1369\">Ferrous Form</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2018\">Resplendent Mansion</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2488\">Augmented Body</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2487\">Conjured Clockwork</a></li></ul>",
   "source": "Pathfinder #215: To Blot Out the Sun",
   "requires": []
  },
  {
   "image": null,
   "id": "school-mentalism",
   "kind": "option",
   "group": "group-school",
   "name": "School of Mentalism",
   "short": "Mentalism",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=19",
   "html": "<p>As a scholar, you know all too well the importance of a sound mind. Thus, you attended a school—like the Farseer Tower or the Stone of the Seers—that taught the arts of befuddling lesser minds with figments and illusions or implanted sensations and memories.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1482\">Daze</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1528\">Figment</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1500\">Dizzying Colors</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1675\">Sleep</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1709\">Sure Strike</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1567\">Illusory Creature</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1691\">Stupefy</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1503\">Dream Message</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1602\">Mind Reading</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1615\">Nightmare</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1742\">Vision of Death</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1551\">Hallucination</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1570\">Illusory Scene</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1614\">Never Mind</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1630\">Phantasmal Calamity</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1640\">Project Image</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1754\">Warp Mind</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1490\">Disappearance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1730\">Uncontrollable Dance</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1629\">Phantasmagoria</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1902\">Charming Push</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1903\">Invisibility Cloak</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-nexian-spaces",
   "kind": "option",
   "group": "group-school",
   "name": "School of Nexian Spaces",
   "short": "Nexian Spaces",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=33",
   "html": "<p>Whether your goal is immortality or creating a world with every detail tailored to your liking, retracing Nex’s experiments with demiplanes is the road to achieving your desires. Your formal learning starts with reshaping your current reality and drawing power from other planes of existence. You graduate to creating extraplanar spaces and traveling between planes, making time and space yours to mold like clay.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2576\">Phase Bolt</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2583\">Warp Step</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1439\">Alarm</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1627\">Pet Cache</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2037\">Thoughtful Gift</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2676\">Dimensional Drop</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2857\">Vanish Weapon</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1474\">Cozy Cabin</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2698\">Far Reach</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1532\">Flicker</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1587\">Liminal Doorway</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1448\">Banishment</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2822\">Space Fold Gate</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1978\">Collective Transposition</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2794\">Proximal Shift</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1576\">Interplanar Teleport</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1634\">Planar Palace</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2828\">Stars of Another Sky</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2018\">Resplendent Mansion</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2924\">Extradimensional Cover</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2925\">Unbounded Sphere</a></li></ul>",
   "source": "Impossible Magic",
   "requires": []
  },
  {
   "image": null,
   "id": "school-protean-form",
   "kind": "option",
   "group": "group-school",
   "name": "School of Protean Form",
   "short": "Protean Form",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=20",
   "html": "<p>The uninitiated often think of wizards as cerebral, focused on their studies more than the body, yet your school of magic taught of the relationship between the two. Your magic, whether learned at a storied institution like Kintargo's Alabaster Academy or someplace more sinister, like the Fleshforges of Nex, focuses on the ways that living matter can be convinced into another shape for a time, allowing you to polymorph a seed into a vine, a human into a beast, or a harmless germ into a deadly toxin.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1546\">Gouging Claw</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1713\">Tangle Vine</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1580\">Jump</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1626\">Pest Form</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1684\">Spider Sting</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1514\">Enlarge</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1560\">Humanoid Form</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1525\">Feet to Fins</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1736\">Vampiric Feast</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1610\">Mountain Resilience</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1738\">Vapor Form</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1510\">Elemental Form</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1722\">Toxic Cloud</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1479\">Cursed Metamorphosis</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1628\">Petrify</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1505\">Duplicate Foe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1527\">Fiery Body</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1484\">Desiccate</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1608\">Monstrosity Form</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1599\">Metamorphosis</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1904\">Scramble Body</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1905\">Shifting Form</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-quantic-control",
   "kind": "option",
   "group": "group-school",
   "name": "School of Quantic Control",
   "short": "Quantic Control",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=34",
   "html": "<p>You’re an architect, but not merely of buildings. You call upon elemental forces to control the building blocks of reality itself, reshaping the environment and moving creatures like the world is a diorama for you to perfect. Your curriculum draws heavily upon the experience of the geniekin of Quantium’s Wish, who maintain the infrastructure of Nex’s capital in seeming defiance of physics itself.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1994\">Gale Blast</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2021\">Scatter Scree</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2663\">Cradle Aloft</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1542\">Gentle Landing</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1642\">Pummeling Rubble</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1987\">Dismantle</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2855\">Unrelenting Gravity</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2654\">Chosen Gravity</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2746\">Inertia Lock</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1981\">Containment</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2758\">Living Terrain</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1473\">Control Water</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1751\">Wall of Stone</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1650\">Repulsion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1749\">Wall of Force</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2750\">Infinitesimal Collapse Field</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1635\">Planar Seal</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1444\">Arctic Rift</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2684\">Earthbreaker Stride</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1572\">Implosion</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2926\">Circle of Weakness</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2927\">Quantic Dampening</a></li></ul>",
   "source": "Impossible Magic",
   "requires": []
  },
  {
   "image": null,
   "id": "school-rooted-wisdom",
   "kind": "option",
   "group": "group-school",
   "name": "School of Rooted Wisdom",
   "short": "Rooted Wisdom",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=24",
   "html": "<p>You’ve studied at the Magaambya or under one of its traveling professors, learning the ancient magic of Golarion’s oldest academy. Your curriculum is self- directed, allowing you to choose a branch of study and personalize your learning. If you choose the School of Rooted Wisdom, you gain the below curriculum and school spells. This is your primary trunk of study, to which you add one of the following five secondary branches, granting you additional curriculum spells.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1485\">Detect Magic</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1439\">Alarm</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1493\">Dispel Magic</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1659\">Safe Passage</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1610\">Mountain Resilience</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1473\">Control Water</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1727\">Truesight</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1512\">Energy Aegis</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2303\">Halcyon Mists</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2304\">Call the Ten</a></li></ul>",
   "source": "Rival Academies",
   "requires": []
  },
  {
   "image": null,
   "id": "school-shadow-veils",
   "kind": "option",
   "group": "group-school",
   "name": "School of Shadow Veils",
   "short": "Shadow Veils",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=36",
   "html": "<p>You’ve received brutal instruction in shadow and illusion magic from the shadowcallers of the Duskhall.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1528\">Figment</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1539\">Frostbite</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1491\">Disguise Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2948\">Gloom Mantle</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1569\">Illusory Object</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1480\">Darkness</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1567\">Illusory Creature</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2812\">Shadow Projectile</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2025\">Shared Invisibility</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1587\">Liminal Doorway</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1604\">Mirage</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1666\">Shadow Blast</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1676\">Slither</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1605\">Mislead</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1630\">Phantasmal Calamity</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1595\">Mask of Terror</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2949\">Shadow Form</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1490\">Disappearance</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1629\">Phantasmagoria</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2950\">The Night Is Mine</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2951\">Tenebrous Freedom</a></li></ul>",
   "source": "Cheliax, Infernal Inheritance",
   "requires": []
  },
  {
   "image": null,
   "id": "school-thassilonian-rune-magic",
   "kind": "option",
   "group": "group-school",
   "name": "School of Thassilonian Rune Magic",
   "short": "Thassilonian Rune Magic",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=25",
   "html": "<p>This curriculum, taught at a few select academies in New Thassilon, can be learned only by wizards with the <a href=\"https://2e.aonprd.com/Archetypes.aspx?ID=303\">runelord</a> class archetype. You have begun to study one of the seven runes of sin, granting you great power but at the cost of anathematic magic. All runelords gain the below curriculum and school spells. In addition, you must choose one of the seven sins to specialize in. You add your sin’s spells and initial school spells to your curriculum. The addictive nature of sin magic prevents you from using magic in ways aligned with other sins, represented by that sin’s anathema. Casting a sin spell never invokes the anathema of its school of sin.</p><p>Unlike other wizards, some of your curriculum spells may be spells that don’t typically appear on the arcane spell list (marked with an asterisk). You still cast these spells as arcane spells, the unifying knowledge of sin bridging the gap between disparate magics.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1485\">Detect Magic</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1673\">Sigil</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1611\">Mystic Armor</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1657\">Runic Body</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1658\">Runic Weapon</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1709\">Sure Strike</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1481\">Darkvision</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1663\">See the Unseen</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1465\">Clairaudience</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1739\">Veil of Privacy</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1466\">Clairvoyance</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1534\">Fly</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1601\">Mind Probe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1665\">Sending</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1662\">Scrying</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1727\">Truesight</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1472\">Contingency</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2027\">Spell Riposte</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1556\">Hidden Mind</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1734\">Unrelenting Observation</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1537\">Foresight</a></p><p><b>School Spells</b></p><ul><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2325\">Personal Runewell</a></li></ul>",
   "source": "Rival Academies",
   "requires": []
  },
  {
   "image": null,
   "id": "school-boundary",
   "kind": "option",
   "group": "group-school",
   "name": "School of the Boundary",
   "short": "Boundary",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=17",
   "html": "<p>Why use your magic to affect something as pedestrian as the physical world? Whether you studied at the College of Dimensional Studies in Katapesh or an underground school in haunted Ustalav, you've turned your magic past the Universe to the forces beyond, summoning spirits and shades, manipulating dimensions and planes, and treading in a place not meant for mortals.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1715\">Telekinetic Hand</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1745\">Void Warp</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1548\">Grim Tendrils</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1631\">Phantasmal Minion</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1706\">Summon Undead</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1480\">Darkness</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1663\">See the Unseen</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1449\">Bind Undead</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1544\">Ghostly Weapon</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1532\">Flicker</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1724\">Translocate</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1448\">Banishment</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1578\">Invoke Spirits</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1720\">Teleport</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1735\">Vampiric Exsanguination</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1508\">Eclipse Burst</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1576\">Interplanar Teleport</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1644\">Quandary</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1734\">Unrelenting Observation</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1596\">Massacre</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1898\">Fortify Summoning</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1899\">Spiral of Horrors</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "school-reclamation",
   "kind": "option",
   "group": "group-school",
   "name": "School of the Reclamation",
   "short": "Reclamation",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=26",
   "html": "<p>Whether it's been lost to war, abandoned during calamity, or simply buried by the ages, there is as much important knowledge to be found in the hidden corners of the world as in the schools and libraries of the academy. Your study of magic in the service of rediscovering lost knowledge for the Sarkoris Reclamation has taught you that much that was once lost can still be found, but only if someone is willing to seek it out and retrieve it. You've focused your magic on reaching the world's hidden and forgotten places, whether they are found in a distant ruin or the depths of a lost memory, and bringing their knowledge back to the surface—whatever the cost.</p><p><b>Curriculum</b></p><ul><li>Cantrips:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1715\">Telekinetic Hand</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1718\">Telekinetic Projectile</a></p><ul><li>1st:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1531\">Fleet Step</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1550\">Gust of Wind</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1597\">Mending</a></p><ul><li>2nd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1581\">Knock</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2295\">Mental Map</a></p><ul><li>3rd:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1588\">Locate</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2296\">Overwhelming Memory</a></p><ul><li>4th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2294\">Bridge of Vines</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1667\">Shape Stone</a></p><ul><li>5th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1601\">Mind Probe</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1661\">Scouting Eye</a></p><ul><li>6th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1727\">Truesight</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1749\">Wall of Force</a></p><ul><li>7th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=2297\">Restore Ground</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1652\">Retrocognition</a></p><ul><li>8th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1633\">Pinpoint</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1734\">Unrelenting Observation</a></p><ul><li>9th:</li></ul><p><a href=\"https://2e.aonprd.com/Spells.aspx?ID=1599\">Metamorphosis</a></p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2292\">Grasping Vine</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2293\">Unsettling Knowledge</a></li></ul>",
   "source": "Rival Academies",
   "requires": []
  },
  {
   "image": null,
   "id": "school-unified-magical-theory",
   "kind": "option",
   "group": "group-school",
   "name": "School of Unified Magical Theory",
   "short": "Unified Magical Theory",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneSchools.aspx?ID=21",
   "html": "<p>You eschew the idea that magic can be neatly expressed by the teachings of any single school or college, instead directing your self-study to pick up the best of every school of magic. In doing so, you'll find the truths that lie at the intersection of each school, coming closer to the ideal nature of arcane magic. One day, you'll uncover that single elegant theory detailing all magic (perhaps a theory bearing your name?), but until then, your studies continue.</p><p><b>No Curriculum</b> You don't have a set curriculum, and so you don't have curriculum spells and can't benefit from abilities that specifically affect them. Instead, you gain an additional 1st-level wizard class feat, and you add one 1st- rank spell of your choice to your spellbook to represent your diverse studies. Your studies into the very nature of magic itself have let you use it more efficiently—instead of using Drain Bonded Item only once per day, you can use it once per day for each rank of spell you can cast, recalling a spell of that rank each time.</p><p><b>School Spells</b></p><ul><li>Initial: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1906\">Hand of the Apprentice</a></li><li>Advanced: <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1907\">Interdisciplinary Incantation</a></li></ul>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "group-thesis",
   "kind": "group",
   "name": "Arcane Thesis",
   "level": 0,
   "html": "<p>During your studies to become a full-fledged wizard, you produced a thesis of unique magical research. You gain a special benefit depending on the topic of your thesis research. The arcane thesis topics presented in this book are below; your specific thesis probably has a much longer and more technical title like “_On the Methods of Spell Interpolation and the Genesis of a New Understanding of the Building Blocks of Magic_.”</p>",
   "hint": "Pick one thesis."
  },
  {
   "image": null,
   "id": "thesis-experimental-spellshaping",
   "kind": "option",
   "group": "group-thesis",
   "name": "Experimental Spellshaping",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneThesis.aspx?ID=6",
   "html": "<p>Your thesis posits that the magical practice of spellshaping can be realized more efficiently by altering variables and parameters as you cast, imitating the wizards of long ago who had to work out their own spells themselves. This allows you efficient access to various spellshape effects. You gain one 1st-level <a href=\"https://2e.aonprd.com/Traits.aspx?ID=513\">spellshape</a> wizard feat of your choice. Starting at 4th level, during your daily preparations, you can gain a spellshape wizard feat of your choice that has a level requirement of no more than half your level, which you can use until your next daily preparations.</p>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-improved-familiar-attunement",
   "kind": "option",
   "group": "group-thesis",
   "name": "Improved Familiar Attunement",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneThesis.aspx?ID=7",
   "html": "<p>You've long held that fine-tuning the magic that bonds a wizard and their familiar can improve the mystic connection and yield greater results, compared to the safe yet generic bond most wizards currently use. You've formed such a pact with your familiar, gaining more advantages from it than most wizards. You gain the <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5024\">Familiar</a> wizard feat. Your familiar gains an extra ability, and it gains an additional extra ability when you reach 6th, 12th, and 18th levels. Your connection with your familiar alters your arcane bond class feature so that you store your magical energy in your familiar, rather than an item you own; you also gain the Drain Familiar free action instead of Drain Bonded Item. Drain Familiar can be used any time an ability would allow you to use Drain Bonded Item and functions identically, except that you draw magic from your familiar instead of an item.</p>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-spell-blending",
   "kind": "option",
   "group": "group-thesis",
   "name": "Spell Blending",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneThesis.aspx?ID=8",
   "html": "<p>You theorize that spell slots are a shorthand for an underlying energy that powers all spellcasting, and you've found a way to tinker with the hierarchy of spell slots, combining them to fuel more powerful spells. During your daily preparations, you can trade two spell slots of the same spell rank for a bonus spell slot of up to 2 spell ranks higher than the traded spell slots. You can exchange as many spell slots as you have available. Bonus spell slots must be of a spell rank you can normally cast, and each bonus spell slot must be of a different spell rank. You can also trade any spell slot for two additional cantrips, though you can't trade more than one spell slot at a time for additional cantrips in this way.</p>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-spell-substitution",
   "kind": "option",
   "group": "group-thesis",
   "name": "Spell Substitution",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneThesis.aspx?ID=9",
   "html": "<p>You don't accept the fact that once spells are prepared, they can't be changed until your next daily preparations, and you have uncovered a shortcut allowing you to substitute new spells for those you originally prepared. You can spend 10 minutes to empty one of your prepared spell slots and prepare a different spell from your spellbook in its place. If you are interrupted during such a swap, the original spell remains prepared and can still be cast. You can try again to swap out the spell later, but you must start the process over again.</p>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": null,
   "id": "thesis-staff-nexus",
   "kind": "option",
   "group": "group-thesis",
   "name": "Staff Nexus",
   "level": 1,
   "url": "https://2e.aonprd.com/ArcaneThesis.aspx?ID=10",
   "html": "<p>Your thesis maintains that early and intense adoption of staves from the first days of study can create a symbiotic bond between spellcaster and staff, allowing them to create remarkable magic together. You've formed such a connection with a makeshift staff you built, and you are ready to infuse any staff you encounter with greater power.</p><p>You begin play with a makeshift <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3211\">staff</a> of your own invention. It has the magical trait and contains one cantrip and one 1st-rank spell, both from your spellbook. During your daily preparations, you can expend one spell to grant the staff a number of charges equal to that spell's rank, which dissipate after 24 hours. While you are holding the staff, you can Cast the Spells it contains. The 1st-rank spell consumes 1 charge but the cantrip doesn't require charges. If your staff is destroyed, you can create a new one over the course of 1 hour, though it has no charges.</p><p>During your daily preparations, you can merge your makeshift staff with another staff in your possession, adding the two chosen spells to it. This staff gains charges from preparing it and from expending spells. Magical staves are described on <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3211\">the Staves page</a> of <i>GM Core</i>.</p><p>At 8th level, you can expend two spells instead of one when preparing any staff, adding additional charges equal to the combined ranks of the expended spells. At 16th level, you can expend up to a total of three spells to add charges to the staff, adding additional charges equal to the combined ranks of all three spells.</p>",
   "source": "Player Core",
   "requires": []
  },
  {
   "image": "wizard/Sculpt_Spells_Icon.webp",
   "id": "theme-metamagic",
   "kind": "hub",
   "name": "Spellshape",
   "level": 0,
   "html": "Feats with the spellshape trait: they alter the next spell you cast — its range, area, damage or how noticeable it is.",
   "requires": [],
   "x": -740,
   "y": -300,
   "captionSide": "right",
   "captionW": 133
  },
  {
   "image": "wizard/Class_Wizard_Abjuration_Badge_Icon.png",
   "id": "theme-battle",
   "kind": "hub",
   "name": "Counterspell & Defense",
   "level": 0,
   "html": "Counterspelling, protective arrays and the senses and reflexes a wizard relies on in a fight.",
   "requires": [],
   "x": -250,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Oghma_Icon.webp",
   "id": "theme-book",
   "kind": "hub",
   "name": "Spellbook & Slots",
   "level": 0,
   "html": "Your spellbook, cantrips, scrolls and the way you prepare and recover spell slots.",
   "requires": [],
   "x": 740,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Transmuters_Stone_passive_feature_Icon.webp",
   "id": "theme-bond",
   "kind": "hub",
   "name": "Arcane Bond & School",
   "level": 0,
   "html": "Your bonded item, school spells and focus points. Every wizard has an arcane bond from 1st level.",
   "requires": [],
   "x": -797,
   "y": 300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Class_Wizard_Illusion_Badge_Icon.png",
   "id": "theme-mind",
   "kind": "hub",
   "name": "Illusion & Influence",
   "level": 0,
   "html": "Illusions, words and performances that bend the minds of others.",
   "requires": [],
   "x": -307,
   "y": 300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "wizard/Class_Wizard_Necromancy_Badge_Icon.png",
   "id": "theme-necro",
   "kind": "hub",
   "name": "Undeath",
   "level": 0,
   "html": "Uncommon feats for those who create or control undead (Book of the Dead).",
   "requires": [],
   "x": 183,
   "y": 300,
   "captionSide": "right",
   "captionW": 94
  },
  {
   "image": "wizard/Find_Familiar_Cat_Icon.webp",
   "id": "theme-familiar",
   "kind": "hub",
   "name": "Familiar",
   "level": 0,
   "html": "Your familiar and its growth. The Improved Familiar Attunement thesis also grants the Familiar feat.",
   "requires": [],
   "x": 548,
   "y": 300,
   "captionSide": "right",
   "captionW": 107
  },
  {
   "image": "wizard/Counterspell_Icon.webp",
   "id": "feat-4994",
   "kind": "feat",
   "name": "Counterspell",
   "nameEn": "Counterspell",
   "level": 1,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4994",
   "actions": "5",
   "traits": [
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 186",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Trigger": "A creature Casts a Spell that you have prepared"
   },
   "html": "<p>When a foe Casts a Spell and you can see its manifestations, you can use your magic to disrupt it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3280\">counteract</a> the triggering spell.</p><p><b>Special</b> This feat has the trait corresponding to the tradition of spells you cast (arcane, divine, primal, or occult).</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5041\">Clever Counterspell</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5016\">Reflect Spell</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=9393\">Shrink Spell</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=7488\">Sin Counterspell</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -125,
   "y": -420,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Benign_Transposition_Teleport_Icon.webp",
   "id": "feat-5024",
   "kind": "feat",
   "name": "Familiar",
   "nameEn": "Familiar",
   "level": 1,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5024",
   "actions": "",
   "traits": [
    {
     "slug": "magus",
     "name": "Magus"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "thaumaturge",
     "name": "Thaumaturge"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 201",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You make a pact with a creature that serves you and assists your spellcasting. You gain a <a href=\"https://2e.aonprd.com/Familiars.aspx\">familiar</a>.</p>",
   "requires": [],
   "forbids": [],
   "grantedBy": "thesis-improved-familiar-attunement",
   "parentId": "theme-familiar",
   "theme": "theme-familiar",
   "x": 673,
   "y": 420,
   "captionSide": "below",
   "captionW": 84
  },
  {
   "image": "wizard/Witch_Bolt_Icon.webp",
   "id": "feat-4577",
   "kind": "feat",
   "name": "Reach Spell",
   "nameEn": "Reach Spell",
   "level": 1,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4577",
   "actions": "1",
   "traits": [
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 101",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can extend your spells’ range. If the next action you use is to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=72\">Cast a Spell</a> that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=6061\">Knowledge of Shapes</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -420,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Oghma_Icon.webp",
   "id": "feat-5025",
   "kind": "feat",
   "name": "Spellbook Prodigy",
   "nameEn": "Spellbook Prodigy",
   "level": 1,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5025",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 201",
   "prereqText": "Trained in Arcana",
   "prereqHtml": "Trained in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=2\">Arcana</a>",
   "fields": {},
   "html": "<p>You are particularly adept at learning spells to add to your spellbook. You gain the <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5179\">Magical Shorthand</a> skill feat without needing to meet its prerequisites. Further, when you roll a critical failure on your check to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2366\">Learn a Spell</a>, you get a failure instead.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Thunderwave_Icon.webp",
   "id": "feat-4715",
   "kind": "feat",
   "name": "Widen Spell",
   "nameEn": "Widen Spell",
   "level": 1,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4715",
   "actions": "1",
   "traits": [
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 128",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=6061\">Knowledge of Shapes</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -420,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Potent_Cantrip_Icon.webp",
   "id": "feat-4580",
   "kind": "feat",
   "name": "Cantrip Expansion",
   "nameEn": "Cantrip Expansion",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4580",
   "actions": "",
   "traits": [
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "magus",
     "name": "Magus"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "psychic",
     "name": "Psychic"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 101",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Study broadens your range of simple spells.</p><p><b>Prepared Caster (Cleric, Wizard, etc.)</b>: You can prepare two additional cantrips each day. <b>Spontaneous Caster (Bard, Sorcerer, etc.)</b>: Add two additional cantrips from your spell list to your repertoire.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Invisibility_spell_Icon.webp",
   "id": "feat-4997",
   "kind": "feat",
   "name": "Conceal Spell",
   "nameEn": "Conceal Spell",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4997",
   "actions": "1",
   "traits": [
    {
     "slug": "animist",
     "name": "Animist"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "necromancer",
     "name": "Necromancer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 187",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Through sheer mental effort, you can simplify the incantations and gestures needed to spellcast, leaving them barely noticeable. If the next action you use is to Cast a Spell, the spell gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=522\">subtle</a> trait, hiding the shining runes, sparks of magic, and other manifestations that would usually give away your spellcasting. The trait hides only the spell's spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -540,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Fire_Shield_Icon.webp",
   "id": "feat-9388",
   "kind": "feat",
   "name": "Elemental Defense",
   "nameEn": "Elemental Defense",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9388",
   "actions": "1",
   "traits": [
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 108",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You attune yourself to elemental power so that you gain a burst of protection when you call upon it. If your next action is to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2734\">Cast a Spell</a> that has at least one element trait (<a href=\"https://2e.aonprd.com/Traits.aspx?ID=527\">air</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=585\">earth</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=604\">fire</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=505\">metal</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=732\">water</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=508\">wood</a>), you gain <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2318\">resistance</a> to effects that have the element traits of your spell equal to twice the spell’s rank. The resistance lasts until the beginning of your next turn.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Protection_from_Energy_Icon.webp",
   "id": "feat-5026",
   "kind": "feat",
   "name": "Energy Ablation",
   "nameEn": "Energy Ablation",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5026",
   "actions": "1",
   "traits": [
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 201",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>As you direct destructive energy at a foe, you can divert some of its power into a protective barrier that shields you from harm. If your next action is to Cast a Spell that deals at least one type of energy damage (acid, cold, electricity, fire, force, sonic, vitality, or void), you gain resistance to an energy damage type of your choice equal to the spell’s rank. The resistance lasts until the end of your next turn. You get the resistance regardless of whether or not your spell dealt damage.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Conjure_Minor_Elemental_Azer_Icon.webp",
   "id": "feat-4717",
   "kind": "feat",
   "name": "Enhanced Familiar",
   "nameEn": "Enhanced Familiar",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4717",
   "actions": "",
   "traits": [
    {
     "slug": "animist",
     "name": "Animist"
    },
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "magus",
     "name": "Magus"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "thaumaturge",
     "name": "Thaumaturge"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 129",
   "prereqText": "a familiar",
   "prereqHtml": "a <a href=\"https://2e.aonprd.com/Familiars.aspx\">familiar</a>",
   "fields": {},
   "html": "<p>You infuse your familiar with additional primal energy, increasing its abilities. You can select four familiar or master abilities each day, instead of two.</p><p><b>Special</b> [Witch] Add the bonus familiar abilities you gain for being a witch to this amount. [Wizard] If your arcane thesis is improved familiar attunement, your familiar’s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5004\">Incredible Familiar</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=9420\">Incredible Familiar (Animist)</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=8005\">Incredible Familiar (Familiar Master)</a></p>",
   "requires": [
    [
     "feat-5024",
     "thesis-improved-familiar-attunement"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5024",
   "theme": "theme-familiar",
   "x": 923,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Sleep_Icon.webp",
   "id": "feat-5027",
   "kind": "feat",
   "name": "Nonlethal Spell",
   "nameEn": "Nonlethal Spell",
   "level": 2,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5027",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 201",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can alter offensive spells to be less deadly. If your next action is to Cast a Spell that deals damage and doesn't have the death or void trait, that spell gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=661\">nonlethal</a> trait.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Magic_Weapon_Icon.webp",
   "id": "feat-5028",
   "kind": "feat",
   "name": "Bespell Strikes",
   "nameEn": "Bespell Strikes",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5028",
   "actions": "4",
   "traits": [
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 202",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Requirements": "Your most recent action was to cast a non-cantrip spell",
    "Frequency": "once per turn"
   },
   "html": "<p>You siphon spell energy into one weapon you’re wielding, or into one of your unarmed attacks, such as a fist. Until the end of your turn, the weapon or unarmed attack deals an extra 1d6 force damage and gains the associated trait (see below) if it didn’t have it already. If the spell dealt a different type of damage, the Strike deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).</p><p><b>Oracle</b>: Your strike gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=579\">divine</a> trait.</p><p><b>Sorcerer:</b> Your strike gains the trait of your bloodline’s magical tradition.</p><p><b>Wizard</b>: Your strike gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=534\">arcane</a> trait.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=7980\">Arcana of Iron</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -660,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Mage_Hand_Icon.webp",
   "id": "feat-5029",
   "kind": "feat",
   "name": "Call Wizardly Tools",
   "nameEn": "Call Wizardly Tools",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5029",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "teleportation",
     "name": "Teleportation"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 202",
   "prereqText": "arcane bond",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane bond</a>",
   "fields": {},
   "html": "<p>You’re mystically connected to your wizardly tools, ensuring you can always find them when you’ve misplaced them. You teleport your bonded item or spellbook to you. It arrives in your hand if you have a free hand or at your feet if you don’t. The item must be within 1 mile and have 1 Bulk or less.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -672,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Disguise_Self_Icon.webp",
   "id": "feat-9389",
   "kind": "feat",
   "name": "Incriminating Spell",
   "nameEn": "Incriminating Spell",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9389",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 108",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can attempt to blame someone else for your attempt to modify a target’s mind. If the next action you use is to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2734\">Cast a Spell</a> with the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=647\">mental</a> trait, choose a creature within 60 feet that the target can sense. The target will think that creature, instead of you, attempted to alter its mind when it succeeds at its save. If the target attempts to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2302\">Sense Motive</a> on either you or the incriminated creature, they must compare the results to your spell DC instead of the target’s <a href=\"https://2e.aonprd.com/Skills.aspx?ID=38\">Deception</a> DC. If the incriminated creature is obviously incapable of using magic, the target gains a +2 circumstance bonus to their <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2040\">perception</a> check to Sense Motive.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -660,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Seeming_Icon.webp",
   "id": "feat-3421",
   "kind": "feat",
   "name": "Irezoko Tattoo",
   "nameEn": "Irezoko Tattoo",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=3421",
   "actions": "",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "champion",
     "name": "Champion"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "magus",
     "name": "Magus"
    },
    {
     "slug": "monk",
     "name": "Monk"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "psychic",
     "name": "Psychic"
    },
    {
     "slug": "ranger",
     "name": "Ranger"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "summoner",
     "name": "Summoner"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Absalom, City of Lost Omens pg. 185",
   "prereqText": "Expert in Arcana or Expert in Occultism",
   "prereqHtml": "Expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=2\">Arcana</a> or Expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=11\">Occultism</a>",
   "fields": {
    "Access": "You are a member of the College of Mysteries"
   },
   "html": "<p>Your face bears an intricate magical tattoo known as the <i>irezoko</i>, a badge of your understanding of your chosen field of magic and a recognition of your advancement within Absalom's College of Mysteries. Choose a class that you are a member of that grants you access to a focus pool. When you take this feat, it gains the trait that applies to your chosen class. Once per day, you may concentrate upon the pattern of your <i>irezoko</i> to recover 1 Focus Point as a three-action activity.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -922,
   "y": 420,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "wizard/Empowered_Evocation_Icon.webp",
   "id": "feat-5030",
   "kind": "feat",
   "name": "Linked Focus",
   "nameEn": "Linked Focus",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5030",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 202",
   "prereqText": "arcane bond; arcane school",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane bond</a>; <a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane school</a>",
   "fields": {},
   "html": "<p>You have linked your bonded item to the well of energy that powers your school spells. Once per day when you Drain your Bonded Item to cast one of your arcane school’s curriculum spells, you also regain 1 Focus Point.</p>",
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
   "x": -672,
   "y": 540,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Arcane_Ward_Icon.webp",
   "id": "feat-5031",
   "kind": "feat",
   "name": "Spell Protection Array",
   "nameEn": "Spell Protection Array",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5031",
   "actions": "1",
   "traits": [
    {
     "slug": "arcane",
     "name": "Arcane"
    },
    {
     "slug": "manipulate",
     "name": "Manipulate"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 202",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You inscribe a circle of arcane runes that dampen enemies’ magic. You create a glowing magic circle in a 5-foot burst within 30 feet. Creatures in the circle gain a +1 status bonus to saving throws against magic. The circle lasts until the end of your next turn, and you can Sustain it, to a maximum duration of 1 minute.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -125,
   "y": -780,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Inured_to_Undeath_Icon.webp",
   "id": "feat-3483",
   "kind": "feat",
   "name": "Undying Conviction",
   "nameEn": "Undying Conviction",
   "level": 4,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=3483",
   "actions": "",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "aura",
     "name": "Aura"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "necromancy",
     "name": "Necromancy"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Book of the Dead pg. 33",
   "prereqText": "able to create or control undead; cleric with a negative font, oracle of bones, or necromancer wizard",
   "prereqHtml": "able to create or control <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a>; <a href=\"https://2e.aonprd.com/Classes.aspx?ID=5\">cleric</a> with a negative font, <a href=\"https://2e.aonprd.com/Classes.aspx?ID=14\">oracle</a> of <a href=\"https://2e.aonprd.com/Mysteries.aspx?ID=3\">bones</a>, or <a href=\"https://2e.aonprd.com/ArcaneSchools.aspx?ID=7\">necromancer</a> <a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">wizard</a>",
   "fields": {},
   "html": "<p>Your presence has a bolstering effect on your undead <a href=\"https://2e.aonprd.com/Traits.aspx?ID=109\">minions</a>. Undead creatures under your control and within a 30-foot emanation around you gain a +2 status bonus to saving throws to resist <a href=\"https://2e.aonprd.com/Traits.aspx?ID=128\">positive</a> damage and to Will saving throws to resist effects that would make them <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=6\">controlled</a>.</p><p><b>Special</b> This feat has the trait matching your spellcasting tradition.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 308,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Improved_Minor_Illusion_Icon.webp",
   "id": "feat-5032",
   "kind": "feat",
   "name": "Convincing Illusion",
   "nameEn": "Convincing Illusion",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5032",
   "actions": "5",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 202",
   "prereqText": "Expert in Deception",
   "prereqHtml": "Expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=5\">Deception</a>",
   "fields": {
    "Requirements": "You are within 30 feet of the observer and the illusion",
    "Trigger": "A creature succeeded, but didn’t critically succeed, at a Perception check or Will save to disbelieve an illusion from a spell that you cast"
   },
   "html": "<p>You use your deceptive skills to make your illusions seem even more real. Attempt a Deception check against the target’s Perception DC. If you succeed, the target fails to disbelieve the illusion.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": -182,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Fireball_Icon.webp",
   "id": "feat-3632",
   "kind": "feat",
   "name": "Detonating Spell",
   "nameEn": "Detonating Spell",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=3632",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "metamagic",
     "name": "Metamagic"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Knights of Lastwall pg. 83",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Access": "Knights of Lastwall have access to this feat."
   },
   "html": "<p>Your spell becomes volatile and explosive. If the next action you use is to Cast a Spell that deals damage to a single target and the spell successfully damages that target, the spell explodes, dealing <a href=\"https://2e.aonprd.com/Traits.aspx?ID=150\">splash</a> damage equal to the level of the spell cast to adjacent creatures. Unlike normally, this splash damage doesn't apply to the target. The splash damage dealt is of the same type the spell deals.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -660,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Conjure_Elemental_Icon.webp",
   "id": "feat-5033",
   "kind": "feat",
   "name": "Explosive Arrival",
   "nameEn": "Explosive Arrival",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5033",
   "actions": "4",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your summoned creature appears in a detonation of arcane runes. If your next action is to Cast a Spell with the summon trait, all creatures in a 10-foot emanation around the creature you summoned take 1d4 fire damage per spell rank. If the creature summoned has the acid, cold, electricity, sonic, or spirit trait, you can deal damage of that type instead.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -780,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Ottos_Irresistible_Dance_Icon.webp",
   "id": "feat-5034",
   "kind": "feat",
   "name": "Irresistible Magic",
   "nameEn": "Irresistible Magic",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5034",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You’ve studied ways of overcoming the innate defenses against magic that dragons, otherworldly beings, and certain other powerful creatures have. Any creature that has a status bonus to saving throws against magic reduces that bonus by 1 against your spells.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -780,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Enlarge_Reduce_Icon.webp",
   "id": "feat-9393",
   "kind": "feat",
   "name": "Shrink Spell",
   "nameEn": "Shrink Spell",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9393",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "Counterspell",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=4994\">Counterspell</a>",
   "fields": {},
   "html": "<p>You’ve learned to manipulate space to narrow the impact of other spells. When you use <a href=\"https://2e.aonprd.com/Feats.aspx?ID=4994\">Counterspell</a> to attempt to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2250\">counteract</a> a spell that has an area of a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2385\">burst</a>, <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2386\">cone</a>, or <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2388\">line</a> and does not have a duration, you reduce the area of the spell if you fail to counteract it. Remove 5 feet from the radius of a burst or <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2387\">emanation</a> or 10 feet from the length of a cone or line.</p>",
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 125,
   "y": -420,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Mirror_Image_Icon.webp",
   "id": "feat-5035",
   "kind": "feat",
   "name": "Split Slot",
   "nameEn": "Split Slot",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5035",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can prepare two spells in one slot, giving you the freedom to choose the spell when you cast it. When you prepare your spells for the day, you can choose one spell slot at least 1 rank lower than the highest-rank spell you can cast and prepare two spells in that slot. When you Cast a Spell from that slot, choose which spell to cast. Once you’ve chosen, the unused spell dissipates as though you hadn’t prepared it at all—for example, it isn’t available for use with Drain Bonded Item.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -540,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "wizard/Stoneskin_Icon.webp",
   "id": "feat-4602",
   "kind": "feat",
   "name": "Steady Spellcasting",
   "nameEn": "Steady Spellcasting",
   "level": 6,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4602",
   "actions": "",
   "traits": [
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "necromancer",
     "name": "Necromancer"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "psychic",
     "name": "Psychic"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 103",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You don’t lose spells easily. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn’t disrupted.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=7985\">Battlefield Arcana</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -125,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Expert_Divination_Icon.webp",
   "id": "feat-5036",
   "kind": "feat",
   "name": "Advanced School Spell",
   "nameEn": "Advanced School Spell",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5036",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You gain access to the advanced teachings of your arcane institution, learning a powerful new school spell. You gain the advanced school spell for your arcane school.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -922,
   "y": 540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Arcane_Recovery_Icon.webp",
   "id": "feat-5037",
   "kind": "feat",
   "name": "Bond Conservation",
   "nameEn": "Bond Conservation",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5037",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "arcane bond",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane bond</a>",
   "fields": {
    "Requirements": "The last action you used was to Cast a Spell enabled by Drain Bonded Item"
   },
   "html": "<p>By efficiently and carefully manipulating the arcane energies unleashed by your bonded item, you can conserve just enough power to cast another spell, though this second spell is slightly weaker. You gain an extra use of Drain Bonded Item. You can use it to cast a spell 2 or more ranks lower than the previous spell, and must use it before the end of your next turn or you lose it.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -672,
   "y": 660,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Confusion_Icon.webp",
   "id": "feat-4386",
   "kind": "feat",
   "name": "Chaotic Spell",
   "nameEn": "Chaotic Spell",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4386",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "metamagic",
     "name": "Metamagic"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Wake the Dead #3 pg. 25",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>This is the secret of chaotic magic — your foe can hardly predict and counter your moves if you yourself have no idea what will happen. If the next action you use is to Cast a Spell that deals acid, cold, electricity, fire, or sonic damage, roll a d6. The spell's damage type changes to the type below associated with the result of the roll, and each creature who is damaged by the spell takes the listed additional effect. <b>1 (Acid):</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=34\">Sickened</a> 1 <b>2 (Cold):</b> -10 ft. penalty to all Speeds until the end of your next turn. <b>3 (Electricity):</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=16\">Flat-footed</a> until the end of your next turn. <b>4 (Fire):</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">Persistent fire damage</a> equal to the spell's level <b>5 (Force):</b> No added effect <b>6 (Sonic):</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=8\">Deafened</a> for 2 rounds</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -780,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Polymorph_Icon.webp",
   "id": "feat-5038",
   "kind": "feat",
   "name": "Form Retention",
   "nameEn": "Form Retention",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5038",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You have trained your mind and body to tolerate polymorph magic for longer periods of time, so long as you prepare for the change appropriately. When preparing a polymorph spell that lasts 1 minute and grants a battle form, you can prepare the spell in a slot 2 ranks higher than normal. This doesn’t grant any of the normal benefits of heightening a spell, but the spell lasts up to 10 minutes. For example, if you prepared animal form in a 4th-rank slot with Form Retention, you would cast a 2nd-rank animal form that lasts for up to 10 minutes. If the spell can be Dismissed, that doesn’t change.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -540,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "wizard/Bladesong_Icon.webp",
   "id": "feat-4130",
   "kind": "feat",
   "name": "Helt's Spelldance",
   "nameEn": "Helt's Spelldance",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4130",
   "actions": "3",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Firebrands pg. 77",
   "prereqText": "Expert in Performance",
   "prereqHtml": "Expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=12\">Performance</a>",
   "fields": {
    "Access": "Members of the Firebrands at the rank of second mark or higher have access to this feat."
   },
   "html": "<p>Ranik Helt knows a special technique to hide his spells as part of a performance, and you've learned this technique. Ostentatiously performing, you move across the battlefield, taking foes aback and creating an opening for your spell. Attempt a Performance check against all observers' Perception DCs. Then, Stride once or twice. During this movement, you don't trigger reactions that are triggered by your movement from the creatures against which you succeeded on your Performance check. After your movement, you can Cast a Spell. If you used one Stride, you can cast either a 1-action or a 2-action spell; if you used two Strides, you can only cast a 1-action spell. If you critically succeed on your check against any creature, they take a –1 circumstance penalty to their saving throws against any spell you cast as part of your Helt's Spelldance due to your distracting performance. All creatures that observed you become temporarily immune to your Helt's Spelldance for 10 minutes.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": -432,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Gust_of_Wind_Icon.webp",
   "id": "feat-9390",
   "kind": "feat",
   "name": "Knockback Spell",
   "nameEn": "Knockback Spell",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9390",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You imbue your spells with magical force to knock creatures back. If the next action you use is to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2734\">Cast a Spell</a> that has an area of a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2385\">burst</a>, <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2386\">cone</a>, <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2387\">emanation</a>, or <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2388\">line</a>; has no duration; and requires creatures to attempt a Reflex or Fortitude save, the spell unleashes a forceful blast that pushes creatures away, in addition to its other effects. Each creature that failed its save against the spell is pushed 5 feet, and those who critically failed are pushed 10 feet. If the spell is a cone, emanation, or a line, you push the creature away from yourself. If the spell is a burst, you push the creature away from the center of the burst.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Portent_Icon.webp",
   "id": "feat-5039",
   "kind": "feat",
   "name": "Knowledge is Power (Wizard)",
   "nameEn": "Knowledge is Power (Wizard)",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5039",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your academic knowledge about a creature allows you to subtly alter your magic to defeat them. When you critically succeed at a <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2367\">Recall Knowledge</a> check about a creature, you can invoke your knowledge to make the creature take a –1 circumstance penalty to either AC and saves against the next attack you make against it, or the next spell you cast that it needs to defend against. The creature takes the same penalty to its attack or DC the next time it attacks against you or causes you to attempt a save against one of its effects.</p><p>If you share this information with your allies, they gain the benefits as well. If not used, the bonuses end after 1 minute.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -660,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Charm_Person_Icon.webp",
   "id": "feat-9395",
   "kind": "feat",
   "name": "Spellbinding Speech",
   "nameEn": "Spellbinding Speech",
   "level": 8,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9395",
   "actions": "1",
   "traits": [
    {
     "slug": "auditory",
     "name": "Auditory"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "linguistic",
     "name": "Linguistic"
    },
    {
     "slug": "mental",
     "name": "Mental"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "Expert in Performance",
   "prereqHtml": "Expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=45\">Performance</a>",
   "fields": {},
   "html": "<p>All the time you’ve spent discussing esoteric theses and performing spell incantations has made your words magical even when you aren’t casting a full spell. Choose a creature within 30 feet who can hear and understand you, and attempt an <a href=\"https://2e.aonprd.com/Skills.aspx?ID=35\">Arcana</a> check against their Will DC. On a success, your seemingly mundane speech is laced with spellbinding magic, preventing your target from using reactions until the start of your next turn. Regardless of the result, the creature is temporarily immune to your Spellbinding Speech for 24 hours.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": -182,
   "y": 540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Lightning_Bolt_Icon.webp",
   "id": "feat-4743",
   "kind": "feat",
   "name": "Overwhelming Energy",
   "nameEn": "Overwhelming Energy",
   "level": 10,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4743",
   "actions": "1",
   "traits": [
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 133",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>With a complex gesture, you call upon the primal power of your spell to overcome enemies' resistances. If the next action you use is to Cast a Spell, the spell ignores an amount the target's resistance to energy damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell, such as the wall created by <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1748\">_wall of fire_</a>. A creature's immunities are unaffected.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Haste_Icon.webp",
   "id": "feat-4614",
   "kind": "feat",
   "name": "Quickened Casting",
   "nameEn": "Quickened Casting",
   "level": 10,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4614",
   "actions": "4",
   "traits": [
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "necromancer",
     "name": "Necromancer"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 105",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Frequency": "once per day"
   },
   "html": "<p>If your next action is to cast a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=550\">cantrip</a> or a spell that is at least 2 ranks lower than the highest-rank spell slot you have, reduce the number of actions to cast it by 1 (minimum 1 action).</p><p><b>Special</b> This feat can only be used on a cantrip or spell that is at least 2 ranks lower than the highest-rank spell slot from the class or archetype matching the one you gained this feat from.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -1020,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Glyph_of_Warding_Icon.webp",
   "id": "feat-5040",
   "kind": "feat",
   "name": "Scroll Adept",
   "nameEn": "Scroll Adept",
   "level": 10,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5040",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 203",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>During your daily preparations, you can create two temporary scrolls containing arcane spells from your spellbook. Each scroll must be of a different spell rank, and both spell ranks must be 2 or more ranks lower than your highest-rank spell. Any scrolls you create this way become non-magical the next time you make your daily preparations. A temporary scroll has no value if sold. As normal for a scroll, these are consumable items of light Bulk, and someone holding the item in one hand can Cast the Spell from it if it’s on their spell list, using their spell attack modifier and spell DC. Scrolls are detailed fully on page 262 of GM Core.</p><p>If you have master proficiency in spell DC, you can create three temporary scrolls during your daily preparations, and if you have legendary proficiency, you can create four temporary scrolls.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -660,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Focused_Conjuration_Icon.webp",
   "id": "feat-9392",
   "kind": "feat",
   "name": "Shared Focus",
   "nameEn": "Shared Focus",
   "level": 10,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9392",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "focus pool",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Rules.aspx?ID=2228\">focus pool</a>",
   "fields": {},
   "html": "<p>Your magical expertise allows you to perform a metaphorical sleight of hand to manifest a Focus Point. Choose a willing ally within 30 feet who also has a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=285\">focus</a> pool. The target gains 1 temporary Focus Point until the start of your next turn, at which time it’s lost, even if not spent. This temporary Focus Point is separate from the Focus Points in their focus pool, allowing them to have it even if they’re at their pool’s maximum. The creature then becomes temporarily immune to Shared Focus until their next daily preparations.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -922,
   "y": 660,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Third_Eye_See_Invisibility_Icon.webp",
   "id": "feat-9394",
   "kind": "feat",
   "name": "Spatial Awareness",
   "nameEn": "Spatial Awareness",
   "level": 10,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9394",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your study of different planes of existence makes you more attuned to teleportation effects. You gain a +1 circumstance bonus when you attempt to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2250\">counteract</a> a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=710\">teleportation</a> effect.</p><p>When a teleportation effect occurs within 60 feet of you, you detect the location of the effect as a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2406\">precise sense</a>. If the effect is a creature teleporting away from that space, you know the general direction of the location to which it teleported but not the distance. However, you can attempt to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2365\">Identify Magic</a> within an hour of the teleportation to know the location to which the creature teleported within 10 miles on a success or 1 mile on a critical success.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Remove_Curse_Icon.webp",
   "id": "feat-5041",
   "kind": "feat",
   "name": "Clever Counterspell",
   "nameEn": "Clever Counterspell",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5041",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "Counterspell; Quick Recognition",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=4994\">Counterspell</a>; <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5197\">Quick Recognition</a>",
   "fields": {},
   "html": "<p>You creatively apply your prepared spells to Counterspell a much wider variety of your opponents’ magic. Instead of being able to counter a foe’s spell with Counterspell only if you have that same spell prepared, you can use Counterspell as long as you have the spell the foe is casting in your spellbook. When you use Counterspell in this way, you must still expend a prepared spell; the prepared spell you expend must share a trait with the triggering spell other than concentrate, manipulate, or its tradition trait. The GM might allow you to instead use a spell that has an opposing trait or that otherwise logically would counter the triggering spell (such as using a cold or water spell to counter fireball or using clear mind to counter a fear spell).</p>",
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 125,
   "y": -540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Scorching_Ray_Icon.webp",
   "id": "feat-5042",
   "kind": "feat",
   "name": "Forcible Energy",
   "nameEn": "Forcible Energy",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5042",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You perform complex manipulations to make the energy from your spells so powerful that your enemies remain vulnerable to it afterward. If your next action is to Cast a Spell that deals acid, cold, electricity, fire, or sonic damage, you can select one target that was damaged to gain weakness 5 to that damage type until the end of your next turn. If a spell deals multiple types of energy damage, choose one that the target gains weakness to. This has no effect on creatures with resistance or immunity to the energy type you choose.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -1020,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/See_Invisibility_Icon.webp",
   "id": "feat-5043",
   "kind": "feat",
   "name": "Keen Magical Detection",
   "nameEn": "Keen Magical Detection",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5043",
   "actions": "",
   "traits": [
    {
     "slug": "fortune",
     "name": "Fortune"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You sense magical dangers. When using the Detect Magic exploration activity, you can roll initiative twice and use the better result so long as at least one opponent has a magical effect or magic item and is in range of your detect magic.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -125,
   "y": -1020,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Third_Eye_Darkvision_Icon.webp",
   "id": "feat-5044",
   "kind": "feat",
   "name": "Magic Sense",
   "nameEn": "Magic Sense",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5044",
   "actions": "",
   "traits": [
    {
     "slug": "arcane",
     "name": "Arcane"
    },
    {
     "slug": "detection",
     "name": "Detection"
    },
    {
     "slug": "magus",
     "name": "Magus"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-rank detect magic spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of a 3rd-rank detect magic spell on things you see (in addition to the normal benefits of Seeking). You can turn this sense off and on with a free action at the start or the end of your turn.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -1020,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Create_Undead_Icon.webp",
   "id": "feat-3484",
   "kind": "feat",
   "name": "Necromancer's Visage",
   "nameEn": "Necromancer's Visage",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=3484",
   "actions": "",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "necromancy",
     "name": "Necromancy"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Book of the Dead pg. 33",
   "prereqText": "ability to create or control undead; cleric with a negative font, oracle of bones, or necromancer wizard",
   "prereqHtml": "ability to create or control <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a>; <a href=\"https://2e.aonprd.com/Classes.aspx?ID=5\">cleric</a> with a negative font, <a href=\"https://2e.aonprd.com/Classes.aspx?ID=14\">oracle</a> of <a href=\"https://2e.aonprd.com/Mysteries.aspx?ID=3\">bones</a>, or <a href=\"https://2e.aonprd.com/ArcaneSchools.aspx?ID=7\">necromancer</a> <a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">wizard</a>",
   "fields": {},
   "html": "<p>Necromantic energy demonstrates your power over undead, creating a demeanor that commands their fear and respect. Undead creatures can immediately sense your Necromancer's Visage and tend to act accordingly. If you take a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=300\">hostile action</a> against an undead creature, it becomes permanently immune to your Necromancer's Visage, and your Necromancer's Visage ends. You can spend 10 minutes to restore your Necromancer's Visage, though any creatures that became permanently immune remain so.</p><p>Each time an undead creature 2 or more levels lower than you attacks you, it must attempt a Will save against your spell DC. If you're also affected by <a href=\"https://2e.aonprd.com/Spells.aspx?ID=266\">_sanctuary_</a> or a similar effect, only one affects the attacker (you choose which).</p><p><b>Critical Success</b> The creature is permanently immune to your Necromancer's Visage.</p><p><b>Success</b> The creature can attempt its attack and any other attacks against you this turn.</p><p><b>Failure</b> The creature can't attack you and wastes the action. It can't attempt further attacks against you this turn.</p><p><b>Critical Failure</b> The creature wastes the action and can't attempt to attack you as long as your Necromancer's Visage persists.</p><p><b>Special</b> This feat has the trait matching your spellcasting tradition.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 58,
   "y": 420,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Misty_Step_Icon.webp",
   "id": "feat-9391",
   "kind": "feat",
   "name": "Redirect Teleportation",
   "nameEn": "Redirect Teleportation",
   "level": 12,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9391",
   "actions": "5",
   "traits": [
    {
     "slug": "teleportation",
     "name": "Teleportation"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 109",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Trigger": "A creature teleports into a space within 60 feet of you."
   },
   "html": "<p>You’re able to intercept a teleportation effect and change where a creature appears. You expend a prepared spell that has the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=710\">teleportation</a> trait. You lose your spell slot as if you had cast the triggering spell. You then attempt to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2250\">counteract</a> the triggering spell. The counteract rank for this effect is equal to the rank of the expended spell. If you succeed on your counteract check, you don’t <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2236\">disrupt</a> the spell. Instead, you choose an unoccupied space within 60 feet of you for the creature to teleport into. You can’t choose a space that is obviously harmful (such as into a <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1748\">_wall of fire_</a> or <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2587\">hazardous terrain</a>) or would cause the target to fall.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -125,
   "y": -1140,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Transmuters_Stone_Constitution_Icon.webp",
   "id": "feat-5045",
   "kind": "feat",
   "name": "Bonded Focus",
   "nameEn": "Bonded Focus",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5045",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "arcane bond",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane bond</a>",
   "fields": {},
   "html": "<p>Your connection to your bonded item increases your focus pool. Whenever you Refocus while your bonded item is in your possession, you completely refill your focus pool.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -672,
   "y": 780,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Colour_Spray_Icon.webp",
   "id": "feat-9387",
   "kind": "feat",
   "name": "Dizzying Spell",
   "nameEn": "Dizzying Spell",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=9387",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Impossible Magic pg. 108",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your spell leaves a foe’s head spinning and unable to concentrate. If your next action is to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2734\">Cast a Spell</a> that requires a Will saving throw and targets a single creature, the target is <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=94\">stupefied</a> 2 for 1 round if it fails its saving throw (or stupefied 3 on a critical failure).</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -1140,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "wizard/Projected_Ward_Icon.webp",
   "id": "feat-5016",
   "kind": "feat",
   "name": "Reflect Spell",
   "nameEn": "Reflect Spell",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5016",
   "actions": "",
   "traits": [
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 190",
   "prereqText": "Counterspell",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=4994\">Counterspell</a>",
   "fields": {},
   "html": "<p>When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell’s effect back on its caster. When reflected, the spell affects only the original caster, even if it’s an area spell or it would normally affect more than one creature. The original caster can attempt a save and use other defenses against the reflected spell as normal.</p>",
   "requires": [
    [
     "feat-4994"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4994",
   "theme": "theme-battle",
   "x": 125,
   "y": -660,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Ice_Storm_Icon.webp",
   "id": "feat-5046",
   "kind": "feat",
   "name": "Secondary Detonation Array",
   "nameEn": "Secondary Detonation Array",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5046",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Manipulate"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You divert some of your spell’s energy into an unstable runic array. If your next action is to Cast a Spell that deals damage, has no duration, and affects an area, a glowing magic circle appears in a 5-foot burst within that area. At the beginning of your next turn, the circle detonates, dealing 1d6 force damage per rank of the spell to all creatures within the circle, with a basic Reflex save against your spell DC. If the spell dealt a different type of damage, the circle deals this type of damage instead (or one type of your choice if the spell could deal multiple types of damage).</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -1140,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Animate_Dead_Icon.webp",
   "id": "feat-3485",
   "kind": "feat",
   "name": "Sepulchral Sublimation",
   "nameEn": "Sepulchral Sublimation",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=3485",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "cleric",
     "name": "Cleric"
    },
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "metamagic",
     "name": "Metamagic"
    },
    {
     "slug": "necromancy",
     "name": "Necromancy"
    },
    {
     "slug": "oracle",
     "name": "Oracle"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Book of the Dead pg. 33",
   "prereqText": "ability to create or control undead; cleric with a negative font, oracle of bones, or necromancer wizard",
   "prereqHtml": "ability to create or control <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a>; <a href=\"https://2e.aonprd.com/Classes.aspx?ID=5\">cleric</a> with a negative font, <a href=\"https://2e.aonprd.com/Classes.aspx?ID=14\">oracle</a> of <a href=\"https://2e.aonprd.com/Mysteries.aspx?ID=3\">bones</a>, or <a href=\"https://2e.aonprd.com/ArcaneSchools.aspx?ID=7\">necromancer</a> <a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">wizard</a>",
   "fields": {
    "Requirements": "You have at least one undead <a href=\"https://2e.aonprd.com/Traits.aspx?ID=109\">minion</a> that you permanently control."
   },
   "html": "<p>You repurpose the negative energy that flows through your minions at a moment's notice. Instantly destroy one undead minion within 60 feet that is permanently under your control. If your next action is to cast a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=117\">necromancy</a> spell from a spell slot, you don't expend the slot. The spell's level must be half the destroyed minion's level or lower and the spell can't have a duration.</p><p><b>Special</b> This feat has the trait matching your spellcasting tradition.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-necro",
   "theme": "theme-necro",
   "x": 308,
   "y": 540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Blink_Icon.webp",
   "id": "feat-2731",
   "kind": "feat",
   "name": "Shift Spell",
   "nameEn": "Shift Spell",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=2731",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Pathfinder #167: Ready? Fight! pg. 75",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Requirements": "You have an active spell that affects an area and you are within the spell's range.",
    "Access": "member of the Magaambya"
   },
   "html": "<p>You move the spell's area to a new location within 120 feet. The spell's remaining duration is reduced by half. The spell no longer affects its previous area.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-battle",
   "theme": "theme-battle",
   "x": -375,
   "y": -1140,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "wizard/Arcane_Lock_Icon.webp",
   "id": "feat-5047",
   "kind": "feat",
   "name": "Superior Bond",
   "nameEn": "Superior Bond",
   "level": 14,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5047",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "arcane bond",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">arcane bond</a>",
   "fields": {},
   "html": "<p>When you draw upon your bonded item, you can leave a bit of energy within it for later use. You can use Drain Bonded Item one additional time per day, but only to cast a spell 2 or more ranks lower than your highest-rank wizard spell slot.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-bond",
   "theme": "theme-bond",
   "x": -922,
   "y": 780,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Flaming_Sphere_Icon.webp",
   "id": "feat-4629",
   "kind": "feat",
   "name": "Effortless Concentration",
   "nameEn": "Effortless Concentration",
   "level": 16,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=4629",
   "actions": "4",
   "traits": [
    {
     "slug": "bard",
     "name": "Bard"
    },
    {
     "slug": "druid",
     "name": "Druid"
    },
    {
     "slug": "necromancer",
     "name": "Necromancer"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "summoner",
     "name": "Summoner"
    },
    {
     "slug": "witch",
     "name": "Witch"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 106",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Trigger": "Your turn begins"
   },
   "html": "<p>You can maintain a spell with hardly a thought. You immediately gain the effects of the <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2317\">Sustain</a> action, allowing you to extend the duration of one of your active spells.</p><p><b>Special</b> This can only be used on a cantrip or spell from the class matching the one you gained this feat from.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -780,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Sunbeam_Icon.webp",
   "id": "feat-5048",
   "kind": "feat",
   "name": "Scintillating Spell",
   "nameEn": "Scintillating Spell",
   "level": 16,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5048",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "light",
     "name": "Light"
    },
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    },
    {
     "slug": "spellshape",
     "name": "Spellshape"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 204",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your spells become a radiant display of light and color. If your next action is to Cast a Spell that doesn’t have the darkness trait, has no duration, and requires creatures to attempt a Reflex save, the spell explodes in a spray of scintillating lights, in addition to its other effects. Each creature that failed its Reflex save against the spell is dazzled for 1 round, and those who critically failed are instead blinded for 1 round.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -1260,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Experimental_Alchemy_Icon.webp",
   "id": "feat-5049",
   "kind": "feat",
   "name": "Spell Tinker",
   "nameEn": "Spell Tinker",
   "level": 16,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5049",
   "actions": "2",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You’ve learned to alter choices you make when casting spells on yourself. After casting a spell on only yourself that offers several choices of effect (such as resist energy or a polymorph spell that offers several potential forms), you can alter the choice you made when Casting the Spell (for instance, choosing a different type of damage for resist energy).</p><p>You can’t use this feat if the benefits of the spell have already been used up or if the effects of the first choice would persist in any way after switching (for instance, if one of the choices was to create a consumable item you already used, or to heal you), or if the feat would create an effect more powerful than that offered by the base spell. The GM is the final arbiter of what Spell Tinker can be applied to.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -780,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "wizard/Arcane_Gate_Icon.webp",
   "id": "feat-5050",
   "kind": "feat",
   "name": "Infinite Possibilities",
   "nameEn": "Infinite Possibilities",
   "level": 18,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5050",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can prepare a spell slot that exists in your mind as many different possibilities at once. Once during your daily preparations, you can use a spell slot to hold that infinite potential, rather than using it to prepare a spell. You can use this spell slot to cast any spell from your spellbook that’s at least 2 ranks lower than the slot you designate; the spell acts in all ways as a spell of 2 ranks lower. You don’t have any particular spell prepared in that slot until you cast it.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Split_Enchantment_Icon.webp",
   "id": "feat-5051",
   "kind": "feat",
   "name": "Reprepare Spell",
   "nameEn": "Reprepare Spell",
   "level": 18,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5051",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You’ve discovered how to reuse some of your spell slots over and over. You can spend 10 minutes to prepare a spell that you already cast today, regaining access to that spell slot. The spell must be of 4th rank or lower and can’t have a duration. You can reprepare a spell in this way even if you’ve already reprepared that spell previously in the same day.</p><p>If you have the spell substitution arcane thesis, you can instead prepare a different spell in an expended slot, as long as the new spell doesn’t have a duration. You can use spell substitution on that slot again, but you remain restricted to preparing only spells without a duration in that slot until the next time you make your daily preparations.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -900,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Detect_Thoughts_Icon.webp",
   "id": "feat-5052",
   "kind": "feat",
   "name": "Second Thoughts",
   "nameEn": "Second Thoughts",
   "level": 18,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5052",
   "actions": "5",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Concentrate"
    },
    {
     "slug": "mental",
     "name": "Mental"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Trigger": "You cast a mental spell that targets one creature, and it critically succeeds at its Will save"
   },
   "html": "<p>When your target proves resilient to your magical deceptions, you can try them again on someone else. You can Cast the triggering Spell a second time, targeting a different creature, without expanding an additional spell slot. You can do so only until the end of your next turn, and you can’t use Second Thoughts on it after the second casting of the spell.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-mind",
   "theme": "theme-mind",
   "x": -432,
   "y": 540,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Mystra_Icon.webp",
   "id": "feat-5053",
   "kind": "feat",
   "name": "Archwizard's Might",
   "nameEn": "Archwizard's Might",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5053",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "archwizard's spellcraft",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=12\">archwizard's spellcraft</a>",
   "fields": {},
   "html": "<p>You have mastered the greatest secrets of arcane magic. You gain an additional 10th-rank spell slot.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -1020,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Telekinesis_Icon.webp",
   "id": "feat-1246",
   "kind": "feat",
   "name": "Reclaim Spell",
   "nameEn": "Reclaim Spell",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=1246",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Pathfinder #156: The Apocalypse Prophet pg. 72",
   "prereqText": "Reprepare Spell",
   "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=661\">Reprepare Spell</a>",
   "fields": {},
   "html": "<p>You have learned to manipulate reflections of magic, similar to the <i>resonant reflections</i>. You reclaim the magic of an ongoing spell, using it reprepare a spell with a duration. You Dismiss a Spell of 4th level or lower that you cast today from a spell slot with at least half its duration remaining, even if that spell can't normally be Dismissed. You can then spend 10 minutes to reprepare the spell in that spell slot, as <a href=\"https://2e.aonprd.com/Feats.aspx?ID=661\">Reprepare Spell</a>.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=36\">Pathfinder #156: The Apocalypse Prophet</a> pg. 72</p><p>Characters who have reached 20th level can choose from the following feats, representing the pinnacle of mortal power influenced by their triumphs.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1240\">Annihilating Swing</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1241\">Astonishing Explosion</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1242\">Banishing Blow</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1243\">Denier of Destruction</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1244\">Endurance of the Rooted Tree</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1245\">Mimic Protections</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1247\">Reflecting Riposte</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1248\">Ringmaster's Introduction</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1249\">Steal Essence</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1250\">Tenacious Blood Magic</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1251\">Verdant Presence</a></p>",
   "requires": [
    [
     "feat-5051"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5051",
   "theme": "theme-book",
   "x": 365,
   "y": -900,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Chromatic_Orb_Icon.webp",
   "id": "feat-5054",
   "kind": "feat",
   "name": "Spell Combination",
   "nameEn": "Spell Combination",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5054",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You can merge spells, producing multiple effects with a single casting. One slot of each rank of spell you can cast, except 2nd rank and 1st rank, becomes a spell combination slot (this doesn’t apply to cantrips). When you prepare your spells, you can fill a combination slot with a combination of two spells. Each spell in the combination must be 2 or more spell ranks below the slot’s rank, and both must target only one creature or object or have the option to target only one creature or object. Each spell in the combination must also have the same means of determining whether it has an effect—both spells must require a ranged spell attack, require the same type of saving throw, or automatically affect the target.</p><p>When you cast a combined spell, it affects only one target, even if the component spells normally affect more than one. If any spell in the combination has further restrictions (such as targeting only living creatures), you must abide by all restrictions. The combined spell uses the shorter of the component spells’ ranges. Resolve a combined spell as if were a single spell, but apply the effects of both component spells. For example, if the spell’s target succeeded at the save against a combined spell, it would apply the success effect of each spell, and if it critically failed, it would apply the critical failure effect of both spells.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 615,
   "y": -1020,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Magic_Missile_Icon.webp",
   "id": "feat-5055",
   "kind": "feat",
   "name": "Spell Mastery",
   "nameEn": "Spell Mastery",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5055",
   "actions": "",
   "traits": [],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>You have mastered a handful of spells to such a degree that you can cast them even if you haven’t prepared them in advance. Select any four spells of 9th rank or lower that are in your spellbook; each spell you select must be of a different rank. These spells are automatically prepared when you make your daily preparations, and you gain an extra spell slot for each spell. You can select a different combination of spells by spending 1 week of downtime studying your spellbook and retraining your mastered spells.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-book",
   "theme": "theme-book",
   "x": 865,
   "y": -1140,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "wizard/Chain_Lightning_Icon.webp",
   "id": "feat-5056",
   "kind": "feat",
   "name": "Spellshape Mastery",
   "nameEn": "Spellshape Mastery",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=5056",
   "actions": "",
   "traits": [
    {
     "slug": "sorcerer",
     "name": "Sorcerer"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Player Core pg. 205",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {},
   "html": "<p>Your mastery of magic ensures that you can alter your spells just as easily as you can cast them normally. You can use spellshape single actions as free actions.</p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -865,
   "y": -1260,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "wizard/Otilukes_Resilient_Sphere_Icon.webp",
   "id": "feat-2759",
   "kind": "feat",
   "name": "Worldsphere Gravity",
   "nameEn": "Worldsphere Gravity",
   "level": 20,
   "url": "https://2e.aonprd.com/Feats.aspx?ID=2759",
   "actions": "1",
   "traits": [
    {
     "slug": "uncommon",
     "name": "Uncommon"
    },
    {
     "slug": "metamagic",
     "name": "Metamagic"
    }
   ],
   "rarity": "uncommon",
   "legacy": true,
   "source": "Pathfinder #168: King of the Mountain pg. 77",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Frequency": "once per hour"
   },
   "html": "<p>Though creating demiplanes usually requires lengthy rituals, you know how to establish minor planar effects in imitation of Syndara's masterpieces. If your next action is to Cast a Spell of at least 5th level from your spell slots that affects an area, you can apply one of the following planar effects to a 20-foot burst centered within the spell's area. The effect persists for 1 minute. <ul><li><b>Gravitational Morass</b> The pull of gravity is amplified here, creating greater difficult terrain. <a href=\"https://2e.aonprd.com/Actions.aspx?ID=94\">Flying</a> creatures that pass through the area must succeed at a Reflex save against your spell DC or fall to the ground, taking bludgeoning damage equal to half the distance fallen.</li><li><b>Flowing Time</b> Erratic timestreams aid you within this space. A creature that starts its turn in the burst is affected by <a href=\"https://2e.aonprd.com/Spells.aspx?ID=147\">_haste_</a> on that turn.</li></ul></p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=87\">Pathfinder #168: King of the Mountain</a> pg. 75</p><p>Player characters can select one of the following new class feats for their 20th-level class feat upon entering the <i>Glass Lighthouse</i> or by meditating on the cushion in area H4.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2744\">All the Time in the World</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2745\">Dance of Intercession</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2746\">Demon's Hair</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2747\">Everdistant Defense</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2748\">Extradimensional Stash</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2749\">Head of the Night Parade</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2750\">Heart of the Kaiju</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2751\">Plum Deluge</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2752\">Ruby Resurrection</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2753\">Scapegoat Parallel Self</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2754\">Sever Space</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2755\">Time Dilation Cascade</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2756\">Vitality-Manipulating Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2757\">Vivacious Afterimage</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2758\">Whirlwind Toss</a></p>",
   "requires": [],
   "forbids": [],
   "parentId": "theme-metamagic",
   "theme": "theme-metamagic",
   "x": -615,
   "y": -1380,
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
     -740,
     -190
    ],
    [
     -740,
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
     -250,
     -190
    ],
    [
     -250,
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
     740,
     -190
    ],
    [
     740,
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
     -797.5,
     190
    ],
    [
     -797.5,
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
     -307.5,
     190
    ],
    [
     -307.5,
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
     182.5,
     190
    ],
    [
     182.5,
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
     547.5,
     190
    ],
    [
     547.5,
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
     -250,
     -300
    ],
    [
     -250,
     -420
    ],
    [
     -125,
     -420
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
     547.5,
     300
    ],
    [
     547.5,
     420
    ],
    [
     672.5,
     420
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
     -740,
     -300
    ],
    [
     -740,
     -420
    ],
    [
     -615,
     -420
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
     740,
     -300
    ],
    [
     740,
     -420
    ],
    [
     865,
     -420
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
     -740,
     -300
    ],
    [
     -740,
     -420
    ],
    [
     -865,
     -420
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
     740,
     -300
    ],
    [
     740,
     -420
    ],
    [
     615,
     -420
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
     -740,
     -300
    ],
    [
     -740,
     -540
    ],
    [
     -615,
     -540
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
     -250,
     -300
    ],
    [
     -250,
     -420
    ],
    [
     -375,
     -420
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
     -250,
     -300
    ],
    [
     -250,
     -540
    ],
    [
     -375,
     -540
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
     672.5,
     420
    ],
    [
     922.5,
     420
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
     -740,
     -300
    ],
    [
     -740,
     -540
    ],
    [
     -865,
     -540
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
     -250,
     -300
    ],
    [
     -250,
     -660
    ],
    [
     -375,
     -660
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
     -797.5,
     300
    ],
    [
     -797.5,
     420
    ],
    [
     -672.5,
     420
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
     -740,
     -300
    ],
    [
     -740,
     -660
    ],
    [
     -615,
     -660
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
     -797.5,
     300
    ],
    [
     -797.5,
     420
    ],
    [
     -922.5,
     420
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
     -797.5,
     300
    ],
    [
     -797.5,
     540
    ],
    [
     -672.5,
     540
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
     -250,
     -300
    ],
    [
     -250,
     -780
    ],
    [
     -125,
     -780
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
     182.5,
     300
    ],
    [
     182.5,
     420
    ],
    [
     307.5,
     420
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
     -307.5,
     300
    ],
    [
     -307.5,
     420
    ],
    [
     -182.5,
     420
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
     -740,
     -300
    ],
    [
     -740,
     -660
    ],
    [
     -865,
     -660
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
     -740,
     -300
    ],
    [
     -740,
     -780
    ],
    [
     -615,
     -780
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
     -250,
     -300
    ],
    [
     -250,
     -780
    ],
    [
     -375,
     -780
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
     -125,
     -420
    ],
    [
     125,
     -420
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
     740,
     -300
    ],
    [
     740,
     -540
    ],
    [
     865,
     -540
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
     -250,
     -300
    ],
    [
     -250,
     -900
    ],
    [
     -125,
     -900
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
     -797.5,
     300
    ],
    [
     -797.5,
     540
    ],
    [
     -922.5,
     540
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
     -797.5,
     300
    ],
    [
     -797.5,
     660
    ],
    [
     -672.5,
     660
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
     -740,
     -300
    ],
    [
     -740,
     -780
    ],
    [
     -865,
     -780
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
     740,
     -300
    ],
    [
     740,
     -540
    ],
    [
     615,
     -540
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
     -307.5,
     300
    ],
    [
     -307.5,
     420
    ],
    [
     -432.5,
     420
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
     -740,
     -300
    ],
    [
     -740,
     -900
    ],
    [
     -615,
     -900
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
     740,
     -300
    ],
    [
     740,
     -660
    ],
    [
     865,
     -660
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
     -307.5,
     300
    ],
    [
     -307.5,
     540
    ],
    [
     -182.5,
     540
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
     -740,
     -300
    ],
    [
     -740,
     -900
    ],
    [
     -865,
     -900
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
     -740,
     -300
    ],
    [
     -740,
     -1020
    ],
    [
     -615,
     -1020
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
     740,
     -300
    ],
    [
     740,
     -660
    ],
    [
     615,
     -660
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
     -797.5,
     300
    ],
    [
     -797.5,
     660
    ],
    [
     -922.5,
     660
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
     -250,
     -300
    ],
    [
     -250,
     -900
    ],
    [
     -375,
     -900
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
     -125,
     -420
    ],
    [
     0,
     -420
    ],
    [
     0,
     -540
    ],
    [
     125,
     -540
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
     -740,
     -300
    ],
    [
     -740,
     -1020
    ],
    [
     -865,
     -1020
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
     -250,
     -300
    ],
    [
     -250,
     -1020
    ],
    [
     -125,
     -1020
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
     -250,
     -300
    ],
    [
     -250,
     -1020
    ],
    [
     -375,
     -1020
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
     182.5,
     300
    ],
    [
     182.5,
     420
    ],
    [
     57.5,
     420
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
     -250,
     -300
    ],
    [
     -250,
     -1140
    ],
    [
     -125,
     -1140
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
     -797.5,
     300
    ],
    [
     -797.5,
     780
    ],
    [
     -672.5,
     780
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
     -740,
     -300
    ],
    [
     -740,
     -1140
    ],
    [
     -615,
     -1140
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
     -125,
     -420
    ],
    [
     0,
     -420
    ],
    [
     0,
     -660
    ],
    [
     125,
     -660
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
     -740,
     -300
    ],
    [
     -740,
     -1140
    ],
    [
     -865,
     -1140
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
     182.5,
     300
    ],
    [
     182.5,
     540
    ],
    [
     307.5,
     540
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
     -250,
     -300
    ],
    [
     -250,
     -1140
    ],
    [
     -375,
     -1140
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
     -797.5,
     300
    ],
    [
     -797.5,
     780
    ],
    [
     -922.5,
     780
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
     740,
     -300
    ],
    [
     740,
     -780
    ],
    [
     865,
     -780
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
     -740,
     -300
    ],
    [
     -740,
     -1260
    ],
    [
     -615,
     -1260
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
     740,
     -300
    ],
    [
     740,
     -780
    ],
    [
     615,
     -780
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
     740,
     -300
    ],
    [
     740,
     -900
    ],
    [
     865,
     -900
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
     740,
     -300
    ],
    [
     740,
     -900
    ],
    [
     615,
     -900
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
     -307.5,
     300
    ],
    [
     -307.5,
     540
    ],
    [
     -432.5,
     540
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
     740,
     -300
    ],
    [
     740,
     -1020
    ],
    [
     865,
     -1020
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
     615,
     -900
    ],
    [
     365,
     -900
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
     740,
     -300
    ],
    [
     740,
     -1020
    ],
    [
     615,
     -1020
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
     740,
     -300
    ],
    [
     740,
     -1140
    ],
    [
     865,
     -1140
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
     -740,
     -300
    ],
    [
     -740,
     -1260
    ],
    [
     -865,
     -1260
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
     -740,
     -300
    ],
    [
     -740,
     -1380
    ],
    [
     -615,
     -1380
    ]
   ]
  }
 ],
 "warnings": []
};
