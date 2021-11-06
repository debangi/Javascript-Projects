const screenEl = document.querySelector(".screen");
const clearEl = document.querySelector(".clear");
const keysEls = document.querySelectorAll(".key");
let lastFunc = false;

keysEls.forEach((key) => {
  // 1) clear key is clicked
  if (key.classList.contains("clear")) {
    key.addEventListener("click", function () {
      screenEl.value = "";
    });
  }
  // 2) equal key is clicked
  else if (key.classList.contains("equals")) {
    key.addEventListener("click", function () {
      // if there's no value to be evaluated return
      if (screenEl.value === "") return;
      // else evaluate
      let val = screenEl.value;
      screenEl.value = eval(val);
    });
  }
  // 3) func or digit key is clicked
  else {
    key.addEventListener("click", function () {
      // first input is a function
      if (screenEl.value === "" && key.classList.contains("func")) return;
      else if (key.classList.contains("func")) {
        // if the previous input is a function, return
        if (lastFunc === true) return;
        // else change the value
        screenEl.value += key.textContent;
        lastFunc = true;
      } else {
        // the input is a digit
        lastFunc = false;
        screenEl.value += key.textContent;
      }
    });
  }
});
