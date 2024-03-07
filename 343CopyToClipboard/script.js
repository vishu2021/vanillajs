function copy(copyId) {
  let inputElement = document.createElement("input");
  let alert = document.getElementById("alert");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  document.body.removeChild(inputElement);
  alert.style.display = "block";
  setTimeout(function () {
    alert.style.display = "none";
  }, 1000);
}
// Learnings from this project are listed below:
const myLearnings = [
  "type",
  "value",
  "select()",
  "innerHTML",
  "setTimeout()",
  "appendChild()",
  "removeChild()",
  "Dynamic Styles",
  "createElement()",
  "getElementById()",
  "execCommand('copy')",
];
