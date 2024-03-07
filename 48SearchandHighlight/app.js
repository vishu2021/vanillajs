const p = document.getElementById("p");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if (input !== "") {
    let regExp = new RegExp(input, "gi");
    // console.log("A : ", regExp);
    p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
    // console.log("B: ", p.innerHTML);
    // console.log("C: ", p.textContent);
    // console.log("D : ", p.textContent.replace(regExp, "<mark>$&</mark>"));
  } else {
    alert("Please enter some value in input field.");
  }
});
