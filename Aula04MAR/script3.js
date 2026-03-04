function calcularImc() {

  let peso = Number(document.getElementById("peso").value);
  let alt = Number(document.getElementById("alt").value);

  if (alt <= 0) {
    document.getElementById("resultado").innerText = "Altura inválida";
  }

  let imc = peso / (alt ** 2);

  if (imc < 18.5) {
    document.getElementById('resultado').innerText = "Abaixo do peso, seu imc é: " + imc.toFixed(2);
  } else if (imc < 25) {
        document.getElementById('resultado').innerText = "Peso Ideal, seu imc é: " + imc.toFixed(2);
      } else {
     document.getElementById('resultado').innerText = "Acima do peso, seu imc é: " + imc.toFixed(2);

  }
}
