const { TestScheduler } = require("jest");
const media = require("../32");

test.each([
    [[-39, -37, 0, -13, 40], -9.8],
    [[4, 33, 43, 47, 32], 31.8],
    [[6, 2, 10, 1, 4, 9, 3, 7], 5.25],
])("media aritmetica", (vector, expected) => {
    expect(media(vector)).toBeCloseTo(expected, 2);
});
