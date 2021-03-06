const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageCtn = document.querySelector(".messageContainer");
const messageEl = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    messageEl.textContent = "Please Fill out all fields!";
    messageEl.style.color = "red";
    messageCtn.style.borderColor = "red";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    messageEl.textContent = "Make sure passwords match!";
    messageEl.style.color = "red";
    messageCtn.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  if (isValid && passwordsMatch) {
    messageEl.textContent = "Successfully Registered!";
    messageEl.style.color = "green";
    messageCtn.style.borderColor = "green";
  }
}
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.phone.email,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}
function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) storeFormData();
}

form.addEventListener("submit", processFormData);
