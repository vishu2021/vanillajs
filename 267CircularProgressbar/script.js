let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressValue = 0;
let progressEndValue = 100;
let speed = 50;
let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      green ${progressValue * 3.6}deg,
      #cfffca ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
// Learnings from this project are listed below:
const myLearnings = [
  "if...else",
  "textContent",
  "setInterval()",
  "Dynamic Styles",
  "clearInterval()",
  "querySelector()",
  "Backtick Literals (``)",
  "Comparison Operators (==)",
  "Arithmetic Operators (*,++)",
];
