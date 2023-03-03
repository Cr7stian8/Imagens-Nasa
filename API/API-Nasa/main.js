const resultado = document.getElementById("resultado")
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

function principal() {
  //Api que está sendo consumida
  const url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu"

  //Recebendo valor dos input
  const dia = document.getElementById("dia").value
  const mes = document.getElementById("mes").value
  const ano = document.getElementById("ano").value

  //Adicionando data a url
  const dataPesquisa = "&date=" + ano + "-" + mes + "-" + dia
  const urlAPI = url + dataPesquisa

  //Passando dados para JSON para facilitar a manipulação
  const dados = get(urlAPI)
  const dadosJson = JSON.parse(dados)

  // limpando tela antes de realizar pesquisa
  resultado.innerHTML = ""

  // adicionando imagem
  const imagem = document.createElement("img")
  imagem.src = dadosJson.hdurl
  imagem.id = "imagemPesquisa"
  resultado.appendChild(imagem)

  //criando div para o conteudo
  const conteudo = document.createElement("div")
  conteudo.id = "conteudo"

  // adicionando titulo
  const titulo = document.createElement("h2");
  titulo.textContent = dadosJson.title;
  conteudo.appendChild(titulo);

  //adicionando descricao
  const descricao = document.createElement("p");
  descricao.textContent = dadosJson.explanation;
  conteudo.appendChild(descricao);
  descricao.classList.add("descricao");

  // adicionando data
  const data = document.createElement("p");
  data.textContent = (`Data: ${dia} / ${mes} / ${ano}`)
  data.style.paddingTop = "2vh"
  conteudo.appendChild(data);

  // adicionando conteudo ao resultado
  resultado.appendChild(conteudo)
}
function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}
function limpa() {
  resultado.innerHTML = ""
}
//adicionando o evento de teclado aos elementos
dia.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    principal();
  }
});
mes.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    principal();
  }
});
ano.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    principal();
  }
});