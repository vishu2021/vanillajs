import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";
const displayDrink = (data) => {
  // console.log("data :", data);
  hideLoading();
  const drink = data.drinks[0];
  // console.log("drink :", drink);
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  // console.log(
  //   "{ strDrinkThumb: image, strDrink: name, strInstructions: desc } :",
  //   { strDrinkThumb: image, strDrink: name, strInstructions: desc }
  // );
  // console.log("drink :", drink);
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  // console.log("list :", list);
  const img = get(".drink-img");
  // console.log("img :", img);
  const drinkName = get(".drink-name");
  // console.log("drinkName :", drinkName);
  const description = get(".drink-desc");
  // console.log("description :", description);
  const ingredients = get(".drink-ingredients");
  // console.log("ingredients :", ingredients);
  img.src = image;
  // console.log("img.src :", image);
  document.title = name;
  // console.log("document.title :",name);
  drinkName.textContent = name;
  // console.log(  "drinkName.textContent :", name);
  description.textContent = desc;
  // console.log(" desc :", desc);
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      // console.log("item :", item);
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};
export default displayDrink;
