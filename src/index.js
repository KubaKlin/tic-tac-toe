import './style.css';
import { startGame } from './components/startGame';
import { checkWin } from './components/checkWin';
import { resetGame } from './components/resetGame';
import { checkDraw } from './components/checkDraw';

const firstPlayerNameInput = document.querySelector('.first-player-input');
const secondPlayerNameInput = document.querySelector('.second-player-input');

const startGameButton = document.querySelector('.start-game-button');
const startWrapper = document.querySelector('.start-wrapper');
const currentTurnWrapper = document.querySelector('.current-turn');

const playerOClass = 'circle';
const playerXClass = 'cross';

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const bottomControls = document.querySelector('.winning-message-wrapper');
const winningMessage = document.querySelector('.winning-message');
const restartButton = document.querySelector('.restart-button');
let isSecondPlayerTurn = false;

startGameButton?.addEventListener('click', function() {
  startGame(board, firstPlayerNameInput, secondPlayerNameInput, currentTurnWrapper, startWrapper);
})

cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    const firstPlayerName = firstPlayerNameInput?.value;
    const secondPlayerName = secondPlayerNameInput?.value;
    let currentTurn = isSecondPlayerTurn ? playerXClass : playerOClass;
    let currentPlayer = isSecondPlayerTurn ? firstPlayerName : secondPlayerName;
    cell.classList.add(currentTurn);
    if (checkWin(currentTurn, cells)) {
      bottomControls?.classList.add('visible');
      winningMessage.innerText = (`${isSecondPlayerTurn ? secondPlayerName : firstPlayerName} wins!`);
    } if (checkDraw(playerXClass, playerOClass, cells)) {
      bottomControls?.classList.add('visible');
      winningMessage.innerText = ('It`s a draw!');
    } else {
      currentTurnWrapper.innerText = ('Current turn: ' + currentPlayer);
      isSecondPlayerTurn = !isSecondPlayerTurn;
    }
  })
})

restartButton.addEventListener('click', function() {
  cells.forEach(function(cell) {
    cell.classList.remove('cross', 'circle');
  })
  resetGame(board, bottomControls, firstPlayerNameInput, secondPlayerNameInput, currentTurnWrapper, startWrapper);
})
