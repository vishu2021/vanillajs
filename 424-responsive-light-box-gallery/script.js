const image = document.querySelector('.hero img');

const reset = () => image.classList.remove('fadeIn');

function activate(e) {
  if (!e.target.matches('.btns img')) return;
  image.src = e.target.src;
  image.classList.add('fadeIn');
}

document.addEventListener('click',activate,false);
document.addEventListener('animationend',reset,false);