export function checkWin(gameState, winningMessage, currentPlayerName) {
  const winMessage = `${currentPlayerName} wins!`;

  for (let i = 0; i < 3; i++) {
    // checking fields values in rows for winning conditions
    const rowSum = gameState[i][0] + gameState[i][1] + gameState[i][2];
    const columnSum = gameState[0][i] + gameState[1][i] + gameState[2][i];
    if (rowSum === 3 || columnSum === 3) {
      winningMessage.innerText = winMessage
      return winningMessage.innerText;
    } if (rowSum === -3 || columnSum === -3) {
      winningMessage.innerText = winMessage
      return winningMessage.innerText;
    }
  }

  const diagonalSum = gameState[0][0] + gameState[1][1] + gameState[2][2];
  const secondDiagonalSum = gameState[0][2] + gameState[1][1] + gameState[2][0];
  if (diagonalSum === 3 || secondDiagonalSum === 3) {
    winningMessage.innerText = winMessage
    return winningMessage.innerText;
  } if (diagonalSum === -3 || secondDiagonalSum === -3) {
    winningMessage.innerText = winMessage
    return winningMessage.innerText;
  }
}
