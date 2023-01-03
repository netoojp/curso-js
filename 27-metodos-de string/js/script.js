//lenght - muda a quantidade/comprimento de caracteres que uma string possui

var nome = "Matheus";
console.log(nome.length);

var obj = "bola";
console.log(obj.length);

// indexOf - vai dar indice da stringn de qualquer caractere que quero encontrar

console.log(nome[2]);
var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));

// slice - remove parte de algo ( nesse exemplo foi a da farse)

var roeu = frase.slice(7, 11);
console.log(roeu);

// replace - trocar palavra string

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);