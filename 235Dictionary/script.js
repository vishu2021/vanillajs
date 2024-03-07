const txtBox = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");
const dictionaryJson =
  "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";
function searchDict(e) {
  e.preventDefault();
  fetch(dictionaryJson)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      e.preventDefault;
      let word = txtBox.value;
      console.log(txtBox.value);
      let searchKeyword = word.toUpperCase();
      Object.keys(data).forEach(function (key) {
        if (key === searchKeyword) {
          searchWord.innerHTML = searchKeyword;
          if (searchKeyword === data[key]) {
            description.innerHTML = "Not found";
          } else {
            description.innerHTML = data[key];
          }
          console.log(data[key]);
        }
      });
    });
}

form.addEventListener("submit", searchDict);

// Learnings from this project are listed below:
const myLearnings = [
  "JSON",
  "value",
  "then()",
  "json()",
  "return",
  "fetch()",
  "forEach()",
  "if...else",
  "innerHTML",
  "Object keys",
  "toUpperCase()",
  "querySelector()",
  "e.preventDefault()",
  "addEventListener : submit",
  "Comparison Operators (===)",
];
