$(document).ready(function () {
  var element = $("#html-content-holder"); // global variable
  var getCanvas; // global variable

  html2canvas(element, {
    onrendered: function (canvas) {
      $("#previewImage").append(canvas);
      getCanvas = canvas;
    },
  });

  $("#btn-Convert-Html2Image").on("click", function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(
      /^data:image\/png/,
      "data:application/octet-stream"
    );
    $("#btn-Convert-Html2Image")
      .attr("download", "your_pic_name.png")
      .attr("href", newData);
  });
});

// Learnings from this project are listed below:
const myLearnings = [
  "attr",
  "click",
  "replace",
  "append()",
  "onrendered",
  "toDataURL()",
  "html2canvas()",
];
