const gra = function (min, max) {
  return Math.random() * (max - min) + min;
};
const gri = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const init = function () {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = gra(20, 30) + "vh";
    items[i].style.background = randomColor({ luminosity: "light" });
  }
  cssScrollSnapPolyfill();
};
init();
// Learnings from this project are listed below:
const myLearnings = [
  "index",
  "length",
  "return",
  "for loop",
  "Math.floor()",
  "Math.random()",
  "Dynamic Styles",
  "querySelectorAll()",
  "Comparison Operators (<)",
  "Arithmetic Operators (++,+,-,*)",
];
