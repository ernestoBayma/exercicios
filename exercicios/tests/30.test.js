const maiorMenor = require('../30')

describe.each(
    [
        [[9, 44, 18, 32, 28], {maior: 44, menor: 9}],
        [[9, 13, 41, 8, 50], {maior: 50, menor: 8}],
        [[21, 24, 45, 2, 13], {maior: 45, menor: 2}]

    ]
)("qual é o maior e o menor", (vector, expected) => {
    test(`${vector}`, () => {
        expect(maiorMenor(vector)).toEqual(expected)
    })
})