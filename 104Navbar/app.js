const navToggle = document.querySelector(".nav-toggle");
const ulList = document.querySelector(".ul-list");
const linksAnchors = document.querySelectorAll(".ul-list li a");
navToggle.addEventListener("click", function () {
  if (ulList.classList.contains("slide-down")) {
    //console.log("if condition");
    ulList.classList.remove("slide-down");
    ulList.classList.add("slide-up");
  } else if (ulList.classList.contains("slide-up")) {
    //console.log("else if condition");
    ulList.classList.remove("slide-up");
    ulList.classList.add("slide-down");
  } else {
    //console.log("else condition");
    ulList.classList.add("slide-down");
  }
  navToggle.classList.toggle("rotate-toggle-btn");
  // console.log("toggle btn");
});
linksAnchors.forEach((anchor) => {
  //console.log("anchor :", anchor);
  anchor.addEventListener("click", (e) => {
    let linksAnchorsActive = document.querySelectorAll(".ul-list a.active");
    //console.log("linksAnchorsActive :", linksAnchorsActive);
    linksAnchorsActive.forEach((activeElement) => {
      // console.log("activeElement :", activeElement);
      activeElement.classList.remove("active");
    });
    e.target.classList.add("active");
    // console.log("e.target :", e.target);
  });
});
