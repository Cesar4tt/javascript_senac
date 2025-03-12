const div_data = document.getElementById('div_data');
const div_hora = document.getElementById('div_hora');

let resultado = document.getElementById('resultado');
let gif = document.getElementById('imagens');

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
    if (hora > 5 && hora < 12) {
        resultado.innerText = 'Bom dia!';
        document.getElementById("fundo_video_manha").style.display = 'block';
        gif.style.backgroundImage = "url('image/acordando.webp')";
        
        div_hora.style.backgroundColor = 'rgba(0, 0, 0, 0.512)';
        div_hora.style.border = '2px solid black';
        div_hora.style.color = 'transparent';
        div_hora.style.webkitTextStroke = '2px white';
    }
    else if (hora >= 12 && hora < 18) {
        resultado.innerText = 'Boa tarde!';
        document.getElementById("fundo_video_tarde").style.display = 'block';  
        gif.style.backgroundImage = "url('image/jogando.gif')";
        
        div_hora.style.backgroundColor = 'rgba(255, 255, 255, 0.253)';
        div_hora.style.border = '2px solid black';
        div_hora.style.color = 'black';
    }
    else if (hora >= 18 && hora <= 23) {
        resultado.innerText = 'Boa noite!';
        document.getElementById("fundo_video_noite").style.display = 'block';
        gif.style.backgroundImage = "url('image/digitando.gif')";
        
        div_hora.style.backgroundColor = 'rgba(0, 0, 0, 0.57)';
        div_hora.style.border = '1px solid white';
        div_hora.style.color = 'white';
    }
    else {
        resultado.innerText = 'Boa Madrugada!';
        document.getElementById("fundo_video_madrugada").style.display = 'block';
        gif.style.backgroundImage = "url('image/dormindo.gif')";
        
        div_hora.style.backgroundColor = 'rgba(255, 255, 255, 0.253)';
        div_hora.style.border = '2px solid black';
        div_hora.style.color = 'black';
    }
    
}

const intervalo_relogio = setInterval(relogio,1000)