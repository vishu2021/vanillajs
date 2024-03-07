const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const feedbackLabel = document.querySelector(".feedback-label");
let selectedRating = "Satisfied";
ratingsContainer.addEventListener("click", (e) => {
  //console.log("A :", e.target);
  //console.log("B :", e.target.parentNode);
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    // selectedRating = e.target.nextElementSibling.innerHTML;
    selectedRating = e.target.nextElementSibling.innerHTML;
    //console.log("C :", selectedRating);
  }
});
sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong class="thank-you-text">Thank You! </strong> 
        <strong class="selected-rating">Feedback: ${selectedRating} </strong>
    `;
});
function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
