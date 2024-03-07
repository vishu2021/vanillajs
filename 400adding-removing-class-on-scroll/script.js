let sections = document.getElementsByTagName("section");
let li = document.getElementsByClassName("li");
let i;
window.onscroll = function () {
  for (i = 0; i < sections.length; i = i + 1) {
    // console.log("i :", i);
    // console.log("sections.length :", sections.length);
    if (
      window.scrollY > sections[i].offsetTop &&
      window.scrollY < sections[i].offsetTop + sections[i].offsetHeight
    ) {
      li[i].classList.add("red");
      sections[i].classList.add("red");
    } else {
      li[i].classList.remove("red");
      sections[i].classList.remove("red");
    }
  }
};
