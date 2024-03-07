(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");
  const animateIt = function (e) {
    const span = this.querySelector("span");
    //     console.log("span :", span);
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;
    //     console.log("{ offsetX: x, offsetY: y } :", { offsetX: x, offsetY: y });
    //     console.log("{ offsetWidth: width, offsetHeight: height } :", {
    // offsetWidth: width,
    // offsetHeight: height,
    //     });
    //     console.log("xMove :", xMove);
    //     console.log("yMove :", yMove);
    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    //     console.log("e.type :", e.type);
    if (e.type === "mouseleave") {
      span.style.transform = "";
    }
  };
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    //     console.log("{ clientX: x, clientY: y } :", { clientX: x, clientY: y });
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  link.forEach((b) => b.addEventListener("mousemove", animateIt));
  link.forEach((b) => b.addEventListener("mouseleave", animateIt));
  window.addEventListener("mousemove", editCursor);
})();
