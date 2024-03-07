// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
// set date
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// console.log("new Date().getFullYear() :", new Date().getFullYear());
//  close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  // console.log("linksHeight :", linksHeight);
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log("containerHeight :", containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});
//  fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  //  console.log("scrollHeight :", scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log("navHeight :", navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  updateNav();
});
//  smooth scroll
// Update Navigation on Click of Nav Links Options
const scrollLinks = document.querySelectorAll(".scroll-link");
// console.log("scrollLinks :", scrollLinks);
scrollLinks.forEach((link) => {
  //console.log("link :", link);
  link.addEventListener("click", (e) => {
    // console.log("e :", e);
    // prevent default
    e.preventDefault();
    // console.log("e.preventDefault() :", e.preventDefault());
    let navLinksActive = document.querySelectorAll(
      ".links .scroll-link.active"
    );
    navLinksActive.forEach((activeLink) => {
      activeLink.classList.remove("active");
    });
    e.target.classList.add("active");
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(
    //   'e.currentTarget.getAttribute("href") :',
    //   e.currentTarget.getAttribute("href")
    // );
    // console.log("id :", id);
    const element = document.getElementById(id);
    // console.log("element :", element);
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log("navHeight :", navHeight);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log("containerHeight :", containerHeight);
    const fixedNav = navbar.classList.contains("fixed-nav");
    // console.log("fixedNav :", fixedNav);
    let position = element.offsetTop + containerHeight - navHeight;
    // console.log("element.offsetTop :", element.offsetTop);
    // console.log("containerHeight :", containerHeight);
    // console.log("navHeight :", navHeight);
    // console.log("position 1:", position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// Update Navigation on Scroll of Page
function updateNav() {
  const navHeight = navbar.getBoundingClientRect().height;
  const currentSection = [...document.querySelectorAll(".section")].find(
    (e) => e.getBoundingClientRect().bottom >= navHeight
  );
  //console.log("currentSection :", currentSection);
  if (currentSection) {
    [
      ...document.querySelectorAll(
        `.links a:not([href='#${currentSection.id}'])`
      ),
    ].forEach((a) => a.classList.remove("active"));
    document
      .querySelector(`a[href='#${currentSection.id}']`)
      ?.classList.add("active");
  }
}
