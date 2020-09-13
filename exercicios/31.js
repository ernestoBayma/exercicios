/* 
    Escrever um algoritmo que percorre um vetor de inteiros, 
    conta quantos números negativos há nesse vetor
    e imprime a quantidade no console.
 */

const quantoNegativo = (vetor = []) => {
    const negativos = vetor.filter((valor) => valor < 0).length;
    const str = negativos > 1 ? 'numeros negativos' : 'numero negativo';
    console.log(`tem ${negativos} ${str} no vetor ${vetor}`);
};

quantoNegativo([-35, 44, 25, 47, -1]);
quantoNegativo([50, -28, 24, 9, -23]);
quantoNegativo([14, -14, -47, -23, -33]);
quantoNegativo([8, -46, 6, 31, 20]);