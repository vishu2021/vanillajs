import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  // console.log("store :", store);
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  // console.log("companies :", companies);
  const companiesDOM = getElement(".companies");
  // console.log("companiesDOM :", companiesDOM);
  companiesDOM.innerHTML = companies
    .map((company) => {
      // console.log("company :", company);
      return ` <button class="company-btn">${company}</button>`;
    })
    .join("");
  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    // console.log("element :", element);
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      // console.log("newStore :", newStore);
      if (element.textContent === "all") {
        newStore = [...store];
        // console.log("newStore :", newStore);
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
        // console.log("newStore :", newStore);
      }

      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
