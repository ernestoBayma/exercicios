//  Fazer um programa para encontrar todos os pares entre 1 e 100

let numeros = [];
for (let i = 1; i <= 100; i++) {
    numeros.push(i);
}
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares);
