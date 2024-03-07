const body = document.body;
const btns = document.querySelectorAll(".btn");
const btnRefresh = document.getElementById("btnRefresh");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    color = btn.value;
    changeBackground(color);
  });
});
function changeBackground(color) {
  body.className = "";
  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}
btnRefresh.addEventListener("click", () => {
  body.className = "";
  btns.forEach((btn) => btn.classList.remove("active"));
});
