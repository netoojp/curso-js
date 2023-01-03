let pessoa = {
    nome: "neto",
    idade: "17",
    falar: function() {
        console.log("olá,tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(4, 2);

console.log(soma);