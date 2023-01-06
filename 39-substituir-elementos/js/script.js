//criar elemento -  o que queri add na minha página

var el = document.createElement("h3");
el.classList = "testando-classe";
var text = document.createTextNode("esse é o texto");
el.appendChild(texto);
console.log(el);

//selecionar elemento que eu quero trocar
var title = document.querySelector("#title");
console.log(title);

//selecionar o pai do elemento(el)
var pai = title.parentNode; // tem a mesma função que a de baixo
//var body = document.querySelector("body");


//trocar os elementos
pai.replaceChild(el, title);