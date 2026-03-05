//TODO: ARRAYS = Vetores
//O termo em javascript, o termo usado é ARRAYS
// !Exemplo: Let Alunos = ['José','Antonio', 'João']  | isso é usado em uma variável que possui varias informações

//TODO: Trabalhando com ARRAYS

//let  alunos = ['Francisco', 'Max','Mikael','Vinicius']
//console.log(alunos)
//console.log(alunos[5]) o 5 é numero do índice do arrays. o índice já é setado pela linguagem. A contagem do índice começa a partir do 0. (0,1,2,3,4,5,6...)
// console.log(typeof(alunos))
//Arrays é do tipo OBJETO
// [Running] node "c:\Users\a96198794\Desktop\Meu App 1\Aula05MAR\arrays.js"
//! object

//! let alunos = ["Francisco", "Max", "Mikael", "Vinicius"];
//? console.log(alunos.length); //Retorna a quantidade de arrays
//* console.log(alunos.indexOf("Max")) //Retorna o índice

// alunos.push('Leandro') //! adiciona o dado no final da lista
// console.log(alunos)
// console.log(alunos.length)

// let alunos = [
//     "Francisco",
//     "Max",
//     "Mikael",
//     "Vinicius"
// ];

// alunos.push('Leandro') //? adiciona o dado no final da lista

// alunos.unshift('Erick') //? adiciona o dado no início da lista

// console.log(alunos)
// alunos.pop() // ? Remove o ultimo elemento da lista
// console.log(alunos)
// alunos.shift() //? Remove o primeiro elemento da lista

// let alunos = [
//     "Francisco",
//     "Max",
//     "Mikael",
//     "Vinicius"
// ];

// if(alunos.length > 5){
//     console.log('Turma Grande')
// }else {
//     console.log('Turma Pequena')
// }

// let notas = [10,5,6,7,3]
// if (notas[0] >= 7){
//         console.log('Aprovado')
//     }else {
//         console.log('Reprovado')
//     }
// //TODO: Condicional para mostrar um elemento da lista.

// function mostrarPrimeiroAluno (lista){
//     console.log(lista[0])
// }

// let alunos = [
//     "Francisco",
//     "Max",
//     "Mikael",
//     "Vinicius"
// ];
// mostrarPrimeiroAluno(alunos)
//TODO: Arrays vazio para que o usuário adicione as informações

// let alunos = []

// function adicionarAluno(){
//     let nome = document.getElementById('aluno').value

//     alunos.push(nome)

//     document.getElementById('lista').innerText = alunos
// }
// document.getElementById("aluno").addEventListener("keypress", function(event){

//     if(event.key === "Enter"){
//         adicionarAluno()
//     }

// })

//TODO: Ex.: Criar um código para mostrar a média do aluno, inserindo 3 notas no sistema.

function calcularMedia() {
  let n1 = Number(document.getElementById("nota1").value);
  //   notas.push(n1);
  let n2 = Number(document.getElementById("nota2").value);
  //   notas.push(nota2);
  let n3 = Number(document.getElementById("nota3").value);
  //   notas.push(n3);

  let notas = [n1, n2, n3]; // Estudar

  let media = (notas[0] + notas[1] + notas[2]) / 3;
  let mensagem ;

  if (media >= 7) {
    mensagem = 'Aprovado'
    }else if (media >3 && media <=6.9){
         mensagem = 'Recuperação'
        }else
            mensagem = 'Reprovado'
    
    //Nessa conta está sendo usado o cocheto para pegar a informação dentro do ARRAYS notas.
  document.getElementById("resultado").innerText =
    "A média do Aluno é: " + media.toFixed(2) + mensagem;
   
    
  }

