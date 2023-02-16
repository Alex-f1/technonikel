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

function propertyCard() {
  const propertyBlock = document.querySelectorAll(".property");

  propertyBlock.forEach(function (element) {
    const findLabel = element.querySelectorAll(".property__label");

    findLabel.forEach(function (label) {
      const findImg = label.querySelectorAll(".property__img");
      if (findImg.length) {
        findImg[0].offsetParent.parentElement.classList.add("property__labels--pic");
      }
    });
  });
}


if (document.querySelectorAll(".js-card-product-images-slider").length) {
  initCardProductImagesSlider();
}

if (document.querySelectorAll(".property").length) {
  propertyCard();
}
