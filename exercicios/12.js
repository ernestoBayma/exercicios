// Faça um algoritmo que calcule o fatorial de um número

const fatorialRecursivo = (numero) => {
    if (numero <= 1) {
        return 1;
    }
    return numero * fatorialRecursivo(numero - 1);
};

const fatorial = (numero) => {
    let resultado = 1;
    for (let numeroAtual = 1; numeroAtual <= numero; numeroAtual++) {
        resultado *= numeroAtual;
    }
    return resultado;
};

console.log("--------- fatorial --------");
console.log("0! = ", fatorial(0));
console.log("4! = ", fatorial(4));
console.log("1! = ", fatorial(1));
console.log("5! = ", fatorial(5));
console.log("8! = ", fatorial(8));
console.log("1024! = ", fatorial(1024));

console.log("--------- fatorial recursivo --------");
console.log("0! = ", fatorialRecursivo(0));
console.log("4! = ", fatorialRecursivo(4));
console.log("1! = ", fatorialRecursivo(1));
console.log("5! = ", fatorialRecursivo(5));
console.log("8! = ", fatorialRecursivo(8));
console.log("1024! = ", fatorialRecursivo(1024));
