//TODO: Exercicio de associação de conhecimento, ARRAYS, DOM, FOR, JS, HTML


let nomes = ["Ana", "Douglas", "João", "fabio", "pedro", "erick"];

function mostrarNomes() {
  let lista = document.getElementById("listaNomes");
  lista.innerHTML = '';

  for (let i = 0; i < nomes.length; i++) {
    let item = document.createElement('li');
    item.innerText= nomes[i];
    // innerText: Manipula o texto
    // innerHtml: Manipula a tag HTML
    // textContent: Manipula o texto dentro do HTML
    lista.appendChild (item);//appendChild, recebe os itens da lista pai, sempre que "document.createElement('li')", 
    //criar um item, ele será colocado na lista e apresenta.

  }
}
