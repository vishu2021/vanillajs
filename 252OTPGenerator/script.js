//Define the length of the OTP
const otpLength = 6;
const generateBtn = document.getElementById("generateBtn");
let generateOTP = () => {
  // Generate a random numeric OTP with exactly 6 digits
  const otp = Math.floor(100000 + Math.random() * 900000);
  //Display the generated OTP
  document.getElementById("otpDisplay").innerText = `${otp}`;
};

generateBtn.addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
// Learnings from this project are listed below:
const myLearnings = [
  "innerText",
  "Math.floor()",
  "Math.random()",
  "Backtick Literals (``)",
  "addEventListener : load",
  "addEventListener : click",
  "Arithmetic Operators (+,*)",
];
