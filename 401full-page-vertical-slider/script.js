class Slider {
  constructor(options) {
    // console.log("options :", options);
    this.sections = document.querySelectorAll(options.section);
    // console.log("this.sections :", this.sections);
    this.navigation = document.querySelector(options.dots);
    // console.log("this.navigation :", this.navigation);
    this.navigation.addEventListener("click", this.scrollToSection.bind(this));
    window.addEventListener("scroll", this.setDotStatus.bind(this));
  }
  removeDotStyles() {
    const dots = this.navigation;
    // console.log("dots :", dots);
    const is_active = dots.querySelector(".is-active");
    // console.log("is_active :", is_active);
    if (is_active != null) {
      is_active.classList.remove("is-active");
    }
  }
  setDotStatus() {
    const scroll_position = window.scrollY;
    // console.log("scroll_position :", scroll_position);
    const dots = Array.from(this.navigation.children);
    // console.log("dots :", dots);
    this.sections.forEach((section, index) => {
      // console.log("section :", section);
      // console.log("index :", index);
      const half_window = window.innerHeight / 2;
      // console.log("half_window :", half_window);
      const section_top = section.offsetTop;
      // console.log("section_top :", section_top);
      if (
        scroll_position > section_top - half_window &&
        scroll_position < section_top + half_window
      ) {
        // console.log("A :", scroll_position > section_top - half_window);
        // console.log("B :", scroll_position < section_top + half_window);
        this.removeDotStyles();
        dots[index].classList.add("is-active");
        // console.log("dots[index] :", dots[index]);
      }
    });
  }
  scrollToSection(e) {
    const dots = Array.from(this.navigation.children);
    // console.log("dots :", dots);
    const window_height = window.innerHeight;
    // console.log("window_height :", window_height);
    dots.forEach((dot, index) => {
      // console.log("dot :", dot);
      // console.log("index :", index);
      if (dot == e.target) {
        // console.log("dot == e.target :", dot == e.target);
        window.scrollTo({
          top: window_height * index,
          behavior: "smooth",
        });
        // console.log("top :", top);
      }
    });
  }
}
new Slider({
  section: ".section",
  dots: "#js-dots",
});
