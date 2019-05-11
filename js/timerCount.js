/// Timer
var time = 30;

$(function () {
  var sec = time;

  var timer;

  // スタート
  $(function () {
    // 00:00:00から開始
    sec = time;
    $('#clock').html('Start!');
    timer = setInterval(countDown, 1000);
  });

  var over = document.querySelector('.over');
  var wrap = document.querySelector('.wrap');
  var bossArea = document.querySelector('.bossArea');

  /* カウントダウン */
  function countDown() {
    over
      .classList
      .remove('active');
    bossArea
      .classList
      .remove('active');

    if (1 <= sec) {
      sec -= 1;
    } else {
      console.log('stop!!');
      over.innerHTML = '<span>Time over</span>';
      clearTimeout(timer);

      over
        .classList
        .add('active');
      bossArea
        .classList
        .add('active');

      $(wrap).fadeOut();

      return;
    }
    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    $('#clock').html(sec_number);
  }
});