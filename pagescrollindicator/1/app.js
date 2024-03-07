let indicator = document.querySelector(".scroll-indicator .progress");
window.addEventListener("scroll", scroll);
function scroll() {
  let customScrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let customScrollTop = document.documentElement.scrollTop;
  let scrolled = (customScrollTop / customScrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
// Learnings from this project are listed below:
const myLearnings = [
  "scrollTop",
  "scrollHeight",
  "clientHeight",
  "Dynamic Styles",
  "querySelector()",
  "documentElement",
  "Template Literals (``)",
  "addEventListener : scroll",
  "Arithmetic Operators (-,*,/)",
];
