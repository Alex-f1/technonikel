function mobileMenu() {


  const buttonBurger = document.querySelector(".js-button-burger");
  const body = document.querySelector("body");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuName = document.querySelector(".mobile-menu__name");
  const mobileMenuBack = document.querySelector(".mobile-menu__back");
  const mobileMenuCatalogItem = document.querySelectorAll(".mobile-menu .catalog > li");

  buttonBurger.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("_is-active");
    body.classList.toggle("_is-scroll-lock");
    mobileMenu.classList.toggle("_is-show");
    topPanel.classList.toggle("_is-opened-menu");
  });


  mobileMenuCatalogItem.forEach(function (element, index) {
    if (element.children[1]) {
      // console.log(element);
      let createSubMenuTrigger = document.createElement("span");
      element.classList.value = "sub-menu";
      element.appendChild(createSubMenuTrigger);
      element.children[2].classList.value = "sub-menu-trigger";
      let subMenuTrigger = element.children[2];

      subMenuTrigger.addEventListener("click", function (event) {
        event.target.parentNode.classList.add("_is-active");
        element.parentElement.classList.add("_is-triggered");
        element.parentElement.offsetParent.classList.add("_is-triggered");
        const getText = event.target.parentNode.querySelector("a span").firstChild.nodeValue;

        // console.log(getText);

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
}

if (window.matchMedia("(max-width: 767px)").matches) {
  mobileMenu();
}

