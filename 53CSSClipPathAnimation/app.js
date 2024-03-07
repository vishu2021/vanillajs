let pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--1", e.clientX + "px");
  pos.style.setProperty("--2", e.clientY + "px");
  // console.log('e.clientX :',e.clientX)
  // console.log('e.clientY :',e.clientY)
  // console.log('--1 :',--1)
  // console.log('--2 :', --2)
});
