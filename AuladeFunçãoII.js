//TODO: Revisão de Função

//TODO: TIPOS DE FUNÇÃO
// Function Expression - Dentro de uma variável posso declarar qualquer valor, inclusive função.

// Arrow Function

// Função SOMAR.

//A função é utilizada para escalonar o código, melhorando o código.
//O parâmetro é uma variável dentro da função.
//O return é algo que se quer retorno dentro da FUNÇÃO

// function saudacao (nome){
//     return console.log('Olá' + nome)
// }
// saudacao ('Douglas')

// //TODO: Exemplo

// function soma (a,b){
// return a + b
// }
// let resultado = soma (4,8)

// console.log(resultado)

//TODO: Função para Verificar a Idade

// function verificarIdade (idade){
//     if (idade >= 18){
//         return 'Maior de Idade'
//     } else {'Menor de Idade'}
// }
// //console.log (verificarIdade(18)) // Aqui é passando a informação direto dentro do código
// let usuario = prompt ('Digite seu nome: ') //Aqui será solicitado uma entrada de dado pelo usuário.
// console.log (verificarIdade(usuario))

//TODO: Valendo uma Coxinha: Fazer uma função que chame outra função, que diga o dobro do valor digitado.
const prompt = require("prompt-sync")();

// function dobro (valor){
//     return valor *2;
// }

// function mostrarDobro(valor){
//     console.log ('O dobro é:' + dobro(valor))
// }

//     let usuario = (prompt("Digite um valor: "));

// mostrarDobro (usuario)
//Nesse exemplo, o java entende os parâmetros como similares, Ex.: a função mostraDobro possui uma variável chamada VALOR, no entanto quando eu chamo a função mostraDobro e digo que a variável dela é USUARIO, no java entende que agora o VALOR será igual ao USUARIO. e assim acontecerá quando uma função chamar a outra.

//TODO: Criar uma função par a Calcular o IMC (IMC=peso/altura²)

// function IMC (valor){
//     return valor = peso / (altura*altura); // para definir a potencia também podemos usar **2 os dois asteriscos significa potencia

// }
// function resultado (valor){
//     console.log('Seu IMC é: ' + IMC(valor))
// }
//     let peso = prompt("Digite seu peso: ");

//     let altura = prompt("Digite sua Altura: ");

// resultado(valor)

//! PARAMETROS SÃO VARIÁVEIS LOCAIS
function calcularImc (peso, altura){
    if (altura<=0){
        return 'Altura inválida'
    }
    let imc = peso /(altura**2)

    if(imc < 18.5){
        return ('Abaixo do peso, seu imc é:' + imc.toFixed(2))
    }else if (imc < 25){
        return ('Peso normal, seu imc é: ' + imc.toFixed(2))  
    } else { 
        return ('Acima do peso, seu imc é: ' + imc.toFixed(2))
    }
}
//! São variáveis Globais
let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua Altura: ");

console.log(calcularImc(peso, altura));
