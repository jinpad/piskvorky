'use strict';

const circlePlays = document.querySelector('#circle_symbole');
const crossPlays = document.querySelector('#cross_symbole');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonAfterClick = e.target;
    circlePlays.classList.toggle('circle_not_plays');
    crossPlays.classList.toggle('cross_plays');

    if (circlePlays.className === 'circle_plays') {
      button.classList.add('fill_cross');
      button.disabled = 'true';
    } else {
      button.classList.add('fill_circle');
      button.disabled = 'true';
    }
    isWinningMove(buttonAfterClick);
    if (isWinningMove(buttonAfterClick) === true) {
      confirm(confirmMessage());
      location.reload();
    }
    console.log(isWinningMove(buttonAfterClick));
  });
});

const confirmMessage = () => {
  if (circlePlays.className === 'circle_plays') {
    return 'Vyhrál křížek. Spustit novou hru?';
  } else {
    return 'Vyhrálo kolečko. Spustit novou hru?';
  }
};

const boardSize = 10; // 10x10

const getPosition = (button) => {
  let buttonIndex = 0;
  while (buttonIndex < buttons.length) {
    if (button === buttons[buttonIndex]) {
      break;
    }
    buttonIndex++;
  }

  return {
    row: Math.floor(buttonIndex / boardSize),
    column: buttonIndex % boardSize,
  };
};

const getField = (row, column) => buttons[row * boardSize + column];

const getSymbol = (button) => {
  // Název třídy přizpůsob tvému kódu.
  if (button.classList.contains('fill_cross')) {
    return 'cross';
  } else if (button.classList.contains('fill_circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (button) => {
  const origin = getPosition(button);
  const symbol = getSymbol(button);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
