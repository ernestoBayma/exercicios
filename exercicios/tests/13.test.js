const queTipoDeDia = require("../13");

const fSemanaStr = "Fim de semana";
const dUtilStr = 'Dia útil';
const dInvalidoStr = 'Dia inválido';

describe("que tipo de dia é ?", () => {
    test("deve ser final de semana", () => {
        expect(queTipoDeDia(1)).toBe(fSemanaStr);
        expect(queTipoDeDia(7)).toBe(fSemanaStr);
    })

    test("deve ser dia útil", () => {
        expect(queTipoDeDia(2)).toBe(dUtilStr);
        expect(queTipoDeDia(4)).toBe(dUtilStr);
        expect(queTipoDeDia(6)).toBe(dUtilStr);
    })

    test("deve ser dia invalido", () => {
        expect(queTipoDeDia(-1)).toBe(dInvalidoStr);
        expect(queTipoDeDia(8)).toBe(dInvalidoStr);
        expect(queTipoDeDia("ahsuuda")).toBe(dInvalidoStr);
        expect(queTipoDeDia("asda8")).toBe(dInvalidoStr);
    })
})