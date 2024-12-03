const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWin(currentTurnClass, cells) {
  return winningCombinations.some(function (combination) {
    return combination.every(function (index) {
      return cells[index].classList.contains(currentTurnClass);
    });
  });
}
