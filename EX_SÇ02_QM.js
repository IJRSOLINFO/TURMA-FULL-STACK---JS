//TODO SEÇÃO 2 - QUESTÕES MÉDIAS
// 7. Peça para o usuário digitar seu nome (prompt) e mostre em letras maiúsculas usando
// .toUpperCase().
const prompt = require("prompt-sync")();// A biblioteca sempre se declara no topo e uma única vez, para todo o código.

let nome = prompt("Digite seu nome: ");
console.log (`Olá, ${nome.toUpperCase()}!`);

// 8. Crie um programa que verifique se um número é par ou ímpar.
let n3 = (prompt("Digite um número: "));

if (n3 /2){
    console.log ("Número é Par");
}else {"Número Ímpar"}

// 9. Dada a string 'Programacao', mostre apenas os 5 primeiros caracteres usando .substring().
let texto = 'Programação'
console.log (texto.substring(0, 5))

// 10. Compare dois números e mostre qual é o maior ou se são iguais.
let x = Number(prompt('Digite um número: '));
let y = Number(prompt('Digite um número: '));

if (x > y){
    console.log (x)
}else if (y > x){
    console.log (y)
}else {
    console.log ('Os numeros são iguais')
}
// 11. Verifique se uma string contém a palavra 'js' usando .includes().
let texto1 = ('Estou aprendendo javascript js');


// 12. Crie um programa que verifique se a idade digitada é maior ou menor de idade.
// 13. Crie uma condição que verifique se um número está entre 10 e 20.