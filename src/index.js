import './style.css';
import { startGame } from "./components/startGame";

const firstPlayer = 'x';
const secondPlayer = 'circle';
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const startGameButton = document.querySelector('.start-game-button');

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const winningMessage = document.querySelector('.winning-message');
const restartButton = document.querySelector('.restart-button');
let isPlayerOTurn = false;

startGameButton?.addEventListener('click', function() {
  startGame(board);
})