/*
  Create Box
*/
for (let i = 1; i < 250; i++) {

  const divBox = document.createElement('div');
  divBox.classList.add('box');

  const hitBox = document.createElement('div');
  hitBox.classList.add('hit');

  divBox.textContent = i;

  divBox.addEventListener('mouseover', e => {

    // マウスオーバーした時の基本の挙動
    divBox.classList.add('hoverAction');

    //　これらの番号にたいしていイベントを起こす
    if (divBox.textContent == 10 || divBox.textContent == 105 || divBox.textContent == 115 || divBox.textContent == 80 || divBox.textContent == 185 || divBox.textContent == 75) {
      divBox.textContent = '';
      divBox.classList.add('hit');
    };

    // if (divBox.textContent == 110 || divBox.textContent == 70) {
    //   divBox.textContent = '';
    //   divBox.style.background = 'teal';
    //   divBox.classList.add('lose');
    // };

    /* -------------------------------------
      キャラごとに追加していく箇所
     --------------------------------------*/

    // タコのトリガー追加
    if (divBox.textContent == 59) {
      divBox.classList.add('tako');
    };



    /* ====== コーチン ＝＝＝＝＝ */


  });

  const wrap = document.querySelector('.wrap');
  wrap.appendChild(divBox);

}
