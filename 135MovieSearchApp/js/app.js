const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector("#movie-box");
const getMovies = async (url) => {
  const response = await fetch(url);
  // console.log("response :", response);
  const data = await response.json();
  // console.log("data :", data);
  showMovies(data);
};
getMovies(API_URL);
const showMovies = (data) => {
  // console.log("data :", data);
  movieBox.innerHTML = "";
  data.results.forEach((result) => {
    // console.log("result :", result);
    const imagePath =
      result.poster_path === null
        ? "https://d289lqr9w22fzu.cloudfront.net/orientation-block/assets/image-missing.png"
        : IMAGE_PATH + result.poster_path;
    // console.log("imagePath :", imagePath);
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
<img src="${imagePath}" alt="" />
<div class="overlay">
  <div class="title"> 
      <h2> ${result.original_title}  </h2>
      <span> ${result.vote_average} <span>
  </div>
  <h3>Overview:</h3>
  <p> 
      ${result.overview}
  </p>
</div>`;
    movieBox.appendChild(box);
    // console.log("box.innerHTML :", box.innerHTML);
  });
};

document.querySelector("#search").addEventListener("keyup", function (event) {
  // console.log("event :", event);
  // console.log("event.target.value :", event.target.value);
  if (event.target.value != "") {
    getMovies(SEARCH_API + event.target.value);
  } else {
    getMovies(API_URL);
  }
});
