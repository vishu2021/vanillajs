const input = document.querySelectorAll(".controls input");
function handleUpdate(suffix) {
  // console.log("this.name :", this.name);
  this.name == "bgColor" ? (suffix = "") : (suffix = "px");
  // console.log("suffix :", suffix);
  // console.log("this.value :", this.value);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
input.forEach((input) => {
  input.addEventListener("change", handleUpdate);
});
