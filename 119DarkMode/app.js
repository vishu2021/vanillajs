const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // console.log("article :", article);
    // console.log("title :", title);
    // console.log("length :", length);
    // console.log("snippet :", snippet);
    // console.log("date :", date);
    const formatDate = moment(date).format("MMMM Do, YYYY");
    // console.log("formatDate :", formatDate);
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");
//console.log("articles :", articles);
articlesContainer.innerHTML = articlesData;
// console.log("articlesData :", articlesData);
