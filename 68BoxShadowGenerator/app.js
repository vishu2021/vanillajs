const shadowOutputBox = document.getElementById("box");
let sliders = document.querySelectorAll('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');
let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");
sliders.forEach((slider) => {
  //console.log("slider :", slider);
  slider.addEventListener("input", createBox);
});
colors.forEach((color) => {
  //console.log("color :", color);
  color.addEventListener("change", createBox);
});
btnCopy.addEventListener("click", () => {
  output.select();
  boxShadowCSS = output.value;
  //console.log("boxShadowCSS :", boxShadowCSS);
  // This execCommand('copy') is deprecated
  //document.execCommand("copy");
  // We can use this one
  navigator.clipboard.writeText(boxShadowCSS);
  alert("Code Copied");
});
function createBox() {
  let X = sliders[0].value;
  // console.log("X :", X);
  let Y = sliders[1].value;
  //  console.log("Y :", Y);
  let blurRadius = sliders[2].value;
  //console.log("blurRadius :", blurRadius);
  let spreadRadius = sliders[3].value;
  //console.log("spreadRadius :", spreadRadius);
  let shadowColor = colors[0].value;
  //console.log("shadowColor :", shadowColor);
  let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;
  //console.log("boxShadow :", boxShadow);
  shadowOutputBox.style.cssText = `box-shadow: ${boxShadow} ${shadowColor}`;
  //console.log("shadowOutputBox :", shadowOutputBox.style.cssText);
  output.value = `box-shadow: ${boxShadow}`;
  //console.log("output.value :", output.value);
}
createBox();
