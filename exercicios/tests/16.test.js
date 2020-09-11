const calculadora = require("../16");

test("adição", () => {
    expect(calculadora(2, "+", 2)).toBe(4);
});

test("subtração", () => {
    expect(calculadora(15, "-", 7)).toBe(8);
});

test("multiplicação", () => {
    expect(calculadora(9, "*", 2)).toBe(18);
});

test("divisão", () => {
    expect(calculadora(15, "/", 5)).toBe(3);
});

test("not valid", () => {
    expect(calculadora(0, "as", 1)).toBeUndefined();
    expect(calculadora("a", 1, 2)).toBeUndefined();
});
