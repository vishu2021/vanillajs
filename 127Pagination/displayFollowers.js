const container = document.querySelector(".container");
const display = (followers) => {
  // console.log("followers", followers);
  const newFollowers = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      // console.log("person", person);
      return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `;
    })
    .join("");
  container.innerHTML = newFollowers;
  // console.log("newFollowers", newFollowers);
};

export default display;
