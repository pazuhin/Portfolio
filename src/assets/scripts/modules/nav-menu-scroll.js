export default function scrollPage() {
  const sideBarHolder = document.getElementsByClassName("sidebar")[0];
  console.log(sideBarHolder);
  const links = document.querySelectorAll(".nav-blog__link");
  const articleItems = document.getElementsByClassName("blog-content__item");
  const menuList = document.getElementsByClassName("nav-blog__list");
  console.log(menuList);

  // получаем массив из объектов с top и bottom у каждой стаьти
  let positionArticle = [];
  let offsetHeight = 0;
  console.log(positionArticle);

  // передаем в функцию массив всех article
  function scrollMenu(elements) {
    for (let i = 0; i < elements.length; i++) {
      let item = elements[i];
      let obj = {};
      console.log(item);

      obj.top = item.offsetTop;
      obj.bottom = obj.top + item.clientHeight;
      positionArticle.push(obj);
    }
  }

  function scrollPageFixMenu(e) {
    let scroll = window.pageYOffset;
    console.log(scroll);
    if (scroll < positionArticle[0].offsetTop) {
      sideBarHolder.classList.remove("fixed");
    } else {
      sideBarHolder.classList.add("fixed");
    }

    for (let i = 0; i < positionArticle.length; i++) {
      let item = positionArticle[i];

      if (scroll > item.top && scroll < item.bottom) {
        links[i].classList.add("is-active");
      } else {
        links[i].classList.remove("is-active");
      }
    }
  }

  menuList.onclick = function(e) {
    e.preventDefault();
    console.log(e);
  };

  window.addEventListener("wheel", scrollPageFixMenu);
  scrollMenu(articleItems);
}
