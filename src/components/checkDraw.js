export function checkDraw(gameState, winningMessage) {
  if (
    gameState[0].indexOf(null) === -1 &&
    gameState[1].indexOf(null) === -1 &&
    gameState[2].indexOf(null) === -1
  ) {
    winningMessage.innerText = 'It`s a draw!'
    return winningMessage.innerText;
  }
}
