let countText = document.getElementById("count");
let saveText = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countText.textContent = count;
  // console.log('A ',count)
  // console.log('B ',countText.textContent)
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  saveText.textContent += countStr;
  countText.textContent = 0;
  count = 0;
  // console.log('C ',countStr)
  // console.log('D ',saveText.textContent);
  
});
