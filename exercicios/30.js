// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const maiorMenor = (vetor = []) => {
    vetor.sort((f, s) => (f > s ? 1 : -1));
    return { maior: vetor[vetor.length - 1], menor: vetor[0] };
};


module.exports = maiorMenor;