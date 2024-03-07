const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

open.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));
// Method 1 : Ternary Operator
window.addEventListener('click', (e) => { 
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
// Method 2 : Traditional way of using If...else 
// window.addEventListener('click', (e) => {
//   console.log(e.target )
//   if(e.target === modal) {
//     modal.classList.remove("show-modal");
//     return true; 
//   } else {
//     return false;
//   } 
// });