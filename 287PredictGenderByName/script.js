let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let predictGender = () => {
  let name = document.getElementById("name").value;
  let error = document.getElementById("error");
  let finalURL = url + name;
  // console.log(name);
  // console.log(finalURL);
  wrapper.innerHTML = "";
  error.innerHTML = "";
  //Check if input field is not empty and the entered name does not contain anything but alphabets.
  if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((data) => {
        //  console.log(data);
        let div = document.createElement("div");
        div.setAttribute("id", "info");
        div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${data.gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
        wrapper.append(div);
        if (data.gender == "female") {
          div.classList.add("female");
          document
            .getElementById("gender-icon")
            .setAttribute(
              "src",
              "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/female.svg"
            );
        } else {
          div.classList.add("male");
          document
            .getElementById("gender-icon")
            .setAttribute(
              "src",
              "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/male.svg"
            );
        }
      });
    document.getElementById("name").value = "";
  } else {
    error.innerHTML = "Enter a valid name with no spaces";
  }
};

document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);
// Learnings from this project are listed below:
const myLearnings = [
  "api",
  "value",
  "return",
  "length",
  "then()",
  "json()",
  "fetch()",
  "append()",
  "innerHTML",
  "true false",
  "setAttribute()",
  "classList.add()",
  "createElement()",
  "getElementById()",
  "if...else if...else",
  "Backtick Literals (``)",
  "Logical Operators (&&)",
  "addEventListener : load",
  "Arithmetic Operators (+)",
  "addEventListener : click",
  "Comparison Operators (>,==)",
];
