// script.js

document.addEventListener("DOMContentLoaded", function () {
  const scrollRight = document.getElementById("scrollRight");
  const productListContainer = document.querySelector(
    ".product-list-container"
  );

  // console.log("Initial Scroll Left:", productListContainer.scrollLeft);

  scrollRight.addEventListener("click", function () {
    // console.log("Clicked!");
    productListContainer.scrollBy({
      top: 0,
      left: 620,
      behavior: "smooth",
    });
    // console.log("Scroll Left After:", productListContainer.scrollLeft);
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "scrollBy()",
  "querySelector()",
  "getElementById()",
  "addEventListener : click",
  "addEventListener : DOMContentLoaded",
];
