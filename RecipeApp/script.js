const searchInput = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const searchResultCtn = document.querySelector(".searchResult");
let searchQuery = "";
const appId = "b813395d";
const apiKey = "ec6f3fc29ec4200d29c119d1a0c50039";
// let recipes = {
//     re
// }

searchBtn.addEventListener("click", () => {
  searchQuery = searchInput.value;
  console.log(searchQuery);
  fetchAPI(searchQuery);
});
async function fetchAPI(searchQuery) {
  const baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${apiKey}&to=20`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);
  generateHtml(data.hits);
}
function generateHtml(results) {
  let markup = ``;
  results.map((result) => {
    markup += `<div class="item">
                    <img class="foodImage" src=${result.recipe.image} alt=${
      result.recipe.label
    } />
                    <div class="overview">
                        <div class="overviewHeading">
                            <div class="title">${result.recipe.label}</div>
                            <a class="viewRecipe" href="${
                              result.recipe.url
                            }" target="_blank">View Recipe</a>
                        </div>
                        <div class="overviewDetails">
                            <div class="calories">Calories: ${result.recipe.calories.toFixed(
                              2
                            )}</div>
                        </div>
                    </div>
                </div>`;
  });
  searchResultCtn.insertAdjacentHTML("beforeend", markup);
}
