const input = document.querySelector('input');
const eyeToggle = document.getElementById('eyeToggle');
 
eyeToggle.addEventListener('click', () => {
  eyeToggle.classList.toggle('eye-toggle'); 
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }  
//Refactor : Alternative Method to  if...else condition : Ternary Operator (?)
 // input.type === "password" ? (input.type = "text") : (input.type = "password"); 
});


 