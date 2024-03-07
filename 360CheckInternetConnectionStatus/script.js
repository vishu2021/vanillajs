let message = document.getElementById("message");
let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  message.style.cssText = "background-color: #e7f6d5; color: #489b00";
};
let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};
if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}
window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
// Learnings from this project are listed below:
const myLearnings = [
  "textContent",
  "Dynamic Styles",
  "getElementById()",
  "if...else if...else",
  "window.navigator.onLine",
  "addEventListener : online",
  "addEventListener : offline",
];
