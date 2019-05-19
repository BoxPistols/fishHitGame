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
  body.addEventListener(
    "mousemove",
    function(e) {
      const item10 = document.querySelector(".kuragek");
      item10.style.position = "fixed";
      item10.style.left = 40 + e.clientX + "px";
      item10.style.top = -30 + e.clientY + "px";
      item10.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item11 = document.querySelector(".takok");
      item11.style.position = "fixed";
      item11.style.left = 60 + e.clientX + "px";
      item11.style.top = -40 + e.clientY + "px";
      item11.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item12 = document.querySelector(".nakama_d");
      item12.style.position = "fixed";
      item12.style.left = 70 + e.clientX + "px";
      item12.style.top = -50 + e.clientY + "px";
      item12.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item13 = document.querySelector(".nakama_m");
      item13.style.position = "fixed";
      item13.style.left = 10 + e.clientX + "px";
      item13.style.top = -20 + e.clientY + "px";
      item13.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item14 = document.querySelector(".nakama_n");
      item14.style.position = "fixed";
      item14.style.left = -30 + e.clientX + "px";
      item14.style.top = -30 + e.clientY + "px";
      item14.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item15 = document.querySelector(".kuragey");
      item15.style.position = "fixed";
      item15.style.left = 30 + e.clientX + "px";
      item15.style.top = 20 + e.clientY + "px";
      item15.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item16 = document.querySelector(".nakama_tsup");
      item16.style.position = "fixed";
      item16.style.left = 20 + e.clientX + "px";
      item16.style.top = -30 + e.clientY + "px";
      item16.classList.add("getFriend");
    },
    false
  );
  body.addEventListener(
    "mousemove",
    function(e) {
      const item17 = document.querySelector(".nakama_tono");
      item17.style.position = "fixed";
      item17.style.left = 30 + e.clientX + "px";
      item17.style.top = -40 + e.clientY + "px";
      item17.classList.add("getFriend");
    },
    false
  );
  body.addeventlistener(
    "mousemove",
    function(e) {
      const item18 = document.querySelector(".nakama2");
      item18.style.position = "fixed";
      item18.style.left = 35 + e.clientX + "px";
      item18.style.top = -32 + e.clientY + "px";
      item18.classList.add("getFriend");
    },
    false
  );
  body.addeventlistener(
    "mousemove",
    function(e) {
      const item19 = document.querySelector(".nakama3");
      item19.style.position = "fixed";
      item19.style.left = -38 + e.clientX + "px";
      item19.style.top = 32 + e.clientY + "px";
      item19.classList.add("getFriend");
    },
    false
  );



/*
    kuragek
    takok
    nakama_d
    nakama_m
    nakama_n
    kuragey
    nakama_tsup
    nakama_tono
    nakama2
    nakama3
*/

});
