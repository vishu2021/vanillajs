const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    // console.log("resp :", resp);
    const data = await resp.json();
    // console.log("data :", data);
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};
const displayProducts = (list) => {
  // console.log("list :", list);
  const productList = list
    .map((product) => {
      const { id } = product;
      // console.log("{ id } :", { id });
      // console.log("product :", product);
      const { name: title, price } = product.fields;
      // console.log("{ name: title, price } :", { name: title, price });
      // console.log("product.fields :", product.fields);
      const { url: img } = product.fields.image[0];
      // console.log("{ url: img } :", { url: img });
      // console.log("product.fields.image[0] :", product.fields.image[0]);
      const formatPrice = price / 100;
      // console.log("formatPrice :", formatPrice);
      // id,name,price,img
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = ` <div class="products-container">${productList}</div>`;
  // console.log("productList :", productList);
};
const start = async () => {
  const data = await fetchProducts();
  // console.log("data :", data);
  displayProducts(data);
};
start();
