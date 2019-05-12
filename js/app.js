'use strict';

// window.innerWidth
// window.innerHeight

// let wh = window.innerHeight;
// const info = document.querySelector('.info');
// info.textContent = wh;
//

// 画面サイズ
const myFunc = () => {
  let wd = window.innerWidth;
  let wh = window.innerHeight;
  // let elem = document.querySelector('.wrap');
  const infoWidth = document.querySelector('.info .wd');
  const infoHeight = document.querySelector('.info .wh');
  infoWidth.textContent = wd;
  infoHeight.textContent = wh;
  // let wh = 768;
  // elem.style.height = wh + 'px';
}
window.addEventListener('load', myFunc);
window.addEventListener('resize', myFunc);
// End

var targetElement = document.getElementById("target");

setInterval(function () {
  var clientRect = targetElement.getBoundingClientRect();

  // 画面内の位置
  var x = clientRect.left;
  var y = clientRect.top;

  // ページ内の位置
  var px = window.pageXOffset + clientRect.left;
  var py = window.pageYOffset + clientRect.top;

  // 表示
  for (var a = [
      ["x", x],
      ["y", y],
      ["px", px],
      ["py", py]
    ], i = a.length; i--;) {
    document.getElementById(a[i][0]).textContent = a[i][1];
  }
}, 100);
/*
  Create Box
*/
for (let i = 0; i < 250; i++) {

  const divBox = document.createElement('div');
  divBox.classList.add('box');

  const hitBox = document.createElement('div');
  hitBox.classList.add('hit');

  divBox.textContent = i;

  divBox.addEventListener('mouseover', e => {
    divBox.classList.add('hoverAction');


    if (divBox.textContent == 10 || divBox.textContent == 105 || divBox.textContent == 115 || divBox.textContent == 80 || divBox.textContent == 185 || divBox.textContent == 75) {
      divBox.textContent = 'あたり';
      // divBox.style.background = 'crimson';
      divBox.classList.add('hit');
      // divBox.appendChild(hitBox);
      // hitBox.classList.add('hitpal');
    };

    if (divBox.textContent == 110 || divBox.textContent == 70) {
      divBox.textContent = 'はずれ';
      divBox.style.background = 'teal';
      divBox.classList.add('lose');
    };

    // if (divBox.textContent == 200) {
    //   divBox.textContent = 'あたり';
    //   divBox.style.background = 'crimson';
    //   divBox.classList.add('hit');
    // };

  });

  const wrap = document.querySelector('.wrap');
  wrap.appendChild(divBox);

}
// });