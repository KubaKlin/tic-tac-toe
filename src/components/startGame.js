const startWrapper = document.querySelector('.start-wrapper');
const currentTurnWrapper = document.querySelector('.current-turn');

export function startGame(board, firstPlayerNameInput, secondPlayerNameInput) {
  const firstPlayerName = firstPlayerNameInput?.value;
  board.classList.remove('disabled');

  if (firstPlayerNameInput.value && secondPlayerNameInput.value) {
    board?.classList.add('visible');
    startWrapper?.classList.add('hidden');
    currentTurnWrapper.innerText = `Current turn: ${firstPlayerName}`;
  } else {
    if (firstPlayerNameInput.value === '') {
      firstPlayerNameInput.placeholder = 'Name cannot be empty';
    }
    if (secondPlayerNameInput.value === '') {
      secondPlayerNameInput.placeholder = 'Name cannot be empty';
    }
  }
}
