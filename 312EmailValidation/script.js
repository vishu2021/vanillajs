// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker() {
  icon.style.display = "inline-block";
  if (emailId.value.match(mailRegex)) {
    icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    icon.style.color = "#2ecc71";
    errorMsg.style.display = "none";
    emailId.style.borderColor = "  #2ecc71";
  } else if (emailId.value == "") {
    icon.style.display = "none";
    errorMsg.style.display = "none";
    emailId.style.borderColor = "  #444";
  } else {
    icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    icon.style.color = "#ff2851";
    errorMsg.style.display = "block";
    emailId.style.borderColor = " #ff2851";
  }
}
// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "oninput",
  "match()",
  "innerHTML",
  "Email Regex",
  "Dynamic Styles",
  "getElementById()",
  "if...else if...else",
  "Comparison Operators (==)",
];
