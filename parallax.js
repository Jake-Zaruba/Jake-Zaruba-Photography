//PARRALAX//
window.addEventListener(`scroll`, function (e) {
  const foreground = document.querySelectorAll(`.parallax`);

  var index = 0,
    length = foreground.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * foreground[index].dataset.rate;
    foreground[index].style.transform = `translate3d(0px,` + pos + `px, 0px)`;
  }
});

//DELAY PARALLAX//

// const observerElement = document.querySelector("#section2");
// // Intersection Observer Configuration
// const observerOptions = {
//   root: null,
//   rootMargin: "0px 0px", // important: needs units on all values
//   threshold: 0.5,
// };
// // Intersection Observer Constructor.
// const observer = new IntersectionObserver(handleIntersect, observerOptions);
// // Intersection Observer Callback Function
// function handleIntersect(entry) {
//   // If intersecting.
//   if (entry[0].intersectionRatio > 0.5) {
//     observerElement.classList.add(`parallax`);
//   } else {
//     console.log("Element is NOT Intersecting");
//   }
// }
// observer.observe(observerElement);
