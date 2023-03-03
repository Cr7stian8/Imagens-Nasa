function limpa(){
  resultado.innerHTML = ""
}
function principal() {
  //Api que está sendo consumida
  var url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu"

  //Recebendo valor dos input
  var dia = document.getElementById("dia").value
  var mes = document.getElementById("mes").value
  var ano = document.getElementById("ano").value

  //Adicionando data a url para realizar o get na data especificada pelo usuario
  var data ="&date="+ano+"-"+mes+"-"+dia
  let urlAPI = url + data

  //Passando dados para JSON para facilitar a manipulação
  dados = get(urlAPI)
  dadosJson = JSON.parse(dados)

  try {
    conteudo()
  } catch (error) {
    LimpaTudo()
  }
}
function conteudo(){
  cria()
  AdicionaTitulo()
  AdicionaConteudo()
  AdicionaImagem()
  AdicionaData()
}

const resultado = document.getElementById("resultado")

function cria(){
  // limpando tela antes de realizar outra pesquisa
  resultado.innerHTML = ""
  const imagem = document.createElement("img")
  imagem.src = dadosJson.hdurl
  imagem.id = "imagemPesquisa"
  resultado.appendChild(imagem)

  const conteudo = document.createElement("p")
  conteudo.id = "conteudo"
  resultado.appendChild(conteudo)
}

function AdicionaConteudo(){
  const descricao = document.createElement("p");
  descricao.textContent = dadosJson.explanation;
  document.getElementById("conteudo").appendChild(descricao);
  descricao.classList.add("descricao");
}
function LimpaConteudo(){
  var conteudo = document.getElementById("conteudo");
  conteudo.parentNode.removeChild(conteudo);
}
// ===== A DATA É ADICIONADA AO CONTEÚDO == //
function AdicionaData(){
  var data = document.createElement("p");
  data.innerHTML = dadosJson.date;
  document.getElementById("conteudo").appendChild(data);
}
// ======================================== //
function AdicionaTitulo(){
  var titulo = document.createElement("h2");
  titulo.innerHTML = dadosJson.title;
  document.getElementById("conteudo").appendChild(titulo);
}
function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}