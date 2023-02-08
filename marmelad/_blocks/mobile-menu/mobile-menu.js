function mobileMenu() {

  const buttonBurger = document.querySelector(".js-button-burger");
  const body = document.querySelector("body");
  const topPanel = document.querySelector(".top-panel");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuHead = document.querySelector(".mobile-menu__head");
  const mobileMenuName = document.querySelector(".mobile-menu__name");
  const mobileMenuBack = document.querySelector(".mobile-menu__back");
  const mobileMenuCatalogItem = document.querySelectorAll(".mobile-menu .catalog > li");
  const mobileMenuCatalog = document.querySelector(".mobile-menu .catalog");
  const mobileMenuMenu = document.querySelector(".mobile-menu .menu");
  const buttonCatalog = document.querySelector(".js-button-catalog");
  const buttonMenu = document.querySelector(".js-button-menu");

  buttonBurger.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("_is-active");
    body.classList.toggle("_is-scroll-lock");
    mobileMenu.classList.toggle("_is-show");
    topPanel.classList.toggle("_is-opened-menu");
  });


  mobileMenuCatalogItem.forEach(function (element, index) {
    if (element.children[1]) {
      let createSubMenuTrigger = document.createElement("span");
      element.classList.value = "sub-menu";
      element.appendChild(createSubMenuTrigger);
      element.children[2].classList.value = "sub-menu-trigger";
      let subMenuTrigger = element.children[2];

      subMenuTrigger.addEventListener("click", function (event) {
        event.target.parentNode.classList.add("_is-active");
        element.parentElement.classList.add("_is-triggered");
        element.parentElement.offsetParent.classList.add("_is-triggered");
        const getText = event.target.closest('li').children[0].innerText;

        mobileMenuName.innerHTML = getText;
      });
    }
  });

  mobileMenuBack.addEventListener("click", function () {
    mobileMenu.classList.remove("_is-triggered");
    mobileMenuCatalogItem.forEach(function (element, index) {
      element.classList.remove("_is-active");
      element.parentElement.classList.remove("_is-triggered");
      element.parentElement.offsetParent.classList.remove("_is-triggered");
    });
  });

  buttonCatalog.addEventListener("click", function(event) {
    event.currentTarget.classList.add("_is-active");
    buttonMenu.classList.remove("_is-active");
    mobileMenuMenu.classList.remove("_is-show");
    mobileMenuCatalog.classList.remove("_is-show-menu");
    mobileMenuHead.classList.remove("_is-show-menu");
  });

  buttonMenu.addEventListener("click", function(event) {
    event.currentTarget.classList.add("_is-active");
    buttonCatalog.classList.remove("_is-active");
    mobileMenuMenu.classList.add("_is-show");
    mobileMenuCatalog.classList.add("_is-show-menu");
    mobileMenuHead.classList.add("_is-show-menu");
    mobileMenuName.innerHTML = "Меню";
    mobileMenuCatalogItem.forEach(function (element, index) {
      element.classList.remove("_is-active");
      element.parentElement.classList.remove("_is-triggered");
      element.parentElement.offsetParent.classList.remove("_is-triggered");
    });
  });

}

if (window.matchMedia("(max-width: 767px)").matches) {
  mobileMenu();
}

