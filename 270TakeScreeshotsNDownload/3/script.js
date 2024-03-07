function convert() {
  const original = document.querySelector("#original");
  const canvasContainer = document.querySelector("#canvas-container");

  html2canvas(original, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    canvasContainer.appendChild(canvas);
  });
}
// Learnings from this project are listed below:
const myLearnings = [
  "then()",
  "true false",
  "html2canvas()",
  "appendChild()",
  "querySelector()",
];
