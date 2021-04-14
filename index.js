'use strict';

const circlePlays = document.querySelector('#circle_symbole');
const crossPlays = document.querySelector('#cross_symbole');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    circlePlays.classList.toggle('circle_not_plays');
    crossPlays.classList.toggle('cross_plays');

    if (circlePlays.className === 'circle_plays') {
      button.classList.add('fill_cross');
      button.disabled = 'true';
    } else {
      button.classList.add('fill_circle');
      button.disabled = 'true';
    }
  });
});
