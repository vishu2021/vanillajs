let currentElement = "";
let list = document.getElementById("list");
let initialX = 0,
  initialY = 0;

const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

//Create List Items
const creator = (count) => {
  for (let i = 1; i <= count; i++) {
    list.innerHTML += `<li class="list-item" data-value ="${i}">Item-${i} </li>`;
  }
};

//Returns element index with given value
const getPosition = (value) => {
  let elementIndex;
  let listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element, index) => {
    let elementValue = element.getAttribute("data-value");
    if (value == elementValue) {
      elementIndex = index;
    }
  });
  return elementIndex;
};

//Drag and drop functions
function dragStart(e) {
  initialX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  initialY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
  //Set current Element
  currentElement = e.target;
}
function dragOver(e) {
  e.preventDefault();
}

const drop = (e) => {
  e.preventDefault();
  let newX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  let newY = isTouchDevice() ? e.touches[0].clientY : e.clientY;

  //Set targetElement(where we drop the picked element).It is based on mouse position
  let targetElement = document.elementFromPoint(newX, newY);
  let currentValue = currentElement.getAttribute("data-value");
  let targetValue = targetElement.getAttribute("data-value");
  //get index of current and target based on value
  let [currentPosition, targetPosition] = [
    getPosition(currentValue),
    getPosition(targetValue),
  ];
  initialX = newX;
  initialY = newY;

  try {
    //'afterend' inserts the element after the target element and 'beforebegin' inserts before the target element
    if (currentPosition < targetPosition) {
      targetElement.insertAdjacentElement("afterend", currentElement);
    } else {
      targetElement.insertAdjacentElement("beforebegin", currentElement);
    }
  } catch (err) {}
};

window.onload = async () => {
  customElement = "";
  list.innerHTML = "";
  //This creates 5 elements
  await creator(5);

  let listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element) => {
    element.draggable = true;
    element.addEventListener("dragstart", dragStart, false);
    element.addEventListener("dragover", dragOver, false);
    element.addEventListener("drop", drop, false);
    element.addEventListener("touchstart", dragStart, false);
    element.addEventListener("touchmove", drop, false);
  });
};
