const typedTextSpan = document.getElementById('typedText');
const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});
function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    console.log('Typing Starts');
  } else {
    setTimeout(erase, newLetterDelay);
    console.log('Typing Ends');
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
    console.log('Erasing Starts');
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
    console.log('Erasing Ends');
  }
}
