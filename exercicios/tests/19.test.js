const resolverPedido = require("../19");

test(`pedidos > cachorro quente,
                hambúrger simples
                cheeseburger
                bauru
                refrigerante
                suco`, () => {
    expect(resolverPedido(100, 2)).toBeCloseTo(6.00, 2);
    expect(resolverPedido(200, 1)).toBeCloseTo(4.00, 2);
    expect(resolverPedido(300, 3)).toBeCloseTo(16.50, 2);
    expect(resolverPedido(400, 1)).toBeCloseTo(7.50, 2);
    expect(resolverPedido(500, 2)).toBeCloseTo(7.00, 2);
    expect(resolverPedido(600, 10)).toBe(28);
});
