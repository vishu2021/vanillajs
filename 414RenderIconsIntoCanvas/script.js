const form = document.getElementById("form");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const download = document.getElementById("download-link");
const dataURL = document.getElementById("dataURL");

function getFontIconCharacter(className, pseudo = ":before") {
  var testI = document.createElement("i");
  var char;

  testI.className = `ms-Icon ms-Icon--${className}`;
  document.body.appendChild(testI);

  char = window
    .getComputedStyle(testI, pseudo)
    .getPropertyValue("content")
    .replace(/'|"/g, "");

  testI.remove();
  return char;
}

function drawCircle() {
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = canvas.width / 2;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = document.getElementById("bg-color").value || "#777777";
  context.fill();
}

function drawRect() {
  context.fillStyle = document.getElementById("bg-color").value || "#777777";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawIcon() {
  canvas.width =
    parseInt(document.getElementById("image-width").value, 10) || 92;
  canvas.height =
    parseInt(document.getElementById("image-height").value, 10) || 92;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (document.getElementById("shape").checked) {
    drawCircle();
  } else {
    drawRect();
  }
  context.fillStyle = document.getElementById("icon-color").value || "#FFFFFF";
  let fontClass = document.getElementById("font-class").value,
    fontSize = document.getElementById("font-size").value || 280,
    topOffset = document.getElementById("top-offset").value || 210,
    leftOffset = document.getElementById("left-offset").value || 210;
  context.font = fontSize + "px FabricMDL2Icons";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(
    getFontIconCharacter(fontClass),
    parseInt(leftOffset, 10),
    parseInt(topOffset, 10)
  );
  dataURL.value = canvas.toDataURL();
}

window.addEventListener("load", function () {
  drawIcon();
});

document.addEventListener("DOMContentLoaded", function () {
  context.font = "10px FabricMDL2Icons";
  context.fillText("...", 0, 0);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  drawIcon();
});

download.addEventListener("click", function (event) {
  if (typeof this.download !== "undefined") {
    this.href = canvas.toDataURL();
    this.download = `${document.getElementById("font-class").value}.png`;
  } else {
    event.preventDefault();
    alert(
      "Your browser does not support downloading a canvas image. Please right-click on the image to save it."
    );
  }
});

dataURL.addEventListener("focus", function (event) {
  dataURL.select();
});
// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "href",
  "arc()",
  "value",
  "fill()",
  "return",
  "alert()",
  "checked",
  "Math.PI",
  "download",
  "remove()",
  "className",
  "replace()",
  "if...else",
  "topOffset",
  "leftOffset",
  "fillRect()",
  "fillText()",
  "parseInt()",
  "true false",
  "toDataURL()",
  "clearRect()",
  "beginPath()",
  "getContext()",
  "appendChild()",
  "Dynamic Styles",
  "createElement()",
  "getElementById()",
  "getComputedStyle()",
  "getPropertyValue()",
  "event.preventDefault()",
  "Backtick Literals (``)",
  "Logical Operators (||)",
  "addEventListener : load",
  "addEventListener : click",
  "addEventListener : focus",
  "addEventListener : submit",
  "Comparison Operators (!==)",
  "Arithmetic Operators (+,*,/)",
  "addEventListener : DOMContentLoaded",
];
