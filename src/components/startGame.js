export function startGame(board, firstPlayerNameInput, secondPlayerNameInput) {
  if (firstPlayerNameInput.value && secondPlayerNameInput.value) {
    firstPlayerNameInput.classList.remove('error');
    secondPlayerNameInput.classList.remove('error');
    board?.classList.add('active');
  } else {
    if (firstPlayerNameInput.value === '') {
      firstPlayerNameInput.placeholder = 'Name cannot be empty';
      firstPlayerNameInput.classList.add('error');
    } if (secondPlayerNameInput.value === '') {
      secondPlayerNameInput.placeholder = 'Name cannot be empty';
      secondPlayerNameInput.classList.add('error');
    }
  }
}