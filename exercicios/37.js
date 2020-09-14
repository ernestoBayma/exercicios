/*
    Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
    como parâmetros um número n (número de termo), 
    a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
    bem como a soma dos elementos.
*/

const progAritmetica = (termos = 1, pTermo = 0, razao = 0) => {
    let resultado = [pTermo];
    for (let i = 0; i < termos - 1; i++) {
        resultado.push(resultado[i] + razao);
    }

    const soma = resultado.reduce((acc, v) => acc + v);
    console.log(`
    termos : ${resultado} 
    soma: ${soma}
    `);
};

const progGeometrica = (termos = 1, pTermo = 0, razao = 0) => {
    let resultado = [pTermo];
    
    for (let i = 0; i < termos - 1; i++) {
        resultado.push(resultado[i] * razao);
    }

    let soma = 0;
    resultado.forEach((v) => soma += v);
    console.log(`
    termos : ${resultado} 
    soma: ${soma}
    `);
};

progAritmetica(10, 1, 3);
progGeometrica(10, 7, 2);
