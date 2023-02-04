function mainMenu() {
  document.querySelector(".js-link-catalog")
    .addEventListener("click", function(event) {
      
      event.target.classList.toggle("_is-active");
      
      document.querySelector(".js-menu-catalog")
        .classList.toggle("_is-show-menu-catalog");
      
  });
  
  document.querySelector(".js-button-burger")
    .addEventListener("click", function (event) {
      
      event.currentTarget.classList.toggle("_is-active");
      
      document.querySelector("body")
        .classList.toggle("_is-scroll-lock");

      document.querySelector(".main-menu")
        .classList.toggle("_is-show-main-menu");
      
      document.querySelector(".top-panel")
        .classList.toggle("_is-opened-menu");
      
      document.querySelector(".js-link-catalog")
        .classList.remove("_is-active");
      
      document.querySelector(".js-menu-catalog")
        .classList.remove("_is-show-menu-catalog");
  });
}

mainMenu();
