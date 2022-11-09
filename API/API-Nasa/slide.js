function adicionaImagem(url){
    let dados = get(url)
    dadosJson = JSON.parse(dados)
    var img = document.createElement("img")
    let imgLink = dadosJson.hdurl
    img.src = dadosJson.hdurl
    img.style.width = "200px"
    img.style.height = "200px"
    var link = document.createElement("a")
    link.appendChild(img)
    link.href = imgLink
    link.target = "blank"
    console.log(imgLink)
    document.getElementById("imagensPesquisa").appendChild(link)
}
function sorteiaFotos(){
    let ano = Math.floor(Math.random() * 22) + 2000;
    let mes = Math.floor(Math.random() * 12) + 1;
    let dia = Math.floor(Math.random() * 30) + 1;

    var url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu"
    var data ="&date="+ano+"-"+mes+"-"+dia;
    var urlImagem = url + data;
    adicionaImagem(urlImagem);
}

function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

sorteiaFotos()
sorteiaFotos()
sorteiaFotos()