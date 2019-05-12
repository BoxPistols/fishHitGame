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

var targetElement = document.getElementById("target");

setInterval(function() {
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
