const bodyEl = document.querySelector("body");
const showColor = document.querySelector(".code");
const copyBtn = document.querySelector(".copy");
const buttonEl = document.querySelector(".clickMe");

function generateRandomInt() {
  return Math.floor(Math.random() * 255) + 1;
}
function getRandomColor() {
  let redC = generateRandomInt();
  let greenC = generateRandomInt();
  let blueC = generateRandomInt();

  return `rgb(${redC}, ${greenC}, ${blueC})`;
}
buttonEl.addEventListener("click", function () {
  let color1 = getRandomColor();
  let color2 = getRandomColor();
  bodyEl.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  buttonEl.style.backgroundColor = `rgba(0,0,0,.6)`;
  buttonEl.style.color = "#fff";
  showColor.value = `background-image:linear-gradient(to right, ${color1}, ${color2});`;
  copyBtn.textContent = "Copy";
});
copyBtn.addEventListener("click", function () {
  showColor.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied";
});
