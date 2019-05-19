// const hohee = document.querySelector(".score");
// console.log(hohee.innerHTML);
// if (hohee = "0") {
//   console.log("monnge");
// }

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
      スコア設定
     --------------------------------------*/
    // TODO： ポイント相談
    let totalScore = () => {
      const score = document.querySelector(".score").innerHTML;
      let totalScore = parseInt(score);
      document.querySelector(".score").innerHTML = totalScore + 1;
      if (totalScore >= 10) {
        youWin();
      } else {
        youLose();
      }
      console.log(totalScore);
    };

    const youWin = () => {
      document.querySelector(".win").innerHTML = "<p><span>なかまがたくさんできたっ！<br>こわくないぞ！</span></p>";
      $(".win").addClass("active").removeClass("lose");
      const bossArea = document.querySelector(".bossArea");
      bossArea.classList.add('boss-is-Lose');
      bossArea.classList.remove('boss-is-Win');
    };

    const youLose = () => {
      document.querySelector(".win").innerHTML = "<p><span>え？わたしのねんしゅうひくすぎ！？</span></p>";
      $(".win").addClass("lose").removeClass("active");
      const bossArea = document.querySelector(".bossArea");
      bossArea.classList.add('boss-is-Win');
      bossArea.classList.remove('boss-is-Lose');
    };

    /* -------------------------------------
      キャラごとに追加していく箇所
     --------------------------------------*/

    // タコのトリガー追加
    if (divBox.textContent == 59) {
      divBox.classList.add('tako');
      totalScore();
      return;
    };


    /* ====== コーチン Start ＝＝＝＝＝ */

    // トリガー追加
    if (divBox.textContent == 1 || divBox.textContent == 60 || divBox.textContent == 150 || divBox.textContent == 227) {
      divBox.classList.add('Nakama3');
      totalScore();
      return;
    };

    if (divBox.textContent == 8 || divBox.textContent == 70 || divBox.textContent == 161) {
      divBox.classList.add('Nakama4');
      totalScore();
      return;
    };

    if (divBox.textContent == 14 || divBox.textContent == 79 || divBox.textContent == 168) {
      divBox.classList.add('NakamaTsuppari');
      totalScore();
      return;
    };

    if (divBox.textContent == 19 || divBox.textContent == 84 || divBox.textContent == 174 || divBox.textContent == 230) {
      divBox.classList.add('NakamaUkiwa');
      totalScore();
      return;
    };

    if (divBox.textContent == 22 || divBox.textContent == 102 || divBox.textContent == 181 || divBox.textContent == 234) {
      divBox.classList.add('NakamaUkiwa2-1');
      totalScore();
      return;
    };

    if (divBox.textContent == 28 || divBox.textContent == 113 || divBox.textContent == 205) {
      divBox.classList.add('Fugu');
      totalScore();
      return;
    };

    if (divBox.textContent == 56 || divBox.textContent == 137 || divBox.textContent == 221 || divBox.textContent == 239) {
      divBox.classList.add('tako-y');
      totalScore();
      return;
    };

    if (divBox.textContent == 36 || divBox.textContent == 125 || divBox.textContent == 216) {
      divBox.classList.add('napo');
      totalScore();
      return;
    };

    if (divBox.textContent == 32 || divBox.textContent == 116 || divBox.textContent == 207) {
      divBox.classList.add('manboo');
      totalScore();
      return;
    };

    /* ====== コーチン End ＝＝＝＝＝ */


    /* -------------------------------------
     キャラごとに追加していく箇所 あさダッチバージョン！！
    --------------------------------------*/
    //下段　海底
    if (divBox.textContent == 201 || divBox.textContent == 210 || divBox.textContent == 219 || divBox.textContent == 232 || divBox.textContent == 249) {
      divBox.textContent = '';
      divBox.classList.add('wakame');
    };

    if (divBox.textContent == 202 || divBox.textContent == 212 || divBox.textContent == 223 || divBox.textContent == 236) {
      divBox.textContent = '';
      divBox.classList.add('sango');
    };

    if (divBox.textContent == 204 || divBox.textContent == 214 || divBox.textContent == 225 || divBox.textContent == 238) {
      divBox.textContent = '';
      divBox.classList.add('shell');
    };

    if (divBox.textContent == 208 || divBox.textContent == 217 || divBox.textContent == 228 || divBox.textContent == 246 || divBox.textContent == 250) {
      divBox.textContent = '';
      divBox.classList.add('hitode');
    };


    //下から二番目 一番下もあり
    if (divBox.textContent == 203 || divBox.textContent == 172 || divBox.textContent == 192) {
      divBox.textContent = '';
      divBox.classList.add('yadokari');
    };

    if (divBox.textContent == 154 || divBox.textContent == 176 || divBox.textContent == 198) {
      divBox.textContent = '';
      divBox.classList.add('umiusi_w');
    };

    if (divBox.textContent == 156 || divBox.textContent == 179) {
      divBox.textContent = '';
      divBox.classList.add('kaniy');
    };

    if (divBox.textContent == 158 || divBox.textContent == 183 || divBox.textContent == 194) {
      divBox.textContent = '';
      divBox.classList.add('ebi');
    };

    if (divBox.textContent == 163 || divBox.textContent == 185) {
      divBox.textContent = '';
      divBox.classList.add('umiusi_p');
    };

    if (divBox.textContent == 165 || divBox.textContent == 188) {
      divBox.textContent = '';
      divBox.classList.add('umiusi_p');
    };

    if (divBox.textContent == 170 || divBox.textContent == 190 || divBox.textContent == 200) {
      divBox.textContent = '';
      divBox.classList.add('kanik');
    };


    // 真ん中　三段目
    if (divBox.textContent == 105 || divBox.textContent == 130) {
      divBox.textContent = '';
      divBox.classList.add('fugu');
    };

    if (divBox.textContent == 109 || divBox.textContent == 135) {
      divBox.textContent = '';
      divBox.classList.add('kuragek');
    };

    if (divBox.textContent == 111 || divBox.textContent == 139) {
      divBox.textContent = '';
      divBox.classList.add('takok');
    };

    if (divBox.textContent == 115 || divBox.textContent == 141) {
      divBox.textContent = '';
      divBox.classList.add('nakama_d');
    };

    if (divBox.textContent == 119 || divBox.textContent == 142) {
      divBox.textContent = '';
      divBox.classList.add('nakama_m');
    };

    if (divBox.textContent == 122 || divBox.textContent == 146) {
      divBox.textContent = '';
      divBox.classList.add('nakama_n');
    };

    if (divBox.textContent == 128) {
      divBox.textContent = '';
      divBox.classList.add('kuragey');
    };

    //上から　二段目
    if (divBox.textContent == 52 || divBox.textContent == 68 || divBox.textContent == 86) {
      divBox.textContent = '';
      divBox.classList.add('nakama_tono');
    };
    if (divBox.textContent == 54 || divBox.textContent == 71 || divBox.textContent == 90) {
      divBox.textContent = '';
      divBox.classList.add('nakama_tsup');
    };
    if (divBox.textContent == 57 || divBox.textContent == 73 || divBox.textContent == 93) {
      divBox.textContent = '';
      divBox.classList.add('kinme');
    };
    if (divBox.textContent == 62 || divBox.textContent == 75 || divBox.textContent == 99) {
      divBox.textContent = 'nakama2';
      divBox.classList.add('');
    };
    if (divBox.textContent == 64 || divBox.textContent == 77) {
      divBox.textContent = '';
      divBox.classList.add('nakama3');
    };
    if (divBox.textContent == 67 || divBox.textContent == 82) {
      divBox.textContent = '';
      divBox.classList.add('takoy');
    };

    //上一番上
    if (divBox.textContent == 3 || divBox.textContent == 25 || divBox.textContent == 37) {
      divBox.textContent = '';
      divBox.classList.add('kurage2');
    };
    if (divBox.textContent == 5 || divBox.textContent == 34 || divBox.textContent == 45) {
      divBox.textContent = '';
      divBox.classList.add('bigfish');
    };
    if (divBox.textContent == 9 || divBox.textContent == 48) {
      divBox.textContent = '';
      divBox.classList.add('nakama1');
    };
    if (divBox.textContent == 12 || divBox.textContent == 25 || divBox.textContent == 50) {
      divBox.textContent = '';
      divBox.classList.add('nakama_ukiwa');
    };
    if (divBox.textContent == 41 || divBox.textContent == 16) {
      divBox.textContent = '';
      divBox.classList.add('ankou');
    };
    if (divBox.textContent == 30 || divBox.textContent == 9) {
      divBox.textContent = '';
      divBox.classList.add('manboo');
    };

    if (divBox.textContent == 59) {
      divBox.classList.add('bigika');
    };

    /* ====== あさダッチバージョン End ＝＝＝＝＝ */
  });

  const wrap = document.querySelector('.wrap');
  wrap.appendChild(divBox);

}
