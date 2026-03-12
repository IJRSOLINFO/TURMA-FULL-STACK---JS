let notas = [];

function adicionarNumero() {
  let nota = Number(document.getElementById("nota").value);

  notas.push(nota);

 document.getElementById("listaNotas").textContent += nota + " "

  document.getElementById("nota") = ""
}
  
  function calcularNota() {
  let soma = 0;

  for (let i = 0; i < notas.length; i++){
    soma += notas[i];
  }
  let media = soma / notas.length;

  document.getElementById("resultado").textContent = "média: " + media;
}


//     for (let i = 1; i < numeros.length; i++) {
//           let media = ;
//     }

// }

//   console.log(contador)
//   console.log(numeros)
