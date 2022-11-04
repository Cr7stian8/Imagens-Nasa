function adicionaImagem(url){
    let dados = get(url)
    dadosJson = JSON.parse(dados)
    var img = document.createElement("img")
    img.src = dadosJson.hdurl
    img.style.width = "200px"
    img.style.height = "200px"
    document.getElementById("imagem1").appendChild(img)
}
adicionaImagem("https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2022-08-12")
adicionaImagem("https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2003-08-13")
adicionaImagem("https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2022-06-13")

function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}