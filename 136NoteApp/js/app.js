const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
const noteSavedToast = document.querySelector("#note-saved-toast");
const noteDeletedToast = document.querySelector("#note-deleted-toast");
addBtn.addEventListener("click", function () {
  addNote();
});
const saveNotes = () => {
  const notesArea = document.querySelectorAll(".note textarea");
  // console.log("notes :", notes);
  const data = [];
  // console.log("data :", data);
  notesArea.forEach((note) => {
    // console.log("note :", note);
    // console.log("note.value :", note.value);
    data.push(note.value);
  });
  // console.log(data)
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
    // console.log("localStorage :", localStorage);
    // console.log("data :", data);
    // console.log("JSON.stringify(data) :", JSON.stringify(data));
  }
};
const addNote = (text = "") => {
  // console.log("text :", text);
  const note = document.createElement("div");
  // console.log("note :", note);
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea>${text}</textarea>
    `;
  let trashBtn = note.querySelector(".trash");
  let saveBtn = note.querySelector(".save");
  let textarea = note.querySelector("textarea");
  trashBtn.addEventListener("click", function () {
    note.remove();
    saveNotes();
    showDeletedToast();
  });
  saveBtn.addEventListener("click", function () {
    saveNotes();
    showSavedToast();
  });
  textarea.addEventListener("focusout", function () {
    saveNotes();
    showSavedToast();
  });
  main.appendChild(note);
  saveNotes();
};
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  // console.log("lsNotes :", lsNotes);
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();
function showSavedToast() {
  noteSavedToast.classList.add("show-toast");
  noteDeletedToast.classList.remove("show-toast");
  setTimeout(function () {
    noteSavedToast.classList.remove("show-toast");
  }, 800);
}
function showDeletedToast() {
  noteSavedToast.classList.remove("show-toast");
  noteDeletedToast.classList.add("show-toast");
  setTimeout(function () {
    noteDeletedToast.classList.remove("show-toast");
  }, 800);
}
