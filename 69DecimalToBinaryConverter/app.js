const h1 = document.createElement("h1");
let inputNumber = document.getElementById("number");
let resultCheckBtn = document.querySelector(".result-btn");
const resultsContainer = document.querySelector(".results-container");
resultCheckBtn.addEventListener("click", () => {
  if (inputNumber.value === "") {
    alert("Please enter any positive number in input field.");
  } else {
    decimal();
  }
});
function decimal() {
  let decimal = inputNumber.value;
  let tempDecimal;
  let remainder = 0;
  let binary = 0;
  let place = 1;
  tempDecimal = decimal;
  while (tempDecimal > 0) {
    remainder = tempDecimal % 2;
    //console.log("remainder :", remainder);
    binary = binary + remainder * place;
    //console.log("binary :", binary);
    tempDecimal = parseInt(tempDecimal / 2);
    //console.log("tempDecimal :", tempDecimal);
    place = place * 10;
    //console.log("place :", place);
  }
  h1.innerHTML = `${binary}`;
  resultsContainer.append(h1);
}
