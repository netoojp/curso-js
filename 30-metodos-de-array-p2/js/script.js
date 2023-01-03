// splice - add elemento no meio do array
var arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1); //removendo elemento específico - nesse caso foi o 4

console.log(arr);

// indexOf - acha índice do elemento

console.log(arr.indexOf(5));


// join - transformar array em strings
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));


// reverse - inverter um array
console.log(arr2.reverse());