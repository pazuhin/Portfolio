const blogAside = document.querySelector(".blog__left");
const blogTrigger = document.querySelector(".nav-blog__trigger");

blogTrigger.addEventListener("click", navOpen);

function navOpen(e) {
  e.preventDefault();
  blogAside.classList.toggle("is-open");
}
