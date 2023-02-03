function initHeroSlider() {
  /* const getItem = document.querySelectorAll(".hero__item");
  const setData = [];

  for (let i = 0, itemLength = getItem.length; i < itemLength; i++) {
    setData[i] = getItem[i].dataset.name;
  } */
  const heroSliderName = new Swiper(".js-hero-name-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    watchSlidesProgress: true,
  });
  const heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "custom",
      /* renderBullet: function (index, className) {
        return '<span class="' + className + 'hero__name-pagination">' + '<span>' + (setData[index]) + '</span>' + '<i></i>' + '</span>';
      }, */
      renderCustom: function (swiper, current, total) {
        return '<span>' + current + ' <span>' + '/ ' +  + total + '</span>' + '</span>';
      },
    },
    thumbs: {
      swiper: heroSliderName,
    },
    
  });
  

  /* const namePagination = document.querySelectorAll(".hero__name-pagination");

  namePagination.addEventListener("click", function(event) {
    event.target.classList.add('_is-active').siblings().classList.remove('_is-active');
  }); */

}

initHeroSlider();