function saber_nacionalidade() {

    let Digitado = window.document.getElementById('nacionalidade')
    let nacionalidade = String(Digitado.value)
    let resultado = window.document.getElementById('resultado')

    if(nacionalidade == 'Brasil' || nacionalidade == 'brasil') {
        resultado.innerText = 'Você e Brasileiro!'
    }
    else if(nacionalidade == "") {
        resultado.innerText = 'Por favor Digite o seu páis'
    }
    else{
        resultado.innerText = 'Você e estrangeiro!'
    }
}