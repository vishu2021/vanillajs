const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "dataset",
  "forEach()",
  "querySelector()",
  "classList.add()",
  "classList.remove()",
  "querySelectorAll()",
  "addEventListener : click",
];
