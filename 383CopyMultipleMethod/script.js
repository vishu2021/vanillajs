copyText = function (textToCopy) {
  this.copied = false;
  // Create textarea element
  const textarea = document.createElement("textarea");
  // Set the value of the text
  textarea.value = textToCopy;
  // Make sure we cant change the text of the textarea
  textarea.setAttribute("readonly", "");
  // Hide the textarea off the screen
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  // Add the textarea to the page
  document.body.appendChild(textarea);
  // Copy the textarea
  textarea.select();
  try {
    var successful = document.execCommand("copy");
    this.copied = true;
  } catch (err) {
    this.copied = false;
  }
  textarea.remove();
};
copyById = function (id) {
  let text = document.getElementById(id);
  copyText(text.value);
};
copyPreviousSibling = function (curr) {
  let el = curr.previousElementSibling;
  if (el.value !== undefined) {
    copyText(el.value);
  } else {
    copyText(el.textContent);
  }
};
// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "value",
  "return",
  "onclick",
  "select()",
  "remove()",
  "try catch",
  "undefined",
  "true false",
  "textContent",
  "appendChild()",
  "setAttribute()",
  "Dynamic Styles",
  "createElement()",
  "getElementById()",
  "if...else if...else",
  "previousElementSibling",
  "Comparison Operators (!==)",
  "document.execCommand('copy')",
];
