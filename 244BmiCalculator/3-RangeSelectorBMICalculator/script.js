function bmi(){
  var weight = document.getElementById('weight').value,
      feet = parseInt(document.getElementById('feet').value*12),
      inches = parseInt(document.getElementById('inches').value),
      height = feet + inches,
      output = document.querySelector('output'),
      formula = ~~(weight/(height*height)*703*100)/100,
      category = ''
  if (formula < 18.5){
    category = 'Underweight'
    document.documentElement.style.background = 'orange'
  } else if (18.5 < formula && formula < 25){
    category = 'Normal Weight'
    document.documentElement.style.background = 'lightgreen'
  } else if (25 < formula && formula < 30){
    category = 'Overweight'
    document.documentElement.style.background = 'orange'
  } else if (30 < formula){
    category = 'Obese'
    document.documentElement.style.background = 'indianred'
  }
  output.innerHTML = '<h1>'+formula+'</h1><h2>'+category+'</h2>'
}
bmi()


// Learnings from this project are listed below:
const myLearnings = [
  "value",
  "innerHTML",
  "true false",
  "if...else if",
  "querySelector()",
  "getElementById()",
  "Bitwise Operators (~)",
  "Logical Operators (&&)",
  "Comparison Operators (<)",
  "Arithmetic Operators (+,=,*,/)",
];
