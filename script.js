

function respostas(status){

    let respostas = document.getElementById("respostas")

    if (status =='correta'){
        respostas.textContent = "Você acertou!"
        alert("Sim, você acertou!")
        document.body.style.backgroundColor = "green"
    } else{
        respostas.textContent = "Você errou!"
        alert("Você errou, descubra mais informações.")
        document.body.style.backgroundColor = "red"
    }
}
