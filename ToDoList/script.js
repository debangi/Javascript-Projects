const inputEl = document.querySelector(".inputBar");
const submitBtn = document.querySelector(".addBtn");
const itemsContainer = document.querySelector(".itemsContainer");
const textEl = document.querySelector(".listText");
const checkBtn = document.querySelector(".checkBtn");
const editBtn = document.querySelector(".editBtn");
const removeBtn = document.querySelector(".removeBtn");

// submitBtn.addEventListener("click", function () {
//   let task = inputEl.value;
//   let markup = `<li class="listItem">
//   <div class="listText">${task}</div>
//   <div class="iconsContainer">
//   <button class="btn checkBtn">
//   <ion-icon name="checkmark-circle"></ion-icon>
// </button>
// <button class="btn removeBtn">
//   <ion-icon name="close-circle-sharp"></ion-icon>
// </button>
//   </div>
// </li>`;
//   //   itemsContainer.innerHTML();
//   //   console.log(task);
//   itemsContainer.insertAdjacentHTML("beforeend", markup);
// });
// if (removeBtn) {
//   removeBtn.addEventListener("click", function () {
//     // this.closest(".listItem").remove();
//     console.log("removed");
//   });
// }
