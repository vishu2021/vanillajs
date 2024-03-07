var toCopy = document.getElementById("to-copy"),
  btnCopy = document.getElementById("copy"),
  paste = document.getElementById("cleared");
btnCopy.addEventListener("click", function () {
  toCopy.select();
  paste.value = "";
  if (document.execCommand("copy")) {
    btnCopy.classList.add("copied");
    paste.focus();
    var temp = setInterval(function () {
      btnCopy.classList.remove("copied");
      clearInterval(temp);
    }, 600);
  } else {
    console.info("document.execCommand went wrong…");
  }
  return false;
});
// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "return",
  "focus()",
  "select()",
  "setInterval()",
  "console.info()",
  "clearInterval()",
  "classList.add()",
  "getElementById()",
  "classList.remove()",
  "if...else if...else",
  "addEventListener : click",
  "document.execCommand('copy')",
];
