const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();
filter.addEventListener("input", (e) => filterData(e.target.value));
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  //console.log("res :", res);
  const { results } = await res.json();
  //console.log("results :", results);
  //console.log("{ results } :", { results });
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    //console.log("li :", li);
    listItems.push(li);
    //console.log("listItems.push(li) :", listItems.push(li));
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first}  ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country} </p>
        </div>
    `;
    result.appendChild(li);
  });
}
function filterData(searchTerm) {
  //console.log("searchTerm :", searchTerm);
  listItems.forEach((item) => {
    //console.log("item :", item);
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      //console.log('item.innerText.toLowerCase() :',item.innerText.toLowerCase());
      // console.log("searchTerm.toLowerCase() :", searchTerm.toLowerCase());
      // console.log(
      //   "item.innerText.toLowerCase().includes(searchTerm.toLowerCase()) :",
      //   item.innerText.toLowerCase().includes(searchTerm.toLowerCase())
      // );
      item.classList.remove("hide");
    } else {
      // console.log(
      //   "item.innerText.toLowerCase().includes(searchTerm.toLowerCase()) :",
      //   item.innerText.toLowerCase().includes(searchTerm.toLowerCase())
      // );
      item.classList.add("hide");
    }
  });
}
// Toggler
let toggler = document.getElementById("switch");
toggler.addEventListener("click", () => {
  //  console.log(toggler.checked);
  if (toggler.checked === true) {
    document.body.style.backgroundColor = "rgb(17, 17, 17)";
    document.querySelector(".header").style.backgroundColor = "crimson";
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelector(".header").style.backgroundColor = "black";
  }
});
