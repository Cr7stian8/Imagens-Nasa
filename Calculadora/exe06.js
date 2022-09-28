//DECLARANDO VARIAVEIS
let vetor = [], numElementos = 0, resultado;

function recebe(numero) {
    if (numElementos >= 3) {
        esvaziaVetor();
        limparInput();
        numElementos = 0;
    }
    document.getElementById('result').value += numero;
}

// ======================= OPERADORES ======================== //

function adicionaOperador(operador) {
    if (vetor.length == 3) {
        esvaziaVetor();
        limparInput();
        numElementos = 0;
        vetor.push(resultado)
        vetor.push(operador);
    }
    else {
        recebeInput();
        vetor.push(operador);
        limparInput();
    }
}

function igual() {
    recebeInput();
    limparInput();
    switch (vetor[1]) {
        case "+":
            resultado = contas.soma(vetor[0], vetor[2]);
            defineResultado();
            break
        case "-":
            resultado = contas.subtracao(vetor[0], vetor[2]);
            defineResultado();
            break
        case "x":
            resultado = contas.multiplicacao(vetor[0], vetor[2]);
            defineResultado();
            break
        default:
            resultado = contas.divisao(vetor[0], vetor[2]);
            defineResultado();
    }

    numElementos = numElementos + 3;
}

// ===================== OBJETO QUE ARMAZENA CONTAS ============== //

const contas = {
    soma(numero1, numero2) {
        return numero1 + numero2;
    },
    subtracao(numero1, numero2) {
        return numero1 - numero2;
    },
    multiplicacao(numero1, numero2) {
        return numero1 * numero2;
    },
    divisao(numero1, numero2) {
        return numero1 / numero2;
    }
}


//======================= fUNÇÕES FATORADAS ===================== //
function alertaVetor() {
    alert(vetor)
}
function esvaziaVetor(){
    for (i = vetor.length; i > 0; i--) {
        vetor.pop();
    }
}
function limparInput() {
    document.getElementById('result').value = "";
}
function recebeInput() {
    vetor.push(parseFloat(document.getElementById('result').value));
}
function defineResultado() {
    document.getElementById('result').value = resultado;
}