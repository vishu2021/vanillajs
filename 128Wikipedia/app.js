// const url =
//   "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue";
// list=search - perform a full text search
// sr search="inputValue" - search for page titles or content matching  this value.
// sr limit=20 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors
const page_url = "href=http://en.wikipedia.org/?curid=${pageid}";
const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");
formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error"> please enter valid search term</div>';
    return;
  }
  fetchPages(value);
});
const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(`${url}${searchValue}`);
    // console.log("response :", response);
    const data = await response.json();
    // console.log("data :", data);
    const results = data.query.search;
    // console.log("results :", results);
    if (results.length < 1) {
      resultsDOM.innerHTML =
        '<div class="error">no matching results. Please try again</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
  }
};
const renderResults = (list) => {
  // console.log("list :", list);
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      // console.log("{ title, snippet, pageid } :", { title, snippet, pageid });
      // console.log("item :", item);
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join("");
  resultsDOM.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
  // console.log("cardsList :", cardsList);
};
