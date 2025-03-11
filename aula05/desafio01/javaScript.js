    let quantidade = parseInt(prompt("Quantos dados você deseja inserir?"));
    
    // Inicializa o array que vai armazenar os dados
    let dados = [];
    
    // Loop para coletar os dados digitados pelo usuário
    for (let i = 0; i < quantidade; i++) {
        let dado = parseInt(prompt(`Digite o dado ${i + 1}:`));
        dados.push(dado);  // Adiciona o dado no array
    }
    
    // Adiciona o número 10 no final do array
    dados.push(10);
    
    // Ordena o array em ordem crescente
    dados.sort((a, b) => a - b); // decresente: b - a
    
    // Exibe o array ordenado
    alert("Dados ordenados: " + dados.join(", "));//O método join() é usado para juntar os elementos de um array em uma única string, separando-os por um valor especificado, que pode ser uma vírgula, espaço, ou qualquer outro caractere.
    
    // Exibe a quantidade de dados inseridos pelo usuário (antes de adicionar o 10)
    alert("Você digitou " + quantidade + " números.");
    
    // encontrar o índice do número 10 no array
    let indiceDeDez = dados.indexOf(10);
    
    // Exibe o índice do número 10 no array
    alert("O número 10 está no índice: " + indiceDeDez);