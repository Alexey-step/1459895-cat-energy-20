"use strict";

var menuButton = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");

menuButton.addEventListener('click', function() {
  if (menu.classList.contains("main-nav--closed")) {
    menu.classList.remove("main-nav--closed");
    menu.classList.add("main-nav--open");
    menuButton.classList.remove("main-nav__toggle");
    menuButton.classList.add("main-nav__toggle--open");
  } else {
    menu.classList.remove("main-nav--open");
    menu.classList.add("main-nav--closed");
    menuButton.classList.remove("main-nav__toggle--open");
    menuButton.classList.add("main-nav__toggle");
  }
});
