// Объект для хранения настроек
const mazeSettings = {
    width: 21,
    height: 21,
    algorithm: 'dfs',
    difficulty: 'easy',
    braid: false
};

// Направления (аналог enum Direction)
const Direction = {
    NORTH: 0,
    SOUTH: 1,
    EAST: 2,
    WEST: 3
};

class Cell {
    constructor() {
        this.north = true;
        this.east = true;
        this.south = true;
        this.west = true;
        this.visited = false;
    }
}

class MazeInterface {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // Инициализируем стены
        this.horizontalWalls = Array(height + 1).fill().map(() => Array(width).fill(1));
        this.verticalWalls = Array(height).fill().map(() => Array(width + 1).fill(1));
    }

    getWidth() { return this.width; }
    getHeight() { return this.height; }

    hasWall(x, y, dir) {
        switch(dir) {
            case Direction.NORTH:
                return this.horizontalWalls[y][x] === 1;
            case Direction.SOUTH:
                return this.horizontalWalls[y + 1][x] === 1;
            case Direction.WEST:
                return this.verticalWalls[y][x] === 1;
            case Direction.EAST:
                return this.verticalWalls[y][x + 1] === 1;
            default:
                return false;
        }
    }

    removeWall(x, y, dir) {
        switch(dir) {
            case Direction.NORTH:
                this.horizontalWalls[y][x] = 0;
                break;
            case Direction.SOUTH:
                this.horizontalWalls[y + 1][x] = 0;
                break;
            case Direction.WEST:
                this.verticalWalls[y][x] = 0;
                break;
            case Direction.EAST:
                this.verticalWalls[y][x + 1] = 0;
                break;
        }
    }

    // Конвертация из MazeInterface обратно в стандартный формат Maze
    toMazeGrid() {
        const grid = [];
        for (let r = 0; r < this.height; r++) {
            grid[r] = [];
            for (let c = 0; c < this.width; c++) {
                const cell = new Cell();
                cell.north = this.hasWall(c, r, Direction.NORTH);
                cell.south = this.hasWall(c, r, Direction.SOUTH);
                cell.west = this.hasWall(c, r, Direction.WEST);
                cell.east = this.hasWall(c, r, Direction.EAST);
                grid[r][c] = cell;
            }
        }
        return grid;
    }
}

class BraidingAlgorithm {
    isDeadEnd(maze, x, y) {
        let wallCount = 0;
        const dirs = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        for (const dir of dirs) {
            if (maze.hasWall(x, y, dir)) wallCount++;
        }
        return wallCount === 3;
    }

    // Проверяем, является ли стена граничной
    isBorderWall(maze, x, y, dir) {
        switch(dir) {
            case Direction.NORTH:
                return y === 0; // Верхняя граница
            case Direction.SOUTH:
                return y === maze.getHeight() - 1; // Нижняя граница
            case Direction.WEST:
                return x === 0; // Левая граница
            case Direction.EAST:
                return x === maze.getWidth() - 1; // Правая граница
            default:
                return false;
        }
    }

    removeDeadEnd(maze, x, y) {
        const dirs = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        
        // Сначала собираем все НЕграничные стены
        const nonBorderWalls = [];
        for (const dir of dirs) {
            if (maze.hasWall(x, y, dir) && !this.isBorderWall(maze, x, y, dir)) {
                nonBorderWalls.push(dir);
            }
        }
        
        // Если есть неграничные стены, убираем случайную из них
        if (nonBorderWalls.length > 0) {
            const randomIndex = Math.floor(Math.random() * nonBorderWalls.length);
            maze.removeWall(x, y, nonBorderWalls[randomIndex]);
        } else {
            // Если все стены граничные, убираем случайную (это редкий случай)
            const availableWalls = dirs.filter(dir => maze.hasWall(x, y, dir));
            if (availableWalls.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableWalls.length);
                maze.removeWall(x, y, availableWalls[randomIndex]);
            }
        }
    }

    braidMaze(maze) {
        for (let y = 0; y < maze.getHeight(); y++) {
            for (let x = 0; x < maze.getWidth(); x++) {
                if (this.isDeadEnd(maze, x, y)) {
                    this.removeDeadEnd(maze, x, y);
                }
            }
        }
    }
}

