const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let interval;
const defaultTimerElValue = "hh:mm:ss - enter number of seconds";
timerEl.textContent = defaultTimerElValue;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const parseStr = (number) => (number <= 9 ? `0${number}` : `${number}`);

const createTimerAnimator = () => {
  return (seconds) =>
    setInterval(() => {
      const hrs = parseStr(Math.floor(seconds / 3600));
      const min = parseStr(Math.floor((seconds - hrs * 3600) / 60));
      const sec = parseStr(seconds % 60);

      timerEl.textContent = `${hrs}:${min}:${sec} - timer started`;
      seconds--;

      if (seconds < 0) {
        clearInterval(interval);
        timerEl.textContent = `${hrs}:${min}:${sec} - timer stopped`;
      }
    }, 999);
};

const animateTimer = createTimerAnimator();

inputEl.removeEventListener("input", onChangeInput);
inputEl.addEventListener("input", onChangeInput);
function onChangeInput() {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, "");
}

buttonEl.removeEventListener("click", startTimer);
buttonEl.addEventListener("click", startTimer);
function startTimer() {
  clearInterval(interval);
  const seconds = Number(inputEl.value);

  seconds !== 0
    ? (interval = animateTimer(seconds))
    : (timerEl.textContent = defaultTimerElValue);

  inputEl.value = "";
}
