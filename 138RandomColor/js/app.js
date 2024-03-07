const clickBtn = document.getElementById("btn");
const toast = document.querySelector(".toast");
const colorCode = document.getElementById("color-code");
const getColor = () => {
  // Hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  //   console.log("randomNumber :", randomNumber);
  //   console.log("randomNumber.toString(16) :", randomNumber.toString(16));
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  colorCode.innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
  toast.classList.add("show-toast");
  setTimeout(function () {
    toast.classList.remove("show-toast");
  }, 1000);
};
//event call
clickBtn.addEventListener("click", getColor);
// init call
getColor();
