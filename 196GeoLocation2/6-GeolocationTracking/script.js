var geoCacheInterval;
function startTracking() {
  if (!navigator.geolocation) {
    var output = document.getElementById("out");
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  geoCacheInterval = setInterval(geoFindMe, 2000);
}
function stopTracking() {
  clearInterval(geoCacheInterval);
}

function geoFindMe() {
  var output = document.getElementById("out");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const hdop = position.coords.accuracy;
    const width = Math.min(640, window.innerWidth);
    const height = Math.min(640, window.innerHeight);
    const zoom = translateHDOPtoZoomLevel(hdop);

    output.innerHTML =
      "<p>Latitude is " +
      latitude +
      " deg <br>Longitude is " +
      longitude +
      "deg<br> horizontal DOP: " +
      hdop +
      " meters</p>";
    var img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      drawAxisAndDOP(
        ctx,
        img.width,
        img.height,
        position.coords.accuracy,
        zoom
      );
    };
    // The anonymous Google Maps Static API works up to 640x640 pixels.
    img.src =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latitude +
      "," +
      longitude +
      "&zoom=" +
      zoom +
      "&size=" +
      width +
      "x" +
      height +
      "&sensor=false";
  }
  function error() {
    output.innerHTML = "<p>Unable to retrieve your location</p>";
  }
  output.innerHTML = "<p>Locating...</p>";
  if (document.getElementById("highAccuracy").checked)
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });
  else navigator.geolocation.getCurrentPosition(success, error);
}

function drawAxisAndDOP(ctx, width, height, hdop, mapZoom) {
  const centerX = width / 2;
  const centerY = height / 2;

  const sizeX = width / 8;
  const sizeY = height / 8;

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + sizeX, centerY);
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX - sizeX, centerY);
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX, centerY - sizeY);
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX, centerY + sizeY);
  ctx.stroke();

  // At zoom level 13 in a Mercator projection we have ~19.11m/pixel, at 14 is ~9.55 etc
  // https://msdn.microsoft.com/en-us/library/aa940990.aspx
  const metersToPixelsRatio = {
    13: 19.11,
    14: 9.55,
    15: 4.78,
    16: 2.39,
    17: 1.19,
    18: 0.6,
    19: 0.3,
  };
  ctx.beginPath();
  ctx.strokeStyle = "darkorange";
  ctx.arc(
    centerX,
    centerY,
    hdop / metersToPixelsRatio[mapZoom],
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "rgba(255, 127, 0, 0.2)";
  ctx.fill();
  ctx.stroke();
}

// This function translates the Horizontal Dilution of position (HDOP), which is a
// measure of how good/bad positions fixes are, to a map zoom level.  Eyeballed :-)
function translateHDOPtoZoomLevel(hdop) {
  if (hdop > 1500) return 13; // do we know which planet we're in?
  else if (1500 >= hdop && hdop > 300) return 14;
  else if (300 >= hdop && hdop > 100) return 15;
  else if (100 >= hdop && hdop > 50) return 16;
  else if (50 >= hdop && hdop > 25) return 17;
  else if (25 >= hdop && hdop > 15) return 18;
  else return 19;
}

// Learnings from this project are listed below:
const myLearnings = [
  "new",
  "src",
  "arc()",
  "error",
  "onload",
  "coords",
  "return",
  "fill()",
  "Math.PI",
  "checked",
  "stroke()",
  "lineTo()",
  "moveTo()",
  "latitude",
  "accuracy",
  "longitude",
  "if...else",
  "navigator",
  "innerHTML",
  "innerWidth",
  "Math.min()",
  "true false",
  "strokeStyle",
  "drawImage()",
  "beginPath()",
  "innerHeight",
  "geolocation",
  "getContext()",
  "setInterval()",
  "clearInterval()",
  "getElementById()",
  "getCurrentPosition()",
  "Logical Operators (!)",
  "Arithmetic Operators (+,*)",
  "Comparison Operators (>,>=)",
];
