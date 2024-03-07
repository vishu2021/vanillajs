const navbar = document.getElementById("navbar-list");
const containerWidth = window.innerWidth;
const slidesWidth = Array.from(navbar.children).reduce((acc, elm) => {
  return (acc += elm.offsetWidth);
}, 0);
document.addEventListener("mousemove", (e) => {
  let x = e.clientX || e.pageX;
  let offset = (containerWidth - slidesWidth) * (x / containerWidth);

  navbar.style.setProperty("--pos-x", offset + "px");
});
// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "return",
  "reduce()",
  "children",
  "e.clientX",
  "e.clientY",
  "innerWidth",
  "offsetWidth",
  "Array.from()",
  "setProperty()",
  "Dynamic Styles",
  "getElementById()",
  "Logical Operators (||)",
  "Assignment Operators (+=)",
  "addEventListener : mousemove",
  "Arithmetic Operators (+,-,*,/)",
];
