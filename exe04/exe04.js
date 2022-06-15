/*
    Faça uma entrada que armazene valores
    em uma matriz e depois exiba uma por uma em um alert
*/
function recebe() {
    //Recebendo o texto e armazenando o dado em um vetor
    texto = document.getElementById("textoDigitado").value;
    texto = texto.split(" ");
    tamanhoVetor = texto.length;
    //Armazenando valores
    for (i = 0; i < tamanhoVetor; i++) {
        palavras = texto[i];
    }
    //Exibindo a posição
    for (i = 0; i < tamanhoVetor; i++) {
        alert("Posição " + i + " : " + texto[i])
    }
}
