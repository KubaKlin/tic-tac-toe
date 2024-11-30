export function resetGame(
    bottomControls,
    board,
    firstPlayerNameInput,
    secondPlayerNameInput,
    currentTurnWrapper,
    startWrapper
) {
  bottomControls.classList.remove('visible');
  board.classList.remove('visible');
  firstPlayerNameInput.value = '';
  secondPlayerNameInput.value = '';
  startWrapper.classList.remove('hidden');
  currentTurnWrapper.innerText = ('');
}