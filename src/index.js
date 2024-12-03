import './style.css';
import { startGame } from './components/startGame';
import { checkWin } from './components/checkWin';
import { resetGame } from './components/resetGame';
import { checkDraw } from './components/checkDraw';
import { markPosition } from './components/markPosition';

const firstPlayerNameInput = document.querySelector('.first-player-input');
const secondPlayerNameInput = document.querySelector('.second-player-input');

const playerOClass = 'circle';
const playerXClass = 'cross';

const startGameButton = document.querySelector('.start-game-button');
const startWrapper = document.querySelector('.start-wrapper');
const currentTurnWrapper = document.querySelector('.current-turn');

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const bottomControls = document.querySelector('.winning-message-wrapper');
const winningMessage = document.querySelector('.winning-message');
const restartButton = document.querySelector('.restart-button');
let isFirstPlayerTurn = true;

let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

startGameButton?.addEventListener('click', function () {
  startGame(
    board,
    firstPlayerNameInput,
    secondPlayerNameInput,
    currentTurnWrapper,
    startWrapper,
  );
});

cells.forEach(function (cell) {
  cell.addEventListener('click', function () {
    const firstPlayerName = firstPlayerNameInput?.value;
    const secondPlayerName = secondPlayerNameInput?.value;
    const currentTurnClass = isFirstPlayerTurn ? playerXClass : playerOClass;
    const currentPlayerName = isFirstPlayerTurn ? secondPlayerName : firstPlayerName;
    cell.classList.add(currentTurnClass);
    markPosition(gameState, isFirstPlayerTurn, cell);

    if ((checkWin(gameState, winningMessage, currentPlayerName)) || (checkDraw(gameState, winningMessage))) {
      bottomControls?.classList.add('visible');
      board.classList.add('disabled');
    }
    else {
      currentTurnWrapper.innerText = 'Current turn: ' + currentPlayerName;
      isFirstPlayerTurn = !isFirstPlayerTurn;
    }
  });
});

restartButton.addEventListener('click', function () {
  cells.forEach(function (cell) {
    cell.classList.remove('cross', 'circle');
  });
  resetGame(
    board,
    bottomControls,
    firstPlayerNameInput,
    secondPlayerNameInput,
    currentTurnWrapper,
    startWrapper,
    gameState,
  );
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
});
