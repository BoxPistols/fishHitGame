/// Timer

$(function () {
  var sec = 15;
  // var min = 0;
  // var hour = 0;

  var timer;

  // スタート
  $(function () {
    // 00:00:00から開始
    sec = 15;
    // min = 0;
    // hour = 0;
    $('#clock').html('15');
    timer = setInterval(countDown, 1000);

    // $(this).attr('disabled', 'disabled');
    // $('#stop,#reset').removeAttr('disabled');
  });

  var over = document.querySelector('.over');
  var wrap = document.querySelector('.wrap');
  var bossArea = document.querySelector('.bossArea');

  /* カウントダウン */
  function countDown() {
    over.classList.remove('active');
    bossArea.classList.remove('active');

    if (1 <= sec) {
      sec -= 1;
    } else {
      console.log('stop!!');
      over.innerHTML = '<span>Time over</span>';
      clearTimeout(timer);

      over.classList.add('active');
      bossArea.classList.add('active');

      $(wrap).fadeOut();


      return;
    }

    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    // min_number = ('0' + min).slice(-2);
    // hour_number = ('0' + hour).slice(-2);

    $('#clock').html(sec_number);
  }

  // $('.restart').on('click', function () {
  //   console.log('aaa');

  //   over.classList.remove('active');
  //   bossArea.classList.remove('active');

  //   $('#clock').html('00:00:15');
  //   sec = 15;
  //   timer = setInterval(countDown, 1000);
  //   document.querySelector('.over').innerHTML = '<span></span>';
  // });
});