function get(url){
    // Instanciando Objeto responsável por fazer request
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    document.write(get("https://cdmspring.herokuapp.com/produto/buscar"))
}

function principal(){
    // Realizando um get na API da Botanic House e exibindo no console
    console.log(get("https://cdmspring.herokuapp.com/produto/buscar"))
}

criaLinha()