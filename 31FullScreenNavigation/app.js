const menu = document.querySelector(".menu");
const links = document.querySelectorAll("li");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (this.dataset.toggle === "close") {
    // console.log('A: ', this.dataset);
    // console.log('B: ', this.dataset.toggle);
    menu.style.clipPath = "circle(100% at 50% 50%)";
    this.dataset.toggle = "open"; 
  } else {
    // console.log('C: ', this.dataset);
    // console.log('D: ', this.dataset.toggle);
    menu.style.clipPath = "";
    this.dataset.toggle = "close";
    highlight.style = "";
  }  
});

links.forEach((link) => {
  link.addEventListener("pointerover", function () {
    // console.log('width: ', this.offsetWidth);
    // console.log('height: ', this.offsetHeight);
    // console.log('translateY: ', this.offsetTop);
    const w = this.offsetWidth,
      h = this.offsetHeight,
      t = this.offsetTop;
    highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`; 
  });

  }); 