console.log("hey");

$(function() {
  const body = document.body;
  // マウスストーカーの作成と追従
  const stalker = document.createElement("div");
  stalker.id = "stalker";
  body.appendChild(stalker);
  body.addEventListener(
    "mousemove",
    function(e) {
      stalker.style.left = e.clientX + "px";
      stalker.style.top = e.clientY + "px";
    },
    false
  );

  // Score
  const totalScore = () => {
    const score = document.querySelector(".score").innerHTML;
    const totalScore = parseInt(score);
    document.querySelector(".score").innerHTML = totalScore + 100;
    if (totalScore >= 500 - 100) {
      youWin();
    }
  };

  const youWin = () => {
    document.querySelector(".over").innerHTML = "You Win!";
    $(".boss").addClass("show");
  };

  // ターゲットのオブジェクトの作成
  $(".box").one("mouseenter", function(e) {
    const item = document.createElement("div");
    item.classList.add("item");
    body.appendChild(item);
    item.style.background = "crimson";
    totalScore();
    return;
  });

  $(".box2").one("mouseenter", function(e) {
    const item2 = document.createElement("div");
    item2.classList.add("item2");
    body.appendChild(item2);
    item2.style.background = "teal";
    totalScore();
    return;
  });

  $(".box3").one("mouseenter", function(e) {
    const item3 = document.createElement("div");
    item3.classList.add("item3");
    item3.style.background = "orange";
    body.appendChild(item3);
    totalScore();
    return;
  });

  $(".box4").one("mouseenter", function(e) {
    const item4 = document.createElement("div");
    item4.classList.add("item4");
    item4.style.background = "purple";
    body.appendChild(item4);
    totalScore();
    return;
  });
  $(".box5").one("mouseenter", function(e) {
    const item5 = document.createElement("div");
    item5.classList.add("item5");
    item5.style.background = "yellow";
    body.appendChild(item5);
    totalScore();
    return;
  });

  // ヒットしたらついてくるオブジェクトを生成、位置は目分量
  // body.addEventListener(
  //   "mousemove",
  //   function(e) {
  //     const item = document.querySelector(".item");
  //     item.style.position = "fixed";
  //     item.style.left = -20 + e.clientX + "px";
  //     item.style.top = 60 + e.clientY + "px";
  //   },
  //   false
  // );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item = document.querySelector(".tako");
      item.style.position = "fixed";
      item.style.left = -80 + e.clientX + "px";
      item.style.top = 20 + e.clientY + "px";
    },
    false
  );


  body.addEventListener(
    "mousemove",
    function(e) {
      const item2 = document.querySelector(".hit");

      //要素取得
      //
      // //要素取得
      // for(var i=0;i<obj.length;i++){
      //   var a = obj[i].innerText;
      //   console.log(a);
      // }

      item2.style.position = "fixed";
      item2.style.left = -140 + e.clientX + "px";
      item2.style.top = -80 + e.clientY + "px";
    },
    false
  );


  body.addEventListener(
    "mousemove",
    function(e) {
      const item3 = document.querySelector(".item3");
      item3.style.position = "fixed";
      item3.style.left = -60 + e.clientX + "px";
      item3.style.top = -80 + e.clientY + "px";
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item4 = document.querySelector(".item4");
      item4.style.position = "fixed";
      item4.style.left = 20 + e.clientX + "px";
      item4.style.top = -60 + e.clientY + "px";
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item5 = document.querySelector(".item5");
      item5.style.position = "fixed";
      item5.style.left = -60 + e.clientX + "px";
      item5.style.top = -10 + e.clientY + "px";
    },
    false
  );

  //   const score = document.querySelector(".score").innerHTML;
  //   const totalScore = parseInt(score);
  //   console.log(totalScore);

  //   if(totalScore > 400){
  //      youWin();
  //    };
});
