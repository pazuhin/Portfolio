
//import "./modules/loader.js";
import "./modules/skills";
import "./modules/nav-menu-click.js";
import "./modules/map.js";



var menuBtn = document.querySelector('.hero__menu');
var popap = document.querySelector('.popap-page');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle("active");
    popap.classList.toggle("is-active");
});


