function countTo() {
  let from = -50;
  let to = 20;
  let step = to > from ? 1 : -1;
  let interval = 100;

  if (from == to) {
    document.querySelector("#output").textContent = from;
    return;
  }

  let counter = setInterval(function () {
    from += step;
    document.querySelector("#output").textContent = from;

    if (from == to) {
      clearInterval(counter);
    }
  }, interval);
}
countTo();

// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "if...else",
  "textContent",
  "setInterval()",
  "clearInterval()",
  "querySelector()",
  "Assignment Operators (+=)",
  "Comparison Operators (?,>,==)",
];
