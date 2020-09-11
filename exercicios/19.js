/*
    O cardápio de uma lanchonete é o seguinte:
    Código   Descrição do Produto   Preço
    100      Cachorro Quente        R$ 3,00
    200     Hambúrguer Simples      R$ 4,00
    300     Cheeseburguer           R$ 5,50
    400     Bauru                   R$ 7,50
    500     Refrigerante            R$ 3,50
    600     Suco                    R$ 2,80
    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
    a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
    comando switch. Crie um caso default para produto não existente.

*/

const resolverPedido = (codigo = 600, qty = 1) => {
    const tabela = {
        100: 3.0,
        200: 4.0,
        300: 5.5,
        400: 7.5,
        500: 3.5,
        600: 2.8,
    };

    switch (codigo) {
        case 100:
        case 200:
        case 300:
        case 400:
        case 500:
        case 600: {
            return tabela[codigo] * qty;
        }
        default: {
            return 0;
        }
    }
};


module.exports = resolverPedido;