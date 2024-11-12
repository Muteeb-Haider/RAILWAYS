const TILES = {
    EMPTY: { id: 0, img: 'pics/tiles/empty.png', rotations: 1, isPlaceable: true },
    BRIDGE: { id: 1, img: 'pics/tiles/bridge.png', rotations: 1, isPlaceable: true },
    /*_|*/  MOUNTAIN_NORTH: { id: 2, img: 'pics/tiles/mountain_north.png', rotations: 1, isPlaceable: true },
    OASIS: { id: 3, img: 'pics/tiles/oasis.png', rotations: 1, isPlaceable: false },
    /*[-*/MOUNTAIN_EAST: { id: 4, img: 'pics/tiles/mountain_east.png', rotations: 1, isPlaceable: true },
    /*|-*/MOUNTAIN_SOUTH: { id: 5, img: 'pics/tiles/mountain_south.png', rotations: 1, isPlaceable: true },
    /*-]*/ MOUNTAIN_WEST: { id: 6, img: 'pics/tiles/mountain_west.png', rotations: 1, isPlaceable: true },
         BRIDGE_WE: { id: 7, img: 'pics/tiles/bridge_west_east.png', rotations: 1, isPlaceable: true }
   
};
 
 
const RAILS = {
    STRAIGHT: { id: 'STRAIGHT', img: 'pics/tiles/straight_rail.png', rotations: 2 },
    CURVE: { id: 'CURVE', img: 'pics/tiles/curve_rail.png', rotations: 4 },
    BRIDGE_RAIL: { id: 'BRIDGE_RAIL', img: 'pics/tiles/bridge_rail.png', rotations: 1 },
    MOUNTAIN_RAIL_NORTH: { id: 'MOUNTAIN_RAIL_NORTH', img: 'pics/tiles/mountain_rail_north.png', rotations: 1 },
    MOUNTAIN_RAIL_EAST: { id: 'MOUNTAIN_RAIL_EAST', img: 'pics/tiles/mountain_rail_east.png', rotations: 1 },
    MOUNTAIN_RAIL_SOUTH: { id: 'MOUNTAIN_RAIL_SOUTH', img: 'pics/tiles/mountain_rail_south.png', rotations: 1 },
    MOUNTAIN_RAIL_WEST: { id: 'MOUNTAIN_RAIL_WEST', img: 'pics/tiles/mountain_rail_west.png', rotations: 1 },
    BRIDGE_RAIL_WE: { id: 'BRIDGE_RAIL_WE', img: 'pics/tiles/bridge_rail_west_east.png', rotations: 1 },
   
 
};
const LEVELS = {
    easy: [
        [
            [0, 6, 0, 0, 3],
            [0, 0, 0, 1, 3],
            [1, 0, 2, 0, 0],
            [0, 0, 0, 3, 0],
            [0, 0, 4, 0, 0],
        ],
        [
            [3, 0, 7, 0, 0],
            [0, 2, 0, 0, 2],
            [1, 3, 4, 0, 0],
            [0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0],
        ],
      [
            [0, 0, 7, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 2, 1, 0, 0],
            [0, 3, 0, 0, 0],
            [0, 7, 2, 0, 2],
        ],
       [
            [0, 0, 0, 7, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 6, 0, 6],
            [0, 0, 0, 0, 0],
            [0, 0, 3, 4, 0],
        ],
      [
            [0, 0, 7, 0, 0],
            [0, 5, 0, 0, 0],
            [1, 0, 0,4, 0],
            [0, 0, 0, 1, 3],
            [0, 2, 0, 0, 0],
         ],
      ],
    hard: [
        [
            [0, 6, 3, 3, 0, 7, 0],
            [1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [4, 0, 6, 0, 7, 0, 3],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 0, 0],
        ],
        [
            [0, 0, 3, 0, 0, 0, 0],
            [1, 0, 7, 0, 0, 2, 0],
            [0, 0, 7, 0, 0, 0, 1],
            [5, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 6, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0],
        ],
        [
            [0, 0, 7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1],
            [3, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 3, 4, 0, 7, 0, 0],
            [1, 0, 0, 0, 0, 6, 0],
            [0, 0, 3, 4, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 7, 0, 3, 0, 7, 0],
            [0, 0, 2, 0, 6, 0, 0],
            [1, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 0],
            [0, 7, 7, 0, 6, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 5, 0, 3, 0, 0],
            [0, 2, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
 
 
    ]
};// Game state
let gameBoard;
let playerName = '';
let difficulty = 'easy';
let startTime;
let timerInterval;

// DOM Elements
const elements = {
    returnToMenu: document.querySelector('#returnToMenu'),
    menu: document.querySelector('#menu'),
    game: document.querySelector('#game'),
    description: document.querySelector('#description'),
    leaderboard: document.querySelector('#leaderboard'),
    playerName: document.querySelector('#playerName'),
    nameError: document.querySelector('#nameError'),
    easy: document.querySelector('#easy'),
    hard: document.querySelector('#hard'),
    showRules: document.querySelector('#showRules'),
    startGame: document.querySelector('#startGame'),
    newGame: document.querySelector('#newGame'),
    closeDescription: document.querySelector('#closeDescription'),
    closeLeaderboard: document.querySelector('#closeLeaderboard'),
    gameBoard: document.querySelector('#gameBoard'),
    playerInfo: document.querySelector('#playerInfo'),
    timer: document.querySelector('#timer'),
    leaderboardBody: document.querySelector('#leaderboardBody'),
    saveGame: document.querySelector('#saveGameButton'),
    continueSavedGame: document.querySelector('#continueSavedGameContainer'),
    playerNameDisplay: document.querySelector('#playerNameDisplay'),
    // gameDifficulty: document.querySelector('#gameDifficulty'),
    winMessage: document.querySelector('#winMessage'),
    showLeaderboardButton: document.querySelector('#showLeaderboardButton')
};

class GameBoard {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.size = difficulty === 'easy' ? 5 : 7;
        this.levelIndex = Math.floor(Math.random() * LEVELS[difficulty].length);
        this.board = this.initializeBoard();
        this.railPlacements = Array(this.size).fill().map(() => Array(this.size).fill(null));
        this.currentRotation = Array(this.size).fill().map(() => Array(this.size).fill(0));
    }

    initializeBoard() {
        return LEVELS[this.difficulty][this.levelIndex];
    }

    rotateRail(row, col) {
        if (this.railPlacements[row][col]) {
            const rail = this.railPlacements[row][col];
            const maxRotations = RAILS[rail].rotations;
            this.currentRotation[row][col] = (this.currentRotation[row][col] + 1) % maxRotations;
            return true;
        }
        return false;
    }

 
    isValidPlacement(row, col, railType) {
        const tileType = this.board[row][col];
       
        if (tileType === TILES.OASIS.id) return false;
       
        // Check for bridge
        if (tileType === TILES.BRIDGE.id && railType !== 'BRIDGE_RAIL') return false;
        if (tileType === TILES.BRIDGE_WE.id && railType !== 'BRIDGE_RAIL_WE') return false;
     
        // Check for mountains with specific orientations
        if (tileType === TILES.MOUNTAIN_NORTH.id && railType !== 'MOUNTAIN_RAIL_NORTH') return false;
        if (tileType === TILES.MOUNTAIN_EAST.id && railType !== 'MOUNTAIN_RAIL_EAST') return false;
        if (tileType === TILES.MOUNTAIN_SOUTH.id && railType !== 'MOUNTAIN_RAIL_SOUTH') return false;
        if (tileType === TILES.MOUNTAIN_WEST.id && railType !== 'MOUNTAIN_RAIL_WEST') return false;
       
        return true;
    }
 
 
    placeRail(row, col, railType) {
        if (this.isValidPlacement(row, col, railType)) {
            this.railPlacements[row][col] = railType;
            return true;
        }
        return false;
    }

    checkWinCondition() {
        const allRequiredTouched = this.checkAllRequiredCellsTouched();
        const noEmptyCells = this.checkEmptyCells();
        const closedLoop = this.checkClosedLoop();
        return allRequiredTouched && noEmptyCells && closedLoop;
    }

    checkAllRequiredCellsTouched() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const tileType = this.board[row][col];
                if (TILES[Object.keys(TILES)[tileType]].isPlaceable) {
                    if (!this.railPlacements[row][col]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    checkEmptyCells() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const tileType = this.board[row][col];
                if (!TILES[Object.keys(TILES)[tileType]].isPlaceable) {
                    if (this.railPlacements[row][col]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    checkClosedLoop() {
        const visited = Array.from({ length: this.size }, () => Array(this.size).fill(false));
        let startRow, startCol;

        // Find the first cell with a rail
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.railPlacements[row][col]) {
                    startRow = row;
                    startCol = col;
                    break;
                }
            }
            if (startRow !== undefined) break;
        }

        if (startRow === undefined) return false;
        const isLoop = this.dfs(startRow, startCol, visited, -1, -1, startRow, startCol);
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.isCellRequired(row, col) && !visited[row][col]) {
                    return false;
                }
            }
        } return isLoop;
    }

    dfs(row, col, visited, fromRow, fromCol, startRow, startCol) {
        if (visited[row][col]) return false;
        visited[row][col] = true;

        const neighbors = this.getNeighbors(row, col);
        let loopFound = false;

        for (const { neighborRow, neighborCol } of neighbors) {
            if (neighborRow === fromRow && neighborCol === fromCol) continue;

            if (neighborRow === startRow && neighborCol === startCol) {
                loopFound = true;
            }

            loopFound = this.dfs(neighborRow, neighborCol, visited, row, col, startRow, startCol) || loopFound;
        }

        return loopFound;
    }


    getNeighbors(row, col) {
        const neighbors = [];
        const directions = [
            { dRow: -1, dCol: 0 }, // Up
            { dRow: 1, dCol: 0 },  // Down
            { dRow: 0, dCol: -1 }, // Left
            { dRow: 0, dCol: 1 }   // Right
        ];

        for (const { dRow, dCol } of directions) {
            const neighborRow = row + dRow;
            const neighborCol = col + dCol;

            if (this.isInBounds(neighborRow, neighborCol) && this.railPlacements[neighborRow][neighborCol]) {
                neighbors.push({ neighborRow, neighborCol });
            }
        }

        return neighbors;
    }


    isInBounds(row, col) {
        return row >= 0 && row < this.size && col >= 0 && col < this.size;
    }

    // Check if a cell is required to be touched
    isCellRequired(row, col) {
        return this.board[row][col] && this.railPlacements[row][col];
    }
}

