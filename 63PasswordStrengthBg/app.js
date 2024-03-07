const password = document.getElementById("password");
const bg = document.querySelector(".background-image");
password.addEventListener("input", (e) => {
  const input = e.target.value;
  //console.log("A :", input);
  const length = input.length;
  //console.log("B :", length);
  const blurness = 20 - length * 2;
  //console.log("C :", blurness);
  bg.style.filter = `blur(${blurness}px)`;
  //console.log("D :", bg.style.filter);
});