// Класс Maze (основной класс)
class Maze {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = [];
        
        // Инициализация сетки
        for (let r = 0; r < rows; r++) {
            this.grid[r] = [];
            for (let c = 0; c < cols; c++) {
                this.grid[r][c] = new Cell();
            }
        }   
    }

    // Конвертация в MazeInterface для работы с браидингом
    toMazeInterface() {
        const mazeInterface = new MazeInterface(this.cols, this.rows);
        
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const cell = this.grid[r][c];
                
                if (!cell.north) mazeInterface.removeWall(c, r, Direction.NORTH);
                if (!cell.south) mazeInterface.removeWall(c, r, Direction.SOUTH);
                if (!cell.west) mazeInterface.removeWall(c, r, Direction.WEST);
                if (!cell.east) mazeInterface.removeWall(c, r, Direction.EAST);
            }
        }
        
        return mazeInterface;
    }

    // Применение браидинга к текущему лабиринту
    applyBraiding() {
        const mazeInterface = this.toMazeInterface();
        const braidingAlgorithm = new BraidingAlgorithm();
        braidingAlgorithm.braidMaze(mazeInterface);
        
        // Конвертируем обратно
        this.grid = mazeInterface.toMazeGrid();
    }

    // Новый алгоритм DFS
    generateDFS() {
        // Сбрасываем посещения
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.grid[r][c].visited = false;
            }
        }

        const stack = [];
        const startRow = Math.floor(Math.random() * this.rows);
        const startCol = Math.floor(Math.random() * this.cols);
        
        this.grid[startRow][startCol].visited = true;
        stack.push([startRow, startCol]);

        while (stack.length > 0) {
            const [r, c] = stack[stack.length - 1];

            const neighbors = [];
            if (r > 0 && !this.grid[r - 1][c].visited) neighbors.push([r - 1, c]);
            if (r < this.rows - 1 && !this.grid[r + 1][c].visited) neighbors.push([r + 1, c]);
            if (c > 0 && !this.grid[r][c - 1].visited) neighbors.push([r, c - 1]);
            if (c < this.cols - 1 && !this.grid[r][c + 1].visited) neighbors.push([r, c + 1]);

            if (neighbors.length > 0) {
                const randomIndex = Math.floor(Math.random() * neighbors.length);
                const [nr, nc] = neighbors[randomIndex];

                if (nr === r - 1) {
                    this.grid[r][c].north = false;
                    this.grid[nr][nc].south = false;
                } else if (nr === r + 1) {
                    this.grid[r][c].south = false;
                    this.grid[nr][nc].north = false;
                } else if (nc === c - 1) {
                    this.grid[r][c].west = false;
                    this.grid[nr][nc].east = false;
                } else if (nc === c + 1) {
                    this.grid[r][c].east = false;
                    this.grid[nr][nc].west = false;
                }

                this.grid[nr][nc].visited = true;
                stack.push([nr, nc]);
            } else {
                stack.pop();
            }
        }
    }

    // Рекурсивный Backtracker
    generateRecursiveBacktracker() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.grid[r][c].visited = false;
            }
        }

        const startRow = Math.floor(Math.random() * this.rows);
        const startCol = Math.floor(Math.random() * this.cols);
        this._carvePassage(startRow, startCol);
    }

    _carvePassage(row, col) {
        this.grid[row][col].visited = true;

        const directions = [
            { dx: 0, dy: -1, wall: 'north', opposite: 'south' },
            { dx: 1, dy: 0, wall: 'east', opposite: 'west' },
            { dx: 0, dy: 1, wall: 'south', opposite: 'north' },
            { dx: -1, dy: 0, wall: 'west', opposite: 'east' }
        ];

        this._shuffleArray(directions);

        for (const dir of directions) {
            const newRow = row + dir.dy;
            const newCol = col + dir.dx;

            if (newRow >= 0 && newRow < this.rows && 
                newCol >= 0 && newCol < this.cols && 
                !this.grid[newRow][newCol].visited) {
                
                this.grid[row][col][dir.wall] = false;
                this.grid[newRow][newCol][dir.opposite] = false;
                this._carvePassage(newRow, newCol);
            }
        }
    }

    _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getGrid() {
        return this.grid;
    }
}

