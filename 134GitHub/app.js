const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");
const getUser = async (username) => {
  //   console.log("username :", username);
  const response = await fetch(APIURL + username);
  //   console.log("response :", response);
  const data = await response.json();
  //   console.log("data :", data);
  const card = `
        <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                </div>
            </div>
        </div>
    `;
  main.innerHTML = card;
  //   console.log("card :", card);
  getRepos(username);
};
// init call
getUser("bhagirath-wscubetech");
const getRepos = async (username) => {
  //   console.log("username :", username);
  const repos = document.querySelector("#repos");
  const response = await fetch(APIURL + username + "/repos");
  //   console.log("response :", response);
  const data = await response.json();
  //   console.log("data :", data);
  data.forEach((item) => {
    // console.log("item :", item);
    const elem = document.createElement("a");
    // console.log("elem :", elem);
    elem.classList.add("repo");
    elem.href = item.html_url;
    // console.log("elem.href :", elem.href);
    elem.innerText = item.name;
    // console.log("elem.innerText :", elem.innerText);
    elem.target = "_blank";
    repos.appendChild(elem);
  });
};
const formSubmit = () => {
  if (searchBox.value != "") {
    getUser(searchBox.value);
    searchBox.value = "";
  }
  return false;
};
searchBox.addEventListener("focusout", function () {
  formSubmit();
});
