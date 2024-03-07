let progressBar = document.querySelector("#js-progressbar");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let viewportHeight = document.body.clientHeight - window.innerHeight;
  let scrollPercent = (scrollTop / viewportHeight) * 100;
  progressBar.setAttribute("value", scrollPercent);
});
// Learnings from this project are listed below:
const myLearnings = [
  "innerHeight",
  "clientHeight",
  "document.body",
  "window.scrollY",
  "setAttribute()",
  "querySelector()",
  "addEventListener : scroll",
  "Arithmetic Operators (-,*,/)",
];
