const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
var counter = 0;
// console.log(slides)
slides.forEach((slide, index) => {
  // console.log("slide :", slide);
  // console.log("index :", index);
  slide.style.top = `${index * 100}%`;
});
const goPrev = () => {
  counter--;
  if (counter === 0) {
    prevBtn.disabled = true;
    // console.log("counter A-- :", counter);
  } else {
    // console.log("counter B-- :", counter);
    nextBtn.disabled = false;
  }
  slideImage();
};
const goNext = () => {
  counter++;
  if (counter === slides.length - 1) {
    // console.log("counter A++ :", counter);
    nextBtn.disabled = true;
  } else {
    // console.log("counter B++ :", counter);
    prevBtn.disabled = false;
  }
  slideImage();
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};
