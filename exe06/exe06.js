function recebe(){
    // let vetor = [];
    // zero=0;
    // vetor[0] = zero;
    

    for(i=0; i < 10; i++){
        vetor[i]=parseInt(document.getElementById(vetor[i]).value);
        alert(vetor[i])
    }

    // um = document.getElementById("1");
    // dois = document.getElementById("2");
    // tres = document.getElementById("3");
    // quatro = document.getElementById("4");
    // cinco = document.getElementById("5");
    // seis = document.getElementById("6");
    // sete = document.getElementById("7");
    // oito = document.getElementById("8");
    // nove = document.getElementById("9");
}


function soma(){
    resultadoSoma=0;
    for(i=0; i < vetor.lenght; i++){
        resultadoSoma = resultadoSoma + vetor[i];
    }
}

document.getElementById("demo").innerHTML = vetor[0];