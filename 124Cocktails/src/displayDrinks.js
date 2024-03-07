import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const displayDrinks = ({ drinks }) => {
  // console.log("drinks :", drinks);
  const section = get(".section-center");
  // console.log("section :", section);
  const title = get(".title");
  // console.log("title :", title);
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      // console.log("drink :", drink);
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      // console.log("{ idDrink: id, strDrink: name, strDrinkThumb: image } :", {
      //   idDrink: id,
      //   strDrink: name,
      //   strDrinkThumb: image,
      // });
      // console.log("drink :", drink);
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  // console.log("newDrinks :", newDrinks);
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};
export default displayDrinks;
