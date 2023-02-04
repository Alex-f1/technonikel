function initHeroSlider() {

  let heroItemActive = document.querySelector(".js-hero-slider .swiper-slide-active"); 

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
        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'light') {
          document.querySelector('.home').classList.add('_is-light');
          document.querySelector('.home').classList.remove('_is-dark');
          document.querySelector('.home').classList.remove('_is-theme');
        }

        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'dark') {
          document.querySelector('.home').classList.add('_is-dark');
          document.querySelector('.home').classList.remove('_is-light');
          document.querySelector('.home').classList.remove('_is-theme');
        }

        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'theme') {
          document.querySelector('.home').classList.add('_is-theme');
          document.querySelector('.home').classList.remove('_is-dark');
          document.querySelector('.home').classList.remove('_is-light');
        }
      },
      slideChangeTransitionStart: function () {
        console.log('swiper initialized');
        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'light') {
          document.querySelector('.home').classList.add('_is-light');
          document.querySelector('.home').classList.remove('_is-dark');
          document.querySelector('.home').classList.remove('_is-theme');
        }

        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'dark') {
          document.querySelector('.home').classList.add('_is-dark');
          document.querySelector('.home').classList.remove('_is-light');
          document.querySelector('.home').classList.remove('_is-theme');
        }

        if (document.querySelector(".js-hero-slider .swiper-slide-active").getAttribute('data-color') == 'theme') {
          document.querySelector('.home').classList.add('_is-theme');
          document.querySelector('.home').classList.remove('_is-dark');
          document.querySelector('.home').classList.remove('_is-light');
        }
      },
    },
    
  });
  
}

initHeroSlider();