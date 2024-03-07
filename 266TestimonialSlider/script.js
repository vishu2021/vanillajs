//Testimonial Data
const testimonials = [
  {
    count: 1,
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image:
      "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/profile-image-1.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    count: 2,
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image:
      "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    count: 3,
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image:
      "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    count: 4,
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image:
      "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/images/profile-image-4.png",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
  <span class="count">${testimonials[i].count}</span>
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
// Learnings from this project are listed below:
const myLearnings = [
  "length",
  "[array]",
  "innerHTML",
  "window.onload",
  "getElementById()",
  "Backtick Literals (``)",
  "addEventListener : click",
  "Arithmetic Operators (+,-,%)",
];
