var titulo = "NETOTEST";

var tituloh1 = document.createElement('h1');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(tituloh1);

var tituloNoBody = document.getElementsByTagName('h1');

console.log(tituloNoBody[0]);
