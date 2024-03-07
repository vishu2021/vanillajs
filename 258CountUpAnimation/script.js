let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
// Learnings from this project are listed below:
const myLearnings = [
  "forEach()",
  "if...else",
  "parseInt()",
  "textContent",
  "Math.floor()",
  "setInterval()",
  "getAttribute()",
  "clearInterval()",
  "querySelectorAll()",
  "Arithmetic Operators (/)",
  "Comparison Operators (==)",
  "Assignment Operators (+=)",
];
