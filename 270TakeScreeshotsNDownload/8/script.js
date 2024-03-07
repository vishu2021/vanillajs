function download(url) {
  var a = $("<a style='display:none' id='js-download-btn'>")
    .attr("href", url)
    .attr("download", "test.png")
    .appendTo("body");
  a[0].click();
  a.remove();
}
function saveCapture(element) {
  html2canvas(element).then(function (canvas) {
    download(canvas.toDataURL("image/png"));
  });
}
$("#btnDownload").click(function () {
  var element = document.querySelector("#capture");
  saveCapture(element);
});

// Learnings from this project are listed below:
const myLearnings = [
  "then()",
  "attr()",
  "click()",
  "remove()",
  "appendTo()",
  "toDataURL()",
  "html2canvas()",
  "querySelector()",
];
