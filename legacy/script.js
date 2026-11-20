// ============================================
// ДАННЫЕ
// ============================================

const skillsData = [
    // Уровень 0 (Центр)
    { id: 'root', level: 0, name: 'Champion', parent: null, deck: null, image: 'startChampIcon.webp', rarity: 'обычный' },
    
    // Уровень 1 - Tenets (Побуждения Чемпиона)
    // Нейтральные
    { id: 'justice', level: 1, name: 'Проворная расправа', parent: 'root', deck: 'справедливость', image: 'SubClassJustice.webp', rarity: 'обычный' },
    { id: 'liberation', level: 1, name: 'Беспрепятственный шаг', parent: 'root', deck: 'освобождение', image: 'SubClassLiberation.webp', rarity: 'обычный' },
    { id: 'obedience', level: 1, name: 'Железные последствия', parent: 'root', deck: 'повиновение', image: 'SubClassObedience.webp', rarity: 'обычный' },
    
    // Святые
    { id: 'redemption', level: 1, name: 'Тяжесть вины', parent: 'root', deck: 'искупление', image: 'SubClassRedemption.webp', rarity: 'обычный' },
    { id: 'magnitude', level: 1, name: 'Сияющая вспышка', parent: 'root', deck: 'величие', image: 'SubClassVelichie.webp', rarity: 'обычный' },
    
    // Нечестивые
    { id: 'desecration', level: 1, name: 'Продолжающийся эгоизм', parent: 'root', deck: 'осквернение', image: 'SubClassDesecration.webp', rarity: 'необычный' },
    { id: 'inequality', level: 1, name: 'Жестокая месть', parent: 'root', deck: 'неравенство', image: 'SubClassInequality.webp', rarity: 'необычный' },
    
    // Универсальные способности
    { id: 'deity-domain', level: 1, name: 'Домен Божества', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'desperate-prayer', level: 1, name: 'Отчаянная молитва', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'split-faith', level: 1, name: 'Расщепленная вера', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'defensive-motion', level: 1, name: 'Оборонительное передвижение', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    { id: 'quick-shield', level: 1, name: 'Хват быстрого щита', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'eversend-stance', level: 1, name: 'Эверстендская стойка', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'mount', level: 1, name: 'Преданный скакун', parent: 'root', deck: null, image: 'horse.webp', rarity: 'обычный' },
    
    // Уровень 2 - Клятвы и другие способности
    { id: 'devoted-guard', level: 2, name: 'Преданный страж', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'oath-of-assassin', level: 2, name: 'Клятва убийцы', parent: 'root', deck: null, image: 'oath-of-assassin.webp', rarity: 'обычный' },
    { id: 'oath-of-defender', level: 2, name: 'Клятва защитника', parent: 'root', deck: null, image: 'oath-of-defender.webp', rarity: 'обычный' },
    { id: 'oath-of-avenger', level: 2, name: 'Клятва мстителя', parent: 'root', deck: 'наложение-рук', image: 'oath-of-avenger.webp', rarity: 'обычный' },
    { id: 'divine-mercy', level: 2, name: 'Божественная милость', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'divine-health', level: 2, name: 'Божественное здоровье', parent: 'root', deck: null, image: 'health.webp', rarity: 'обычный' },
    { id: 'reliable-squire', level: 2, name: 'Надёжный оруженосец', parent: 'root', deck: null, image: 'brave.webp', rarity: 'необычный' },
    { id: 'steadfast-mind', level: 2, name: 'Стойкий разум', parent: 'root', deck: null, image: 'sight.webp', rarity: 'необычный' },
    
    // Уровень 4 - Ауры и специальные способности
    { id: 'aura-despair', level: 4, name: 'Аура Отчаяния', parent: 'root', deck: 'нечестивый-чемпион', image: 'unholy.webp', rarity: 'необычный' },
    { id: 'aura-courage', level: 4, name: 'Аура Смелости', parent: 'root', deck: null, image: '300px-Dethrone.webp', rarity: 'обычный' },
    { id: 'warding-shield', level: 4, name: 'Охрана', parent: 'root', deck: 'щиты-духа', image: 'SpellShieldsOfTheSpirit.webp', rarity: 'обычный' },
    { id: 'mercy-hand', level: 4, name: 'Милосердие', parent: 'root', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'mercilessness', level: 4, name: 'Безжалостность', parent: 'root', deck: 'касание-пустоты', image: 'SpellTouchOfCorruption.webp', rarity: 'обычный' },
    { id: 'hastening-touch', level: 4, name: 'Ускоряющее касание', parent: 'root', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'light-revelation', level: 4, name: 'Свет откровения', parent: 'root', deck: null, image: 'brave.webp', rarity: 'необычный' },
    { id: 'sun-blade', level: 4, name: 'Солнечный клинок', parent: 'root', deck: null, image: 'fight.webp', rarity: 'необычный' },
    { id: 'inspiring-resilience', level: 4, name: 'Вдохновляющая стойкость', parent: 'root', deck: null, image: 'health.webp', rarity: 'необычный' },
    { id: 'admonish', level: 4, name: 'Вразумить', parent: 'root', deck: null, image: '300px-Calm_Emotions.webp', rarity: 'необычный' },
    { id: 'devoted-guardian', level: 4, name: 'Преданный страж', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'sacred-lord', level: 4, name: 'Сакральный лорд', parent: 'root', deck: null, image: '300px-Plant_Growth.webp', rarity: 'редкий' },
    { id: 'eversend-strike', level: 4, name: 'Эверстендский удар', parent: 'eversend-stance', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'adapted-steed', level: 4, name: 'Приспособившийся скакун', parent: 'mount', deck: null, image: 'horse.webp', rarity: 'обычный' },
    
    // Уровень 6
    { id: 'loyal-war-horse', level: 6, name: 'Верный боевой конь', parent: 'mount', deck: null, image: 'horse.webp', rarity: 'обычный' },
    { id: 'aura-expansion', level: 6, name: 'Расширение ауры', parent: 'root', deck: null, image: '300px-Hunger_of_Hadar.webp', rarity: 'обычный' },
    { id: 'reactive-strike', level: 6, name: 'Реагирующий удар', parent: 'root', deck: null, image: 'fight.webp', rarity: 'обычный' },
    { id: 'shattering', level: 6, name: 'Сокрушение', parent: 'root', deck: null, image: 'smite.webp', rarity: 'обычный' },
    { id: 'shield-wall', level: 6, name: 'Стена щитов', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'shield-warden', level: 6, name: 'Щит стража', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    
    // Уровень 8
    { id: 'quick-shield-block', level: 8, name: 'Быстрый блок щитом', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    { id: 'great-mercilessness', level: 8, name: 'Великая безжалостность', parent: 'mercilessness', deck: null, image: 'SpellTouchOfCorruption.webp', rarity: 'обычный' },
    { id: 'great-warding', level: 8, name: 'Великая охрана', parent: 'warding-shield', deck: null, image: 'SpellShieldsOfTheSpirit.webp', rarity: 'обычный' },
    { id: 'great-mercy', level: 8, name: 'Великое милосердие', parent: 'mercy-hand', deck: null, image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'domain-expertise', level: 8, name: 'Совершенствование в домене', parent: 'deity-domain', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'horse-healing', level: 8, name: 'Исцеление скакуна', parent: 'mount', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'holiness-sense', level: 8, name: 'Ощущение святости', parent: 'root', deck: 'нечестивый-чемпион', image: 'sight.webp', rarity: 'необычный' },
    { id: 'evilness-sense', level: 8, name: 'Ощущение нечестивости', parent: 'root', deck: null, image: 'sight.webp', rarity: 'обычный' },
    { id: 'sacrifice-armor', level: 8, name: 'Пожертвовать доспехом', parent: 'root', deck: null, image: '300px-Calm_Emotions.webp', rarity: 'обычный' },
    { id: 'devoted-stride', level: 8, name: 'Преданная поступь', parent: 'mount', deck: null, image: 'Horse.webp', rarity: 'обычный' },
    { id: 'wall-stance', level: 8, name: 'Стойка непроходимой стены', parent: 'reactive-strike', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    { id: 'second-blessing', level: 8, name: 'Второе благословение', parent: null, deck: null, image: 'oath-of-defender.webp', rarity: 'обычный' },
    
    // Уровень 10
    { id: 'impressive-destrier', level: 10, name: 'Впечатляющий дестриэ', parent: 'loyal-war-horse', deck: null, image: 'horse.webp', rarity: 'обычный' },
    { id: 'resilient-touch', level: 10, name: 'Касание стойкости', parent: 'root', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'sacred-light', level: 10, name: 'Священный свет', parent: 'root', deck: 'святой-чемпион', image: 'Holy.webp', rarity: 'необычный' },
    { id: 'radiant-armament', level: 10, name: 'Сияющее вооружение', parent: 'root', deck: 'вооружение', image: 'fight.webp', rarity: 'обычный' },
    { id: 'devotion-focus', level: 10, name: 'Сосредоточение преданности', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'spectral-charge', level: 10, name: 'Спектральный натиск', parent: 'root', deck: 'проворность', image: 'DevProvornost.webp', rarity: 'обычный' },
    { id: 'retribution-shield', level: 10, name: 'Щит расплаты', parent: 'shield-warden', deck: 'щит', image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    
    // Уровень 12
    { id: 'aura-of-faith', level: 12, name: 'Аура веры', parent: 'root', deck: 'вера-аура', image: '300px-Calm_Emotions.webp', rarity: 'обычный' },
    { id: 'blessed-riposte', level: 12, name: 'Благословленная контратака', parent: 'root', deck: 'благословение-контра', image: 'fight.webp', rarity: 'обычный' },
    { id: 'divine-wall', level: 12, name: 'Божественная стена', parent: 'root', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'необычный' },
    { id: 'champions-sacrifice', level: 12, name: 'Жертва Чемпиона', parent: 'root', deck: 'жертва-чемпиона', image: 'smite.webp', rarity: 'обычный' },
    { id: 'fulfill-oath', level: 12, name: 'Исполнить клятву', parent: 'root', deck: null, image: 'prayer.webp', rarity: 'обычный' },
    { id: 'pale-steed', level: 12, name: 'Бледный конь', parent: 'mount', deck: 'нечестивый-чемпион', image: 'unholy.webp', rarity: 'обычный' },
    { id: 'mercy-from-ailment', level: 12, name: 'Милосердие от недуга', parent: 'mercy-hand', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'strengthening-touch', level: 12, name: 'Усиливающее касание', parent: 'root', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'liberating-motion', level: 12, name: 'Освобождающее перемещение', parent: 'root', deck: 'освобождение', image: 'SubClassLiberation.webp', rarity: 'обычный' },
    { id: 'lingering-doubt', level: 12, name: 'Продолжительное сомнение', parent: 'root', deck: 'искупление', image: 'SubClassRedemption.webp', rarity: 'обычный' },
    { id: 'dread-strike', level: 12, name: 'Ужасный удар', parent: 'root', deck: 'эгоистичная-реакция', image: 'unholy.webp', rarity: 'обычный' },
    { id: 'necromancy-reflection', level: 12, name: 'Отражение некромантии', parent: 'root', deck: null, image: 'unholy.webp', rarity: 'необычный' },
    { id: 'miraculous-intervention', level: 12, name: 'Чудесное вмешательство', parent: 'root', deck: null, image: 'brave.webp', rarity: 'необычный' },
    { id: 'steed-topplong-strike', level: 12, name: 'Сокрушительный удар скакуна', parent: 'mount', deck: null, image: 'horse.webp', rarity: 'обычный' },

    // Уровень 14
    { id: 'aura-of-life', level: 14, name: 'Аура жизни', parent: 'root', deck: null, image: '300px-Cure_Wounds.webp', rarity: 'обычный' },
    { id: 'aura-of-vengeance', level: 14, name: 'Аура мести', parent: 'oath-of-avenger', deck: 'справедливость', image: 'SubClassJustice.webp', rarity: 'обычный' },
    { id: 'aura-of-righteousness', level: 14, name: 'Аура праведности', parent: 'root', deck: 'святой-чемпион', image: 'Holy.webp', rarity: 'обычный' },
    { id: 'aura-of-resolve', level: 14, name: 'Аура решительности', parent: 'root', deck: null, image: 'brave.webp', rarity: 'обычный' },
    { id: 'divine-reflexes', level: 14, name: 'Божественные рефлексы', parent: 'root', deck: null, image: '300px-Longstrider.webp', rarity: 'обычный' },
    { id: 'exalted-supremacy', level: 14, name: 'Возвышенное превосходство', parent: 'root', deck: null, image: '300px-Conjure_Barrage.webp', rarity: 'обычный' },
    { id: 'greater-intervention', level: 14, name: 'Значительное вмешательство', parent: 'sacrifice-armor', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },
    { id: 'sacred-monarch', level: 14, name: 'Сакральный монарх', parent: 'sacred-lord', deck: null, image: '300px-Plant_Growth.webp', rarity: 'редкий' },

    // Уровень 16
    { id: 'blessed-steed', level: 16, name: 'Благостный скакун', parent: 'impressive-destrier', deck: null, image: 'horse.webp', rarity: 'обычный' },
    { id: 'instrument-of-zeal', level: 16, name: 'Инструмент рвения', parent: 'blessed-riposte', deck: null, image: 'fight.webp', rarity: 'обычный' },
    { id: 'instrument-of-slaughter', level: 16, name: 'Инструмент резни', parent: 'root', deck: 'нечестивый-чемпион', image: 'unholy.webp', rarity: 'обычный' },
    { id: 'shield-of-grace', level: 16, name: 'Щит благодати', parent: 'shield-warden', deck: null, image: 'shieldfeatsprotection.webp', rarity: 'обычный' },

    // Уровень 18
    { id: 'absolute-mercy', level: 18, name: 'Абсолютное милосердие', parent: 'mercy-hand', deck: null, image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'rejuvenating-touch', level: 18, name: 'Омолаживающее касание', parent: 'root', deck: 'наложение-рук', image: 'SpellLayOfHands.webp', rarity: 'обычный' },
    { id: 'celestial-form', level: 18, name: 'Форма небожителя', parent: 'root', deck: 'святой-чемпион', image: 'Holy.webp', rarity: 'обычный' },
    { id: 'fiend-form', level: 18, name: 'Форма беса', parent: 'root', deck: 'нечестивый-чемпион', image: '300px-Planar_Binding.webp', rarity: 'обычный' },
    { id: 'swift-retribution', level: 18, name: 'Стремительное возмездие', parent: null, deck: null, image: 'fight.webp', rarity: 'обычный' },
    
    // Уровень 20
    { id: 'eternal_protection', level: 20, name: 'Вечноудаленная защита', parent: null, deck: null, image: '300px-Hunger_of_Hadar.webp', rarity: 'необычный' },
    { id: 'banishing_strike', level: 20, name: 'Изгоняющий удар', parent: null, deck: null, image: '300px-Banishing_Smite_Melee.webp', rarity: 'необычный' },
    { id: 'exemplary_swiftness', level: 20, name: 'Образцовая стремительность', parent: null, deck: 'проворность', image: 'DevProvornost.webp', rarity: 'обычный' },
    { id: 'exemplary_arms', level: 20, name: 'Образцовое вооружение', parent: null, deck: 'вооружение', image: 'DevWeapon.webp', rarity: 'обычный' },
    { id: 'exemplary_shield', level: 20, name: 'Образцовый щит', parent: null, deck: 'щит', image: 'DevShield.webp', rarity: 'обычный' },
    { id: 'holy_defender', level: 20, name: 'Священный защитник', parent: null, deck: null, image: 'Holy.webp', rarity: 'обычный' },
];

// ============================================
// ЭЛЕМЕНТЫ DOM & КОНСТАНТЫ
// ============================================

const container = document.getElementById('nodes-layer');
const svgLayer = document.getElementById('connections-layer');
const LEVEL_STEP = 200;

// Функция для расчета радиуса с прогрессивным уменьшением расстояния
// После каждых 2 уровней расстояние уменьшается на дополнительные 10%
function getRadiusForLevel(level) {
    if (level === 0) return 0;
    
    let totalRadius = 0;
    
    for (let i = 1; i <= level; i++) {
        // Определяем, в какой "паре" уровней мы находимся (1-2, 3-4, 5-6, и т.д.)
        const tier = Math.floor((i - 1) / 2); // 0 для lvl 1-2, 1 для lvl 3-4, 2 для lvl 5-6
        const reduction = tier * 0.1; // 0%, 10%, 20%, 30% и т.д.
        const coefficient = Math.max(0.3, 1 - reduction); // Минимум 30% от исходного шага
        
        totalRadius += LEVEL_STEP * coefficient;
    }
    
    return totalRadius;
}

// Хранилище
const nodeElements = {};
const savedPositions = JSON.parse(localStorage.getItem('pf2e_tree_positions')) || {};

// Активные карточки (палубы)
const activeDecksList = new Set(['справедливость']); // Справедливость активна по умолчанию

// Видимые редкости (для фильтрации)
const visibleRarities = new Set(['обычный', 'необычный', 'редкий']); // Все видимы по умолчанию

// Уровень игрока (для прогрессии)
let playerLevel = 1;

// ============================================
// СОСТОЯНИЕ ЗУМА
// ============================================

let currentZoom = 1;
const MIN_ZOOM = 0.3;
const MAX_ZOOM = 3;
const ZOOM_SPEED = 0.1;
const treeContainer = document.getElementById('tree-container');

// ============================================
// СОСТОЯНИЕ ДРАГА
// ============================================

let draggedNode = null;
let dragStartX = 0;
let dragStartY = 0;
let isActuallyMoving = false;
let nodeOffset = { x: 0, y: 0 };

// ============================================
// СОСТОЯНИЕ ПАНОРАМИРОВАНИЯ (СРЕДНЯЯ КНОПКА)
// ============================================

let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let panOffsetX = 0;
let panOffsetY = 0;

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

function initTree() {
    // Рисуем визуальные кольца
    drawRings();
    
    skillsData.forEach(skill => {
        createNode(skill);
    });
    
    // Рисуем линии после создания всех нод
    skillsData.forEach(skill => {
        if (skill.parent) {
            drawConnection(skill, skill.parent);
        }
    });
}

// ============================================
// ВИЗУАЛЬНЫЕ КОЛЬЦА
// ============================================

function drawRings() {
    // Получаем все уникальные уровни
    const levels = [...new Set(skillsData.map(s => s.level))].sort((a, b) => a - b);
    const offset = 5000;
    
    // Названия уровней
    const levelNames = {
        0: 'Origin',
        1: 'LvL 1',
        2: 'LvL 2',
        3: 'LvL 3',
        4: 'LvL 4',
        5: 'LvL 5',
        6: 'LvL 6',
        7: 'LvL 7',
        8: 'LvL 8',
        9: 'LvL 9',
        10: 'LvL 10',
        11: 'LvL 11',
        12: 'LvL 12',
        13: 'LvL 13',
        14: 'LvL 14',
        15: 'LvL 15',
        16: 'LvL 16',
        17: 'LvL 17',
        18: 'LvL 18',
        19: 'LvL 19',
        20: 'LvL 20',
    };
    
    levels.forEach(level => {
        if (level === 0) return; // Пропускаем центр
        
        const radius = getRadiusForLevel(level);
        
        // Рисуем кольцо
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', offset);
        circle.setAttribute('cy', offset);
        circle.setAttribute('r', radius);
        circle.setAttribute('class', `ring ring-level-${level}`);
        svgLayer.appendChild(circle);
        
        // Добавляем текстовую метку справа от кольца
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', offset + radius + 20);
        text.setAttribute('y', offset + 5);
        text.setAttribute('class', 'ring-label');
        text.textContent = levelNames[level] || `Level ${level}`;
        svgLayer.appendChild(text);
    });
}

// ============================================
// РАСЧЕТ ПОЗИЦИЙ С УЧЁТОМ РОДИТЕЛЬСКОГО НАПРАВЛЕНИЯ И КРАТЧАЙШЕГО ПУТИ
// ============================================

function getAngleForSkill(skill) {
    // Если нода не имеет родителя (выходит из root), распределяем равномерно
    if (!skill.parent || skill.parent === 'root') {
        const skillsAtLevel = skillsData.filter(s => s.level === skill.level && (!s.parent || s.parent === 'root'));
        const indexInLevel = skillsAtLevel.indexOf(skill);
        const count = skillsAtLevel.length;
        return (indexInLevel / count) * Math.PI * 2;
    }
    
    // Для зависимых нод: находим угол родителя
    const parentSkill = skillsData.find(s => s.id === skill.parent);
    if (!parentSkill) return 0;
    
    const parentAngle = getAngleForSkill(parentSkill); // Рекурсивно получаем угол родителя
    
    // Получаем всех детей этого родителя на текущем уровне
    const childrenAtLevel = skillsData.filter(s => s.level === skill.level && s.parent === skill.parent);
    const indexChild = childrenAtLevel.indexOf(skill);
    const countChildren = childrenAtLevel.length;
    
    // Расчет оптимального углового диапазона для детей
    // Чем больше детей, тем шире диапазон, но не более ±40 градусов
    const maxFanRange = (Math.PI / 2); // максимум ±50 градусов
    const dynamicFanRange = Math.min(maxFanRange, (Math.PI / 180) * (20 + countChildren * 8)); // базовые 20° + 8° на каждого ребенка
    
    // Располагаем детей компактно в одном направлении (веер вокруг родителя)
    // Центр веера совпадает с направлением родителя для минимизации расстояния
    const fanStart = parentAngle - dynamicFanRange / 2;
    const childAngle = fanStart + (indexChild / (countChildren || 1)) * dynamicFanRange;
    
    return childAngle;
}

// ============================================
// СОЗДАНИЕ НОДЫ (ЕДИНОЕ ОПРЕДЕЛЕНИЕ)
// ============================================

function createNode(skill) {
    const el = document.createElement('div');
    el.className = 'node';
    el.id = skill.id;

    // Загружаем позицию из памяти или считаем радиально
    let x, y;
    if (savedPositions[skill.id]) {
        x = savedPositions[skill.id].x;
        y = savedPositions[skill.id].y;
    } else {
        const radius = getRadiusForLevel(skill.level);
        const angle = getAngleForSkill(skill);
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
    }

    skill.x = x;
    skill.y = y;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Добавляем картинку как background-image (не добавляем DOM элемент!)
    if (skill.image) {
        el.style.backgroundImage = `url('../images/${skill.image}')`;
        el.style.backgroundSize = 'contain';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.backgroundPosition = 'center';
    }

    // Устанавливаем размер ноды на основе уровня: CSS-переменная --node-size
    // Формула (как просили): width = 70px * (level / 2 * 35)
    // Записываем в CSS-переменную, чтобы стили могли использовать её
    const computedSize = 70 + 3.25 * ((skill.level || 0) / 2);
    el.style.setProperty('--node-size', `${computedSize}px`);

    // Создаем tooltip элемент, который будет показываться сверху при наведении
    const tooltip = document.createElement('div');
    tooltip.className = 'node-tooltip';
    tooltip.textContent = skill.name;
    el.appendChild(tooltip);

    // Добавляем класс редкости
    if (skill.rarity) {
        el.classList.add(`rarity-${skill.rarity}`);
    }

    // Проверяем, заблокирована ли нода
    if (skill.deck && !activeDecksList.has(skill.deck)) {
        el.classList.add('locked');
    }

    // Проверяем, видима ли нода по редкости
    if (!visibleRarities.has(skill.rarity)) {
        el.classList.add('hidden');
    }
    
    // MOUSEDOWN: начинаем отслеживание драга
    el.onmousedown = (e) => {
        if (e.button !== 0) return;
        
        draggedNode = skill;
        isActuallyMoving = false; // ВАЖНО: сбрасываем флаг при каждом нажатии
        dragStartX = e.clientX;
        dragStartY = e.clientY;

        const rect = el.getBoundingClientRect();
        nodeOffset.x = e.clientX - rect.left - 20;
        nodeOffset.y = e.clientY - rect.top - 20;

        el.style.zIndex = 1000;
        e.stopPropagation();
    };

    container.appendChild(el);
    nodeElements[skill.id] = el;
}

// ============================================
// РИСОВАНИЕ СВЯЗЕЙ (КРИВЫЕ БЕЗЬЕ)
// ============================================

function drawConnection(childData, parentId) {
    // Не рисуем линии от стартовой ноды (root/Champion)
    if (parentId === 'root') return;
    
    const parentData = skillsData.find(s => s.id === parentId);
    if (!parentData) return;

    const offset = 5000;
    const NODE_RADIUS = 20; // Радиус ноды
    
    // Начальная и конечная точки
    let x1 = parentData.x;
    let y1 = parentData.y;
    let x2 = childData.x;
    let y2 = childData.y;
    
    // Смещаем точки так, чтобы линия не пересекала ноды
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
        // Смещаем на краю нод вместо центра
        x1 += (dx / distance) * NODE_RADIUS;
        y1 += (dy / distance) * NODE_RADIUS;
        x2 -= (dx / distance) * NODE_RADIUS;
        y2 -= (dy / distance) * NODE_RADIUS;
    }
    
    // Создаём прямую линию
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    
    line.setAttribute('x1', x1 + offset);
    line.setAttribute('y1', y1 + offset);
    line.setAttribute('x2', x2 + offset);
    line.setAttribute('y2', y2 + offset);
    line.id = `line-${childData.id}`;
    line.setAttribute('class', 'connection-line');
    
    svgLayer.appendChild(line);
}


function updateLinesForNode(nodeId) {
    const offsetSVG = 5000;
    const NODE_RADIUS = 20;
    
    skillsData.forEach(skill => {
        // Обновляем линию от родителя к этой ноде
        if (skill.parent === nodeId || skill.id === nodeId) {
            const line = document.getElementById(`line-${skill.id}`);
            if (line) {
                const parent = skillsData.find(s => s.id === skill.parent);
                if (!parent) return;
                
                // Начальная и конечная точки
                let x1 = parent.x;
                let y1 = parent.y;
                let x2 = skill.x;
                let y2 = skill.y;
                
                // Смещаем точки так, чтобы линия не пересекала ноды
                const dx = x2 - x1;
                const dy = y2 - y1;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 0) {
                    // Смещаем на краю нод вместо центра
                    x1 += (dx / distance) * NODE_RADIUS;
                    y1 += (dy / distance) * NODE_RADIUS;
                    x2 -= (dx / distance) * NODE_RADIUS;
                    y2 -= (dy / distance) * NODE_RADIUS;
                }
                
                // Обновляем атрибуты линии
                line.setAttribute('x1', x1 + offsetSVG);
                line.setAttribute('y1', y1 + offsetSVG);
                line.setAttribute('x2', x2 + offsetSVG);
                line.setAttribute('y2', y2 + offsetSVG);
            }
        }
    });
}

function updateConnections() {
    skillsData.forEach(skill => {
        const node = nodeElements[skill.id];
        const line = document.getElementById(`line-${skill.id}`);
        
        if (line && node.classList.contains('purchased')) {
            line.classList.add('active');
        } else if (line) {
            line.classList.remove('active');
        }
    });
}

function triggerLevelAppearAnimation(nodeEl) {
    nodeEl.classList.remove('level-appear');
    // Reflow to restart animation if it was applied before.
    void nodeEl.offsetWidth;
    nodeEl.classList.add('level-appear');
    setTimeout(() => nodeEl.classList.remove('level-appear'), 500);
}

function applyLevelVisibility(prevLevel, nextLevel) {
    skillsData.forEach(skill => {
        if (skill.id === 'root') return;

        const el = nodeElements[skill.id];
        const line = document.getElementById(`line-${skill.id}`);
        if (!el) return;

        const shouldBeVisible = skill.level <= nextLevel;

        if (!shouldBeVisible) {
            el.classList.add('level-hidden');
            if (line) line.classList.add('level-hidden');

            if (el.classList.contains('purchased')) {
                el.classList.remove('purchased');
                cancelChildren(skill.id);
            }
            return;
        }

        const wasHiddenByLevel = el.classList.contains('level-hidden');
        el.classList.remove('level-hidden');
        if (line) line.classList.remove('level-hidden');

        if (wasHiddenByLevel && prevLevel < skill.level && !el.classList.contains('hidden')) {
            triggerLevelAppearAnimation(el);
        }
    });
}

// ============================================
// ЛОГИКА АКТИВАЦИИ НОДЫ (ПОКУПКА/ОТМЕНА)
// ============================================

function showErrorMessage(el, message) {
    el.classList.add('error-shake');
    setTimeout(() => el.classList.remove('error-shake'), 500);
    
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('error-message-hidden');
    errorDiv.classList.add('error-message-visible');
    
    // Скрываем сообщение через 3 секунды
    setTimeout(() => {
        errorDiv.classList.remove('error-message-visible');
        errorDiv.classList.add('error-message-hidden');
    }, 3000);
}

function handleNodeActivation(skill) {
    const el = nodeElements[skill.id];
    const isPurchased = el.classList.contains('purchased');

    // Проверяем, заблокирована ли нода (неправильная карточка)
    if (el.classList.contains('locked')) {
        showErrorMessage(el, `Требуется: ${skill.deck}`);
        return;
    }

    if (!isPurchased) {
        // Проверяем уровень игрока
        if (playerLevel < skill.level) {
            showErrorMessage(el, `Требуется уровень ${skill.level} (текущий: ${playerLevel})`);
            return;
        }
        
        // Рассчитываем доступные очки и текущее использование
        const totalPoints = getTotalAvailablePoints();
        const spentPoints = getSpentPoints();
        const skillCost = getSkillCost(skill.level);
        
        if (spentPoints + skillCost > totalPoints) {
            showErrorMessage(el, `Недостаточно очков (нужно: ${skillCost}, свободно: ${totalPoints - spentPoints})`);
            return;
        }
        
        // Проверяем, куплен ли родитель
        if (skill.parent) {
            const parentEl = document.getElementById(skill.parent);
            const parentSkill = skillsData.find(s => s.id === skill.parent);
            if (!parentEl || !parentEl.classList.contains('purchased')) {
                showErrorMessage(el, `Требуется купить: ${parentSkill?.name || skill.parent}`);
                return;
            }
        }
        el.classList.add('purchased');
    } else {
        el.classList.remove('purchased');
        cancelChildren(skill.id);
    }
    updateConnections();
}

// Рассчитываем стоимость ноды в "очках"
function getSkillCost(skillLevel) {
    if (skillLevel === 0) return 0; // Root бесплатен
    // Формула: 1 + floor((skillLevel - 1) / 2)
    // return 1 + Math.floor((skillLevel - 1) / 2);
    return 1;
}

// Рассчитываем общее количество доступных очков
// Каждые 2 уровня добавляется по 1 фиту
function getTotalAvailablePoints() {
    // Формула: 1 + floor(playerLevel / 2)
    return 1 + Math.floor(playerLevel / 2);
}

// Рассчитываем количество потраченных очков
function getSpentPoints() {
    let spent = 0;
    skillsData.forEach(skill => {
        const el = nodeElements[skill.id];
        if (el && el.classList.contains('purchased')) {
            spent += getSkillCost(skill.level);
        }
    });
    return spent;
}

function cancelChildren(parentId) {
    const children = skillsData.filter(s => s.parent === parentId);
    
    children.forEach(child => {
        const childEl = document.getElementById(child.id);
        if (childEl && childEl.classList.contains('purchased')) {
            childEl.classList.remove('purchased');
            cancelChildren(child.id);
        }
    });
}

// ============================================
// ИНФОРМАЦИЯ ПО КОЛЬЦАМ (УРОВНЯМ)
// ============================================

function getSkillsByLevel(level) {
    return skillsData.filter(s => s.level === level);
}

function getRings() {
    const levels = [...new Set(skillsData.map(s => s.level))].sort((a, b) => a - b);
    return levels.map(level => ({
        level,
        skills: getSkillsByLevel(level),
        count: getSkillsByLevel(level).length,
    }));
}

// ============================================
// ГЛОБАЛЬНЫЕ СОБЫТИЯ МЫШИ
// ============================================

document.onmousedown = (e) => {
    // Средняя кнопка мыши - панорамирование
    if (e.button === 1) {
        e.preventDefault();
        isPanning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        document.body.style.cursor = 'grabbing';
    }
};

document.onmousemove = (e) => {
    // Панорамирование с помощью средней кнопки
    if (isPanning) {
        const dx = e.clientX - panStartX;
        const dy = e.clientY - panStartY;
        
        panOffsetX += dx;
        panOffsetY += dy;
        
        panStartX = e.clientX;
        panStartY = e.clientY;
        
        // Применяем translate к tree-container
        treeContainer.style.transform = `translate(${panOffsetX}px, ${panOffsetY}px) scale(${currentZoom})`;
        return;
    }
    
    if (!draggedNode) return;

    // Проверяем, движется ли мышь достаточно далеко
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Если движение > 5px — это перетаскивание
    if (distance > 5) {
        isActuallyMoving = true;
    }

    // Если перетаскиваем, обновляем позицию
    if (isActuallyMoving) {
        const treeRect = document.getElementById('tree-container').getBoundingClientRect();
        
        const newX = e.clientX - treeRect.left - nodeOffset.x;
        const newY = e.clientY - treeRect.top - nodeOffset.y;

        draggedNode.x = newX;
        draggedNode.y = newY;

        const el = nodeElements[draggedNode.id];
        el.style.left = `${newX}px`;
        el.style.top = `${newY}px`;

        updateLinesForNode(draggedNode.id);
    }
};

document.onmouseup = (e) => {
    // Конец панорамирования
    if (isPanning) {
        isPanning = false;
        document.body.style.cursor = 'grab';
        return;
    }
    
    if (!draggedNode) return;

    const el = nodeElements[draggedNode.id];

    // ЕСЛИ МЫШЬ НЕ ДВИГАЛАСЬ → это клик, активируем ноду
    if (!isActuallyMoving) {
        handleNodeActivation(draggedNode);
    }

    // Сбрасываем состояние драга
    el.style.zIndex = 1;
    draggedNode = null;
    isActuallyMoving = false;
};

// ============================================
// СОХРАНЕНИЕ / ВОССТАНОВЛЕНИЕ
// ============================================

// Функция для открытия/закрытия выпадающих списков
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const toggle = dropdown.previousElementSibling;
    
    // Закрываем все остальные выпадающие списки
    document.querySelectorAll('.dropdown-content.open').forEach(el => {
        if (el.id !== dropdownId) {
            el.classList.remove('open');
            el.previousElementSibling.classList.remove('active');
        }
    });
    
    // Переключаем текущий список
    dropdown.classList.toggle('open');
    toggle.classList.toggle('active');
}

function toggleDeck(deckName) {
    const cardEl = document.querySelector(`.card[onclick="toggleDeck('${deckName}')"]`);
    
    if (activeDecksList.has(deckName)) {
        activeDecksList.delete(deckName);
        cardEl.classList.remove('active');
    } else {
        activeDecksList.add(deckName);
        cardEl.classList.add('active');
    }

    // Обновляем "нечестивый-чемпион" в зависимости от Осквернения или Неравенства
    const isEvilActive = activeDecksList.has('осквернение') || activeDecksList.has('неравенство');
    if (isEvilActive) {
        activeDecksList.add('нечестивый-чемпион');
    } else {
        activeDecksList.delete('нечестивый-чемпион');
    }

    // Обновляем "священный-чемпион" в зависимости от Величия или Искупления
    const isHolyActive = activeDecksList.has('величие') || activeDecksList.has('искупление');
    if (isHolyActive) {
        activeDecksList.add('святой-чемпион');
    } else {
        activeDecksList.delete('святой-чемпион');
    }

    // Обновляем "вера-аура" в зависимости от святой или нечестивый чемпиона
    const isFaithAuraActive = activeDecksList.has('святой-чемпион') || activeDecksList.has('нечестивый-чемпион');
    if (isFaithAuraActive) {
        activeDecksList.add('вера-аура');
    } else {
        activeDecksList.delete('вера-аура');
    }

    // Обновляем "благословение-контра" по Величию, Искуплению, Справедливости или Освобождению
    const isBlessedRiposteActive = activeDecksList.has('величие') || activeDecksList.has('искупление') || 
                                    activeDecksList.has('справедливость') || activeDecksList.has('освобождение');
    if (isBlessedRiposteActive) {
        activeDecksList.add('благословение-контра');
    } else {
        activeDecksList.delete('благословение-контра');
    }

    // Обновляем "жертва-чемпиона" по святому чемпиону или Справедливости
    const isChampionSacrificeActive = activeDecksList.has('святой-чемпион') || activeDecksList.has('справедливость');
    if (isChampionSacrificeActive) {
        activeDecksList.add('жертва-чемпиона');
    } else {
        activeDecksList.delete('жертва-чемпиона');
    }

    // Обновляем "ужас-удар" по Осквернению, Неравенству или Повиновению
    const isDreadStrikeActive = activeDecksList.has('осквернение') || activeDecksList.has('неравенство') || activeDecksList.has('повиновение');
    if (isDreadStrikeActive) {
        activeDecksList.add('эгоистичная-реакция');
    } else {
        activeDecksList.delete('эгоистичная-реакция');
    }

    // Обновляем состояние всех нод
    skillsData.forEach(skill => {
        const el = nodeElements[skill.id];
        if (skill.deck && !activeDecksList.has(skill.deck)) {
            el.classList.add('locked');
            // Если нода была куплена, отменяем её
            if (el.classList.contains('purchased')) {
                el.classList.remove('purchased');
                cancelChildren(skill.id);
            }
        } else {
            el.classList.remove('locked');
        }
    });

    updateConnections();
}

function toggleRarity(rarity) {
    const cardEl = document.querySelector(`.card[onclick="toggleRarity('${rarity}')"]`);
    
    if (visibleRarities.has(rarity)) {
        visibleRarities.delete(rarity);
        cardEl.classList.remove('active');
    } else {
        visibleRarities.add(rarity);
        cardEl.classList.add('active');
    }

    // Обновляем видимость всех нод и связанных линий
    skillsData.forEach(skill => {
        // Root нода всегда видима и не может быть скрыта
        if (skill.id === 'root') return;
        
        const el = nodeElements[skill.id];
        const line = document.getElementById(`line-${skill.id}`);
        
        if (!visibleRarities.has(skill.rarity)) {
            el.classList.add('hidden');
            if (line) line.classList.add('hidden');
        } else {
            el.classList.remove('hidden');
            if (line) line.classList.remove('hidden');
        }
    });
}

function savePositions() {
    const positions = {};
    skillsData.forEach(s => {
        positions[s.id] = { x: s.x, y: s.y };
    });
    localStorage.setItem('pf2e_tree_positions', JSON.stringify(positions));
    alert("Позиции сохранены!");
}

function resetPositions() {
    if (confirm("Сбросить все позиции?")) {
        localStorage.removeItem('pf2e_tree_positions');
        location.reload();
    }
}

// ============================================
// ЗАПУСК
// ============================================

initTree();

// Подсветить активные карточки при загрузке
activeDecksList.forEach(deck => {
    const cardEl = document.querySelector(`.card[onclick="toggleDeck('${deck}')"]`);
    if (cardEl) cardEl.classList.add('active');
});

// Подсветить активные карточки редкости при загрузке
visibleRarities.forEach(rarity => {
    const cardEl = document.querySelector(`.card[onclick="toggleRarity('${rarity}')"]`);
    if (cardEl) cardEl.classList.add('active');
});

// Применяем ограничения по уровню без анимации при загрузке
applyLevelVisibility(playerLevel, playerLevel);

// ============================================
// ОБРАБОТЧИК ЗУМА
// ============================================

function updateZoom(zoomLevel) {
    currentZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel));
    treeContainer.style.transform = `translate(${panOffsetX}px, ${panOffsetY}px) scale(${currentZoom})`;
    
    // Обновляем индикатор зума
    const indicator = document.getElementById('zoom-indicator');
    if (indicator) {
        indicator.textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

// Зум по колесику мыши (Ctrl + колесо)
document.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    
    const zoomDirection = e.deltaY > 0 ? -1 : 1;
    const newZoom = currentZoom + (zoomDirection * ZOOM_SPEED);
    updateZoom(newZoom);
}, { passive: false });

