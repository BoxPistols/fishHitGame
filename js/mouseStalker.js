/*
Mouse Stalker
*/

if (window.addEventListener) {
  window.addEventListener("load", create_obj, false);
  window.addEventListener("mousemove", m_stalker_move, false);
} else if (window.attachEvent && document.getElementById) {
  window.attachEvent("onload", create_obj);
  document.attachEvent("onmousemove", m_stalker_move);
}

function create_obj() {
  var stalker = document.createElement("div");

  stalker.style.position = "absolute";
  stalker.style.left = "0";
  stalker.style.top = "0";
  stalker.setAttribute("id", "m_stalker");
  document.body.appendChild(stalker);
}

function m_stalker_move(evt) {
  var stalker = document.getElementById("m_stalker");
  if (!stalker) return;
  if (window.event) {
    if (!evt) var evt = window.event;
    if (!evt.pageX) evt.pageX = evt.clientX + document.body.scrollLeft;
    if (!evt.pageY) evt.pageY = evt.clientY + document.body.scrollTop;
  }
  stalker.style.left = evt.pageX - 25 + "px";
  stalker.style.top = evt.pageY - 25 + "px";

}
