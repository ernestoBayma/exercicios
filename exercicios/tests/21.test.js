const calcularPrecoPlano = require('../21')

test("menor que 10", () => {
  expect(calcularPrecoPlano(8)).toBe(180)  
})

test("entre 10 e 30", () => {
    expect(calcularPrecoPlano(15)).toBe(150)
})

test("entre 30 até 60", () => {
    expect(calcularPrecoPlano(45)).toBe(195)
})

test("maior que 60", () => {
    expect(calcularPrecoPlano(69)).toBe(230)
})