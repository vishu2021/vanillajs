const displayButtons = (container, pages, activeIndex) => {
  // console.log("container", container);
  // console.log("pages", pages);
  // console.log("activeIndex", activeIndex);
  let btns = pages.map((_, pageIndex) => {
    // console.log("pageIndex", pageIndex);
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : "null"
    }" data-index="${pageIndex}">
${pageIndex + 1}
</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join("");
};

export default displayButtons;
