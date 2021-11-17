const keyNameEl = document.querySelector(".keyName");
const codeNameEl = document.querySelector(".codeName");
document.addEventListener("keyup", function (e) {
  console.log(e);
  keyNameEl.textContent = e.key;
  codeNameEl.textContent = e.code;
});
