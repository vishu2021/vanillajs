// Get the elements
let elements = document.querySelectorAll(".content");
// console.log("elements :", elements);
// Function to check for fade effect on scroll and resize
function checkForFade() {
  var windowHeight = window.innerHeight;
  //   console.log("windowHeight :", windowHeight);
  elements.forEach(function (element) {
    var elementHeight = element.offsetHeight;
    // console.log("elementHeight :", elementHeight);
    var elementOffset = element.getBoundingClientRect().top;
    // console.log("elementOffset :", elementOffset);
    var space =
      windowHeight - (elementHeight + elementOffset - window.pageYOffset);
    // console.log("space :", space);
    if (space < window.pageYOffset + 400 - elementHeight) {
      element.classList.add("non-focus");
    } else {
      element.classList.remove("non-focus");
    }
  });
}
// Add event listeners for scroll and resize and call the checkForFade function
window.addEventListener("scroll", checkForFade);
window.addEventListener("resize", checkForFade);
// Trigger the scroll event on initial load
window.dispatchEvent(new Event("scroll"));
