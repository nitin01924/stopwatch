let timeDisplay = document.querySelector(".time");
let startbtn = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");
let resetbtn = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

startbtn.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(starttimer, 1000);
});
stopbtn.addEventListener("click", function () {
  clearInterval(timer);
});
resetbtn.addEventListener("click", function () {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = "00:00:00";
});

function starttimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  timeDisplay.textContent = `${h}:${m}:${s}`;
}
