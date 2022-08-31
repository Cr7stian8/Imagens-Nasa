function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");


    tdId.innerHTML = usuario.idProduto;
    tdNome.innerHTML = usuario.nomeProduto;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha
}

function principal(){
    let urlAPI = "https://cdmspring.herokuapp.com/produto/buscar";
    dados = get(urlAPI);
    
    usuarios = JSON.parse(dados);

    let tabela = document.getElementById("tabela");

    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

}

principal();