const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  scroll.classList.add("active");
  scrollX = e.pageX - scroll.offsetLeft;
  scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  var element = e.pageX - scroll.offsetLeft;
  var scrolling = (element - scrollX) * 2;
  scroll.scrollLeft = scrollLeft - scrolling;
});

// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "return",
  "e.pageX",
  "scrollLeft",
  "true false",
  "offsetLeft",
  "Dynamic Styles",
  "querySelector()",
  "classList.add()",
  "classList.remove()",
  "e.preventDefault()",
  "if...else if...else",
  "Logical Operators (!)",
  "Backtick Literals (``)",
  "addEventListener : mouseup",
  "Arithmetic Operators (-,*)",
  "addEventListener : mousemove",
  "addEventListener : mousedown",
  "addEventListener : mouseleave",
];
