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

function propertyCard() {
  const propertyBlock = document.querySelectorAll(".property");
  
  propertyBlock.forEach(function (element) {
    const findLabel = element.querySelectorAll(".property__label");
  
    findLabel.forEach(function (label) {
      const findImg = label.querySelectorAll(".property__img");
      if (findImg.length) {
        findImg[0].offsetParent.parentElement.classList.add("property__labels--pic");
      }
    });
  });
}

if (document.querySelectorAll(".property").length) {
  propertyCard();
}

//=require ../_blocks/**/*.js
