let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];
let dice = document.querySelectorAll(".dice-wrapper img");
function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    //console.log(dieOneValue,dieTwoValue);
    document
      .querySelector("#die-1")
      .setAttribute(
        "src",
        `https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/${images[dieOneValue]}`
      );
    document
      .querySelector("#die-2")
      .setAttribute(
        "src",
        `https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/${images[dieTwoValue]}`
      );
    document.querySelector("#total").innerHTML =
      "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));
  }, 1000);
}
roll();
// Learnings from this project are listed below:
const myLearnings = [
  "onclick",
  "[array]",
  "forEach()",
  "innerHTML",
  "setTimeout()",
  "Math.floor()",
  "Math.random()",
  "setAttribute()",
  "querySelector()",
  "classList.add()",
  "classList.remove()",
  "querySelectorAll()",
  "Arithmetic Operators (+,*)",
];
