// function mudarTexto(){
//     let elemento = document.getElementById('titulo')
//     elemento.innerText = 'Olá Mundo'

//     elemento.style.color = 'blue'

// }

function verificarIdade (){
    let idade = document.getElementById('idade').value

    let mensagem = idade;

    if(idade >= 18){
        mensagem = 'Maior de Idade'
    }else {mensagem = 'Menor de Idade'
        }

    document.getElementById
    ('resultado').innerText = mensagem
}