function calculatorProduct() {
  const calculatorProductCard = document.querySelectorAll(".calculator__item");
  
  function siblings(elem) {
    const nodes = [...elem.parentNode.children];
    return nodes.filter(node => node !== elem);
  }
  
  function toggleClass(elem, cls) {
    elem.classList.toggle(cls);
    siblings(elem).forEach(function (node) {
      console.log(node);
      node.classList.remove(cls);
    });
  }
  
  calculatorProductCard.forEach(function (el) {
    el.addEventListener('click', function () {
      toggleClass(this, '_is-active');
    });
  });

}

function initCalculatorSlider() {
  const calculatorSlider = new Swiper(".js-calculator-slider", {
    slidesPerView: "auto",
    spaceBetween: 33,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 14,
      },
      1280: {
        spaceBetween: 33,
      },
    },
  });
}

if (document.querySelectorAll(".calculator").length) {
  calculatorProduct();
  initCalculatorSlider();
}