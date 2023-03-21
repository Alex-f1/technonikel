if (window.matchMedia("(max-width: 1023px)").matches) {
  if (document.querySelectorAll(".js-content-block-sidebar").length) {
    document.querySelector(".js-content-block-sidebar")
      .addEventListener("click", function () {
        this.classList.toggle("_is-show");
      });
  }
}

if (document.querySelectorAll(".js-content-block-sidebar").length) {
  const sidebarBlock = document.querySelector(".js-content-block-sidebar");
  const sidebarNav = document.querySelectorAll(".js-content-block-sidebar ul li");

  sidebarNav.forEach(function (element, index) {
    if (element.children[1]) {
      let createSubMenuTrigger = document.createElement("span");
      element.classList.value = "sub-menu";
      element.appendChild(createSubMenuTrigger);
      element.children[2].classList.value = "sub-menu-trigger";
      let subMenuTrigger = element.children[2];

      subMenuTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.currentTarget.parentNode.classList.toggle("_is-active");
        // event.target.closest(".js-content-block-sidebar").classList.add("_is-show")
        if (sidebarBlock.offsetHeight > 500) {
          sidebarBlock.style.position = "static"
        } else {
          sidebarBlock.style.position =  "sticky"
        }
      });
    }
  });
}


