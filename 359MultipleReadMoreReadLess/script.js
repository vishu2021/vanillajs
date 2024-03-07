$(document).ready(function () {
  $(".read").click(function () {
    $(this).prev().toggle();
    $(this).siblings(".dots").toggle();
    if ($(this).text() == "read more") {
      $(this).text("read less");
    } else {
      $(this).text("read more");
    }
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "text()",
  "prev()",
  "$(this)",
  "click()",
  "toggle()",
  "siblings()",
  "if...else if...else",
  "Comparison Operators (==)",
];
