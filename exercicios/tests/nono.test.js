const notaFinal = require("../nono");

describe("nota final depois de manipulação", () => {
    test("esse aluno foi reprovado", () => {
        expect(notaFinal(36)).toBe(36);
    });
    test("esse aluno foi aprovado no limite", () => {
        expect(notaFinal(38)).toBe(40);
    });

    test("esse aluno foi aprovado mas teve a nota arrendada", () => {
        expect(notaFinal(84)).toBe(85);
    });

    test("esse aluno foi aprovado mas não mudou de nota", () => {
        expect(notaFinal(65)).toBe(65);
    });
});
