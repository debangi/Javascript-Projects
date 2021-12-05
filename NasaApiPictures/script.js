const resultsNav = document.getElementById("resultsNav");
const favouritesNav = document.getElementById("favouritesNav");
const imagesContainer = document.querySelector(".imagesContainer");
const saveConfirmed = document.querySelector(".saveConfirmed");
const loader = document.querySelector(".loader");

const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

function updateDOM() {
  resultsArray.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const link = document.createElement("a");
    link.href = result.hdurl;
    link.title = "View Full Image";
    link.target = "_blank";
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = result.url;
    image.alt = "NASA Picture of the Day";
    image.loading = "lazy";
  });
}

async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    updateDOM();
  } catch (err) {
    console.log(err);
  }
}
getNasaPictures();
