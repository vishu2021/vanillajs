import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
  // console.log("url :", url);
  showLoading();
  try {
    const response = await fetch(url);
    // console.log("response :", response);
    const data = await response.json();
    // console.log("data :", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchDrinks;
