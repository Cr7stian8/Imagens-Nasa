function main(){
    var url = "https://api.github.com/search/repositories?q=";
    var nomeBuscado = document.getElementById("input").value;
    let urlApi = url + nomeBuscado;

    let dados = get(urlApi);
    dadosJson = JSON.parse(dados);
    document.getElementById("resultado").innerHTML(dadosJson);
}
// get
function get(urlGet){
    let request = new XMLHttpRequest();
    request.open("GET",urlGet,false);
    request.send();
    return request.responseText;
}