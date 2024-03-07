let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");
function getTodo(value) {
  let todo = document.createElement("div");
  let textElement = document.createElement("span");
  textElement.innerHTML = value;
  todo.appendChild(textElement);
  message.classList.toggle("success");
  message.textContent = "Item Added";
  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);
  let closeElement = document.createElement("span");
  closeElement.innerHTML = "&times;";
  closeElement.classList.add("delete");
  closeElement.addEventListener("click", () => {
    output.removeChild(todo);
    message.classList.toggle("error");
    message.textContent = "Item Deleted";
    setTimeout(() => {
      message.classList.toggle("error");
    }, 2000);
  });
  todo.appendChild(closeElement);
  todo.classList.add("todo");
  return todo;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  output.appendChild(getTodo(value));
  input.value = "";
});
