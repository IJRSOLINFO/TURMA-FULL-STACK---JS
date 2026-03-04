function verificarParouImpar() {
  let valor = Number(document.getElementById("valor").value)
//Number nessa definição de variável servirá como seguração do código, convertendo tudo que ta dentro da definição para nuúmero.

  let mensagem = valor;
  
  if (valor == 0 || valor == ''){
    mensagem = " Digite um número diferente de 0";

document.getElementById('resultado').innerText = mensagem
  }else {
  if (valor % 2 == 0 ) {
    mensagem = 'Esse número é Par'
  } else {
    mensagem = 'Esse número é Ímpar'
  }

    document.getElementById('resultado').innerText = mensagem;
}

}