// ============================================
// СИСТЕМА УРОВНЕЙ ИГРОКА
// ============================================

function setPlayerLevel(level) {
    const newLevel = parseInt(level);
    
    // Валидация
    if (isNaN(newLevel) || newLevel < 1 || newLevel > 20) {
        return;
    }
    
    const prevLevel = playerLevel;
    playerLevel = newLevel;
    document.getElementById('playerLevelInput').value = playerLevel;
    document.getElementById('levelDisplay').textContent = playerLevel;

    // Пересчитываем видимость нод по уровню
    applyLevelVisibility(prevLevel, playerLevel);
    
    // Проверяем превышение доступных очков и отменяем ноды если нужно
    let spentPoints = getSpentPoints();
    const availablePoints = getTotalAvailablePoints();
    
    if (spentPoints > availablePoints) {
        // Создаём массив активированных нод с их стоимостью для сортировки
        const activatedSkills = skillsData
            .filter(s => nodeElements[s.id] && nodeElements[s.id].classList.contains('purchased'))
            .map(s => ({ skill: s, cost: getSkillCost(s.level) }))
            .sort((a, b) => b.cost - a.cost); // Сортируем по убыванию стоимости
        
        // Отменяем дорогие ноды пока не вместимся в лимит
        for (const { skill } of activatedSkills) {
            if (spentPoints <= availablePoints) break;
            
            const el = nodeElements[skill.id];
            el.classList.remove('purchased');
            cancelChildren(skill.id);
            spentPoints -= getSkillCost(skill.level);
        }
    }
    
    updateConnections();
}