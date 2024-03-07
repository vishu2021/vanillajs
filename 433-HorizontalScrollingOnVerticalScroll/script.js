"use strict";
// Adding scroll event listener
document.addEventListener("scroll", horizontalScroll);
//Selecting Elements
let sticky = document.querySelector(".sticky");
let stickyParent = document.querySelector(".sticky-parent");
let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight =
  stickyParent.getBoundingClientRect().height -
  sticky.getBoundingClientRect().height;
//Scroll function
function horizontalScroll() {
  //Checking whether the sticky element has entered into view or not
  let stickyPosition = sticky.getBoundingClientRect().top;
  if (stickyPosition > 1) {
    return;
  } else {
    let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
    sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
  }
}
// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "use strict",
  "scrollLeft",
  "scrollWidth",
  "querySelector()",
  "if...else if...else",
  "getBoundingClientRect()",
  "Comparison Operators (>)",
  "addEventListener : scroll",
  "Arithmetic Operators (*,-,/)",
];
