import './style.css';
import { startGame } from "./components/startGame";
import { checkWin } from "./components/checkWin";

const firstPlayerNameInput = document.querySelector('.first-player-input');
const secondPlayerNameInput = document.querySelector('.second-player-input');

const playerO = 'circle';
const playerX = 'cross';

const firstPlayer = firstPlayerNameInput?.value;
const secondPlayer = firstPlayerNameInput?.value;

const startGameButton = document.querySelector('.start-game-button');

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const winningMessage = document.querySelector('.winning-message');
const restartButton = document.querySelector('.restart-button');
let isSecondPlayerTurn = false;

startGameButton?.addEventListener('click', function() {
  startGame(board, firstPlayerNameInput, secondPlayerNameInput);
})

cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    let currentTurn = isSecondPlayerTurn ? playerO : playerX;
    cell.classList.add(currentTurn);
    isSecondPlayerTurn = !isSecondPlayerTurn;
    if (checkWin(currentTurn, cells)) {
      console.log(currentTurn + 'wins!!');
    }
  })
})
