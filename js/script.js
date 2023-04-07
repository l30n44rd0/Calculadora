const resultPrimo = document.querySelector("#resultPrimo");
const resultPar = document.querySelector("#resultPar");
const resultImpar = document.querySelector("#resultImpar");
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

let currentOperation = "";

function addDigit(digit) {
    console.log(`digit: ${digit}`)
  if (digit === "." && currentOperation.includes(".")) {
    return;
  }
  currentOperation = digit;
  updateScreen();
}

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function sqrt(n) {
    return Math.sqrt(n);
}

export function ptnc(b, e) {
    return Math.pow(b, e);
}

export function isOdd(num) { //ver se é impar
    if(num % 2 !== 0) {
        resultPar.innerText = "Não";
        console.log(`${num} é ímpar`);
    } else {
        resultPar.innerText = "Sim";
        console.log(`${num} é par`);
    }
}
  
export function isEven(num) { //ver se é ímpar
    if(num % 2 === 0) {
        resultImpar.innerText = "Não";
        console.log(`${num} é par`);
    } else{
        resultImpar.innerText = "Sim";
        console.log(`${num} é ímpar`);
    }
  }

export function isPrime(num) {
    if (num <= 1) {
      console.log(`${num} NÃO é primo`);
      resultPrimo.innerText = "Não";
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(`${num} NÃO é primo`);
        resultPrimo.innerText = "Não";
        return false;
      }
    }
    console.log(`${num} é primo`);
    resultPrimo.innerText = "Sim";
    return true;
}
  
  
function processOperation(operation) {
  if (currentOperation === "" && operation !== "C") {
    if (previousOperationText.innerText !== "") {
      changeOperation(operation);
    }
    return;
  }

  let operationValue;
  let previous = +previousOperationText.innerText.split(" ")[0];
  let current = +currentOperationText.innerText;

  switch (operation) {
    case "+":
      operationValue = sum(previous, current);
      updateScreen(operationValue, operation, current, previous);
      break;
    case "-":
      operationValue = subtract(previous, current);
      updateScreen(operationValue, operation, current, previous);
      break;
    case "*":
      operationValue = multiply(previous, current);
      updateScreen(operationValue, operation, current, previous);
      break;
    case "/":
      operationValue = divide(previous, current);
      updateScreen(operationValue, operation, current, previous);
      break;
    case "!":
      operationValue = factorial(current);
      updateScreen(operationValue, operation, current, previous);
      break;
    case "√":
        operationValue = sqrt(current);
        updateScreen(operationValue, operation, current, previous);
        break;
    case "^":
        operationValue = ptnc(previous, current);
        updateScreen(operationValue, operation, current, previous);
        break;
    case "DEL":
      processDelOperator();
      break;
    case "CE":
      processClearCurrentOperator();
      break;
    case "C":
      processClearOperator();
      break;
    case "=":
      processEqualOperator();
      break;
    case "?":
        result = isOdd(currentOperationText.innerText);
        result = isEven(currentOperationText.innerText);
        result = isPrime(currentOperationText.innerText);
    break;
    default:
      return;
  }
}

function updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      currentOperationText.innerText += currentOperation;
    } else {
      if (previous === 0) {
        operationValue = current;
      }
      previousOperationText.innerText = `${operationValue} ${operation}`;
      currentOperationText.innerText = "";
    }
    console.log(`operationValue: ${operationValue}`);
    console.log(`operation: ${operation}`);
    console.log(`current: ${current}`);
    console.log(`previous: ${previous}`);
    console.log(`previousOperationText: ${previousOperationText.innerText}`);
    console.log(`currentOperationText: ${currentOperationText.innerText}`);
  }
  

function changeOperation(operation) {
  const mathOperations = ["*", "-", "+", "/", "!", "√", "^", "?"];

  if (!mathOperations.includes(operation)) {
    return;
  }

  previousOperationText.innerText =
    previousOperationText.innerText.slice(0, -1) + operation;

    updateScreen();
}

function processDelOperator() {
  currentOperationText.innerText = currentOperationText.innerText.slice(0, -1);
}

function processClearCurrentOperator() {
  currentOperationText.innerText = "";
  resultImpar.innerText = "";
  resultPar.innerText = "";
  resultPrimo.innerText = "";
}

function processClearOperator() {
  currentOperationText.innerText = "";
  previousOperationText.innerText = "";
  resultImpar.innerText = "";
  resultPar.innerText = "";
  resultPrimo.innerText = "";
}

function processEqualOperator() {
  let operation = previousOperationText.innerText.split(" ")[1];
  processOperation(operation);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      addDigit(value);
    } else {
      processOperation(value);
    }
}) });
