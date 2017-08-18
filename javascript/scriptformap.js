var Linkmap = document.querySelector(".map");
var popupmap = document.querySelector(".popup-map");
var closemap = popupmap.querySelector("popup-map-close");

Linkmap.addEventListener("click", function(event) {
    event.preventDefault();
    popupmap.classList.add("popup-map-show");
});

closemap.addEventListener("click", function(event) {
    event.preventDefault();
    popupmap.classList.remove("popup-map-show");
});

