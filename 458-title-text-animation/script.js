const h1 = document.querySelector("h1");
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");
document.querySelectorAll("span").forEach((span, index) => {
  span.style.setProperty("--delay", `${index * 0.1}s`);
});
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    h1.style.setProperty(
      "--animation",
      e.target.getAttribute("data-animation")
    );
    h1.classList.remove("animate");
    void h1.offsetWidth;
    h1.classList.add("animate");
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "void",
  "event",
  "replace()",
  "forEach()",
  "innerHTML",
  "offsetWidth",
  "setProperty()",
  "Dynamic Styles",
  "getAttribute()",
  "classList.add()",
  "querySelector()",
  "classList.remove()",
  "querySelectorAll()",
  "Backtick Literals (``)",
  "Arithmetic Operators (*)",
  "addEventListener : click",
];
