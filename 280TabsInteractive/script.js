let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "forEach()",
  "classList.add()",
  "classList.remove()",
  "querySelectorAll()",
  "addEventListener : click",
];
