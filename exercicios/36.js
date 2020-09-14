/*
    Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
    inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
    elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira 
    se e somente se o valor do elemento for maior que 5.
*/

const multiplicarElementos = (elementos = [], por = 0) =>
    elementos.map((el) => el * por);

const multiplicarElementosSeMaiorQue5 = (elementos = [], por = 0) =>
    multiplicarElementos(
        elementos.filter((el) => el > 5),
        por
    );

console.log(multiplicarElementos([2, 5, 10, 24], 2));
console.log(multiplicarElementosSeMaiorQue5([2, 4, 3, 5, 19], 2));
console.log(multiplicarElementosSeMaiorQue5());
