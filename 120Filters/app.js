let filteredProducts = [...products];
// console.log("filteredProducts :", filteredProducts);
const productsContainer = document.querySelector(".products-container");
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      //console.log("product :", product);
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};
displayProducts();
// Text Filter
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  // console.log("inputValue :", inputValue);
  filteredProducts = products.filter((product) => {
    // console.log("product :", product);
    // console.log("product.title :", product.title);
    // console.log("product.title.toLowerCase() :", product.title.toLowerCase());
    // console.log(
    //   "product.title.toLowerCase().includes(inputValue) :",
    //   product.title.toLowerCase().includes(inputValue)
    // );
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});
// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes("");
//   })
// );
// Filter Buttons
const companiesDOM = document.querySelector(".companies");
// console.log("companiesDOM :", companiesDOM);
const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log("buttons :", buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
  // console.log("companiesDOM.innerHTML :", companiesDOM.innerHTML);
};
displayButtons();
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  // console.log("el :", el);
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
      //console.log("filteredProducts :", filteredProducts);
    } else {
      filteredProducts = products.filter((product) => {
        // console.log("filteredProducts :", filteredProducts);
        return product.company === el.dataset.id;
      });
      // console.log("filteredProducts :", filteredProducts);
    }
    searchInput.value = "";
    displayProducts();
  }
});
