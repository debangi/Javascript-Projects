import UNSPLASH_RANDOM_API_KEY from "./infiniteScrollApiKey.js";

const imgContainer = document.querySelector(".imgContainer");
const loaderEl = document.querySelector(".loader");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
const apiKey = UNSPLASH_RANDOM_API_KEY;
let count = 10;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&count=${count}`;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loaderEl.hidden = true;
    count = 30;
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&count=${count}`;
  }
}
function setAttributes(el, attributes) {
  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
}
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", imageLoaded);

    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {}
}

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();

// video 36, 8:50
