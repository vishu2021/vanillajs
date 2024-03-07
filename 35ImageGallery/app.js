const images = document.querySelectorAll("img");
const wrapper = document.getElementById("wrapper");
const imgWrapper = document.getElementById("fullImg");
const close = document.querySelector(".close");
images.forEach((img, imageName) => {
  img.addEventListener("click", () => {
    let imagePath = img.src;
    let imgPathIndex = imagePath.lastIndexOf("/");
    imageName = imagePath;
    if (imgPathIndex !== -1) {
      imageName = img.src.substring(imgPathIndex + 1, img.src.length);
    }
    //Using Name of Image
    // openModal(`https://i.imgur.com/${imageName}`);
    //Using Path of Image
    openModal(`${imagePath}`);
  });
});
close.addEventListener("click", () => wrapper.classList.remove("open"));
function openModal(pic) {
  wrapper.classList.add("open");
  imgWrapper.src = pic;
}
// Loop through each <img> tag and extract the image file name : For Loop Method : Traditional Method
// function getImageName(imageName) {
//   for (let i = 0; i < images.length; i++) {
//     let imgTag = images[i];
//     let imgSrc = imgTag.src;
//     let index = imgSrc.lastIndexOf("/");
//     imageName = imgSrc;
//     if (index !== -1) {
//       imageName = imgSrc.substring(index + 1, imgSrc.length);
//     }
//   }
//   return imageName;
// }
