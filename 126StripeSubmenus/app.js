import subLinks from "./data.js";
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");
// hide/show sidebar
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

// set sidebar
sidebar.innerHTML = subLinks
  .map((item) => {
    // console.log("item :", item);
    const { links, page } = item;
    // console.log("{ links, page } :", { links, page });
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    // console.log("link :", link);
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join("")}
</div>
</article>`;
  })
  .join("");

linkBtns.forEach((btn) => {
  // console.log("btn :", btn);
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    // console.log("text :", text);
    // console.log("e.currentTarget :", e.currentTarget);
    const tempBtn = e.currentTarget.getBoundingClientRect();
    // console.log("tempBtn :", tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    // console.log("center :", center);
    const bottom = tempBtn.bottom - 3;
    // console.log("bottom :", bottom);
    const tempPage = subLinks.find((link) => link.page === text);
    // console.log("tempPage :", tempPage);
    if (tempPage) {
      const { page, links } = tempPage;
      // console.log("{ page, links } :", { page, links });
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      }
      if (links.length > 3) {
        columns = "col-4";
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </section>
      `;
      // console.log("submenu.innerHTML :", submenu.innerHTML);
    }
  });
});
hero.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
