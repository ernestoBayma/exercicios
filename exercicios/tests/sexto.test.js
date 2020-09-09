const { jurosSimples, jurosCompostos } = require("../sexto");

test("juros compostos são maiores que juros simples?", () => {
    expect(jurosCompostos(2000, 0.05, 4)).toBeGreaterThan(
        jurosSimples(2000, 0.05, 4)
    );
    expect(jurosCompostos(500, 0.01, 120)).toBeGreaterThan(
        jurosSimples(500, 0.01, 120)
    );
});

test("juros simples", () => {
    expect(jurosSimples(2000, 0.05, 4)).toBe(2400);
    expect(jurosSimples(1500, 0.03, 6)).toBe(1770);
    expect(jurosSimples(500, 0.01, 120)).toBe(1100);
});

test("juros composto", () => {
    expect(jurosCompostos(2000, 0.05, 4)).toBeCloseTo(2431.01, 2);
    expect(jurosCompostos(500, 0.05, 5)).toBeCloseTo(638.14, 2);
});
