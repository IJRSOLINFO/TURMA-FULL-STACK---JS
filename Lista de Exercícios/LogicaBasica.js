//TODO: Questão 1: Crie um programa que receba um número e mostre o triplo desse número no console.
//Exemplo:
// let numero = 10;
// let dobro = numero * 2;
// console.log(dobro);
function calcularTriplo() {
  let number = Number(document.getElementById(n1).value);

  let triplo = number * 3;

  document.getElementById("resultado").innerText = "O triplo desse número é: " + triplo;
}

//TODO: Questão 2: Crie um programa que receba dois números e mostre a soma e o produto entre eles.

// Exemplo:
// let a = 5;
// let b = 3;
// let soma = a + b;
// console.log(soma);
function Operacoes (){
    let number1 = Number(document.getElementById(n1).value);
    let number2 = Number(document.getElementById(n2).value);

    let soma = number1 + number2;

    let prod = number1 * number2;

    document.getElementById(resultado2)
}

