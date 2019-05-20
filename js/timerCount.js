/// Timer
// 37
var time = 37;

$(function() {
  var sec = time;

  var timer;

  // スタート
  $(function() {
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
      // over.innerHTML = '<span>Time over</span>';
      // over.innerHTML = '<span>Time over</span>　<br> <input type="button" value="もう１回あそぶ！" onclick="window.location.reload();" />'
      clearTimeout(timer);

      over
        .classList
        .add('active');
      bossArea
        .classList
        .add('active');

      // $(wrap).fadeOut();
      const notFriends = document.querySelectorAll('.box:not(.getFriend)');
      $(notFriends).fadeOut(3000);

      // $('bossArea').addClass('end');

      // 結果
      $('.win').addClass('show');

      // //  仕込み　NG
      // let beforeScore = 0;
      // document.querySelector(".score").innerHTML = beforeScore;
      // // console.log(beforeScore);
      //
      // if (beforeScore = "0" ) {
      //   console.log("loseZero");
      //   // alert("0");
      //   document.querySelector(".win").innerHTML = "え？わたしの年収低すぎ！？";
      //   $(".win").addClass("lose").removeClass("active");
      //   $('bossArea').addClass('boss-is-Win');
      //
      // } else {
      //   console.log("Other");
      //   alert("other");
      // }
      //

      return;
    }
    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    $('#clock').html(sec_number);
  }
});