// Функция преобразования Maze в простой массив для отрисовки
function mazeToArray(maze, width, height) {
    const arrayWidth = width * 2 + 1;
    const arrayHeight = height * 2 + 1;
    const mazeArray = [];

    for (let y = 0; y < arrayHeight; y++) {
        mazeArray[y] = [];
        for (let x = 0; x < arrayWidth; x++) {
            mazeArray[y][x] = 1;
        }
    }

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            const cell = maze.grid[r][c];
            const arrayY = r * 2 + 1;
            const arrayX = c * 2 + 1;

            mazeArray[arrayY][arrayX] = 0;

            if (!cell.north) mazeArray[arrayY - 1][arrayX] = 0;
            if (!cell.east) mazeArray[arrayY][arrayX + 1] = 0;
            if (!cell.south) mazeArray[arrayY + 1][arrayX] = 0;
            if (!cell.west) mazeArray[arrayY][arrayX - 1] = 0;
        }
    }

    mazeArray[1][0] = 0;
    mazeArray[arrayHeight - 2][arrayWidth - 1] = 0;

    return mazeArray;
}

// Функция создания лабиринта с выбранным алгоритмом
function generateMazeWithAlgorithm(width, height, algorithm, braid = false) {
    const maze = new Maze(height, width);
    
    if (algorithm === 'dfs') {
        maze.generateDFS();
    } else if (algorithm === 'backtracker') {
        maze.generateRecursiveBacktracker();
    } else {
        return createBasicMazeArray(width * 2 + 1, height * 2 + 1);
    }
    
    // Применяем браидинг если нужно
    if (braid) {
        maze.applyBraiding();
    }

    return mazeToArray(maze, width, height);
}

function createBasicMazeArray(width, height) {
    const maze = [];
    for (let y = 0; y < height; y++) {
        maze[y] = [];
        for (let x = 0; x < width; x++) {
            maze[y][x] = 1;
        }
    }
    maze[1][0] = 0;
    maze[height - 2][width - 1] = 0;
    return maze;
}



// Инициализация при загрузке страницы
let player = { x: 1, y: 1 };
let currentMaze = [];
let mazeTable;

function renderPlayer() {
    if (!mazeTable) return;
    const cells = mazeTable.getElementsByTagName('td');
    for (let cell of cells) {
        cell.classList.remove('player');
    }
    const row = mazeTable.rows[player.y];
    const cell = row.cells[player.x];
    cell.classList.add('player');
}

function canMoveTo(nx, ny) {
    return ny >= 0 && ny < currentMaze.length &&
           nx >= 0 && nx < currentMaze[0].length &&
           currentMaze[ny][nx] === 0;
}

// Функция для управления игроком с предотвращением скролла
function movePlayer(key) {
    let newX = player.x;
    let newY = player.y;

    switch (key) {
        case 'ArrowUp': newY--; break;
        case 'ArrowDown': newY++; break;
        case 'ArrowLeft': newX--; break;
        case 'ArrowRight': newX++; break;
        case 'c': checkPointPosition(); break;
        case 'r': resetPlayerPosition(); break;
        case 'v': goToCheckPointPosition(); break;

        default: return;
    }

    if (canMoveTo(newX, newY)) {
        player.x = newX;
        player.y = newY;
        stepCount++;
        updateStepCounter();
        renderPlayer();
        checkWin();
    }
}