// Game Functions
const initializeGame = () => {
    gameBoard = new GameBoard(difficulty);
    renderBoard();
    startTimer();
    elements.playerNameDisplay.textContent = playerName;
};
const handleCellClick = (row, col) => {
    const tileType = gameBoard.board[row][col];
    let railType = gameBoard.railPlacements[row][col];
 
    if (tileType === TILES.OASIS.id) return;
 
    if (!railType) {
        switch (tileType) {
            case TILES.BRIDGE.id:
                railType = 'BRIDGE_RAIL';
                break;
            case TILES.BRIDGE_WE.id:
                railType = 'BRIDGE_RAIL_WE';
                break;
            case TILES.MOUNTAIN_NORTH.id:
                railType = 'MOUNTAIN_RAIL_NORTH';
                break;
            case TILES.MOUNTAIN_EAST.id:
                railType = 'MOUNTAIN_RAIL_EAST';
                break;
            case TILES.MOUNTAIN_SOUTH.id:
                railType = 'MOUNTAIN_RAIL_SOUTH';
                break;
            case TILES.MOUNTAIN_WEST.id:
                railType = 'MOUNTAIN_RAIL_WEST';
                break;
            default:
                railType = 'STRAIGHT';
        }
    } else if (tileType === TILES.EMPTY.id) {
        railType = (railType === 'STRAIGHT') ? 'CURVE' : 'STRAIGHT';
    }
 
    if (gameBoard.placeRail(row, col, railType)) {
        gameBoard.railPlacements[row][col] = railType;
        gameBoard.currentRotation[row][col] = 0;
        highlightCell(row, col);
        renderBoard();
        checkGameCompletion();
    }
};
const renderBoard = () => {
    elements.gameBoard.innerHTML = '';
    for (let i = 0; i < gameBoard.size; i++) {
        const row = document.createElement('div');
        row.className = 'board-row';
        for (let j = 0; j < gameBoard.size; j++) {
            const cell = document.createElement('div');
            cell.className = 'board-cell';
            const tileType = gameBoard.board[i][j];
            const railType = gameBoard.railPlacements[i][j];
           
            // Create and append the base tile image
            const tileImg = document.createElement('img');
            let tileKey;
            switch (tileType) {
                case 0: tileKey = 'EMPTY'; break;
                case 1: tileKey = 'BRIDGE'; break;
                case 2: tileKey = 'MOUNTAIN_NORTH'; break;
                case 3: tileKey = 'OASIS'; break;
                case 4: tileKey = 'MOUNTAIN_EAST'; break;
                case 5: tileKey = 'MOUNTAIN_SOUTH'; break;
                case 6: tileKey = 'MOUNTAIN_WEST'; break;
                case 7: tileKey = 'BRIDGE_WE'; break;
               
                default: tileKey = 'EMPTY';
            }
 
            tileImg.src = TILES[tileKey].img;
            tileImg.alt = tileKey;
            tileImg.className = 'base-tile';
            cell.appendChild(tileImg);
 
            // If there's a rail placement, add the rail image on top
            if (railType) {
                const railImg = document.createElement('img');
                railImg.src = RAILS[railType].img;
                railImg.alt = railType;
                railImg.className = 'rail-tile';
                railImg.style.transform = `rotate(${gameBoard.currentRotation[i][j] * 90}deg)`;
                cell.appendChild(railImg);
            }
 
            cell.addEventListener('click', () => handleCellClick(i, j));
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                handleRightClick(i, j);
            });
            row.appendChild(cell);
        }
        elements.gameBoard.appendChild(row);
    }
};
 
