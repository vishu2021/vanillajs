let captcha = document.querySelector(".captcha");
let reloadBtn = document.querySelector(".reload-btn");
let inputField = document.querySelector("input");
let checkBtn = document.querySelector(".check-btn");
let statusTxt = document.querySelector(".status-text");
let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let inputVal = inputField.value.split("").join("");
  //console.log("inputField.value :", inputField.value);
  //console.log("inputField.value.split('') :", inputField.value.split(""));
  // console.log(
  //   "inputField.value.split('').join('') :",
  //   inputField.value.split("").join("")
  // );
  if (inputVal == captcha.innerText) {
    statusTxt.classList.remove("error");
    statusTxt.classList.add("success");
    statusTxt.innerText = "Nice, Captcha Matched";
    //console.log("Condition if :", inputVal == captcha.innerText);
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  } else {
    statusTxt.classList.remove("success");
    statusTxt.classList.add("error");
    statusTxt.innerText = "Captcha not matched. Please Try Again Later";
    //console.log("Condition else :", inputVal == captcha.innerText);
  }
});
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    // console.log("Math.random() :", Math.random());
    // console.log(
    //   "Math.random() * allCharacters.length :",
    //   Math.random() * allCharacters.length
    // );
    // console.log(
    //   "Math.floor(Math.random() * allCharacters.length) :",
    //   Math.floor(Math.random() * allCharacters.length)
    // );
    // console.log("randomChar :", randomChar);
    captcha.innerText += `${randomChar}`;
    //console.log("captcha.innerText :", captcha.innerText);
  }
}
reloadBtn.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCaptcha();
});
