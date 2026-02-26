//TODO: Declaração de Função

// function falaOi (){
//     console.log ('Oi')
// }

// falaOi ();
// O correto é declarar a função e depois chamar ela, para que ela execute

//TODO: Function Expression 

// const souUmdado = function(){
//     console.log ('Sou um Dado')
// }
// // Dentro de uma variável posso declarar qualquer valor, inclusive função.
// function falaOi (){
//     console.log ('Oi')
// }

// souUmdado ();

//TODO: Arrow Function
// const nomeDafunção = () => {
//     console.log ('Sou Arrow Function')
// }
// nomeDafunção()

//TODO: Função SOMAR

// function soma (a,b){   /// a,b: são parâmetros da função. E o Java entende quando atribuisse dentro do console. Então quando declaro o FUNCTION digito um nome para a função ( o que eu coloco dentro dos parenteses são os parâmetros da função)
//     return a + b;
// }
// console.log ('Soma: ', soma(-2,3))

//TODO: Exercício 
//! CRIAR UMA FUNÇÃO PARA DIZER SE O NÚMERO É PAR OU ÍMPAR
// function ehPar (numero){
//         return numero % 2 === 0;}    
    
//   console.log (ehPar(7))

//! FUNÇÃO PARA DIZER QUAL O MAIOR NÚMERO
function maiorNumber (a,b){
    return a > b ? a : b; // "?" é ":", esses caracteres são chamados de operador ternário.
    //da mesma forma poderia ser usado "if" e "else".
}
console.log (maiorNumber (10,20))