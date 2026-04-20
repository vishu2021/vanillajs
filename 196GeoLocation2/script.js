//
// Check if we can get geo location and show it on a map in case we can.
//
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    var status = document.getElementById("demo");
    status.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var geoPoint = position.coords.latitude + "," + position.coords.longitude;
  var status = document.getElementById("demo");
  status.innerHTML = "Your location is: " + position.coords.latitude + " ,  " + position.coords.longitude;

  // Get a nice map tile from google maps
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
    geoPoint + "&zoom=14&size=400x300&sensor=false";
  document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}

// show our errors for debuging
function showError(error) {
  var x = document.getElementById("demo");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Denied the request for Geolocation. Maybe, ask the user in a more polite way?"
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred :(";
      break;
  }
}