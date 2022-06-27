//HERO SLIDER//

const slides = document.querySelectorAll(`.slide`);
const next = document.querySelector(`.next`);
const prev = document.querySelector(`.prev`);
const autoScroll = true;

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

prev.addEventListener("click", (e) => {
  prevSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2800);
  }
});

next.addEventListener("click", (e) => {
  nextSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2800);
  }
});

if (autoScroll) {
  slideInterval = setInterval(nextSlide, 2800);
}

//INTERSECTION OBSERVER//
const cards = document.querySelectorAll(`.recent-card`);
const card = document.querySelectorAll(`.card`);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`show`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.65,
  }
);
card.forEach((card) => {
  observer.observe(card);
});
const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`show`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);
cards.forEach((card) => {
  observer1.observe(card);
});
