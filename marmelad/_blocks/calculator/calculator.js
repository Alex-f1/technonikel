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

if (document.querySelectorAll(".calculator__item").length) {
  calculatorProduct();
}