const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
    // console.log("square :", square);
  });

  let randomSquare = squares[Math.floor(Math.random() * 9) + 1];
  // console.log("randomSquare :", randomSquare);
  randomSquare.classList.add("emoji");
  hitPosition = randomSquare.id;
  //console.log("hitPosition :", hitPosition);
}
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      //console.log("result :", result);
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveEmoji() {
  timerId = setInterval(randomSquare, 500);
  //console.log("timerId :", timerId);
}
moveEmoji();
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  //console.log("currentTime:", currentTime);
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    //console.log("countDownTimerId :", countDownTimerId);
    clearInterval(timerId);
    //console.log("timerId :", timerId);
    alert(`Game Over! Your final Score Is ${result}`);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
