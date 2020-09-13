const paresImpares = require("../28");

describe.each([
    [
        [9, 13, 15, 17, 19],
        [0, 2],
    ],
    [
        [2, 5, 6, 12, 16],
        [4, 2],
    ],
    [
        [4, 7, 11, 12, 20],
        [3, 1],
    ],
])("pares e impares", (vector, expected) => {
    test(`${vector} deve retornar ${expected}`, () => {
        expect(paresImpares(vector)).toStrictEqual(expected);
    });
});
