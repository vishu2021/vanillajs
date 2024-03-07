function expand(lbl) {
  var elemId = lbl.getAttribute("for");
  document.getElementById(elemId).style.height = "45px";
  document.getElementById(elemId).classList.add("my-style");
  lbl.style.transform = "translateY(-45px)";
}

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "onclick",
  "Dynamic Styles",
  "getAttribute()",
  "classList.add()",
  "getElementById()",
];
