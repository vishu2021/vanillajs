let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;

//Events Object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

//Detach touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  //Start movement
  moveElement = true;
});

//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

//mouse up / touch end
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "clientX",
  "clientY",
  "offsetTop",
  "try catch",
  "e.touches",
  "offsetLeft",
  "true false",
  "createEvent()",
  "Dynamic Styles",
  "getElementById()",
  "e.preventDefault()",
  "if...else if...else",
  "Logical Operators (!)",
  "Comparison Operators (?)",
  "addEventListener : mouseup",
  "Arithmetic Operators (+,-)",
  "addEventListener : touchend",
  "addEventListener : touchmove",
  "addEventListener : mousedown",
  "addEventListener : mousemove",
  "addEventListener : mouseleave",
  "addEventListener : touchstart",
  "addEventListener : touchstart",
];
