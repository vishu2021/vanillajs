const btn = document.getElementById('btn');
let hexcode = document.getElementById('hexCode'); 
btn.addEventListener('click', () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  let colorCode = letters[Math.floor(Math.random() * 16)];
  for (let i = 0; i < 6; i++) {
    color += colorCode;
  } 
  document.body.style.backgroundColor = color; 
  hexcode.innerHTML = color; 
});;