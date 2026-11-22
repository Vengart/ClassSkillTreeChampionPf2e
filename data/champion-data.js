// Сгенерировано tools/build-graph.mjs — не редактируйте вручную.
// Источник: https://pf2.ru/classes/champion?tab=feats (2026-11-20T20:00:27.888Z)
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
     "add": 1,
     "name": "Второе благословление"
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
   "minX": -4730,
   "maxX": 4730,
   "minY": -1820,
   "maxY": 110
  }
 },
 "nodes": [
  {
   "image": "startChampIcon.webp",
   "id": "root",
   "kind": "root",
   "name": "Поборник",
   "nameEn": "Champion",
   "level": 0,
   "url": "https://pf2.ru/classes/champion?tab=details",
   "html": "Посланник божества и его преданный служитель. Кликайте по узлам, чтобы собрать персонажа: сначала выберите освящение, призвание и заклинание преданности, затем черты.",
   "x": 0,
   "y": 0
  },
  {
   "image": "Holy.webp",
   "id": "group-sanct",
   "kind": "group",
   "name": "Освящение",
   "level": 0,
   "branch": "sanct",
   "html": "В зависимости от вашего божества, ниспосланное им освящение может сделать вас священным или нечестивым. Таким образом, вы становитесь привязаны к одной из сторон вечной борьбы\nза души. Выбранный дескриптор (как и его отсутствие) ограничивает вас в выборе призваний, заклинаний преданности и черт.<br>\nЕсли божество позволяет выбрать быть <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">священным</a> или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">нечестивым</a>, то вы вправе сделать этот выбор самостоятельно, а если же оно обязывает взять дескриптор, вы получаете его автоматически. Если вы каким-либо образом получите противоположный дескриптор, то теряете первый, пока не завершите ритуал покаяния. В случае, если божество не предполагает взятия дескриптора, вы можете выбирать только те черты и способности, которые не требуют быть священным или нечестивым.<br>\nПрисутствие поборника с дескриптором «нечестивый» крайне плохо вписывается в обычную игру — доступ к нему стоит давать только в подходящих для этого приключениях или кампаниях, где все игроки согласятся принять нечестивого поборника. Нечестивое освящение и нечестивое призвание считаются необычными вариантами развития персонажа.  <br>",
   "hint": "Необязательный выбор: священный, нечестивый или без освящения."
  },
  {
   "image": "Holy.webp",
   "id": "sanct-holy",
   "kind": "option",
   "group": "group-sanct",
   "name": "Священный",
   "nameEn": "Holy",
   "level": 1,
   "branch": "sanct",
   "rarity": "common",
   "html": "вы получаете дескриптор «священный»; этот же дескриптор получают все ваши Удары. Вы получаете наказ «Вы не должны сознательно причинять вред невинным или своим бездействием допускать, чтобы им был причинён вред, если вы знаете, что в ваших силах его предотвратить» и табу «Убивать невинных». Если в вашей игре допустимо содержание, которое считается неприемлемым по умолчанию («Основная книга игрока», стр. 403), подобные действия считаются табу лично  для вас.",
   "requires": []
  },
  {
   "image": "Unholy.webp",
   "id": "sanct-unholy",
   "kind": "option",
   "group": "group-sanct",
   "name": "Нечестивый",
   "nameEn": "Unholy",
   "level": 1,
   "branch": "sanct",
   "rarity": "uncommon",
   "html": "вы получаете дескриптор «нечестивый»; этот же дескриптор получают все ваши Удары. Вы получаете наказ «Не ставь чужие нужды превыше своих и превыше нужд своего божества» и табу «Совершать самоотверженные поступки, вроде раздачи благотворительности» и «Ставить чьи-либо нужды превыше нужд вашего божества». Эти табу и наказы не запрещают вам действовать подобным образом для того, чтобы другие сочли, что вы оказываете им помощь, — важно, чтобы вы при этом преследовали свои цели или цели вашего божества.",
   "requires": []
  },
  {
   "image": "brave.webp",
   "id": "group-cause",
   "kind": "group",
   "name": "Призвание",
   "level": 0,
   "branch": "cause",
   "html": "Вы посвящаете свою жизнь особому призванию. Некоторые призвания вы можете выбрать лишь в том случае, если выбрали определённое освящение. Каждое призвание имеет определённые наказы и табу, а также даёт вам особое ответное действие поборника, которое позволяет вам защищать либо других, либо самого себя.",
   "hint": "Выберите одно призвание. Оно даёт ответное действие поборника."
  },
  {
   "image": "SubClassLiberation.webp",
   "id": "cause-12",
   "kind": "option",
   "group": "group-cause",
   "name": "Освобождение",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/12",
   "html": "Вы стремитесь освободить все народы от оков и установленных властью запретов.\n<br>\n<b>Наказы:</b> противиться рабству и тирании, бороться за свободы и право других принимать собственные решения, уважать чужой выбор пути в жизни.\n<br>\n<b>Табу:</b> силой или угрозами заставлять кого-либо действовать определённым образом, поддерживать рабство или тиранию.<h4 class=\"sub-ability\">Ответное действие: Освобождающий шаг</h4><b>Условие:</b> противник наносит урон вашему союзнику, берёт его в захват или обездвиживает; оба находятся в вашей ауре поборника<hr>Вы освобождаете союзника от ограничений и пут. Если ответное действие было спровоцировано уроном, союзник получает устойчивость ко всему урону, равную 2 + ваш уровень, против этого урона. Союзник может попытаться освободиться от эффектов <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/77\" href=\"https://pf2.ru/conditions/grabbed\">захвата</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/81\" href=\"https://pf2.ru/conditions/immobilized\">неподвижности</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/90\" href=\"https://pf2.ru/conditions/restrained\">обездвиженности</a> или <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/85\" href=\"https://pf2.ru/conditions/paralyzed\">паралича</a>. Для этого он либо проходит новое испытание против одного эффекта (если эффект позволяет это сделать), либо использует Освобождение от одного эффекта в качестве свободного действия. Если союзник может перемещаться, то в качестве свободного действия может совершить Шаг, даже если ему не нужно было от чего-либо освобождаться.",
   "rarity": "common",
   "sanct": null,
   "requires": [],
   "prereqText": ""
  },
  {
   "image": "SubClassRedemption.webp",
   "id": "cause-14",
   "kind": "option",
   "group": "group-cause",
   "name": "Искупление",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/14",
   "html": "Стремясь к тому, чтобы все жили в гармонии, вы делаете всё возможное, чтобы привести к искуплению даже тех, кого другие бы отвергли или вовсе убили.\n<br>\n<b>Наказы:</b> пытаться наставить злодеев на путь добра, проявлять сострадание к окружающим вне зависимости от их положения.\n<br>\n<b>Табу:</b> убивать разумных существ, не предоставив им сперва возможности искупить свои грехи.<h4 class=\"sub-ability\">Ответное действие: Момент искупления</h4><b>Условие:</b> противник наносит урон вашему союзнику, оба находятся в вашей ауре поборника<hr>Противник мешкает, когда в его сознании проносятся видения об искуплении его прегрешений. Противник выбирает, будет ли он каяться или откажется это делать. Если противник <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/652\" href=\"https://pf2.ru/traits/mindless\">неразумен</a> или почему-то не способен покаяться, он автоматически выбирает вариант «отказаться».\n<ul>\n<li><b>Покаяться:</b> союзник не получает урона, спровоцировавшего это ответное действие.</li>\n<li>\n<b>Отказаться:</b> союзник получает <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2318\" href=\"https://pf2.ru/rules/resistance?rule=2318\">устойчивость</a> ко всему урону, равную 2 + ваш уровень, против урона, спровоцировавшего это ответное действие. После применения наносящего урон эффекта противник получает <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/71\" href=\"https://pf2.ru/conditions/enfeebled\">слабость 2</a> до конца своего следующего хода.</li>\n</ul>",
   "rarity": "common",
   "sanct": "holy",
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "prereqText": "освящение «священный»"
  },
  {
   "image": "SubClassObedience.webp",
   "id": "cause-13",
   "kind": "option",
   "group": "group-cause",
   "name": "Повиновение",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/13",
   "html": "Вы убеждены, что общество не просто так организовано определённым образом, и считаете, что все должны знать своё место и вести себя согласно установленным правилам.\n<br>\n<b>Наказы:</b> охранять установленную иерархию; свергать нелегитимную власть; руководить окружающими, когда вы являетесь лучшей возможной кандидатурой на пост лидера.\n<br>\n<b>Табу:</b> позволять обладателям низшего статуса управлять вами или предводительствовать над вами.<h4 class=\"sub-ability\">Ответное действие: Железный приказ</h4><b>Условие:</b> враг в вашей ауре поборника наносит вам урон<hr>Вы напоминаете дерзкому врагу, посмевшему нанести вам урон, где его место. Вы приказываете врагу преклонить колено. Если он посмеет отказаться, то заплатит за наглость болью и страданиями. Враг выбирает один из вариантов.\n<ul>\n<li><b>Преклонить колени:</b> враг <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/88\" href=\"https://pf2.ru/conditions/prone\">распластывается</a> в качестве свободного действия.</li>\n<li>\n<b>Отказаться:</b> вы наносите врагу 1d6 ментального урона. Этот урон увеличивается до 2d6 на 5 уровне, до 3d6 на 9 уровне,</li>\n</ul>\nдо 4d6 на 12 уровне, до 5d6 на 16 уровне и до 6d6 на 19 уровне.\nВне зависимости от его выбора, ваши Удары по спровоцировавшему существу дополнительно наносят 1 урон духом до конца вашего следующего хода. Этот дополнительный урон увеличивается до 2 на 9 уровне и до 3 на 16 уровне.",
   "rarity": "common",
   "sanct": null,
   "requires": [],
   "prereqText": ""
  },
  {
   "image": "SubClassInequality.webp",
   "id": "cause-10",
   "kind": "option",
   "group": "group-cause",
   "name": "Беззаконие",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/10",
   "html": "Вы бесчестны, лживы и всеми силами стремитесь разрушить ложные надежды на доброту.\n<br>\n<b>Наказы:</b> уничтожать то, что оскорбляет вас или встаёт у вас на пути; использовать окружающих в своих целях; заниматься воровством и мошенничеством, если это может принести вам пользу.\n<br>\n<b>Табу:</b> ограничивать себя оковами любого закона за исключением угодного вашему божеству.<h4 class=\"sub-ability\">Ответное действие: Разрушительная месть</h4><b>Условие:</b> враг в вашей ауре поборника наносит вам урон<hr>Кровь  за кровь — вот какой принцип вы исповедуете, затаскивая врага в бездну. Вы увеличиваете полученный урон на 1d6 и наносите спровоцировавшему врагу 1d6 урона духом. Урон, который вы получаете и наносите при использовании этого ответного действия, увеличивается до 2d6 на 5 уровне, до 3d6 на 9 уровне, до 4d6  на 12 уровне, до 5d6 на 16 уровне и до 6d6 на 19 уровне.  Кроме того, ваши Удары по спровоцировавшему существу дополнительно наносят 2 урона духом до конца вашего следующего хода. Дополнительный урон ваших Ударов увеличивается до 4   на 9 уровне и до 6 на 16 уровне.",
   "rarity": "uncommon",
   "sanct": "unholy",
   "requires": [
    [
     "sanct-unholy"
    ]
   ],
   "prereqText": "освящение «нечестивый»"
  },
  {
   "image": "SubClassVelichie.webp",
   "id": "cause-9",
   "kind": "option",
   "group": "group-cause",
   "name": "Величие",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/9",
   "html": "Вас вдохновляет сияющее великолепие небесных планов, и вы проповедуете их добродетели, чтобы принести смирение обитателям других, более мрачных миров.\n<br>\n<b>Наказы:</b> быть для других впечатляющим примером, наслаждаться красотой и делиться ею с окружающими, следить за своей внешностью и чистотой.\n<br>\n<b>Табу:</b> осквернять себя общением с бестиями и другими нечестивыми существами.<h4 class=\"sub-ability\">Ответное действие: Отблеск величия</h4><b>Условие:</b> противник наносит урон вашему союзнику, оба находятся в вашей ауре поборника<hr>Вы озаряете окружающее пространство сиянием небесных планов, которое концентрируется на вашем враге. Союзник получает устойчивость ко всему урону, равную 2 + ваш уровень, против урона, спровоцировавшего это ответное действие. Спровоцировавший противник попадает под эффект заклинания <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/1653\" href=\"https://pf2.ru/spells/revealing light\">озаряющий свет</a> до конца вашего следующего хода.",
   "rarity": "common",
   "sanct": "holy",
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "prereqText": "освящение «священный»"
  },
  {
   "image": "SubClassDesecration.webp",
   "id": "cause-8",
   "kind": "option",
   "group": "group-cause",
   "name": "Осквернение",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/8",
   "html": "Вы берёте от жизни всё, что желаете, и не обращаете внимания на то, какой вред можете причинить окружающим. Порча пронизывает всё, чего вы касаетесь.<br>\n<b>Наказы:</b> портить всё чистое и святое, что встречается у вас на пути; сеять семена сомнений в тех, кто следует подобным идеалам.<h4 class=\"sub-ability\">Ответное действие: Щит эгоиста</h4><b>Условие:</b> враг в вашей ауре поборника наносит вам урон<hr>Ваш эгоизм оберегает вас от бед. Вы получаете устойчивость ко всему урону, равную 2 + ваш уровень, против урона, спровоцировавшего это ответное действие. Кроме того, ваши Удары по спровоцировавшему существу дополнительно наносят 1 урон духом до конца вашего следующего хода. Этот дополнительный урон увеличивается\nдо 2 на 9 уровне и до 3 на 16 уровне.",
   "rarity": "uncommon",
   "sanct": "unholy",
   "requires": [
    [
     "sanct-unholy"
    ]
   ],
   "prereqText": "освящение «нечестивый»"
  },
  {
   "image": "SubClassJustice.webp",
   "id": "cause-11",
   "kind": "option",
   "group": "group-cause",
   "name": "Правосудие",
   "level": 1,
   "branch": "cause",
   "url": "https://pf2.ru/championcauses/11",
   "html": "Следуя учению своего божества, вы вершите правосудие, неукоснительно соблюдая законы и карая тех, кто их преступает.\n<br>\n<b>Наказы:</b> соблюдать закон, уважать законную власть и иных предводителей общества.\n<br>\n<b>Табу:</b> злоупотреблять доверием, жульничать.<h4 class=\"sub-ability\">Ответное действие: Удар возмездия</h4><b>Условие:</b> противник наносит урон вашему союзнику, оба находятся в вашей ауре поборника<hr>Вы защищаете союзника и наносите удар врагу. Союзник получает устойчивость ко всему урону, равную 2 + ваш уровень, против урона, спровоцировавшего это ответное действие. Если противник в вашей зоне досягаемости, совершите Удар в ближнем бою по нему.",
   "rarity": "common",
   "sanct": null,
   "requires": [],
   "prereqText": ""
  },
  {
   "image": "prayer.webp",
   "id": "group-devotion",
   "kind": "group",
   "name": "Заклинания преданности",
   "level": 0,
   "branch": "devotion",
   "html": "Избранное вами божество наделяет вас особыми <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2228\" href=\"https://pf2.ru/rules/focus spells?rule=2228\">фокальными заклинаниями</a>, которые зовутся заклинаниями преданности. Выберите одно из заклинаний: либо духовные щиты, либо заклинание, зависящее от божественного источника вашего божества (возложение рук, если ваше божество допускает излечение, или касание пустоты, если ваше божество допускает повреждение).\nДля сотворения фокального заклинания требуется потратить.<br>\n1 ФП. Вначале ваш запас ФП равен 1. Вы восстанавливаете все ФП во время ежедневной подготовки, а также можете восстановить 1 ФП, если потратите 10 минут на занятие Фокусировка, чтобы помолиться своему божеству или совершить бого угодное деяние.<br>\nВаши заклинания преданности относятся к сакральной традиции. Ваша заклинательная характеристика — Харизма.\nФокальные заклинания автоматически повышаются до значения круга, равного половине вашего уровня (с округлением вверх). Фокальные заклинания не требуют использования ячеек заклинаний, сотворить их с помощью ячеек нельзя. Ваш максимум ФП равен числу известных вам фокальных заклинаний, но единовременно более 3 ФП у вас быть не может.",
   "hint": "Выберите одно заклинание преданности."
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "spell-2047",
   "kind": "option",
   "group": "group-devotion",
   "name": "Возложение рук",
   "nameEn": "Lay on Hands",
   "level": 1,
   "branch": "devotion",
   "url": "https://pf2.ru/spells/lay%20on%20hands",
   "actions": "1",
   "traits": [
    {
     "slug": "vitality",
     "name": "Жизнь"
    },
    {
     "slug": "healing",
     "name": "Исцеление"
    },
    {
     "slug": "manipulate",
     "name": "Манипуляция"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "focus",
     "name": "Фокальное"
    }
   ],
   "rarity": "common",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Дистанция": "касание. <b>Цели:</b> 1 согласное живое существо или 1 существо-нежить"
   },
   "html": "Ваши руки наполняются энергией жизни, позволяя простым касанием исцелять раны живых и наносить урон <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/722\" href=\"https://pf2.ru/traits/undead\">нежити</a>.\n<br>\n<b>Живое согласное существо:</b> цель восстанавливает 6 ПЗ; если цель — не вы сами, она дополнительно получает бонус состояния +2 к КБ на 1 раунд.\n<br>\n<b>Существо-нежить:</b> цель получает 1d6 урона жизнью (обычное испытание Стойкости); при провале она также получает штраф состояния –2 к КБ на 1 раунд.\n<hr>\n<b>Повышенное (+1):</b> исцеление увеличивается на 6, урон нежити увеличивается на 1d6.",
   "requires": []
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "spell-2049",
   "kind": "option",
   "group": "group-devotion",
   "name": "Духовный щит",
   "nameEn": "Shields of the Spirit",
   "level": 1,
   "branch": "devotion",
   "url": "https://pf2.ru/spells/shields%20of%20the%20spirit",
   "actions": "1",
   "traits": [
    {
     "slug": "spirit",
     "name": "Дух"
    },
    {
     "slug": "concentrate",
     "name": "Концентрация"
    },
    {
     "slug": "sanctified",
     "name": "Освящённый"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "focus",
     "name": "Фокальное"
    }
   ],
   "rarity": "common",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Требования": "вы используете щит"
   },
   "html": "Вы <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2316\" href=\"https://pf2.ru/actions/raise a shield\">Поднимаете</a> щит, и в вашей ауре поборника начинают кружиться эфемерные призрачные щиты; этот эффект сохраняется до начала вашего следующего хода или пока ваш щит не перестанет быть поднят (смотря что случится раньше). Щиты дают бонус состояния +1 к КБ всем вашим союзникам в пределах вашей ауры поборника; всякий раз, когда враг атакует такого союзника, этот враг получает 1d4 урона духом (даже при промахе). <br>\nСоюзники получают преимущества, только пока остаются в пределах вашей ауры; эффект прекращает действовать на союзника, покинувшего ауру, и применяется к союзнику, который в неё входит. Вы сами не считаетесь своим союзником и не получаете описанных преимуществ.\n<hr>\n<b>Повышенное (+2):</b> урон увеличивается на 1d4.",
   "requires": []
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "spell-2048",
   "kind": "option",
   "group": "group-devotion",
   "name": "Касание пустоты",
   "nameEn": "Touch of the Void",
   "level": 1,
   "branch": "devotion",
   "url": "https://pf2.ru/spells/touch%20of%20the%20void",
   "actions": "1",
   "traits": [
    {
     "slug": "manipulate",
     "name": "Манипуляция"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "void",
     "name": "Пустота"
    },
    {
     "slug": "focus",
     "name": "Фокальное"
    }
   ],
   "rarity": "common",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Дистанция": "касание. <b>Цели:</b> 1 согласное существо-нежить или 1 живое существо"
   },
   "html": "Вы пропитываете цель энергией пустоты, чтобы исцелить <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/722\" href=\"https://pf2.ru/traits/undead\">нежить</a> или нанести урон живому существу.\n<ul>\n<li><b>Согласное существо-нежить:</b> цель восстанавливает 6 ПЗ; если цель — вы, вы также получаете бонус состояния +2 к броскам урона на 1 раунд. </li>\n<li><b>Живое существо:</b> цель получает 1d6 урона пустотой (обычное испытание Стойкости); при провале она также получает штраф состояния –2 к КБ на 1 раунд. </li>\n</ul>\n<hr>\n<b>Повышенное (+1):</b> исцеление увеличивается на 6, урон живым существам увеличивается на 1d6.",
   "requires": []
  },
  {
   "image": "oath-of-defender.webp",
   "id": "group-blessing",
   "kind": "group",
   "name": "Благословение верного",
   "level": 0,
   "branch": "blessing",
   "html": "Желая отметить вашу верную службу, божество преподносит вам свой дар. Этот дар может принимать самые различные формы: это может быть дух, который вселяется в ваши предметы или в вас самих, покрывающая ваше тело загадочная татуировка или что-то подобное. Выберите одно из перечисленных ниже благословений (или любое другое, к которому у вас есть доступ).\n<br>",
   "hint": "Доступно с 3 уровня. Черта «Второе благословление» позволяет взять ещё одно."
  },
  {
   "image": "DevWeapon.webp",
   "id": "blessing-armament",
   "kind": "option",
   "group": "group-blessing",
   "name": "Благословенное оружие",
   "level": 3,
   "branch": "blessing",
   "html": "выберите одно оружие (или <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/3086\" href=\"https://pf2.ru/equipment/handwraps of mighty blows\">повязки могучих ударов</a>). Вы получаете доступ к критическому эффекту этого оружия, а оружие получает эффекты атрибутивной руны из следующего перечня (на ваш выбор): <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2837\" href=\"https://pf2.ru/equipment/fearsome\">устрашающая</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2840\" href=\"https://pf2.ru/equipment/ghost touch\">призрачного касания</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2845\" href=\"https://pf2.ru/equipment/returning\">возвращающаяся</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2846\" href=\"https://pf2.ru/equipment/shifting\">изменчивая</a> или <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2852\" href=\"https://pf2.ru/equipment/vitalizing\">животворящая</a>. Во время ежедневной подготовки вы можете выбрать другое оружие, придать ему эффекты другой руны или и то и другое. Эта атрибутивная руна не идёт в счёт максимального количества атрибутивных рун, которые вы можете наложить на оружие.",
   "requires": []
  },
  {
   "image": "DevShield.webp",
   "id": "blessing-shield",
   "kind": "option",
   "group": "group-blessing",
   "name": "Благословенный щит",
   "level": 3,
   "branch": "blessing",
   "html": "пока вы держите в руках щит, он получает эффект низшей <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2811\" href=\"https://pf2.ru/equipment/reinforcing rune\">армированной руны</a>. По мере повышения вашего уровня армированная руна становится всё сильнее (малая на 7 уровне, средняя на 10 уровне, улучшенная на 13 уровне, высшая на 16 уровне и превосходная на 19 уровне). Если у вашего щита уже есть соответствующая вашему уровню армированная руна или если это <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2828\" href=\"https://pf2.ru/equipment/sturdy shield\">прочный щит</a> того же уровня, что и соответствующая армированная руна, вместо этого твёрдость щита увеличивается на 1.",
   "requires": []
  },
  {
   "image": "DevProvornost.webp",
   "id": "blessing-swiftness",
   "kind": "option",
   "group": "group-blessing",
   "name": "Благословенная скорость",
   "level": 3,
   "branch": "blessing",
   "html": "вы получаете бонус состояния +5 футов к вашей скорости. Когда вы едете верхом, ваш скакун получает этот бонус вместо вас. Кроме того, когда в пределах вашей ауры поборника перемещение вашего союзника провоцирует ответное действие противника, этот союзник получает бонус состояния +2 ко всем защитам против этого ответного действия.",
   "requires": []
  },
  {
   "image": "brave.webp",
   "id": "theme-cause",
   "kind": "hub",
   "name": "Призвание",
   "level": 0,
   "html": "Черты призвания и ответного действия поборника. Нужное призвание выбирается карточкой сверху.",
   "requires": [],
   "x": -3910,
   "y": -300,
   "captionSide": "right",
   "captionW": 120
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "theme-devotion",
   "kind": "hub",
   "name": "Преданность",
   "level": 0,
   "html": "Черты заклинаний преданности: возложение рук, духовный щит, касание пустоты.",
   "requires": [],
   "x": 330,
   "y": -300,
   "captionSide": "right",
   "captionW": 147
  },
  {
   "image": "oath-of-defender.webp",
   "id": "theme-blessing",
   "kind": "hub",
   "name": "Благословение",
   "level": 0,
   "html": "Черты благословения верного: оружие, щит, скорость.",
   "requires": [],
   "x": -1110,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "theme-aura",
   "kind": "hub",
   "name": "Ауры",
   "level": 0,
   "html": "Черты, усиливающие ауру поборника (она есть у каждого поборника с 1 уровня).",
   "requires": [],
   "x": -2630,
   "y": -300,
   "captionSide": "right",
   "captionW": 54
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "theme-shield",
   "kind": "hub",
   "name": "Щит",
   "level": 0,
   "html": "Черты для боя со щитом. Блок щитом есть у каждого поборника с 1 уровня.",
   "requires": [],
   "x": -1550,
   "y": -300,
   "captionSide": "right",
   "captionW": 40
  },
  {
   "image": "Horse.webp",
   "id": "theme-steed",
   "kind": "hub",
   "name": "Скакун",
   "level": 0,
   "html": "Верный скакун и его развитие.",
   "requires": [],
   "x": 3510,
   "y": -300,
   "captionSide": "right",
   "captionW": 80
  },
  {
   "image": "prayer.webp",
   "id": "theme-faith",
   "kind": "hub",
   "name": "Вера и клятвы",
   "level": 0,
   "html": "Домен божества, молитвы, клятвы.",
   "requires": [],
   "x": 2170,
   "y": -300,
   "captionSide": "right",
   "captionW": 170
  },
  {
   "image": "Holy.webp",
   "id": "theme-sanct",
   "kind": "hub",
   "name": "Освящение",
   "level": 0,
   "html": "Черты священных и нечестивых поборников.",
   "requires": [],
   "x": -3070,
   "y": -300,
   "captionSide": "right",
   "captionW": 120
  },
  {
   "image": "fight.webp",
   "id": "theme-combat",
   "kind": "hub",
   "name": "Бой",
   "level": 0,
   "html": "Боевые приёмы поборника.",
   "requires": [],
   "x": -1990,
   "y": -300,
   "captionSide": "right",
   "captionW": 40
  },
  {
   "image": "Horse.webp",
   "id": "feat-5885",
   "kind": "feat",
   "name": "Верный скакун",
   "nameEn": "Faithful Steed",
   "level": 1,
   "url": "https://pf2.ru/feats/faithful%20steed",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Вы получаете молодого <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2113\" href=\"https://pf2.ru/rules/animal companions?rule=2113\">верного зверя</a>, который служит вам скакуном. Если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>, ваш скакун и все его Удары также получают этот дескриптор. Как правило, скакун — это верный зверь с особой способностью «скакун», например <a class=\"item-link quicklink item-link--animalcompanion\" data-key=\"animalcompanion/76\" href=\"https://pf2.ru/animalcompanions/horse\">лошадь</a>. С разрешения ведущего вы можете выбрать и другого верного зверя либо изменить его внешность таким образом, чтобы она лучше соответствовала вашему божеству.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-steed",
   "theme": "theme-steed",
   "x": 3610,
   "y": -430,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SubClassLiberation.webp",
   "id": "feat-5889",
   "kind": "feat",
   "name": "Вольный шаг",
   "nameEn": "Unimpeded Step",
   "level": 1,
   "url": "https://pf2.ru/feats/unimpeded%20step",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "освобождение",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/12\" href=\"https://pf2.ru/championcauses/liberation\">освобождение</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/12\" href=\"https://pf2.ru/championcauses/liberation\">освобождение</a>"
   },
   "html": "Когда ваш союзник перемещается под действием <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2808\" href=\"https://pf2.ru/actions/liberating step\">Освобождающего шага</a>, его наполняет дух свободы, и его перемещение игнорирует эффекты пересечённой и сильно пересечённой местности, а также <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2369\" href=\"https://pf2.ru/rules/narrow surfaces?rule=2369\">узких</a> и <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2370\" href=\"https://pf2.ru/rules/uneven ground?rule=2370\">неровных</a> поверхностей. Если вы обладаете классовой особенностью выдающееся ответное действие, этот эффект применяется ко всем, кто совершает Шаг.",
   "requires": [
    [
     "cause-12"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -4010,
   "y": -430,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "SubClassRedemption.webp",
   "id": "feat-5891",
   "kind": "feat",
   "name": "Груз вины",
   "nameEn": "Weight of Guilt",
   "level": 1,
   "url": "https://pf2.ru/feats/weight%20of%20guilt",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "искупление",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/14\" href=\"https://pf2.ru/championcauses/redemption\">искупление</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/14\" href=\"https://pf2.ru/championcauses/redemption\">искупление</a>"
   },
   "html": "Разум противника, проигнорировавшего <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2810\" href=\"https://pf2.ru/actions/glimpse of redemption\">Момент искупления</a>, затуманивается под тяжестью его грехов. Вместо <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/71\" href=\"https://pf2.ru/conditions/enfeebled\">слабости 2</a> вы можете дать отказавшемуся от покаяния существу ошеломление 2\nс той же длительностью.",
   "requires": [
    [
     "cause-14"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -3810,
   "y": -430,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "prayer.webp",
   "id": "feat-5883",
   "kind": "feat",
   "name": "Домен божества",
   "nameEn": "Deity's Domain",
   "level": 1,
   "url": "https://pf2.ru/feats/deity's%20domain",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Вы воплощаете одну из сторон вашего божества. Выберите один\nиз доменов вашего божества. Вы получаете начальное заклинание выбранного домена в качестве заклинания преданности.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 1670,
   "y": -430,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "SubClassObedience.webp",
   "id": "feat-5886",
   "kind": "feat",
   "name": "Железные отголоски",
   "nameEn": "Iron Repercussions",
   "level": 1,
   "url": "https://pf2.ru/feats/iron%20repercussions",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "повиновение",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/13\" href=\"https://pf2.ru/championcauses/obedience\">повиновение</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/13\" href=\"https://pf2.ru/championcauses/obedience\">повиновение</a>"
   },
   "html": "Неподчинение вашему Железному приказу влечёт длительные последствия. Если враг отказывается преклонить колено, вы можете нанести ему <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/86\" href=\"https://pf2.ru/conditions/persistent damage\">продолжительный ментальный урон</a> вместо обычного. Вы должны решить, каким будет этот урон, до того, как враг выберет, преклонить ли колено. Количество урона не изменяется.",
   "requires": [
    [
     "cause-13"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -4210,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassInequality.webp",
   "id": "feat-5890",
   "kind": "feat",
   "name": "Жестокая месть",
   "nameEn": "Vicious Vengeance",
   "level": 1,
   "url": "https://pf2.ru/feats/vicious%20vengeance",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "беззаконие",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/10\" href=\"https://pf2.ru/championcauses/iniquity\">беззаконие</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/10\" href=\"https://pf2.ru/championcauses/iniquity\">беззаконие</a>"
   },
   "html": "Хотя ваша месть болезненна и для вас, и для врага, никто не усомнился бы, что врагам она вредит больше. Вы получаете ситуативный бонус к урону <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2806\" href=\"https://pf2.ru/actions/destructive vengeance\">Разрушительной мести</a>, равный количеству костей урона ответного действия. Бонус применяется только к начальному урону, который получает враг, но не к урону по вам или дополнительному урону после ответного действия.",
   "requires": [
    [
     "cause-10"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -3610,
   "y": -430,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5882",
   "kind": "feat",
   "name": "Защитное наступление",
   "nameEn": "Defensive Advance",
   "level": 1,
   "url": "https://pf2.ru/feats/defensive%20advance",
   "actions": "2",
   "traits": [
    {
     "slug": "guardian",
     "name": "Защитник"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "flourish",
     "name": "Усилие"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Прикрывшись щитом, вы бросаетесь в самую гущу битвы. Вы <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2316\" href=\"https://pf2.ru/actions/raise a shield\">Поднимаете щит</a>, после чего совершаете Перемещение. Если вы завершаете перемещение таким образом, что в вашей зоне досягаемости ближнего боя оказывается хотя бы один враг, вы можете совершить по нему Удар в ближнем бою. Вы можете использовать эту черту при <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2374\" href=\"https://pf2.ru/actions/climb\">Лазании</a>, <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2381\" href=\"https://pf2.ru/actions/swim\">Плавании</a>, <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2312\" href=\"https://pf2.ru/actions/fly\">Полёте</a> или <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2310\" href=\"https://pf2.ru/actions/burrow\">Рытье</a> вместо Перемещения, если у вас есть соответствующий тип перемещения.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": -1450,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassVelichie.webp",
   "id": "feat-5881",
   "kind": "feat",
   "name": "Ослепительное сияние",
   "nameEn": "Brilliant Flash",
   "level": 1,
   "url": "https://pf2.ru/feats/brilliant%20flash",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "величие",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/9\" href=\"https://pf2.ru/championcauses/grandeur\">величие</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/9\" href=\"https://pf2.ru/championcauses/grandeur\">величие</a>"
   },
   "html": "Источаемый вами свет очищает души от страха. Когда вы используете <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2805\" href=\"https://pf2.ru/actions/flash of grandeur\">Отблеск величия</a>, спровоцировавший противник также становится <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/58\" href=\"https://pf2.ru/conditions/off-guard\">застигнут врасплох</a> на 1 раунд.",
   "requires": [
    [
     "cause-9"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -4410,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5884",
   "kind": "feat",
   "name": "Отчаянная молитва",
   "nameEn": "Desperate Prayer",
   "level": 1,
   "url": "https://pf2.ru/feats/desperate%20prayer",
   "actions": "4",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Частота": "1 в день",
    "Условие": "вы начинаете свой ход, у вас не осталось ФП"
   },
   "html": "В надежде на спасение вы взываете к своему божеству. Вы немедленно восстанавливаете 1 ФП, который можете потратить только на заклинание преданности. Если вы не потратите этот ФП до конца хода, он пропадает.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 3070,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassDesecration.webp",
   "id": "feat-5888",
   "kind": "feat",
   "name": "Постоянный эгоизм",
   "nameEn": "Ongoing Selfishness",
   "level": 1,
   "url": "https://pf2.ru/feats/ongoing%20selfishness",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "осквернение",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/8\" href=\"https://pf2.ru/championcauses/desecration\">осквернение</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/8\" href=\"https://pf2.ru/championcauses/desecration\">осквернение</a>"
   },
   "html": "Сила характера и невероятный эгоизм побуждают вас всегда в первую очередь защищать себя. После того как вы используете <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2804\" href=\"https://pf2.ru/actions/selfish shield\">Щит эгоиста</a>, вы получаете устойчивость ко всему последующему урону спровоцировавшего врага до конца хода, в котором вы использовали ответное действие. Величина устойчивости равна половине вашей устойчивости от Щита эгоиста.",
   "requires": [
    [
     "cause-8"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -3410,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SubClassJustice.webp",
   "id": "feat-5887",
   "kind": "feat",
   "name": "Проворное возмездие",
   "nameEn": "Nimble Reprisal",
   "level": 1,
   "url": "https://pf2.ru/feats/nimble%20reprisal",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "правосудие",
   "prereqHtml": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/11\" href=\"https://pf2.ru/championcauses/justice\">правосудие</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<a class=\"item-link quicklink item-link--championcause\" data-key=\"championcause/11\" href=\"https://pf2.ru/championcauses/justice\">правосудие</a>"
   },
   "html": "Вы можете использовать дистанционное оружие для Удара возмездия. Вместо Удара в ближнем бою вы можете совершить дистанционный <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2807\" href=\"https://pf2.ru/actions/retributive strike\">Удар возмездия</a>; противник при этом должен находиться в пределах дистанции и в вашей ауре поборника, но вне зоны вашей досягаемости.<br>\nВы также можете совершать Удары в ближнем бою на большем расстоянии. Если спровоцировавший ответное действие противник находится вне зоны вашей досягаемости, но в пределах 5 футов от неё, вы можете совершить Шаг в качестве части ответного действия, чтобы враг оказался в зоне досягаемости перед нанесением Удара возмездия в ближнем бою.",
   "requires": [
    [
     "cause-11"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -4610,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-7596",
   "kind": "feat",
   "name": "Расколотая вера",
   "nameEn": "Splinter Faith",
   "level": 1,
   "url": "https://pf2.ru/feats/splinter%20faith",
   "actions": null,
   "traits": [
    {
     "slug": "cleric",
     "name": "Жрец"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Ваша вера в ваше божество выражена крайне необычным образом, который некоторые могли бы назвать еретическим. При выборе этой черты вам следует определить основные принципы вашего отколовшегося вероучения, хотя оно не должно затрагивать наказы или анафемы божества. Выберите четыре домена. Эти домены должны быть выбраны из числа доменов вашего божества, альтернативных доменов вашего божества, а также не более одного домена, который не входит ни в один из этих списков и не является анафемой для вашего божества. Любое заклинание домена, которое вы сотворяете из домена, отсутствующего в списках вашего божества, всегда поднимается на 1 ранг ниже обычного для заклинания фокуса. Для целей способностей, зависящих от доменов вашего божества, четыре выбранных вами домена считаются доменами вашего божества, а любые домены вашего божества, которые вы не выбрали, теперь относятся к его альтернативным доменам.<br>\n<b>Примечание:</b> если вы не брали это умение на 1 уровне, изменение способа связи с вашим божеством требует переобучения, как написано в разделе <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/3350\" href=\"https://pf2.ru/rules/changing faith?rule=3350\">смена верований</a>. Если вы берёте эту черту и ранее получали преимущество от любого эффекта, требующего домена, например <a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/4644\" href=\"https://pf2.ru/feats/domain initiate\">Начальное заклинание домена</a>, вы теряете этот эффект.<br>\nНа усмотрение Ведущего, вы можете взять это умение с другими классами или архетипами, которые получают доступ к доменам через божество.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 2070,
   "y": -430,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5892",
   "kind": "feat",
   "name": "Божественная милость",
   "nameEn": "Divine Grace",
   "level": 2,
   "url": "https://pf2.ru/feats/divine%20grace",
   "actions": "5",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Условие": "вы проходите испытание против заклинания, но ещё не совершили бросок"
   },
   "html": "Вы взываете к божественной милости и получаете ситуативный бонус +2 к испытанию.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 2270,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "health.webp",
   "id": "feat-5893",
   "kind": "feat",
   "name": "Божественное здоровье",
   "nameEn": "Divine Health",
   "level": 2,
   "url": "https://pf2.ru/feats/divine%20health",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Благодаря вере вы устойчивы к болезням, она защищает вас, когда вы ухаживаете за больными. Вы получаете бонус состояния +2 к испытаниям против <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/578\" href=\"https://pf2.ru/traits/disease\">болезней</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/669\" href=\"https://pf2.ru/traits/poison\">ядов</a>, а также к чистым проверкам на восстановление от <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/86\" href=\"https://pf2.ru/conditions/persistent damage\">продолжительного урона</a> ядом. Союзники в вашей ауре поборника получают аналогичное преимущество, но бонус уменьшается до +1.<br>\nКроме того, если вы получаете успех в испытании против болезни или яда, он считается для вас критическим успехом (союзники это преимущество не получают). Если у вас есть классовая особенность благословенное тело, то когда вы получаете критический провал в испытании против болезни или яда, он считается для вас обычным провалом.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 2070,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-defender.webp",
   "id": "feat-7518",
   "kind": "feat",
   "name": "Клятва защитника",
   "nameEn": "Oath of The Defender",
   "level": 2,
   "url": "https://pf2.ru/feats/oath%20of%20the%20defender",
   "actions": null,
   "traits": [
    {
     "slug": "oath",
     "name": "Клятва"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Во время вашей ежедневной подготовки, вы можете дать клятву защиты от определённого вида врагов во время ваших подвигов в этот день. Выберите <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/523\" href=\"https://pf2.ru/traits/aberration\">аберрация</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">небожитель</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/581\" href=\"https://pf2.ru/traits/dragon\">дракон</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">бестия</a>, или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/722\" href=\"https://pf2.ru/traits/undead\">нежить</a>. Вы не можете выбрать <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">небожителя</a> если вы <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">священный</a>, как и не можете выбрать <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">бестию</a> если вы <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">нечестивый</a>. Вы получаете наказ защиты против выбранного типа существ.<br>\nСоюзники в вашей ауре поборника, не включая вас, получают <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2312\" href=\"https://pf2.ru/rules/immunity, weakness, and resistance?rule=2312\">устойчивость</a> 2 на урон наносимый существом с выбранным дескриптором. Если такое существо наносит более одного типа урона одновременно, применяйте это сопротивление только к наибольшему количеству урона. Значение устойчивости повышается до 3 на 7 уровне, 4 на 12 уровне, и 5 на 17 уровне. Если существо с выбранным дескриптором вызывает реакцию вашего поборника, а реакция вашего поборника обеспечивает <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2312\" href=\"https://pf2.ru/rules/immunity, weakness, and resistance?rule=2312\">устойчивость</a> к спровоцировавшему урону, сопротивление увеличивается на 5.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 2670,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-avenger.webp",
   "id": "feat-7517",
   "kind": "feat",
   "name": "Клятва мстителя",
   "nameEn": "Oath of The Avenger",
   "level": 2,
   "url": "https://pf2.ru/feats/oath%20of%20the%20avenger",
   "actions": null,
   "traits": [
    {
     "slug": "oath",
     "name": "Клятва"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Вы поклялись покарать любую увиденную вами мерзость. Вы получаете наказ: «Выслеживать тех, кто причинил вред невинным или совершил отвратительные злодеяния». Когда вы видите, как существо причиняет вред союзнику, невинному или не участвующему в бою, вы можете призвать свою клятву против этого существа. Как и речь, это не требует действия. Большинство поборников предпочитают призывать такие клятвы вслух, если это возможно. Призыв действует неопределённо долго, хотя вы можете прекратить его, если будете удовлетворены тем, что цель исправилась, искупила вину или была прощена.<br>\nВы можете использовать <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2047\" href=\"https://pf2.ru/spells/lay on hands\">возложение рук</a> чтобы нанести урон существу, против которого вы призвали свою клятву, как если бы оно было <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/722\" href=\"https://pf2.ru/traits/undead\">нежитью</a>; в этом случае возложение рук наносит урон <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/737\" href=\"https://pf2.ru/traits/spirit\">духом</a> вместо урона <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/509\" href=\"https://pf2.ru/traits/vitality\">жизнненой</a> энергии, получает дескриптор дух, и теряет дескриптор жизнь. Это не мешает вам исцелить такое существо с помощью <i>Возложения рук</i>, если вы того пожелаете.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 2470,
   "y": -560,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-assassin.webp",
   "id": "feat-7519",
   "kind": "feat",
   "name": "Клятва убийцы",
   "nameEn": "Oath of The Slayer",
   "level": 2,
   "url": "https://pf2.ru/feats/oath%20of%20the%20slayer",
   "actions": null,
   "traits": [
    {
     "slug": "oath",
     "name": "Клятва"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Во время ежедневной подготовки, вы клянётесь победить, свергнуть или уничтожить определённый род врагов во время ваших подвигов в этот день. Выберите <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/523\" href=\"https://pf2.ru/traits/aberration\">аберрация</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">небожитель</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/581\" href=\"https://pf2.ru/traits/dragon\">дракон</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">бестия</a>, или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/722\" href=\"https://pf2.ru/traits/undead\">нежить</a>. Вы не можете выбрать небожителей еслы вы <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">священный</a>, как и не можете выбрать бестий если вы <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">нечестивый</a>. Вы получаете наказ об изгнании или убийстве существ такого рода.<br>\nВаш <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2306\" href=\"https://pf2.ru/actions/strike\">Удар</a> и заклинания преданности которые наносят урон, наносят дополнительный 1 урон <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/737\" href=\"https://pf2.ru/traits/spirit\">духом</a> против существ с выбранным дескриптором. Это урон увеличивается до 2 на 7 уровне и 3 на 14 уровне. Если существо с выбранным дескриптором провоцирует вашу реакцию поборника, этот урон удваивается до конца вашего следующего хода.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-faith",
   "theme": "theme-faith",
   "x": 1870,
   "y": -560,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "300px-Dethrone.webp",
   "id": "feat-5894",
   "kind": "feat",
   "name": "Аура отваги",
   "nameEn": "Aura of Courage",
   "level": 4,
   "url": "https://pf2.ru/feats/aura%20of%20courage",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника, дескриптор «священный».",
   "prereqHtml": "аура поборника, дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>.",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника, дескриптор <span class=\"rhombus-wrap\">"
   },
   "html": "Вы не теряете присутствия духа перед лицом опасности и своим примером укрепляете храбрость союзников. Когда вы получаете состояние <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/76\" href=\"https://pf2.ru/conditions/frightened\">испуга</a>, вы снижаете его значение на 1 (вплоть до 0). В конце своего хода вы также снижаете на 1 и значение испуга всех союзников в вашей ауре поборника.",
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2530,
   "y": -690,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5895",
   "kind": "feat",
   "name": "Аура отчаяния",
   "nameEn": "Aura of Despair",
   "level": 4,
   "url": "https://pf2.ru/feats/aura%20of%20despair",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника, дескриптор «нечестивый»",
   "prereqHtml": "аура поборника, дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника, дескриптор <span class=\"rhombus-wrap\">"
   },
   "html": "Подобно воплощению зла, вы вселяете во врагов ещё больший ужас, от которого трудно избавиться, пока вы рядом. Враги в вашей ауре поборника получают ситуативный штраф .1 к испытаниям против <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/598\" href=\"https://pf2.ru/traits/fear\">ужаса</a>. Кроме того, враг, заканчивающий свой ход в вашей ауре поборника, не может уменьшить значение своего  <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/76\" href=\"https://pf2.ru/conditions/frightened\">испуга</a> ниже 1.",
   "requires": [
    [
     "sanct-unholy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2730,
   "y": -690,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "feat-5898",
   "kind": "feat",
   "name": "Безопасность",
   "nameEn": "Security",
   "level": 4,
   "url": "https://pf2.ru/feats/security",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Духовный щит",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2049\" href=\"https://pf2.ru/spells/shields of the spirit\">Духовный щит</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Вы научились продлевать действие создаваемой вами духовной защиты. Вы можете сотворить заклинание <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2049\" href=\"https://pf2.ru/spells/shields of the spirit\">духовные щиты</a>, потратив 2 действия вместо 1; в таком случае вы можете выбрать одного союзника в вашей ауре поборника и создать призрачный щит, который будет его сопровождать. В течение 1 минуты этот союзник получает преимущества заклинания духовные щиты, в том числе когда он находится вне вашей ауры поборника и когда ваш щит не поднят. Если вы создаёте новый щит-спутник, предыдущий немедленно исчезает.",
   "requires": [
    [
     "spell-2049"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": 630,
   "y": -690,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "feat-5896",
   "kind": "feat",
   "name": "Беспощадность",
   "nameEn": "Cruelty",
   "level": 4,
   "url": "https://pf2.ru/feats/cruelty",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Касание пустоты",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2048\" href=\"https://pf2.ru/spells/touch of the void\">Касание пустоты</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваше прикосновение буквально высасывает силы вашего врага. Вы можете сотворить заклинание <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2048\" href=\"https://pf2.ru/spells/touch of the void\">касание пустоты</a> на живое существо, потратив 2 действия вместо 1; в таком случае провалившая испытание цель также получает <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/71\" href=\"https://pf2.ru/conditions/enfeebled\">слабость 1</a> на 1 минуту (при критическом провале — слабость 2).",
   "requires": [
    [
     "spell-2048"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": 30,
   "y": -690,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5897",
   "kind": "feat",
   "name": "Избавление",
   "nameEn": "Mercy",
   "level": 4,
   "url": "https://pf2.ru/feats/mercy",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Возложение рук",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2047\" href=\"https://pf2.ru/spells/lay on hands\">Возложение рук</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/242\" href=\"https://pf2.ru/archetypes/blessed one\">Благословенный</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваше прикосновение способно исцелять тело и разум. Вы можете сотворить заклинание возложение рук на живое существо, потратив 2 действия вместо 1; в таком случае вы можете попытаться нейтрализовать одно из воздействующих на цель состояний (по вашему выбору). Взяв эту черту, выберите одно из перечисленных далее избавлений; вы можете пытаться нейтрализовать только те состояния, которые указаны в выбранном избавлении <b>Избавление изящества</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/61\" href=\"https://pf2.ru/conditions/clumsy\">неуклюжесть</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/77\" href=\"https://pf2.ru/conditions/grabbed\">захват</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/85\" href=\"https://pf2.ru/conditions/paralyzed\">паралич</a>; <b>Избавление разума</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/74\" href=\"https://pf2.ru/conditions/fleeing\">паника</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/76\" href=\"https://pf2.ru/conditions/frightened\">испуг</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/94\" href=\"https://pf2.ru/conditions/stupefied\">ошеломление</a>; <b>Избавление тела</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/59\" href=\"https://pf2.ru/conditions/blinded\">слепота</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/65\" href=\"https://pf2.ru/conditions/dazzled\">растерянность</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/66\" href=\"https://pf2.ru/conditions/deafened\">глухота</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/71\" href=\"https://pf2.ru/conditions/enfeebled\">слабость</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/91\" href=\"https://pf2.ru/conditions/sickened\">тошнота</a>.<br>\n<b>Примечание:</b> эту черту можно выбрать до трёх раз. Каждый раз вы выбираете новый тип избавления и добавляете соответствующие состояния к тем, которые можете нейтрализовать при помощи этой черты.",
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": 1030,
   "y": -690,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "Horse.webp",
   "id": "feat-7991",
   "kind": "feat",
   "name": "Приспособленный спутник",
   "nameEn": "Acclimated Mount",
   "level": 4,
   "url": "https://pf2.ru/feats/acclimated%20mount",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Боевой клич!",
   "prereqText": "Верный скакун; изученное Выживание",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>; изученное Выживание",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/268\" href=\"https://pf2.ru/sources/battlecry!\">Боевой клич!</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "По милости вашего божества ваш скакун может преодолевать естественные препятствия и опасности, характерные для определённой местности. Выберите: водная, арктическая, пустыня, лес, горы, равнины, небо, болото или подземелье. Чтобы выбрать водную местность, ваш скакун должен иметь скорость плавания; чтобы выбрать небо — скорость полёта. Ваш скакун игнорирует эффекты пересечённой местности в выбранной вами области. <br>\nЕсли вы становитесь экспертом в Выживании, вы можете во время ежедневной подготовки помолиться, чтобы каждый день менять тип местности, к которой приспособлен ваш скакун.",
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 3810,
   "y": -690,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-5900",
   "kind": "feat",
   "name": "Верный боевой конь",
   "nameEn": "Loyal Warhorse",
   "level": 6,
   "url": "https://pf2.ru/feats/loyal%20warhorse",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Верный скакун",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваша со скакуном преданность друг другу нерушима. Скакун, получённый вами благодаря черте Верный скакун, становится взрослым верным зверем. Кроме того, ваш скакун никогда не станет атаковать вас, даже если его магически принуждают это сделать.",
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 4210,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5832",
   "kind": "feat",
   "name": "Внеочередная атака",
   "nameEn": "Reactive Strike",
   "level": 6,
   "url": "https://pf2.ru/feats/reactive%20strike",
   "actions": "5",
   "traits": [
    {
     "slug": "barbarian",
     "name": "Варвар"
    },
    {
     "slug": "guardian",
     "name": "Защитник"
    },
    {
     "slug": "magus",
     "name": "Колдун"
    },
    {
     "slug": "commander",
     "name": "Командор"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "swashbuckler",
     "name": "Сорвиголова"
    },
    {
     "slug": "exemplar",
     "name": "Экземплар"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>, <a class=\"item-link quicklink item-link--source\" data-key=\"source/355\" href=\"https://pf2.ru/sources/impossible magic\">Impossible Magic</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/254\" href=\"https://pf2.ru/archetypes/marshal\">Командир</a>",
    "Условие": "существо в вашей зоне досягаемости использует действие с дескриптором <span class=\"rhombus-wrap\">"
   },
   "html": "Вы замечаете, что враг уязвим, и атакуете его. Совершите Удар\nв ближнем бою по существу, спровоцировавшему его своими действиями. Если это критический удар, а спровоцировало его действие с дескриптором «манипуляция», вы срываете это действие. Данный Удар не учитывается при определении штрафа за последовательные атаки, также к нему не применяется этот штраф.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": -1890,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Hunger_of_Hadar.webp",
   "id": "feat-5899",
   "kind": "feat",
   "name": "Расширение ауры",
   "nameEn": "Expand Aura",
   "level": 6,
   "url": "https://pf2.ru/feats/expand%20aura",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Концентрация"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника",
   "prereqHtml": "аура поборника",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника"
   },
   "html": "Вы расширяете влияние своей сакральной силы. Радиус вашей ауры увеличивается до 30 футов до начала вашего следующего хода. Начиная с 10 уровня расширение длится 1 минуту, а начиная с 16 уровня — до тех пор, пока вы не Прекратите его действие.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2530,
   "y": -820,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "smite.webp",
   "id": "feat-5901",
   "kind": "feat",
   "name": "Сокрушение",
   "nameEn": "Smite",
   "level": 6,
   "url": "https://pf2.ru/feats/smite",
   "actions": "1",
   "traits": [
    {
     "slug": "concentrate",
     "name": "Концентрация"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Вы выделяете одного врага, которого собираетесь сразить во славу вашего божества. Выберите одного противника, которого вы можете видеть. До начала вашего следующего хода все ваши Удары по этому противнику получают бонус состояния +3 к урону (+4, если вы умелы в этом оружии или безоружной атаке, которыми совершаете Удар, на мастерском уровне). Если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a> или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>, а цель — противоположным, бонус увеличивается до +4 (+5, если вы умелы на мас терском уровне).<br>\nЕсли до начала вашего следующего хода цель совершает враждебное действие против вас или вашего союзника, длительность эффекта продлевается до конца следующего хода этого противника. Если противник продолжает совершать враждебные действия каждый ход, длительность эффекта продолжает продлеваться. Если вы используете Сокрушение снова, ваше текущее Сокрушение немедленно прекращается.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": -2090,
   "y": -820,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-4807",
   "kind": "feat",
   "name": "Щитоносец",
   "nameEn": "Shield Warden",
   "level": 6,
   "url": "https://pf2.ru/feats/shield%20warden",
   "actions": null,
   "traits": [
    {
     "slug": "fighter",
     "name": "Воин"
    },
    {
     "slug": "commander",
     "name": "Командор"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока",
   "prereqText": "[ Поборник ] божественный союзник (щит); [ Поборник ] добро; [ Воин ] Блок щитом",
   "prereqHtml": "[ <a class=\"item-link quicklink link--popup item-link--class_\" data-key=\"class_/58\" href=\"https://pf2.ru/classes/champion?tab=details\">Поборник</a> ] <a class=\"item-link quicklink link--popup item-link--class_\" data-key=\"class_/58\" href=\"https://pf2.ru/classes/champion?tab=details\">божественный союзник (щит)</a>; [ <a class=\"item-link quicklink link--popup item-link--class_\" data-key=\"class_/58\" href=\"https://pf2.ru/classes/champion?tab=details\">Поборник</a> ] <a class=\"item-link quicklink item-link--championtenet\" data-key=\"championtenet/1\" href=\"https://pf2.ru/championtenets/good\">добро</a>; [ <a class=\"item-link quicklink link--popup item-link--class_\" data-key=\"class_/35\" href=\"https://pf2.ru/classes/fighter?tab=details\">Воин</a> ] <a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5212\" href=\"https://pf2.ru/feats/shield block\">Блок щитом</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/216\" href=\"https://pf2.ru/sources/player core\">Основная книга игрока</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/240\" href=\"https://pf2.ru/archetypes/bastion\">Бастион</a>,  <i>Knight Vigilant</i>",
    "Критерии": "[Поборник] божественный союзник (щит); [Поборник] <a class=\"item-link quicklink item-link--championtenet\" data-key=\"championtenet/1\" href=\"https://pf2.ru/championtenets/good\">добро</a>; [Воин] <span class=\"rhombus-wrap\">"
   },
   "html": "Когда ваш щит поднят, вы можете использовать ответное действие Блок щитом, если атака совершена по союзнику рядом с вами. В этом случае щит защищает от урона не вас, а союзника, согласно обычным правилам Блока щитом.",
   "requires": [
    [
     "blessing-shield"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -610,
   "y": -820,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-4816",
   "kind": "feat",
   "name": "Быстрый блок щитом",
   "nameEn": "Quick Shield Block",
   "level": 8,
   "url": "https://pf2.ru/feats/quick%20shield%20block",
   "actions": null,
   "traits": [
    {
     "slug": "fighter",
     "name": "Воин"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока",
   "prereqText": "Блок щитом",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5212\" href=\"https://pf2.ru/feats/shield block\">Блок щитом</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/216\" href=\"https://pf2.ru/sources/player core\">Основная книга игрока</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/240\" href=\"https://pf2.ru/archetypes/bastion\">Бастион</a>, <a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/268\" href=\"https://pf2.ru/archetypes/viking\">Викинг</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Вы почти мгновенно отражаете щитом удары. В начале каждого своего хода вы получаете дополнительное ответное действие, которое можете использовать только для Блока щитом.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": -1650,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-defender.webp",
   "id": "feat-5907",
   "kind": "feat",
   "name": "Второе благословление",
   "nameEn": "Second Blessing",
   "level": 8,
   "url": "https://pf2.ru/feats/second%20blessing",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Благословение верного",
   "prereqHtml": "Благословение верного",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословение верного"
   },
   "html": "За верную службу вы получаете новый дар. Выберите новое благословение верного (отличное от первого) и получите его преимущества.",
   "requires": [
    [
     "group-blessing"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -1210,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5906",
   "kind": "feat",
   "name": "Исцеление скакуна",
   "nameEn": "Heal Mount",
   "level": 8,
   "url": "https://pf2.ru/feats/heal%20mount",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Верный скакун; Возложение рук",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>; <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2047\" href=\"https://pf2.ru/spells/lay on hands\">Возложение рук</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваша преданность скакуну проявляется в виде всплеска жизненной энергии. Когда вы творите <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2047\" href=\"https://pf2.ru/spells/lay on hands\">возложение рук</a> на своего скакуна, вы восстанавливаете ему 10 ПЗ + ещё по 10 ПЗ за каждый круг повышения заклинания вместо обычного количества.",
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
   "x": 3810,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5902",
   "kind": "feat",
   "name": "Продвинутый домен божества",
   "nameEn": "Advanced Deity's Domain",
   "level": 8,
   "url": "https://pf2.ru/feats/advanced%20deity's%20domain",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Домен божества",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5883\" href=\"https://pf2.ru/feats/deity's domain\">Домен божества</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваше усердие и преданность позволили лучше изучить тайны домена божества. Вы получаете продвинутое заклинание домена, выбранного для черты Домен божества, и можете творить его как заклинание преданности.",
   "requires": [
    [
     "feat-5883"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5883",
   "theme": "theme-faith",
   "x": 1470,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellShieldsOfTheSpirit.webp",
   "id": "feat-5905",
   "kind": "feat",
   "name": "Улучшенная безопасность",
   "nameEn": "Greater Security",
   "level": 8,
   "url": "https://pf2.ru/feats/greater%20security",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Безопасность",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5898\" href=\"https://pf2.ru/feats/security\">Безопасность</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Щит в вашей руке защищает ваших союзников не менее надёжно, чем вас самих. Пока ваш щит поднят во время действия щита-спутника, тот союзник, за которым он следует, получает тот же бонус к КБ, что даёт ваш щит. Вы можете использовать <a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5212\" href=\"https://pf2.ru/feats/shield block\">Блок щитом</a>, если этот союзник соответствует условию его срабатывания. При этом используются параметры вашего щита, и именно ему наносится\nурон.",
   "requires": [
    [
     "feat-5898"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5898",
   "theme": "theme-devotion",
   "x": 830,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellTouchOfCorruption.webp",
   "id": "feat-5903",
   "kind": "feat",
   "name": "Улучшенная беспощадность",
   "nameEn": "Greater Cruelty",
   "level": 8,
   "url": "https://pf2.ru/feats/greater%20cruelty",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Беспощадность",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5896\" href=\"https://pf2.ru/feats/cruelty\">Беспощадность</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Порча настолько пронизывает вас, что ваше касание разрушает разумы врагов и вредит их реакции. Когда вы используете Беспощадность, вы вместо обычного эффекта можете дать цели <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/61\" href=\"https://pf2.ru/conditions/clumsy\">неуклюжесть</a> либо <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/94\" href=\"https://pf2.ru/conditions/stupefied\">ошеломление</a> с тем же значением. Состояние вы выбираете\nв момент Сотворения заклинания (до того, как узнаёте результат испытания цели).",
   "requires": [
    [
     "feat-5896"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5896",
   "theme": "theme-devotion",
   "x": -170,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5904",
   "kind": "feat",
   "name": "Улучшенное избавление",
   "nameEn": "Greater Mercy",
   "level": 8,
   "url": "https://pf2.ru/feats/greater%20mercy",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Избавление",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5897\" href=\"https://pf2.ru/feats/mercy\">Избавление</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/242\" href=\"https://pf2.ru/archetypes/blessed one\">Благословенный</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Вера укрепляет вашу способность исцелять недуги. Вы добавляете новые состояния к тем, которые можете нейтрализовать известными вам видами избавления.\n<b>Избавление изящества</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/92\" href=\"https://pf2.ru/conditions/slowed\">замедление</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/81\" href=\"https://pf2.ru/conditions/immobilized\">неподвижность</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/90\" href=\"https://pf2.ru/conditions/restrained\">обездвиженность</a>; на 12 уровне к списку добавляется <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/87\" href=\"https://pf2.ru/conditions/petrified\">окаменение</a>; на 16 уровне к списку добавляется <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/93\" href=\"https://pf2.ru/conditions/stunned\">шок</a>;\n<b>Избавление разума</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/92\" href=\"https://pf2.ru/conditions/slowed\">замедление</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/63\" href=\"https://pf2.ru/conditions/confused\">замешательство</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/64\" href=\"https://pf2.ru/conditions/controlled\">контроль</a>; на 16 уровне к списку добавляются <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/67\" href=\"https://pf2.ru/conditions/doomed\">обречённость</a> и <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/93\" href=\"https://pf2.ru/conditions/stunned\">шок</a>;\n<b>Избавление тела</b> <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/68\" href=\"https://pf2.ru/conditions/drained\">истощение</a>, <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/92\" href=\"https://pf2.ru/conditions/slowed\">замедление</a>; на 16 уровне к списку добавляется <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/93\" href=\"https://pf2.ru/conditions/stunned\">шок</a>.",
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": 1230,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "sight.webp",
   "id": "feat-7521",
   "kind": "feat",
   "name": "Чувство нечестивости",
   "nameEn": "Sense Unholiness",
   "level": 8,
   "url": "https://pf2.ru/feats/sense%20unholiness",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>",
    "Архетип": "<i>Exorcist</i>*"
   },
   "html": "В присутствии порочного вас начинает подташнивать или становится тревожно на душе. Вы можете почувствовать присутствие существа с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">нечестивый</a> на расстоянии 120 футов от себя. Эта способность работает как дополнительный способ восприятия и чем-то напоминает человеческое обоняние. Если нечестивое существо использует маскировку или иным способом пытается скрыть своё присутствие, оно должно совершить проверку Обмана против вашей СЛ Внимания, чтобы спрятать своё освящение от вас. Если проверка существа успешна, оно временно невосприимчиво к вашему Чувству нечестивости на 1 день.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -2970,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "sight.webp",
   "id": "feat-7520",
   "kind": "feat",
   "name": "Чувство святости",
   "nameEn": "Sense Holiness",
   "level": 8,
   "url": "https://pf2.ru/feats/sense%20holiness",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "В присутствии добра вас начинает подташнивать от его приторного самодовольства. Вы способны почувствовать существо с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">священный</a> в радиусе 120 футов от вас. Эта способность работает как дополнительный способ восприятия и чем-то напоминает человеческое обоняние. Если священное существо использует маскировку или иным способом пытается скрыть своё присутствие, то оно должно пройти проверку Обмана против вашей СЛ Внимания, чтобы спрятать своё освящение от вас. Если проверка существа успешна, оно временно невосприимчиво к вашему Чувству святости на 1 день.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -3170,
   "y": -950,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-7992",
   "kind": "feat",
   "name": "Шаг веры",
   "nameEn": "Faithful Stride",
   "level": 8,
   "url": "https://pf2.ru/feats/faithful%20stride",
   "actions": "2/3",
   "traits": [
    {
     "slug": "magical",
     "name": "Магический"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Боевой клич!",
   "prereqText": "Верный скакун",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/268\" href=\"https://pf2.ru/sources/battlecry!\">Боевой клич!</a>",
    "Критерии": "<span class=\"rhombus-wrap\">",
    "Требования": "вы сидите верхом на своём скакуне"
   },
   "html": "Уверенные в своей вере, вы отдаёте <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2400\" href=\"https://pf2.ru/actions/command an animal\">Команду животному</a>, чтобы приказать вашему скакуну совершить <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2305\" href=\"https://pf2.ru/actions/stride\">Перемещение</a> на расстояние масимально равное его удвоенной скорости (или утроенной, если вы использовали 3 действия для Шага веры). Во время этого движения ваш скакун может Перемещаться по жидкостям и другим поверхностям, которые не выдерживают его веса. Если ваш скакун заканчивает своё движение на поверхности, которая не может его выдержать, ваш скакун (и вы) проваливается в неё или она обрушивается как обычно.",
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 4010,
   "y": -950,
   "captionSide": "below",
   "captionW": 84
  },
  {
   "image": "Horse.webp",
   "id": "feat-5908",
   "kind": "feat",
   "name": "Внушительный скакун",
   "nameEn": "Imposing Destrier",
   "level": 10,
   "url": "https://pf2.ru/feats/imposing%20destrier",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Верный боевой конь",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5900\" href=\"https://pf2.ru/feats/loyal warhorse\">Верный боевой конь</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Вам удалось раскрыть внутренний потенциал скакуна. Скакун, получённый вами благодаря черте Верный скакун, становится ловким или лютым верным зверем.<br>\nВаш верный зверь становится самостоятельнее. В ходе сцены он может использовать 1 действие во время вашего хода (но не во время другого вашего действия) для Перемещения или Удара, даже если вы не совершали действие <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2400\" href=\"https://pf2.ru/actions/command an animal\">Команда животному</a>. В этом случае он не сможет получить дополнительные действия в этот раунд благодаря вашей Команде животному.",
   "requires": [
    [
     "feat-5900"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5900",
   "theme": "theme-steed",
   "x": 4410,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevProvornost.webp",
   "id": "feat-5911",
   "kind": "feat",
   "name": "Призрачное наступление",
   "nameEn": "Spectral Advance",
   "level": 10,
   "url": "https://pf2.ru/feats/spectral%20advance",
   "actions": null,
   "traits": [
    {
     "slug": "concentrate",
     "name": "Концентрация"
    },
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "divine",
     "name": "Сакральный"
    },
    {
     "slug": "teleportation",
     "name": "Телепортация"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "благословенная скорость",
   "prereqHtml": "благословенная скорость",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословенная скорость"
   },
   "html": "Вы получаете заклинание преданности <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2052\" href=\"https://pf2.ru/spells/spectral advance\">призрачное наступление</a>, которое позволяет приблизиться к врагу, минуя препятствия.",
   "requires": [
    [
     "blessing-swiftness"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -1010,
   "y": -1080,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevWeapon.webp",
   "id": "feat-5909",
   "kind": "feat",
   "name": "Сияющее оружие",
   "nameEn": "Radiant Armament",
   "level": 10,
   "url": "https://pf2.ru/feats/radiant%20armament",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "благословенное оружие",
   "prereqHtml": "благословенное оружие",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословенное оружие"
   },
   "html": "Ваше благословенное оружие излучает особую мощь. Когда во время ежедневной подготовки вы выбираете оружие, на которое будут действовать эффекты благословенного оружия, к перечню доступных для выбора атрибутивных рун добавляются <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2832\" href=\"https://pf2.ru/equipment/astral\">астральная</a> и <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2833\" href=\"https://pf2.ru/equipment/brilliant\">сверкающая</a>. Если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>, то к перечню также добавляется священная руна, а если дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a> — нечестивая руна.<br>\nКроме того, вы можете поменять выбранную на день руну на другую доступную, использовав занятие на 10 минут, которое обладает дескрипторами <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/595\" href=\"https://pf2.ru/traits/exploration\">«исследование»</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/561\" href=\"https://pf2.ru/traits/concentrate\">«концентрация»</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/579\" href=\"https://pf2.ru/traits/divine\">«сакральный»</a>. Замена руны не восстанавливает способности, которые можно использовать ограниченное число раз, такие как Священное исцеление у священной руны.",
   "requires": [
    [
     "blessing-armament"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -1210,
   "y": -1080,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "DevShield.webp",
   "id": "feat-5910",
   "kind": "feat",
   "name": "Щит расплаты",
   "nameEn": "Shield of Reckoning",
   "level": 10,
   "url": "https://pf2.ru/feats/shield%20of%20reckoning",
   "actions": "5",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Щитоносец; благословенный щит, ответное действие поборника",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/4807\" href=\"https://pf2.ru/feats/shield warden\">Щитоносец</a>; благословенный щит, ответное действие поборника",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Частота": "1 в раунд",
    "Критерии": "<span class=\"rhombus-wrap\">",
    "Условие": "атака противника против вашего союзника удовлетворяет условиям вашего ответного действия поборника и ответного действия <span class=\"rhombus-wrap\">"
   },
   "html": "Когда вы прикрываете союзника щитом, вы используете свою мощь, чтобы лучше его защитить. Вы используете ответное действие Блок щитом, чтобы защитить союзника от урона, после чего используете своё ответное действие поборника против врага, который атаковал вашего союзника.\n<br>\n<b>Примечание:</b> если у вас есть способность, позволяющая вам использовать дополнительное ответное действие для Блока щитом или для ответного действия поборника, вы можете использовать его и для Щита расплаты.",
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
   "x": -410,
   "y": -1080,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "300px-Calm_Emotions.webp",
   "id": "feat-5913",
   "kind": "feat",
   "name": "Аура веры",
   "nameEn": "Aura of Faith",
   "level": 12,
   "url": "https://pf2.ru/feats/aura%20of%20faith",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "вы обладаете дескриптором «священный» и «нечестивый»",
   "prereqHtml": "вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "вы обладаете дескриптором <span class=\"rhombus-wrap\">"
   },
   "html": "Вы излучаете ауру, наполняющую божественной мощью ваши атаки и атаки союзников поблизости. Удары всех согласных союзников в вашей ауре поборника получают дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>, если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>, или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>, если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>.",
   "requires": [
    [
     "sanct-holy",
     "sanct-unholy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2730,
   "y": -1210,
   "captionSide": "below",
   "captionW": 95
  },
  {
   "image": "fight.webp",
   "id": "feat-5914",
   "kind": "feat",
   "name": "Благословенный контрудар",
   "nameEn": "Blessed Counterstrike",
   "level": 12,
   "url": "https://pf2.ru/feats/blessed%20counterstrike",
   "actions": "1",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "flourish",
     "name": "Усилие"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "ответное действие поборника, которое даёт союзнику устойчивость к урону врага (подобные ответные действия дают посвящения величия, искупления, правосудия и освобождения).",
   "prereqHtml": "ответное действие поборника, которое даёт союзнику устойчивость к урону врага (подобные ответные действия дают посвящения величия, искупления, правосудия и освобождения).",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "ответное действие поборника, которое даёт союзнику устойчивость к урону врага (подобные ответные действия дают посвящения величия, искупления, правосудия и освобождения)",
    "Требования": "враг спровоцировал ваше ответное действие поборника за время, прошедшее с конца вашего прошлого хода"
   },
   "html": "Вы взываете к божественной силе и совершаете Удар (оружием или безоружный) по противнику, который спровоцировал ваше ответное действие поборника. Удар дополнительно наносит две кости урона оружия. При попадании Удара цель получает уязвимость, равную половине вашего уровня, ко всем вашим Ударам и к Ударам ваших союзников до начала вашего следующего хода.",
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
   "x": -3610,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Unholy.webp",
   "id": "feat-7523",
   "kind": "feat",
   "name": "Бледная лошадь",
   "nameEn": "Pale Horse",
   "level": 12,
   "url": "https://pf2.ru/feats/pale%20horse",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "Верный скакун;",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>;",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Стоит вам сесть в седло, как ваш скакун обращается устрашающим предвестником невзгод. Его внешний вид меняется: пламя пробивается сквозь прорехи в шкуре, его окружает вихрь негативной энергии, или из его плоти начинает капать яд. Когда вы совершаете <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2314\" href=\"https://pf2.ru/actions/mount\">Посадку</a> на своего скакуна, вы можете выбрать урон <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/604\" href=\"https://pf2.ru/traits/fire\">огнём</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/669\" href=\"https://pf2.ru/traits/poison\">ядом</a> или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/510\" href=\"https://pf2.ru/traits/void\">пустотой</a>. Пока вы верхом на нём, ваш скакун получает <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2312\" href=\"https://pf2.ru/rules/immunity, weakness, and resistance?rule=2312\">устойчивость</a> 10  к выбранному типу урона, а любое существо, прикоснувшееся к нему, получает 1d6 урона выбранного типа (это включает безоружные атаки и <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2306\" href=\"https://pf2.ru/actions/strike\">Удар</a> оружием ближнего боя существ рядом со скакуном). Этот урон увеличивается до 2d6 на 16 уровне и до 3d6 на 20 уровне.",
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 3810,
   "y": -1210,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5917",
   "kind": "feat",
   "name": "Божественная преграда",
   "nameEn": "Divine Wall",
   "level": 12,
   "url": "https://pf2.ru/feats/divine%20wall",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "You're wielding a shield",
   "prereqHtml": "You're wielding a shield",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Требования": "вы используете щит"
   },
   "html": "Вы пользуетесь щитом, чтобы преграждать путь противникам, не давая им отступить от вас или обойти вас. Все клетки рядом с вами считаются для ваших противников пересечённой местностью.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-shield",
   "theme": "theme-shield",
   "x": -1450,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5912",
   "kind": "feat",
   "name": "Избавление от недуга",
   "nameEn": "Affliction Mercy",
   "level": 12,
   "url": "https://pf2.ru/feats/affliction%20mercy",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Избавление",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5897\" href=\"https://pf2.ru/feats/mercy\">Избавление</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/242\" href=\"https://pf2.ru/archetypes/blessed one\">Благословенный</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Божественная благодать, струящаяся через вас, усмиряет недуги. Добавьте к доступным вам видам избавления избавление восстановления, которое позволяет нейтрализовать недуг, а не вызывавший состояние эффект (большинство недугов — <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/566\" href=\"https://pf2.ru/traits/curse\">проклятия</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/578\" href=\"https://pf2.ru/traits/disease\">болезни</a> или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/669\" href=\"https://pf2.ru/traits/poison\">яды</a>).",
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": 1230,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-7993",
   "kind": "feat",
   "name": "Опрокидывающий удар скакуна",
   "nameEn": "Steed's Toppling Strike",
   "level": 12,
   "url": "https://pf2.ru/feats/steed's%20toppling%20strike",
   "actions": "1",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    },
    {
     "slug": "flourish",
     "name": "Усилие"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Боевой клич!",
   "prereqText": "Верный скакун",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5885\" href=\"https://pf2.ru/feats/faithful steed\">Верный скакун</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/268\" href=\"https://pf2.ru/sources/battlecry!\">Боевой клич!</a>",
    "Критерии": "<span class=\"rhombus-wrap\">",
    "Требования": "враг спровоцировал ваше ответное действие поборника с конца вашего последнего хода"
   },
   "html": "Те, кто бросает вызов вашему делу, ощущают на себе мощные атаки вашего скакуна. Отдайте <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2400\" href=\"https://pf2.ru/actions/command an animal\">Команду животному</a>, чтобы приказать вашему скакуну нанести <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2306\" href=\"https://pf2.ru/actions/strike\">Удар</a> по врагу, который спровоцировал ваше ответное действие поборника. Безоружная атака вашего скакуна наносит одну дополнительную кость урона для этого <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2306\" href=\"https://pf2.ru/actions/strike\">Удара</a>. Если Удар попадает, цель <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/88\" href=\"https://pf2.ru/conditions/prone\">распластывается</a>.",
   "requires": [
    [
     "feat-5885"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5885",
   "theme": "theme-steed",
   "x": 4010,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "oath-of-avenger.webp",
   "id": "feat-7522",
   "kind": "feat",
   "name": "Принуждение к клятве",
   "nameEn": "Enforce Oath",
   "level": 12,
   "url": "https://pf2.ru/feats/enforce%20oath",
   "actions": "1",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "Любая черта с дескриптором Клятва",
   "prereqHtml": "Любая черта с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/119\" href=\"https://pf2.ru/traits/oath\">Клятва</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>",
    "Частота": "1 в час",
    "Критерии": "любая черта с дескриптором <span class=\"rhombus-wrap\">",
    "Требования": "вы видите существо, против которого дали клятву"
   },
   "html": "Вы обращаетесь к своей клятве, чтобы придать себе сил в бою. Выберите одно существо, которое видите, из числа тех, кого поклялись уничтожить (в соответствии с чертами вашей клятвы). Вы получаете бонус состояния +1 к КБ и испытаниям против атак и эффектов этого существа. Кроме того, вы получаете бонус состояния +1 к проверкам атак по нему. Однако стремление соблюсти клятву отвлекает вас от других врагов. Вы получаете штраф состояния -1 к КБ, проверкам атак и испытаниям против остальных существ, пока не прекратите Принуждение к клятве.<br>\nПринуждение к клятве прекращается, когда ПЗ выбранного существа снижаются до 0, или когда оно сдаётся на вашу милость или милость ваших союзников, если вы падаете <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/95\" href=\"https://pf2.ru/conditions/unconscious\">без сознания</a>, или если враг остаётся <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/98\" href=\"https://pf2.ru/conditions/unnoticed\">незамеченным</a> для вас более 1 минуты. Вы также можете <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2311\" href=\"https://pf2.ru/actions/dismiss\">Прекратить</a> этот эффект в качестве свободного действия.",
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
   "x": 2870,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "smite.webp",
   "id": "feat-5915",
   "kind": "feat",
   "name": "Самопожертвование поборника",
   "nameEn": "Champion's Sacrifice",
   "level": 12,
   "url": "https://pf2.ru/feats/champion's%20sacrifice",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "у вас нет дескриптора «нечестивый»",
   "prereqHtml": "у вас нет дескриптора <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "у вас нет дескриптора <span class=\"rhombus-wrap\">"
   },
   "html": "Вы приносите себя в жертву, чтобы защитить других. Вы получаете заклинание преданности <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2050\" href=\"https://pf2.ru/spells/champion's sacrifice\">самопожертвование поборника</a>.",
   "requires": [],
   "forbids": [
    "sanct-unholy"
   ],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": -1890,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-5916",
   "kind": "feat",
   "name": "Сила преданности",
   "nameEn": "Devoted Focus",
   "level": 12,
   "url": "https://pf2.ru/feats/devoted%20focus",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "заклинания преданности",
   "prereqHtml": "заклинания преданности",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "заклинания преданности"
   },
   "html": "Ваша преданность божеству столь сильна, что ваша связь с ним крепнет. При <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2621\" href=\"https://pf2.ru/actions/refocus\">Фокусировке</a> вы полностью восстанавливаете свой запас ФП.",
   "requires": [
    [
     "group-devotion"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": 230,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5918",
   "kind": "feat",
   "name": "Чудовищный удар",
   "nameEn": "Gruesome Strike",
   "level": 12,
   "url": "https://pf2.ru/feats/gruesome%20strike",
   "actions": "1",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)",
   "prereqHtml": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)",
    "Требования": "ваши Удары наносят дополнительный урон благодаря вашему ответному действию поборника"
   },
   "html": "Совершите Удар по существу, которое спровоцировало ваше ответное действие поборника. При попадании цель получает двойной дополнительный урон от вашего ответного действия и проходит испытание Стойкости против вашей классовой СЛ, при провале получая <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/68\" href=\"https://pf2.ru/conditions/drained\">истощение 1</a>. Вне зависимости от результата существо становится временно невосприимчиво к вашему применению этой способности на 24 часа.",
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
   "x": -3810,
   "y": -1210,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Cure_Wounds.webp",
   "id": "feat-5920",
   "kind": "feat",
   "name": "Аура жизни",
   "nameEn": "Aura of Life",
   "level": 14,
   "url": "https://pf2.ru/feats/aura%20of%20life",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника",
   "prereqHtml": "аура поборника",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника",
    "Требования": "аура поборника"
   },
   "html": "Ваша аура защищает от сил Пустоты. Вы и все союзники в вашей ауре поборника получаете устойчивость 5 к урону пустотой и бонус состояния +1 к испытаниям против эффектов с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/510\" href=\"https://pf2.ru/traits/void\">«пустота»</a>.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2530,
   "y": -1340,
   "captionSide": "below",
   "captionW": 105
  },
  {
   "image": "Holy.webp",
   "id": "feat-5921",
   "kind": "feat",
   "name": "Аура праведности",
   "nameEn": "Aura of Righteousness",
   "level": 14,
   "url": "https://pf2.ru/feats/aura%20of%20righteousness",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника, вы обладаете дескриптором «священный»",
   "prereqHtml": "аура поборника, вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника, вы обладаете дескриптором <span class=\"rhombus-wrap\">"
   },
   "html": "Ваша праведная аура снижает силу зла и не даёт нечестивым существам сбежать от вас. Вы и все союзники в вашей ауре поборника получаете устойчивость 5 к заклинаниям, Ударам и всем прочим эффектам с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>. Если заклинание или иной эффект с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/710\" href=\"https://pf2.ru/traits/teleportation\">«телепортация»</a> должны перенести существо с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a> из вашей ауры поборника, аура пытается нейтрализовать эффект, используя круг и СЛ ваших заклинаний преданности.",
   "requires": [
    [
     "sanct-holy"
    ]
   ],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2730,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "brave.webp",
   "id": "feat-5919",
   "kind": "feat",
   "name": "Аура решимости",
   "nameEn": "Aura of Determination",
   "level": 14,
   "url": "https://pf2.ru/feats/aura%20of%20determination",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "аура поборника",
   "prereqHtml": "аура поборника",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "аура поборника",
    "Требования": "аура поборника"
   },
   "html": "Ваша аура защищает от сил, искажающих разум и тело. Вы и все союзники в вашей ауре поборника получаете бонус состояния +1\nк испытаниям против эффектов с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/647\" href=\"https://pf2.ru/traits/mental\">«ментальный»</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/657\" href=\"https://pf2.ru/traits/morph\">«метаморфоза»</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/670\" href=\"https://pf2.ru/traits/polymorph\">«полиморф»</a>.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-aura",
   "theme": "theme-aura",
   "x": -2330,
   "y": -1340,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "300px-Longstrider.webp",
   "id": "feat-5922",
   "kind": "feat",
   "name": "Божественные рефлексы",
   "nameEn": "Divine Reflexes",
   "level": 14,
   "url": "https://pf2.ru/feats/divine%20reflexes",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "В начале каждого своего хода вы получаете дополнительное ответное действие, использовать которое можете только для совершения ответного действия поборника.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": -2090,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Conjure_Barrage.webp",
   "id": "feat-7524",
   "kind": "feat",
   "name": "Возвышенное величие",
   "nameEn": "Exalted Greatness",
   "level": 14,
   "url": "https://pf2.ru/feats/exalted%20greatness",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Вы улучшаете своё возвышенное ответное действие, получая следующие преимущества в зависимости от вашего призвания.<br>\n<b>Осквернение:</b> пока у вас есть преимущество, вы также получаете бонус состояния +2 к испытаниям против эффектов, сотворяемых врагами в ауре Поборника.<br>\n<b>Величие:</b> любой <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/1653\" href=\"https://pf2.ru/spells/revealing light\">озаряющий свет</a>, сотворённый вашим Проблеском величия, длится 1 минуту.<br>\n<b>Несправедливость:</b> урон, наносимый врагам, не являющихся спровоцировавшими существами, увеличивается на величину, равную кости урона  Разрушительной мести (примените его после того, как уменьшите урон вдвое).<br>\n<b>Справедливость:</b> штраф –2 вместо –5.<br>\n<b>Освобождение:</b> вы и все находящиеся под эффектом союзники можете попытаться <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/3009\" href=\"https://pf2.ru/actions/break free\">вырваться</a>, а не только спровоцировавший союзник.<br>\n<b>Послушание:</b> урон, наносимый существам, отличным от спровоцированных и отказывающихся быть <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/88\" href=\"https://pf2.ru/conditions/prone\">распластанными</a>, увеличивается до половины урона, который получило бы спровоцировавшее существо (бросьте кость урона только один раз против всех спровоцировавшихся существ).<br>\n<b>Искупление:</b> устойчивость не снижается.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-combat",
   "theme": "theme-combat",
   "x": -1890,
   "y": -1340,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5925",
   "kind": "feat",
   "name": "Орудие веры",
   "nameEn": "Instrument of Zeal",
   "level": 16,
   "url": "https://pf2.ru/feats/instrument%20of%20zeal",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Благословенный контрудар или ответное действие Удар возмездия; ответное действие поборника, дающее союзнику устойчивость к урону врага (подобные ответные действия дают посвящения величия, искупления, освобождения и правосудия)",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5914\" href=\"https://pf2.ru/feats/blessed counterstrike\">Благословенный контрудар</a> или ответное действие Удар возмездия; ответное действие поборника, дающее союзнику устойчивость к урону врага (подобные ответные действия дают посвящения величия, искупления, освобождения и правосудия)",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваше оружие наполняет божественная энергия. Когда вы наносите критический удар врагу Благословенным контрударом или Ударом возмездия, атака получает дополнительную кость урона, а цель атаки получает <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/92\" href=\"https://pf2.ru/conditions/slowed\">замедление 1</a> на свой следующий ход.",
   "requires": [
    [
     "feat-5914"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5914",
   "theme": "theme-cause",
   "x": -3410,
   "y": -1470,
   "captionSide": "below",
   "captionW": 116
  },
  {
   "image": "Unholy.webp",
   "id": "feat-5924",
   "kind": "feat",
   "name": "Орудие убийства",
   "nameEn": "Instrument of Slaughter",
   "level": 16,
   "url": "https://pf2.ru/feats/instrument%20of%20slaughter",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)",
   "prereqHtml": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "ответное действие поборника, дающее дополнительный урон вашим Ударам (подобные ответные действия дают посвящения беззакония, осквернения и повиновения)"
   },
   "html": "Ваш клинок жаждет крови врагов. Когда вы совершаете критический удар по врагу и наносите дополнительный урон от ответного действия поборника, цель получает <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/86\" href=\"https://pf2.ru/conditions/persistent damage\">продолжительный урон</a> от кровотечения, равный двум костям урона оружия.",
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
   "x": -4010,
   "y": -1470,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Horse.webp",
   "id": "feat-5923",
   "kind": "feat",
   "name": "Скакун-покровитель",
   "nameEn": "Auspicious Mount",
   "level": 16,
   "url": "https://pf2.ru/feats/auspicious%20mount",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Внушительный скакун",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5908\" href=\"https://pf2.ru/feats/imposing destrier\">Внушительный скакун</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Под вашим началом скакун существенно развил свой интеллект и навыки. Скакун, полученный вами благодаря черте Верный скакун, становится специализированным верным зверем («Основная книга игрока», стр. 211). Вы можете выбрать одну из обычных специализаций либо специализацию покровителя. Скакун со специализацией покровителя получает следующие преимущества.\n<ul>\n<li>Он получает дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">«бестия»</a>, <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/655\" href=\"https://pf2.ru/traits/monitor\">«наблюдатель»</a> или <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">«небожитель»</a>, — смотря что лучше подходит служителю вашего божества. Его облик меняется, начиная напоминать облик этих служителей. Он также получает дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a> в случае небожителя или дескриптор <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a> в случае бестии. </li>\n<li>\nЕго модификатор Интеллекта увеличивается на 2, а модификатор Мудрости — на 1. </li>\n<li>\nЕго уровень умения в Религии повышается до экспертного. </li>\n<li>\nОн может говорить на языке служителей вашего божества (например, на небесном для небожителей, на хтоническом для демонов или на реквиане для психопомпов). </li>\n<li>\nЕго максимум ПЗ увеличивается на 20; начиная с 18 уровня — на 25, на 20 уровне — на 30. Если скакун обладает дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">«небожитель»</a>, дополнительные ПЗ увеличиваются на 5, но он получает уязвимость 5 к урону от эффектов с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>. Если он обладает дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">«бестия»</a>, ПЗ увеличиваются на 5, но он получает уязвимость 5 к урону от эффектов с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>. </li>\n<li>\nОн получает крылья, дающие скорость полёта, равную его наземной скорости. </li>\n</ul>",
   "requires": [
    [
     "feat-5908"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5908",
   "theme": "theme-steed",
   "x": 4610,
   "y": -1470,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "shieldfeatsprotection.webp",
   "id": "feat-5926",
   "kind": "feat",
   "name": "Щит милосердия",
   "nameEn": "Shield of Grace",
   "level": 16,
   "url": "https://pf2.ru/feats/shield%20of%20grace",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Щитоносец",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/4807\" href=\"https://pf2.ru/feats/shield warden\">Щитоносец</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Вы прикрываете союзника не только щитом, но и своим телом. Когда вы используете ответное действие Блок щитом, чтобы защитить союзника от урона, вы можете поровну поделить оставшийся после <a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5212\" href=\"https://pf2.ru/feats/shield block\">Блока щитом</a> урон между собой и союзником.",
   "requires": [
    [
     "feat-4807"
    ]
   ],
   "forbids": [],
   "parentId": "feat-4807",
   "theme": "theme-blessing",
   "x": -410,
   "y": -1470,
   "captionSide": "below",
   "captionW": 147
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5927",
   "kind": "feat",
   "name": "Живительное касание",
   "nameEn": "Rejuvenating Touch",
   "level": 18,
   "url": "https://pf2.ru/feats/rejuvenating%20touch",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Возложение рук",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/2047\" href=\"https://pf2.ru/spells/lay on hands\">Возложение рук</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Архетипы": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/242\" href=\"https://pf2.ru/archetypes/blessed one\">Благословенный</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ещё некоторое время после возложения рук отголоски живительных сил не покидают тех, кого вы исцелили. Союзник, которому вы восстановили ПЗ возложением рук, получает 10 временных ПЗ; ещё 10 временных ПЗ он получает в начале каждого своего хода в течение следующих 10 раундов. Временные ПЗ сохраняются до начала следующего хода существа. Этот эффект прекращается, если союзник оказывается <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/95\" href=\"https://pf2.ru/conditions/unconscious\">без сознания</a>.",
   "requires": [
    [
     "spell-2047"
    ]
   ],
   "forbids": [],
   "parentId": "theme-devotion",
   "theme": "theme-devotion",
   "x": 430,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "fight.webp",
   "id": "feat-5928",
   "kind": "feat",
   "name": "Немедленное воздаяние",
   "nameEn": "Swift Retribution",
   "level": 18,
   "url": "https://pf2.ru/feats/swift%20retribution",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "ответное действие поборника",
   "prereqHtml": "ответное действие поборника",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "ответное действие поборника"
   },
   "html": "Проступки врагов толкают вас на скорое возмездие. В свой следую щий ход после того, как противник провоцирует ваше ответное действие поборника, вы получаете <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/89\" href=\"https://pf2.ru/conditions/quickened\">ускорение</a>. Вы можете использовать полученное дополнительное действие только для того, чтобы переместиться ближе к спровоцировавшему врагу или нанести ему Удар.",
   "requires": [
    [
     "group-cause"
    ]
   ],
   "forbids": [],
   "parentId": "theme-cause",
   "theme": "theme-cause",
   "x": -3810,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "SpellLayOfHands.webp",
   "id": "feat-5929",
   "kind": "feat",
   "name": "Окончательное избавление",
   "nameEn": "Ultimate Mercy",
   "level": 18,
   "url": "https://pf2.ru/feats/ultimate%20mercy",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "Избавление",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5897\" href=\"https://pf2.ru/feats/mercy\">Избавление</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Архетип": "<a class=\"item-link quicklink item-link--archetype\" data-key=\"archetype/242\" href=\"https://pf2.ru/archetypes/blessed one\">Благословенный</a>",
    "Критерии": "<span class=\"rhombus-wrap\">"
   },
   "html": "Ваше избавление способно преодолеть границу между жизнью и смертью. Добавьте окончательное избавление к доступным вам видам избавления. Когда вы используете Избавление, вы можете сотворить возложение рук на существо, умершее после вашего последнего хода, чтобы вернуть его к жизни. Существо возвращается к жизни с 1 ПЗ и получает <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/99\" href=\"https://pf2.ru/conditions/wounded\">ранение 1</a>. Вы не можете использовать эту черту, если смерть вызвана <a class=\"item-link quicklink link--popup item-link--spell\" data-key=\"spell/1492\" href=\"https://pf2.ru/spells/disintegrate\">дезинтеграцией</a> или эффектом с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/571\" href=\"https://pf2.ru/traits/death\">«смерть»</a>. Вернувшись к жизни, существо получает и все остальные преимущества возложения рук.",
   "requires": [
    [
     "feat-5897"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5897",
   "theme": "theme-devotion",
   "x": 1230,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "prayer.webp",
   "id": "feat-7527",
   "kind": "feat",
   "name": "Фокальное возмездие",
   "nameEn": "Retributive Focus",
   "level": 18,
   "url": "https://pf2.ru/feats/retributive%20focus",
   "actions": "4",
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "Отчаянная молитва",
   "prereqHtml": "<a class=\"item-link quicklink link--popup item-link--feat\" data-key=\"feat/5884\" href=\"https://pf2.ru/feats/desperate prayer\">Отчаянная молитва</a>",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>",
    "Частота": "1 в день",
    "Критерии": "<span class=\"rhombus-wrap\">",
    "Требования": "ваш запас ФП опустошён"
   },
   "html": "Обиды вашего врага подпитывают вашу праведную силу. Когда враг спровоцировал ответное действие Поборника, вы восстанавливаете 1 Фокальный Пункт.",
   "requires": [
    [
     "feat-5884"
    ]
   ],
   "forbids": [],
   "parentId": "feat-5884",
   "theme": "theme-faith",
   "x": 3270,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "300px-Planar_Binding.webp",
   "id": "feat-7526",
   "kind": "feat",
   "name": "Форма бестии",
   "nameEn": "Fiendish Form",
   "level": 18,
   "url": "https://pf2.ru/feats/fiendish%20form",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "uncommon",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Вы становитесь похожи на одну из <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/600\" href=\"https://pf2.ru/traits/fiend\">бестий</a>, служащих вашему <a class=\"item-link quicklink link--popup item-link--rules\" data-key=\"rules/2048\" href=\"https://pf2.ru/rules/deity?rule=2048\">божеству</a>. Например,  вы стали похожи на <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/387\" href=\"https://pf2.ru/monsterfamilies/demon\">Демона</a>: у вас появится чешуя, витые рога и красные глаза. Вы получаете скорость полёта, равную вашей Скорости. Вы получаете ночное зрение (если у вас его не было), а также дескриптор бестия и дескриптор типа существа, которым вы стали (например, <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/386\" href=\"https://pf2.ru/monsterfamilies/daemon\">Даймон</a>, Демон или <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/389\" href=\"https://pf2.ru/monsterfamilies/devil\">Дьявол</a>).",
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -2970,
   "y": -1600,
   "captionSide": "below",
   "captionW": 126
  },
  {
   "image": "Holy.webp",
   "id": "feat-7525",
   "kind": "feat",
   "name": "Форма небожителя",
   "nameEn": "Celestial Form",
   "level": 18,
   "url": "https://pf2.ru/feats/celestial%20form",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Сакральные таинства",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/234\" href=\"https://pf2.ru/sources/divine mysteries\">Сакральные таинства</a>"
   },
   "html": "Вы становитесь похожи на одного из <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/551\" href=\"https://pf2.ru/traits/celestial\">небожителей</a>, служащих вашему божеству. Например, если вы стали похожи на <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/359\" href=\"https://pf2.ru/monsterfamilies/angel\">Ангела</a>: у вас появятся нимб и оперённые крылья. Вы получаете скорость полёта, равную вашей Скорости. Вы получаете ночное зрение  (если у вас его не было), а также дескриптор небожитель и дескриптор типа существа, которым вы стали (например, <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/365\" href=\"https://pf2.ru/monsterfamilies/archon\">Архон</a>, Ангел или <a class=\"item-link quicklink item-link--monsterfamily\" data-key=\"monsterfamily/368\" href=\"https://pf2.ru/monsterfamilies/azata\">Азата</a>).",
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -3170,
   "y": -1600,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "Holy.webp",
   "id": "feat-5931",
   "kind": "feat",
   "name": "Сакральный защитник",
   "nameEn": "Sacred Defender",
   "level": 20,
   "url": "https://pf2.ru/feats/sacred%20defender",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "",
   "prereqHtml": "",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>"
   },
   "html": "Вы — великий воитель, способный выстоять против даже самых ярых врагов вашего призвания. Вы получаете устойчивость 5 к дробящему, колющему и режущему урону. Если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>, эта устойчивость увеличивается до 10 против существ с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>, а если вы обладаете дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/521\" href=\"https://pf2.ru/traits/unholy\">«нечестивый»</a>, до 10 против существ с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/517\" href=\"https://pf2.ru/traits/holy\">«священный»</a>. Кроме того, существа и эффекты, которые получают натуральную 20 при проверке атаки по вам, не улучшают степень успешности на одну ступень.",
   "requires": [],
   "forbids": [],
   "parentId": "theme-sanct",
   "theme": "theme-sanct",
   "x": -2970,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevWeapon.webp",
   "id": "feat-5930",
   "kind": "feat",
   "name": "Эталон оружия",
   "nameEn": "Armament Paragon",
   "level": 20,
   "url": "https://pf2.ru/feats/armament%20paragon",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "благословенное оружие",
   "prereqHtml": "благословенное оружие",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословенное оружие"
   },
   "html": "Добавьте следующие атрибутивные руны к перечню тех, которые можете выбрать для своего благословенного оружия: <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2831\" href=\"https://pf2.ru/equipment/animated\">живая</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2837\" href=\"https://pf2.ru/equipment/fearsome\">улучшенная устрашающая</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2841\" href=\"https://pf2.ru/equipment/grievous\">увечащая</a>, <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2843\" href=\"https://pf2.ru/equipment/keen\">острая</a> и <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2852\" href=\"https://pf2.ru/equipment/vitalizing\">улучшенная животворящая</a>. Если у вас есть черта Сияющее оружие, добавьте также <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2832\" href=\"https://pf2.ru/equipment/astral\">улучшенную астральную</a> и <a class=\"item-link quicklink link--popup item-link--equipment\" data-key=\"equipment/2833\" href=\"https://pf2.ru/equipment/brilliant\">улучшенную блистательную</a> руны. <br>\nКроме того, вы можете поменять выбранную на день руну на другую из доступного перечня, использовав одиночное действие с дескрипторами <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/561\" href=\"https://pf2.ru/traits/concentrate\">«концентрация»</a> и <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/579\" href=\"https://pf2.ru/traits/divine\">«сакральный»</a>. Замена руны не восстанавливает способности, которые можно использовать ограниченное число раз.",
   "requires": [
    [
     "blessing-armament"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -1010,
   "y": -1730,
   "captionSide": "below",
   "captionW": 137
  },
  {
   "image": "DevProvornost.webp",
   "id": "feat-5933",
   "kind": "feat",
   "name": "Эталон скорости",
   "nameEn": "Swift Paragon",
   "level": 20,
   "url": "https://pf2.ru/feats/swift%20paragon",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "благословенная скорость",
   "prereqHtml": "благословенная скорость",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословенная скорость"
   },
   "html": "Вы и ваши союзники столь же быстры и неумолимы, как божественная кара. Если ваш союзник начинает действие с дескриптором <a class=\"item-link quicklink link--popup item-link--trait\" data-key=\"trait/658\" href=\"https://pf2.ru/traits/move\">«движение»</a> в вашей ауре поборника, его перемещение во время этого действия не провоцирует ответных действий. Кроме того, вы получаете постоянное <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/89\" href=\"https://pf2.ru/conditions/quickened\">ускорение</a>. Дополнительное действие от этого ускорения вы можете использовать только для Перемещения или Шага. Если у вас есть скорость полёта, вы также можете использовать его и для <a class=\"item-link quicklink link--popup item-link--action\" data-key=\"action/2312\" href=\"https://pf2.ru/actions/fly\">Полёта</a>. Если у вас есть верный зверь и вы начинаете свой ход верхом на нём, вы можете на этот ход снять это <a class=\"item-link quicklink link--popup item-link--condition\" data-key=\"condition/89\" href=\"https://pf2.ru/conditions/quickened\">ускорение</a> с себя и передать его скакуну.",
   "requires": [
    [
     "blessing-swiftness"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -1210,
   "y": -1730,
   "captionSide": "below",
   "captionW": 150
  },
  {
   "image": "DevShield.webp",
   "id": "feat-5932",
   "kind": "feat",
   "name": "Эталон щита",
   "nameEn": "Shield Paragon",
   "level": 20,
   "url": "https://pf2.ru/feats/shield%20paragon",
   "actions": null,
   "traits": [
    {
     "slug": "champion",
     "name": "Поборник"
    }
   ],
   "rarity": "common",
   "legacy": false,
   "source": "Основная книга игрока 2",
   "prereqText": "благословенный щит",
   "prereqHtml": "благословенный щит",
   "fields": {
    "Источник": "<a class=\"item-link quicklink item-link--source\" data-key=\"source/227\" href=\"https://pf2.ru/sources/player core 2\">Основная книга игрока 2</a>",
    "Критерии": "благословенный щит"
   },
   "html": "Ваш щит — воплощение божественной защиты. Когда вы используете выбранный щит, он всегда считается поднятым, даже если вы не совершали Поднятие щита. <br>\nЕсли щит должен быть уничтожен, он вместо этого перемещается во владения вашего божества, где ваш божественный союзник чинит его и возвращает вам полностью отремонтированным во время вашей следующей ежедневной подготовки. До тех пор, пока щит не вернулся, вы можете потратить 1 минуту, чтобы наделить другой щит преимуществами вашего благословенного щита.",
   "requires": [
    [
     "blessing-shield"
    ]
   ],
   "forbids": [],
   "parentId": "theme-blessing",
   "theme": "theme-blessing",
   "x": -810,
   "y": -1730,
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
     -3910,
     -190
    ],
    [
     -3910,
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
     -190
    ],
    [
     330,
     -190
    ],
    [
     330,
     -300
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
     -1110,
     -190
    ],
    [
     -1110,
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
     -2630,
     -190
    ],
    [
     -2630,
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
     -1550,
     -190
    ],
    [
     -1550,
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
     -190
    ],
    [
     3510,
     -190
    ],
    [
     3510,
     -300
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
     -190
    ],
    [
     2170,
     -190
    ],
    [
     2170,
     -300
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
     -3070,
     -190
    ],
    [
     -3070,
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
     -1990,
     -190
    ],
    [
     -1990,
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
     3510,
     -300
    ],
    [
     3510,
     -430
    ],
    [
     3610,
     -430
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
     -3910,
     -300
    ],
    [
     -3910,
     -430
    ],
    [
     -4010,
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
     -3910,
     -300
    ],
    [
     -3910,
     -430
    ],
    [
     -3810,
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
     2170,
     -300
    ],
    [
     2170,
     -470
    ],
    [
     1770,
     -470
    ],
    [
     1770,
     -430
    ],
    [
     1670,
     -430
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
     -3910,
     -300
    ],
    [
     -3910,
     -470
    ],
    [
     -4110,
     -470
    ],
    [
     -4110,
     -430
    ],
    [
     -4210,
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
     -3910,
     -300
    ],
    [
     -3910,
     -470
    ],
    [
     -3710,
     -470
    ],
    [
     -3710,
     -430
    ],
    [
     -3610,
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
     -1550,
     -300
    ],
    [
     -1550,
     -430
    ],
    [
     -1450,
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
     -3910,
     -300
    ],
    [
     -3910,
     -470
    ],
    [
     -4310,
     -470
    ],
    [
     -4310,
     -430
    ],
    [
     -4410,
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
     2170,
     -300
    ],
    [
     2170,
     -470
    ],
    [
     2970,
     -470
    ],
    [
     2970,
     -430
    ],
    [
     3070,
     -430
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
     -3910,
     -300
    ],
    [
     -3910,
     -470
    ],
    [
     -3510,
     -470
    ],
    [
     -3510,
     -430
    ],
    [
     -3410,
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
     -3910,
     -300
    ],
    [
     -3910,
     -470
    ],
    [
     -4510,
     -470
    ],
    [
     -4510,
     -430
    ],
    [
     -4610,
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
     2170,
     -300
    ],
    [
     2170,
     -430
    ],
    [
     2070,
     -430
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
     2170,
     -300
    ],
    [
     2170,
     -560
    ],
    [
     2270,
     -560
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
     2170,
     -300
    ],
    [
     2170,
     -560
    ],
    [
     2070,
     -560
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
     2170,
     -300
    ],
    [
     2170,
     -600
    ],
    [
     2570,
     -600
    ],
    [
     2570,
     -560
    ],
    [
     2670,
     -560
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
     2170,
     -300
    ],
    [
     2170,
     -600
    ],
    [
     2370,
     -600
    ],
    [
     2370,
     -560
    ],
    [
     2470,
     -560
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
     2170,
     -300
    ],
    [
     2170,
     -600
    ],
    [
     1970,
     -600
    ],
    [
     1970,
     -560
    ],
    [
     1870,
     -560
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
     -2630,
     -300
    ],
    [
     -2630,
     -690
    ],
    [
     -2530,
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
     -2630,
     -300
    ],
    [
     -2630,
     -690
    ],
    [
     -2730,
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
     330,
     -300
    ],
    [
     330,
     -730
    ],
    [
     530,
     -730
    ],
    [
     530,
     -690
    ],
    [
     630,
     -690
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
     330,
     -300
    ],
    [
     330,
     -730
    ],
    [
     130,
     -730
    ],
    [
     130,
     -690
    ],
    [
     30,
     -690
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
     330,
     -300
    ],
    [
     330,
     -600
    ],
    [
     930,
     -600
    ],
    [
     930,
     -690
    ],
    [
     1030,
     -690
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -690
    ],
    [
     3810,
     -690
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -860
    ],
    [
     4110,
     -860
    ],
    [
     4110,
     -820
    ],
    [
     4210,
     -820
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
     -1990,
     -300
    ],
    [
     -1990,
     -820
    ],
    [
     -1890,
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
     -2630,
     -300
    ],
    [
     -2630,
     -820
    ],
    [
     -2530,
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
     -1990,
     -300
    ],
    [
     -1990,
     -820
    ],
    [
     -2090,
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
     -1110,
     -300
    ],
    [
     -1110,
     -860
    ],
    [
     -710,
     -860
    ],
    [
     -710,
     -820
    ],
    [
     -610,
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
     -1550,
     -300
    ],
    [
     -1550,
     -950
    ],
    [
     -1650,
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
     -1110,
     -300
    ],
    [
     -1110,
     -950
    ],
    [
     -1210,
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -950
    ],
    [
     3810,
     -950
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
     1670,
     -430
    ],
    [
     1570,
     -430
    ],
    [
     1570,
     -950
    ],
    [
     1470,
     -950
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
     630,
     -690
    ],
    [
     730,
     -690
    ],
    [
     730,
     -950
    ],
    [
     830,
     -950
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
     30,
     -690
    ],
    [
     -70,
     -690
    ],
    [
     -70,
     -950
    ],
    [
     -170,
     -950
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
     1030,
     -690
    ],
    [
     1130,
     -690
    ],
    [
     1130,
     -950
    ],
    [
     1230,
     -950
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
     -3070,
     -300
    ],
    [
     -3070,
     -950
    ],
    [
     -2970,
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
     -3070,
     -300
    ],
    [
     -3070,
     -950
    ],
    [
     -3170,
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -990
    ],
    [
     3910,
     -990
    ],
    [
     3910,
     -950
    ],
    [
     4010,
     -950
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
     4210,
     -820
    ],
    [
     4310,
     -820
    ],
    [
     4310,
     -1080
    ],
    [
     4410,
     -1080
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
     -1110,
     -300
    ],
    [
     -1110,
     -1080
    ],
    [
     -1010,
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
     -1110,
     -300
    ],
    [
     -1110,
     -1080
    ],
    [
     -1210,
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
     -610,
     -820
    ],
    [
     -510,
     -820
    ],
    [
     -510,
     -1080
    ],
    [
     -410,
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
     -2630,
     -300
    ],
    [
     -2630,
     -1210
    ],
    [
     -2730,
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
     -3910,
     -300
    ],
    [
     -3910,
     -1250
    ],
    [
     -3710,
     -1250
    ],
    [
     -3710,
     -1210
    ],
    [
     -3610,
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -1210
    ],
    [
     3810,
     -1210
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
     -1550,
     -300
    ],
    [
     -1550,
     -1210
    ],
    [
     -1450,
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
     1030,
     -690
    ],
    [
     1130,
     -690
    ],
    [
     1130,
     -1210
    ],
    [
     1230,
     -1210
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
     3610,
     -430
    ],
    [
     3710,
     -430
    ],
    [
     3710,
     -1250
    ],
    [
     3910,
     -1250
    ],
    [
     3910,
     -1210
    ],
    [
     4010,
     -1210
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
     2670,
     -560
    ],
    [
     2770,
     -560
    ],
    [
     2770,
     -1210
    ],
    [
     2870,
     -1210
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
     -1990,
     -300
    ],
    [
     -1990,
     -1210
    ],
    [
     -1890,
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
     330,
     -300
    ],
    [
     330,
     -1210
    ],
    [
     230,
     -1210
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
     -3910,
     -300
    ],
    [
     -3910,
     -1210
    ],
    [
     -3810,
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
     -2630,
     -300
    ],
    [
     -2630,
     -1340
    ],
    [
     -2530,
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
     -2630,
     -300
    ],
    [
     -2630,
     -1340
    ],
    [
     -2730,
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
     -2630,
     -300
    ],
    [
     -2630,
     -1380
    ],
    [
     -2430,
     -1380
    ],
    [
     -2430,
     -1340
    ],
    [
     -2330,
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
     -1990,
     -300
    ],
    [
     -1990,
     -1340
    ],
    [
     -2090,
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
     -1990,
     -300
    ],
    [
     -1990,
     -1340
    ],
    [
     -1890,
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
     -3610,
     -1210
    ],
    [
     -3510,
     -1210
    ],
    [
     -3510,
     -1470
    ],
    [
     -3410,
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
     -3910,
     -300
    ],
    [
     -3910,
     -1470
    ],
    [
     -4010,
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
     4410,
     -1080
    ],
    [
     4510,
     -1080
    ],
    [
     4510,
     -1470
    ],
    [
     4610,
     -1470
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
     -610,
     -820
    ],
    [
     -510,
     -820
    ],
    [
     -510,
     -1470
    ],
    [
     -410,
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
     330,
     -300
    ],
    [
     330,
     -1600
    ],
    [
     430,
     -1600
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
     -3910,
     -300
    ],
    [
     -3910,
     -1600
    ],
    [
     -3810,
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
     1030,
     -690
    ],
    [
     1130,
     -690
    ],
    [
     1130,
     -1600
    ],
    [
     1230,
     -1600
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
     3070,
     -430
    ],
    [
     3170,
     -430
    ],
    [
     3170,
     -1600
    ],
    [
     3270,
     -1600
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
     -3070,
     -300
    ],
    [
     -3070,
     -1600
    ],
    [
     -2970,
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
     -3070,
     -300
    ],
    [
     -3070,
     -1600
    ],
    [
     -3170,
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
     -3070,
     -300
    ],
    [
     -3070,
     -1730
    ],
    [
     -2970,
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
     -1110,
     -300
    ],
    [
     -1110,
     -1730
    ],
    [
     -1010,
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
     -1110,
     -300
    ],
    [
     -1110,
     -1730
    ],
    [
     -1210,
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
     -1110,
     -300
    ],
    [
     -1110,
     -1770
    ],
    [
     -910,
     -1770
    ],
    [
     -910,
     -1730
    ],
    [
     -810,
     -1730
    ]
   ]
  }
 ],
 "warnings": []
};
