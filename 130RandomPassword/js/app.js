const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";
// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const btn = document.getElementById("btn");
const getRandomData = (dataSet) => {
  //   console.log("dataSet :", dataSet);
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    // console.log("upperInput.checked :", upperInput.checked);
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    // console.log("lowerInput.checked :", lowerInput.checked);
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    // console.log("numberInput.checked :", numberInput.checked);
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    // console.log("symbolInput.checked :", symbolInput.checked);
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    // console.log("password.length :", password.length);
    // console.log("totalChar.value :", totalChar.value);
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
  //   console.log("passBox.innerText :", passBox.innerText);
};
generatePassword();
btn.addEventListener("click", function () {
  generatePassword();
});
function truncateString(str, num) {
  //   console.log("str :", str);
  //   console.log("num :", num);
  if (str.length > num) {
    let subStr = str.substring(0, num);
    // console.log("subStr :", subStr);
    return subStr;
  } else {
    // console.log("str :", str);
    return str;
  }
}
