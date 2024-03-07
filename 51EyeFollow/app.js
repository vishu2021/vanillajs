let body = document.querySelector("body");
let eyes = document.querySelectorAll(".eye");
body.addEventListener("mousemove", eyeball);
function eyeball(event) {
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
    //console.log("A :", event);
    //console.log("B :", eye);
    //console.log("C :", eye.getBoundingClientRect().left);
    //console.log("D :", eye.clientWidth);
    //console.log("E :", x);
    //console.log("F :", eye.getBoundingClientRect().top);
    //console.log("G :", eye.clientHeight);
    //console.log("H :", y);
    //console.log("I :", radian);
    //console.log("J :", rotate);
  });
}
