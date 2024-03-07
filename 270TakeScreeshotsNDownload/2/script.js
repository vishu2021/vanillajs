var canvas = document.getElementById("myChart");

var data = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "green",
      data: [60, 59, 58, 50],
    },
  ],
};

var myBarChart = new Chart(canvas, {
  type: "horizontalBar",
  data: data,
});

function download(url) {
  var a = $("<a style='display:none' id='js-downloder'>")
    .attr("href", url)
    .attr("download", "test.png")
    .appendTo("body");

  a[0].click();

  a.remove();
}

function convert() {
  const original = document.querySelector("#original");
  const canvasContainer = document.querySelector("#canvas-container");

  html2canvas(original, {
    scale: 2,
    useCORS: true,
  }).then(function (canvas) {
    canvasContainer.appendChild(canvas);
    download(canvas.toDataURL("image/png"));
  });
}

// Learnings from this project are listed below:
const myLearnings = [
  "attr()",
  "then()",
  "onclick",
  "[array]",
  "click()",
  "remove()",
  "appendTo()",
  "true false",
  "toDataURL()",
  "new Chart()",
  "html2canvas()",
  "appendChild()",
  "getElementById()",
];
