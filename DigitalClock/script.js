const dateEl = document.querySelector("#date");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");
const ampmEl = document.querySelector("#amPm");

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let dateOfMonth, monthNum, year, date, dayNumber, hour, minute, ampm, second;

calculateTime = () => {
  date = new Date();
  dateOfMonth = date.getDate();
  monthNum = date.getMonth();
  year = date.getFullYear();
  console.log(date);
  dayNumber = date.getDay();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  ampm = hour >= 12 ? "PM" : "AM";

  dateOfMonth = dateOfMonth < 10 ? "0" + dateOfMonth : dateOfMonth;
  monthNum = monthNum < 10 ? "0" + monthNum : monthNum;
  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  dateEl.textContent = dateOfMonth;
  monthEl.textContent = monthNames[monthNum];
  yearEl.textContent = year;
  dayEl.textContent = dayNames[dayNumber];
  hourEl.textContent = hour;
  minuteEl.textContent = minute;
  secondEl.textContent = second;
  ampmEl.textContent = ampm;

  setTimeout(calculateTime, 1000);
};
calculateTime();
