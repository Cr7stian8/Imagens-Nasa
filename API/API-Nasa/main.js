function principal() {
    let urlAPI = "https://api.nasa.gov/planetary/apod?date=2000-08-13&api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu";

    dados = get(urlAPI);
    dadosJson = JSON.parse(dados);

    console.log(dadosJson.title);

    // Adicionando Titulo
    var titulo = document.createElement("h2");
    titulo.innerHTML = dadosJson.title;
    document.getElementById("div").appendChild(titulo);

    // Adicionando Imagem
    var imagem = document.createElement("img");
    imagem.src = dadosJson.hdurl;
    document.getElementById("div").appendChild(imagem);

    //Adicionando data
    var data = document.createElement("p")
    data.innerHTML = dadosJson.date;
    document.getElementById("div").appendChild(data)
}

// MÉTODOS HTTP
function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

principal();