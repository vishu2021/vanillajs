const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
//console.log("tempDate :", tempDate);
let tempYear = tempDate.getFullYear();
//console.log("tempYear :", tempYear);
let tempMonth = tempDate.getMonth();
//console.log("tempMonth :", tempMonth);
let tempDay = tempDate.getDate();
//console.log("tempDay :", tempDay);
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//console.log("futureDate :", futureDate);
// let futureDate = new Date(2020, 3, 24, 11, 30, 0);
const year = futureDate.getFullYear();
// console.log("year :", year);
const hours = futureDate.getHours();
//console.log("hours :", hours);
const minutes = futureDate.getMinutes();
//console.log("minutes :", minutes);
let month = futureDate.getMonth();
// console.log("month :", month);
month = months[month];
// console.log("month :", month);
const weekday = weekdays[futureDate.getDay()];
//console.log("weekday :", weekday);
const date = futureDate.getDate();
//console.log("date :", date);
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// console.log("giveaway.textContent :", giveaway.textContent);
const futureTime = futureDate.getTime();
// console.log("futureTime :", futureTime);
function getRemainingTime() {
  const today = new Date().getTime();
  // console.log("today :", today);
  const t = futureTime - today;
  //console.log("t :", t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  // console.log("oneDay :", oneDay);
  const oneHour = 60 * 60 * 1000;
  // console.log("oneHour :", oneHour);
  const oneMinute = 60 * 1000;
  // console.log("oneMinute :", oneMinute);
  // calculate all values
  let days = t / oneDay;
  // console.log("days :", days);
  days = Math.floor(days);
  // console.log("days :", days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log("hours :", hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log("minutes :", minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log("hours :", hours);
  // set values array
  const values = [days, hours, minutes, seconds];
  // console.log("values :", values);
  function format(item) {
    if (item < 10) {
      // console.log("item1 :", item);
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    // console.log("item :", item);
    // console.log("index :", index);
    // console.log("item.innerHTML :", item.innerHTML);
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();
