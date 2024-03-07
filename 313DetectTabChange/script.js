document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Active Tab";
  } else {
    document.title = "Inactive Tab";
  }
});
// Learnings from this project are listed below:
const myLearnings = [
  "document.title",
  "if...else if...else",
  "Comparison Operators (===)",
  "addEventListener : visibilitychange",
];
