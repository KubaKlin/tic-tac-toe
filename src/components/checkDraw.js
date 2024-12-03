export function checkDraw(playerXClass, playerOClass, cells) {
  const boardCells = Array.from(cells);
  return boardCells.every(function (cell) {
    return (
      cell.classList.contains(playerXClass) ||
      cell.classList.contains(playerOClass)
    );
  });
}
