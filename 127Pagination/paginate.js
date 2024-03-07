const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  // console.log("numberOfPages :", numberOfPages);
  // console.log("followers :", followers);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    // console.log("index :", index);
    // console.log("itemsPerPage :", itemsPerPage);
    // console.log("start :", start);
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
