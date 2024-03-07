const items = [...document.querySelectorAll(".number")];
// console.log("items :", items);
const updateCount = (el) => {
  // console.log("el :", el);
  // console.log("el.dataset :", el.dataset);
  // console.log("el.dataset.value :", el.dataset.value);
  const value = parseInt(el.dataset.value);
  // console.log("parseInt(el.dataset.value) :", parseInt(el.dataset.value));
  const increment = Math.ceil(value / 1000);
  // console.log("increment :", increment);
  // const increment = 1;
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      // console.log("el.textContent :", el.textContent);
      clearInterval(increaseCount);
      // console.log(
      //   "clearInterval(increaseCount) :",
      //   clearInterval(increaseCount)
      // );
      return;
    }
    el.textContent = `${initialValue}+`;
    // console.log("el.textContent :", el.textContent);
  }, 1);
  // console.log("increaseCount :", increaseCount);
};
items.forEach((item) => {
  // console.log("item :", item);
  updateCount(item);
});
