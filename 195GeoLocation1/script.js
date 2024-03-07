const geo = document.getElementById("geolocation");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, displayError);
  } else {
    geo.innerHTML = "Your browser does not support the Geolocation feature";
  }
}
function showLocation(position) {
  geo.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  // console.log("position :", position);
  // console.log("position.coords :", position.coords);
  // console.log("position.coords.latitude :", position.coords.latitude);
  // console.log("position.coords.longitude :", position.coords.longitude);
}
function displayError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      geo.innerHTML = "Permission issues, Access Denied.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "As of now, Location info is not available.";
      break;
    case error.TIMEOUT:
      geo.innerHTML = "There seems to be a timeout issue, Please try later.";
      break;
    case error.UNKNOWN_ERROR:
      geo.innerHTML = "Error cause not found.";
      break;
  }
}

// Learnings from this project are listed below:
const myLearnings = [
  "coords",
  "onclick",
  "TIMEOUT",
  "latitude",
  "longitude",
  "if...else",
  "innerHTML",
  "UNKNOWN_ERROR",
  "callback error",
  "getElementById()",
  "switch case break",
  "PERMISSION_DENIED",
  "POSITION_UNAVAILABLE",
  "getCurrentPosition()",
  "navigator.geolocation",
  "Arithmetic Operators (+)",
];
