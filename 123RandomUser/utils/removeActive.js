export default function removeActive(items) {
  // console.log("items :", items);
  items.forEach((btn) => btn.classList.remove("active"));
}
