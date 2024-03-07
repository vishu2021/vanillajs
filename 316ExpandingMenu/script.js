var state = false;
function expand() {
  if (state == false) {
    document.getElementById("items").style.transform = "scaleX(1)";
    document.getElementById("toggle1").style.transform = "rotate(45deg)";

    state = true;
  } else {
    document.getElementById("items").style.transform = "scaleX(0)";
    document.getElementById("toggle1").style.transform = "rotate(0deg)";
    state = false;
  }
}
// Learnings from this project are listed below:
const myLearnings = [
  "onclick",
  "true false",
  "Dynamic Styles",
  "getElementById()",
  "if...else if...else",
  "Comparison Operators (==)",
];
