const recordeMelhorPior = require("../oitavo");

describe.each([
    ["10 20 20 8 25 3 0 30 1", [3, 7]],
    ["2 3 7 8 1 8 9 0", [4, 8]],
    ["0 1 10 12 8 7 10", [3, 1]],
    ["1 1 1 1 1 1 1", [0, 0]],
    ["", [0, 0]],
])("recordeMelhorPior", (string, expected) => {
    test(`input is ${string}`, () => {
        expect(recordeMelhorPior(string)).toStrictEqual(expected);
    })
});
