const sliderContainer = document.querySelector(".slider-container");
const slidRight = document.querySelector(".right-slid");
const slidLeft = document.querySelector(".left-slid");
const upButton = document.getElementById("up-btn");
const downButton = document.getElementById("down-btn");
const sliderLength = slidRight.querySelectorAll("div").length;
const slideCount = document.getElementById("slideCount");

let activeSlideIndex = 0;
slidLeft.style.top = `-${(sliderLength - 1) * 100}vh`;
//console.log("A :", slidLeft.style.top);

downButton.addEventListener("click", () => nextSlide("up"));
upButton.addEventListener("click", () => nextSlide("down"));

function nextSlide(params) {
  const sliderHeight = sliderContainer.clientHeight;
  //console.log("B :", sliderHeight);
  if (params === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
    // console.log("C :", activeSlideIndex);
  }

  if (params === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
    // console.log("D :", activeSlideIndex);
  }

  slidRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  //console.log("E :", slidRight.style.transform);
  slidLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  // console.log("F :", slidLeft.style.transform);
  slideCount.textContent = activeSlideIndex + 1;
  //  console.log("G :", slideCount.textContent);
}
