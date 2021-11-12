const inputEl = document.querySelector(".inputBar");
const submitBtn = document.querySelector(".addBtn");
const itemsContainer = document.querySelector(".itemsContainer");

submitBtn.addEventListener("click", function () {
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
});

document.body.addEventListener("click", function (e) {
  const targetEl = e.target;
  if (targetEl && targetEl.classList.contains("checkBtn")) {
    targetEl.style.color = "green";
  } else if (targetEl && targetEl.classList.contains("editBtn")) {
    console.log("editabble");
    console.log(targetEl);
    console.log(targetEl.closest(".listItem").querySelector(".listText"));
    targetEl
      .closest(".listItem")
      .querySelector(".listText")
      .removeAttribute("readonly");
  } else if (targetEl && targetEl.classList.contains("removeBtn")) {
    targetEl.closest(".listItem").remove();
  }
});
