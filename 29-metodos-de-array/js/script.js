// length - total de elementos
var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push - add elemento no fim do array[]
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop - remove elemento fim do array
arr.pop();

console.log(arr);

// unshift - add elemento no início do array
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift - remove elemento do começo
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));