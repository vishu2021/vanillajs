let votes1 = 0;
let votes2 = 0;
const carLeft = document.getElementById("carLeft");
const carRight = document.getElementById("carRight");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
function updateVotes() {
  if (carLeft.checked) {
    votes1++;
    result1.innerHTML = "Number of Votes: " + votes1;
  }
  if (carRight.checked) {
    votes2++;
    result2.innerHTML = "Number of Votes: " + votes2;
  }
}
function showResults() {
  if (votes1 == 0 && votes2 == 0) {
    alert("Please vote by selecting the cars and click on vote button.");
  } else {
    showValidResults();
  }
}
function showValidResults() {
  let total = votes1 + votes2;
  let win = "";
  if (votes1 > votes2) {
    win = "The winner is : Safari!!";
  } else if (votes2 > votes1) {
    win = "The winner is : Punch!!";
  } else if ((votes1 = votes2)) {
    win = "It's a tie!!";
  }
  alert(
    "Voting Result: \nSafari: " +
      (votes1 / total).toFixed(2) * 100 +
      "%\n" +
      "\nPunch: " +
      (votes2 / total).toFixed(2) * 100 +
      "%\n" +
      win
  );
}
// Learnings from this project are listed below:
const myLearnings = [
  "checked",
  "onclick",
  "alert()",
  "innerHTML",
  "if...else",
  "toFixed()",
  "getElementById()",
  "Newline Character ",
  "Logical Operators (&&)",
  "Comparison Operators (==,>,<)",
  "Arithmetic Operators (+,++,*,/)",
];
