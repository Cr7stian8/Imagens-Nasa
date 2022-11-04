function imagem1(){
    var position1 = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2022-06-13";
    let dados1 = get(position1);
    dadosJson = JSON.parse(dados1);
    var img1 = document.createElement("img");
    img1.src = dadosJson.hdurl;
    img1.style.width= "200px";
    img1.style.height= "200px";
    document.getElementById("imagem1").appendChild(img1);
}
function imagem2(){
    var position2 = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2022-08-12";
    let dados2 = get(position2);
    dadosJson = JSON.parse(dados2);
    var img2 = document.createElement("img");
    img2.src = dadosJson.hdurl;
    img2.style.width= "200px";
    img2.style.height= "200px";
    document.getElementById("imagem2").appendChild(img2);
}
function imagem3(){
    var position3 = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu&date=2003-08-13";
    let dados3 = get(position3);
    dadosJson = JSON.parse(dados3);
    var img3 = document.createElement("img");
    img3.src = dadosJson.hdurl;
    img3.style.width= "200px";
    img3.style.height= "200px";
    document.getElementById("imagem3").appendChild(img3);
}
function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}
imagem1()
imagem2()
imagem3()