let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");
document.addEventListener("mousemove", moveCursor);
function moveCursor(e) {
  //console.log("e: ", e);
  let x = e.clientX;
  //console.log("x: ", x);
  let y = e.clientY;
  //console.log("y: ", y);
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}
