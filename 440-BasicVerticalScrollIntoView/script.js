document.querySelectorAll('a[href^="#"]').forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      offsetTop: 20,
    });
  });
});

// Learnings from this project are listed below:
const myLearnings = [
  "event",
  "behavior",
  "forEach()",
  "offsetTop",
  "getAttribute()",
  "querySelector()",
  "scrollIntoView()",
  "preventDefault()",
  "querySelectorAll()",
  "addEventListener : click",
];
