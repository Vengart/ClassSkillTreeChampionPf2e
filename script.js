const AppState = {
    mazeSettings: { width: 21, height: 21, algorithm: 'dfs', difficulty: 'easy', braid: false },
    player: { x: 1, y: 1 },
    startPos: { x: 0, y: 1 },
    endPos: { x: 0, y: 0 },
    checkPointPos: { x: 0, y: 1 },
    currentMaze: [],
    mazeTable: null,
    stepCount: 0,
    timerInterval: null,
    startTime: 0,
    timerStarted: false,
    timerAutoStart: null,
    checkPointActive: false,
    optimalPath: [],
    leaderboard: [],
    attemptNumber: 1,
    savedMazes: {}
};

const Direction = {
    NORTH: 0, SOUTH: 1, EAST: 2, WEST: 3
};

class Cell {
    constructor() {
        this.north = this.east = this.south = this.west = this.visited = true;
    }
}

class MazeInterface {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.horizontalWalls = Array(height + 1).fill().map(() => Array(width).fill(1)); //
        this.verticalWalls = Array(height).fill().map(() => Array(width + 1).fill(1));
    }

    getWidth() { return this.width; }
    getHeight() { return this.height; }

    hasWall(x, y, dir) {
        const walls = {
            [Direction.NORTH]: () => this.horizontalWalls[y][x] === 1,
            [Direction.SOUTH]: () => this.horizontalWalls[y + 1][x] === 1,
            [Direction.WEST]: () => this.verticalWalls[y][x] === 1,
            [Direction.EAST]: () => this.verticalWalls[y][x + 1] === 1
        };
        return walls[dir] ? walls[dir]() : false;
    }

    removeWall(x, y, dir) {
        const removers = {
            [Direction.NORTH]: () => this.horizontalWalls[y][x] = 0,
            [Direction.SOUTH]: () => this.horizontalWalls[y + 1][x] = 0,
            [Direction.WEST]: () => this.verticalWalls[y][x] = 0,
            [Direction.EAST]: () => this.verticalWalls[y][x + 1] = 0
        };
        if (removers[dir]) removers[dir]();
    }

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
        return [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST].filter(dir => maze.hasWall(x, y, dir)).length === 3;
    }

    isBorderWall(maze, x, y, dir) {
        const borders = {
            [Direction.NORTH]: () => y === 0,
            [Direction.SOUTH]: () => y === maze.getHeight() - 1,
            [Direction.WEST]: () => x === 0,
            [Direction.EAST]: () => x === maze.getWidth() - 1
        };
        return borders[dir] ? borders[dir]() : false;
    }

    removeDeadEnd(maze, x, y) {
        const dirs = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        const nonBorderWalls = dirs.filter(dir => 
            maze.hasWall(x, y, dir) && !this.isBorderWall(maze, x, y, dir));
        
        const wallsToRemove = nonBorderWalls.length > 0 ? nonBorderWalls : 
            dirs.filter(dir => maze.hasWall(x, y, dir));
        
        if (wallsToRemove.length > 0) {
            maze.removeWall(x, y, wallsToRemove[Math.floor(Math.random() * wallsToRemove.length)]);
        }
    }

    braidMaze(maze) {
        for (let y = 0; y < maze.getHeight(); y++) {
            for (let x = 0; x < maze.getWidth(); x++) {
                if (this.isDeadEnd(maze, x, y)) this.removeDeadEnd(maze, x, y);
            }
        }
    }
}

