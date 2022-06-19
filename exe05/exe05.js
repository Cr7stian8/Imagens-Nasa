//Recebendo o valor do primeiro botão
function recebe(){
    numero1 = document.getElementById("textoDigitado").value;
}
//recebendo o valor do segundo botão
function recebe2(){
    numero2 = document.getElementById("textoDigitado2").value;
}
//Somando os dois valores
function somar(){
    //Passando os valores adicionados para inteiro
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    //Realizando a soma dos números
    var soma = numero1+numero2;
    //Escrevendo o valor da soma 


    if(isNaN(soma) == true){
        document.write("O valor da soma é: "+soma+"<br><br>");
        document.write("Se o valor da soma for 'NaN' "+" Você não digitou um número <br>");
        document.write("<br>Por favor, colabore com o programador ...");
    }else{
        document.write("O valor da soma é: "+soma);
    }
} 