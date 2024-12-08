import { circleValue, crossValue } from './symbolsConstants';

export function markPosition(gameState, isFirstPlayerTurn, cell) {
  const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
  const chosenRow = Math.floor(cellIndex / 3);
  const chosenPositionInRow = cellIndex - 3 * chosenRow;

  if (isFirstPlayerTurn) {
    gameState[chosenRow][chosenPositionInRow] = crossValue;
  } else {
    gameState[chosenRow][chosenPositionInRow] = circleValue;
  }
}
