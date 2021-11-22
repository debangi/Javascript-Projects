import { RECIPE_API_KEY, APP_ID } from "./recipeApiKey.js";
const loaderEl = document.querySelector(".loader");
const searchInput = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const searchResultCtn = document.querySelector(".searchResult");

const paginationEl = document.querySelector(".pagination");
const prevPageEl = document.querySelector(".prevPage");
const nextPageEl = document.querySelector(".nextPage");
let searchQuery = "";

const appId = APP_ID;
const apiKey = RECIPE_API_KEY;

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
function errorMessage() {
  let markup = ``;
  markup = `<div class="item">
                    <h1>No Search Results available for this keyword. Search Again !!!</h1>
                </div>`;
  searchResultCtn.insertAdjacentHTML("beforeend", markup);
}
async function fetchAPI(searchQuery, from = 0, to = 10) {
  loaderEl.hidden = false;
  paginationEl.style.visibility = "hidden";
  const baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${apiKey}&from=${from}&to=${to}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  loaderEl.hidden = true;
  paginationEl.style.visibility = "visible";

  if (data.count === 0) {
    errorMessage();
  }
  console.log(data);
  generateHtml(data.hits);
}
function loadRecipe(from, to) {
  searchQuery = searchInput.value;
  console.log(searchQuery);
  if (!searchQuery) return;
  searchResultCtn.innerHTML = "";
  fetchAPI(searchQuery, from, to);
  searchInput.value = "";
}
function init() {
  loaderEl.hidden = true;
  searchBtn.addEventListener("click", function () {
    loadRecipe(from, to);
  });
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      loadRecipe(from, to);
    }
  });
}
init();

// for future pagination feature
let currPage = 0;
let from = 0;
let to = 20;
let totalPage;
// function pagination() {
//   // if its the first page, only  show next button
//   // if its page 2 or more, show both buttons
//   // if last page, only show prev button
//   //if only one page, dont show
// }
////////////////////////////////////////
