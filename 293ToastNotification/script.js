let x;
let toast = document.getElementById("toast");
let showToastBtn = document.getElementById("show-toast");
function showToast() {
  clearTimeout(x);
  toast.style.transform = "translateX(0)";
  showToastBtn.classList.add("hide");
  x = setTimeout(() => {
    showToastBtn.classList.remove("hide");
    toast.style.transform = "translateX(400px)";
  }, 4000);
}
function closeToast() {
  showToastBtn.classList.remove("hide");
  toast.style.transform = "translateX(400px)";
}
// Learnings from this project are listed below:
const myLearnings = [
  "onclick",
  "setTimeout()",
  "clearTimeout()",
  "Dynamic Styles",
  "classList.add()",
  "getElementById()",
  "classList.remove()",
];
