const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageCtn = document.querySelector(".messageContainer");
const messageEl = document.getElementById("message");

let isValid = false;

function validateForm() {
  isValid = form.checkValidity();
  messageEl.textContent = "Please Fill out all fields!";
  messageEl.style.color = "red";
  messageCtn.style.borderColor = "red";
}
function processFormData(e) {
  e.preventDefault();
  validateForm();
}

form.addEventListener("submit", processFormData);
