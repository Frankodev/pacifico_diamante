/** @format */

const slider = document.getElementById("slider");
// al cambiar el tamaño del slider (más o menos imágenes), cambiar también el width del slider en el css (proyecto) en la linea 656 la clase (.slider)
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all .5s ";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", Next);

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all .5s ";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnLeft.addEventListener("click", Prev);
