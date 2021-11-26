/** @format */

// variables
const btn_menu = document.querySelector(".btn_menu");
const showcase = document.querySelector(".showcase");
const overlay = document.querySelector(".overlay");

// función click para abri menú responsive
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  showcase.classList.toggle("active");
  overlay.classList.add("active_overlay");
});

// función click para quitar el menú responsive con el overlay
overlay.addEventListener("click", function () {
  btn_menu.classList.remove("active");
  showcase.classList.remove("active");
  overlay.classList.remove("active_overlay");
});

// función para quitar muted al video de fondo

// const muted = document.querySelector("#muted");
// const video = document.querySelector("#video");

// muted.addEventListener("click", function () {
//   video.muted = false;
// });
