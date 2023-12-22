const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const decimal = document.querySelector(".decimal");

const MAX_LENGTH = 9;
let number1 = "";
let number2 = "";
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

    case "-":
      return sub(number1, number2);

    case "*":
      return multiply(number1, number2);

    case "/":
      return divide(number1, number2);

    default:
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

function formatResult(result) {
  stringResult = result.toString();
  if (stringResult.length > 9) {
    stringResult = parseFloat(result).toExponential(2);
  }
  return stringResult;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numberValue = number.value;
    // displayResult();

    if (operator == "") {
      if (number1.length == MAX_LENGTH) {
        return;
      }
      displayText += numberValue;
      number1 = displayText;
      console.log(`Number 1 is ${number1}`);
      console.log(operator);
    } else {
      if (number2.length == MAX_LENGTH) {
        return;
      }
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
    console.log(`This is the display text after operator: ${displayText}`);
    // displayText = op.value;
    // displayResult();
  });
});

equals.addEventListener("click", () => {
  n1 = parseFloat(number1);
  n2 = parseFloat(number2);
  let result = operate(n1, n2, operator);
  let formatedResult = formatResult(result);
  displayText = formatedResult;
  displayResult();
  console.log(typeof result);
  number1 = formatedResult;
  number2 = "";
});

clearButton.addEventListener("click", () => {
  clear();
});

percent.addEventListener("click", () => {
  if (operator == "") {
    let n1 = parseFloat(number1) / 100;
    number1 = "" + n1;
    displayText = number1;
    console.log(`Number 1 is ${number1}`);
    // console.log(operator);
  } else {
    let n2 = parseFloat(number2) / 100;
    number2 = "" + n2;
    displayText = number2;
    console.log(`Number 2 is ${number2}`);
    // console.log(operator);
  }
  displayResult();
});

decimal.addEventListener("click", () => {
  if (operator == "") {
    if (!number1.includes(decimal.value)) {
      number1 += decimal.value;
      displayText = number1;
      console.log(`Number 1 is ${number1}`);
    }
    // console.log(operator);
  } else if (!number2.includes(decimal.value)) {
    number2 += decimal.value;
    displayText = number2;
    console.log(`Number 2 is ${number2}`);
    // console.log(operator);
  }
  displayResult();
});
