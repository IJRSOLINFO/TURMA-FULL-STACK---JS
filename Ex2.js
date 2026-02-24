//TODO Exercício 2 - transformar a temperatura de Kelvin para Celsius

//Se a temperatura convertida for maior que 30°C,
//o sistema deve responder: Está muito Calor!
//Se não: Tá Frio!

const prompt = require("prompt-sync")();
//temperatura em Kelvin = K | temperatura em Celsius = C |
const K = Number (prompt ("Digite a temperatura em Kelvin: "));

const C = K - 273;

if (C > 30) {
  console.log("Está muito Calor! A temperatura em Celsius é: " + C);
} else {
  console.log("Tá Frio! A temperatura em Celsius é: " + C);
}   
