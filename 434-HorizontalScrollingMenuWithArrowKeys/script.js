/** 
 o Eliminates dependency on jQuery. Is rewritten in vanilla JavaScript with animation frames.
 o Scrolls to next hidden menu item and stops, does not jump to the far right which would be bad if a lot of menu items in beginning of list became hidden.
 o Has a more realistic design with menu items that are spaced apart and smaller than their container.
 o Uses flex box for positioning.
 o Increases count of menu items from 4 to 8 to simulate a real need for scrolling.
 o Hides right arrow if all menu items fit in the container eliminating the need for scrolling.
 o Simplifies the code by eliminating functions that are only called once.
 o Has meaningful variable names and lots of comments to explain how it works.
 */

// DOM elements to track.
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const menu = document.getElementById("menu");

// Establish unchanging constants and initialize variables.
const menuWrapperSize = document.getElementById("menu-wrapper").offsetWidth; // Unchanging area of the screen where the menu is always visible.
const menuSize = document.getElementById("menu").offsetWidth; // Includes itemsCount * itemSize but also factors in space between items added by flex box.
const menuInvisibleSize = Math.max(menuSize - menuWrapperSize, 0); // Fixed portion of scrollable menu that is hidden at all times, or zero if menu fits within container.
const arrowSize = rightArrow.offsetWidth; // Width of each arrow div. In current design, this equates to 12px. Still computes value even if right arrow is hidden, which it is at time this line is executed.
const menuEndOffset = Math.max(menuInvisibleSize - arrowSize, 0); // Fixed portion of scrollable menu that is not obscured by an overlapping arrow key, or zero if no arrow keys are needed.
const itemsCount = document.getElementsByClassName("item").length; // Number of menu items.
const itemSize = document.getElementsByClassName("item")[0].offsetWidth; // offsetWidth includes borders and padding but not margins of a menu item (since all the same, choose first one in array). FYI, clientWidth includes padding but NOT borders and margins.
const itemsSpaceBetween = (menuSize - itemsCount * itemSize) / (itemsCount - 1); // Space between menu items is deliberately set to equal menu wrapper padding left/right. In this design it is 20 pixels.
const distanceInPixels = itemSize + itemsSpaceBetween; // Distance to scroll per arrow button click equals width of a menu item plus the space to its right or left. In this design, it is 75 + 20 = 95.
const durationInMilliseconds = 500;
let starttime = null;

// Initially, on page load menu items are left aligned and left arrow is hidden. Let's hide right arrow also if there is no need for it (as when all menu items fit within visible container).
if (menuInvisibleSize === 0) {
  rightArrow.classList.add("hidden");
}

// Get current left position of menu in pixels.
const getMenuPosition = () => {
  return parseFloat(menu.style.left) || 0; // First time, left property is not set so initialize to 0.
};

// Get current distance (in pixels) that we have scrolled.
const getScrolledDistance = () => {
  return -1 * getMenuPosition(); // Negate value because this is the only way it will work.
};

// After an arrow key is clicked and menu is animating, check to see where we are and determine which arrow key(s) to show, always resulting in at least one arrow key visible. Also, update data at bottom.
// Notes: o This function is only applicable when all menu items cannot be seen in container at one time and an arrow key is clicked to animate menu.
//        o If all menu items fit in visible container, UI will be initially rendered without any arrow keys and this function will never be called.
const checkPosition = () => {
  // Calculate where we are right now.
  const menuPosition = getScrolledDistance();

  // Determine which arrow key(s) to display based on position.
  if (menuPosition <= arrowSize) {
    // SHOW RIGHT ARROW if we are scrolling from far left.
    leftArrow.classList.add("hidden"); // FYI, this will NOT create duplicate hidden class if leftArrow already contains it.
    rightArrow.classList.remove("hidden");
  } else if (menuPosition < menuEndOffset) {
    // SHOW BOTH ARROWS when in the middle of the menu.
    leftArrow.classList.remove("hidden");
    rightArrow.classList.remove("hidden");
  } else if (menuPosition >= menuEndOffset) {
    // SHOW LEFT ARROW if we are scrolling as far right as we can go.
    leftArrow.classList.remove("hidden");
    rightArrow.classList.add("hidden");
  }

  // Print changing scroll position under the menu for informational purposes.
  document.querySelector("#print-menu-position span").textContent =
    menuPosition + "px";
};

const animateMenu = (timestamp, startingPoint, distance) => {
  const runtime = timestamp - starttime;
  let progress = runtime / durationInMilliseconds;
  progress = Math.min(progress, 1);
  let newValue = (startingPoint + distance * progress).toFixed(2) + "px";
  menu.style.left = newValue;

  if (runtime < durationInMilliseconds) {
    // If we still have time remaining...
    requestAnimationFrame(function (timestamp) {
      // Request another animation frame and recursively call THIS function.
      animateMenu(timestamp, startingPoint, distance);
    });
  }
  checkPosition();
};

const animationFramesSetup = (timestamp, travelDistanceInPixels) => {
  timestamp = timestamp || new Date().getTime(); // if browser doesn't support requestAnimationFrame, generate our own timestamp using Date.
  starttime = timestamp;
  const startingPoint = getMenuPosition(); // This cannot be defined up top in constants. Need to read current value only during initial setup of arrow button click.
  animateMenu(timestamp, startingPoint, travelDistanceInPixels);
};

rightArrow.addEventListener("click", () =>
  requestAnimationFrame((timestamp) =>
    animationFramesSetup(timestamp, -1 * distanceInPixels)
  )
);

leftArrow.addEventListener("click", () =>
  requestAnimationFrame((timestamp) =>
    animationFramesSetup(timestamp, distanceInPixels)
  )
);
// Print unchanging values under the menu for informational purposes.
document.querySelector("#print-wrapper-size span").textContent =
  menuWrapperSize + "px";
document.querySelector("#print-menu-size span").textContent = menuSize + "px";
document.querySelector("#print-menu-invisible-size span").textContent =
  menuInvisibleSize + "px";
document.querySelector("#print-menu-end-offset span").textContent =
  menuEndOffset + "px";

// Learnings from this project are listed below:
const myLearnings = [
  "null",
  "return",
  "getTime()",
  "toFixed()",
  "new Date()",
  "Math.min()",
  "Math.max()",
  "true false",
  "textContent",
  "offsetWidth",
  "parseFloat()",
  "Dynamic Styles",
  "classList.add()",
  "querySelector()",
  "getElementById()",
  "classList.remove()",
  "if...else if...else",
  "Logical Operators (||)",
  "requestAnimationFrame()",
  "getElementsByClassName()",
  "addEventListener : click",
  "Arithmetic Operators (-,+,*,/)",
  "Comparison Operators (===,<=,<,>=)",
];
