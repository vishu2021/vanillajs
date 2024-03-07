const insert = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
  //   console.log("key : ", event.key);
  //   console.log("keyCode : ", event.keyCode);
  //   console.log("code : ", event.code);
  //   console.log("metaKey : ", event.metaKey);
  insert.innerHTML = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
        <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
        <small>event.code</small>
        </div>
    `;
});
