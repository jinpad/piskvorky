'use strict';

const circlePlays = document.querySelector('#cross_symbole');
const crossPlays = document.querySelector('#circle_symbole');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    crossPlays.classList.toggle('circle_not_plays');
    circlePlays.classList.toggle('cross_plays');

    if (circlePlays.className === 'cross_plays') {
      button.classList.toggle('fill_cross');
      button.disabled = 'true';
    } else {
      button.classList.toggle('fill_circle');
      button.disabled = 'true';
    }
  });
});
