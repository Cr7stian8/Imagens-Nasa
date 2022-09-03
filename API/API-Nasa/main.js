function principal() {
    let urlAPI = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu";

    dados = get(urlAPI);
    dadosJson = JSON.parse(dados);

    console.log(dadosJson.title);
    console.log(dadosJson.hdurl);

    var imagem = document.createElement("img");
    imagem.src = dadosJson.hdurl;
    
    document.getElementById("IdImagem").appendChild(imagem);
}

function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

principal();