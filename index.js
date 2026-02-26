console.log('Meu Segundo projeto com Node.js');
/Importando a biblioteca prompt-sync para ler dados do usuário
var prompt = require('prompt-sync')();
/recebe o valor  por meio do prompt e salva na variável nome
var nome = prompt('Digite seu nome: ');
/mostra o valor da variável nome no console
/Olá, meu nome é
console.log("Olá, meu nome é " + nome);  

/ Olá, meu nome é... Como template String {`TEXTO $nome`} - Concatenando a variável nome com o texto
console.log(`Olá, meu nome é ${nome}`);  
=========================================
//Importando a biblioteca prompt-sync para ler dados do usuário
const prompt = require('prompt-sync')();
//recebe o valor  por meio do prompt e salva na variável nome

//recebe a primeira nota por meio do prompt e salva na variável nota1
const nota1 = Number(prompt('Digite a primeira nota: '));

//recebe a segunda nota por meio do prompt e salva na variável nota2
const nota2 = Number(prompt('Digite a segunda nota: '));
//O prompt retorna os valores como string, então precisamos converter para número usando a função number()

//calcula a média das duas notas e salva na variável media
const media = (nota1 + nota2) / 2;

console.log(`A média das notas é: ${media}`);


const prompt = require('prompt-sync')();
//recebe o valor  por meio do prompt e salva na variável prompt

//recebe a primeira nota por meio do prompt e salva na variável nota1
const nota1 = Number(prompt('Digite a primeira nota: '));

//recebe a segunda nota por meio do prompt e salva na variável nota2
const nota2 = Number(prompt('Digite a segunda nota: '));
//O prompt retorna os valores como string, então precisamos converter para número usando a função number()

//calcula a média das duas notas e salva na variável media
const media = (nota1 + nota2) / 2;

console.log(`A média do aluno é: (${nota1} + ${nota2}) / 2 = ${media}`);

const prompt = require('prompt-sync')();
//recebe o valor  por meio do prompt e salva na variável nome

//transformar a temperatura de Celsius para Fahrenheit:
let C = Number(prompt('Digite a temperatura em Celsius: '));
let F = (C* 9/5) + 32;

console.log(`A temperatura de ${C}°C é equivalente a ${F}°F`);