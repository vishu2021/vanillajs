const toggler = document.getElementById('switch');
// Method 1 
// toggler.addEventListener('click', () => {
//   if (toggler.checked === true) {
//     console.log('1');
//     document.body.style.backgroundColor = 'var(--secondary)';
//   } else {
//     console.log('2');
//     document.body.style.backgroundColor = 'var(--primary)';
//   }
// });
// Method 2
toggler.addEventListener('click', () => {
toggler.checked === true
  ? (document.body.style.backgroundColor = "var(--secondary)")
  : (document.body.style.backgroundColor = "var(--primary)");
});
 