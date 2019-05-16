'use strict';

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
