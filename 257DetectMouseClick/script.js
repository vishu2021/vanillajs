let ourElem = document.getElementById("our-elem");
let message = document.getElementById("message");

document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  do {
    if (clickedElem == ourElem) {
      message.innerHTML = `Click Is <span>Inside</span> The Element`;
      return;
    }
    clickedElem = clickedElem.parentNode;
  } while (clickedElem);
  message.innerHTML = `Click is <span>Outside</span> The Element`;
});
// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "e.target",
  "do while",
  "if...else",
  "innerHTML",
  "parentNode",
  "getElementById()",
  "Backtick Literals (``)",
  "addEventListener : click",
  "Comparison Operators (==)",
];
