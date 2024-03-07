$(function () {
  var Page = (function () {
    var $navArrows = $("#nav-arrows"),
      $nav = $("#nav-dots > span"),
      $document = $(document),
      slitslider = $("#slider").slitslider({
        onBeforeChange: function (slide, pos) {
          $nav.removeClass("nav-dot-current");
          $nav.eq(pos).addClass("nav-dot-current");
        },
      }),
      init = function () {
        initEvents();
      },
      initEvents = function () {
        //click events removed
      },
      NextSlid = function () {
        slitslider.next();
        return false;
      },
      PreviousSlid = function () {
        slitslider.previous();
        return false;
      };

    return { init: init, NextSlid: NextSlid, PreviousSlid: PreviousSlid };
  })();

  Page.init();
  var pageCount = 0;
  $(window).on("wheel", function (e) {
    var delta = e.originalEvent.deltaY;
    if (delta > 0) {
      Page.NextSlid();
    } else {
      Page.PreviousSlid();
    }

    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    if ($(".sl-slider").isInViewport()) {
      console.log("Slide is Visible");
      //$(".container").parent().addClass("sticky");
      var slideWrap = $(".sticky-main"),
        slide = $(".sticky-main .sl-slide"),
        count = slide.length;
      slideWrap.addClass("sticky");
      console.log("A ==== class");

      // slide.each(function (index) {
      //   var i = index + 1;
      //   $(this).attr("index-number", i);
      // });

      pageCount++;
      //   if (pageCount > count) {
      //     //$(".container").parent().removeClass("sticky");
      //     slideWrap.removeClass("sticky");
      //     console.log("remove ==== class");
      //     pageCount = 0;
      //   }
      //   console.log("Visible Total Count = " + pageCount);
      // } else {
      //   // do something else
      //   console.log("Slide Not visible");
      //   // $(".container").parent().removeClass("sticky");
      // }
      // });
    }
  });
});

// Learnings from this project are listed below:
const myLearnings = [
  "eq()",
  "next()",
  "return",
  "[array]",
  "height()",
  "{object}",
  "offset()",
  "true false",
  "addClass()",
  "previous()",
  "scrollTop()",
  "on('wheel')",
  "outerHeight()",
  "removeClass()",
  "jquery.min.js",
  "Dynamic Styles",
  "if...else if...else",
  "jquery.slitslider.js",
  "jquery.ba-cond.min.js",
  "modernizr-2.8.3.min.js",
  "Logical Operators (&&)",
  "Comparison Operators (>,<)",
  "Arithmetic Operators (+,++)",
];
