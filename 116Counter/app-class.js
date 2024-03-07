function getElement(selection) {
  // console.log("selection :", selection);
  const element = document.querySelector(selection);
  //console.log("element :", element);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
class Counter {
  constructor(element, value) {
    this.counter = element;
    // console.log("element :", element);
    this.value = value;
    // console.log("value :", value);
    this.resetBtn = element.querySelector(".reset");
    // console.log("this.resetBtn :", this.resetBtn);
    this.increaseBtn = element.querySelector(".increase");
    // console.log("this.increaseBtn :", this.increaseBtn);
    this.decreaseBtn = element.querySelector(".decrease");
    // console.log("this.decreaseBtn :", this.decreaseBtn);
    this.valueDOM = element.querySelector(".value");
    // console.log("this.valueDOM :", this.valueDOM);
    this.valueDOM.textContent = this.value;
    // console.log("this.valueDOM.textContent :", this.valueDOM.textContent);
    // bind this to all function
    this.increase = this.increase.bind(this);
    // console.log("this.increase :", this.increase);
    this.decrease = this.decrease.bind(this);
    // console.log("this.decrease :", this.decrease);
    this.reset = this.reset.bind(this);
    // console.log("this.reset :", this.reset);
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
    //console.log("this.value++ :", this.value++);
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
    // console.log("this.value-- :", this.value--);
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
    // console.log("this.value :", this.value);
  }
}
const firstCounter = new Counter(getElement(".first-counter"), 100);
//console.log("firstCounter :", firstCounter);
const secondCounter = new Counter(getElement(".second-counter"), 200);
// console.log("secondCounter :", secondCounter);
