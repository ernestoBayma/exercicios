// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function paresImpares(numeros = []) {
    if (numeros.length != 0) {
        const pares = numeros.filter((numero) => numero % 2 == 0);
        const impares = numeros.filter((numero) => numero % 3 == 0);

        const qtPares = pares.length;
        const qtImpares = impares.length;

        console.log(`pares ${qtPares} ímpares ${qtImpares}`);
        return [qtPares, qtImpares];
    } else {
        console.log(`pares 0 ímpares 0`);
        return [0, 0];
    }
}

module.exports = paresImpares;
