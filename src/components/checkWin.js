export function checkWin(gameState, winningMessage, currentPlayerName) {
  const winMessage = `${currentPlayerName} wins!`;

  for(let i = 0; i < 3; i++) {
    let rowSum = gameState[i][0] + gameState[i][1] + gameState[i][2];
    let columnSum = gameState[0][i] + gameState[1][i] + gameState[2][i];
    if (rowSum === 3 || columnSum === 3) {
      return winningMessage.innerText = winMessage;
    } else if (rowSum === -3 || columnSum === -3) {
      return winningMessage.innerText = winMessage;
    }
  }

  let diagonalSum = gameState[0][0] + gameState[1][1] + gameState[2][2];
  let secondDiagonalSum = gameState[0][2] + gameState[1][1] + gameState[2][0];
  if (diagonalSum === 3 || secondDiagonalSum === 3) {
    return winningMessage.innerText = winMessage;
  } else if (diagonalSum === -3 || secondDiagonalSum === -3) {
    return winningMessage.innerText = winMessage;
  }
}
