const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  getPerson(getData);
});
function getPerson(callBack) {
  const url = "https://randomuser.me/api/";
  const request = new XMLHttpRequest();
  // console.log("request :", request);
  request.open("GET", url, true);
  request.onload = function () {
    if (this.status === 200) {
      //console.log("this :", this);
      callBack(this.responseText, showData);
      // console.log("this.responseText :", this.responseText);
    }
  };
  request.send();
}
function getData(response, callBack) {
  const data = JSON.parse(response);
  // console.log("data :", data);
  const {
    name: { first },
    name: { last },
    picture: { large },
    location: { street },
    phone,
    email,
  } = data.results[0];
  // console.log("data.results[0] :", data.results[0]);
  callBack(first, last, large, street, phone, email);
}
function showData(first, last, large, street, phone, email) {
  document.getElementById("name").textContent = `${first} ${last}`;
  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
  document.getElementById("street").textContent = street.name;
  document.getElementById("phone").textContent = phone;
  document.getElementById("email").textContent = email;
  document.getElementById("photo").src = large;
}
