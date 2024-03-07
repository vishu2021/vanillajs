"use strict";

const btnWrap = document.querySelectorAll(".calc-btn-wrap");

// Pressing animation

for (let i = 0; i < btnWrap.length; i++) {
  btnWrap[i].addEventListener("mousedown", function () {
    this.classList.add("calc-btn-wrap_toggle");
  });
}

window.addEventListener("mouseup", function () {
  for (let i = 0; i < btnWrap.length; i++) {
    btnWrap[i].classList.remove("calc-btn-wrap_toggle");
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  // Key variables
  const display = document.querySelector(".calculator__screen"); // Screen with result
  const subDisplay = document.querySelector(".calculator__subscreen"); // Small display with current calculation
  const histDisplay = document.querySelector(".calculator__history"); // Display with history of calculations
  const hist = []; // Array with history of calculations
  let res = ""; // Calculation result of two numbers

  // Regexp's
  const numOperEqSign = /^\d+(\*|\/|\-|\+)\=$/;
  const screenClear = /^(\-?(?:\d*\.)?\d+(\*|\/|\-|\+)(?:\d*\.)?\d{1})$/;
  const numLength = /^(\d+\.\d+){16}$|(\d+){17}/;
  const numDotNumDot = /\d+\.\d+\./;
  const numEqSign = /^\d+\=$/;
  const twoOpers = /(\*|\/|\-|\+|\.){2,}/;

  const operands = ["+", "-", "/", "*"];

  const buttons = document.querySelectorAll(".calc-btn");

  // Adding click eventlistener to every button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      // Clear display after result with 'e+'
      if (subDisplay.textContent === "This is the limit") {
        subDisplay.textContent = "";
      }

      // Clear display after equal sign pressed
      if (res === "") {
        display.textContent = "";
      }

      document.querySelector('[data-oper="."]').removeAttribute("disabled"); // Switch '.' button back

      subDisplay.textContent +=
        this.getAttribute("value") || this.getAttribute("data-oper"); // Small display

      res += this.getAttribute("value") || this.getAttribute("data-oper"); // Expression of two operands and operator

      subDisplay.scrollLeft = subDisplay.scrollWidth + 20; //Scroll sub display to right automatically

      // Count result if there is only one operand
      if (this.getAttribute("data-oper") === "=" && numEqSign.test(res)) {
        display.textContent = res.slice(0, res.length - 1);
        subDisplay.textContent += res.slice(0, res.length - 1);
        hist.push(subDisplay.textContent);
        subDisplay.textContent = "";
        res = "";
        addExp(histDisplay, hist);
      }

      // Count result if there is only one operand and operator
      if (this.getAttribute("data-oper") === "=" && numOperEqSign.test(res)) {
        display.textContent = res.slice(0, res.length - 2);
        subDisplay.textContent =
          subDisplay.textContent.slice(0, subDisplay.textContent.length - 2) +
          this.getAttribute("data-oper") +
          res.slice(0, res.length - 2);
        hist.push(subDisplay.textContent);
        subDisplay.textContent = "";
        res = "";
        addExp(histDisplay, hist);
      }

      // Clear screen after result of expression
      if (screenClear.test(res) && res[res.length - 2] !== ".") {
        display.textContent = "";
      }

      display.textContent += this.getAttribute("value") || ""; // Main display

      // 'C' button
      if (this.getAttribute("value") === "C") {
        res = "";
        display.textContent = "";
        subDisplay.textContent = "";
      }

      // Set maximum digit length and prohibit digits like 1.2.3
      if (
        numLength.test(subDisplay.textContent) ||
        numDotNumDot.test(subDisplay.textContent) ||
        display.textContent.length === 16
      ) {
        subDisplay.textContent = subDisplay.textContent.slice(
          0,
          subDisplay.textContent.length - 1
        );
        display.textContent = display.textContent.slice(
          0,
          display.textContent.length - 1
        );
        res = res.slice(0, res.length - 1);
      }

      // Check if there is more than 1 operator or dot at row and cut it
      if (twoOpers.test(subDisplay.textContent)) {
        subDisplay.textContent =
          subDisplay.textContent.slice(0, subDisplay.textContent.length - 2) +
            this.getAttribute("data-oper") || ".";
        res =
          res.slice(0, res.length - 2) + this.getAttribute("data-oper") || ".";
        // Toggle dot on main screen depending on operator or dot on subscreen
        if (/^\d+\.$/.test(display.textContent)) {
          display.textContent =
            display.textContent.slice(0, display.textContent.length - 1) +
            (this.getAttribute("value") || "");
        }
      }

      // Block dot if last char is operator
      if (
        operands.indexOf(
          subDisplay.textContent[subDisplay.textContent.length - 1]
        ) > -1
      ) {
        document
          .querySelector('[data-oper="."]')
          .setAttribute("disabled", "disabled");
      }

      // Check if operator or dot is first char and cut it
      if (
        subDisplay.textContent.indexOf(this.getAttribute("data-oper")) === 0
      ) {
        subDisplay.textContent = subDisplay.textContent.slice(
          1,
          subDisplay.textContent.length
        );
        res = res.slice(1, res.length);
        display.textContent = display.textContent.slice(1, res.length);
      }

      // Slice unnecessary dot
      if (
        numDotNumDot.test(display.textContent) ||
        /\.{2,}/.test(display.textContent)
      ) {
        display.textContent = display.textContent.slice(
          0,
          display.textContent.length - 1
        );
      }

      if (checkIndex(res) > 0) {
        let middleIndex = checkIndex(res), //Find index of operator in expression
          operand = res[middleIndex], //Find an operator
          rightSearch = middleIndex + 1, //Define right part of expression
          right = "";

        //Parse right part of expression
        while (rightSearch < res.length - 1) {
          right = right + res[rightSearch];
          rightSearch++;
        }

        let leftSearch = middleIndex - 1, //Define left part of expression
          left = "";

        //Parse left part of expression
        while (leftSearch >= 0) {
          left = res[leftSearch] + left;
          leftSearch--;
        }

        // Count an expression depending on operator
        switch (operand) {
          case "+":
            if (+left > 0 && +left < 1 && +right > 0 && +right < 1) {
              res = dotNumbers(+left, +right);
            } else res = +left + +right;
            break;

          case "-":
            res = +left - +right;
            break;

          case "*":
            res = +left * +right;
            break;

          case "/":
            res = +left / +right;
            break;
        }

        if (res == Infinity || isNaN(res)) {
          display.textContent = "Don't divide by zero!";
          res = "";
          subDisplay.textContent = "";
        } else if (this.getAttribute("data-oper") === "=") {
          display.textContent = res;
          subDisplay.textContent += String(res);
          hist.push(subDisplay.textContent);
          subDisplay.textContent = "";
          res = "";
          addExp(histDisplay, hist);
        } else {
          display.textContent = res;
          res += this.getAttribute("data-oper");
        }

        if (res.indexOf("e") > -1) {
          display.textContent = res.slice(0, res.length - 1);
          res = "";
          subDisplay.textContent = "This is the limit";
        }
      }
    });
  }
});

