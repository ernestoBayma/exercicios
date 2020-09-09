const jurosSimples = (capInicial, jurosAoMes = 0.1, tempoEmMeses = 1) =>
    capInicial + capInicial * jurosAoMes * tempoEmMeses;

const jurosCompostos = (capInicial, jurosAoMes = 0.1, tempoEmMeses = 1) =>
    capInicial * Math.pow(1 + jurosAoMes, tempoEmMeses);

module.exports = { jurosSimples, jurosCompostos };
