let msg = document.getElementById("msg");

document.addEventListener("mouseup", (event) => {
  if (event.button == 0) {
    msg.innerHTML = `<span>Left</span> Button Clicked`;
  } else if (event.button == 1) {
    msg.innerHTML = `<span>Middle</span> Button Clicked`;
  } else if (event.button == 2) {
    msg.innerHTML = `<span>Right</span> Button Clicked`;
  }
});
