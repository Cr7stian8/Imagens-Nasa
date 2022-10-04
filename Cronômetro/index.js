//Declaração de variáveis
var segundosRodando = 0;

//Função assíncrona dos segundos
async function seconds(){
    let segundos = document.getElementById("segundos");
    for (let i = 0; i < 60; i++) {
        segundosRodando += 1;
        segundos.innerHTML = segundosRodando;
        await delay(1);
    }
}

// Função responsável por fazer esperar
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}