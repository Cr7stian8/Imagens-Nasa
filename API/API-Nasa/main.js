function principal() {
    //Api que está sendo consumida
    var url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu";

    //Recebendo valor dos input
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var data ="&date="+ano+"-"+mes+"-"+dia;
    let urlAPI = url + data;

    //Passando dados para JSON para facilitar a manipulação
    dados = get(urlAPI);
    dadosJson = JSON.parse(dados);

    AdicionaTitulo()
    AdicionaImagem()
    AdicionaData()
}
function teste(){
    // ESSE TESTE CONSISTE EM TENTAR DEIXAR SÓ O ULTIMO GET NA TELA
    document.getElementById("div").remove();
    let novaDiv = document.createElement("div");
    novaDiv.id("div");
}

// MÉTODOS HTTP
function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}
// FUNÇÕES FATORADAS
function AdicionaData(){
    var data = document.createElement("p")
    data.innerHTML = dadosJson.date;
    document.getElementById("div").appendChild(data)
}
function AdicionaImagem(){
    var imagem = document.createElement("img");
    imagem.src = dadosJson.hdurl;
    document.getElementById("div").appendChild(imagem);
}
function AdicionaTitulo(){
    var titulo = document.createElement("h2");
    titulo.innerHTML = dadosJson.title;
    document.getElementById("div").appendChild(titulo);
}