function initCardProductImagesSlider() {
  const cardProductImagesSlider = new Swiper(".js-card-product-images-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 600,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelectorAll(".js-card-product-images-slider").length) {
  initCardProductImagesSlider();
}