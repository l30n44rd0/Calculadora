const resultPrimo = require("../graphicInterface");
const resultPar = require("../graphicInterface");
const resultImpar = require("../graphicInterface");
const previousOperationText = require("../graphicInterface");
const currentOperationText = require("../graphicInterface");
const currentOperation = require("../graphicInterface");

const { processOperation } = require('./functionsOperations');

function addDigit(digit) {
    console.log(`digit: ${digit}`)
  if (digit === "." && currentOperation.includes(".")) {
    return;
  }
  currentOperation = digit;
  updateScreen();
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

module.exports = { addDigit, updateScreen, processDelOperator, processClearCurrentOperator, processClearOperator, processEqualOperator }