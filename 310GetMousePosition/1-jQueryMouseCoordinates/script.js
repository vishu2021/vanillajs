jQuery(document).ready(function ($) {
  // store the initial offset of the "demo" div
  offset = $("#mouse-position-demo").offset();
});

// track and save the position of the mouse
jQuery(document).mousemove(function (e) {
  // get current mouse position
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  // position relative to the "demo" div
  var relMouseX = mouseX - offset.left;
  var relMouseY = mouseY - offset.top;
  // display the position in the HTML
  jQuery("#mouse_x-trace").text(mouseX);
  jQuery("#mouse_y-trace").text(mouseY);
  jQuery("#rel_mouse_x-trace").text(Math.round(relMouseX));
  jQuery("#rel_mouse_y-trace").text(Math.round(relMouseY));
});
// Learnings from this project are listed below:
const myLearnings = [
  "text()",
  "e.pageX",
  "e.pageY",
  "offset()",
  "mousemove",
  "offset.top",
  "offset.left",
  "Math.round()",
  "Arithmetic Operators (-)",
];
