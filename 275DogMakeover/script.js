let currentElement = "";
let initialX = 0,
  initialY = 0;

const isTouchDevice = () => {
  try {
    //we try to create TouchEvent (it would fail for non touch devices and throw error)
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

//Drag and drop functions
function dragStart(e) {
  initialX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  initialY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
  currentElement = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

const drop = (e) => {
  e.preventDefault();
  let newX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  let newY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
  currentElement.style.top =
    currentElement.offsetTop - (initialY - newY) + "px";
  currentElement.style.left =
    currentElement.offsetLeft - (initialX - newX) + "px";
};

window.onload = () => {
  currentElement = "";
  let body = document.body;
  body.addEventListener("dragstart", dragStart, false);
  body.addEventListener("dragover", dragOver, false);
  body.addEventListener("drop", drop, false);
  body.addEventListener("touchstart", dragStart, false);
  body.addEventListener("touchmove", drop, false);
};
// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "e.target",
  "try catch",
  "offsetTop",
  "e.touches",
  "e.clientX",
  "e.clientY",
  "true false",
  "offsetLeft",
  "createEvent()",
  "window.onload",
  "Dynamic Styles",
  "e.preventDefault()",
  "addEventListener : drop",
  "Comparison Operators (?)",
  "Arithmetic Operators (+,-)",
  "addEventListener : dragover",
  "addEventListener : touchmove",
  "addEventListener : dragstart",
  "addEventListener : touchstart",
];