function checkIndex(str) {
  const operands = ["+", "-", "/", "*"];
  let foundExp, // Expression
    foundIndex; //Index of operator
  const expExtend =
    /(\-?(?:\d*\.)?\d+(\*|\/|\-|\+)(?:\d*\.)?\d+)(\*|\/|\-|\+|\=)/;
  const expFull = /(\-?(?:\d*\.)?\d+(\*|\/|\-|\+)(?:\d*\.)?\d+)/;

  for (let i = 0; i < str.length; i++) {
    //Check if expression pass regexp: number or fraction, operator, number or fraction
    if (str.match(expExtend)) {
      foundExp = str.match(expFull)[0];
    }
  }
  if (foundExp) {
    //Check if char in expression is operator and find its index
    for (let j = 0; j < foundExp.length; j++) {
      if (operands.indexOf(foundExp[j]) > -1) {
        foundIndex = foundExp.lastIndexOf(foundExp[j]); // lastIndexOf because of minus
      }
    }
  }

  return foundIndex || -1;
}

// Count fractions: 0.1 – 0.9
function dotNumbers(a, b) {
  let aLength = String(a).length - 2,
    bLength = String(b).length - 2,
    mutator = 10,
    aDividor = 1,
    bDividor = 1;

  for (let i = 0; i < aLength; i++) {
    aDividor *= mutator;
  }

  for (let j = 0; j < bLength; j++) {
    bDividor *= mutator;
  }

  return aDividor > bDividor
    ? (a * aDividor + b * aDividor) / aDividor
    : (a * bDividor + b * bDividor) / bDividor;
}

// Add item to history
function addExp(screen, hist) {
  screen.innerHTML = "";
  for (let x = 0; x < hist.length; x++) {
    let item = document.createElement("div");
    item.className = "calculator__history-item";
    item.innerHTML = `<span> ${x + 1}.</span>${hist[x]}`;
    screen.appendChild(item);
  }
}
