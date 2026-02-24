const prompt = require("prompt-sync")();
//nota 1 = N1  | nota 2 = N2 |
const N1 = Number(prompt("Digite a primeira nota: "));
const N2 = Number(prompt("Digite a segunda nota: "));

const media = (N1 + N2) / 2;

if (media >= 7) {
  console.log("Aprovado! Sua média é: " + media);
} else if (media >= 5 && media < 7) {
  console.log("Recuperação! Sua média é: " + media);
}
