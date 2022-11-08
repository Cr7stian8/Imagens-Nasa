function main(){
    var url = "https://api.github.com/search/repositories?q=";
    var nomeBuscado = document.getElementById("input").value;
    let urlApi = url + nomeBuscado;
    let dados = get(urlApi);

    console.log(dados);
    let para = document.createElement("p")
    para.textContent
    ducument.getElementById("resultado").appendchild
}
// get
function get(urlGet){
    let request = new XMLHttpRequest();
    request.open("GET",urlGet,false);
    request.send();
    return request.responseText;
}