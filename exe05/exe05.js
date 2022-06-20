
//Recebendo o valor do primeiro botão
function recebe(){
    //Recebendo valor 
    numero1 = document.getElementById("textoDigitado").value;

    //Verificando se o valor digitado é um número
    if(isNaN(numero1) == false ){
        alert("Primeiro valor adicionado");
    }else{
        alert("O valor digitado não é um número");
    }

}

function recebe2(){

    //recebendo o valor do segundo botão
    numero2 = document.getElementById("textoDigitado2").value;

    //Verificando se o valor digitado é um número
    if(isNaN(numero2) == false ){
        alert("Segundo valor adicionado");
    }else{
        alert("O valor digitado não é um número");
    }

}

//Somando os dois valores
function somar(){

    //Passando os valores adicionados para inteiro
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    //Realizando a soma dos números
    var soma = numero1+numero2;

    // Verificando se o valor digitado é um número ou string
    if(isNaN(soma) == true){
        //O que fazer caso seja uma String
        document.write("O valor da soma é: "+soma+"<br><br>");
        document.write("Se o valor da soma for 'NaN' "+" Você não digitou um número <br>");
        document.write("<br>Por favor, colabore com o programador ...");
    }else{
        alert("O valor da soma é: "+soma)
    }
} 