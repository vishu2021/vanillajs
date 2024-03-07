document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
  const inputField = copyLinkParent.querySelector(".copy-link-input");
  const copyButton = copyLinkParent.querySelector(".copy-link-button");
  inputField.addEventListener("focus", () => inputField.select());
  copyButton.addEventListener("click", () => {
    const text = inputField.value;
    inputField.select();
    navigator.clipboard.writeText(text);
    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2000);
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "select()",
  "forEach()",
  "setTimeout()",
  "querySelector()",
  "querySelectorAll()",
  "addEventListener : focus",
  "addEventListener : click",
  "navigator.clipboard.writeText()",
];
