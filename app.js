const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let number1 = "";
let = number2 = "";
let operator = "";
let displayText = "";

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(a, b) {
  return a / b;
}

function operate(number1, number2, operator) {
  switch (operator) {
    case "+":
      return add(number1, number2);
      break;
    case "-":
      return sub(number1, number2);
      break;
    case "*":
      return multiply(number1, number2);
      break;
    case "/":
      return divide(number1, number2);
      break;
    default:
      break;
  }
}

function displayResult() {
  display.textContent = displayText;
}

function clear() {
  displayText = "0";
  displayResult();
  displayText = "";
  number1 = "";
  number2 = "";
  operator = "";
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numberValue = number.value;
    displayResult();
    if (operator == "") {
      displayText += numberValue;
      number1 = displayText;
      console.log(`Number 1 is ${number1}`);
      console.log(operator);
    } else {
      displayText += numberValue;
      number2 = displayText;
      console.log(`Number 2 is ${number2}`);
      console.log(operator);
    }
    displayResult();
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (number1 != "") {
      operator = op.value;
    }
    displayText = "";
    console.log(`This is the diaplay text after operator: ${displayText}`);
    // displayText = op.value;
    // displayResult();
  });
});

equals.addEventListener("click", () => {
  n1 = parseInt(number1);
  n2 = parseInt(number2);
  let result = operate(n1, n2, operator);
  console.log(n1);
  console.log(typeof n1);
  console.log(n2);
  console.log(typeof n2);
  displayText = result;
  displayResult();
});

clearButton.addEventListener("click", () => {
  clear();
});
