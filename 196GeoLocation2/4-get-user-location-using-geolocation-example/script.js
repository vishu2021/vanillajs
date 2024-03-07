document.addEventListener("DOMContentLoaded", (event) => {
  let $ = document.querySelector.bind(document);
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  $("#currPos").addEventListener("click", getLocation);
  function getLocation() {
    let geolocation = navigator.geolocation;
    if (geolocation) {
      geolocation.getCurrentPosition(onGeoSuccess, onGeoError, options);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function onGeoSuccess(position) {
    $("#lat").innerHTML = position.coords.latitude;
    $("#lon").innerHTML = position.coords.longitude;
  }
  function onGeoError(error) {
    let detailError;
    if (error.code === error.PERMISSION_DENIED) {
      detailError = "User denied the request for Geolocation.";
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      detailError = "Location information is unavailable.";
    } else if (error.code === error.TIMEOUT) {
      detailError = "The request to get user location timed out.";
    } else if (error.code === error.UNKNOWN_ERROR) {
      detailError = "An unknown error occurred.";
    }
    $("#error").innerHTML = `Error: ${detailError}`;
  }
});

// Learnings from this project are listed below:
const myLearnings = [
  "error",
  "coords",
  "TIMEOUT",
  "latitude",
  "innerHTML",
  "if...else",
  "longitude",
  "navigator",
  "true false",
  "geolocation",
  "UNKNOWN_ERROR",
  "PERMISSION_DENIED",
  "POSITION_UNAVAILABLE",
  "getCurrentPosition()",
  "Backtick Literals (``)",
  "addEventListener : click",
  "Comparison Operators (===)",
  "document.querySelector.bind()",
  "addEventListener : DOMContentLoaded",
];
