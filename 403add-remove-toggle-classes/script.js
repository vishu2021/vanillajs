// Thanks to http://youmightnotneedjquery.com/
function addClass(el, className) {
  // console.log("el :", el);
  // console.log("className :", className);
  var el = document.querySelectorAll(el);
  // console.log("el :", el);
  for (i = 0; i < el.length; i++) {
    // console.log("i :", i);
    if (el.classList) {
      el[i].classList.add(className);
    } else {
      el[i].className += " " + className;
    }
  }
}
function removeClass(el, className) {
  // console.log("el :", el);
  // console.log("className :", className);
  var el = document.querySelectorAll(el);
  for (i = 0; i < el.length; i++) {
    if (el[i].classList) {
      el[i].classList.remove(className);
    } else {
      el[i].className = el.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  }
}
function toggleClass(el, className) {
  var el = document.querySelectorAll(el);
  for (i = 0; i < el.length; i++) {
    if (el[i].classList) {
      el[i].classList.toggle(className);
    } else {
      var classes = el[i].className.split(" ");
      var existingIndex = -1;
      for (var j = classes.length; j--; ) {
        if (classes[j] === className) existingIndex = j;
      }
      if (existingIndex >= 0) classes.splice(existingIndex, 1);
      else classes.push(className);
      el[i].className = classes.join(" ");
    }
  }
}
