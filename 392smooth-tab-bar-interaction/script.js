const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);
// Main
// ====
const t = $("#tab");
const ics = $$(".icon");
const c = $(".circle");
let s = {
  animating: false,
  animated: true,
};
// On Load
setTimeout(() => {
  ics[1].removeAttribute("style");
  ics[2].removeAttribute("style");
  c.removeAttribute("style");
  c.setAttribute("data-animating", "false");
}, 2000);
// On Event
ics.forEach((i, index) => {
  i.addEventListener("click", ({ target }) => {
    if (s.animated === true && index != c.getAttribute("data-active")) {
      t.style.setProperty("--x", target.getAttribute("data-x") * 101 + "px");
      $(".active").classList.remove("active");
      i.classList.add("active");
      c.setAttribute("data-animating", "true");
      s.animating = true;
      s.animated = false;
      setTimeout(() => {
        c.setAttribute("data-active", index);
        c.setAttribute("data-animating", "false");
        s.animating = false;
        s.animated = true;
      }, 2000);
    }
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "{object}",
  "forEach()",
  "true false",
  "setTimeout()",
  "setProperty()",
  "Dynamic Styles",
  "setAttribute()",
  "getAttribute()",
  "classList.add()",
  "querySelector()",
  "removeAttribute()",
  "classList.remove()",
  "querySelectorAll()",
  "if...else if...else",
  "Logical Operators (&&)",
  "addEventListener : click",
  "Arithmetic Operators (+,*)",
  "Comparison Operators (===,!=)",
];
