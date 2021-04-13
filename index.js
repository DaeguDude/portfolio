const navBtn = document.querySelector(".nav__btn");
const navList = document.querySelector(".nav__list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("nav__list--visible");
});
