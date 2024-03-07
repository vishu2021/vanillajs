let pianoContainer = document.getElementsByClassName("piano-container");
const base =
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/sounds/";
window.onload = () => {
  //24keys
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    //For playing audio on click
    const number = index <= 9 ? "0" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}key${number}.mp3`).play();
    });
    pianoContainer[0].appendChild(div);
  }
};
// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "index",
  "play()",
  "for loop",
  "new Audio()",
  "appendChild()",
  "window.onload",
  "createElement()",
  "classList.add()",
  "getElementsByClassName()",
  "addEventListener : click",
  "Arithmetic Operators (++,+)",
  "Comparison Operators (<=,?)",
];
