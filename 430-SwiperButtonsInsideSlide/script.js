var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  grabCursor: true,
  effect: "slide",
  loop: true,
  slidesPerView: 1,
});
var tabList = $(".tabs-group");
/* click events */
$(".slide1").click(function () {
  mySwiper.slideTo(1);
});
$(".slide2").click(function () {
  mySwiper.slideTo(2);
});
$(".swiper-container li:first-child button").addClass("active");
mySwiper.on("slideChange", function () {
  var realIndex = mySwiper.realIndex;
  $(".tabs-group").each(function (index) {
    /* remove active from all */
    $(this).children().children().removeClass("active");
    /* add active for the current node */
    $(this).children().eq(realIndex).children().addClass("active");
  });
  //console.log("slide changed index: " + realIndex);
});
// Learnings from this project are listed below:
const myLearnings = [
  "eq()",
  "each()",
  "$(this)",
  "click()",
  "{object}",
  "slideTo()",
  "true false",
  "addClass()",
  "children()",
  "new Swiper()",
  "removeClass()",
  "on('slideChange')",
];
