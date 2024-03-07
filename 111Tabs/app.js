const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  //console.log("id :", id);
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      //console.log("btns :", btns);
      //console.log("btn :", btn);
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //console.log("e.target :", e.target);
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    //console.log("element :", element);
    element.classList.add("active");
  }
});
