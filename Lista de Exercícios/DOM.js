// ! Dificuldade: Difícil
// Exemplo semelhante:
// Exemplo:
// function adicionar(){
// let lista = document.getElementById("lista");
// let item = document.createElement("li");
// item.innerText = "Novo item";
// lista.appendChild(item);
// }
// TODO: Questão 20: Crie um input e um botão que permita adicionar nomes em uma lista (ul) na página.

function adicionar (){
    let nome = document.getElementById('nome').value;

    let lista = document.getElementById('lista');

    let item = document.createElement('li');
    

    
    item.innerText = nome;
    
    lista.appendChild(item);
}