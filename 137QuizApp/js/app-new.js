const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Higher Test Main Link",
    c: "High Time Master Lane",
    d: "Helicopters Terminals Motorboats Lamborghini",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Coke Sink Sole",
    b: "Cascading Style Sheet",
    c: "Crystal Shine Shore",
    d: "Common Simple Soft",
    correct: "b",
  },
];
let index = 0,
  correct = 0,
  incorrect = 0,
  total = quizData.length;
const data = quizData[index];
function loadUI() {
  layout.innerHTML = ` 
  <div class="container" >
      <div class="col">
      <h3 id="questionBox">${index + 1}) ${data.question}</h3>
    </div>
    <div class="col box">
      <input name="option" type="radio" id="first" value="a" required />
      <label for="first">${data.a}</label>
    </div>
    <div class="col box">
      <input name="option" type="radio" id="second" value="b" required />
      <label for="second">${data.b}</label>
    </div>
    <div class="col box">
      <input name="option" type="radio" id="third" value="c" required />
      <label for="third">${data.c}</label>
    </div>
    <div class="col box">
      <input name="option" type="radio" id="fourth" value="d" required />
      <label for="fourth">${data.d}</label>
    </div>
    <button id="submit">Submit</button>
    </div>
    <div class="refresh-button" id="refresh">Refresh</div>
  `;
}
document.addEventListener("DOMContentLoaded", function () {
  loadUI();
});

let firstContainer = document.getElementsByClassName("container")[0];
const allInputs = document.querySelectorAll("input[type='radio']");
const questionBox = document.getElementById("questionBox");
const submitBtn = document.querySelector("#submit");
const refresh = document.getElementById("refresh");
let layout = document.getElementById("layout");
(function () {
  const loadQuestion = () => {
    if (total === index) {
      return quizEnd();
    }
    reset();
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
  };

  submitBtn.addEventListener("click", function () {
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
      correct++;
    } else {
      incorrect++;
    }
    index++;
    loadQuestion();
  });
  const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
      if (inputEl.checked) {
        ans = inputEl.value;
      }
    });
    return ans;
  };
  const reset = () => {
    allInputs.forEach((inputEl) => {
      inputEl.checked = false;
    });
  };

  const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    firstContainer.innerHTML = `
        <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
        `;
  };
  //   loadQuestion(index);

  refresh.addEventListener("click", function () {
    alert("refresh");
    index = 0;
    loadQuestion(index);
  });
});
