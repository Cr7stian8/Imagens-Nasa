function principal() {
  //Api que está sendo consumida
  var url = "https://api.nasa.gov/planetary/apod?api_key=XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu";

  //Recebendo valor dos input
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var ano = document.getElementById("ano").value;

  //Adicionando data a url para realizar o get na data especificada pelo usuario
  var data ="&date="+ano+"-"+mes+"-"+dia;
  let urlAPI = url + data;

  //Passando dados para JSON para facilitar a manipulação
  dados = get(urlAPI);
  dadosJson = JSON.parse(dados);

  let element = document.getElementById("imagem");
  if (element == null){
      conteudo();
  }else{
      LimpaTudo();
  }
}
function conteudo(){
  cria();
  AdicionaTitulo();
  AdicionaConteudo();
  AdicionaImagem();
  AdicionaData();
}
// ============== FUNÇÕES AUTOEXPLICATIVAS ============= //
function cria(){
  var imagem = document.createElement("article");
  imagem.setAttribute("id","imagem")
  document.getElementsByClassName("resultado")[0].appendChild(imagem);

  var conteudo = document.createElement("article");
  conteudo.setAttribute("id","conteudo")
  document.getElementsByClassName("resultado")[0].appendChild(conteudo);
}
// =================== FUNÇÕES FATORADAS ============= //
function AdicionaImagem(){
  var imagem = document.createElement("img");
  imagem.src = dadosJson.hdurl;
  document.getElementById("imagem").appendChild(imagem);
}
function LimpaImagem(){
  var imagem = document.getElementById("imagem");
  imagem.parentNode.removeChild(imagem);
}
// ======================================= //
function AdicionaConteudo(){
  var descricao = document.createElement("p");
  descricao.innerHTML = dadosJson.explanation;
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
function LimpaTudo(){
  for (var index = 0; index < 3; index++) {
      LimpaImagem();
      LimpaConteudo();
  }
};