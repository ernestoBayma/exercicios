/*
    Um funcionário irá receber um aumento de acordo com o seu plano de
    trabalho, de acordo com a tabela abaixo:
    Plano Aumento
    A       10%
    B       15%
    C       20%
    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
    novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/

const criarFuncionario = function (nome = "", salario = 1, plano = "A") {
    return {
        nome,
        salario,
        plano,
    };
};

const aumento = function (funcionario) {
    if (
        funcionario.hasOwnProperty("nome") &&
        funcionario.hasOwnProperty("salario") &&
        funcionario.hasOwnProperty("plano")
    ) {
        let plano;
        const salario = funcionario.salario;
        switch(funcionario.plano.toLowerCase()) {
            case 'a': {
                plano = 0.1
            } break;
            case 'b': {
                plano = 0.15
            } break;
            case 'c': {
                plano = 0.2
            } break;
            default: {
                console.log("Plano é inválido");
                return;
            }
        }
        const novoSalario =  salario + (salario * plano)
        console.log(
            `novo salário do funcionário ${funcionario.nome} é ${
                novoSalario
            }`
        );
    }
};

aumento(criarFuncionario("Ana", 10000, 'A'));
aumento(criarFuncionario("João", 3000, 'B'));
aumento(criarFuncionario("Maria", 2000, 'C'));
aumento(criarFuncionario("Yuri", 800, 'me da aumento'));
aumento(criarFuncionario("Zé", 100, 'b'));
