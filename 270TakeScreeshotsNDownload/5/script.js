function changeToImg() {
  const toImgArea = document.getElementById("imgItem");

  // To avoid the image will be cut by scroll, we need to scroll top before html2canvas.
  window.pageYOffset = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // transform to canvas
  html2canvas(toImgArea, {
    allowTaint: true,
    taintTest: false,
    type: "view",
  }).then(function (canvas) {
    const screenshot = document.getElementById("screenshot");
    const downloadIcon = document.getElementById("download");

    // setting the canvas width
    canvas.style.width = "100%";

    // append the canvas in the place that you want to show this image.
    screenshot.appendChild(canvas);
    //    console.log(downloadIcon);

    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    downloadIcon.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    downloadIcon.download = "screenshot.jpg";
  });
}

// clean the showing area
function resetTheImageArea() {
  document.getElementById("screenshot").innerHTML = "";
}
// Learnings from this project are listed below:
const myLearnings = [
  "href",
  "then()",
  "download",
  "innerHTML",
  "scrollTop",
  "replace()",
  "true false",
  "toDataURL()",
  "html2canvas()",
  "appendChild()",
  "Dynamic Styles",
  "documentElement",
  "getElementById()",
  "window.pageYOffset",
];
