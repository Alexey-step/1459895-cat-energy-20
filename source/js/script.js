"use strict";

var menuButton = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
var buttonWas = document.querySelector(".example__button--was");
var exampleImgFat = document.querySelector(".example__img--fat");
var exampleImgThin = document.querySelector(".example__img--thin");
var buttonBecame = document.querySelector(".example__button--became");
menu.classList.remove("main-nav--nojs");

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

if(buttonWas !== null) {
  buttonWas.addEventListener('click', function (evt) {
    evt.preventDefault();
    if(exampleImgThin.classList.contains("example__img--active")) {
      exampleImgThin.classList.remove("example__img--active");
      exampleImgFat.classList.add("example__img--active");
    } else {
      exampleImgFat.classList.add("example__img--active");
    }
  })
};

if(buttonBecame !== null) {
  buttonBecame.addEventListener('click', function (evt) {
    evt.preventDefault();
    if(exampleImgFat.classList.contains("example__img--active")) {
      exampleImgFat.classList.remove("example__img--active");
      exampleImgThin.classList.add("example__img--active");
    } else {
      exampleImgThin.classList.add("example__img--active");
    }
  })
};

function init () {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17
  });

var myGeoObjects = new ymaps.Placemark([59.938635, 30.323118], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "img/map-pin.png",
                    iconImageSize: [57, 53],
                    iconImageOffset: [-30, -50]
});

    myMap.geoObjects.add(myGeoObjects);
}