class Maze {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array(rows).fill().map(() => 
            Array(cols).fill().map(() => new Cell()));
    }

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

    applyBraiding() {
        const mazeInterface = this.toMazeInterface();
        new BraidingAlgorithm().braidMaze(mazeInterface);
        this.grid = mazeInterface.toMazeGrid();
    }

    generateDFS() {
        this.grid.forEach(row => row.forEach(cell => cell.visited = false));
        const stack = [];
        const startRow = Math.floor(Math.random() * this.rows);
        const startCol = Math.floor(Math.random() * this.cols);
        
        this.grid[startRow][startCol].visited = true;
        stack.push([startRow, startCol]);

        while (stack.length > 0) {
            const [r, c] = stack[stack.length - 1];
            const neighbors = [[-1,0],[1,0],[0,-1],[0,1]]
                .map(([dr, dc]) => [r + dr, c + dc])
                .filter(([nr, nc]) => nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols && !this.grid[nr][nc].visited);

            if (neighbors.length > 0) {
                const [nr, nc] = neighbors[Math.floor(Math.random() * neighbors.length)];
                const [dir, opp] = nr === r-1 ? ['north','south'] : nr === r+1 ? ['south','north'] : 
                                  nc === c-1 ? ['west','east'] : ['east','west'];
                
                this.grid[r][c][dir] = false;
                this.grid[nr][nc][opp] = false;
                this.grid[nr][nc].visited = true;
                stack.push([nr, nc]);
            } else {
                stack.pop();
            }
        }
    }

    generateRecursiveBacktracker() {
        this.grid.forEach(row => row.forEach(cell => cell.visited = false));
        this._carvePassage(Math.floor(Math.random() * this.rows), Math.floor(Math.random() * this.cols));
    }

    _carvePassage(row, col) {
        this.grid[row][col].visited = true;
        const directions = [
            { dx: 0, dy: -1, wall: 'north', opposite: 'south' },
            { dx: 1, dy: 0, wall: 'east', opposite: 'west' },
            { dx: 0, dy: 1, wall: 'south', opposite: 'north' },
            { dx: -1, dy: 0, wall: 'west', opposite: 'east' }
        ];

        this._shuffleArray(directions).forEach(dir => {
            const newRow = row + dir.dy, newCol = col + dir.dx;
            if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols && !this.grid[newRow][newCol].visited) {
                this.grid[row][col][dir.wall] = false;
                this.grid[newRow][newCol][dir.opposite] = false;
                this._carvePassage(newRow, newCol);
            }
        });
    }

    _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getGrid() { return this.grid; }
}

