function mainMenu() {
  const linkCatalog = document.querySelector(".js-link-catalog");
  const menuCatalog = document.querySelector(".js-menu-catalog");
  const buttonBurger = document.querySelector(".js-button-burger");
  const body = document.querySelector("body");
  const mainMenu = document.querySelector(".main-menu");
  const topPanel = document.querySelector(".top-panel");

  linkCatalog.addEventListener("click", function(event) {
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

  /* document.querySelector('.l1').addEventListener('click', function () {
    var tag = document.querySelector(this).attr('value');
    var tag1 = document.querySelector(this).text();
    // window.alert("#layer"+tag1);
    var back_link = "#layer" + tag;
    //window.alert(back_link);
    document.querySelector('.nav-link').attr('href', back_link);
    //document.querySelector('.nav-link').text(tag1);
    document.querySelector('.nav-link').attr('value', tag);
    document.querySelector("#layer" + tag).classList.remove('hide-menu');
    document.querySelector("#layer" + tag).classList.toggle('show-menu');
  });
  document.querySelector('.nav-link').addEventListener('click', function () {
    var tag = document.querySelector(this).attr('href');
    var val = document.querySelector(this).attr('value');
    // window.alert(val);
    document.querySelector(tag).classList.remove('show-menu');
    var back_link = "#layer" + (val - 1);
    document.querySelector('.nav-link').attr('href', back_link);
    document.querySelector('.nav-link').attr('value', val - 1);
    //window.alert(back_link);

  }); */

}

mainMenu();
