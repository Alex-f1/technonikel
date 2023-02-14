const otherProductsSlider = new Swiper(".js-other-products-slider", {
  slidesPerView: 4,
  speed: 800,
  effect: 'slide',
  spaceBetween: 35,
  loop: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});