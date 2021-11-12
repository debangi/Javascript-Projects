const inputEl = document.querySelector(".inputBar");
const submitBtn = document.querySelector(".addBtn");
const itemsContainer = document.querySelector(".itemsContainer");
let targetEl;

addTask = () => {
  const task = inputEl.value;
  if (!task) {
    alert("Please fill out the task!");
    return;
  }
  const markup = `<li class="listItem">
  <input type="text" class="listText" value="${task}" readonly />
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
  // check if target Element exists
  if (targetEl) {
    // 1) if target is check Button, change color to green
    if (targetEl.classList.contains("checkBtn")) targetEl.style.color = "green";

    // 2) if target is edit Button, remove readonly attribute from list Text
    if (targetEl.classList.contains("editBtn")) {
      targetEl
        .closest(".listItem")
        .querySelector(".listText")
        .removeAttribute("readonly");
      targetEl.closest(".listItem").querySelector(".listText").select();
    }

    // 3) if target is remove Button, remove the task
    if (targetEl.classList.contains("removeBtn"))
      targetEl.closest(".listItem").remove();
  }
};
keyUpHandler = (e) => {
  targetEl = e.target;
  // check if target element exists and if the 'Enter' key is pressed
  if (targetEl && e.key === "Enter") {
    // if target is list Text , add readonly attribute
    if (targetEl.classList.contains("listText"))
      targetEl.setAttribute("readonly", true);
    // if target is input Bar , call addTask function
    if (targetEl.classList.contains("inputBar")) addTask();
  }
};

document.body.addEventListener("click", clickHandler);
document.body.addEventListener("keyup", keyUpHandler);
submitBtn.addEventListener("click", addTask);
