console.clear();
const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};
const spyScrolling = () => {
  let menuHeight = document
    .querySelector(".navbar-nav")
    .getBoundingClientRect().height;
  const sections = document.querySelectorAll(".hero-bg");
  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop + menuHeight ||
      document.body.scrollTop + menuHeight;
    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }
  };
};
makeNavLinksSmooth();
spyScrolling();

// Learnings from this project are listed below:
const myLearnings = [
  "hash",
  "event",
  "scrollTop",
  "offsetTop",
  "parentNode",
  "for in loop",
  "document.body",
  "Dynamic Styles",
  "documentElement",
  "window.onscroll",
  "querySelector()",
  "classList.add()",
  "console.clear()",
  "scrollIntoView()",
  "preventDefault()",
  "hasOwnProperty()",
  "querySelectorAll()",
  "classList.remove()",
  "if...else if...else",
  "Backtick Literals (``)",
  "getBoundingClientRect()",
  "addEventListener : click",
  "Arithmetic Operators (+)",
  "Logical Operators (||,&&)",
  "Comparison Operators (<=)",
];
