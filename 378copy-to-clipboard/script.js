let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500);
});
// Learnings from this project are listed below:
const myLearnings = [
  "select()",
  "setTimeout()",
  "getSelection()",
  "querySelector()",
  "classList.add()",
  "removeAllRanges()",
  "classList.remove()",
  "addEventListener : click",
  "document.execCommand('copy')",
];
