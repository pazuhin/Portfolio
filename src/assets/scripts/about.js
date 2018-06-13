import "./modules/example";

var menuBtn = document.querySelector('.hero__menu');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle("active");
})
