const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";
const fetchProduct = async () => {
  try {
    productDOM.innerHTML =
      '<h4 class="product-loading">Loading... <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"> </h4>';
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    // console.log("params :", params);
    const id = params.get("id");
    // console.log("id :", id);
    const response = await fetch(`${url}?id=${id}`);
    // console.log("response :", response);
    const data = await response.json();
    // console.log("data :", data);
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};
const displayProduct = (product) => {
  // company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  // console.log("product.fields :", product.fields);

  const { url: img } = image[0];
  // console.log("{ url: img } :", { url: img });
  document.title = title.toUpperCase();
  // console.log("document.title :", document.title);
  // colors
  const colorsList = colors
    .map((color) => {
      // console.log("color :", color);
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
  // console.log("productDOM.innerHTML :", productDOM.innerHTML);
};
const start = async () => {
  const data = await fetchProduct();
  // console.log("data :", data);
  displayProduct(data);
};
start();
