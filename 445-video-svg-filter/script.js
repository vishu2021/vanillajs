//for button functionality
let textReplace = document.querySelector(".textReplace");
let filterBtn = document.querySelector(".btn");
filterBtn.addEventListener(
  "click",
  function () {
    if (textReplace.innerHTML === "Filter") {
      textReplace.innerHTML = "original";
    } else {
      textReplace.innerHTML = "Filter";
    }
    document.getElementsByTagName("video")[0].classList.toggle("filterVideo");
  },
  false
);

// Learnings from this project are listed below:
const myLearnings = [
  "innerHTML",
  "true false",
  "querySelector()",
  "classList.toggle()",
  "if...else if...else",
  "getElementsByTagName()",
  "addEventListener : click",
  "Comparison Operators (===)",
];
