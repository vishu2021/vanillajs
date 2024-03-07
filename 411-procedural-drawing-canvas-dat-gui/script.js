// Variables
const points = [],
  tickSpeed = 5,
  base = 180,
  numPoints = 10,
  maxTicks = 650;
let ticks = 0,
  palette,
  max,
  blending;

// will be used to dynamically increase/decrease tickSpeed
const speedAdjuster = 2000;

// Canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const setupDatGui = () => {
  // GUI Settings
  const gui = new dat.GUI();
  palette = {
    color1: { h: 148, s: 0.8, v: 0.7 }, // Hue, saturation, value
    color2: { h: 264, s: 0.9, v: 0.6 },
    color3: { h: 350, s: 0.9, v: 0.3 },
  };
  for (let i = 1; i < 4; i++) {
    gui.addColor(palette, `color${i}`);
  }

  max = { maxTicks: maxTicks };
  // object, property, range start, range end
  gui.add(max, "maxTicks", maxTicks / 10, maxTicks * 2);

  blending = {
    blendingMode: "lighter", // Default blending mode
  };
  gui.add(blending, "blendingMode", [
    "source-over",
    "destination-over",
    "lighter",
    "xor",
  ]);
};

// Resizes canvas according to current window width/height
const windowResize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

// Initialize with some points
const init = () => {
  points.length = 0;
  ticks = 0;

  for (let i = 0; i < numPoints; i++) points.push(createPoint());

  for (let i = 0; i < points.length; i++) {
    let j = i;
    while (j == i) j = Math.floor(Math.random() * points.length);
    points[i].neighbor = points[j];
  }
};

// Create a point random position/direction, along with a gradient
const createPoint = () => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const a = Math.random() * Math.PI;
  const dx = Math.cos(a);
  const dy = Math.sin(a);
  const hue = (Math.random() * 100 + base) % 360;
  const color = createGradient();

  return { x, y, dx, dy, hue, color };
};

// Create a gradient with control colors
const createGradient = () => {
  const saturationFactor = 1;
  const color1 = `hsla(${palette.color1.h}, ${palette.color1.s * 100}%, ${
    palette.color1.v * 100
  }%, 0.05)`;
  const color2 = `hsla(${palette.color2.h}, ${palette.color2.s * 100}%, ${
    palette.color2.v * 100
  }%, 0.05)`;
  const color3 = `hsla(${palette.color3.h}, ${palette.color3.s * 100}%, ${
    palette.color3.v * 100
  }%, 0.05)`;

  const middleSaturation =
    ((palette.color1.s + palette.color3.s) / 2) * saturationFactor;
  const middleColor = `hsla(${palette.color2.h}, ${middleSaturation * 100}%, ${
    palette.color2.v * 100
  }%, 0.05)`;

  return gradientFromColors(color1, middleColor, color3);
};

const gradientFromColors = (color1, middleColor, color3) => {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(0.5, middleColor);
  gradient.addColorStop(1, color3);

  return gradient;
};

// Update function
const updatePoint = (point) => {
  point.x += point.dx;
  point.y += point.dy;
  if (point.x < 0 || point.x >= canvas.width) point.dx *= -1;
  if (point.y < 0 || point.y >= canvas.height) point.dy *= -1;
  ctx.strokeStyle = point.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  // Set blending mode for curve overlap, some will overlap!
  ctx.globalCompositeOperation = blending.blendingMode;

  ctx.moveTo(point.x, point.y);
  ctx.lineTo(point.neighbor.x, point.neighbor.y);
  ctx.stroke();
};

// Draw up to max ticks via animationFrames
const draw = () => {
  if (ticks > max.maxTicks) return;
  for (let n = 0; n < (tickSpeed * max.maxTicks) / speedAdjuster; n++) {
    for (let i = 0; i < points.length; i++) {
      updatePoint(points[i]);
    }
    ticks++;
  }

  // request next animation frame
  // likely in about: 1, divided by monitor refresh rate
  requestAnimationFrame(draw);
};

// Start function
const start = () => {
  ctx.translate(0.5, 0.5); // anti aliasing hack/trick
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
  ticks = 0;
  draw();
};

// Event listeners
window.addEventListener("resize", windowResize, false);
canvas.addEventListener("click", () => start());
windowResize();

// kickstart
setupDatGui();
start();

// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "array",
  "index",
  "add()",
  "length",
  "return",
  "push()",
  "for loop",
  "neighbor",
  "lineTo()",
  "moveTo()",
  "stroke()",
  "dat.GUI()",
  "if...else",
  "while loop",
  "Math.cos()",
  "Math.sin()",
  "innerWidth",
  "clearRect()",
  "innerHeight",
  "blendingMode",
  "getContext()",
  "Math.floor()",
  "Math.random()",
  "Dynamic Style",
  "addColorStop()",
  "getElementById()",
  "Logical Operators (||)",
  "createLinearGradient()",
  "Backtick Literals (``)",
  "addEventListener : click",
  "addEventListener : resize",
  "Assignment Operators (+=,*=)",
  "Comparison Operators (<,>=,>,==)",
  "Arithmetic Operators (+,-,++,*,/,%)",
];
