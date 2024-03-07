function getElement(selection) {
  // console.log("selection :", selection);
  const element = document.querySelector(selection);
  // console.log("element :", element);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
class Gallery {
  constructor(element) {
    this.container = element;
    // console.log("element :", element);
    this.list = [...element.querySelectorAll(".img")];
    // console.log("this.list :", this.list);
    // target
    this.modal = getElement(".modal");
    // console.log("this.modal :", this.modal);
    this.modalImg = getElement(".main-img");
    // console.log("this.modalImg :", this.modalImg);
    this.imageName = getElement(".image-name");
    // console.log("this.imageName :", this.imageName);
    this.modalImages = getElement(".modal-images");
    // console.log("this.modalImages :", this.modalImages);
    this.closeBtn = getElement(".close-btn");
    // console.log("this.closeBtn :", this.closeBtn);
    this.nextBtn = getElement(".next-btn");
    // console.log("this.nextBtn :", this.nextBtn);
    this.prevBtn = getElement(".prev-btn");
    // console.log("this.prevBtn :", this.prevBtn);
    // self ref
    // let self = this;
    // bind functions
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    //console.log("this.closeModal :", this.closeModal);
    this.nextImage = this.nextImage.bind(this);
    // console.log("this.nextImage :", this.nextImage);
    this.prevImage = this.prevImage.bind(this);
    // console.log("this.prevImage :", this.prevImage);
    this.chooseImage = this.chooseImage.bind(this);
    // console.log("this.chooseImage :", this.chooseImage);
    // container event
    this.container.addEventListener(
      "click",
      function (e) {
        // console.log("e :", e);
        // self.openModal();
        if (e.target.classList.contains("img")) {
          // console.log("e.target :", e.target);
          this.openModal(e.target, this.list);
          // console.log("this.list :", this.list);
        }
      }.bind(this)
    );
  }
  openModal(selectedImage, list) {
    // console.log("selectedImage :", selectedImage);
    // console.log("list :", list);
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        // console.log("image :", image);
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
      })
      .join("");
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
  }
  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
    // console.log("this.modalImg.src :", this.modalImg.src);
    // console.log("this.imageName.textContent :", this.imageName.textContent);
  }
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }
  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    // console.log("selected :", selected);
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    // console.log("next :", next);
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }
  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    // console.log("selected :", selected);
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    // console.log("prev :", prev);
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }
  chooseImage(e) {
    if (e.target.classList.contains("modal-img")) {
      // console.log("e.target :", e.target);
      const selected = this.modalImages.querySelector(".selected");
      // console.log("selected :", selected);
      selected.classList.remove("selected");
      this.setMainImage(e.target);
      e.target.classList.add("selected");
    }
  }
}
const nature = new Gallery(getElement(".nature"));
// console.log("nature :", nature);
const city = new Gallery(getElement(".city"));
// console.log("city :", city);
