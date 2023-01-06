let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").addEventListener("click", function () {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
});
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bars").addEventListener("click", function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
});

let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll(".header .navbar a");

window.onscroll = function () {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
    document.querySelector(".navbar").classList.add("open");
  } else {
    document.querySelector(".header").classList.remove("active");
    document.querySelector(".navbar").classList.remove("open");
  }
  // section.forEach((sec) => {
  //   let sectionheigh = sec.offsetHeight;
  //   let distanceTop = sec.offsetTop - 200;
  //   let lengscroll = window.scrollY;
  //   let id = sec.getAttribute("id");
  //   if (lengscroll >= distanceTop && lengscroll < distanceTop + sectionheigh) {
  //     navlink.forEach((link) => {
  //       link.classList.remove("active");
  //     });
  //     document
  //       .querySelector(".header .navbar a[href*=" + id + "]")
  //       .classList.add("active");
  //   }
  // });
};
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".product-slider", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    943: {
      slidesPerView: 4,
    },
  },
});

// -------------------------------------------
