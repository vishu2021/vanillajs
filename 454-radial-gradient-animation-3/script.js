//This variable will keep references to the gradient when dynamically created
var gradient;

//references to requestAnimationFrame - so we can stop it
var raf;

//active ring in the gradient
//the first ring in gradient is: --color1 (the center of the circle), and the last one is: ring_last
var ring = 1;

//the references of the max number of the ring in gradient
var ring_last;

//references to width of the individual ring in Radial gradient
var offset;

//color to fill the gradient at the beginning
var color_of_rings = "black";

//opacity of color for active ring
var opacity;

//switch that determines whether the hover has been terminated by the user (true)
var hoverStop;

//for the small animation of the increase blura of btn element
var blur_scale = 1;

var wrapper = document.getElementById("wrapper");
var btn = document.querySelector(".badge");
var sun = document.querySelector(".btn .spinningColors span:nth-child(4)");

function createGradiant() {
  var gradientSyntax = "";
  var viewportwidth = wrapper.clientWidth;

  //depending on the length of the viewpoint, I determine the different width for the offset of the Gradant (width of the individual ring)
  if (viewportwidth > 1700) offset = 60;
  else if (viewportwidth > 1400) offset = 50;
  else offset = 40;

  ring_last = Math.ceil(viewportwidth / offset / 2 + 3);

  gradient = document.createElement("div");
  gradient.setAttribute("class", "gradient");
  wrapper.insertAdjacentElement("afterbegin", gradient);

  //In this loop, we create the syntax for Radial gradient
  //The syntax for the first and last ring is created separately (because the syntax is slightly different for them)
  for (var i = 1; i < ring_last + 1; i++) {
    if (i === 1) {
      //for first ring
      gradientSyntax =
        gradientSyntax + "var(--color" + i + ") " + offset + "px,";
      continue;
    }
    //for all other rings
    gradientSyntax =
      gradientSyntax +
      " var(--color" +
      i +
      ") " +
      offset * (i - 1) +
      "px " +
      offset * i +
      "px,";

    if (i === ring_last) {
      //for last ring
      gradientSyntax =
        gradientSyntax +
        " var(--color" +
        i +
        ") " +
        offset * (i - 1) +
        "px " +
        offset * i +
        "px)";
      break;
    }
  }
  gradient.style.background =
    "radial-gradient(circle at 50% 50%, " + gradientSyntax;

  //paint gradient with the desired color (all the rings at the same time)
  paintingGradient(color_of_rings);

  //determine how much time it takes for an animateOut to complete the first cycle
  document
    .querySelector(".badge")
    .style.setProperty("--timeOffset", ring_last * 80 + "ms");
}
createGradiant();

function paintingGradient(color) {
  for (var i = 1; i < ring_last + 1; i++) {
    gradient.style.setProperty("--color" + Number(i), color);
  }
}

window.addEventListener(
  "resize",
  function () {
    wrapper.removeChild(gradient);
    createGradiant();
  },
  false
);

btn.addEventListener(
  "mouseenter",
  function () {
    window.cancelAnimationFrame(raf); //stops the execution already started animation

    //reset values
    ring = 2;
    hoverStop = false;

    //starting animateOut every 80ms (1000 / 12.5 = 80ms), using requestAnimateFrame
    Timer(animateOut, 12.5);
  },
  false
);

btn.addEventListener(
  "mouseleave",
  function () {
    hoverStop = true;

    //stopping the already started animation (animateOut), to trigger the same only this time with fast execution time (25ms)
    window.cancelAnimationFrame(raf);
    Timer(animateOut, 40);
  },
  false
);

function animateOut() {
  shining(); //starting small animation "sunshine" (increasing blur of btn)

  for (var i = 1; i < ring_last + 1; i++) {
    //painting the active ring
    if (i === ring)
      gradient.style.setProperty("--color" + Number(i), "transparent");
    //first and the second ring before and after the active, are painting slightly differently
    else if (i === ring + 1)
      gradient.style.setProperty("--color" + Number(i), "rgba(0, 0, 0, 0.40)");
    else if (i === ring + 2)
      gradient.style.setProperty("--color" + Number(i), "rgba(0, 0, 0, 0.70)");
    else if (i === ring - 1)
      gradient.style.setProperty("--color" + Number(i), "rgba(0, 0, 0, 0.40)");
    else if (i === ring - 2)
      gradient.style.setProperty("--color" + Number(i), "rgba(0, 0, 0, 0.70)");
    //all other rings behind the active are painted in transparent
    else gradient.style.setProperty("--color" + Number(i), color_of_rings);
  }
  ring++;

  //when the active ring reaches the last one
  if (ring === ring_last + 1) {
    ring = 1;
    blur_scale = 1;

    //If hover ended up under the influence of the user
    if (hoverStop) {
      window.cancelAnimationFrame(raf);
      //reset values
      ring = ring_last;
      opacity = 0.9;
      blur_scale = 1;

      //starting animateIn every 50ms (1000 / 20 = 50ms), using requestAnimateFrame
      Timer(animateIn, 20);
    }
  }
}

function animateIn() {
  for (var i = ring_last; i > 0; i--) {
    //painting the active ring
    if (i === ring)
      gradient.style.setProperty(
        "--color" + Number(i),
        "rgba(0, 0, 0, " + opacity + ")"
      );
    //all other rings after the active are painted in black
    else if (i < ring)
      gradient.style.setProperty("--color" + Number(i), "black");
  }
  ring--;
  opacity = opacity - 0.04;
  //when the active ring reaches the first one
  if (ring === 0) window.cancelAnimationFrame(raf);
}

function shining() {
  blur_scale = blur_scale + 0.05;
  sun.style.setProperty("--scale-offset", blur_scale);
}

//This function is used to slow down the execution of requestAnimationFrames to desired time (thank you, stackoverflow)
var Timer = function (callback, fps) {
  var now = 0;
  var delta = 0;
  var then = Date.now();
  var frames = 0;
  var oldtime = 0;
  fps = 1000 / (this.fps || fps || 60);

  return requestAnimationFrame(function loop(time) {
    raf = requestAnimationFrame(loop);
    now = Date.now();
    delta = now - then;

    if (delta > fps) {
      // Update time stuffs
      then = now - (delta % fps);

      // Calculate the frames per second.
      frames = 1000 / (time - oldtime);
      oldtime = time;

      // Call the callback-function and pass our current frame into it.
      callback(frames);
    }
  });
};

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "break",
  "return",
  "[array]",
  "{object}",
  "for loop",
  "Number()",
  "continue",
  "innerHTML",
  "true false",
  "Date.now()",
  "Math.ceil()",
  "clientWidth",
  "removeChild()",
  "setProperty()",
  "Dynamic Styles",
  "createElement()",
  "querySelector()",
  "getElementById()",
  "classList.toggle()",
  "classList.remove()",
  "if...else if...else",
  "Logical Operators (||)",
  "cancelAnimationFrame()",
  "Assignment Operators ()",
  "requestAnimationFrame()",
  "insertAdjacentElement()",
  "addEventListener : resize",
  "addEventListener : mouseleave",
  "addEventListener : mouseenter",
  "Comparison Operators (<,>,===)",
  "Arithmetic Operators (++,+,--,-,*,/,%)",
];
