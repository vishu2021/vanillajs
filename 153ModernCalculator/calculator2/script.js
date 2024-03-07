var currentInput = "";
var inputHistory = "";
var inputs = [];

$(document).ready(function() {
  $("button").click(buttonInput);

})

/* full reset*/
function reset() {
  currentInput = "";
  currentValue = 0;
  inputs = [];
  inputHistory = "";
  updateOutputDisplay();
  updateHistoryDisplay();
}

/* button Input */
function buttonInput() {
  changeDisplay($(this).text());
}

/*updates main display*/
function updateOutputDisplay() {
  $("#calculatorOutput").val(currentInput);
}

/*updates history display */
function updateHistoryDisplay() {
  $("#calculatorPreviousOutput").val(inputHistory);
}

/* calculation engine*/
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "mod":
      return a % b;
    case "^":
      return Math.pow(a, b);
  }
}

/*Display to Engline "controller"*/
function changeDisplay(value) {
  if (currentInput == "Infinity")
    reset();
  //if Clear, reset
  if (value === "C")
    return reset();

  //if Clear Entry, reset only the current input, and add both old input and CE to history
  if (value === "CE") {
    inputHistory += currentInput + value;
    currentInput = "";
    updateOutputDisplay();
    return;
  }

  /*If a decimal is given*/
  if (value == ".") {
    //if the input is blank, make it 0.
    if (currentInput == "")
      currentInput += "0";
    //if the input already has a decimal point, do nothing
    if (!currentInput.match(/[.]/))
      currentInput += value;
  }

  //if the value is a number, concat it to the current input
  else if (!isNaN(value)) {
    //if we have an input left over from =, but no operator, then it means we are resetting
    if (inputs.length === 1)
      reset();
    currentInput += value;
  }

  //if the value is equals
  //add the current input to the inputs
  //update the history
  //calculate the input
  //reset the input so that the calculation is the first input, the second input and the operator are reset
  //update displays
  else if (value === "=") {;
    inputs.push(Number(currentInput));
    inputHistory += currentInput + value;
    updateHistoryDisplay();

    currentInput = calculate(inputs[0], inputs[2], inputs[1]);
    inputs = [currentInput];
    updateOutputDisplay();
  }

  //otherwise the value is an operator
  else {
    //if we already have an operator, then the user is replacing the operator
    if (inputs.length === 2 && currentInput==="") {
      inputs[1] = value;
    } 
    
    //push the input,but not if we already have 1 (from a previous =)
    else {
      if (inputs.length != 1)
        inputs.push(Number(currentInput));

      if (inputs.length === 3) {
        var temp = calculate(inputs[0], inputs[2], inputs[1]);
        inputs = [temp];
      }
      //push the operator to inputs
      inputs.push(value);
    }

    //update displays
    inputHistory += currentInput + value;
    currentInput = "";
    updateHistoryDisplay();
  }
  updateOutputDisplay();

}