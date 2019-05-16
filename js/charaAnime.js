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
    // if (divBox.textContent == 10 || divBox.textContent == 105 || divBox.textContent == 115 || divBox.textContent == 80 || divBox.textContent == 185 || divBox.textContent == 75) {
    //   divBox.textContent = '';
    //   divBox.classList.add('hit');
    // };

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

    // トリガー追加

    if (divBox.textContent == 1 || divBox.textContent == 60 || divBox.textContent == 150 || divBox.textContent == 227) {
      divBox.classList.add('Nakama3');
    };

    if (divBox.textContent == 8 || divBox.textContent == 70 || divBox.textContent == 161) {
      divBox.classList.add('Nakama4');
    };

    if (divBox.textContent == 14 || divBox.textContent == 79 || divBox.textContent == 168) {
      divBox.classList.add('NakamaTsuppari');
    };

    if (divBox.textContent == 19 || divBox.textContent == 84 || divBox.textContent == 174 || divBox.textContent == 230) {
      divBox.classList.add('NakamaUkiwa');
    };

    if (divBox.textContent == 22 || divBox.textContent == 102 || divBox.textContent == 181 || divBox.textContent == 234) {
      divBox.classList.add('NakamaUkiwa2-1');
    };

    if (divBox.textContent == 28 || divBox.textContent == 113 || divBox.textContent == 205) {
      divBox.classList.add('Fugu');
    };

    if (divBox.textContent == 56 || divBox.textContent == 137 || divBox.textContent == 221 || divBox.textContent == 239) {
      divBox.classList.add('tako-y');
    };

    if (divBox.textContent == 36 || divBox.textContent == 125 || divBox.textContent == 216) {
      divBox.classList.add('napo');
    };

    if (divBox.textContent == 32 || divBox.textContent == 116 || divBox.textContent == 207) {
      divBox.classList.add('manboo');
    };


});

const wrap = document.querySelector('.wrap');
wrap.appendChild(divBox);

}
