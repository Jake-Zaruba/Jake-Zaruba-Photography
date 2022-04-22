const slides = document.querySelectorAll(`.slide`);
const next = document.querySelector(`.next`);
const prev = document.querySelector(`.prev`);
const autoScroll = false;

const nextSlide = () => {
  const currentSlide = document.querySelector(`.current`);
  currentSlide.classList.remove;
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add(`current`);
  } else {
    slides[0].classList.add(`current`);
  }
  setTimeout(() => currentSlide.classList.remove(`current`));
};

const prevSlide = () => {
  const currentSlide = document.querySelector(`.current`);
  currentSlide.classList.remove;
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add(`current`);
  } else {
    slides[slides.length - 1].classList.add(`current`);
  }
  setTimeout(() => currentSlide.classList.remove(`current`));
};

prev.addEventListener(`click`, (e) => {
  prevSlide();
});

next.addEventListener(`click`, (e) => {
  nextSlide();
});