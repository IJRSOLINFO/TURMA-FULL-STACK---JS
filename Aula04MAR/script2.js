function calcularMedia() {
  let n1 = Number(document.getElementById('nota1').value);
  let n2 = Number(document.getElementById('nota2').value);

  let media = (n1 + n2) / 2;

  if (media >= 7) {
    document.getElementById("resultado").innerText = "Aprovado " + media;
  } else {
    document.getElementById("resultado").innerText = "Reprovado " + media;
  }
}
