const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");
button.addEventListener("click", getRandomJoke);
function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  //console.log("ajax :", ajax);
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);
  ajax.onreadystatechange = () => {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let data = JSON.parse(ajax.responseText);
      //console.log("ajax.status :", ajax.status);
      //console.log("ajax.readyState :", ajax.readyState);
      //console.log("ajax.responseText :", ajax.responseText);
      //console.log("data :", data);
      displayJoke.innerHTML = `${data.value}`;
      //console.log("data.value :", data.value);
    } else {
      ajax.onerror = onerror();
    }
  };
  ajax.send();
}
function onerror() {
  displayJoke.textContent = `Something Went Wrong 😥`;
}
