const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", () => {
  fetchDadJoke();
});
const fetchDadJoke = async () => {
  result.innerHTML = `<h1 class="loading">Loading... <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" class="loader-image"> </h1>`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    // console.log("response :", response);
    if (!response.ok) {
      throw new Error(" error");
    }
    const data = await response.json();
    // console.log("data :", data);
    result.textContent = data.joke;
    // console.log("data.joke :", data.joke);
  } catch (error) {
    console.log(error.message);
    result.textContent = "There was an error...";
  }
};
fetchDadJoke();
