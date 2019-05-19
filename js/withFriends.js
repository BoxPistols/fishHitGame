console.log("hey");

document.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");

  const body = document.querySelector(".wrap");

  body.addEventListener("mousemove",
    function(e) {
      const item = document.querySelector(".tako");
      item.style.position = "fixed";
      item.style.left = -80 + e.clientX + "px";
      item.style.top = 20 + e.clientY + "px";
      item.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item2 = document.querySelector(".hit");
      item2.style.position = "fixed";
      item2.style.left = -140 + e.clientX + "px";
      item2.style.top = -80 + e.clientY + "px";
      item2.classList.add("getFriend");
    },
    false
  );

  //////ADD
  body.addEventListener(
    "mousemove",
    function(e) {
      const item00 = document.querySelector(".Nakama3");
      item00.style.position = "fixed";
      item00.style.left = -80 + e.clientX + "px";
      item00.style.top = 20 + e.clientY + "px";
      item00.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item01 = document.querySelector(".Nakama4");
      item01.style.position = "fixed";
      item01.style.left = -80 + e.clientX + "px";
      item01.style.top = 20 + e.clientY + "px";
      item01.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item3 = document.querySelector(".NakamaTsuppari");
      item3.style.position = "fixed";
      item3.style.left = -60 + e.clientX + "px";
      item3.style.top = -80 + e.clientY + "px";
      item3.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item4 = document.querySelector(".NakamaUkiwa");
      item4.style.position = "fixed";
      item4.style.left = 20 + e.clientX + "px";
      item4.style.top = -60 + e.clientY + "px";
      item4.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item5 = document.querySelector(".NakamaUkiwa2-1");
      item5.style.position = "fixed";
      item5.style.left = 40 + e.clientX + "px";
      item5.style.top = -10 + e.clientY + "px";
      item5.classList.add("getFriend");
    },
    false
  );

  body.addEventListener(
    "mousemove",
    function(e) {
      const item6 = document.querySelector(".Fugu");
      item6.style.position = "fixed";
      item6.style.left = 60 + e.clientX + "px";
      item6.style.top = -10 + e.clientY + "px";
      item6.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item7 = document.querySelector(".tako-y");
      item7.style.position = "fixed";
      item7.style.left = -30 + e.clientX + "px";
      item7.style.top = 40 + e.clientY + "px";
      item7.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item8 = document.querySelector(".napo");
      item8.style.position = "fixed";
      item8.style.left = 40 + e.clientX + "px";
      item8.style.top = -0 + e.clientY + "px";
      item8.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item9 = document.querySelector(".manboo");
      item9.style.position = "fixed";
      item9.style.left = 30 + e.clientX + "px";
      item9.style.top = -20 + e.clientY + "px";
      item9.classList.add("getFriend");
    },
    false
  );


});
