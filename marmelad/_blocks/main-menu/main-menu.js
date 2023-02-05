function mainMenu(e) {

  const linkCatalog = document.querySelector(".js-link-catalog");
  const menuCatalog = document.querySelector(".js-menu-catalog");
  const buttonBurger = document.querySelector(".js-button-burger");
  const body = document.querySelector("body");
  const mainMenu = document.querySelector(".main-menu");
  const topPanel = document.querySelector(".top-panel");

  linkCatalog.addEventListener("click", function (event) {
    event.target.classList.toggle("_is-active");
    menuCatalog.classList.toggle("_is-show-menu-catalog");
  });

  buttonBurger.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("_is-active");
    body.classList.toggle("_is-scroll-lock");
    mainMenu.classList.toggle("_is-show-main-menu");
    topPanel.classList.toggle("_is-opened-menu");
    linkCatalog.classList.remove("_is-active");
    menuCatalog.classList.remove("_is-show-menu-catalog");
  });

}
if (window.matchMedia("(min-width: 768px)").matches) {
  mainMenu();
}




