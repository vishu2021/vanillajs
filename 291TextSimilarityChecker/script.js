//Get input elements and result element
const text1Input = document.getElementById("text1");
const text2Input = document.getElementById("text2");
const resultElement = document.getElementById("result");
const calculateButton = document.getElementById("calculateButton");
//Function to calculate similarity
let calculateSimilarity = (text1, text2) => {
  //Tokenize the input texts (split them into words)
  const tokens1 = text1.split(" ");
  const tokens2 = text2.split(" ");
  //Create sets from the tokens to remove duplicates
  const set1 = new Set(tokens1);
  const set2 = new Set(tokens2);
  //Calculate the intersection of the sets
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  //Calculate union of the sets
  const union = new Set([...set1, ...set2]);
  //Calculate the  similarity
  const similarity = (intersection.size / union.size) * 100;
  //Multiply by 100 to get percentage
  return similarity;
};
//Add click event listener to the calculate button
calculateButton.addEventListener("click", () => {
  //Get the values from input fields
  const text1 = text1Input.value;
  const text2 = text2Input.value;
  const similarity = calculateSimilarity(text1, text2);
  resultElement.textContent = similarity.toFixed(2);
});
// Learnings from this project are listed below:
const myLearnings = [
  "size",
  "has()",
  "value",
  "return",
  "split()",
  "filter()",
  "toFixed()",
  "new Set()",
  "[...array]",
  "textContent",
  "getElementById()",
  "addEventListener : click",
  "Arithmetic Operators (*,/)",
];
