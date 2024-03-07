$(".btn-download").click(function () {
  var doc = new jsPDF("p", "mm", "a4");
  html2canvas(document.querySelector("#demo")).then(function (canvas) {
    var imgData = canvas.toDataURL("image/png");
    var pageHeight = 295;
    var imgWidth = (canvas.width * 50) / 210;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    var position = 15;

    doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.output("dataurlnewwindow");
    doc.save(Date.now() + ".pdf");
  });
});
// Learnings from this project are listed below:
const myLearnings = [
  "then()",
  "save()",
  "click()",
  "output()",
  "addPage()",
  "while loop",
  "addImage()",
  "Date.now()",
  "toDataURL()",
  "new jsPDF()",
  "html2canvas()",
  "querySelector()",
  "Assignment Operators (-=)",
  "Comparison Operators (>=)",
  "Arithmetic Operators (+,*,-,/)",
];
