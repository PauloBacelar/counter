// Global variables
const decreaseButton = document.querySelector("button#decrease");
const resetButton = document.querySelector("button#reset");
const increaseButton = document.querySelector("button#increase");
const counterTxt = document.querySelector("h2#counter");
let counter = 0;

// Functions
function decreaseValue(counter) {
  return counter - 1;
}

function increaseValue(counter) {
  return counter + 1;
}

function changeCounterColor(counter) {
  if (counter < 0) {
    counterTxt.style.color = "red";
  } else if (counter > 0) {
    counterTxt.style.color = "#008000";
  } else {
    counterTxt.style.color = "#102a42";
  }
}

function changeCounterTxt(counter) {
  counterTxt.textContent = counter;
}

// Main function
decreaseButton.addEventListener("click", () => {
  counter = decreaseValue(counter);
  changeCounterColor(counter);
  changeCounterTxt(counter);
});

increaseButton.addEventListener("click", () => {
  counter = increaseValue(counter);
  changeCounterColor(counter);
  changeCounterTxt(counter);
});

resetButton.addEventListener("click", () => {
  counter = 0;
  changeCounterColor(counter);
  changeCounterTxt(counter);
});
