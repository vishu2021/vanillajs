let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const NameOfClass = e.currentTarget.classList;
    if (NameOfClass.contains("decrease")) {
      count--;
    } else if (NameOfClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "var(--clr-red-dark)";
      document.body.style.backgroundColor = "var(--clr-red-dark)";
    } else if (count > 0) {
      value.style.color = "var(--clr-307FE2)";
      document.body.style.backgroundColor = "var(--clr-307FE2)";
    } else {
      value.style.color = "var(--clr-black)";
      document.body.style.backgroundColor = "var(--clr-black)";
    }
    value.textContent = count;
  });
});
