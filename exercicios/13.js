/*
    Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
    dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const queTipoDeDia = function (numero = 1) {
    if(numero < 1 || numero > 7 || isNaN(numero)) {
        return 'Dia inválido';
    }

    switch(numero) {
        case 2:case 3:case 4:case 5:case 6: return 'Dia útil';
        default: return 'Fim de semana';
    }
}

module.exports = queTipoDeDia;