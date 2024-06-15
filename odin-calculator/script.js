// default values

let operator = "";
let previousValue = "";
let currentValue = "";

// html dom into javascript

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const currentScreen = document.querySelector(".bottomrow");
const previousScreen = document.querySelector(".toprow");
const equalNumber = document.querySelector(".equal");

// display number when one is clicked to current screen

numberButton.forEach((numberClick) =>
  numberClick.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

// display operator to previous screen along with previous value

operatorButton.forEach((operatorClick) =>
  operatorClick.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

// number function, if current value is <=5 add a number digit

function handleNumber(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

// operator function

function handleOperator(operatorClick) {
  operator = operatorClick;
  previousValue = currentValue;
  currentValue = "";
}

// clear button, makes operator and values blank followed by the screens blank

clearButton.addEventListener("click", () => {
  operator = "";
  previousValue = "";
  currentValue = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

// delete button, removes one digit from current screen and stores it as current value

deleteButton.addEventListener("click", function deleteNumber() {
  currentScreen.textContent = currentScreen.textContent.slice(0, -1);
  currentValue = currentScreen.textContent;
});

// equal button, doesn't do anything if current value and previous screen are blank. runs operate and round number functions

equalNumber.addEventListener("click", function () {
  if (currentValue != "" && previousScreen != "") {
    previousScreen.textContent =
      previousValue + " " + operator + " " + currentValue + " " + "=";
    operate();
    roundNumber();
  }
});

// operate function, changes values from strings to numbers, then +-x/ previous value by current value

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }
  currentScreen.textContent = roundNumber(previousValue);
}

// rounds previous value to 3 decimal places

function roundNumber(previousValue) {
  return Math.round(previousValue * 1000) / 1000;
}
