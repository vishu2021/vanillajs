(function (window, document, undefined) {
  "use strict";

  // Select nav items that have submenus
  var hasSubmenu = document.querySelectorAll("[data-id]");
  var visible = "visible";
  var i = 0;

  // Show the submenu by toggling the relevant class names
  function showSubmenu(event) {
    // We lose reference of this when filtering the nav items
    var self = this;

    // Select the relevant submenu, by the data-id attribute
    var submenu = document.getElementById(self.dataset.id);

    // Probably best to prevent clicks through
    event.preventDefault();
    if (!$(submenu).hasClass(visible)) {
      $(".nav-link").removeClass(visible);
      $(".submenu").removeClass(visible);
    }

    self.classList.toggle(visible);
    submenu.classList.toggle(visible);
  }

  // Remove the active class
  function removeChildClass(el) {
    // Check if it exists, then remove
    if (el.classList.contains(visible)) {
      el.classList.remove(visible);
    }
  }

  // On clicks show submenus
  for (i = 0; i < hasSubmenu.length; i++) {
    hasSubmenu[i].addEventListener("click", showSubmenu);
  }
})(window, document);

/*---------- DRAGGER ----------*/
$(document).ready(function () {
  $(".dragger")
    .mousedown(function (event) {
      $(this)
        .data("down", true)
        .data("x", event.clientX)
        .data("scrollLeft", this.scrollLeft)
        .addClass("dragging");

      return false;
    })
    .mouseup(function (event) {
      $(this).data("down", false).removeClass("dragging");
    })
    .mousemove(function (event) {
      if ($(this).data("down") == true) {
        this.scrollLeft =
          $(this).data("scrollLeft") + $(this).data("x") - event.clientX;
      }
    })
    .mousewheel(function (event, delta) {
      this.scrollLeft -= delta * 30;
    })
    .css({
      overflow: "hidden",
      cursor: "-moz-grab",
    });
  $(window).mouseout(function (event) {
    if ($(".team-form-data").data("down")) {
      try {
        if (
          event.originalTarget.nodeName == "BODY" ||
          event.originalTarget.nodeName == "HTML"
        ) {
          $(".team-form-data").data("down", false);
        }
      } catch (e) {}
    }
  });
});

/*---------- SCROLLER ----------*/
jQuery(function ($) {
  $.fn.hScroll = function (amount) {
    amount = amount || 120;
    $(this).bind("DOMMouseScroll mousewheel", function (event) {
      var oEvent = event.originalEvent,
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
        position = $(this).scrollLeft();
      position += direction > 0 ? -amount : amount;
      $(this).scrollLeft(position);
      event.preventDefault();
    });
  };
});

$(document).ready(function () {
  $(".scroller").hScroll(); // You can pass (optionally) scrolling amount
});

/*---- ANCHOR LINK ANIMATION WITH OFFSET ----*/
$(".secondary-nav a[href^='#']").on("click", function (event) {
  var target = this.hash;

  event.preventDefault();

  var navOffset = $(".secondary-nav").height();

  return $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top - navOffset,
    },
    300,
    function () {
      return window.history.pushState(null, null, target);
    }
  );
});

$(".secondary-nav li").click(function () {
  centerLI(this, ".vam");
  // Dropdown Toggle
  if (!$(this).hasClass("dropdown")) {
    $(".nav-link").removeClass("visible");
    $(".submenu").removeClass("visible");
  }
});

//http://stackoverflow.com/a/33296765/350421
function centerLI(target, outer) {
  var out = $(outer);
  var tar = $(target);
  var x = out.width() - 50;
  var y = tar.outerWidth(true);
  var z = tar.index();
  var q = 0;
  var m = out.find("li");
  for (var i = 0; i < z; i++) {
    q += $(m[i]).outerWidth(true);
  }
  //out.scrollLeft(Math.max(0, q - (x - y)/2));
  out.animate(
    {
      scrollLeft: Math.max(0, q - (x - y) / 2),
    },
    500
  );
}

// Dropdown Close on Body click
$(document).mouseup(function (e) {
  var container = $("#secondary-nav");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".nav-link").removeClass("visible");
    $(".submenu").removeClass("visible");
  }
});

// Learnings from this project are listed below:
const myLearnings = [
  "is()",
  "null",
  "hash",
  "has()",
  "event",
  "css()",
  "find()",
  "return",
  "length",
  "bind()",
  "data()",
  "index()",
  "width()",
  "clientX",
  "$(this)",
  "dataset",
  "e.target",
  "for loop",
  "offset()",
  "nodeName",
  "height()",
  "try catch",
  "mouseup()",
  "scrollTop",
  "animate()",
  "mouseout()",
  "Math.max()",
  "scrollLeft",
  "hasClass()",
  "use strict",
  "addClass()",
  "true false",
  "pushState()",
  "mousemove()",
  "mousedown()",
  "outerWidth()",
  "removeClass()",
  "originalEvent",
  "Dynamic Styles",
  "originalTarget",
  "window.history",
  "getElementById()",
  "classList.toggle()",
  "classList.remove()",
  "querySelectorAll()",
  "if...else if...else",
  "classList.contains()",
  "event.preventDefault()",
  "addEventListener : click",
  "DOMMouseScroll mousewheel",
  "Logical Operators (!,||,&&)",
  "Assignment Operators (-=,+=)",
  "Arithmetic Operators (+,-,*,/)",
  "Comparison Operators (<,>,?,==,===)",
];
