import get from "./getElement.js";
import removeActive from "./removeActive.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];
// console.log("btns :", btns);
const displayUser = (person) => {
  // console.log("person :", person);
  img.src = person.image;
  // console.log("img.src :", img.src);
  value.textContent = person.name;
  // console.log("person.name :", person.name);
  title.textContent = `My name is`;
  removeActive(btns);
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    // console.log("btn :", btn);
    const label = btn.dataset.label;
    // console.log("label :", label);
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      // console.log("title.textContent :", title.textContent);
      value.textContent = person[label];
      // console.log("value.textContent :", value.textContent);
      removeActive(btns);
      btn.classList.add("active");
    });
  });
};

export default displayUser;
