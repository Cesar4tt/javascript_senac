function vericar_velicidade() {
    let velocidade = window.document.getElementById('velocidade')
    let vel = Number(velocidade.value)
    let resultado = window.document.getElementById('resultado')

    if(vel <= 0){
        resultado.innerText = 'digite um valor valido!';
    }
    else if(vel <= 20) {
        resultado.innerText = 'Velocidade permitida';
    }
    else if(vel >20 && vel <50) {
        resultado.innerText = 'Dentro do permitido'
    }
    else{
        resultado.innerText = 'Velocidade acima do permitido sera multado!'
    }
}
    