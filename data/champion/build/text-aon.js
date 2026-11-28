// Сгенерировано tools/build-graph.mjs — не редактируйте вручную (правьте data/champion/manual или source и пересоберите).
(window.CLASS_TEXT = window.CLASS_TEXT || {})["aon"] = {
 "root": {
  "name": "Champion",
  "html": "An emissary of a deity and a devoted servant. Click nodes to build a character: first pick a sanctification, a cause and a devotion spell, then your feats.",
  "url": "https://2e.aonprd.com/Classes.aspx?ID=58"
 },
 "group-sanct": {
  "name": "Sanctification",
  "html": "<p>Depending on your deity, their sanctification can make you <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>. This commits you to one side of a struggle over souls. Whether you become holy, unholy, or neither will limit your choice of causes, devotion spells, and feats.</p><p>If you “can be” holy or unholy according to your deity's sanctification entry, you make that choice, and if you “must be” holy or unholy, you gain the trait automatically. If the deity lists “none,” you can choose only options that don't require the holy or unholy trait. If you are holy or unholy and gain the opposing trait in some way, you lose the previous trait until you <i>atone</i>.</p><p>Unholy sanctification for a champion can be extremely disruptive to a typical game and should be a player character option only in appropriate adventures or campaigns where the group collectively decides to embrace them. Unholy sanctification and causes are uncommon options.</p>",
  "hint": "Optional choice: holy, unholy or no sanctification."
 },
 "sanct-holy": {
  "name": "Holy",
  "html": "<p>You gain the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> trait and add that trait to any Strikes you make. You gain the edict, “Do not knowingly harm innocents or fail to prevent harm to an innocent if your direct intervention could save them” and the anathema “Commit murder.” Even if your game includes behavior outside the Pathfinder <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2265\">baseline</a>, the acts listed there are anathema to you.</p>"
 },
 "sanct-unholy": {
  "name": "Unholy",
  "html": "<p>You gain the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> trait and add that trait to any Strikes you make. You gain the edict, “Do not put another's needs before your own or those of your deity” and the anathema “Commit an entirely altruistic act, such as giving something away in charity” and “Put anyone's needs before those of your deity.” None of these prevents you from performing acts others might consider helpful, but these acts must be done with the expectation that they ultimately further your own goals or those of your deity.</p>"
 },
 "group-cause": {
  "name": "Cause",
  "html": "<p>You devote yourself to a specific cause in your deity’s name. Some causes are limited to certain sanctifications. Your cause adds to your edicts and anathema and grants you a special protective reaction called your champion’s reaction.</p><p>Causes can be found <a href=\"https://2e.aonprd.com/Causes.aspx\">here</a>.</p>",
  "hint": "Pick one cause. It grants your champion's reaction."
 },
 "cause-12": {
  "name": "Liberation",
  "html": "<p>You will see all people free from bondage and prohibitions.</p><p><b>Edicts</b> oppose slavery and tyranny, fight for others’ freedom to make their own decisions, respect choices others make for their own lives</p><p><b>Anathema</b> force or threaten someone to act a certain way, engage in slavery or tyranny</p><h4 class=\"sub-ability\">Champion's Reaction: Liberating Step <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy damages, grabs, or restrains your ally, and both are in your champion’s aura<hr><p>You free an ally from restraint. If the trigger was an ally taking damage, the ally gains resistance to all damage against the triggering damage equal to 2 + your level. The ally can attempt to break free of effects <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=77\">grabbing</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=90\">restraining</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=81\">immobilizing</a>, or <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=85\">paralyzing</a> them. They either attempt a new save against one such effect that allows a save, or attempt to Escape from one effect as a free action. Whether or not it needed to escape, the ally can then Step as a free action if it's able to move.</p><h4>Relentless Reaction (Level 9)</h4><p>You punish those who ensnare your allies. If the triggering enemy was using any effects to make your ally grabbed, restrained, immobilized, or paralyzed when you used Liberating Step, that enemy takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier.</p><h4>Exalted Reaction (Level 11)</h4><p>In addition to the ally affected by Liberating Step, you and all other allies in your champion’s aura can Step as a free action. You and your allies gain the benefit even if the ally who benefited from Liberating Step can’t move.</p>",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=12"
 },
 "cause-14": {
  "name": "Redemption",
  "html": "<p>Yearning for all to live in harmony, you make every attempt to redeem those others might slay or dismiss.</p><p><b>Edicts</b> try to redeem those who commit wicked deeds, show compassion to others regardless of their authority or station</p><p><b>Anathema</b> kill a sapient enemy without first offering a chance at redemption</p><h4 class=\"sub-ability\">Champion's Reaction: Glimpse of Redemption <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy damages your ally, and both are in your champion’s aura<hr><p>Your enemy hesitates under the weight of sin as visions of redemption play in their mind's eye. The enemy must choose to repent or refuse, with the following effects. If the enemy is <a href=\"https://2e.aonprd.com/Traits.aspx?ID=652\">mindless</a> or otherwise unable to repent, use the refuse result. <ul><li><b>Repent</b> The ally is unharmed by the triggering damage.</li><li><b>Refuse</b> The ally gains <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2318\">resistance</a> to all damage against the triggering damage equal to 2 + your level. After the damaging effect is applied, the enemy becomes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=71\">enfeebled</a> 2 until the end of its next turn.</li></ul></p><h4>Relentless Reaction (Level 9)</h4><p>If the enemy refuses, it takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier.</p><h4>Exalted Reaction (Level 11)</h4><p>If the enemy refuses, you can choose to grant the resistance to yourself and all allies in your champion’s aura, including the triggering ally. If you do, the resistance is reduced by 2 for all.</p>",
  "prereqText": "holy sanctification",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=14"
 },
 "cause-13": {
  "name": "Obedience",
  "html": "<p>Society is ordered with good reason, and people should conduct themselves as appropriate for their proper place.</p><p><b>Edicts</b> enforce proper hierarchies, topple illegitimate hierarchies, lead when you’re the most suited to the task</p><p><b>Anathema</b> let one who is lesser than you wield power over you or lead you</p><h4 class=\"sub-ability\">Champion's Reaction: Iron Command <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy in your champion’s aura damages you<hr><p>You put an impertinent foe who dared harm you in their proper place. You command your enemy to kneel before you in obedience. If they dare to refuse, they must pay the price in pain and anguish. The enemy must choose one of the following options. <ul><li><b>Kneel</b> The enemy drops <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=88\">prone</a> as a free action.</li><li><b>Refuse</b> You deal 1d6 mental damage to the enemy. </li></ul> This damage increases to 2d6 at 5th level, 3d6 at 9th level, 4d6 at 12th level, 5d6 at 16th level, and 6d6 at 19th level. Regardless of which option the enemy chose, your Strikes against it deal 1 extra spirit damage until the end of your next turn. This extra damage increases to 2 at 9th level and 3 at 16th level.</p><h4>Relentless Reaction (Level 9)</h4><p>If the enemy refuses, it takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier.</p><h4>Exalted Reaction (Level 11)</h4><p>Each enemy in your champion's aura other than the triggering creature must also either drop <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=88\">prone</a> or take mental damage (each enemy chooses). These creatures take only minimum damage (typically 3 damage at 11th level, 4 at 12th, 5 at 16th, and 6 at 19th), and the effects they take can't be adjusted by anything that changes your Iron Command. For instance, the Iron Repercussions feat couldn't turn the damage into persistent mental damage for creatures other than the triggering creature.</p>",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=13"
 },
 "cause-10": {
  "name": "Iniquity",
  "html": "<p>You’re dishonorable, dishonest, and committed to breaking the false hopes of kindness.</p><p><b>Edicts</b> destroy that which offends you or stands in your way, take advantage of others, cheat, steal</p><p><b>Anathema</b> bind yourself with a law other than what your deity requires</p><h4 class=\"sub-ability\">Champion's Reaction: Destructive Vengeance <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy in your champion’s aura damages you<hr><p>Bloodshed begets bloodshed as you drag your enemy toward oblivion. You increase the amount of damage you take by 1d6, and you deal 1d6 spirit damage to the triggering enemy. The damage you take and deal when you use this reaction increases to 2d6 at 5th level, 3d6 at 9th level, 4d6 at 12th level, 5d6 at 16th level, and 6d6 at 19th level. In addition, until the end of your next turn, your Strikes against the triggering creature deal 2 extra spirit damage. This extra damage increases to 4 at 9th level and 6 at 16th level.</p><h4>Relentless Reaction (Level 9)</h4><p>An enemy damaged by the initial reaction's damage also takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier. (This applies only to the damage the reaction itself deals, not the damage you deal with subsequent Strikes.)</p><h4>Exalted Reaction (Level 11)</h4><p>Each enemy in your champion’s aura other than the triggering creature takes half the damage you deal to the triggering enemy.</p>",
  "prereqText": "unholy sanctification",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=10"
 },
 "cause-9": {
  "name": "Grandeur",
  "html": "<p>The glowing grandeur of the immaculate celestial realms inspires you, and you exhort their virtues to bring humility to the denizens of other grim worlds.</p><p><b>Edicts</b> provide a shining example for others, enjoy and share the beauty around you, keep yourself tidy and well groomed</p><p><b>Anathema</b> despoil yourself by associating with fiends and unholy force</p><h4 class=\"sub-ability\">Champion's Reaction: Flash of Grandeur <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy damages your ally, and both are in your champion’s aura<hr><p>Imperious divine light flashes out from you to surround your foe. The ally gains resistance to all damage against the triggering damage equal to 2 + your level. Until the end of your next turn, the attacker is affected by <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1653\">_revealing light_</a>.</p><h4>Relentless Reaction (Level 9)</h4><p>The enemy also takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier, and it can't recover from this persistent damage while affected by the revealing light from your Flash of Grandeur.</p><h4>Exalted Reaction (Level 11)</h4><p>In addition to the enemy affected by Flash of Grandeur, each other enemy in your champion's aura is affected by the <i>revealing light</i> spell for 1 round.</p>",
  "prereqText": "holy sanctification",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=9"
 },
 "cause-8": {
  "name": "Desecration",
  "html": "<p>You always take what pleases you, no matter who it hurts, and you spread a malign influence across all you touch.</p><p><b>Edicts</b> subvert or corrupt everything in your path that is pure or holy, sow doubt among those holding ideals of purity or holiness</p><h4 class=\"sub-ability\">Champion's Reaction: Selfish Shield <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy in your champion’s aura damages you<hr><p>Your self-interest keeps you safe. You gain resistance against the triggering damage equal to 2 + half your level, regardless of damage type. In addition, your Strikes against the triggering creature deal 1 extra spirit damage until the end of your next turn. This extra damage increases to 2 at 9th level and 3 at 16th level.</p><h4>Relentless Reaction (Level 9)</h4><p>If your Charisma modifier is +3 or greater, your resistance against the triggering damage equals your Charisma modifier + half your level.</p><h4>Exalted Reaction (Level 11)</h4><p>Each enemy in your champion’s aura takes a –1 status penalty to attack rolls against you until the start of your next turn.</p>",
  "prereqText": "unholy sanctification",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=8"
 },
 "cause-11": {
  "name": "Justice",
  "html": "<p>In your deity’s name you seek justice, following the law and punishing those who transgress it.</p><p><b>Edicts</b> follow the law, respect legitimate authorities or leadership</p><p><b>Anathema</b> take advantage of another, cheat</p><h4 class=\"sub-ability\">Champion's Reaction: Retributive Strike <span class=\"action-icon\">5</span></h4><b>Trigger:</b> An enemy damages your ally, and both are in your champion’s aura<hr><p>You protect your ally and strike your enemy. The ally gains resistance to all damage against the triggering damage equal to 2 + your level. If the enemy is within reach, make a melee Strike against it.</p><h4>Relentless Reaction (Level 9)</h4><p>If your Strike hits, the target takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent spirit damage</a> equal to your Charisma modifier.</p><h4>Exalted Reaction (Level 11)</h4><p>Each ally in your champion’s aura with the target in their melee reach can spend a reaction to Strike the target with a –5 penalty.</p>",
  "url": "https://2e.aonprd.com/Causes.aspx?ID=11"
 },
 "group-devotion": {
  "name": "Devotion Spells",
  "html": "<p>Your deity's power grants you special divine spells called devotion spells, which are a type of focus spell. Choose either <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2049\">_shields of the spirit_</a> or a spell based on your deity's divine font (<a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a> if your deity allows heal, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2048\">_touch of the void_</a> if your deity allows harm).</p><p>It costs 1 Focus Point to cast a focus spell. When you gain your first devotion spell, you also gain a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you regain 1 Focus Point by spending 10 minutes using the <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2621\">Refocus</a> activity to pray to your deity or do service toward their causes.</p><p>Your devotion spells are divine spells. Your spellcasting attribute is Charisma.</p><p><a href=\"https://2e.aonprd.com/Rules.aspx?ID=2228\">Focus spells</a> are automatically heightened to half your level rounded up. Certain feats give you more focus spells. The maximum Focus Points your focus pool can hold is equal to the number of focus spells you have, but can never be more than 3 points.</p>",
  "hint": "Pick one devotion spell."
 },
 "spell-2047": {
  "name": "Lay on Hands",
  "html": "<p>Your hands become infused with powerful vitality, capable of healing a living creature or damaging an <a href=\"https://2e.aonprd.com/Traits.aspx?ID=722\">undead</a> creature with a touch. <ul><li><b>Willing Living Creature</b> The target regains 6 Hit Points. If the target is someone other than yourself, it also gains a +2 status bonus to AC for 1 round.</li><li><b>Undead Creature</b> The target takes 1d6 vitality damage with a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=329\">basic</a> Fortitude save; on a failure, the target also takes a –2 status penalty to AC for 1 round.</li></ul></p><hr><p><b>Heightened (+1)</b> The amount of healing increases by 6, and the damage to an undead target increases by 1d6.</p>",
  "fields": {
   "Range": "touch",
   "Target": "1 willing living creature or 1 undead creature"
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "focus",
    "name": "Focus"
   },
   {
    "slug": "healing",
    "name": "Healing"
   },
   {
    "slug": "manipulate",
    "name": "Manipulate"
   },
   {
    "slug": "vitality",
    "name": "Vitality"
   }
  ],
  "url": "https://2e.aonprd.com/Spells.aspx?ID=2047",
  "source": "Player Core 2 pg. 255"
 },
 "spell-2049": {
  "name": "Shields of the Spirit",
  "html": "<p>You <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2316\">Raise your Shield</a>, causing ephemeral spirit shields to float within your champion's aura. The shields last until the start of your next turn or until you're no longer raising your shield, whichever comes first. While one of your allies is in your champion's aura, the shields grant them a +1 status bonus to AC, and each time an enemy makes an attack against the ally, the enemy takes 1d4 spirit damage (even if it misses).</p><p>The benefit applies only while an ally is in your aura, ending for any ally that leaves and applying to any that enters later. As normal, you don't count as your own ally and therefore don't get the benefits of the spirit shields yourself.</p><hr><p><b>Heightened (+2)</b> The damage increases by 1d4.</p>",
  "fields": {
   "Requirements": "You are wielding a shield."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "concentrate",
    "name": "Concentrate"
   },
   {
    "slug": "focus",
    "name": "Focus"
   },
   {
    "slug": "sanctified",
    "name": "Sanctified"
   },
   {
    "slug": "spirit",
    "name": "Spirit"
   }
  ],
  "url": "https://2e.aonprd.com/Spells.aspx?ID=2049",
  "source": "Player Core 2 pg. 255"
 },
 "spell-2048": {
  "name": "Touch of the Void",
  "html": "<p>You infuse the target with void energy, healing <a href=\"https://2e.aonprd.com/Traits.aspx?ID=722\">undead</a> or damaging a living creature. <ul><li><b>Willing Undead Creature</b> The target regains 6 Hit Points. If the target is yourself, you also gain a +2 status bonus to damage rolls for 1 round.</li><li><b>Living Creature</b> The target takes 1d6 void damage with a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=329\">basic</a> Fortitude save; on a failure, the target also takes a –2 status penalty to AC for 1 round.</li></ul></p><hr><p><b>Heightened (+1)</b> The amount of healing increases by 6, and the damage to a living target increases by 1d6.</p>",
  "fields": {
   "Range": "touch",
   "Target": "1 willing undead creature or 1 living creature"
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "focus",
    "name": "Focus"
   },
   {
    "slug": "manipulate",
    "name": "Manipulate"
   },
   {
    "slug": "void",
    "name": "Void"
   }
  ],
  "url": "https://2e.aonprd.com/Spells.aspx?ID=2048",
  "source": "Player Core 2 pg. 255"
 },
 "group-blessing": {
  "name": "Blessing of the Devoted",
  "html": "<p>Your deity blesses your service with a boon. This might come in the form of a spirit that visits you and inhabits your items or body, a mysterious divine tattoo upon your body, or the like. Choose one of the following blessings, or any other to which you have access.</p>",
  "hint": "Available from 3rd level. The Second Blessing feat lets you take another one."
 },
 "blessing-armament": {
  "name": "Blessed Armament",
  "html": "<p>Select one weapon or <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=3086\">handwraps of mighty blows</a>. You gain that armament's critical specialization effect, and you grant the armament a property rune of your choice from the following list: <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2837\">fearsome</a>, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2840\">ghost touch</a>, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2845\">returning</a>, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2846\">shifting</a>, or <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2852\">vitalizing</a>. During your daily preparations, you can change the spirit to inhabit a different armament, grant a different rune, or both.<details class=\"clarification\"><details-summary> Paizo Clarification</details-summary>The rune granted by a champion's blessed armament doesn't count toward the weapon's number of property runes. Unlike many similar abilities, it can be used even if the weapon already has its <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3162\">maximum number of property runes.</a></details></p>"
 },
 "blessing-shield": {
  "name": "Blessed Shield",
  "html": "<p>In your hands, a shield gains the minor <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2811\">_reinforcing_</a> rune. As you go up in level, the shield gains the <i>reinforcing</i> rune of your level (lesser at 7th level, moderate at 10th level, greater at 13th level, major at 16th level, and supreme at 19th level). If your shield already has the appropriate <i>reinforcing</i> rune for your level, or if it's a <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2828\">sturdy shield</a> of the same level as the appropriate <i>reinforcing</i> rune, the shield's Hardness instead increases by 1.</p>"
 },
 "blessing-swiftness": {
  "name": "Blessed Swiftness",
  "html": "<p>You gain a +5-foot status bonus to Speed. If you're mounted, your mount gains the bonus instead. In addition, when the movement of one of your allies triggers an enemy's reaction while the ally is in your champion's aura, the ally gains a +2 status bonus to all defenses against that reaction.</p>"
 },
 "theme-cause": {
  "name": "Cause",
  "html": "Feats tied to your cause and your champion's reaction. The cause itself is picked with the card above."
 },
 "theme-devotion": {
  "name": "Devotion",
  "html": "Devotion spell feats: lay on hands, shields of the spirit, touch of the void."
 },
 "theme-blessing": {
  "name": "Blessing",
  "html": "Blessing of the devoted feats: armament, shield, swiftness."
 },
 "theme-aura": {
  "name": "Auras",
  "html": "Feats that strengthen your champion's aura (every champion has it from 1st level)."
 },
 "theme-shield": {
  "name": "Shield",
  "html": "Feats for fighting with a shield. Every champion has Shield Block from 1st level."
 },
 "theme-steed": {
  "name": "Steed",
  "html": "Your faithful steed and its growth."
 },
 "theme-faith": {
  "name": "Faith & Oaths",
  "html": "Deity domains, prayers and oaths."
 },
 "theme-sanct": {
  "name": "Sanctification",
  "html": "Feats for holy and unholy champions."
 },
 "theme-combat": {
  "name": "Combat",
  "html": "Champion combat techniques."
 },
 "feat-5885": {
  "name": "Faithful Steed",
  "html": "<p>You gain the service of a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2113\">young animal companion</a> as a mount. If you have the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> trait, your mount gains it as well, as do the mount's Strikes. Typically, the steed is an animal companion with the mount ability (such as a <a href=\"https://2e.aonprd.com/Companions.aspx?ID=76\">horse</a>). The GM might allow another animal companion option, or allow the creature to have a different appearance that thematically fits your deity.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=7991\">Acclimated Mount</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=7992\">Faithful Stride</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5906\">Heal Mount</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5900\">Loyal Warhorse</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=7523\">Pale Horse</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=7993\">Steed's Toppling Strike</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5885",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5889": {
  "name": "Unimpeded Step",
  "html": "<p>With a burst of divine liberation, your ally's movement from your <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2808\">Liberating Step</a> is unaffected by <a href=\"https://2e.aonprd.com/Rules.aspx?ID=453\">difficult terrain</a>, greater difficult terrain, <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2369\">narrow surfaces</a>, and <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2370\">uneven ground</a>. If you have the exalted reaction benefit, this applies to everyone who Steps.</p>",
  "prereqText": "liberation cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=12\">liberation cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5889",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5891": {
  "name": "Weight of Guilt",
  "html": "<p>Guilt clouds the minds of those who ignore your <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2810\">Glimpse of Redemption</a>. Instead of making an enemy who refuses redemption <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=71\">enfeebled 2</a>, you can make it stupefied 2 for the same duration.</p>",
  "prereqText": "redemption cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=14\">redemption cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5891",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5883": {
  "name": "Deity's Domain",
  "html": "<p>You embody an aspect of your deity. Choose one of your deity's <a href=\"https://2e.aonprd.com/Domains.aspx\">domains</a>. You gain the domain's initial domain spell as a devotion spell.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5902\">Advanced Deity's Domain</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5883",
  "source": "Player Core 2 pg. 93"
 },
 "feat-5886": {
  "name": "Iron Repercussions",
  "html": "<p>Disobeying your Iron Command has lasting consequences. If an enemy refuses to kneel to you, you can deal <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent mental damage</a> instead of normal mental damage. You must decide whether the mental damage will be persistent before your enemy chooses whether to kneel or not. The amount of damage is unchanged.</p>",
  "prereqText": "obedience cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=13\">obedience cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5886",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5890": {
  "name": "Vicious Vengeance",
  "html": "<p>While your vengeance is painful for both you and your foe, none can doubt that your enemies suffer more. You gain a circumstance bonus to the damage you deal from <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2806\">Destructive Vengeance</a> equal to the number of damage dice from the reaction. This applies to only the damage the enemy takes, not the damage to yourself or the extra damage you gain after using the reaction.</p>",
  "prereqText": "iniquity cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=10\">iniquity cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5890",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5882": {
  "name": "Defensive Advance",
  "html": "<p>With the protection of your shield, you dive into battle! You <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2316\">Raise your Shield</a> and Stride. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Defensive Advance while <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2310\">Burrowing</a>, <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2374\">Climbing</a>, <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2312\">Flying</a>, or <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2381\">Swimming</a> instead of Striding if you have the corresponding movement type.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "flourish",
    "name": "Flourish"
   },
   {
    "slug": "guardian",
    "name": "Guardian"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5882",
  "source": "Player Core 2 pg. 93"
 },
 "feat-5881": {
  "name": "Brilliant Flash",
  "html": "<p>Your light cleanses souls of fear. When you use <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2805\">Flash of Grandeur</a>, the attacker is also <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=58\">off-guard</a> for 1 round.</p>",
  "prereqText": "grandeur cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=9\">grandeur cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5881",
  "source": "Player Core 2 pg. 93"
 },
 "feat-5884": {
  "name": "Desperate Prayer",
  "html": "<p>You call out to your deity in a plea for their aid. You gain 1 Focus Point, which you can spend only to cast a devotion spell. If you don't spend this Focus Point by the end of this turn, it is lost.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=7527\">Retributive Focus</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "You begin your turn and have no Focus Points.",
   "Frequency": "once per day"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5884",
  "source": "Player Core 2 pg. 93"
 },
 "feat-5888": {
  "name": "Ongoing Selfishness",
  "html": "<p>Your powerful personality and incredible ego demand that you protect yourself above all else. After you use <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2804\">Selfish Shield</a>, you gain resistance to all further damage from the triggering enemy until the end of the turn on which you used the reaction. This resistance is equal to half your Selfish Shield resistance.</p>",
  "prereqText": "desecration cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=8\">desecration cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5888",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5887": {
  "name": "Nimble Reprisal",
  "html": "<p>You can use <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2807\">Retributive Strike</a> at greater distance. You can use a ranged weapon to make a ranged Strike instead of a melee Strike for Retributive Strike. The enemy needs to be in range, but not in reach, and it must still be in your champion's aura. You can also make melee Strikes against enemies a bit farther away. If the enemy that triggered your reaction is outside your reach but is within 5 feet of your reach, as part of your reaction you can Step to put the enemy in your reach before making a melee Retributive Strike.</p>",
  "prereqText": "justice cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=11\">justice cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5887",
  "source": "Player Core 2 pg. 94"
 },
 "feat-7596": {
  "name": "Splinter Faith",
  "html": "<p>Your faith in your deity is represented in an extremely unusual way that some might call heretical. When you select this feat, you should detail the fundamental tenets of your splinter faith, though it shouldn't affect the deity's edicts or anathema. Choose four domains. These domains must be chosen from among your deity's domains, your deity's alternate domains, and up to one domain that isn't on either list and isn't anathematic to your deity. Any domain spell you cast from a domain that isn't on either of your deity's lists is always heightened to 1 rank lower than usual for a focus spell. For the purpose of abilities that depend on your deity's domains, the four domains you chose are your deity's domains, and any of your deity's domains you didn't choose are now among your deity's alternate domains.</p><p><b>Special</b> Unless you take this feat at 1st level, changing the way you relate to your deity requires retraining, as described in the <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3350\">Changing Faith</a> section. If you take this feat and previously benefited from any effect that requires a domain your splinter faith doesn't include, such as a domain spell from <a href=\"https://2e.aonprd.com/Feats.aspx?ID=4644\">Domain Initiate</a>, you lose that effect.</p><p>At the GM's discretion, you can take this feat with other classes or archetypes that gain access to domains through a deity. .</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "cleric",
    "name": "Cleric"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7596",
  "source": "Divine Mysteries pg. 9"
 },
 "feat-5892": {
  "name": "Divine Grace",
  "html": "<p>You call upon your deity's grace, gaining a +2 circumstance bonus to the save.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "You attempt a save against a spell, but you haven’t rolled yet."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5892",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5893": {
  "name": "Divine Health",
  "html": "<p>Your faith makes you resistant to disease, protecting you as you offer succor to the ill. You gain a +2 status bonus to saves against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=578\">diseases</a> and <a href=\"https://2e.aonprd.com/Traits.aspx?ID=669\">poisons</a> and to flat checks to recover from <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent poison damage</a>. Allies in your champion's aura get this benefit, but their bonus is +1.</p><p>In addition, if you roll a success on a save against a disease or poison, you get a critical success instead. (Your allies don't share this benefit.) If you have the sacred body class feature, when you roll a critical failure on a save against a disease or poison, you get a failure instead.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5893",
  "source": "Player Core 2 pg. 94"
 },
 "feat-7518": {
  "name": "Oath of The Defender",
  "html": "<p>During your <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2575\">daily preparations</a>, you can swear an oath to defend against a certain kind of enemy during your deeds that day. Choose <a href=\"https://2e.aonprd.com/Traits.aspx?ID=523\">aberrations</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=551\">celestials</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=581\">dragons</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=600\">fiends</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=722\">undead</a>. You can’t choose celestials if you’re <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>, nor can you choose fiends if you’re <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>. You gain an edict to defend against creatures of that kind.</p><p>Allies in your champion’s aura, not including you, get <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2312\">resistance</a> 2 to damage dealt by creatures with the chosen trait. If such a creature deals more than one damage type at once, apply this resistance only to the highest amount of damage. The resistance increases to 3 at 7th level, 4 at 12th level, and 5 at 17th level. If a creature with the chosen trait triggers your champion’s reaction and your champion’s reaction grants resistance against the triggering damage, the resistance increases by 5.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "oath",
    "name": "Oath"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7518",
  "source": "Divine Mysteries pg. 276"
 },
 "feat-7517": {
  "name": "Oath of The Avenger",
  "html": "<p>You’ve sworn an oath to punish wicked acts you witness. You gain the edict “hunt down those who have harmed innocents or committed heinous atrocities.” When you see a creature harm an ally, an innocent, or a noncombatant, you can invoke your oath against that creature. Like speaking, this doesn’t require an action. Most champions choose to invoke these oaths out loud if they’re able. The invocation lasts indefinitely, though you can choose to end if you are satisfied that the target has reformed, atoned, or been forgiven.</p><p>You can use <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a> to damage a creature you have invoked your oath against as if it were <a href=\"https://2e.aonprd.com/Traits.aspx?ID=722\">undead</a>; in this case, lay on hands deals <a href=\"https://2e.aonprd.com/Traits.aspx?ID=737\">spirit</a> damage instead of <a href=\"https://2e.aonprd.com/Traits.aspx?ID=509\">vitality</a> damage, gains the spirit trait, and loses the vitality trait. This doesn’t prevent you from healing such a creature with <i>lay on hands</i> if you so choose.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "oath",
    "name": "Oath"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7517",
  "source": "Divine Mysteries pg. 276"
 },
 "feat-7519": {
  "name": "Oath of The Slayer",
  "html": "<p>During your <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2575\">daily preparations</a>, you can swear an oath to defeat, topple, or destroy a certain kind of enemy during your deeds that day. Choose <a href=\"https://2e.aonprd.com/Traits.aspx?ID=523\">aberrations</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=551\">celestials</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=581\">dragons</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=600\">fiends</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=722\">undead</a>. You can’t choose celestials if you’re <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>, nor can you choose fiends if you’re <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>. You gain an edict to banish or slay creatures of that kind.</p><p>Your <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2306\">Strikes</a> and devotion spells that deal damage do an additional 1 <a href=\"https://2e.aonprd.com/Traits.aspx?ID=737\">spirit</a> damage against a creature with the chosen trait. This damage increases to 2 at 7th level and 3 at 14th level. If a creature with the chosen trait triggers your champion’s reaction, this additional damage doubles until the end of your next turn.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "oath",
    "name": "Oath"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7519",
  "source": "Divine Mysteries pg. 276"
 },
 "feat-5894": {
  "name": "Aura of Courage",
  "html": "<p>You stand strong in the face of danger and inspire your allies to do the same. Whenever you become <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=76\">frightened</a>, reduce the condition value by 1 (to a minimum of 0). At the end of your turn, each ally in your champion's aura reduces its frightened value by 1.</p>",
  "prereqText": "champion’s aura, holy",
  "prereqHtml": "champion’s aura, holy",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5894",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5895": {
  "name": "Aura of Despair",
  "html": "<p>Your presence as an avatar of evil makes your foes more susceptible to terror and makes it almost impossible for them to shake off fear when you are near. Enemies in your champion's aura take a –1 circumstance penalty to saving throws against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=598\">fear</a>. In addition, an enemy that ends its turn in  your champion's aura can't reduce the value of its <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=76\">frightened</a> condition below 1.</p>",
  "prereqText": "champion’s aura, unholy",
  "prereqHtml": "champion’s aura, unholy",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5895",
  "source": "Player Core 2 pg. 94"
 },
 "feat-5898": {
  "name": "Security",
  "html": "<p>Those you shield can benefit from your lasting protection. You can cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2049\">_shields of the spirit_</a> using 2 actions instead of 1. If you do, you can choose one ally in your champion's aura to gain a spirit shield that accompanies it. For 1 minute, that ally gains the benefits of <i>shields of the spirit</i>, even while the ally isn't in your champion's aura and even if your shield isn't raised. If you create another companion shield, any previous one ends.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5905\">Greater Security</a></p>",
  "prereqText": "_shields of the spirit_",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Spells.aspx?ID=2049\">_shields of the spirit_</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5898",
  "source": "Player Core 2 pg. 95"
 },
 "feat-5896": {
  "name": "Cruelty",
  "html": "<p>The harm you deal with your corrupting touch saps the strength from your enemy's body. You can cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2048\">_touch of the void_</a> targeting a living creature using 2 actions instead of 1. If you do, the target is also <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=71\">enfeebled 1</a> for 1 minute if it fails its save (enfeebled 2 if it critically fails).</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5903\">Greater Cruelty</a></p>",
  "prereqText": "_touch of the void_",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Spells.aspx?ID=2048\">_touch of the void_</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5896",
  "source": "Player Core 2 pg. 95"
 },
 "feat-5897": {
  "name": "Mercy",
  "html": "<p>Your touch soothes the body or mind. You can cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a> targeting a living creature using 2 actions instead of 1. If you do, you can attempt to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=371\">counteract</a> one condition of your choice affecting the target. When you select this feat, choose one of the following options, which determines the conditions you can choose: <b>Mercy of the Body</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=59\">blinded</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=65\">dazzled</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=66\">deafened</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=71\">enfeebled</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=91\">sickened</a>; <b>Mercy of Grace</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=61\">clumsy</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=77\">grabbed</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=85\">paralyzed</a>; <b>Mercy of the Mind</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=74\">fleeing</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=76\">frightened</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=94\">stupefied</a>.</p><p><b>Special</b> You can select this feat up to three times. Each time, choose a different type of mercy and add its options to those you can choose when you cast a 2-action <i>lay on hands</i>.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5912\">Affliction Mercy</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=6279\">Blessed Spell</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5904\">Greater Mercy</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5929\">Ultimate Mercy</a></p>",
  "prereqText": "_lay on hands_",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5897",
  "source": "Player Core 2 pg. 95"
 },
 "feat-7991": {
  "name": "Acclimated Mount",
  "html": "<p>By the grace of your god, your mount can overcome the natural challenges and hazards present in a specific terrain. Choose  aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground. Your mount must have a swim Speed to select  aquatic, and a fly Speed to select sky. Your mount ignores the effects of <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2366\">difficult terrain</a> while in the selected terrain.</p><p>If you become an expert in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=49\">Survival</a>, you can pray during your daily preparations each day to change the type of terrain to which your mount is acclimated.</p>",
  "prereqText": "Faithful Steed; Trained in Survival",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>; Trained in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=49\">Survival</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7991",
  "source": "Battlecry! pg. 71"
 },
 "feat-5900": {
  "name": "Loyal Warhorse",
  "html": "<p>The loyalty you and your mount share is unbreakable. The mount you gained with Faithful Steed is now a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2117\">mature animal companion</a>. In addition, your mount never attacks you, even if it is magically compelled to do so.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5908\">Imposing Destrier</a></p>",
  "prereqText": "Faithful Steed",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5900",
  "source": "Player Core 2 pg. 95"
 },
 "feat-5832": {
  "name": "Reactive Strike",
  "html": "<p>You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=7676\">Immediate Rebuke</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "A creature within your reach uses a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=645\">manipulate</a> action or a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=658\">move</a> action, makes a ranged attack, or leaves a square during a move action it’s using."
  },
  "traits": [
   {
    "slug": "barbarian",
    "name": "Barbarian"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "commander",
    "name": "Commander"
   },
   {
    "slug": "exemplar",
    "name": "Exemplar"
   },
   {
    "slug": "guardian",
    "name": "Guardian"
   },
   {
    "slug": "magus",
    "name": "Magus"
   },
   {
    "slug": "swashbuckler",
    "name": "Swashbuckler"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5832",
  "source": "Player Core 2 pg. 80"
 },
 "feat-5899": {
  "name": "Expand Aura",
  "html": "<p>You focus your divine power to extend your influence and protection. Expand the radius of your champion's aura to 30 feet until the start of your next turn. At 10th level, the expansion lasts for 1 minute, and at 16th level, it lasts until you Dismiss it.</p>",
  "prereqText": "champion’s aura",
  "prereqHtml": "champion’s aura",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "concentrate",
    "name": "Concentrate"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5899",
  "source": "Player Core 2 pg. 95"
 },
 "feat-5901": {
  "name": "Smite",
  "html": "<p>You single out one enemy to destroy in your deity's name. Designate one enemy you can see. Until the start of your next turn, your Strikes against that enemy gain a +3 status bonus to damage, increasing to +4 if you have master proficiency with the weapon or unarmed attack you're using for the Strike. If you're <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> and the target has the opposite trait, the bonus is +4 (or +6 if you're a master).</p><p>If the target takes a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=300\">hostile action</a> against you or one of your allies before the start of your next turn, the duration extends to the end of that enemy's next turn. If the enemy continues to take these hostile actions each turn, the duration continues to extend.</p><p>Your current Smite ends if you use the Smite action again.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "concentrate",
    "name": "Concentrate"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5901",
  "source": "Player Core 2 pg. 96"
 },
 "feat-4807": {
  "name": "Shield Warden",
  "html": "<p>When you have a shield raised, you can use your Shield Block reaction when an attack is made against an ally adjacent to you. If you do, the shield prevents that ally from taking damage instead of preventing you from taking damage, following the normal rules for Shield Block.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5926\">Shield of Grace</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5910\">Shield of Reckoning</a></p>",
  "prereqText": "Shield Block",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5212\">Shield Block</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "commander",
    "name": "Commander"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=4807",
  "source": "Player Core pg. 145"
 },
 "feat-4816": {
  "name": "Quick Shield Block",
  "html": "<p>You can bring your shield into place with hardly a thought. At the start of each of your turns, you gain an additional reaction that you can use only to Shield Block.</p>",
  "prereqText": "Shield Block",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5212\">Shield Block</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=4816",
  "source": "Player Core pg. 147"
 },
 "feat-5907": {
  "name": "Second Blessing",
  "html": "<p>Your continued service grants you another boon. Choose a second blessing of the devoted (different from your first one) and gain its benefits.</p>",
  "prereqText": "blessing of the devoted",
  "prereqHtml": "blessing of the devoted",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5907",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5906": {
  "name": "Heal Mount",
  "html": "<p>Your devotion to your mount manifests as a surge of vital energy. When you cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a> on your mount, instead of the normal amount, the spell restores 10 Hit Points, plus 10 for each heightened rank.</p>",
  "prereqText": "Faithful Steed; _lay on hands_",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>; <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5906",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5902": {
  "name": "Advanced Deity's Domain",
  "html": "<p>Through your conviction, you have glimpsed the deeper secrets of your deity's domain. You gain an advanced domain spell from the domain you chose with Deity's Domain as a devotion spell.</p>",
  "prereqText": "Deity's Domain",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5883\">Deity's Domain</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5902",
  "source": "Player Core 2 pg. 96"
 },
 "feat-5905": {
  "name": "Greater Security",
  "html": "<p>Shield in hand, you offer your ally its full protection you do yourself. While the companion shield is in effect, if your shield is raised, the ally with the companion shield gets the same bonus to AC your shield grants, and you can trigger <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5212\">Shield Block</a> if that ally would meet the trigger. This uses your shield's statistics and applies damage to your shield.</p>",
  "prereqText": "Security",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5898\">Security</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5905",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5903": {
  "name": "Greater Cruelty",
  "html": "<p>The extent of your corruption devastates your foes' minds and reflexes. When you use Cruelty, you can choose to make the target <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=61\">clumsy</a> or <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=94\">stupefied</a> instead, with the same condition value. Make the choice when you Cast the Spell (before you know the result of the target's save).</p>",
  "prereqText": "Cruelty",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5896\">Cruelty</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5903",
  "source": "Player Core 2 pg. 96"
 },
 "feat-5904": {
  "name": "Greater Mercy",
  "html": "<p>Your faith enhances your ability to remove conditions. Add the following options to the list of conditions you can <a href=\"https://2e.aonprd.com/Rules.aspx?ID=371\">counteract</a> for any type of mercy you can grant. <b>Mercy of the Body</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=68\">drained</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=92\">slowed</a>; if you're 16th level, add <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=93\">stunned</a>; <b>Mercy of Grace</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=81\">immobilized</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=90\">restrained</a>, slowed; if you're 12th level, add <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=87\">petrified</a>; if you're 16th level, add stunned; <b>Mercy of the Mind</b> <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=63\">confused</a>, <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=64\">controlled</a>, slowed; if you're 16th level, add <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=67\">doomed</a> and stunned.</p>",
  "prereqText": "Mercy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5897\">Mercy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5904",
  "source": "Player Core 2 pg. 97"
 },
 "feat-7521": {
  "name": "Sense Unholiness",
  "html": "<p>You sense the truly wicked as a queasy or foreboding feeling. You can sense the presence of creatures with the unholy trait within 120 feet. This functions as a vague sense, similar to humans’ sense of smell. An unholy creature using a disguise or otherwise trying to hide its presence attempts a <a href=\"https://2e.aonprd.com/Skills.aspx?ID=38\">Deception</a> check against your <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3303\">Perception</a> DC to hide its sanctification from you. If the creature succeeds at its Deception check, it is then temporarily immune to your Sense Unholiness for 1 day.</p>",
  "prereqText": "[Champion] holy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=58\">[Champion</a>] <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7521",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-7520": {
  "name": "Sense Holiness",
  "html": "<p>The presence of goodness sickens you with its saccharine self-righteousness. You can sense the presence of creatures with the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> trait within 120 feet. This functions as a vague sense, similar to humans’ sense of smell. A holy creature using a disguise or otherwise trying to hide its presence attempts a <a href=\"https://2e.aonprd.com/Skills.aspx?ID=38\">Deception</a> check against your <a href=\"https://2e.aonprd.com/Rules.aspx?ID=3303\">Perception</a> DC to hide its sanctification from you. If the creature succeeds at its Deception check, it is then temporarily immune to your Sense Holiness for 1 day.</p>",
  "prereqText": "[Champion] unholy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=58\">[Champion</a>] <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7520",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-7992": {
  "name": "Faithful Stride",
  "html": "<p>Confident in your faith, you <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2400\">Command an Animal</a> to order your mount to Stride up to twice its Speed (or up to three times its Speed if you used 3 actions for Faithful Stride). During this movement, your mount can Stride across liquid and other surfaces that don't support its weight. If your mount ends its movement on a surface that can't support it, your mount (and you) fall in or it collapses as normal.</p>",
  "prereqText": "Faithful Steed",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>",
  "fields": {
   "Requirements": "You are riding your mount."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "magical",
    "name": "Magical"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7992",
  "source": "Battlecry! pg. 71"
 },
 "feat-5908": {
  "name": "Imposing Destrier",
  "html": "<p>Under your care, your mount has realized its innate potential. The mount you gained with Faithful Steed is now a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2118\">nimble</a> or <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2119\">savage</a> animal companion.</p><p>Your animal companion has greater independence. During an encounter, even if you don't use the <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2400\">Command an Animal</a> action, your animal companion can still use 1 action that round on your turn to Stride or Strike. It can do this at any point during your turn, as long as you aren't currently taking an action. If it does, that's all the actions it gets that round—you can't Command it later.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5923\">Auspicious Mount</a></p>",
  "prereqText": "Loyal Warhorse",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5900\">Loyal Warhorse</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5908",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5911": {
  "name": "Spectral Advance",
  "html": "<p>You gain the <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2052\">_spectral advance_</a> devotion spell, which lets you move to an enemy, bypassing hindrances.</p>",
  "prereqText": "blessed swiftness",
  "prereqHtml": "blessed swiftness",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "concentrate",
    "name": "Concentrate"
   },
   {
    "slug": "divine",
    "name": "Divine"
   },
   {
    "slug": "teleportation",
    "name": "Teleportation"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5911",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5909": {
  "name": "Radiant Armament",
  "html": "<p>Your blessed armament radiates power, further enhancing your chosen weapon. When you choose the weapon for your blessed armament during your daily preparations, add the <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2832\">_astral_</a> and <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2833\">_brilliant_</a> property runes to the list of effects you can choose from. If you're <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>, also add the <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2842\">_holy_</a> rune, and if you're <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>, also add the <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2851\">_unholy_</a> rune.</p><p>In addition, you can change the rune you've selected for the day to a different rune from your list as a 10-minute activity that has the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=561\">concentrate</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=579\">divine</a>, and <a href=\"https://2e.aonprd.com/Traits.aspx?ID=595\">exploration</a> traits. Changing the rune doesn't restore abilities that can be used only a limited number of times, such as Holy Healing for the <i>holy</i> rune.</p>",
  "prereqText": "blessed armament",
  "prereqHtml": "blessed armament",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5909",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5910": {
  "name": "Shield of Reckoning",
  "html": "<p>When you shield your ally against an attack, you call upon your power to protect your ally further. You use the Shield Block reaction to prevent damage to an ally and also use your champion's reaction against the enemy that attacked your ally.</p><p><b>Special</b> If you have an ability that gives you an additional reaction you can use to Shield Block or use your champion's reaction, you can use it for Shield of Reckoning.</p>",
  "prereqText": "Shield Warden; blessed shield, champion's reaction",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=4807\">Shield Warden</a>; blessed shield, champion's reaction",
  "fields": {
   "Trigger": "An enemy’s attack against an ally matches the trigger for both your <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5212\">Shield Block</a> reaction and your champion’s reaction.",
   "Frequency": "once per round"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5910",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5913": {
  "name": "Aura of Faith",
  "html": "<p>You radiate an aura of belief that imbues your attacks and those of nearby allies with divine power. Each willing ally in your champion's aura adds the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> trait to their Strikes if you're holy or adds the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> trait to their Strikes if you're unholy.</p>",
  "prereqText": "holy or unholy",
  "prereqHtml": "holy or unholy",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5913",
  "source": "Player Core 2 pg. 97"
 },
 "feat-5914": {
  "name": "Blessed Counterstrike",
  "html": "<p>You call upon divine power and make a weapon or unarmed Strike against the enemy who triggered your champion's reaction. The Strike deals one extra weapon damage die. If this Strike hits, until the start of your next turn, the target gains weakness equal to half your level to all Strikes made by you and your allies.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=5925\">Instrument of Zeal</a></p>",
  "prereqText": "champion’s reaction that grants an ally resistance to an enemy’s damage (including the grandeur, justice, liberation, and redemption causes)",
  "prereqHtml": "champion’s reaction that grants an ally resistance to an enemy’s damage (including the grandeur, justice, liberation, and redemption causes)",
  "fields": {
   "Requirements": "An enemy triggered your champion’s reaction since the end of your last turn."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "flourish",
    "name": "Flourish"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5914",
  "source": "Player Core 2 pg. 98"
 },
 "feat-7523": {
  "name": "Pale Horse",
  "html": "<p>Your mount becomes a grotesque creature of foreboding when you ride it. Its appearance transforms as flames erupt from its skin, a whorl of void energy surrounds it, or poison leaks from its flesh. When you <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2314\">Mount</a> your faithful steed, you can choose <a href=\"https://2e.aonprd.com/Traits.aspx?ID=604\">fire</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=669\">poison</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=510\">void</a>. As long as you ride it, your steed gains <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2312\">resistance</a> 10 to the chosen damage type, and any creature that touches your steed takes 1d6 damage of the chosen type; this includes hitting the steed with an unarmed attack or with a melee weapon <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2306\">Strike</a> while adjacent to the steed. This damage increases to 2d6 at 16th level and 3d6 at 20th level.</p>",
  "prereqText": "Faithful Steed; [Champion] unholy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>; <a href=\"https://2e.aonprd.com/Classes.aspx?ID=58\">[Champion</a>] unholy",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7523",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-5917": {
  "name": "Divine Wall",
  "html": "<p>You use your shield to harry your enemies, preventing them from stepping away from or around you. All spaces adjacent to you are <a href=\"https://2e.aonprd.com/Rules.aspx?ID=453\">difficult terrain</a> for your enemies.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Requirements": "You're wielding a shield."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5917",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5912": {
  "name": "Affliction Mercy",
  "html": "<p>The divine grace that flows through you grants reprieve from an affliction. Add mercy of recuperation to the types of mercy you can provide, allowing you to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=371\">counteract</a> an affliction instead of an effect causing a condition (typically an affliction is a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=566\">curse</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=578\">disease</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=669\">poison</a>).</p>",
  "prereqText": "Mercy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5897\">Mercy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5912",
  "source": "Player Core 2 pg. 97"
 },
 "feat-7993": {
  "name": "Steed's Toppling Strike",
  "html": "<p>Those who defy your cause feel the powerful attacks of your mount. You <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2400\">Command an Animal</a> to order your steed to Strike the enemy who triggered your champion's reaction. Your steed's unarmed attack deals one extra damage die for this Strike. If the Strike hits, the target is knocked <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=88\">prone</a>.</p>",
  "prereqText": "Faithful Steed",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5885\">Faithful Steed</a>",
  "fields": {
   "Requirements": "An enemy triggered your champion's reaction since the end of your last turn."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "flourish",
    "name": "Flourish"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7993",
  "source": "Battlecry! pg. 71"
 },
 "feat-7522": {
  "name": "Enforce Oath",
  "html": "<p>You call on your oath to embolden you in combat. Select one creature you can see that you’ve sworn an oath against (per the terms of your oath feat). You gain a +1 status bonus to AC and saves against attacks and effects by the chosen creature. You also gain a +1 status bonus to attack rolls against the chosen creature. However, your dedication draws your focus away from all other enemies. You take a –1 status penalty to AC, attack rolls, and saves against all other creatures until you stop Enforcing your Oath.</p><p>Enforce Oath lasts indefinitely, but it ends if the enemy is reduced to 0 Hit Points, the enemy offers a legitimate surrender to you or your allies, you fall <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=95\">unconscious</a>, or the enemy goes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=98\">unnoticed</a> by you for more than 1 minute. You can also <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2311\">Dismiss</a> the effect as a free action.</p>",
  "prereqText": "Any feat with the oath  trait",
  "prereqHtml": "Any feat with the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=119\">oath</a>  trait",
  "fields": {
   "Requirements": "You can see a creature you’ve sworn an oath against.",
   "Frequency": "once per hour"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7522",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-5915": {
  "name": "Champion's Sacrifice",
  "html": "<p>You can suffer so that others might live. You can cast the <a href=\"https://2e.aonprd.com/Spells.aspx?ID=2050\">_champion's sacrifice_</a> devotion spell.</p>",
  "prereqText": "you aren't unholy",
  "prereqHtml": "you aren't unholy",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5915",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5916": {
  "name": "Devoted Focus",
  "html": "<p>Your devotion is strong enough to increase your focus to incredible heights. Whenever you <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2621\">Refocus</a>, completely refill your focus pool.</p>",
  "prereqText": "devotion spells",
  "prereqHtml": "devotion spells",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5916",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5918": {
  "name": "Gruesome Strike",
  "html": "<p>Make a Strike against the creature that triggered your champion's reaction. If you hit, double the extra damage the target takes from your reaction, and the target must succeed at a Fortitude save against your class DC or be <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=68\">drained 1</a>. Regardless of the result, the creature is temporarily immune to your Gruesome Strike for 24 hours.</p>",
  "prereqText": "champion’s reaction that grants extra damage with your Strikes (including the desecration, iniquity, and obedience causes)",
  "prereqHtml": "champion’s reaction that grants extra damage with your Strikes (including the desecration, iniquity, and obedience causes)",
  "fields": {
   "Requirements": "Your Strikes currently deal extra damage from your champion’s reaction."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5918",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5920": {
  "name": "Aura of Life",
  "html": "<p>Your aura protects against the power of the Void. You and all allies in your champion's aura gain resistance 5 to void damage and a +1 status bonus to saves against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=510\">void</a> effects.</p>",
  "prereqText": "champion's aura",
  "prereqHtml": "champion's aura",
  "fields": {
   "Requirements": "champion’s aura"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5920",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5921": {
  "name": "Aura of Righteousness",
  "html": "<p>Your righteous aura dampens evil's might and prevents the unholy from escaping you. You and all allies in your champion's aura gain resistance 5 to <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> spells, unholy Strikes, and other unholy effects. If a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=710\">teleportation</a> spell or effect would teleport an unholy creature out of your champion's aura, your aura attempts to <a href=\"https://2e.aonprd.com/Rules.aspx?ID=371\">counteract</a> it, using the spell rank and DC of your devotion spells.</p>",
  "prereqText": "champion's aura, holy",
  "prereqHtml": "champion's aura, holy",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5921",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5919": {
  "name": "Aura of Determination",
  "html": "<p>Your aura protects against powers that would twist the mind and body. You and all allies in your champion's aura gain a +1 status bonus to saving throws against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=647\">mental</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=657\">morph</a>, and <a href=\"https://2e.aonprd.com/Traits.aspx?ID=670\">polymorph</a> effects.</p>",
  "prereqText": "champion's aura",
  "prereqHtml": "champion's aura",
  "fields": {
   "Requirements": "champion’s aura"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5919",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5922": {
  "name": "Divine Reflexes",
  "html": "<p>At the start of each of your turns, you gain an additional reaction that you can use only for your champion's reaction.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5922",
  "source": "Player Core 2 pg. 98"
 },
 "feat-7524": {
  "name": "Exalted Greatness",
  "html": "<p>You improve your exalted reaction with the benefit listed for your cause.</p><p><b>Desecration</b> While you have the benefit, you also gain a +2 status bonus to saving throws against effects created by enemies in your champion’s aura.</p><p><b>Grandeur</b> Any <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1653\">_revealing light_</a> created by your Flash of Grandeur lasts for 1 minute.</p><p><b>Iniquity</b> The damage dealt to enemies other than the triggering creatures increases by an amount equal to the damage dice of Destructive Vengeance (apply this after you halve the damage).</p><p><b>Justice</b> The penalty is –2 instead of –5.</p><p><b>Liberation</b> You and all affected allies can attempt to break free, not just the triggering ally.</p><p><b>Obedience</b> The damage dealt to creatures other than the triggering creature who refuse to drop prone increases to half the damage the triggering creature would take (roll the damage only once for all affected creatures).</p><p><b>Redemption</b> The resistance isn’t reduced.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7524",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-5925": {
  "name": "Instrument of Zeal",
  "html": "<p>Divine energy fills your weapon. Whenever you critically hit an enemy with Blessed Counterstrike or Retributive Strike, your attack deals an extra weapon damage die, and the target is <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=92\">slowed 1</a> on its next turn.</p>",
  "prereqText": "Blessed Counterstrike or Retributive Strike; champion’s reaction that grants an ally resistance to an enemy’s damage (including the grandeur, justice, liberation, and redemption causes)",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5914\">Blessed Counterstrike</a> or Retributive Strike; champion’s reaction that grants an ally resistance to an enemy’s damage (including the grandeur, justice, liberation, and redemption causes)",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5925",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5924": {
  "name": "Instrument of Slaughter",
  "html": "<p>Your blessed armament thirsts for the blood of your foes. Whenever you critically hit an enemy with a Strike that has the extra damage from your champion's reaction, the target also takes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=29\">persistent bleed damage</a> equal to two of the weapon's damage dice.</p>",
  "prereqText": "champion’s reaction that grants extra damage with your Strikes (including the desecration, iniquity, and obedience causes)",
  "prereqHtml": "champion’s reaction that grants extra damage with your Strikes (including the desecration, iniquity, and obedience causes)",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5924",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5923": {
  "name": "Auspicious Mount",
  "html": "<p>Guided by your ongoing care, your steed has developed incredible intelligence and skill. The mount you gained with Faithful Steed is now a <a href=\"https://2e.aonprd.com/Companions.aspx?Type=Specialized\">specialized animal companion</a>. You can select one of the usual specializations or the auspice specialization. A faithful steed with the auspice specialization gains the following benefits. <ul><li>It gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=551\">celestial</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=600\">fiend</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=655\">monitor</a> trait—whichever best matches your deity's servitors, and its appearance shifts to look more like those servitors. It also gains the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a> trait if it's a celestial or the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> trait if it's a fiend.</li><li>Its Intelligence modifier increases by 2 and its Wisdom modifier by 1.</li><li>Its proficiency rank in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=46\">Religion</a> increases to expert.</li><li>It can speak the language associated with your deity's servitors (such as <a href=\"https://2e.aonprd.com/Languages.aspx?ID=115\">Empyrean</a> for celestials, <a href=\"https://2e.aonprd.com/Languages.aspx?ID=114\">Chthonian</a> for demons, or <a href=\"https://2e.aonprd.com/Languages.aspx?ID=34\">Requian</a> for psychopomps).</li><li>Its maximum Hit Points increase by 20, increasing to 25 at 18th level and 30 at 20th level. If the mount has the celestial trait, the extra HP increase by 5, and the mount gains weakness 5 to unholy. If it has the fiend trait, the extra HP increase by 5, and the mount gains weakness 5 to holy.</li><li>It gains wings that grant it a fly Speed equal to its land Speed.</li></ul></p>",
  "prereqText": "Imposing Destrier",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5908\">Imposing Destrier</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5923",
  "source": "Player Core 2 pg. 98"
 },
 "feat-5926": {
  "name": "Shield of Grace",
  "html": "<p>You protect an ally with both your shield and your body. Whenever you use the <a href=\"https://2e.aonprd.com/Feats.aspx?ID=5212\">Shield Block</a> reaction to prevent damage to an ally, you can evenly split the remaining damage after the Shield Block between the ally and yourself.</p>",
  "prereqText": "Shield Warden",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=4807\">Shield Warden</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5926",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5927": {
  "name": "Rejuvenating Touch",
  "html": "<p>Your healing energies linger after you cast, providing continual benefits. An ally that recovers Hit Points from your <i>lay on hands</i> gains 10 temporary Hit Points immediately and at the start of their turn during each of the next 10 rounds. These temporary HP last until the start of the creature's next turn. This effect ends if the ally is knocked <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=95\">unconscious</a>.</p>",
  "prereqText": "_lay on hands_",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Spells.aspx?ID=2047\">_lay on hands_</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5927",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5928": {
  "name": "Swift Retribution",
  "html": "<p>The transgressions of your enemies fuel you to retaliate with divine speed. When an enemy triggers your champion's reaction, you are <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=89\">quickened</a> on your next turn. You can use the extra action to move closer to that enemy or to Strike that enemy.</p>",
  "prereqText": "champion's reaction",
  "prereqHtml": "champion's reaction",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5928",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5929": {
  "name": "Ultimate Mercy",
  "html": "<p>Your mercy transcends the bounds of life and death. Add ultimate mercy to the types of mercy you can provide. When you use Mercy, you can target a creature that died since your last turn to return it to life. The target returns to life with 1 Hit Point and becomes <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=99\">wounded 1</a>. You can't return the target to life if it died from <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1492\">_disintegrate_</a> or a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=571\">death</a> effect. The creature gains the other benefits of <i>lay on hands</i> after it returns to life.</p>",
  "prereqText": "Mercy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5897\">Mercy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5929",
  "source": "Player Core 2 pg. 99"
 },
 "feat-7527": {
  "name": "Retributive Focus",
  "html": "<p>Your enemy’s offenses fuel your righteous power. When an enemy triggers your champion’s reaction, you regain 1 <a href=\"https://2e.aonprd.com/Rules.aspx?ID=285\">Focus</a> Point.</p>",
  "prereqText": "Desperate Prayer",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=5884\">Desperate Prayer</a>",
  "fields": {
   "Requirements": "Your focus pool is currently empty.",
   "Frequency": "once per day"
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7527",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-7526": {
  "name": "Fiendish Form",
  "html": "<p>Your features reshape into those of a type of <a href=\"https://2e.aonprd.com/Traits.aspx?ID=600\">fiend</a> who serves your <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2048\">deity</a>; for example, as a <a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=387\">demon</a> you might have putrid scales, twisted horns, and red eyes. You gain a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2350\">fly Speed</a> equal to your Speed. You gain <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2410\">darkvision</a> if you don’t already have it, and you gain the fiend trait and the trait appropriate to the type of servitor you’ve become (such as <a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=386\">daemon</a>, demon, or <a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=389\">devil</a>).</p>",
  "prereqText": "[Champion] unholy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=58\">[Champion</a>] <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7526",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-7525": {
  "name": "Celestial Form",
  "html": "<p>You take on a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=551\">celestial</a> countenance, gaining the features of a type of celestial who serves your deity; for example, as an <a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=359\">angel</a>, you gain a halo and feathery wings. You gain a <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2350\">fly Speed</a> equal to your Speed. You gain <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2410\">darkvision</a> if you don’t already have it, and you gain the celestial trait and the trait appropriate to the type of servitor you’ve become (<a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=365\">archon</a>, angel, or <a href=\"https://2e.aonprd.com/MonsterFamilies.aspx?ID=368\">azata</a>, for example).</p>",
  "prereqText": "[Champion] holy",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Classes.aspx?ID=58\">[Champion</a>] <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=7525",
  "source": "Divine Mysteries pg. 277"
 },
 "feat-5931": {
  "name": "Sacred Defender",
  "html": "<p>You are a great warrior that can stand strong against the fiercest opponents to your cause. You gain resistance 5 to bludgeoning, piercing, and slashing damage. If you're <a href=\"https://2e.aonprd.com/Traits.aspx?ID=517\">holy</a>, this resistance increases to 10 against unholy creatures, and if you're <a href=\"https://2e.aonprd.com/Traits.aspx?ID=521\">unholy</a> it increases to 10 against holy creatures. In addition, creatures and effects that roll a natural 20 on an attack roll against you don't improve their result by one degree of success.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5931",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5930": {
  "name": "Armament Paragon",
  "html": "<p>Add the following property runes to the list you can choose for your blessed armament: animated, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2837\">_greater fearsome_</a>, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2841\">_grievous_</a>, <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2843\">_keen_</a>, and <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2852\">_greater vitalizing_</a>. If you have the Radiant Armament feat, add <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2832\">_greater astral_</a> and <a href=\"https://2e.aonprd.com/Equipment.aspx?ID=2833\">_greater brilliant_</a> to the list as well. In addition, you can change the rune you've selected for the day to a different rune from your list as a single action that has the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=561\">concentrate</a> and <a href=\"https://2e.aonprd.com/Traits.aspx?ID=579\">divine</a> traits. Changing the rune doesn't restore abilities that can be used only a limited number of times.</p>",
  "prereqText": "blessed armament",
  "prereqHtml": "blessed armament",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5930",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5933": {
  "name": "Swift Paragon",
  "html": "<p>The movement of you and your allies is swift and decisive as the judgment of your deity. If your ally starts a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=658\">move</a> action in your champion's aura, their movement during that action doesn't trigger reactions. In addition, you're permanently <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=89\">quickened</a>. You can use your extra action only to Step or Stride. If you have a fly Speed, add <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2312\">Fly</a> to this list. If you have an animal companion and are mounted on it at the start of your turn, you can have your mount be quickened that turn instead of you.</p>",
  "prereqText": "blessed swiftness",
  "prereqHtml": "blessed swiftness",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5933",
  "source": "Player Core 2 pg. 99"
 },
 "feat-5932": {
  "name": "Shield Paragon",
  "html": "<p>Your shield is a vessel of divine protection. When you're wielding your chosen shield, it is always raised, even without you using the Raise a Shield action.</p><p>If the shield would be destroyed, it vanishes to your deity's realm instead, where a servitor of your deity repairs it. During your next daily preparations, the shield returns to you fully repaired. While the shield is gone, you can spend 1 minute to infuse a different shield with your blessed shield benefit until your true shield returns.</p>",
  "prereqText": "blessed shield",
  "prereqHtml": "blessed shield",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=5932",
  "source": "Player Core 2 pg. 99"
 },
 "feat-3622": {
  "name": "Agile Shield Grip",
  "html": "<p>You change your grip on the shield, allowing you to combine rapid attacks with your shield boss or shield spikes and your main weapon's Strikes in a series of swift motions. You reduce your shield boss and shield spikes weapon damage die to 1d4. As long as the weapon damage die is 1d4, your shield boss and shield spike Strikes gain the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=170\">agile</a> weapon trait. You can use Agile Shield Grip again to switch to a normal grip, returning the damage to the usual amount and removing the agile trait.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Requirements": "You are wielding a shield with a <a href=\"https://2e.aonprd.com/Weapons.aspx?ID=41\">shield boss</a> or <a href=\"https://2e.aonprd.com/Weapons.aspx?ID=42\">shield spikes</a> in one hand.",
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3622",
  "source": "Knights of Lastwall pg. 82"
 },
 "feat-1087": {
  "name": "Everstand Stance",
  "html": "<p>You brace your shield with both hands, enhancing its potential for both offense and defense. When in this stance, you wield the shield with both hands. When wielding a shield this way, increase the weapon damage die of the shield’s boss or spikes by one step, and increase the shield’s Hardness by 2 when using the <a href=\"https://2e.aonprd.com/Feats.aspx?ID=839\">Shield Block</a> reaction.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=1088\">Everstand Strike</a></p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=12\">Character Guide</a> pg. 90</p><p>The following class feats are available to Knights of Lastwall. Those with the champion trait are champion class feats. Those with both the champion and fighter traits are both champion class feats and fighter class feats; when you take one of these feats, it loses the trait that doesn’t apply to your class.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1088\">Everstand Strike</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1091\">Impassable Wall Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1089\">Light of Revelation</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1090\">Sun Blade</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Requirements": "You are wielding a shield.",
   "Access": "A character who is a member of the Knights of Lastwall has access to this option."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   },
   {
    "slug": "stance",
    "name": "Stance"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1087",
  "source": "Character Guide pg. 90"
 },
 "feat-3624": {
  "name": "Reliable Squire",
  "html": "<p>You know the path to victory isn't traveled alone, and you lend aid to your companions whenever you can. You gain a +2 circumstance bonus to checks to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=75\">Aid</a>. If you roll a critical failure on a check to Aid, you get a failure instead.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "Knights of Lastwall have access to this feat."
  },
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
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3624",
  "source": "Knights of Lastwall pg. 82"
 },
 "feat-3623": {
  "name": "Devoted Guardian",
  "html": "<p>You adopt a wide stance, ready to defend both yourself and your chosen ward. Select one adjacent creature. As long as your shield is raised and the creature remains adjacent to you, the creature gains a +1 circumstance bonus to their AC, or a +2 circumstance bonus if the shield you raised was a <a href=\"https://2e.aonprd.com/Shields.aspx?ID=4\">tower shield</a>.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Requirements": "Your last action was to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=98\">Raise a Shield</a>.",
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3623",
  "source": "Knights of Lastwall pg. 82"
 },
 "feat-3625": {
  "name": "Resilient Mind",
  "html": "<p>You're firm in your convictions and have girded your mind against outside influence. You gain a +1 circumstance bonus to saves against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=106\">mental</a> effects. This bonus increases to +2 against mental effects originating from <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a>.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "cleric",
    "name": "Cleric"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3625",
  "source": "Knights of Lastwall pg. 82"
 },
 "feat-3629": {
  "name": "Inspiring Resilience",
  "html": "<p>You show defiance in times of hardship and inspire your companions to persevere. Allies within 30 feet of you gain a +1 circumstance bonus to their Will save against the triggering effect, or a +2 circumstance bonus if the effect originated from an <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a>.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "You and at least one other creature become the target of a spell or effect with the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=60\">emotion</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=68\">fear</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=106\">mental</a> trait that allows a saving throw, and you haven't rolled the save yet.",
   "Access": "Knights of Lastwall have access to this feat."
  },
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
    "slug": "emotion",
    "name": "Emotion"
   },
   {
    "slug": "mental",
    "name": "Mental"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3629",
  "source": "Knights of Lastwall pg. 83"
 },
 "feat-3630": {
  "name": "Knock Sense",
  "html": "<p>You attack carefully to knock some sense into a creature whose actions aren't their own. Make a Strike against a <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=5\">confused</a> ally. The Strike is <a href=\"https://2e.aonprd.com/Traits.aspx?ID=188\">nonlethal</a> and doesn't take a –2 penalty for using a weapon without the nonlethal trait; if you hit and deal damage, your ally automatically succeeds at the flat check to remove the confused condition when taking damage.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3630",
  "source": "Knights of Lastwall pg. 83"
 },
 "feat-8478": {
  "name": "Sacral Lord",
  "html": "<p>By right of ritual or sheer stubbornness, you have claimed rulership of the land. Claim a defined territory, such as a small section of forest or river, or a district of a larger city. Within its borders, you can cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1485\">_detect magic_</a>, <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1549\">_guidance_</a>, and <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1673\">_sigil_</a> as innate divine cantrips, and you gain a +1 circumstance bonus to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=2392\">Make an Impression</a> on creatures that have the <a href=\"https://2e.aonprd.com/Traits.aspx?ID=551\">celestial</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=600\">fiend</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=599\">fey</a>, <a href=\"https://2e.aonprd.com/Traits.aspx?ID=655\">monitor</a>, or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=737\">spirit</a> traits.</p><p><b>Special</b> You and your land are linked. Changes to one mirror themselves on the other—if you're depressed, gray rain and clammy mist might set in. These effects have no immediate mechanical impact, but they might give clues about problems afflicting the land.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=8479\">Sacral Monarch</a></p>",
  "prereqText": "Trained in Occultism or Trained in Religion",
  "prereqHtml": "Trained in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=44\">Occultism</a> or Trained in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=46\">Religion</a>",
  "fields": {},
  "traits": [
   {
    "slug": "rare",
    "name": "Rare"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "oracle",
    "name": "Oracle"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=8478",
  "source": "Dark Archive (Remastered) pg. 177"
 },
 "feat-1089": {
  "name": "Light of Revelation",
  "html": "<p>You’ve learned to call upon light to reveal what is hidden. You gain the <a href=\"https://2e.aonprd.com/Spells.aspx?ID=557\">_light of revelation_</a> devotion spell. Increase the number of Focus Points in your focus pool by 1.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=12\">Character Guide</a> pg. 90</p><p>The following class feats are available to Knights of Lastwall. Those with the champion trait are champion class feats. Those with both the champion and fighter traits are both champion class feats and fighter class feats; when you take one of these feats, it loses the trait that doesn’t apply to your class.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1087\">Everstand Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1088\">Everstand Strike</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1091\">Impassable Wall Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1090\">Sun Blade</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "A character who is a member of the Knights of Lastwall has access to this option."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1089",
  "source": "Character Guide pg. 90"
 },
 "feat-1090": {
  "name": "Sun Blade",
  "html": "<p>You can unleash burning sunlight from your sword or spear. You gain the <a href=\"https://2e.aonprd.com/Spells.aspx?ID=558\">_sun blade_</a> devotion spell. Increase the number of Focus Points in your focus pool by 1.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=12\">Character Guide</a> pg. 90</p><p>The following class feats are available to Knights of Lastwall. Those with the champion trait are champion class feats. Those with both the champion and fighter traits are both champion class feats and fighter class feats; when you take one of these feats, it loses the trait that doesn’t apply to your class.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1087\">Everstand Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1088\">Everstand Strike</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1091\">Impassable Wall Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1089\">Light of Revelation</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "A character who is a member of the Knights of Lastwall has access to this option."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1090",
  "source": "Character Guide pg. 90"
 },
 "feat-1671": {
  "name": "Accelerating Touch",
  "html": "<p>Your healing energies are infused with bounding energy. A creature that recovers Hit Points from your <a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a> gains a +10-foot status bonus to its Speed until the end of its next turn.</p>",
  "prereqText": "devotion spell (_lay on hands_)",
  "prereqHtml": "devotion spell (<a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a>)",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1671",
  "source": "Advanced Player's Guide pg. 119"
 },
 "feat-1088": {
  "name": "Everstand Strike",
  "html": "<p>Your follow-up blow leaves you an opening to set your shield. Make a Strike with the wielded shield. If the Strike hits and deals damage, you also <a href=\"https://2e.aonprd.com/Actions.aspx?ID=98\">Raise your Shield</a>.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=12\">Character Guide</a> pg. 90</p><p>The following class feats are available to Knights of Lastwall. Those with the champion trait are champion class feats. Those with both the champion and fighter traits are both champion class feats and fighter class feats; when you take one of these feats, it loses the trait that doesn’t apply to your class.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1087\">Everstand Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1091\">Impassable Wall Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1089\">Light of Revelation</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1090\">Sun Blade</a></p>",
  "prereqText": "Everstand Stance",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=1087\">Everstand Stance</a>",
  "fields": {
   "Requirements": "You are wielding a shield in two hands.",
   "Access": "A character who is a member of the Knights of Lastwall has access to this option."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   },
   {
    "slug": "press",
    "name": "Press"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1088",
  "source": "Character Guide pg. 90"
 },
 "feat-9512": {
  "name": "Chiardmar Steed",
  "html": "<p>Your steed is one of the free-spirited wild horses of the Atteran Hills. Your horse animal companion gains a +5 foot status bonus to its Speed and ignores the first 10 feet of <a href=\"https://2e.aonprd.com/Rules.aspx?ID=2366\">difficult terrain</a> it moves through each turn.</p><p><b>Special</b> Your horse animal companion can’t gain the benefits of a different breed, such as Nidarrmar Steed.</p>",
  "prereqText": "horse animal companion",
  "prereqHtml": "horse animal companion",
  "fields": {
   "Access": "You’re from Nidal."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "commander",
    "name": "Commander"
   },
   {
    "slug": "druid",
    "name": "Druid"
   },
   {
    "slug": "ranger",
    "name": "Ranger"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=9512",
  "source": "Cheliax, Infernal Inheritance pg. 153"
 },
 "feat-9513": {
  "name": "Nidarrmar Steed",
  "html": "<p>Your steed was bred from the steadfast stock of the Atteran Ranches. Your horse animal companion reduces any penalties to its Speed by 10 feet, and if it would gain the <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=74\">fleeing</a> or <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=64\">controlled</a> conditions, you can choose to have it instead become <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=92\">slowed</a> 1 for the same duration.</p><p><b>Special</b> Your horse animal companion can’t gain the benefits of a different breed, such as Chiardmar Steed.</p>",
  "prereqText": "horse animal companion",
  "prereqHtml": "horse animal companion",
  "fields": {
   "Access": "You’re from Nidal."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "commander",
    "name": "Commander"
   },
   {
    "slug": "druid",
    "name": "Druid"
   },
   {
    "slug": "ranger",
    "name": "Ranger"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=9513",
  "source": "Cheliax, Infernal Inheritance pg. 153"
 },
 "feat-3634": {
  "name": "Shield Wall",
  "html": "<p>You use your shield in tandem with an ally's, forming a barricade. Both you and the triggering creature have <a href=\"https://2e.aonprd.com/Rules.aspx?ID=459\">standard cover</a> as long as you remain adjacent to each other and you both have your shields raised; when this is no longer the case, the effect ends. You and your ally can't use this cover to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=62\">Hide</a>, as it's obvious you're standing there holding your shields, but you and your ally can use it to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=90\">Take Cover</a>. Normally, if you and your ally don't move, Shield Wall lasts until the beginning of your next turn, when your shield is no longer raised.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "Your shield is raised and an adjacent ally <a href=\"https://2e.aonprd.com/Actions.aspx?ID=98\">Raises a Shield</a>.",
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3634",
  "source": "Knights of Lastwall pg. 84"
 },
 "feat-1678": {
  "name": "Sacrifice Armor",
  "html": "<p>With divine awareness, you twist your body to lessen the impact of an attack. Reduce the damage you take by an amount equal to twice your armor's level. Your armor becomes broken, reducing its Hit Points to its Broken Threshold. If your armor was already damaged, it is destroyed instead.</p><p><a href=\"https://2e.aonprd.com/Feats.aspx?ID=1688\">Greater Interpose</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "You are hit by a Strike that deals physical damage."
  },
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1678",
  "source": "Advanced Player's Guide pg. 120"
 },
 "feat-1091": {
  "name": "Impassable Wall Stance",
  "html": "<p>You refuse to let foes past your guard. As long as you are in this stance, when you critically hit with an Attack of Opportunity triggered by a move action, you disrupt that move action.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=12\">Character Guide</a> pg. 90</p><p>The following class feats are available to Knights of Lastwall. Those with the champion trait are champion class feats. Those with both the champion and fighter traits are both champion class feats and fighter class feats; when you take one of these feats, it loses the trait that doesn’t apply to your class.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1087\">Everstand Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1088\">Everstand Strike</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1089\">Light of Revelation</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1090\">Sun Blade</a></p>",
  "prereqText": "Attack of Opportunity",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=145\">Attack of Opportunity</a>",
  "fields": {
   "Access": "A character who is a member of the Knights of Lastwall has access to this option."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "fighter",
    "name": "Fighter"
   },
   {
    "slug": "stance",
    "name": "Stance"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1091",
  "source": "Character Guide pg. 90"
 },
 "feat-1682": {
  "name": "Resilient Touch",
  "html": "<p>Your healing energies create an aura of protection that defends your allies against more than just blades and arrows. An ally that recovers Hit Points from your <a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a> gains a +1 status bonus to their saving throws until the end of their next turn.</p>",
  "prereqText": "devotion spell (_lay on hands_)",
  "prereqHtml": "devotion spell (<a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a>)",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1682",
  "source": "Advanced Player's Guide pg. 120"
 },
 "feat-3639": {
  "name": "Holy Light",
  "html": "<p>You raise your arms to the sky and pray fervently, surrounding yourself in a beacon of holy light. The beacon sheds bright light in a 30-foot-radius, 100-foot-high cylinder centered on you until the beginning of your next turn. Evil creatures in the area must succeed at a Will save equal to your class DC or spell DC (whichever is higher) or become <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=7\">dazzled</a> for 1 round.</p>",
  "prereqText": "you follow a good-aligned deity",
  "prereqHtml": "you follow a good-aligned deity",
  "fields": {
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
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
    "slug": "concentrate",
    "name": "Concentrate"
   },
   {
    "slug": "divine",
    "name": "Divine"
   },
   {
    "slug": "evocation",
    "name": "Evocation"
   },
   {
    "slug": "light",
    "name": "Light"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3639",
  "source": "Knights of Lastwall pg. 85"
 },
 "feat-248": {
  "name": "Liberating Stride",
  "html": "<p>Instead of you taking a Step at the end of your Liberating Step, the triggering ally can Stride up to half their Speed. Even if you have exalt, only the triggering ally gains this benefit.</p>",
  "prereqText": "liberator cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=3\">liberator cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=248",
  "source": "Core Rulebook pg. 114"
 },
 "feat-3641": {
  "name": "Necromantic Deflection",
  "html": "<p>You imbue your shield with life-giving energy to deflect harmful necromantic magic. When you have your shield raised, you gain the shield's circumstance bonus to your AC and saving throws against <a href=\"https://2e.aonprd.com/Traits.aspx?ID=117\">necromancy</a> spells. If you have the <a href=\"https://2e.aonprd.com/Actions.aspx?ID=1140\">Shield Block</a> reaction, damage you take as a result of a necromancy spell can trigger that reaction, even if it isn't physical damage.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "druid",
    "name": "Druid"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3641",
  "source": "Knights of Lastwall pg. 85"
 },
 "feat-247": {
  "name": "Lasting Doubt",
  "html": "<p>When you cast doubt upon your foes, the effect lasts longer than usual. After being enfeebled 2 by your Glimpse of Redemption, the foe is enfeebled 1 for 1 minute. If you have Weight of Guilt, after being stupefied 2 by your Glimpse of Redemption, the foe is stupefied 1 for 1 minute or until the flat check from stupefied causes it to lose a spell, whichever comes first.</p>",
  "prereqText": "redeemer cause",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Causes.aspx?ID=2\">redeemer cause</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=247",
  "source": "Core Rulebook pg. 114"
 },
 "feat-1683": {
  "name": "Amplifying Touch",
  "html": "<p>Your healing energies empower attacks. An ally that recovers Hit Points from your <a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a> gains a +1 status bonus to their attack rolls and deals 1 additional spirit damage on all their Strikes until the end of their next turn. In addition, all their Strikes are holy until the end of their next turn.</p>",
  "prereqText": "devotion spell (_lay on hands_)",
  "prereqHtml": "devotion spell (<a href=\"https://2e.aonprd.com/Spells.aspx?ID=395\">_lay on hands_</a>)",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1683",
  "source": "Advanced Player's Guide pg. 120"
 },
 "feat-3640": {
  "name": "Miraculous Intervention",
  "html": "<p>Through divine intervention or whispered prayers, you foil an enemy's response. If the triggering creature's level is equal to or lower than yours, you disrupt the triggering reaction. If the triggering creature's level is higher than yours, you must make an attack roll or spell attack roll against its AC (your choice). On a success, you disrupt the reaction.</p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Trigger": "An adjacent <a href=\"https://2e.aonprd.com/Traits.aspx?ID=70\">fiend</a> or <a href=\"https://2e.aonprd.com/Traits.aspx?ID=160\">undead</a> begins to use a reaction.",
   "Access": "Knights of Lastwall have access to this feat."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "cleric",
    "name": "Cleric"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=3640",
  "source": "Knights of Lastwall pg. 85"
 },
 "feat-1688": {
  "name": "Greater Interpose",
  "html": "<p>Your divine grace empowers you to avoid hits when you otherwise could not. You can use <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1678\">Sacrifice Armor</a> to reduce any type of damage from an attack or effect requiring a Reflex save. When you use Sacrifice Armor against a critical hit or a critical failure on a Reflex save that would otherwise cause you to take double damage, you take the normal amount of damage instead.</p>",
  "prereqText": "Sacrifice Armor",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=1678\">Sacrifice Armor</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1688",
  "source": "Advanced Player's Guide pg. 121"
 },
 "feat-8479": {
  "name": "Sacral Monarch",
  "html": "<p>You have come into your full powers and are truly a monarch of your realm, by your own definition at least. While in your territory, you can cast <a href=\"https://2e.aonprd.com/Spells.aspx?ID=1448\">_banishment_</a> and <a href=\"https://2e.aonprd.com/Spells.aspx?ID=930\">_inevitable disaster_</a> as innate divine spells, each once per day.</p>",
  "prereqText": "Sacral Lord; Master in Occultism or Master in Religion",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=8478\">Sacral Lord</a>; Master in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=44\">Occultism</a> or Master in <a href=\"https://2e.aonprd.com/Skills.aspx?ID=46\">Religion</a>",
  "fields": {},
  "traits": [
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "oracle",
    "name": "Oracle"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=8479",
  "source": "Dark Archive (Remastered) pg. 177"
 },
 "feat-2747": {
  "name": "Everdistant Defense",
  "html": "<p>The spatial barrier of Syndara's Island has taught you that distance can foil enemies better than any armor. You warp space, causing each square within your aura that the attack or creature would move through to count as triple the distance. If this reaction is used on a ranged attack, the attack takes range increment penalties based on the adjusted range and fails if this would cause it to exceed its maximum range.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=87\">Pathfinder #168: King of the Mountain</a> pg. 75</p><p>Player characters can select one of the following new class feats for their 20th-level class feat upon entering the <i>Glass Lighthouse</i> or by meditating on the cushion in area H4.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2744\">All the Time in the World</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2745\">Dance of Intercession</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2746\">Demon's Hair</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2748\">Extradimensional Stash</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2749\">Head of the Night Parade</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2750\">Heart of the Kaiju</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2751\">Plum Deluge</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2752\">Ruby Resurrection</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2753\">Scapegoat Parallel Self</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2754\">Sever Space</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2755\">Time Dilation Cascade</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2756\">Vitality-Manipulating Stance</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2757\">Vivacious Afterimage</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2758\">Whirlwind Toss</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=2759\">Worldsphere Gravity</a></p>",
  "prereqText": "",
  "prereqHtml": "",
  "fields": {
   "Requirements": "You have at least one <a href=\"https://2e.aonprd.com/Traits.aspx?ID=206\">aura</a> from a champion feat or feature.",
   "Trigger": "A creature within your aura is targeted by a ranged attack or a creature moves through your aura."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "abjuration",
    "name": "Abjuration"
   },
   {
    "slug": "champion",
    "name": "Champion"
   },
   {
    "slug": "divine",
    "name": "Divine"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=2747",
  "source": "Pathfinder #168: King of the Mountain pg. 75"
 },
 "feat-1242": {
  "name": "Banishing Blow",
  "html": "<p>The erratic teleportation magic you experienced in the Kortos Mounts has taught you a few tricks. You attempt an <a href=\"https://2e.aonprd.com/Skills.aspx?ID=3\">Athletics</a> check to <a href=\"https://2e.aonprd.com/Actions.aspx?ID=38\">Shove</a> the fiend that triggered your champion's reaction; on a success, the target can't teleport or summon creatures for 1 minute. On a critical success, the target is also <a href=\"https://2e.aonprd.com/Conditions.aspx?ID=36\">stunned 1</a> and can't teleport or summon creatures for 1 hour, and if you are on your home plane and the target is a fiend of level 18 or lower from another plane, it is also banished to its home plane. Your multiple attack penalty doesn't apply to this attack.</p><p><b>Source</b> <a href=\"https://2e.aonprd.com/Sources.aspx?ID=36\">Pathfinder #156: The Apocalypse Prophet</a> pg. 72</p><p>Characters who have reached 20th level can choose from the following feats, representing the pinnacle of mortal power influenced by their triumphs.</p><p><b>Related Feats</b>: <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1240\">Annihilating Swing</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1241\">Astonishing Explosion</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1243\">Denier of Destruction</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1244\">Endurance of the Rooted Tree</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1245\">Mimic Protections</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1246\">Reclaim Spell</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1247\">Reflecting Riposte</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1248\">Ringmaster's Introduction</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1249\">Steal Essence</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1250\">Tenacious Blood Magic</a>, <a href=\"https://2e.aonprd.com/Feats.aspx?ID=1251\">Verdant Presence</a></p>",
  "prereqText": "Fiendsbane Oath",
  "prereqHtml": "<a href=\"https://2e.aonprd.com/Feats.aspx?ID=220\">Fiendsbane Oath</a>",
  "fields": {
   "Trigger": "You use your champion's reaction, triggered by a <a href=\"https://2e.aonprd.com/Traits.aspx?ID=70\">fiend</a> within your reach."
  },
  "traits": [
   {
    "slug": "uncommon",
    "name": "Uncommon"
   },
   {
    "slug": "champion",
    "name": "Champion"
   }
  ],
  "url": "https://2e.aonprd.com/Feats.aspx?ID=1242",
  "source": "Pathfinder #156: The Apocalypse Prophet pg. 72"
 }
};
