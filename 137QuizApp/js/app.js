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
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
// console.log("total :", total);
let questionBox = document.getElementById("questionBox");
// console.log("questionBox :", questionBox);
let submitBtn = document.querySelector("#submit");
let allInputs = document.querySelectorAll("input[type='radio']");
// console.log("allInputs :", allInputs);
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  //   console.log("data :", data);
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  //   console.log("questionBox.innerHTML :", questionBox.innerHTML);
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};
submitBtn.addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  //   console.log("ans :", ans);
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
    // console.log("inputEl :", inputEl);
    if (inputEl.checked) {
      ans = inputEl.value;
      //   console.log("ans :", ans);
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
  //   console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};
loadQuestion(index);
