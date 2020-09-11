/*
    Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
    switch. Crie um case default que escreva ‘Número fora do intervalo.
*/

function porExtenso(numero = 0) {
    switch (numero) {
        case 0: {
            console.log("zero");
            return;
        }
        case 1: {
            console.log("um");
            return;
        }
        case 2: {
            console.log("dois");
            return;
        }
        case 3: {
            console.log("três");
            return;
        }
        case 4: {
            console.log("quatro");
            return;
        }
        case 5: {
            console.log("cinco");
            return;
        }
        case 6: {
            console.log("seis");
            return;
        }
        case 7: {
            console.log("sete");
            return;
        }
        case 8: {
            console.log("oito");
            return;
        }
        case 9: {
            console.log("nove");
            return;
        }
        case 10: {
            console.log("dez");
            return;
        }
        default: {
            console.log("Número fora do intervalo");
            return;
        }
    }
}

porExtenso(7);
porExtenso(10);
porExtenso(0);
porExtenso(1);
porExtenso(11);
porExtenso(-1);
porExtenso(2);
porExtenso(3);
