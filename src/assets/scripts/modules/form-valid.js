var btn = document.querySelector('button[type=submit]');
var inputs = document.querySelectorAll('input');
var login = document.querySelector('.form__login');
var pass = document.querySelector('.form__pass');

btn.addEventListener('click', function(e) {
    for (var i = 0; i < inputs.length; i++) {
        if (!(inputs[i].value === '')) {
            inputs[i].classList.remove('active');
            inputs[i].nextElementSibling.classList.remove('is-active');
            inputs[i].previousSibling.classList.remove('is-active');

        } else {
            inputs[i].classList.add('active');
            inputs[i].nextElementSibling.classList.add('is-active');
            inputs[i].previousSibling.classList.add('is-active');
            inputs[i].previousSibling.classList.remove('onfocus');
            e.preventDefault();
        }
    }
});

