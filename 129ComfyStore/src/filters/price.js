import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");
  // setup filter
  let maxPrice = store.map((product) => product.price);
  // console.log("maxPrice :", maxPrice);
  maxPrice = Math.max(...maxPrice);
  // console.log("maxPrice :", maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  // console.log("maxPrice :", maxPrice);
  priceInput.value = maxPrice;
  // console.log("priceInput.value :", priceInput.value);
  priceInput.max = maxPrice;
  // console.log("priceInput.max :", priceInput.max);
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;
  // console.log("priceValue.textContent :", priceValue.textContent);
  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    // console.log("value :", value);
    priceValue.textContent = `Value : $${value}`;
    // console.log("priceValue.textContent :", priceValue.textContent);
    let newStore = store.filter((product) => product.price / 100 <= value);
    // console.log("newStore :", newStore);
    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
