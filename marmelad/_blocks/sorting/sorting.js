function sortingToggleButtons() {
  const sortingButtonToggle = document.querySelectorAll(".js-sorting-button-toggle");
  const sortingElements = document.querySelectorAll(".js-sorting-elements");


  for (let i = 0; i < sortingButtonToggle.length; i++) {
    sortingButtonToggle[i].addEventListener("click", (event) => {

      let sortingButtonToggleChildren = event.target.parentElement.children;
      for (let b = 0; b < sortingButtonToggleChildren.length; b++) {
        sortingButtonToggleChildren[b].classList.remove("_is-active");
      }

      sortingButtonToggle[i].classList.add("_is-active");

      let sortingElementChildren = event.target.parentElement.nextElementSibling.children;

      for (let l = 0; l < sortingElementChildren.length; l++) {
        sortingElementChildren[l].classList.remove("_is-show");
      }

      sortingElements[i].classList.add("_is-show");

    });
  }

}

if (document.querySelectorAll(".sorting").length) {
  sortingToggleButtons();
}