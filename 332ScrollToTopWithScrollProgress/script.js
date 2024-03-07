let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  // let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Learnings from this project are listed below:
const myLearnings = [
  "scrollTop",
  "Math.round()",
  "scrollHeight",
  "clientHeight",
  "window.onload",
  "Dynamic Styles",
  "window.onscroll",
  "documentElement",
  "getElementById()",
  "if...else if...else",
  "Backtick Literals (``)",
  "Comparison Operators (>)",
  "addEventListener : click",
  "Arithmetic Operators (*,/)",
];
