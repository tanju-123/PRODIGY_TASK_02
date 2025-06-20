let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("startPauseBtn").addEventListener("click", function () {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
    this.innerText = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    this.innerText = "Start";
  }
});

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  document.getElementById("startPauseBtn").innerText = "Start";
  isRunning = false;
}

function lap() {
  if (!isRunning) return;
  let laps = document.getElementById("laps");
  let li = document.createElement("li");
  li.innerText = display.innerText;
  laps.appendChild(li);
}
