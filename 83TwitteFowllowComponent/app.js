let body = document.body;
let themeSwitch = document.querySelector(".theme-switch");
let lightDarkText = document.getElementById("lightDarkText");
const followButtons = document.querySelectorAll(".follow-button");
themeSwitch.addEventListener("click", toggleTheme);
function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    lightDarkText.innerText = "Light";
  } else {
    body.className = "light-theme";
    lightDarkText.innerText = "Dark";
  }
}
followButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});
function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") {
    button.innerText = "Unfollow";
  } else {
    button.innerText = "Follow";
  }
}
