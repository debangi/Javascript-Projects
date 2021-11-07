const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#min");
const secondEl = document.querySelector("#sec");
const miliSecondEl = document.querySelector("#milisec");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let hour = 00;
let minute = 00;
let second = 00;
let miliSecond = 00;
let timerOn = false;

stopwatch = () => {
  if (timerOn) {
    miliSecond += 1;
    if (miliSecond === 1000) {
      second += 1;
      miliSecond = 0;
    }
    if (second === 60) {
      minute += 1;
      second = 0;
    }
    if (minute === 60) {
      hour += 1;
      minute = 0;
      second = 0;
    }
    hourEl.textContent = hour < 10 ? "0" + hour : hour;
    minuteEl.textContent = minute < 10 ? "0" + minute : minute;
    secondEl.textContent = second < 10 ? "0" + second : second;
    miliSecondEl.textContent = miliSecond < 10 ? "0" + miliSecond : miliSecond;
    setTimeout("stopwatch()", 1);
  }
};
start = () => {
  timerOn = true;
  stopwatch();
};
stop = () => {
  timerOn = false;
};
reset = () => {
  timerOn = false;
  hourEl.textContent =
    minuteEl.textContent =
    secondEl.textContent =
    miliSecondEl.textContent =
      "00";
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
