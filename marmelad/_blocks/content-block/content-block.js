if (window.matchMedia("(max-width: 1023px)").matches) {
  if (document.querySelectorAll(".js-content-block-sidebar").length) {
    document.querySelector(".js-content-block-sidebar")
      .addEventListener("click", function () {
        this.classList.toggle("_is-show");
      });
  }
}


