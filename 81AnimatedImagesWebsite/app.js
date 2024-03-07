let btns = document.querySelectorAll(".btn");
let banner = document.getElementById("banner");
const images = [
  "https://cdn.pixabay.com/photo/2024/01/08/17/54/wren-8496039_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/08/17/41/chokeberry-8496026_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
];
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    banner.src = `${images[index]}`;
    animation();
    btn.classList.add("active");
  });
});
function animation() {
  banner.classList.add("zoom");
  setTimeout(() => {
    banner.classList.remove("zoom");
  }, 1000);
  for (b of btns) {
    b.classList.remove("active");
  }
}
