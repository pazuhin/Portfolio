var log = document.querySelector('#login');
log.addEventListener('focus', function (e) {
      log.previousSibling.classList.add('onfocus');
});

log.addEventListener('blur', function (e) {
    log.previousSibling.classList.remove('onfocus');
});

var pass = document.querySelector('#pass');
pass.addEventListener('focus', function (e) {
    pass.previousSibling.classList.add('onfocus');
});
pass.addEventListener('blur', function (e) {
    pass.previousSibling.classList.remove('onfocus');
});