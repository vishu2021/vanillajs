const textareaCopy = document.getElementById('textareaCopy');
const textareaMove = document.getElementById('textareaMove');
const copyTextBtn = document.querySelector('.copyBtn');
const moveTextBtn = document.querySelector('.moveBtn');
const toastMessage = document.querySelector('.toast');
const refreshBtn = document.querySelector('.refresh');
// Select Text on Click of Textarea Field
textareaCopy.addEventListener('click', () => textareaCopy.select());
textareaMove.addEventListener('click', () => textareaMove.select());

copyTextBtn.addEventListener('click', () => {
  let str = textareaCopy.value;
  copyToClipBoard(str);
});
moveTextBtn.addEventListener('click', () => {
  let textareaValue = textareaCopy.value;
  textareaMove.value = textareaValue;
  // toast message 
  toastMessage.textContent = 'Content Moved';
  toastToggle();
});

function copyToClipBoard(str) {
  str = textareaCopy.value;
  textareaCopy.select();
  // This code is deprecated now to copy the text
  //document.execCommand("copy");
  // We can use this one 
  navigator.clipboard.writeText(str);
  // toast message 
  toastMessage.textContent = 'Content Copied';
  toastToggle();
}
// Show and Hide Toast
function toastToggle() {
  toastMessage.classList.add('toast-show');
  setTimeout(() => {
    toastMessage.classList.remove('toast-show');
    toastMessage.textContent = '';
  }, 2000);
}
refreshBtn.addEventListener('click', () => {
  textareaCopy.value = 'Hello World';
  textareaMove.value = 'Move Text Here';
});