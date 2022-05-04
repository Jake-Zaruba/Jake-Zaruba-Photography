// MOBILE NAVIGATION //

const btnNav = document.querySelector(`.btn-mobile-nav`);
const header = document.querySelector(`.header`);
const navLink = document.querySelectorAll(`.nav-link`);

btnNav.addEventListener(`click`, function () {
  header.classList.toggle(`nav-open`);
});

navLink.forEach((link) =>
  link.addEventListener(`click`, () => {
    header.classList.toggle(`nav-open`);
  })
);
