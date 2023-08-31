// Change color button ############################

// Variables decleration
const changeBackgroundColorBtn = document.getElementById(
  "changeBackgroundColorBtn"
);
// Event Listeners
changeBackgroundColorBtn.addEventListener("click", changeBackColor);

let colorIndex = 0;
function changeBackColor() {
  const colorsArray = [
    "backgroundLightblue",
    "backgroundPink",
    "backgroundRed",
  ];

  if (colorIndex < colorsArray.length - 1) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }

  console.log(colorsArray[colorIndex]);
  document.body.className = colorsArray[colorIndex];
}

// Timer ############################################

// Variable declerations
const timerBtn = document.getElementById("timerBtn");
const resetBtn = document.getElementById("resetBtn");
const timerNum = document.getElementById("timerNum");
const inputNumber = document.getElementById("inputNumber");

// Event Listeners
timerBtn.addEventListener("click", timer);
resetBtn.addEventListener("click", resetTimer);

// Timer function
function timer() {
  let i = 0;
  const targetNumber = parseInt(inputNumber.value);

  function updateNumber() {
    timerNum.textContent = i;
    i++;

    if (i < targetNumber + 1) {
      setTimeout(updateNumber, 1000);
      timerNum.style.color = "red";
    } else {
      timerNum.style.color = "green";
    }
  }
  updateNumber();
}

// Reset timer function
function resetTimer() {
  timerNum.textContent = 0;
  timerNum.style.color = "black";
}