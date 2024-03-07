const MAX_ANGLE = 30;
const START_DURATION = 0.1;
const FINISH_DURATION = 0.5;

const cardElement = document.querySelector(".card");
const cardRect = cardElement.getBoundingClientRect();

const onCardMouseEnter = () => {
  cardElement.style.transformDuration = `${START_DURATION}s`;
};

const onCardMouseMove = (evt) => {
  const positionX = evt.clientX - cardRect.left;
  const positionY = evt.clientY - cardRect.top;

  const offsetX = (positionX - cardRect.width / 2) / cardRect.width;
  const offsetY = (positionY - cardRect.height / 2) / cardRect.height;

  const angleX = MAX_ANGLE * offsetY;
  const angleY = MAX_ANGLE * offsetX * -1;

  cardElement.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
};

const onCardMouseLeave = () => {
  cardElement.style.transform = "rotateX(0) rotateY(0)";
  cardElement.style.transformDuration = `${FINISH_DURATION}s`;
};

cardElement.addEventListener("mouseenter", onCardMouseEnter);
cardElement.addEventListener("mousemove", onCardMouseMove);
cardElement.addEventListener("mouseleave", onCardMouseLeave);

// Learnings from this project are listed below:
const myLearnings = [
  "top",
  "left",
  "width",
  "height",
  "offsetX",
  "offsetY",
  "clientX",
  "clientY",
  "Dynamic Styles",
  "querySelector()",
  "Backtick Literals (``)",
  "addEventListener : mousemove",
  "Arithmetic Operators (-,*,/)",
  "addEventListener : mouseleave",
  "addEventListener : mouseenter",
];
