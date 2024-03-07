const textElement = document.getElementById("text");
const copyButton = document.getElementById("copy");

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");
  e.target.setAttribute("tooltip", "Copied! ✅");
};

const resetTooltip = (e) => {
  e.target.setAttribute("tooltip", "Copy to clipboard");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetTooltip(e));

// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "e.target",
  "setAttribute()",
  "getSelection()",
  "getElementById()",
  "selectAllChildren()",
  "addEventListener : click",
  "addEventListener : mouseover",
  "document.execCommand('copy')",
];
