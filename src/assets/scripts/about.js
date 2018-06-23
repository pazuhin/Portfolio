import "./modules/slider";

var menuBtn = document.querySelector('.hero__menu');
var popap = document.querySelector('.popap-page');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle("active");
    popap.classList.toggle("is-active");
})

//map

function initMap() {
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

