const div_data = document.getElementById('div_data');
const div_hora = document.getElementById('div_hora');
let resultado = document.getElementById('resultado');

const data = new Date()

//TRATANDO A DATA
let dia = data.getDate()
dia = dia < 10? "0"+dia : dia

//E colocoda +1 pq o javaScript comça contando o mes do 0 ao 11.
let mes = data.getMonth() + 1  
mes = mes < 10? "0"+mes : mes

const data_organizada = dia +"/"+ mes +"/"+ data.getFullYear();

div_data.innerText = data_organizada;

//Função para o relogio
function relogio() {
    const data = new Date()

    //TRATANDO A HORA
    let hora = data.getHours()
    hora = hora < 10? "0"+hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10? "0"+minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10? "0"+segundo : segundo

    const hora_oraganizada = hora +":"+ minuto +":"+segundo

    div_hora.innerText = hora_oraganizada

    //Saudação para cda hr
    if(hora > 5 && hora < 12) {
        resultado.innerText = 'Bom dia!'
    }
    else if(hora >= 12 && hora < 18) {
        resultado.innerText = 'Bom tarde!'
    }
    else if(hora >= 18 && hora <= 23) {
        resultado.innerText = 'Bom noite!'
    }
    else{
        resultado.innerText = 'Bom Madrugada!'
    }
}

const intervalo_relogio = setInterval(relogio,1000)