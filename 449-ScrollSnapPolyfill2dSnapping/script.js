const gra = function (min, max) {
  return Math.random() * (max - min) + min;
};

const gri = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const init = function () {
  let items = document.querySelectorAll(".gallery li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minWidth = gra(20, 20) + "vw";
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
