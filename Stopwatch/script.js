const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const milisecEl = document.querySelector(".milisec");

let timeBegan = null;
let timeStopped = null;
let pauseDuration = 0;
let startInterval = null;
let timerOn = false;

window.addEventListener("click", () => {
  if (!timerOn) {
    startTimer();
    timerOn = true;
  } else {
    stopTimer();
    timerOn = false;
  }
});
window.addEventListener("dblclick", () => {
  resetTimer();
});
startTimer = () => {
  if (timeBegan === null) timeBegan = new Date();
  if (timeStopped !== null) pauseDuration += new Date() - timeStopped;
  startInterval = setInterval(clockRunning, 10);
};
stopTimer = () => {
  timeStopped = new Date();
  clearInterval(startInterval);
};
clockRunning = () => {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - pauseDuration);
  let hours = timeElapsed.getUTCHours();
  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let miliseconds = timeElapsed.getUTCMilliseconds();
  miliseconds = Math.floor(miliseconds / 10);
  hourEl.textContent = hours < 10 ? "0" + hours : hours;
  minEl.textContent = minutes < 10 ? "0" + minutes : minutes;
  secEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  milisecEl.textContent = miliseconds < 10 ? "0" + miliseconds : miliseconds;
};
resetTimer = () => {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  pauseDuration = 0;
  hourEl.textContent =
    minEl.textContent =
    secEl.textContent =
    milisecEl.textContent =
      "00";
};
