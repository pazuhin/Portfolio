var authBtn = document.querySelector('.auth_btn__link');
var authBtnBlock = document.querySelector('.auth_btn');
var flip = document.querySelector('.flip');
var inroBack = document.querySelector('#auth');

authBtn.addEventListener('click', function (e) {
    e.preventDefault();
    authBtnBlock.classList.add("hidden");
    flip.classList.add("active");
})

inroBack.addEventListener('click', function (e) {
    e.preventDefault();
    authBtnBlock.classList.remove("hidden");
    flip.classList.remove("active");
})

