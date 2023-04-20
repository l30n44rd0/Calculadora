// module.exports = { sum, subtract, multiply, divide, ptnc, factorial, sqrt, isEven: numeroEImpar, isOdd: numeroEPar, isPrime, changeOperation };

import { resultPrimo, resultPar, resultImpar, previousOperationText, currentOperationText, currentOperation } from '../graphicInterface';
import { updateScreen } from './functionsDisplay';

exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ptnc = ptnc;
exports.factorial = factorial;
exports.sqrt = sqrt;
exports.numeroEImpar = numeroEImpar;
exports.numeroEPar = numeroEPar;
exports.isPrime = isPrime;
exports.changeOperation = changeOperation;

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(n) {
  if (n < 0) 
        return -1;
  else if (n == 0) 
      return 1;
  else {
      return (n * factorial(n - 1));
  }
}

function sqrt(n) {
    return Math.sqrt(n);
}

function ptnc(b, e) {
    return Math.pow(b, e);
}

function numeroEPar(num) {
  if (num % 2 !== 0) {
     console.log(`${num} é ímpar`);
     return "Não";
  } else {
     console.log(`${num} é par`);
     return "Sim";
  }
}
  
function numeroEImpar(num) {
    if(num % 2 === 0) {
        console.log(`${num} é par`);
        return "Não";
    } else{
        console.log(`${num} é ímpar`);
        return "Sim";
    }
  }

function isPrime(num) {
    if (num <= 1) {
      console.log(`${num} NÃO é primo`);
      return "Não";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(`${num} NÃO é primo`);
        return "Não";
      }
    }
    console.log(`${num} é primo`);
    return "Sim";
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