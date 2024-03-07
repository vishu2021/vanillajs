const range = document.getElementById("range");
range.addEventListener("input", (e) => {
  const value = +e.target.value;
  //console.log("A :", value);
  const label = e.target.nextElementSibling;
  //console.log("B :", value);
  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  //console.log("C :", value);
  const label_width = getComputedStyle(label).getPropertyValue("width");
  //console.log("D :", value);
  const num_width = +range_width.substring(0, range_width.length - 2);
  //console.log("E :", value);
  const num_label_width = +label_width.substring(0, label_width.length - 10);
  //console.log("F :", value);
  const max = +e.target.max;
  //console.log("G :", value);
  const min = +e.target.min;
  //console.log("H :", value);
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  //console.log("I :", value);
  label.style.left = `${left}px`;
  label.innerHTML = value;
});
const scale = (num, in_min, in_max, out_min, out_max) => {
  let formula =
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  //console.log("J :", formula);
  return formula;
};
