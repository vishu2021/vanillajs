const btn = document.querySelector("button");
const display = document.querySelector("#display");
btn.addEventListener("click", function () {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let n = JSON.parse(XHR.responseText);
      display.src = n.message;
    }
  };
  let url = "https://dog.ceo/api/breeds/image/random";
  XHR.open("GET", url);
  XHR.send();
});

// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "src",
  "url",
  "open()",
  "send()",
  "status",
  "if...else",
  "readyState",
  "Get Method",
  "JSON.parse()",
  "querySelector()",
  "XMLHttpRequest()",
  "onreadystatechange",
  "Logical Operators (&&)",
  "addEventListener : click",
  "Comparison Operators (==)",
];
