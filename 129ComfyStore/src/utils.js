//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = "https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  // console.log("selection :", selection);
  const element = document.querySelector(selection);
  // console.log("element :", element);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection}" selector, no such element exist`
    );
  }
};
const formatPrice = (price) => {
  // console.log("price :", price);
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  // console.log("formattedPrice :", formattedPrice);
  return formattedPrice;
};
const getStorageItem = (item) => {
  // console.log("item :", item);
  let storageItem = localStorage.getItem(item);
  // console.log("storageItem :", storageItem);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
    // console.log("storageItem :", storageItem);
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  // console.log("name :", name);
  // console.log("item :", item);
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
