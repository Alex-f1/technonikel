const isotopeGallery = new Isotope(".grid", {
  itemSelector: '.grid-item',
});

function initGallerySlider() {
  const aboutTreeSlider = new Swiper(".js-gallery-slider", {
    slidesPerView: "auto",
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelectorAll(".js-gallery-slider").length) {
  initGallerySlider();
}