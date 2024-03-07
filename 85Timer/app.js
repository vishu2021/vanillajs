// Create Template Variables
const INTERVAL_MS = 1000 / 60;
let timerID;
let lastTimerStartTime = 0;
let millisecondElapsedBeforeLastStart = 0;
// Get Our Data From The DOM
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
// USE EVENTS
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimers);
// ---- CREATING A FUNCTIONS ----
// 1. startTimer
function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  lastTimerStartTime = Date.now();
  // console.log("lastTimerStartTime :", lastTimerStartTime);
  timerID = setInterval(updateTimer, INTERVAL_MS);
  //console.log("timerID :", timerID);
  //console.log("INTERVAL_MS :", INTERVAL_MS);
}
// 2. stopTimer
function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  millisecondElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
  // console.log(
  //   "millisecondElapsedBeforeLastStart :",
  //   millisecondElapsedBeforeLastStart
  // );
  clearInterval(timerID);
  //console.log("timerID :", timerID);
}
// 3. resetTimer
function resetTimers() {
  resetButton.disabled = true;
  timer.innerHTML = "00:00:00";
  millisecondElapsedBeforeLastStart = 0;
}
// 4. updateTimer
function updateTimer() {
  const millisecondsElapsed =
    Date.now() - lastTimerStartTime + millisecondElapsedBeforeLastStart;
  //console.log("millisecondsElapsed :", millisecondsElapsed);
  const secondsElapsed = millisecondsElapsed / 1000;
  // console.log("secondsElapsed :", secondsElapsed);
  const minutesElapsed = secondsElapsed / 60;
  // console.log("minutesElapsed :", minutesElapsed);
  const millisecondsText = formateNumber(millisecondsElapsed % 1000, 3);
  //console.log("millisecondsText :", millisecondsText);
  const secondsText = formateNumber(Math.floor(secondsElapsed) % 60, 2);
  //console.log("secondsText :", secondsText);
  const minutesText = formateNumber(Math.floor(minutesElapsed), 2);
  //console.log("minutesText :", minutesText);
  timer.innerHTML = `
                  <span class='minute-text'>${minutesText}</span>:
                  <span class='seconds-text'>${secondsText}</span>:
                  <span class='milliseconds-text'>${millisecondsText}</span>
  `;
}
// 5. formatNumber
function formateNumber(number, desiredLength) {
  const stringNumber = String(number);
  if (stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength);
  }
  return stringNumber.padStart(desiredLength, "0");
}
