 //parseFloat - pega valor e transforma em float (número decimal)[10.0]

 console.log(parseFloat('12.999'));
 console.log(Number.parseFloat('12.999'));

 //parseInt - pega string e add em inteiro

 console.log(parseInt('10'));
 console.log(parseInt(16.96));

 //toFixed - limita casas decimais no número

 console.log(23.99.toFixed(1)); //um é o número de casas

 //isNan - verificar se tem um número

 console.log(isNaN("teste")); //vai dar true
 console.log(isNaN(12));

 // MAX_VALUE e MIN_VALUE - máximo e mínimo que a linguagem pode trabalhar com número

 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);

 console.log(2.7976931348623157e+308);