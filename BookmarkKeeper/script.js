const modalShow = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modalContainer");
const modalClose = document.querySelector(".closeModal");
const bookmarkForm = document.getElementById("bookmarkForm");
const websiteNameEl = document.querySelector(".websiteName");
const websiteUrlEl = document.querySelector(".websiteUrl");
const bookmarksContainer = document.getElementById("bookmarksContainer");

function showModal() {
  modalContainer.classList.add("showModal");
}
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () =>
  modalContainer.classList.remove("showModal")
);
window.addEventListener("click", (e) => {
  if (!e.target.closest(".modal") && e.target !== modalShow) {
    modalContainer.classList.remove("showModal");
  }
});

function storeBookmark(e) {
  e.preventDefault();
  const name = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
    urlValue = `https://${urlValue}`;
  }
  console.log(name, url);
}
bookmarkForm.addEventListener("submit", storeBookmark);
