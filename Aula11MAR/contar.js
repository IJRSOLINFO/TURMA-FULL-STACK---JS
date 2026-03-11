//TODO: <!--Criar um cógido com inserção de números e que ao final diga a quantide de números que foi inserido-->

let numeros = [];

function adicionarNumero() {
  let numero = Number(document.getElementById("valor").value);

  numeros.push(numero);

  document.getElementById("valor").value = "";
}

function contarNumeros() {
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    contador++;
  }

  document.getElementById('resultado').textContent = contador;

    document.getElementById('res').textContent = numeros;


  console.log(contador)
  console.log(numeros)
}
