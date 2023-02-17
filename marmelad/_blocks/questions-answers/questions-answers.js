const questionsAnswersName = document.querySelectorAll(".js-questions-answers-name");

questionsAnswersName.forEach(function(element) {
  element.addEventListener("click", function () {
    this.classList.toggle("_is-active");
    this.nextElementSibling.classList.toggle("_is-show");
  });

})
