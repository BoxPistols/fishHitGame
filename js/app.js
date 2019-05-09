'use strict';

/*
const box = document.querySelector('.box');

box.addEventListener('click', e => {
  // box.style.background = 'pink';
  // box.style.borderRadius = '50%';
  box.classList.toggle('circle');
*/


for (let i = 0; i < 340; i++) {

  const divBox = document.createElement('div');
  divBox.classList.add('box');


  divBox.textContent = i;


  divBox.addEventListener('mouseover', e => {
    divBox.classList.add('circle');


    if(divBox.textContent == 10){
      divBox.textContent = 'あたり';
      divBox.style.background = 'crimson';
      divBox.classList.add('hit');
    };

    if(divBox.textContent == 100){
      divBox.textContent = 'あたり';
      divBox.style.background = 'crimson';
      divBox.classList.add('hit');

    };

    if(divBox.textContent == 200){
      divBox.textContent = 'あたり';
      divBox.style.background = 'crimson';
      divBox.classList.add('hit');
    };

  });

  const wrap = document.querySelector('.wrap');
  wrap.appendChild(divBox);
}
// });
