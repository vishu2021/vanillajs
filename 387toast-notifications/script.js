const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");
const messages = [
  "Random Custom Toast Notification Vanilla 1",
  "Random Custom Toast Notification Vanilla 2",
  "Random Custom Toast Notification Vanilla 3",
  "Random Custom Toast Notification Vanilla 4",
];
function showNotification() {
  const notificationBox = document.createElement("div");
  notificationBox.classList.add("toast");
  notificationBox.innerText = getMessage();
  toasts.appendChild(notificationBox);
  setTimeout(() => {
    notificationBox.remove();
  }, 3000);
}
function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
button.addEventListener("click", () => showNotification());
// Learnings from this project are listed below:
const myLearnings = [
  "length",
  "return",
  "[array]",
  "remove()",
  "innerText",
  "setTimeout()",
  "Math.floor()",
  "Math.random()",
  "appendChild()",
  "createElement()",
  "classList.add()",
  "getElementById()",
  "Arithmetic Operators (*)",
  "addEventListener : click",
];
