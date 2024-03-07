/*
if (navigator.geolocation) {
  console.log('GEO INFO:' + navigator.geolocation);
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}
*/
var gmaps = "https://www.google.com/maps/@";
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  // console.log("Your current position is:");
  // console.log("Latitude : " + crd.latitude);
  // console.log("Longitude: " + crd.longitude);
  // console.log("More or less " + crd.accuracy + " meters.");
  document.getElementById("scree_lt").innerHTML = crd.latitude;
  document.getElementById("scree_ln").innerHTML = crd.longitude;
  document.getElementById("accu").innerHTML =
    "More or less " + crd.accuracy + " meters";
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

function toGmap() {
  window.open(
    gmaps +
      document.getElementById("scree_lt").innerHTML +
      "," +
      document.getElementById("scree_ln").innerHTML +
      ",18z"
  );
}

navigator.geolocation.getCurrentPosition(success, error, options);

// Learnings from this project are listed below:
const myLearnings = [
  "error",
  "coords",
  "latitude",
  "longitude",
  "navigator",
  "innerHTML",
  "true false",
  "geolocation",
  "getElementById()",
  "getCurrentPosition()",
  "Arithmetic Operators (+)",
];
