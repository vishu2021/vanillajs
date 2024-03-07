import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    // console.log("product :", product);
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    // console.log("product :", product);
    const image = img[0].thumbnails.large.url;
    // console.log("image :", image);
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("store", store);
};
const findProduct = (id) => {
  // console.log("id :", id);
  let product = store.find((product) => product.id === id);
  // console.log("product :", product);
  return product;
};
export { store, setupStore, findProduct };
