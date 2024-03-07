const upload = document.querySelector("input");
const image = document.querySelector("#image");
const closeImage = document.querySelector(".close");
const wrapper = document.querySelector(".wrapper");
upload.addEventListener("change", (e) => {
  uploadFile(e);
});
function uploadFile(event) {
  wrapper.classList.add("show-image");
  image.src = URL.createObjectURL(event.target.files[0]);
  // console.log("A: ", event.target);
  // console.log("B: ", event.target.files);
  // console.log("C: ", event.target.files[0]);
  // console.log("D: ", URL.createObjectURL(event.target.files[0]));
}
closeImage.addEventListener("click", () => {
  wrapper.classList.remove("show-image");
});
