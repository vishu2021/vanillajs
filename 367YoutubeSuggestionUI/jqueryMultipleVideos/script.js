$("#myform1 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv1b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv1b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform2 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv2b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv2b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform3 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv3b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv3b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform4 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv4b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv4b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform5 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv5b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv5b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform6 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv6b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv6b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform7 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv7b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv7b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform8 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv8b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv8b").css({ width: "0" });
    audio1.pause();
  }
});
$("#myform9 :checkbox").change(function () {
  var audio1 = $("#buzzer1")[0];
  if ($(this).is(":checked")) {
    $("#tv9b").css({ width: "33.33%" });
    audio1.play();
  } else {
    $("#tv9b").css({ width: "0" });
    audio1.pause();
  }
});

// Learnings from this project are listed below:
const myLearnings = [
  "is()",
  "css()",
  "play()",
  "$(this)",
  "pause()",
  "change()",
  "if...else if...else",
];
