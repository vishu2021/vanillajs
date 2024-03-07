document.addEventListener("click", function (event) {
  if (!event.target.matches(".btn-scroll-into")) return;
  event.preventDefault();
  var element = document.getElementById(event.target.dataset.target);
  element.scrollIntoView({ behavior: "smooth" });
});

// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "return",
  "target",
  "dataset",
  "behavior",
  "{object}",
  "matches()",
  "getElementById()",
  "preventDefault()",
  "scrollIntoView()",
  "if...else if...else",
  "Logical Operators (!)",
  "addEventListener : click",
];
