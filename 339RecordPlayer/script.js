let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");
let player = document.querySelector(".player");

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    player.classList.add("playing");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    player.classList.remove("playing");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});
// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "play()",
  "volume",
  "pause()",
  "Number()",
  "e.target",
  "true false",
  "setTimeout()",
  "classList.add()",
  "querySelector()",
  "classList.remove()",
  "Logical Operators (!)",
  "addEventListener : click",
  "addEventListener : input",
  "Comparison Operators (==)",
];
