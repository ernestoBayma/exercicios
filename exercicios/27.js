/*
    Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
    crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
    quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

*/
// TODO:  melhores nomes??
const criarInfo = (altura, taxa) => {
    return { altura, taxa };
};

const calcularAltura = (kid1 = {}, kid2 = {}) => {
    if (kid1.altura === kid2.altura) return;
    let menor;
    let maior;
    let qualMenor;
    if (kid1.altura > kid2.altura) {
        qualMenor = "criança 2";
        maior = kid1;
        menor = kid2;
    } else {
        qualMenor = "criança 1";
        maior = kid2;
        menor = kid1;
    }

    if (menor.taxa > maior.taxa) {
        let anos = 0;
        let { altura, taxa } = menor;
        while (altura < maior.altura) {
            anos++;
            altura += altura * taxa;
            maior.altura += maior.altura * maior.taxa;
        }
        console.log(`${qualMenor} vai ultrapassar a outra criança em ${anos} anos`);
        return anos;
    } else {
        return;
    }
};
calcularAltura(criarInfo(90, 0.1), criarInfo(80, 0.12));
