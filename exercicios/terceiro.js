/*
    Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

*/
const baseOverExp = (base, exp) => base ** exp;
const baseOverExpWithPow = (base, exp) => Math.pow(base, exp);
const baseOverExpWithLoop = (base, exp) => {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
};

module.exports = { baseOverExp, baseOverExpWithPow, baseOverExpWithLoop };
