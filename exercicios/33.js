/*
    Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
    quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
    Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
    mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorString = ["a", "b", "c"];
const vetorInteiro = [1, 2, 3];
const vetorDouble = [1.2, 4.5, 5.1];

const unirVetores = (...vetores) => 
    vetores.length > 0 ? vetores.reduce((acc, vetor) => acc.concat(vetor)) : [];


console.log(unirVetores(vetorInteiro, vetorDouble));
console.log(unirVetores(vetorDouble, vetorString));


