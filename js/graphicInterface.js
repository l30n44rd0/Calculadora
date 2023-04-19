const { addDigit, processOperation } = require ('./functions/functionsDisplay.js');

if (typeof window !== "undefined") {
  
  const resultPrimo = document.querySelector("#resultPrimo");
  const resultPar = document.querySelector("#resultPar");
  const resultImpar = document.querySelector("#resultImpar");
  const previousOperationText = document.querySelector("#previous-operation");
  const currentOperationText = document.querySelector("#current-operation");
  const buttons = document.querySelectorAll("#buttons-container button");
  let currentOperation = "";
  
  buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
    
        if (+value >= 0 || value === ".") {
          addDigit(value);
        } else {
          processOperation(value);
        }
    }) });
  
  exports.resultPrimo = resultPrimo;
  exports.resultPar = resultPar;
  exports.resultImpar = resultImpar;
  exports.previousOperationText = previousOperationText;
  exports.currentOperationText = currentOperationText;
  exports.currentOperation = currentOperation;
}

