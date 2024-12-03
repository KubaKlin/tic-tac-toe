import './style.css';
import { startGame } from './components/startGame';
import { checkWin } from './components/checkWin';
import { resetGame } from './components/resetGame';
import { checkDraw } from './components/checkDraw';

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
let isSecondPlayerTurn = false;

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
    const currentTurnClass = isSecondPlayerTurn ? playerXClass : playerOClass;
    const currentPlayerName = isSecondPlayerTurn ? firstPlayerName : secondPlayerName;
    cell.classList.add(currentTurnClass);

    if (checkWin(currentTurnClass, cells)) {
      bottomControls?.classList.add('visible');
      winningMessage.innerText = `${isSecondPlayerTurn ? secondPlayerName : firstPlayerName} wins!`;
      board.classList.add('disabled');
    }
    if (checkDraw(playerXClass, playerOClass, cells)) {
      bottomControls?.classList.add('visible');
      winningMessage.innerText = 'It`s a draw!';
      board.classList.add('disabled');
    } else {
      currentTurnWrapper.innerText = 'Current turn: ' + currentPlayerName;
      isSecondPlayerTurn = !isSecondPlayerTurn;
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
  );
});
