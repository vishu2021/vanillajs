const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
// Learnings from this project are listed below:
const myLearnings = [
  "forEach()",
  "classList.add()",
  "querySelector()",
  "classList.remove()",
  "querySelectorAll()",
  "addEventListener : click",
];
