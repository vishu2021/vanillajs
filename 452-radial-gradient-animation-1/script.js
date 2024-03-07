//Static Gradient
var gradientStatic = document.querySelector(".gradient_Static");
//Animate Gradient
var gradientAnimate = document.querySelector(".gradient_Animate");
var btn = document.querySelector(".badge");
//active ring in the gradientAnimate
//the first ring in gradient is: --color0 (the center of the circle), and the last one is: --color10
var ring = 10;
//references to requestAnimationFrame - so we can stop it
var raf;
//define the value of the transparency of the last color from gradientStatic
var transparentValue = 0.33;
//references to requestAnimationFrame in fx: transparentIncrease
var transparentIncreaseFrame;
//array which includes colors for gradientStatic
var colors_gradient_Static = [
  "#280837",
  "#f4c5d9",
  "#eaa0c5",
  "#d679aa",
  "#b35d8e",
  "#884072",
  "#6b3467",
  "#61275a",
  "#4b1f50",
  "#391145",
  "rgba(203, 90, 217, 0.33)",
];
//array which includes colors for gradientAnimate
var colors_gradient_Animate = [
  "#fae0e9",
  "#290634",
  "#401a45",
  "#581b51",
  "#622a5e",
  "#7c3366",
  "#a2467a",
  "#cc689d",
  "#e38ab7",
  "#f0b1cc",
  "transparent",
];
//initial painting gradientStatic with colors
for (var i = 0; i < 11; i++) {
  gradientStatic.style.setProperty(
    "--color" + Number(i),
    colors_gradient_Static[i]
  );
}
btn.addEventListener(
  "mouseenter",
  function () {
    window.cancelAnimationFrame(raf); //stops the execution already started animation
    //reset values
    transparentValue = 0.33;
    ring = 1;
    //starting animateOut every 100ms (1000 / 10 = 100ms), using requestAnimateFrame
    Timer(animateOut, 10);
    animateBtn();
  },
  false
);
btn.addEventListener(
  "mouseleave",
  function () {
    window.cancelAnimationFrame(raf); //stops the execution already started animation
    ring = 10;
    btn.classList.remove("active");
    document.querySelector(".btnText").innerHTML = "Hover<br>me!</span>";
    window.cancelAnimationFrame(transparentIncreaseFrame);
    //starting animateOut every 80ms (1000 / 12.5 = 80ms), using requestAnimateFrame
    Timer(animateIn, 12.5);
  },
  false
);
function animateIn() {
  for (i = 10; i > -1; i--) {
    if (i === ring) {
      //painting the active ring of gradientAnimate
      gradientAnimate.style.setProperty(
        "--color" + Number(i),
        colors_gradient_Animate[i]
      );
      //painting the active ring of gradientStatic
      gradientStatic.style.setProperty(
        "--color" + Number(i),
        colors_gradient_Static[i]
      );
      //all other rings of gradientAnimate painted in transparent
    } else
      gradientAnimate.style.setProperty("--color" + Number(i), "transparent");
  }
  ring--;
  //when the active ring reaches the first one, restart value
  if (ring === -1) ring = 10;
}
function animateOut() {
  if (ring === 6) btn.classList.remove("active");
  for (var i = 0; i < 11; i++) {
    if (i === ring) {
      //painting the active ring of gradientAnimate
      gradientAnimate.style.setProperty(
        "--color" + Number(i),
        colors_gradient_Animate[i]
      );
      if ((ring === 10) & (transparentValue > 0)) transparentIncrease();
      else
        gradientStatic.style.setProperty("--color" + Number(i), "transparent");
      //all other rings of gradientAnimate, painted in transparent
    } else
      gradientAnimate.style.setProperty("--color" + Number(i), "transparent");
  }
  ring++;
  //when the active ring reaches the last one
  if (ring === 11) {
    ring = 0;
    animateBtn();
  }
}
//animates rise of transparency over the last ring (above the image) - for more beautiful visual effect
function transparentIncrease() {
  transparentValue = transparentValue - 0.01;
  gradientStatic.style.setProperty(
    "--color10",
    "rgba(203, 90, 217, " + transparentValue + ")"
  );
  if (transparentValue > 0)
    transparentIncreaseFrame =
      window.requestAnimationFrame(transparentIncrease);
}
function animateBtn() {
  document.querySelector(".btnText").innerHTML = "Leave<br>me!</span>";
  btn.classList.toggle("active");
}
//This function is used to slow down the execution of requestAnimationFrames to desired time
var Timer = function (callback, fps) {
  var now = 0;
  var delta = 0;
  var then = Date.now();
  var frames = 0;
  var oldTime = 0;
  fps = 1000 / (this.fps || fps || 60);
  return requestAnimationFrame(function loop(time) {
    raf = requestAnimationFrame(loop);
    now = Date.now();
    delta = now - then;
    if (delta > fps) {
      // Update time stuffs
      then = now - (delta % fps);
      // Calculate the frames per second.
      frames = 1000 / (time - oldTime);
      oldTime = time;
      // Call the callback-function and pass our current frame into it.
      callback(frames);
    }
  });
};
//initial active animation
//starting animateOut every 80ms (1000 / 12.5 = 80ms), using requestAnimateFrame
Timer(animateIn, 12.5);

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "return",
  "[array]",
  "{object}",
  "for loop",
  "Number()",
  "innerHTML",
  "true false",
  "Date.now()",
  "setProperty()",
  "Dynamic Styles",
  "querySelector()",
  "classList.toggle()",
  "classList.remove()",
  "if...else if...else",
  "Logical Operators (||)",
  "cancelAnimationFrame()",
  "Assignment Operators ()",
  "requestAnimationFrame()",
  "Bitwise AND (&) Operator",
  "addEventListener : mouseleave",
  "addEventListener : mouseenter",
  "Comparison Operators (<,>,===)",
  "Arithmetic Operators (++,+,--,-,*,/,%)",
];
