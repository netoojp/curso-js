var itensClasse = document.getElementsByClassName('.item');
console.log(itensClasse);

//querrySelectorAll - acessar mais de um elemento
var itensQuerry = document.querySelectorAll('#lista-2 li');
console.log(itensQuerry)


var itensQuerry2 = document.querySelectorAll('#lista .item');
console.log(itensQuerry2)

//querrySelector - vai pegar um elemento

var lista = document.querySelector('#lista');
console.log(lista)

var primeiraLista = document.querySelector('ul');
console.log('primeiraLista');

var span = document.querySelector('#paragrafo span'); //o # é por causa do nome da id no html
console.log(span);