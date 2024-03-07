let color1 = document.querySelector(".c1");
let color2 = document.querySelector(".c2");
let gradientCont = document.querySelector("#gradient-cont");
let btn = document.querySelector(".randomColorBtn");
let resultGradient = document.getElementById("resultGradient");
function makeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // console.log("A :", Math.random());
  // console.log("B :", Math.random() * 16777215);
  // console.log("C :", Math.floor(Math.random() * 16777215));
  // console.log("D :", Math.floor(Math.random() * 16777215).toString(16));
  return randomColor;
}
function generateGradient() {
  color1.value = "#" + makeColor();
  // console.log("E :", color1.value);
  color2.value = "#" + makeColor();
  // console.log("F :", color2.value);
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  resultGradient.textContent = `background: linear-gradient(${color1.value}, ${color2.value})`;
}
function setGradient() {
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  resultGradient.textContent = `background: linear-gradient(${color1.value}, ${color2.value})`;
}
document.body.addEventListener("load", generateGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", generateGradient);
