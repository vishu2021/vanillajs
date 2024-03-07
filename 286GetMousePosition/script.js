let output = document.getElementById("output");
window.addEventListener("mousemove", (e) => {
  let xPos = e.clientX;
  let yPos = e.clientY;
  output.innerHTML = `<div><span>x: </span>${xPos}px</div><div><span>y: </span>${yPos}px</div>`;
});
// Learnings from this project are listed below:

const myLearnings = [
  "e.clientX",
  "e.clientY",
  "innerHTML",
  "getElementById()",
  "Backtick Literals (``)",
  "addEventListener : mousemove",
];
