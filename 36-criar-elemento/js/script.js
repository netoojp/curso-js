//inserir elemento no body
var novoParagrafo = document.createElement("p"); //criando elemento
console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do paragráfo"); //inserindo texto - conteúdo
novoParagrafo.appendChild(texto); //inseriri elementos
console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo);

//inserir em um container

var container = document.getElementById("container");
console, log(container);

var el = document.createElement("span"); //criação
el.appendChild(document.createTextNode("texto do span"));
console.log(el);
container.appendChild(el); //inserindo criação