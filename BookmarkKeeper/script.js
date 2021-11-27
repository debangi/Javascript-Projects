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

function validateForm(nameValue, urlValue) {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please submit values for both fields");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("Please provide a valid URL");
    return false;
  }
  return true;
}
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
    urlValue = `https://${urlValue}`;
  }
  console.log(nameValue, urlValue);
  if (!validateForm(nameValue, urlValue)) {
    return false;
  }
}
bookmarkForm.addEventListener("submit", storeBookmark);
