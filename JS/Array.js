// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros[2]); // Saída: 3

// Modificando elementos do array
numeros[1] = 10;
console.log(numeros); // Saída: [1, 10, 3, 4, 5]

// Adicionando elementos ao final do array
numeros.push(6);
console.log(numeros); // Saída: [1, 10, 3, 4, 5, 6]

// Removendo o último elemento do array
numeros.pop();
console.log(numeros); // Saída: [1, 10, 3, 4, 5]

// Obtendo o comprimento do array
console.log(numeros.length); // Saída: 5