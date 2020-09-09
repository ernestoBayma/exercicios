const showAsCurrency = require('../quinto')


test('gibberish', () => {
    expect(showAsCurrency('asdasdasdas')).toBeUndefined();
    expect(showAsCurrency('ashsida2145')).toBeUndefined();
    expect(showAsCurrency('1234asdf')).toBeUndefined();
});

test('floats', () => {
    expect(showAsCurrency(0.30000000000000004)).toBe('R$0,30');
    expect(showAsCurrency(0.3)).toBe('R$0,30');
    expect(showAsCurrency(0.5243)).toBe('R$0,52');
})

test('string floats', () => {
    expect(showAsCurrency("0.5243")).toBe('R$0,52');
    expect(showAsCurrency("1.")).toBe("R$1,00");
})

test('integers', () => {
    expect(showAsCurrency(1000)).toBe('R$1.000,00');
    expect(showAsCurrency(1248)).toBe('R$1.248,00');
    expect(showAsCurrency(1000000)).toBe('R$1.000.000,00');
})

test('string integers', () => {
    expect(showAsCurrency("1000")).toBe('R$1.000,00');
    expect(showAsCurrency("1248")).toBe('R$1.248,00');
})
