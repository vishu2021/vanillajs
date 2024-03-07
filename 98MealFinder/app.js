const searchMeal = async (e) => {
  e.preventDefault();
  // Select Elements
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");
  const showMealInfo = (meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    //console.log("meal :", meal);
    title.textContent = strMeal;
    //console.log("strMeal :", strMeal);
    img.style.backgroundImage = `url(${strMealThumb})`;
    // console.log("strMealThumb :", strMealThumb);
    info.textContent = strInstructions;
    // console.log("strInstructions :", strInstructions);
    const ingredients = [];
    //console.log("ingredients :", ingredients);
    for (let i = 1; i <= 20; i++) {
      // console.log("i :", i);
      if (meal[`strIngredient${i}`]) {
        //console.log("meal[`strIngredient${i}`] :", meal[`strIngredient${i}`]);
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
        //  console.log("meal[`strMeasure${i}`] :", meal[`strMeasure${i}`]);
      } else {
        break;
      }
    }
    const html = `
    <span>${ingredients
      .map((ing) => `<li class="ing">${ing}</li>`)
      .join("")}</span>
    `;
    ingredientsOutput.innerHTML = html;
    // console.log("html :", html);
  };
  const showAlert = () => {
    alert("Meal not found 😕");
  };
  // Fetch Data
  const fetchMealData = async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );
    //console.log("res :", res);
    const { meals } = await res.json();
    //console.log("meals :", meals);
    return meals;
  };
  // Get the user value
  const val = input.value.trim();
  //console.log("val :", val);
  if (val) {
    const meals = await fetchMealData(val);
    //console.log("meals :", meals);
    if (!meals) {
      showAlert();
      return;
    }
    meals.forEach(showMealInfo);
  } else {
    alert("Please try searching for meal 🥺");
  }
};
const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);
const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);
