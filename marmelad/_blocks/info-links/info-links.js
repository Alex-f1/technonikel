function initInfoLinksTreeSlider() {
  const infoLinksSlider = new Swiper(".js-info-links-slider", {
    slidesPerView: 4,
    spaceBetween: 0,
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
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}

if (document.querySelectorAll(".js-info-links-slider").length) {
  initInfoLinksTreeSlider();
}