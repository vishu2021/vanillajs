const arrow = document.getElementById('arrow');
window.addEventListener('scroll', () => {
  let position = window.scrollY;
  console.log(position)
  if (position >= 5) { 
    arrow.classList.add('fade-out'); 
    arrow.classList.remove('fade-in'); 
  } else {
    arrow.classList.remove('fade-out'); 
    arrow.classList.add('fade-in'); 
  }
});
arrow.addEventListener('click',() => {
  document.documentElement.scrollTop = 100;
});