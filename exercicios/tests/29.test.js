const dentroIntervalo = require("../29");

describe.each([
    [
        [1, 12, 15, 16, 18],
        [4, 1],
    ],
    [
        [1, 10, 12, 15, 20],
        [4, 1],
    ],
    [
        [7, 16, 32, 40, 46],
        [1, 4],
    ],
])("dentro de intervalo de 10 entre 20", (vector, expected) => {
    test(`${vector} deve retornar ${expected}`, () => {
        expect(dentroIntervalo(vector)).toStrictEqual(expected);
    });
});
