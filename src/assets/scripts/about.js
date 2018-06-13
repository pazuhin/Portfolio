import "./modules/example";

var menuBtn = document.querySelector('.hero__menu');
var popap = document.querySelector('.popap-page');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle("active");
    popap.classList.toggle("is-active");
})
