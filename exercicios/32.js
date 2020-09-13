// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const media = (vetor = []) =>
    vetor.reduce((add, valor) => add + valor) / vetor.length;



module.exports = media;