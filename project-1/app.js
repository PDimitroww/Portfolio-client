"use strict";

//======= Slideshow function ========//
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

//======= Sticky nav bar =========//

const nav = document.querySelector(".nav");

function fixedNav() {
  if (window.pageYOffset >= 110) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);

// ==================== Mobile Navigation ================== //
const btnNav = document.querySelector(".btn-mobile-nav ");
const closeBtn = document.querySelector(".close");

btnNav.addEventListener("click", function () {
  nav.classList.add("nav-open");
});

window.addEventListener(
  "click",
  () => {
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
    }
  },
  true
);

closeBtn.addEventListener("click", function () {
  nav.classList.remove("nav-open");
});
