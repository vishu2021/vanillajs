const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  const response = await fetch(url);
  // console.log("response", response);
  const data = await response.json();
  // console.log("data", data);
  return data;
};

export default fetchFollowers;
