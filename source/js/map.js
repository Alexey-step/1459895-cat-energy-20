ymaps.ready(function init () {
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
});
