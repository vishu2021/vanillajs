import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element, filters) => {
  // console.log("products :", products);
  // console.log("element :", element);
  // display products
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      // console.log("{ id, name, image, price } :", { id, name, image, price });
      return ` <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article> `;
    })
    .join("");
  if (filters) return;
  element.addEventListener("click", function (e) {
    const parent = e.target.parentElement;
    // console.log("parent :", parent);
    if (parent.classList.contains("product-cart-btn")) {
      addToCart(parent.dataset.id);
    }
  });
};
export default display;
