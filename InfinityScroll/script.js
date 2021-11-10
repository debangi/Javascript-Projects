const imgContainer = document.querySelector(".imgContainer");
const loaderEl = document.querySelector(".loader");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const count = 30;
const apiKey = "DmhktS54ycoRC5HL5IbwHULRejz0YZiG6bs7B9F2C1o";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&count=${count}`;

imageLoaded = () => {
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImages) {
    ready = true;
    console.log("ready=", ready);
  }
};
setAttributes = (el, attributes) => {
  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
};
displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("total images =", totalImages);
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
};
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