function mazeToArray(maze, width, height) {
    const arrayWidth = width * 2 + 1, arrayHeight = height * 2 + 1;
    const mazeArray = Array(arrayHeight).fill().map(() => Array(arrayWidth).fill(1));

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            const cell = maze.grid[r][c];
            const arrayY = r * 2 + 1, arrayX = c * 2 + 1;
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

function generateMazeWithAlgorithm(width, height, algorithm, braid = false) {
    const maze = new Maze(height, width);
    if (algorithm === 'dfs') maze.generateDFS();
    else if (algorithm === 'backtracker') maze.generateRecursiveBacktracker();
    else return createBasicMazeArray(width * 2 + 1, height * 2 + 1);
    
    if (braid) maze.applyBraiding();
    return mazeToArray(maze, width, height);
}

function createBasicMazeArray(width, height) {
    const maze = Array(height).fill().map(() => Array(width).fill(1));
    maze[1][0] = maze[height - 2][width - 1] = 0;
    return maze;
}

function renderGameState() {
    if (!AppState.mazeTable) return;
    
    const cells = AppState.mazeTable.getElementsByTagName('td');
    for (let cell of cells) cell.classList.remove('player', 'checkpoint');
    
    AppState.mazeTable.rows[AppState.player.y].cells[AppState.player.x].classList.add('player');
    
    if (AppState.checkPointActive && (AppState.checkPointPos.x !== AppState.startPos.x || AppState.checkPointPos.y !== AppState.startPos.y)) {
        AppState.mazeTable.rows[AppState.checkPointPos.y].cells[AppState.checkPointPos.x].classList.add('checkpoint');
    }
    
    document.getElementById('stepCounter').textContent = `Шаги: ${AppState.stepCount}`;
    
    const checkpointBtn = document.getElementById('resetCheckPointBtn');
    checkpointBtn.disabled = !AppState.checkPointActive;
    checkpointBtn.textContent = AppState.checkPointActive ? 'Вернуться к чекпоинту' : 'Чекпоинт не установлен';
}

function movePlayerTo(position, incrementSteps = true) {
    AppState.player.x = position.x;
    AppState.player.y = position.y;
    if (incrementSteps) AppState.stepCount++;
    renderGameState();
    checkWin();
}

function resetPlayerPosition() {
    movePlayerTo(AppState.startPos);
    AppState.checkPointActive = false;
}

function goToCheckPointPosition() {
    if (AppState.checkPointActive) movePlayerTo(AppState.checkPointPos);
}

function checkPointPosition() {
    if (AppState.player.x === AppState.startPos.x && AppState.player.y === AppState.startPos.y) return;
    AppState.checkPointPos = { ...AppState.player };
    AppState.checkPointActive = true;
    renderGameState();
}

function canMoveTo(nx, ny) {
    return ny >= 0 && ny < AppState.currentMaze.length &&
           nx >= 0 && nx < AppState.currentMaze[0].length &&
           AppState.currentMaze[ny][nx] === 0;
}

function movePlayer(key) {
    const moves = {
        'ArrowUp': { x: 0, y: -1 }, 'ArrowDown': { x: 0, y: 1 },
        'ArrowLeft': { x: -1, y: 0 }, 'ArrowRight': { x: 1, y: 0 }
    };
    
    const actions = {
        'c': checkPointPosition, 'r': resetPlayerPosition, 'v': goToCheckPointPosition
    };
    
    if (moves[key]) {
        const { x: dx, y: dy } = moves[key];
        const newX = AppState.player.x + dx, newY = AppState.player.y + dy;
        if (canMoveTo(newX, newY)) {
            if (!AppState.timerStarted) {
                clearTimeout(AppState.timerAutoStart);
                Timer.start();
            }
            movePlayerTo({ x: newX, y: newY });
        }
    } else if (actions[key]) {
        actions[key]();
    }
}

function renderMazeTable(maze, container) {
    container.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'maze';
    AppState.mazeTable = table;
    AppState.currentMaze = maze;

    for (let y = 0; y < maze.length; y++) {
        const row = document.createElement('tr');
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement('td');
            cell.className = 'cell';
            
            if (maze[y][x] === 1) {
                cell.classList.add('wall');
            } else {
                cell.classList.add('path');
                if (x === 0 && y === 1) {
                    cell.classList.add('start');
                    AppState.startPos = { x, y };
                }
                if (x === maze[y].length - 1 && y === maze.length - 2) {
                    cell.classList.add('end');
                    AppState.endPos = { x, y };
                }
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
    movePlayerTo(AppState.startPos, false);
    AppState.stepCount = 0;
}
const Timer = {
    start() {
        if (AppState.timerStarted) return;
        clearInterval(AppState.timerInterval);
        AppState.startTime = Date.now();
        AppState.timerInterval = setInterval(() => {
            const elapsed = ((Date.now() - AppState.startTime) / 1000).toFixed(1);
            document.getElementById('timer').textContent = `Время: ${elapsed} c`;
        }, 100);
        AppState.timerStarted = true;
    },
    
    stop() {
        clearInterval(AppState.timerInterval);
        AppState.timerStarted = false;
    },
};

function addToLeaderboard(steps, time) {
    const attempt = {
        id: Date.now(), 
        number: AppState.attemptNumber++,
        steps: steps,
        time: parseFloat(time),
        timestamp: new Date().toLocaleString(),
        mazeData: JSON.parse(JSON.stringify(AppState.currentMaze)), 
        settings: {...AppState.mazeSettings}, 
        startPos: {...AppState.startPos}, 
        endPos: {...AppState.endPos} 
    };
    
    AppState.leaderboard.push(attempt);
    AppState.leaderboard.sort((a, b) => a.time - b.time);
    
    if (AppState.leaderboard.length > 10) {
        AppState.leaderboard = AppState.leaderboard.slice(0, 10);
    }
    
    AppState.savedMazes[attempt.id] = {
        maze: attempt.mazeData,
        settings: attempt.settings,
        startPos: attempt.startPos,
        endPos: attempt.endPos
    };
    
    updateLeaderboardDisplay();
    saveLeaderboard();
}

function updateLeaderboardDisplay() {
    const leaderboardElement = document.getElementById('leaderboard');
    if (!leaderboardElement) return;
    
    if (AppState.leaderboard.length === 0) {
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
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    AppState.leaderboard.forEach(attempt => {
        html += `
            <tr>
                <td>#${attempt.number}</td>
                <td>${attempt.time.toFixed(1)}с</td>
                <td>${attempt.steps}</td>
                <td>
                    <button class="load-maze-btn" onclick="loadLeaderMaze(${attempt.id})">
                        🔄
                    </button>
                </td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    renderGameState();
    leaderboardElement.innerHTML = html;
}

function loadLeaderMaze(mazeId) {
    const mazeData = AppState.savedMazes[mazeId];
    if (!mazeData) {
        alert('Лабиринт не найден!');
        return;
    }
    
    AppState.currentMaze = JSON.parse(JSON.stringify(mazeData.maze));
    AppState.mazeSettings = {...mazeData.settings};
    AppState.startPos = {...mazeData.startPos};
    AppState.endPos = {...mazeData.endPos};
    
    updateUIFromSettings();
    
    renderMazeTable(AppState.currentMaze, document.getElementById('mazeContainer'));
    
    AppState.stepCount = 0;
    Timer.stop();
    AppState.checkPointActive = false;
    
    alert('Лабиринт загружен из таблицы лидеров!');
}

function updateUIFromSettings() {
    const settings = AppState.mazeSettings;
    
    document.getElementById('width').value = settings.width;
    document.getElementById('height').value = settings.height;
    document.getElementById('algorithm').value = settings.algorithm;
    document.getElementById('braid').checked = settings.braid;
    
    document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
        radio.checked = radio.value === settings.difficulty;
    });
}

function updateSavedMazesDisplay() {
    const container = document.getElementById('savedMazesContainer');
    if (!container) return;
    
    const savedMazes = Object.entries(AppState.savedMazes);
    
    if (savedMazes.length === 0) {
        container.innerHTML = '<p class="no-mazes">Нет сохраненных лабиринтов</p>';
        return;
    }
    
    let html = '<ul class="saved-mazes-ul">';
    savedMazes.forEach(([id, mazeData]) => {
        const leaderEntry = AppState.leaderboard.find(entry => entry.id.toString() === id);
        html += `
            <li class="saved-maze-li">
                <div class="maze-info">
                    <strong>Лабиринт #${leaderEntry ? leaderEntry.number : '?'}</strong>
                    <small>${leaderEntry ? leaderEntry.time.toFixed(1) + 'с, ' + leaderEntry.steps + ' шагов' : ''}</small>
                </div>
                <div class="maze-actions">
                    <button class="load-maze-btn-small" onclick="loadLeaderMaze(${id})">
                        Загрузить
                    </button>
                    <button class="delete-maze-btn" onclick="deleteSavedMaze(${id})">
                        ✕
                    </button>
                </div>
            </li>
        `;
    });
    container.innerHTML = html + '</ul>';
}

function deleteSavedMaze(mazeId) {
    if (confirm('Удалить этот сохраненный лабиринт?')) {
        delete AppState.savedMazes[mazeId];
        saveLeaderboard();
        updateSavedMazesDisplay();
    }
}


function saveLeaderboard() {
    const dataToSave = {
        leaderboard: AppState.leaderboard.map(attempt => ({
            ...attempt,
            mazeData: null 
        })),
        attemptNumber: AppState.attemptNumber,
        savedMazes: AppState.savedMazes 
    };
    
    localStorage.setItem('mazeData', JSON.stringify(dataToSave));
}

function loadLeaderboard() {
    const savedData = localStorage.getItem('mazeData');
    if (savedData) {
        const data = JSON.parse(savedData);
        AppState.leaderboard = data.leaderboard || [];
        AppState.attemptNumber = data.attemptNumber || 1;
        AppState.savedMazes = data.savedMazes || {};
        AppState.leaderboard.forEach(attempt => {
            if (AppState.savedMazes[attempt.id]) {
                attempt.mazeData = AppState.savedMazes[attempt.id].maze;
                attempt.settings = AppState.savedMazes[attempt.id].settings;
                attempt.startPos = AppState.savedMazes[attempt.id].startPos;
                attempt.endPos = AppState.savedMazes[attempt.id].endPos;
            }
        });
    }
    updateLeaderboardDisplay();
}

function findOptimalPath(maze, start, end) {
    const queue = [{ x: start.x, y: start.y, path: [] }];
    const visited = new Set([`${start.x},${start.y}`]);
    const directions = [{dx:0,dy:-1},{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0}];
    
    while (queue.length > 0) {
        const { x, y, path } = queue.shift();
        if (x === end.x && y === end.y) return path;
        
        for (const { dx, dy } of directions) {
            const nx = x + dx, ny = y + dy, key = `${nx},${ny}`;
            if (ny >= 0 && ny < maze.length && nx >= 0 && nx < maze[0].length && 
                maze[ny][nx] === 0 && !visited.has(key)) {
                visited.add(key);
                queue.push({ x: nx, y: ny, path: [...path, 'move'] });
            }
        }
    }
    return [];
}

function getOptimalPathLength(maze, start, end) {
    return findOptimalPath(maze, start, end).length;
}

function checkWin() {
    if (AppState.player.x === AppState.endPos.x && AppState.player.y === AppState.endPos.y) {
        Timer.stop();
        const elapsed = ((Date.now() - AppState.startTime) / 1000).toFixed(1);
        const optimalSteps = getOptimalPathLength(AppState.currentMaze, AppState.startPos, AppState.endPos);
        const optimal = optimalSteps > 0 ? `${optimalSteps} шагов` : "путь не найден";
        addToLeaderboard(AppState.stepCount, elapsed);
        
        alert(`🎉 Поздравляем! Вы прошли лабиринт!\n\nВаши шаги: ${AppState.stepCount}\nОптимальный путь: ${optimal}\nЗатраченное время: ${elapsed} секунд`);
        
        AppState.stepCount = -1;
        resetPlayerPosition();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        generateBtn: document.getElementById('generateBtn'),
        mazeContainer: document.getElementById('mazeContainer'),
        resetBtn: document.getElementById('resetBtn'),
        checkPointBtn: document.getElementById('checkPointBtn'),
        resetCheckPointBtn: document.getElementById('resetCheckPointBtn'),
        widthInput: document.getElementById('width'),
        heightInput: document.getElementById('height'),
        algorithmSelect: document.getElementById('algorithm'),
        difficultyRadios: document.querySelectorAll('input[name="difficulty"]'),
        braidCheckbox: document.getElementById('braid'),
        clearLeaderboardBtn: document.getElementById('clearLeaderboard')
    };
    
    elements.algorithmSelect.innerHTML = `
        <option value="dfs">DFS (Поиск в глубину)</option>
        <option value="backtracker">Рекурсивный Backtracker</option>
    `;
    
    function generateAndRenderMaze() {
        Object.assign(AppState.mazeSettings, {
            width: parseInt(elements.widthInput.value),
            height: parseInt(elements.heightInput.value),
            algorithm: elements.algorithmSelect.value,
            braid: elements.braidCheckbox ? elements.braidCheckbox.checked : false,
            difficulty: Array.from(elements.difficultyRadios).find(radio => radio.checked)?.value || 'easy'
        });
        
        const mazeArray = generateMazeWithAlgorithm(
            Math.floor(AppState.mazeSettings.width / 2),
            Math.floor(AppState.mazeSettings.height / 2),
            AppState.mazeSettings.algorithm,
            AppState.mazeSettings.braid
        );
        
        Timer.stop();
        AppState.checkPointActive = false;
        renderMazeTable(mazeArray, elements.mazeContainer);
    }
    
    elements.generateBtn.addEventListener('click', generateAndRenderMaze);
    elements.resetBtn.addEventListener('click', resetPlayerPosition);
    elements.checkPointBtn.addEventListener('click', checkPointPosition);
    elements.resetCheckPointBtn.addEventListener('click', goToCheckPointPosition);
    if (elements.braidCheckbox) elements.braidCheckbox.addEventListener('change', generateAndRenderMaze);
    if (elements.clearLeaderboardBtn) {
        elements.clearLeaderboardBtn.addEventListener('click', () => {
            AppState.leaderboard = [];
            AppState.attemptNumber = 1;
            updateLeaderboardDisplay();
            saveLeaderboard();
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
            movePlayer(e.key);
        }
    });
    
    generateAndRenderMaze();
    loadLeaderboard();
});