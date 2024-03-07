showToast({
  eleWrapper: "#example",
  msg: "There is an error while sending message. Please try again later.",
  theme: "error",
  afterShow: function () {
    console.log("After show function");
  },
  afterClose: function () {
    console.log("After close function");
  },
});
$("#showDefaultMsg").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: "204 No Content : The server successfully processed the request.",
    theme: "info",
  });
});
$("#showSuccessMsg").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: "Thank you for your message. I will write back soon.",
    theme: "success",
  });
});
$("#showErrorMsg").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: "There is an error while sending message. Please try again later.",
    theme: "error",
  });
});
$("#showWarningMsg").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: "110 Response is stale MUST be included whenever the returned response is stale.",
    theme: "warning",
  });
});
$("#showMultipleMsg").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: [
      "110 Response is stale MUST be included whenever the returned response is stale.",
      "110 Response is stale MUST be included whenever the returned response is stale.",
    ],
    theme: "error",
  });
});
$("#showAutoClose").click(function () {
  showToast({
    eleWrapper: "#example",
    msg: "Thank you for your message. I will write back soon.",
    theme: "success",
    closeButton: false,
    autoClose: true,
  });
});
function showToast(option) {
  var wrapper = $(option.eleWrapper);
  var toast = createToast(option);
  toast = $(toast).hide().fadeIn(750);
  if (option.autoClose) {
    var outTime = option.autoCloseTime || 3500;
    if (outTime < 1000) {
      outTime = 1000;
    }
    var watch = setTimeout(function () {
      toast.animate({ "margin-top": "-50px", opacity: "0" }, 500, function () {
        this.remove();
        if (option.afterClose) {
          option.afterClose();
        }
      });
    }, outTime);
  }
  $(wrapper).on("click", ".hs-close", function () {
    $(this).closest(".hs-toast").remove();
    //clearTimeout(watch);
    if (option.afterClose) {
      option.afterClose();
    }
  });
  $(wrapper).append(toast);
  if (option.afterShow) {
    option.afterShow();
  }
}
function createToast(option) {
  var final = toastCaseValidation(option);
  var html =
    `
               <div class="hs-toast hs-theme-` +
    option.theme.toLowerCase() +
    `">
                <div class="hs-toast-inner">                
                  <div class="hs-toast-icons">
                    ` +
    final.icon +
    `
                  </div>
                  <div class="hs-toast-msg">
                    ` +
    final.msg +
    `
                  </div>
                  <div class="hs-toast-action">
                    ` +
    final.close +
    `
                  </div>
                </div>
               </div>`;
  return html;
}
function toastCaseValidation(option) {
  var finalOption = {};
  var toastmsg;
  var themeIco;
  var closeBtn = '<button type="button" class="hs-close">&#10006;</button>';
  switch (option.theme) {
    case "error":
      themeIco =
        '<svg aria-hidden="true" focusable="false"  xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 30 30"> <circle fill="none" stroke="#fff" stroke-width="2"  cx="50%" cy="50%" r="13" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.9s" /> </circle> <line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"  x1="10.5" y1="10.5" x2="19.5" y2="19.5" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="4s" /> </line> <line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"  x1="19.5" y1="10.5" x2="10.5" y2="19.5" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="4s" /> </line> </svg>';
      break;
    case "success":
      themeIco =
        '<svg aria-hidden="true" focusable="false"  xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 30 30"> <circle fill="none" stroke="#fff" stroke-width="2" cx="50%" cy="50%" r="13" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.9s" /> </circle> <polyline fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" points="8,17 13,21 22,10" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="4s" /> </polyline> </svg>';
      break;
    case "warning":
      themeIco =
        '<svg aria-hidden="true" focusable="false"  xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 30 30" > <path  d="M 13 2 Q 15,0 17,2 L 26,23 Q 26,26 23,26 L 6,26 Q 2,26 3,22 L 13,2" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="0.9s" /> </path> <line  fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" x1="15" y1="9" x2="15" y2="17" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="5s" /> </line> <line  fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" x1="15" y1="21" x2="15" y2="22" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="5s" /> </line> </svg>';
      break;
    default:
      themeIco =
        '<svg aria-hidden="true" focusable="false"  xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 30 30"> <circle fill="none" stroke="#fff" stroke-width="2" cx="50%" cy="50%" r="13" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.9s" /> </circle> <line fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" x1="15" y1="9" x2="15" y2="9" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="6s" /> </line> <line fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" x1="15" y1="15" x2="15" y2="22" stroke-dasharray="100"> <animate attributeName="stroke-dashoffset"  from="100" to="0" dur="6s" /> </line> </svg>';
  }
  if (option.closeButton == false) {
    closeBtn = "";
  }
  if (option.msg == undefined) {
    toastmsg = "No Message";
  } else {
    if (option.msg.length != 1 && typeof option.msg === "object") {
      toastmsg = "<ul>";
      option.msg.forEach(function (val, index) {
        toastmsg = toastmsg + "<li>" + val + "</li>";
      });
      toastmsg = toastmsg + "</ul>";
    } else {
      toastmsg = option.msg;
    }
  }
  finalOption.icon = themeIco;
  finalOption.close = closeBtn;
  finalOption.msg = toastmsg;
  return finalOption;
}

// Learnings from this project are listed below:
const myLearnings = [
  "this",
  "return",
  "typeof",
  "hide()",
  "click()",
  "{object}",
  "fadeIn()",
  "remove()",
  "append()",
  "undefined",
  "animate()",
  "forEach()",
  "closest()",
  "true false",
  "afterShow()",
  "showToast()",
  "setTimeout()",
  "afterClose()",
  "toLowerCase()",
  "Dynamic Styles",
  "if...else if...else",
  "Backtick Literals (``)",
  "Arithmetic Operators (+)",
  "Logical Operators (||,&&)",
  "switch case break default",
  "Comparison Operators (<,==,!=,===)",
];
