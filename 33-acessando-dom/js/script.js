//tag

var titulo = document.getElementsByTagName('h1')[0]; //pegando elemento por nome da tag - plural o get
console.log(titulo);

//li
var lis = document.getElementsByTagName('li');
console.log(lis);

//id
var paragrafo = document.getElementById('paragrafo'); //singular
console.log(paragrafo);

//class - ele espera vários elementos - plural

var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);