function renderMazeTable(maze, container) {
    container.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'maze';
    mazeTable = table;
    currentMaze = maze;

    for (let y = 0; y < maze.length; y++) {
        const row = document.createElement('tr');
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement('td');
            cell.className = 'cell';
            if (maze[y][x] === 1) cell.classList.add('wall');
            else {
                cell.classList.add('path');
                if (x === 0 && y === 1) {
                    cell.classList.add('start');
                    startPos = { x, y };
                    abobax=startPos.x;
                    abobay=startPos.y;
                }
                if (x === maze[y].length - 1 && y === maze.length - 2) {
                    cell.classList.add('end');
                    endPos = { x, y };
                }
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
    player = { ...startPos };
    stepCount = 0;
    updateStepCounter();
    setAutoStartTimer();
    renderPlayer();
}

// Инициализация интерфейса
document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', resetPlayerPosition);
});

document.addEventListener('DOMContentLoaded', () => {
    const checkPointBtn = document.getElementById('checkPointBtn');
    checkPointBtn.addEventListener('click', checkPointPosition);

});

//
// document.addEventListener('DOMContentLoaded', () => {
//
// });

document.addEventListener('DOMContentLoaded', () => {
    const resetCheckPointBtn = document.getElementById('resetCheckPointBtn');
    resetCheckPointBtn.addEventListener('click', goToCheckPointPosition);
});

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const mazeContainer = document.getElementById('mazeContainer');
    const leadearBoard = document.getElementById('LeadearBoard');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const algorithmSelect = document.getElementById('algorithm');
    const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
    const braidCheckbox = document.getElementById('braid');

    // Обновляем options для выбора алгоритма
    algorithmSelect.innerHTML = `
        <option value="dfs">DFS (Поиск в глубину)</option>
        <option value="backtracker">Рекурсивный Backtracker</option>
    `;

    // Функция генерации и рендеринга лабиринта
    function generateAndRenderMaze() {
        mazeSettings.width = parseInt(widthInput.value);
        mazeSettings.height = parseInt(heightInput.value);
        mazeSettings.algorithm = algorithmSelect.value;
        mazeSettings.braid = braidCheckbox ? braidCheckbox.checked : false;

        for (const radio of difficultyRadios) {
            if (radio.checked) {
                mazeSettings.difficulty = radio.value;
                break;
            }
        }

        const mazeArray = generateMazeWithAlgorithm(
            Math.floor(mazeSettings.width / 2),
            Math.floor(mazeSettings.height / 2),
            mazeSettings.algorithm,
            mazeSettings.braid
        );
        
        clearInterval(timerInterval);
        timerStarted = false;
        setAutoStartTimer();
        
        // Сбрасываем чекпоинт при генерации нового лабиринта
        checkPointActive = false;
        
        renderMazeTable(mazeArray, mazeContainer);
        // Загружаем таблицу лидеров при загрузке страницы
        loadLeaderboard();
    }

    generateAndRenderMaze();
    generateBtn.addEventListener('click', generateAndRenderMaze);

    // Добавляем обработчик для чекбокса
    if (braidCheckbox) {
        braidCheckbox.addEventListener('change', generateAndRenderMaze);
    }
});



// let player = { x: 1, y: 1 };
let startPos = { x: 0, y: 1 };
let abobax=startPos.x, abobay=startPos.y;
let checkPointPos = {x: abobax, y: abobay};
let endPos = { x: 0, y: 0 };
// let currentMaze = [];
// let mazeTable;
let stepCount = 0;
let timerInterval;
let startTime = 0;
// let leaders = {};

// Обновление счётчика шагов
let timerStarted = false; // флаг, что таймер уже запущен
let timerAutoStart;       // таймер автозапуска через 5 секунд

// Обновление счётчика шагов
function updateStepCounter() {
    document.getElementById('stepCounter').textContent = `Шаги: ${stepCount}`;
}

