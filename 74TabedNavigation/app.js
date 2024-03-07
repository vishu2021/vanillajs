let menuList = document.querySelectorAll(".menu_Links ul li");
let sectionElement = document.querySelectorAll(".sections > section");
menuList.forEach((li) => {
  li.addEventListener("click", (e) => {
    let menuListActive = document.querySelectorAll(".menu_Links ul li.active");
    menuListActive.forEach((activeElement) => {
      activeElement.classList.remove("active");
    });
    e.target.classList.add("active");
    sectionElement.forEach((section) => {
      if (e.target.textContent === section.dataset.section) {
        let sectionVisible = document.querySelectorAll(".sections .visible");
        sectionVisible.forEach((element) => {
          element.classList.remove("visible");
        });
        section.classList.add("visible");
      }
    });
  });
});
