const followers = document.querySelectorAll(".followers");
followers.forEach((followersCounter) => {
  //console.log("A :", followersCounter);
  followersCounter.innerHTML = "0";
  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    //console.log("B :", target);
    const c = +followersCounter.innerText;
    //console.log("C :", c);
    const increment = target / 500;
    //console.log("D :", increment);
    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      //console.log("E :", followersCounter.innerHTML);
      setTimeout(updateFollowersCounter, 1);
      //console.log("F :", setTimeout(updateFollowersCounter, 1));
    } else {
      followersCounter.innerText = target;
      //console.log("G :", followersCounter.innerText);
    }
  };
  updateFollowersCounter();
});
