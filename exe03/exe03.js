
function verificarMaior() {
    numeros = document.getElementById("numeroDigitado").value;
    numeros = numeros.split(",");
    var maior = parseInt(numeros[0]);
    
    for (i = 1; i < numeros.length; i++) {
        if (parseInt(numeros[i]) > maior) {
            maior = parseInt(numeros[i]);
        }
    }
    alert("O maior número é " + maior);

}
