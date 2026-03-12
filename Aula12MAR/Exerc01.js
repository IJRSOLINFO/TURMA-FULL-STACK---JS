
function gerarTabuada(){

    let numero = Number(document.getElementById('numeroTabuada').value);

    let lista = document.getElementById ("tabuada");

    lista.innerHTML = "";
    
    for (let i = 1; i <= 10; i++ ){
        let resultado = numero * i;

        let item = document.createElement('li');

        item.textContent = numero + "x" + i + '=' + resultado;

        lista.appendChild(item)

    }
       
}      