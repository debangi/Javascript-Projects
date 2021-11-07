const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#min");
const secondEl = document.querySelector("#sec");
const miliSecondEl = document.querySelector("#milisec");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
console.log("hi");
let hour, minute, second, miliSecond, timerOn;
init = () => {
  hour = 00;
  minute = 00;
  second = 00;
  miliSecond = 00;
  timerOn = false;
};
init();
stopwatch = () => {
  if (timerOn) {
    miliSecond += 1;
    if (miliSecond === 100) {
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
    setTimeout("stopwatch()", 10);
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
  init();
  hourEl.textContent =
    minuteEl.textContent =
    secondEl.textContent =
    miliSecondEl.textContent =
      "00";
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
