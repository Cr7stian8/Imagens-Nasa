document.addEventListener('DOMContentLoaded', function () {
    function adicionaImagem(url) {
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

        // Adiciona um evento de clique para mostrar a imagem em um modal
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var modal = document.getElementById("modal");
            var modalImg = document.getElementById("modal-img");
            modal.style.display = "block";
            modalImg.src = this.href;
        });

        document.getElementById("imagensPesquisa").appendChild(link)
    }

    function sorteiaFotos() {
        const dataAtual = new Date();
        const dataMinima = new Date('1996-01-01');
        const tempoMinimo = dataMinima.getTime();
        const tempoAleatorio = Math.floor(Math.random() * (dataAtual.getTime() - tempoMinimo + 1)) + tempoMinimo;
        const dataAleatoria = new Date(tempoAleatorio);
        const ano = dataAleatoria.getFullYear();
        const mes = dataAleatoria.getMonth() + 1;
        const dia = dataAleatoria.getDate();
        const url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu";
        const data = "&date=" + ano + "-" + mes.toString().padStart(2, '0') + "-" + dia.toString().padStart(2, '0');
        const urlImagem = url + data;
        adicionaImagem(urlImagem);
      }


    function get(url) {
        let request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();
        return request.responseText;
    }

    sorteiaFotos();
    sorteiaFotos();
    sorteiaFotos();

    let imagensPesquisa = document.getElementById("imagensPesquisa");
    imagensPesquisa.style.display = "flex";

// Obter o modal
var modal = document.getElementById("modal");

// Obter o elemento <span> que fecha o modal
var closeBtn = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal
function openModal() {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fechar o modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fechar o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});