const handleRightClick = (row, col) => {
    if (gameBoard.rotateRail(row, col)) {
        highlightCell(row, col);
        renderBoard();
        checkGameCompletion();
    }
};

const highlightCell = (row, col) => {
    const cells = document.querySelectorAll('.board-cell');
    const index = row * gameBoard.size + col;
    cells[index].classList.add('highlight');
    setTimeout(() => {
        cells[index].classList.remove('highlight');
    }, 300);
};

const startTimer = (elapsedTime = 0) => {
    startTime = Date.now() - elapsedTime;
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
};

const updateTimer = () => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const saveGameState = () => {
    const gameState = {
        board: gameBoard.board,
        railPlacements: gameBoard.railPlacements,
        currentRotation: gameBoard.currentRotation,
        playerName: playerName,
        difficulty: difficulty,
        startTime: startTime,
        elapsedTime: Date.now() - startTime
    };
    localStorage.setItem('railwayGameState', JSON.stringify(gameState));

    const saveConfirmation = document.createElement('div');
    saveConfirmation.className = 'save-confirmation';
    saveConfirmation.textContent = 'Game Saved!';
    document.body.appendChild(saveConfirmation);

    setTimeout(() => saveConfirmation.remove(), 2000);
};
const loadGameState = () => {
    const savedState = localStorage.getItem('railwayGameState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            playerName = state.playerName;
            difficulty = state.difficulty;

            gameBoard = new GameBoard(state.difficulty);
            gameBoard.board = state.board;
            gameBoard.railPlacements = state.railPlacements;
            gameBoard.currentRotation = state.currentRotation;

            hideElement(elements.menu);
            showElement(elements.game);

            // Add this line to update the player name display
            elements.playerNameDisplay.textContent = playerName;

            renderBoard();
            startTimer(state.elapsedTime);

            return true;
        } catch (error) {
            console.error("Error loading game state:", error);
        }
    }
    return false;
};
const checkForSavedGame = () => {
    const savedState = localStorage.getItem('railwayGameState');
    elements.continueSavedGame.innerHTML = '';

    if (savedState) {
        const continueButton = document.createElement('button');
        continueButton.className = 'continue-game-button';
        continueButton.textContent = 'CONTINUE SAVED GAME';
        continueButton.addEventListener('click', loadGameState);
        elements.continueSavedGame.appendChild(continueButton);
    }
};
const updateLeaderboard = () => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
    console.log('Updating leaderboard with data:', leaderboard);
    elements.leaderboardBody.innerHTML = '';

    ['easy', 'hard'].forEach(diff => {
        const diffLeaderboard = leaderboard[diff] || [];
        console.log(`${diff.toUpperCase()} leaderboard:`, diffLeaderboard);

        elements.leaderboardBody.innerHTML += `
            <tr><th colspan="4">${diff.toUpperCase()} Mode</th></tr>
            ${diffLeaderboard.map((entry, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${entry.name}</td>
                    <td>${entry.time}s</td>
                    <td>${diff}</td>
                </tr>
            `).join('')}
        `;
    });
    console.log('Updated leaderboard HTML:', elements.leaderboardBody.innerHTML);
};
const setDifficulty = (level) => {
    difficulty = level;
    elements.easy.classList.toggle('selected', level === 'easy');
    elements.hard.classList.toggle('selected', level === 'hard');
};

const startGame = () => {
    playerName = elements.playerName.value.trim();
    if (!playerName) {
        showElement(elements.nameError);
        return;
    }

    hideElement(elements.nameError);
    hideElement(elements.menu);
    showElement(elements.game);
    elements.playerNameDisplay.textContent = playerName;
    initializeGame();
};

function checkGameCompletion() {
    console.log("Starting win condition checks:");
    console.log("1. Checking required cells touched:", gameBoard.checkAllRequiredCellsTouched());
    console.log("2. Checking empty cells:", gameBoard.checkEmptyCells());
    console.log("3. Checking closed:", gameBoard.checkClosedLoop())

    const isWin = gameBoard.checkWinCondition();
    console.log("Final result:", isWin);

    if (isWin) {
        showWinMessage()


    } else {


    }
}
function generateLeaderboardHTML(diff) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
    const diffLeaderboard = leaderboard[diff] || [];

    return diffLeaderboard
        .map((entry, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.time}s</td>
            </tr>
        `)
        .join('');
}

