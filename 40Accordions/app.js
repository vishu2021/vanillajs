const itemHeaders = document.querySelectorAll(".accordion-item-header");
itemHeaders.forEach((accordion) => {
  console.log(accordion);
  accordion.addEventListener("click", collapseAccordions);
  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.toggle("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }
    accordion.classList.toggle("active");
    const accordionItemBody = accordion.nextElementSibling;
    console.log(accordionItemBody);
    if (accordion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      console.log(accordionItemBody.scrollHeight);
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  }
});
