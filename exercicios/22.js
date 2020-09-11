/*
     Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
    parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
    anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
    compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido
*/

const anuidade = (mes = 1, valor = 0) => {
    if(mes === 1 ) {
        return valor
    } else if(mes < 1 || mes > 12) {
        return 0
    }

    return valor * ((1 + 0.05) ** (mes - 1))
}

console.log("anuidade pro valor 500 no mes de janeiro ", anuidade(1, 500));
console.log("anuidade pro valor 500 no mes de fevereiro ", anuidade(2, 500));
console.log("anuidade pro valor 500 no mes de fevereiro ", anuidade(3, 500));