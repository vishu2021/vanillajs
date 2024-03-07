function getCursor(event) {
  let x = event.clientX;
  let y = event.clientY;
  let _position = `X:${x}<br>Y:${y}`;
  const infoElement = document.getElementById("info");
  infoElement.innerHTML = _position;
  infoElement.style.top = y + "px";
  infoElement.style.left = x + 20 + "px";
}
// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "clientX",
  "clientY",
  "innerHTML",
  "Dynamic Styles",
  "getElementById()",
  "Backtick Literals (``)",
];
