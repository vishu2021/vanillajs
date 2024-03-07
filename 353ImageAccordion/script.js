const items = document.querySelectorAll(".item");
let imageURLs = [
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/dog-1.jpg",
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/dog-2.jpg",
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/dog-3.jpg",
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/dog-4.jpg",
  "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/dog-5.jpg",
];

//initially empty
let deviceType = "";
let events = {
  mouse: {
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    start: "touchstart",
    end: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  //Initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "9"; //Expand the item
  });
  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1"; //Contract the item
  });
});

// Learnings from this project are listed below:
const myLearnings = [
  "return",
  "forEach()",
  "try catch",
  "true false",
  "createEvent()",
  "appendChild()",
  "Dynamic Styles",
  "setAttribute()",
  "createElement()",
  "querySelectorAll()",
  "addEventListener : touchend",
  "addEventListener : mouseout",
  "addEventListener : mouseover",
  "addEventListener : touchstart",
];
