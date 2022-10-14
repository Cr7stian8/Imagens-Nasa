//Declaração de variáveis
var segundosRodando = 0;
var minutosRodando = 0;

function iniciar(){
    seconds();
}

//Função assíncrona dos segundos
async function seconds(){
    let x = 0;
    while(x == 0){
    let segundos = document.getElementById("segundos");
    for (let i = 0; i < 60; i++) {
        segundos.innerHTML = segundosRodando;
        await delay(1);
        segundosRodando += 1;
    }
    if (segundosRodando == 60){
        let minutos = document.getElementById("minutos")
        minutosRodando += 1;
        minutos.innerHTML = minutosRodando;
    }}
}

// Função responsável por fazer esperar
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}