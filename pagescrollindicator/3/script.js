(function () {
  const app = {
    scrollDistance: 0, //Actual scrollable distance in pixels
    init() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom() {
      this.indicator = document.querySelector("#indicator");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this));
      window.addEventListener("resize", this.handleResize.bind(this));
    },
    handleScroll(event) {
      const scrollY = window.scrollY;
      if (this.scrollDistance === 0) {
        this.setScrollDistance();
      }
      let scrollPercent = Math.floor((scrollY * 100) / this.scrollDistance); // Distance currently scrolled
      if (scrollPercent > 100) {
        scrollPercent = 100;
      }
      indicatorPosition = scrollPercent;
      this.indicator.value = indicatorPosition;
    },
    handleResize() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      this.setScrollDistance();
    },
    setScrollDistance() {
      this.scrollDistance =
        document.body.scrollHeight - (window.scrollY + window.innerHeight);
    },
  };
  app.init();
})();

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "value",
  "bind()",
  "scrollHeight",
  "Math.floor()",
  "document.body",
  "window.scrollY",
  "window.scroll()",
  "querySelector()",
  "window.innerHeight",
  "if...else if...else",
  "addEventListener : scroll",
  "addEventListener : resize",
  "Comparison Operators (===,>)",
  "Arithmetic Operators (+,-,*,/)",
];
