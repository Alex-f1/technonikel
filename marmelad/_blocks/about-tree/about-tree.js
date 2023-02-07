function initAboutTreeSlider() {
  const aboutTreeSlider = new Swiper(".js-about-tree-slider", {
    slidesPerView: "auto",
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

if (document.querySelectorAll(".js-about-tree-slider").length) {
  initAboutTreeSlider();
}