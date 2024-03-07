// Get images
const images = document.querySelectorAll(".gallery-item")

// Loop images and add event listener
images.forEach(image => {
  image.addEventListener("click", expandImage)
})

// Function to expand the image
function expandImage(e) {
  // Close the none clicked images
  images.forEach(image => {
    if(image !== e.target) {
      image.classList.remove("gallery-expand")
    }
  })
  // Clicked image
  const selectedImage = e.target
  // Add class
  selectedImage.classList.add("gallery-expand")
}