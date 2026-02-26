//TODO SEÇÃO 1 - QUESTÕES FÁCEIS

// 1. Declare uma variável com seu nome e exiba no console usando console.log().
const prompt = require("prompt-sync")();// A biblioteca sempre se declara no topo e uma única vez, para todo o código.

let nome = (prompt("Digite seu nome: "));
console.log (`Olá, ${nome}!`);

// 2. Crie duas variáveis numéricas e mostre a soma entre elas.
let num1 = Number(prompt("Digite o 1º número: "));
let num2 = Number(prompt("Digite o 2º número: "));

let S = (num1 + num2);  
///console.log ((`A soma das Variáveis é igual a `+ S)); Tbm funciona!
console.log ((`A soma das Variáveis é igual a: ${S}`)); // Modelo Atualizado

// 3. Use if para verificar se um número é maior que 10.
if (S > 10) {
    console.log (`O valor ${S} é maior que 10!`);
} 
else { console.log (`O valor ${S}  é menor que 10` );}

// 4. Crie uma string 'JavaScript' e mostre o tamanho usando .length.
let linguagem = "JavaScript";
console.log (`A palavra JavaScript Possui ${linguagem.length} letras!`);

// 5. Verifique se uma variável é igual a 'admin' usando if e else.
let usuário = (prompt("Digite seu nome: "));

if (usuário === "admin") {
    console.log ("Bem-vindo, admin!");
} else {
    console.log ("Acesso negado. Usuário não é admin.");
}   

// 6. Verifique se um número é positivo ou negativo usando if e else
let N = Number(prompt("Digite um número: "));

if (N >= 0) {
    console.log ("Número Positivo");
} else {
    console.log ("Número Negativo");
}   