// Запуск таймера
function startTimer() {
    if (timerStarted) return; // если уже запущен — ничего не делаем
    clearInterval(timerInterval);
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        document.getElementById('timer').textContent = `Время: ${elapsed} c`;
    }, 100);
    timerStarted = true;
}

// Сброс таймера
function stopTimer() {
    clearInterval(timerInterval);
    timerStarted = false;
}

// Установка автоматического запуска через 5 секунд
function setAutoStartTimer() {
    clearTimeout(timerAutoStart);
    timerAutoStart = setTimeout(() => {
        if (!timerStarted) startTimer();
    }, 5000);
}

// Перерисовка игрока
function renderPlayer() {
    if (!mazeTable) return;
    const cells = mazeTable.getElementsByTagName('td');
    for (let cell of cells) cell.classList.remove('player');
    mazeTable.rows[player.y].cells[player.x].classList.add('player');
}

// Проверка можно ли двигаться
function canMoveTo(nx, ny) {
    return ny >= 0 && ny < currentMaze.length &&
           nx >= 0 && nx < currentMaze[0].length &&
           currentMaze[ny][nx] === 0;
}

function checkWin() {
    if (player.x === endPos.x && player.y === endPos.y) {
        stopTimer();
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        
        // Рассчитываем оптимальный путь
        const optimalSteps = getOptimalPathLength(currentMaze, startPos, endPos);
        const optimal = optimalSteps > 0 ? `${optimalSteps} шагов` : "путь не найден";
        
        // Добавляем в таблицу лидеров
        addToLeaderboard(stepCount, elapsed);
        saveLeaderboard();
        
        alert(`🎉 Поздравляем! Вы прошли лабиринт!\n\n` +
              `Ваши шаги: ${stepCount}\n` +
              `Оптимальный путь: ${optimal}\n` +
              `Затраченное время: ${elapsed} секунд`);
        
        stepCount = -1;
        resetPlayerPosition();
        setAutoStartTimer();
    }
}

function resetPlayerPosition() {
    player.x = startPos.x;
    player.y = startPos.y;
    stepCount++;
    updateStepCounter();
    
    // Сбрасываем чекпоинт при возврате на старт
    checkPointActive = false;
    renderChecks();
    
    renderPlayer();
}

function goToCheckPointPosition() {
    if (!checkPointActive) return;
    
    player.x = checkPointPos.x;
    player.y = checkPointPos.y;
    stepCount++;
    updateStepCounter();
    renderPlayer();
}

function checkPointPosition() {
    // Не позволяем устанавливать чекпоинт на стартовой позиции
    if (player.x === startPos.x && player.y === startPos.y) {
        return;
    }
    
    checkPointPos.x = player.x;
    checkPointPos.y = player.y;
    checkPointActive = true;
    renderChecks();
    
    // Обновляем текст кнопки
    document.getElementById('resetCheckPointBtn').textContent = 'Вернуться к чекпоинту';
}

function renderChecks() {
    if (!mazeTable) return;
    
    const cells = mazeTable.getElementsByTagName('td');
    for (let cell of cells) {
        cell.classList.remove('checkpoint');
    }
    
    const checkpointBtn = document.getElementById('resetCheckPointBtn');
    
    if (checkPointActive && (checkPointPos.x !== startPos.x || checkPointPos.y !== startPos.y)) {
        mazeTable.rows[checkPointPos.y].cells[checkPointPos.x].classList.add('checkpoint');
        checkpointBtn.disabled = false;
        checkpointBtn.textContent = 'Вернуться к чекпоинту';
    } else {
        checkpointBtn.disabled = true;
        checkpointBtn.textContent = 'Чекпоинт не установлен';
    }
}

// Перехватываем нажатия клавиш
document.addEventListener('keydown', function(e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        if (!timerStarted) { // запускаем таймер при первом шаге
            clearTimeout(timerAutoStart);
            startTimer();
        }
        movePlayer(e.key);
    }
});

