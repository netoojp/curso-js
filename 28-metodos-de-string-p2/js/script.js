// toLowerCase e toUpperCase - caixa baixa e caixa alta

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());


// trim - corrigir esses espaços

var nome = "        Neto     ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split - deixar essas tags separadas - separação de string

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf - encontar ultima palavra quando ela é repetida 

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste")); //índice primeira plavara - nesse caso teste

console.log(fraseDois.lastIndexOf("teste")); //índice da ultima palavra - nese caso teste