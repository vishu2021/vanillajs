var SETTINGS = {
  navBarTravelling: false,
  navBarTravelDirection: "",
  navBarTravelDistance: 150,
};
var colours = {
  0: "#ff0000",
  /*
Add Numbers And Colors if you want to make each tab's indicator in different color for eg:
1: "#FF0000",
2: "#00FF00", and so on...
*/
};
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
// Out advancer buttons
var AdvancerLeft = document.getElementById("AdvancerLeft");
var AdvancerRight = document.getElementById("AdvancerRight");
var AdvancerLeft2 = document.getElementById("AdvancerLeft2");
var AdvancerRight2 = document.getElementById("AdvancerRight2");
// the indicator
var Indicator = document.getElementById("Indicator");
var ProductNav = document.getElementById("ProductNav");
var ProductNavContents = document.getElementById("ProductNavContents");
var Indicator2 = document.getElementById("Indicator2");
var ProductNav2 = document.getElementById("ProductNav2");
var ProductNavContents2 = document.getElementById("ProductNavContents2");
ProductNav.setAttribute(
  "data-overflowing",
  determineOverflow(ProductNavContents, ProductNav)
);
ProductNav2.setAttribute(
  "data-overflowing",
  determineOverflow(ProductNavContents2, ProductNav2)
);
// Set the indicator
moveIndicator(ProductNav.querySelector('[aria-selected="true"]'), colours[0]);
moveIndicator2(ProductNav2.querySelector('[aria-selected="true"]'), colours[0]);
// Handle the scroll of the horizontal container
var last_known_scroll_position = 0;
var ticking = false;
function doSomething(scroll_pos) {
  ProductNav.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents, ProductNav)
  );
  ProductNav2.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents2, ProductNav2)
  );
}
ProductNav.addEventListener("scroll", function () {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
ProductNav2.addEventListener("scroll", function () {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
AdvancerLeft.addEventListener("click", function () {
  // If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
    return;
  }
  // If we have content overflowing both sides or on the left
  if (
    determineOverflow(ProductNavContents, ProductNav) === "left" ||
    determineOverflow(ProductNavContents, ProductNav) === "both"
  ) {
    // Find how far this panel has been scrolled
    var availableScrollLeft = ProductNav.scrollLeft;
    // If the space available is less than two lots of our desired distance, just move the whole amount
    // otherwise, move by the amount in the settings
    if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
      ProductNavContents.style.transform =
        "translateX(" + availableScrollLeft + "px)";
    } else {
      ProductNavContents.style.transform =
        "translateX(" + SETTINGS.navBarTravelDistance + "px)";
    }
    // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
    ProductNavContents.classList.remove("ProductNav_Contents-no-transition");
    // Update our settings
    SETTINGS.navBarTravelDirection = "left";
    SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  ProductNav.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents, ProductNav)
  );
});
AdvancerLeft2.addEventListener("click", function () {
  // If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
    return;
  }
  // If we have content overflowing both sides or on the left
  if (
    determineOverflow(ProductNavContents2, ProductNav2) === "left" ||
    determineOverflow(ProductNavContents2, ProductNav2) === "both"
  ) {
    // Find how far this panel has been scrolled
    var availableScrollLeft = ProductNav2.scrollLeft;
    // If the space available is less than two lots of our desired distance, just move the whole amount
    // otherwise, move by the amount in the settings
    if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
      ProductNavContents2.style.transform =
        "translateX(" + availableScrollLeft + "px)";
    } else {
      ProductNavContents2.style.transform =
        "translateX(" + SETTINGS.navBarTravelDistance + "px)";
    }
    // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
    ProductNavContents2.classList.remove("ProductNav_Contents-no-transition");
    // Update our settings
    SETTINGS.navBarTravelDirection = "left";
    SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  ProductNav2.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents2, ProductNav2)
  );
});
AdvancerRight.addEventListener("click", function () {
  // If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
    return;
  }
  // If we have content overflowing both sides or on the right
  if (
    determineOverflow(ProductNavContents, ProductNav) === "right" ||
    determineOverflow(ProductNavContents, ProductNav) === "both"
  ) {
    // Get the right edge of the container and content
    var navBarRightEdge = ProductNavContents.getBoundingClientRect().right;
    var navBarScrollerRightEdge = ProductNav.getBoundingClientRect().right;
    // Now we know how much space we have available to scroll
    var availableScrollRight = Math.floor(
      navBarRightEdge - navBarScrollerRightEdge
    );
    // If the space available is less than two lots of our desired distance, just move the whole amount
    // otherwise, move by the amount in the settings
    if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
      ProductNavContents.style.transform =
        "translateX(-" + availableScrollRight + "px)";
    } else {
      ProductNavContents.style.transform =
        "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
    }
    // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
    ProductNavContents.classList.remove("ProductNav_Contents-no-transition");
    // Update our settings
    SETTINGS.navBarTravelDirection = "right";
    SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  ProductNav.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents, ProductNav)
  );
});
AdvancerRight2.addEventListener("click", function () {
  // If in the middle of a move return
  if (SETTINGS.navBarTravelling === true) {
    return;
  }
  // If we have content overflowing both sides or on the right
  if (
    determineOverflow(ProductNavContents2, ProductNav2) === "right" ||
    determineOverflow(ProductNavContents2, ProductNav2) === "both"
  ) {
    // Get the right edge of the container and content
    var navBarRightEdge = ProductNavContents2.getBoundingClientRect().right;
    var navBarScrollerRightEdge = ProductNav2.getBoundingClientRect().right;
    // Now we know how much space we have available to scroll
    var availableScrollRight = Math.floor(
      navBarRightEdge - navBarScrollerRightEdge
    );
    // If the space available is less than two lots of our desired distance, just move the whole amount
    // otherwise, move by the amount in the settings
    if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
      ProductNavContents2.style.transform =
        "translateX(-" + availableScrollRight + "px)";
    } else {
      ProductNavContents2.style.transform =
        "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
    }
    // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
    ProductNavContents2.classList.remove("ProductNav_Contents-no-transition");
    // Update our settings
    SETTINGS.navBarTravelDirection = "right";
    SETTINGS.navBarTravelling = true;
  }
  // Now update the attribute in the DOM
  ProductNav2.setAttribute(
    "data-overflowing",
    determineOverflow(ProductNavContents2, ProductNav2)
  );
});
ProductNavContents.addEventListener(
  "transitionend",
  function () {
    // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
    var styleOfTransform = window.getComputedStyle(ProductNavContents, null);
    var tr =
      styleOfTransform.getPropertyValue("-webkit-transform") ||
      styleOfTransform.getPropertyValue("transform");
    // If there is no transition we want to default to 0 and not null
    var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
    ProductNavContents.style.transform = "none";
    ProductNavContents.classList.add("ProductNav_Contents-no-transition");
    // Now lets set the scroll position
    if (SETTINGS.navBarTravelDirection === "left") {
      ProductNav.scrollLeft = ProductNav.scrollLeft - amount;
    } else {
      ProductNav.scrollLeft = ProductNav.scrollLeft + amount;
    }
    SETTINGS.navBarTravelling = false;
  },
  false
);
ProductNavContents2.addEventListener(
  "transitionend",
  function () {
    // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
    var styleOfTransform = window.getComputedStyle(ProductNavContents2, null);
    var tr =
      styleOfTransform.getPropertyValue("-webkit-transform") ||
      styleOfTransform.getPropertyValue("transform");
    // If there is no transition we want to default to 0 and not null
    var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
    ProductNavContents2.style.transform = "none";
    ProductNavContents2.classList.add("ProductNav_Contents-no-transition");
    // Now lets set the scroll position
    if (SETTINGS.navBarTravelDirection === "left") {
      ProductNav2.scrollLeft = ProductNav2.scrollLeft - amount;
    } else {
      ProductNav2.scrollLeft = ProductNav2.scrollLeft + amount;
    }
    SETTINGS.navBarTravelling = false;
  },
  false
);
// Handle setting the currently active link
ProductNavContents.addEventListener("click", function (e) {
  var links = [].slice.call(
    document.querySelectorAll("#ProductNavContents .ProductNav_Link")
  );
  links.forEach(function (item) {
    item.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");
  // Pass the clicked item and it's colour to the move indicator function
  moveIndicator(e.target, colours[links.indexOf(e.target)]);
});
ProductNavContents2.addEventListener("click", function (e) {
  var links = [].slice.call(
    document.querySelectorAll("#ProductNavContents2 .ProductNav_Link")
  );
  links.forEach(function (item) {
    item.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");
  // Pass the clicked item and it's colour to the move indicator function
  moveIndicator2(e.target, colours[links.indexOf(e.target)]);
});
// var count = 0;
function moveIndicator(item, color) {
  var textPosition = item.getBoundingClientRect();
  var container = ProductNavContents.getBoundingClientRect().left;
  var distance = textPosition.left - container;
  var scroll = ProductNavContents.scrollLeft;
  Indicator.style.transform =
    "translateX(" +
    (distance + scroll) +
    "px) scaleX(" +
    textPosition.width * 0.01 +
    ")";
  // count = count += 100;
  // Indicator.style.transform = "translateX(" + count + "px)";
  if (color) {
    Indicator.style.backgroundColor = color;
  }
}
// var count = 0;
function moveIndicator2(item, color) {
  var textPosition = item.getBoundingClientRect();
  var container = ProductNavContents2.getBoundingClientRect().left;
  var distance = textPosition.left - container;
  var scroll = ProductNavContents2.scrollLeft;
  Indicator2.style.transform =
    "translateX(" +
    (distance + scroll) +
    "px) scaleX(" +
    textPosition.width * 0.01 +
    ")";
  // count = count += 100;
  // Indicator.style.transform = "translateX(" + count + "px)";
  if (color) {
    Indicator2.style.backgroundColor = color;
  }
}
function determineOverflow(content, container) {
  var containerMetrics = container.getBoundingClientRect();
  var containerMetricsRight = Math.floor(containerMetrics.right);
  var containerMetricsLeft = Math.floor(containerMetrics.left);
  var contentMetrics = content.getBoundingClientRect();
  var contentMetricsRight = Math.floor(contentMetrics.right);
  var contentMetricsLeft = Math.floor(contentMetrics.left);
  if (
    containerMetricsLeft > contentMetricsLeft &&
    containerMetricsRight < contentMetricsRight
  ) {
    return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
    return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
    return "right";
  } else {
    return "none";
  }
}
/*------------------- ACTIVE LINK POSITION ------------------------*/
$("#ProductNav .ProductNav_Link").click(function () {
  centerLI(this, "#ProductNav");
});
$("#ProductNav2 .ProductNav_Link").click(function () {
  centerLI(this, "#ProductNav2");
});
//http://stackoverflow.com/a/33296765/350421
function centerLI(target, outer) {
  var out = $(outer);
  var tar = $(target);
  var x = out.width() - 50;
  var y = tar.outerWidth(true);
  var z = tar.index();
  var q = 0;
  var m = out.find(".ProductNav_Link");
  for (var i = 0; i < z; i++) {
    q += $(m[i]).outerWidth(true);
  }
  //out.scrollLeft(Math.max(0, q - (x - y)/2));
  var xy = x - y;
  if (q > xy) {
    out.animate(
      {
        scrollLeft: Math.max(0, q - (x - y) + 100),
      },
      500
    );
  } else {
    out.animate(
      {
        scrollLeft: Math.max(0, q / 2 - 50),
      },
      500
    );
  }
}
$(document).ready(function () {
  $(".mouse-scroll").mousewheel(function (e, delta) {
    this.scrollLeft -= delta * 50;
    e.preventDefault();
  });
});

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "null",
  "slice",
  "call()",
  "return",
  "find()",
  "index()",
  "width()",
  "click()",
  "[array]",
  "scrollY",
  "split()",
  "for loop",
  "{object}",
  "e.target",
  "bootstrap",
  "indexOf()",
  "forEach()",
  "animate()",
  "Math.max()",
  "parseInt()",
  "Math.abs()",
  "scrollLeft",
  "true false",
  "mousewheel()",
  "outerWidth()",
  "Math.floor()",
  "dragscroll.js",
  "jquery.min.js",
  "popper.min.js",
  "setAttribute()",
  "Dynamic Styles",
  "classList.add()",
  "documentElement",
  "querySelector()",
  "bootstrap.min.js",
  "getElementById()",
  "getPropertyValue()",
  "classList.remove()",
  "getComputedStyle()",
  "querySelectorAll()",
  "e.preventDefault()",
  "if...else if...else",
  "requestAnimationFrame()",
  "getBoundingClientRect()",
  "jquery.mousewheel.min.js",
  "addEventListener : click",
  "addEventListener : scroll",
  "Logical Operators (!,||,&&)",
  "Assignment Operators (+=,-=)",
  "Comparison Operators (===,<,>)",
  "addEventListener : transitionend",
  "Arithmetic Operators (+,++,-,*,/)",
];
