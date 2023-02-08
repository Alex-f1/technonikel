function initHeroSlider() {

  
  function setColor(dataColorLight, dataColorDark, dataColorTheme) {
    const hero = document.querySelector('.home');
    const heroItemActive =
      document.querySelector(".js-hero-slider .swiper-slide-active");

    if (heroItemActive.getAttribute('data-color') == dataColorLight) {
      hero.classList.add('_is-light');
      hero.classList.remove('_is-dark');
      hero.classList.remove('_is-theme');
    }

    if (heroItemActive.getAttribute('data-color') == dataColorDark) {
      hero.classList.add('_is-dark');
      hero.classList.remove('_is-light');
      hero.classList.remove('_is-theme');
    }

    if (heroItemActive.getAttribute('data-color') == dataColorTheme) {
      hero.classList.add('_is-theme');
      hero.classList.remove('_is-dark');
      hero.classList.remove('_is-light');
    }
  }

  const heroSliderName = new Swiper(".js-hero-name-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
  
  const heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    spaceBetween: 0,
    loop: true,
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
      renderCustom: function (swiper, current, total) {
        return '<span>' + current + ' <span>' + '/ ' +  + total + '</span>' + '</span>';
      },
    },
    thumbs: {
      swiper: heroSliderName,
    },
    on: {
      init: function () {
        setColor("light", "dark", "theme")
      },
      slideChangeTransitionStart: function () {
        setColor("light", "dark", "theme")
      },
    },
    
  });

}

initHeroSlider();