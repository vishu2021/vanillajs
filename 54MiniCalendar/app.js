const monthEl = document.getElementById("month");
const dayNameEl = document.getElementById("day");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const date = new Date();
//console.log("date :", date);
const month = date.getMonth();
//console.log("month :", month);
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});
//console.log("A :", monthEl.innerHTML);
dayNameEl.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});
//console.log("B :", dayNameEl.innerHTML);
dayNumEl.innerHTML = date.getDate();
//console.log("C :", dayNumEl.innerHTML);
yearEl.innerHTML = date.getFullYear();
//console.log("D :", yearEl.innerHTML);