const saveToLeaderboard = (name, diff, time) => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
    if (!leaderboard[diff]) {
        leaderboard[diff] = [];
    }
    leaderboard[diff].push({ name, time });
    leaderboard[diff].sort((a, b) => a.time - b.time);
    leaderboard[diff] = leaderboard[diff].slice(0, 10); // Keep top 10
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};
const showWinMessage = () => {
    clearInterval(timerInterval);
    const winMessageElement = document.querySelector('#winMessage');
    const winMessageContent = winMessageElement.querySelector('.modal-content');

    // Save to leaderboard
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    saveToLeaderboard(playerName, difficulty, timeTaken);

    winMessageContent.innerHTML = `
        <h2>Congratulations ${playerName}!</h2>
        <p>You completed the ${difficulty} puzzle in ${timeTaken} seconds!</p>
        <h3>Leaderboard - ${difficulty.toUpperCase()} Mode</h3>
        <div id="winLeaderboard">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateLeaderboardHTML(difficulty)}
                </tbody>
            </table>
        </div>
        <button id="continueGame">Play Again</button>
        <button id="notContinueGame">Return to Menu</button>
    `;

    // Add event listeners after the buttons are created
    const continueGameBtn = winMessageContent.querySelector('#continueGame');
    const notContinueGameBtn = winMessageContent.querySelector('#notContinueGame');

    if (continueGameBtn) {
        continueGameBtn.addEventListener('click', () => {
            hideElement(winMessageElement);
            startNewGame();
        });
    }

    if (notContinueGameBtn) {
        notContinueGameBtn.addEventListener('click', () => {
            hideElement(winMessageElement);
            returnToMenuFunction();
        });
    }

    showElement(winMessageElement);
};

