const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

let countDate = new Date("Jan 1, 2022 00:00:00").getTime();
console.log(countDate);

newYear = () => {
  let now = new Date().getTime();
  let remaining = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  daysEl.textContent = Math.floor(remaining / day);
  hoursEl.textContent = Math.floor((remaining % day) / hour);
  minutesEl.textContent = Math.floor((remaining % hour) / minute);
  secondsEl.textContent = Math.floor((remaining % minute) / second);
};
setInterval(newYear, 1000);
