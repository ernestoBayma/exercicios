/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (capInicial, jurosAoMes = 0.1, tempoEmMeses = 1) =>
    capInicial + capInicial * jurosAoMes * tempoEmMeses;

const jurosCompostos = (capInicial, jurosAoMes = 0.1, tempoEmMeses = 1) =>
    capInicial * Math.pow(1 + jurosAoMes, tempoEmMeses);

module.exports = { jurosSimples, jurosCompostos };
