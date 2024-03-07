const textInput = document.querySelector(".text-input");
const worldCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");
const checks = [atLeastTwoCharacters, absenceOfThreeConsecutiveCharacters];
function atLeastTwoCharacters(text) {
  //console.log("text :", text);
  const letters = text.match(/[a-z]/gi) || [];
  // console.log("letters :", letters);
  return letters.length >= 2;
}
function absenceOfThreeConsecutiveCharacters(text) {
  //console.log("text :", text);
  for (const character of text) {
    // console.log("character :", character);
    const occurrences = Array.from(text).filter((v) => v == character).length;
    //console.log("Array.from(text) :", Array.from(text));
    // console.log(
    //   "A :",
    //   Array.from(text).filter((v) => v == character)
    // );
    //   console.log("occurrences 1:", occurrences);
    if (occurrences >= 3) {
      // console.log("occurrences 2:", occurrences);
      return false;
    }
  }
  return true;
}
textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  //console.log("splitted :", splitted);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  //console.log("letterCount :", letterCount);
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;
  // console.log("spaceCount :", spaceCount);
  let wordCount = 0;
  outer: for (const text of splitted) {
    //console.log("text :", text);
    for (const check of checks) {
      // console.log("check :", check);
      if (!check(text)) {
        continue outer;
      }
    }
    wordCount++;
  }
  worldCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});
