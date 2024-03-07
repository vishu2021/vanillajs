const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
item.addEventListener("keyup", function (event) {
  //   console.log("event :", event);
  if (event.key == "Enter" && this.value !== "") {
    addToDo(this.value);
    this.value = "";
  } else if (event.key == "Enter" && this.value === "") {
    alert("Please write something in field.");
  }
});
const addToDo = (item) => {
  //   console.log("item :", item);

  const listItem = document.createElement("li");
  //   console.log("listItem :", listItem);
  listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};
