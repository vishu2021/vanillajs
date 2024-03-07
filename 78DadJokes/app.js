const btn = document.getElementById("btn");
const jokeContent = document.getElementById("content");
btn.addEventListener("click", joke);
async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  let a = await fetch("https://icanhazdadjoke.com/", config);
  //console.log("a :", a);
  let b = await a.json();
  //console.log("b :", b);
  jokeContent.innerHTML = b.joke;
}
