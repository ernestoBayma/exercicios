/*
    Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
*/

function simpleArithmetic(a, b) {
    console.log(`valores : ${a} e ${b}`);
    console.log(`soma: ${a + b}`);
    console.log(`subtração: ${a - b}`);
    console.log("multiplicação : " + a * b);
    console.log(`divisão : ${a / b}`);
}

simpleArithmetic(8, 2);
simpleArithmetic(2, 2);
simpleArithmetic(3, 1);
simpleArithmetic(-3, 1);
