const getElement = (selection) => {
  // console.log("selection :", selection);
  const element = document.querySelector(selection);
  // console.log("element :", element);

  if (element) {
    // console.log("element :", element);
    return element;
  } else {
    throw new Error("no element selected");
  }
};

export default getElement;
