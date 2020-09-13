/*
    Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
    deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
    deles estão fora do intervalo, escrevendo estas informações.

*/

function dentroIntervalo(vetor = []) {
    let dentro = 0;
    const len = vetor.length;
    for (let i = 0; i < len; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) dentro++;
    }
    const fora = len - dentro;

    console.log(`quantidade de valores dentro ${dentro} , fora ${fora}`);

    return [dentro, fora];
}

module.exports = dentroIntervalo;
