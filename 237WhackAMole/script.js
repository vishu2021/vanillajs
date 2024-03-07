const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const audio = document.querySelector("#audio");
let lastHole;
let timeUp = false;
let score = 0;

//create a function to make a random time for mole to pop from the hole
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  //prevent same hole from getting the same number
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000); //get a random time to determine how long mole should peep
  const hole = randomHole(holes); //get the random hole from the randomHole function
  hole.classList.add("up");
  audio.play(); //add the CSS class so selected mole can "pop up"
  setTimeout(() => {
    hole.classList.remove("up");
    audio.pause(); //make the selected mole "pop down" after a random time
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 15000); //show random moles for 15 seconds
}

function wack(e) {
  if (!e.isTrusted) return; //** new thing I learned */
  score++;
  this.parentNode.classList.remove("up"); //this refers to item clicked
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", wack));

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "event",
  "index",
  "length",
  "return",
  "forEach()",
  "if...else",
  "true false",
  "parentNode",
  "textContent",
  "Math.floor()",
  "setTimeout()",
  "Math.round()",
  "Math.random()",
  "classList.add()",
  "querySelector()",
  "classList.remove()",
  "querySelectorAll()",
  "Logical Operators (!)",
  "addEventListener : click",
  "Comparison Operators (===)",
  "Arithmetic Operators (+,-,*,++)",
];
