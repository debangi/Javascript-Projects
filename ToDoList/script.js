const inputEl = document.querySelector(".inputBar");
const submitBtn = document.querySelector(".addBtn");
const itemsContainer = document.querySelector(".itemsContainer");
let targetEl;

addTask = () => {
  const task = inputEl.value;
  if (!task) {
    alert("Please fill out the task!");
  }
  const markup = `<li class="listItem">
  <input type="text" class="listText" value=${task} readonly />
  <div class="actions">
    <ion-icon class="checkBtn" id="checkBtn" name="checkmark-circle"></ion-icon>
    <ion-icon class="editBtn" name="create"></ion-icon>
    <ion-icon class="removeBtn" name="close-circle-sharp"></ion-icon>
  </div>
</li>`;
  itemsContainer.insertAdjacentHTML("beforeend", markup);
  inputEl.value = "";
};
clickHandler = (e) => {
  targetEl = e.target;
  if (targetEl) {
    if (targetEl.classList.contains("checkBtn")) targetEl.style.color = "green";

    if (targetEl.classList.contains("editBtn")) {
      targetEl
        .closest(".listItem")
        .querySelector(".listText")
        .removeAttribute("readonly");
      targetEl.closest(".listItem").querySelector(".listText").select();
    }
    if (targetEl.classList.contains("removeBtn"))
      targetEl.closest(".listItem").remove();
  }
};
keyUpHandler = (e) => {
  targetEl = e.target;
  if (targetEl && e.key === "Enter") {
    if (targetEl.classList.contains("listText")) {
      targetEl.setAttribute("readonly", true);
    }
    if (targetEl.classList.contains("inputBar")) addTask();
  }
};

document.body.addEventListener("click", clickHandler);
document.body.addEventListener("keyup", keyUpHandler);
submitBtn.addEventListener("click", addTask);
