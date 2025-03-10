function ver_dia() {

    let select = window.document.getElementById('select')
    let escolha = String(select.value)
    let resultado =window.document.getElementById('Resultado')

    switch(escolha) {
        case '0':
            resultado.innerText = 'Domingo'
            break
        case '1':
            resultado.innerText = 'Segunda'
            break
        case '2':
            resultado.innerText = 'Terça'
            break
        case '3':
            resultado.innerText = 'Quarta'
            break
        case '4':
            resultado.innerText = 'Quinta'
            break
        case '5':
             resultado.innerText = 'Sexta'
             break   
        case '6':
             resultado.innerText = 'Sabado'
             break  
    }
}