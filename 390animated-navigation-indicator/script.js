var CONTAINER_PADDING_HALF = "0em";
var nav = document.getElementById("js-nav");
var pointer = document.getElementById("js-pointer");
var links = nav.getElementsByTagName("a");
pointer.style.width =
  "calc(100% /" + links.length + " - " + CONTAINER_PADDING_HALF + ")";
for (var i = 0; i < links.length; i++) {
  var current = links[i];
  current.dataset.order = i * 100 + "%";
  current.addEventListener("click", movePointer);
}
function movePointer(e) {
  var order = e.currentTarget.dataset.order;
  pointer.style.transform = "translate3d(" + order + ",0,0)";
}
// Learnings from this project are listed below:
const myLearnings = [
  "index",
  "event",
  "length",
  "dataset",
  "for loop",
  "Dynamic Styles",
  "e.currentTarget",
  "getElementById()",
  "getElementsByTagName()",
  "addEventListener : click",
  "Comparison Operators (<)",
  "Arithmetic Operators (+,++,*)",
];
