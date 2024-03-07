function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let message = document.getElementById("message");
  if (password.length != 0) {
    if (password == confirmPassword) {
      message.textContent = "Passwords match";
      message.style.backgroundColor = "#1dcd59";
    } else {
      message.textContent = "Password don't match";
      message.style.backgroundColor = "#ff4d4d";
    }
  } else {
    alert("Password can't be empty!");
    message.textContent = "";
  }
}
// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "length",
  "alert()",
  "onclick",
  "textContent",
  "Dynamic Styles",
  "getElementById()",
  "if...else if...else",
  "Comparison Operators (==,!=)",
];
