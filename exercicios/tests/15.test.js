const compraDeCarro = require("../15");

const sucessStr = "Compra efetuada com sucesso";
const questionStr = "Tem certeza que não prefere este modelo?";
const errorStr = "Não trabalhamos com este tipo de automóvel aqui";

describe("compra de carro", () => {
    test("hatch", () => {
        expect(compraDeCarro("hatch")).toBe(sucessStr);
    });

    test("caminhonete| sedan | motocicleta", () => {
        expect(compraDeCarro("caminhonete")).toBe(questionStr);
        expect(compraDeCarro("sedan")).toBe(questionStr);
        expect(compraDeCarro("motocicleta")).toBe(questionStr);
    });

    test("outro tipo de valor", () => {
        expect(compraDeCarro("42")).toBeUndefined();
        expect(compraDeCarro(71)).toBeUndefined();
        expect(compraDeCarro("caminhão")).toBe(errorStr);
    });


    test("valores válidos mas capitalizado ou tudo maiúsculo", () => {
        expect(compraDeCarro("Hatch")).toBe(sucessStr);
        expect(compraDeCarro("SEDAN")).toBe(questionStr);
        expect(compraDeCarro("motoCicleta")).toBe(questionStr);
    })
});
