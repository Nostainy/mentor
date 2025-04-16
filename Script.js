// document.querySelector(`.btn-box`).addEventListener("click", function (e) {
//   document.querySelector(`.nav`).classList.toggle(`switch`);
// });
// const navList = document.querySelectorAll(".nav-link");

// navList.forEach((n) =>
//   n.addEventListener("click", function (e) {
//     classList.toggle(`switch`);
//   })
// );

const nav = document.querySelector(".nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navList = document.querySelectorAll(".nav-link");

open.addEventListener("click", function (e) {
  nav.classList.toggle("switch");
});
close.addEventListener("click", function (e) {
  nav.classList.toggle("switch");
});

navList.forEach((h) =>
  h.addEventListener("click", function (e) {
    nav.classList.toggle("switch");
  })
);

// swiper js

const body = document.querySelector("body");
const mySwiper = document.querySelector(".mySwiper");
mySwiper.setAttribute("slides-per-view", 2);

function reduceSwiperSize() {
  if (body.clientWidth <= 990) {
    mySwiper.setAttribute("slides-per-view", 1);
  } else {
    mySwiper.setAttribute("slides-per-view", 2);
  }
}
window.addEventListener("resize", reduceSwiperSize);