const startNewGame = () => {
    clearInterval(timerInterval);
    gameBoard = new GameBoard(difficulty);
    renderBoard();
    startTimer();
    elements.playerNameDisplay.textContent = playerName;

    hideElement(elements.menu);
    showElement(elements.game);
};

const returnToMenuFunction = () => {
    clearInterval(timerInterval);
    gameBoard = null;
    startTime = null;
    elements.playerName.value = '';
    hideElement(elements.game);
    showElement(elements.menu);
    checkForSavedGame();
};

const hideElement = (element) => {
    if (element) {
        element.classList.add('hidden');
    }
};

const showElement = (element) => {
    if (element) {
        element.classList.remove('hidden');
    }
};

const initializeEventListeners = () => {
    elements.returnToMenu.addEventListener('click', () => {
        clearInterval(timerInterval);
        hideElement(elements.game);
        showElement(elements.menu);
        elements.playerName.value = '';
        gameBoard = null;
        startTime = null;
        checkForSavedGame();
    });

    elements.easy.addEventListener('click', () => setDifficulty('easy'));
    elements.hard.addEventListener('click', () => setDifficulty('hard'));

    elements.showRules.addEventListener('click', () => showElement(elements.description));
    elements.closeDescription.addEventListener('click', () => hideElement(elements.description));

    elements.startGame.addEventListener('click', startGame);
    elements.newGame.addEventListener('click', () => {
        clearInterval(timerInterval);
        initializeGame();
    });

    elements.saveGame.addEventListener('click', saveGameState);

    elements.showLeaderboardButton.addEventListener('click', () => {
        updateLeaderboard();
        showElement(elements.leaderboard);
    });

    elements.closeLeaderboard.addEventListener('click', () => hideElement(elements.leaderboard));
};

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    checkForSavedGame();
});

