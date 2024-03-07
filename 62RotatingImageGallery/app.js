const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let x = 0;
prevBtn.addEventListener("click", () => {
  x = x + 45;
  //console.log("prev :", x);
  rotate();
});
nextBtn.addEventListener("click", () => {
  x = x - 45;
  //console.log("next :", x);
  rotate();
});
function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
