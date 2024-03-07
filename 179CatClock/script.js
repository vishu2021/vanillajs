var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
  // display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};
var lolcatImageJS = document.getElementById("lolcatImage");

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
  var time = new Date().getHours();
  var messageText;
  var image =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");

  if (time == partyTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  } else if (time == wakeUpTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  } else if (time == lunchTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  } else if (time == napTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  } else if (time < noon) {
    image =
      "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  } else {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  // console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
  if (partyTime < 0) {
    partyTime = new Date().getHours();
    partyButton.innerText = "Party Over!";
    partyButton.style.backgroundColor = "#0A8DAB";
  } else {
    partyTime = -1;
    partyButton.innerText = "Party Time!";
    partyButton.style.backgroundColor = "#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
  wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
  napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

// Learnings from this project are listed below:
const myLearnings = [
  "src",
  "value",
  "innerText",
  "new Date()",
  "getHours()",
  "getMinutes()",
  "getSeconds()",
  "setInterval()",
  "Dynamic Styles",
  "getElementById()",
  "if...else if...else",
  "Logical Operators ()",
  "addEventListener : change",
  "addEventListener : click",
  "Arithmetic Operators (+,-)",
  "Comparison Operators (>=,>,<,==)",
];
