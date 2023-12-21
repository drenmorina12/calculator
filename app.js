const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

let number1, number2, operator;
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

operators.forEach((op) => {
  op.addEventListener("click", () => {
    operator = op.value;
    displayText = op.value;
    displayResult();
  });
});
