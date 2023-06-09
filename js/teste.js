const { sum, subtract, multiply, divide, ptnc, factorial, sqrt, isEven: numeroEImpar, isOdd: numeroEPar, isPrime } = require ('./functionsOperations.js');
var assert = require('assert');

//testando a soma
assert(sum(6,7) == 13, "a soma de 6+7 é igual a 13");
assert(sum(8,0) == 8, "a soma de 8+0 é igual a 8");
assert(sum(400,600) == 1000, "a soma de 400+600 é igual a 1000");
// assert(sum(0,-3) == -3, "a soma de 0+(-3) é igual a -3");
assert(sum(0,0) == 0, "a soma de 0+0 é igual a 0");
assert(sum(2,3) == 5, "a soma de 2+3 é igual a 5");
assert(sum(1.5,1) == 2.5, "a soma de 1.5+1 é igual a 2.5");
// assert(sum(5,-5) == 0, "a soma de 5+(-5) é igual a 0");

//testando a subtração
assert(subtract(5,3) == 2, "a subtração de 5-3 é igual a 2");
// assert(subtract(0,-4) == 4, "a subtração de 0-(-4) é igual a 4");
assert(subtract(0.5,1.5) == -1, "a subtração de 0.5-1.5 é igual a -1");
// assert(subtract(-5,5) == -10, "a subtração de -5-5 é igual a -10");

//testando a multplicação
assert(multiply(2, 5) == 10, "a multiplicação de 2 x 5 é 10");
assert(multiply(0, 9) == 0, "qualquer número multplicado por 0 é 0");
assert(multiply(1.5, 2) == 3, "a multiplicação de 1.5 x 2 é 3");
// assert(multiply(-2, 5) == -10, "a multiplicação de -2 x 5 é -10");

//testando a divisão
assert(divide(10,5) == 2, "a divisão de 10/5 é igual a 2");
assert(divide(0, 9) == 0, "qualquer número dividido por 0 é 0");
assert(divide(1.5, 1.5) == 1, "a divisão de 1.5/1.5 é igual a 1");
assert(divide(-10, 5) == -2, "a divisão de -10/5 é igual a -2");

//testando a expotenciação
assert(ptnc(2, 3) == 8, "2 elevado a 3 é igual a 8");
assert(ptnc(9, 0) == 1, "qualquer número elevado a 0 dá 1");
assert(ptnc(1.5, 1) == 1.5, "1.5 elevado a 1 é igual a 1.5 (ele mesmo)");
assert(ptnc(2, 4) == 16, "2 elevado a 4 é igual a 16");

//testando o fatorial
assert(factorial(5) == 120, "o fatorial de 5 é 120");
assert(factorial(0) == 1, "o fatorial de 0 é igual a 1");
assert(factorial(1) == 1, "o fatorial de 1 é igual a 1");
// assert(factorial(-5) == -120, "o fatorial de -5 é igual a -120");

//testando a raiz quadrada
assert(sqrt(4) == 2, "a raiz quadrada de 4 é 2");
assert(sqrt(0) == 0, "a raiz quadrada de 0 é 0");
// assert(sqrt(-4) == "Inválido", "a raiz quadrada de -4 é inválido, pois não exibe raiz quadrada de números negativos");
assert(sqrt(2.25) == 1.5, "a raiz quadrada de 2.25 é 1.5");

// //testando se é ímpar
assert(numeroEPar(5) == "Não", "o número 5 não é par");
assert(numeroEPar(8) == "Sim", "o número 8 é ar");
assert(numeroEPar(-15) == "Não", "o número 15 não é par");
assert(numeroEPar(-2) == "Sim", "o número -2 é par");
assert(numeroEPar(0) == "Sim", "o número 0 é par");
assert(numeroEPar(1) == "Não", "o número 1 não é par");

// //testando se é par
assert(numeroEImpar(4) == "Não", "o número 4 não é ímpar");
assert(numeroEImpar(7) == "Sim", "o número 7 é ímpar");
assert(numeroEImpar(-10) == "Não", "o número -10 não é ímpar");
assert(numeroEImpar(-3) == "Sim", "o número -3 não é ímpar");
assert(numeroEImpar(0) == "Não", "o número 0 não é ímpar");
assert(numeroEImpar(1) == "Sim", "o número 1 é ímpar");

// //testando se é um número primo
assert(isPrime(7) == "Sim", "o número 7 é primo");
assert(isPrime(15) == "Não", "o número 15 não é primo");
assert(isPrime(-7) == "Não", "o número -7 não é primo");
assert(isPrime(0) == "Não", "o número 0 não é primo");
assert(isPrime(1) == "Não", "o número 1 não é primo");


