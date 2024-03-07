const [form] = document.forms;
// console.log("[form] :", [form]);
const ul = document.querySelector("ul");
const deleteAll = document.querySelector("#deleteAll");
const documentFragment = new DocumentFragment();
// console.log("documentFragment :", documentFragment);
let dataKey = 2;

const deleteFruit = (id) => {
  // console.log("id :", id);
  ul.removeChild(ul.querySelector(`li[data-key="${id}"]`));
  deleteAll.disabled = ul.children.length ? false : true;
  // console.log("deleteAll.disabled :", deleteAll.disabled);
};

const createListItem = (key, fruitName) => {
  // console.log("key :", key);
  // console.log("fruitName :", fruitName);
  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add(
    "btn",
    "btn-sm",
    "btn-outline-danger",
    "delete-fruit-btn"
  );
  buttonDelete.textContent = "Delete";
  buttonDelete.setAttribute("onclick", `deleteFruit(${key})`);

  const divButton = document.createElement("div");
  divButton.classList.add("col-auto", "delete-fruit-btn-box");
  divButton.appendChild(buttonDelete);

  const divFruitName = document.createElement("div");
  divFruitName.classList.add("col-auto", "mr-auto", "py-1", "fruit-item");
  divFruitName.textContent = fruitName;

  const divRow = document.createElement("div");
  divRow.classList.add("row", "fruit-item-row");

  divRow.append(divFruitName, divButton);

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.dataset.key = key;
  li.appendChild(divRow);
  return li;
};
form.fruitName.addEventListener("input", (e) => {
  form.btn.disabled = !e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { fruitName, btn } = e.target;
  // console.log("{ fruitName, btn } :", { fruitName, btn });
  const key = dataKey++;
  // console.log("key :", key);
  const li = createListItem(key, fruitName.value);
  // console.log("li :", li);
  documentFragment.appendChild(li);
  ul.prepend(documentFragment);
  e.target.reset();
  // console.log("e.target.reset() :", e.target.reset());
  btn.disabled = true;
  deleteAll.disabled = false;
});

deleteAll.addEventListener("click", (e) => {
  while (ul.firstElementChild) {
    // console.log("ul.firstElementChild :", ul.firstElementChild);
    ul.removeChild(ul.lastElementChild);
  }
  deleteAll.disabled = true;
});
