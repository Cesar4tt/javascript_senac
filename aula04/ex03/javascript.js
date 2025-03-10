function calcular_idade() {
    let idadeDigitada = window.document.getElementById('idade')
    let idade = Number(idadeDigitada.value)
    let resultado = window.document.getElementById('resultado')

    if(idade < 16){
        resultado.innerText = 'Você não pode votar!'
    }
    else if(idade >=16 && idade < 18 || idade >= 65){
        resultado.innerText = 'Voto Facultativo!'
    }
    else if(idade >= 18 && idade <65){
        resultado.innerText = 'Voto Obirgatório!'
    }
}