const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Set the date input to minimum with Today's date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//Populate our countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour) - 5;
    const minutes = Math.floor((distance % hour) / minute) + 30;
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    //hide input
    inputContainer.hidden = true;
    //If countdown ended, show complete
    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      //show countdown
      countdownElTitle.textContent = `${countdownTitle}`;
      timeElements[0].textContent = `${days}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
}

// Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);

  //Check for valid date
  if (countdownDate === "") {
    alert("Please select a date for the countdown!");
  } else {
    //Get the number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log(countdownValue);
    updateDOM();
  }
}
//Reset all values
function reset() {
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  countdownTitle = "";
  countdownDate = "";
}
//Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);
