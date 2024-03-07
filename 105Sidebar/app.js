const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const linksAnchors = document.querySelectorAll(".ul-list li a");
toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
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
