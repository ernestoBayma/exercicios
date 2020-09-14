/*
    Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
    ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
    para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
*/

function* genDePara(de = 0, para = 100) {
    for (let i = de; i <= para; i++) yield i;
}

function imparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        const t = inicio;
        inicio = fim;
        fim = t;
    }

    let valores = [];
    for (const valor of genDePara(inicio, fim)) {
        if (valor % 2 !== 0) {
            valores.push(valor);
        }
    }
    return valores;
}

console.log(imparesEntre());
