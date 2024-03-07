// demos.js
var clipboardDemos = new Clipboard("[data-clipboard-demo]");
clipboardDemos.on("success", function (e) {
  e.clearSelection();
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);
  showTooltip(e.trigger, "Copied!");
});
clipboardDemos.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
  showTooltip(e.trigger, fallbackMessage(e.action));
});
// tooltips.js
var btns = document.querySelectorAll(".btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseleave", clearTooltip);
  btns[i].addEventListener("blur", clearTooltip);
}
function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "btn");
  e.currentTarget.removeAttribute("aria-label");
}
function showTooltip(elem, msg) {
  elem.setAttribute("class", "btn tooltipped tooltipped-s");
  elem.setAttribute("aria-label", msg);
}
// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "event",
  "length",
  "e.text",
  "e.action",
  "on error",
  "for loop",
  "e.trigger",
  "on success",
  "setAttribute()",
  "console.info()",
  "console.error()",
  "e.currentTarget",
  "new Clipboard()",
  "removeAttribute()",
  "querySelectorAll()",
  "e.clearSelection()",
  "addEventListener : blur",
  "Comparison Operators (<)",
  "Arithmetic Operators (++)",
  "addEventListener : mouseleave",
];