let checkPointActive = false;
let optimalPath = [];


// Функция для поиска оптимального пути с помощью BFS
function findOptimalPath(maze, start, end) {
    const queue = [{ x: start.x, y: start.y, path: [] }];
    const visited = new Set();
    visited.add(`${start.x},${start.y}`);
    
    const directions = [
        { dx: 0, dy: -1, dir: 'up' },
        { dx: 1, dy: 0, dir: 'right' },
        { dx: 0, dy: 1, dir: 'down' },
        { dx: -1, dy: 0, dir: 'left' }
    ];
    
    while (queue.length > 0) {
        const { x, y, path } = queue.shift();
        
        // Если достигли конца, возвращаем путь
        if (x === end.x && y === end.y) {
            return path;
        }
        
        // Проверяем все возможные направления
        for (const { dx, dy, dir } of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const key = `${nx},${ny}`;
            
            if (ny >= 0 && ny < maze.length && 
                nx >= 0 && nx < maze[0].length && 
                maze[ny][nx] === 0 && 
                !visited.has(key)) {
                
                visited.add(key);
                queue.push({ 
                    x: nx, 
                    y: ny, 
                    path: [...path, dir] 
                });
            }
        }
    }
    
    return []; // Если путь не найден
}

// Функция для получения длины оптимального пути
function getOptimalPathLength(maze, start, end) {
    const path = findOptimalPath(maze, start, end);
    return path.length;
}

let leaderboard = [];
let attemptNumber = 1;

// Функция для добавления записи в таблицу лидеров
function addToLeaderboard(steps, time) {
    const attempt = {
        number: attemptNumber,
        steps: steps,
        time: parseFloat(time),
        timestamp: new Date().toLocaleString()
    };
    
    leaderboard.push(attempt);
    attemptNumber++;
    
    // Сортируем по времени (чем меньше - тем лучше)
    leaderboard.sort((a, b) => a.time - b.time);
    
    // Ограничиваем количество записей (например, 10 лучших)
    if (leaderboard.length > 10) {
        leaderboard = leaderboard.slice(0, 10);
    }
    
    updateLeaderboardDisplay();
}

// Функция для обновления отображения таблицы лидеров
function updateLeaderboardDisplay() {
    const leaderboardElement = document.getElementById('leaderboard');
    if (!leaderboardElement) return;
    
    if (leaderboard.length === 0) {
        leaderboardElement.innerHTML = '<p>Пока нет записей</p>';
        return;
    }
    
    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Попытка</th>
                    <th>Время</th>
                    <th>Шаги</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    leaderboard.forEach(attempt => {
        html += `
            <tr>
                <td>#${attempt.number}</td>
                <td>${attempt.time.toFixed(1)}с</td>
                <td>${attempt.steps}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    leaderboardElement.innerHTML = html;
}

// Функция для сохранения таблицы лидеров в localStorage
function saveLeaderboard() {
    localStorage.setItem('mazeLeaderboard', JSON.stringify(leaderboard));
    localStorage.setItem('mazeAttemptNumber', attemptNumber.toString());
}

// Функция для загрузки таблицы лидеров из localStorage
function loadLeaderboard() {
    const savedLeaderboard = localStorage.getItem('mazeLeaderboard');
    const savedAttemptNumber = localStorage.getItem('mazeAttemptNumber');
    
    if (savedLeaderboard) {
        leaderboard = JSON.parse(savedLeaderboard);
    }
    
    if (savedAttemptNumber) {
        attemptNumber = parseInt(savedAttemptNumber);
    }
    
    updateLeaderboardDisplay();
}

// Обработчик для кнопки очистки таблицы лидеров
const clearLeaderboardBtn = document.getElementById('clearLeaderboard');
if (clearLeaderboardBtn) {
    clearLeaderboardBtn.addEventListener('click', () => {
        leaderboard = [];
        attemptNumber = 1;
        updateLeaderboardDisplay();
        saveLeaderboard();
    });
}