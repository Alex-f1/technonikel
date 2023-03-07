'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * Scripts
 * ========================================================================== */

//=require ../_blocks/**/*.js

document.querySelector(".js-link-projects")
  .addEventListener("click", function (event) {
    event.currentTarget.children[1].classList.toggle("_is-show");
    
});

document.addEventListener('click', (event) => {
  const withinBoundaries = event
    .composedPath()
    .includes(document.querySelector(".js-link-projects"));

  if (!withinBoundaries) {
    document.querySelector(".js-link-projects ul")
      .classList.remove("_is-show");
  }
})



