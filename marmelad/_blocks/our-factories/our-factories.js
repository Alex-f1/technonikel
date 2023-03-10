const cardOurFactoriesSlider = new Swiper(".js-card-our-factories-slider", {
  effect: "fade",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function ourFactoriesInfo() {
  const buttonTab = document.querySelectorAll(".js-button-tab");
  const ourFactoriesIconLocation = document.querySelectorAll(".our-factories__icon-location");
  const ourFactoriesCards = document.querySelectorAll(".js-our-factories-cards");
  const buttonClose = document.querySelector(".js-button-close");


  for (let i = 0; i < buttonTab.length; i++) {
    buttonTab[i].addEventListener("click", (event) => {

      

      let buttonTabChildren = event.target.parentElement.children;
      for (let b = 0; b < buttonTabChildren.length; b++) {
        buttonTabChildren[b].classList.remove("_is-active");
      }
      
      buttonTab[i].classList.add("_is-active");

      let tabContentChildren = event.target.parentElement.nextElementSibling.children;
      for (let l = 0; l < tabContentChildren.length; l++) {
        tabContentChildren[l].classList.remove("_is-active-location");
      }

      let tabOurFactoriesCards = event.target.offsetParent.offsetParent.offsetParent.querySelectorAll(".js-our-factories-cards");
      for (let f = 0; f < tabOurFactoriesCards.length; f++) {
        tabOurFactoriesCards[f].classList.remove("_is-show");
      }

      ourFactoriesIconLocation[i].classList.add("_is-active-location");
      ourFactoriesCards[i].classList.add("_is-show")
    });
  }

  buttonClose.addEventListener("click", function (event) {
    event.target.offsetParent.offsetParent.classList.remove("_is-show")
  });
  
}


if (document.querySelectorAll(".our-factories").length) {
  ourFactoriesInfo();
}

