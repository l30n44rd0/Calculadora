import resultPrimo from "../graphicInterface";
import resultPar from "../graphicInterface";
import resultImpar from "../graphicInterface";
import previousOperationText from "../graphicInterface";
import currentOperationText from "../graphicInterface";
import currentOperation from "../graphicInterface";

// module.exports = { addDigit, processOperation, updateScreen, processDelOperator, processClearCurrentOperator, processClearOperator, processEqualOperator }
exports.addDigit = addDigit;
exports.processOperation = processOperation;
exports.updateScreen = updateScreen;
exports.processDelOperator = processDelOperator;
exports.processClearCurrentOperator = processClearCurrentOperator;
exports.processClearOperator = processClearOperator;
exports.processEqualOperator = processEqualOperator;

function addDigit(digit) {
  console.log(`digit: ${digit}`)
  if (digit === "." && currentOperation.includes(".")) {
    return;
  }
  currentOperation = digit;
  updateScreen();
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
    case "C": updateScreen, processOperation 
      processClearOperator();
      break;
    case "=":
      processEqualOperator();
      break;
    case "?":
        result = numeroEPar(currentOperationText.innerText);
        result = numeroEImpar(currentOperationText.innerText);
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
