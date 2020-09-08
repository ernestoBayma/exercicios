const {
    baseOverExp,
    baseOverExpWithPow,
    baseOverExpWithLoop,
} = require("./terceiro");

test.each([
    [2, 0, 1],
    [2, 1, 2],
    [2, 2, 4],
    [2, 3, 8],
    [2, 4, 16],
    [2, 5, 32],
    [2, 6, 64],
    [2, 7, 128],
    [2, 8, 256],
    [2, 9, 512],
    [2, 10, 1024],
])("power of 2 (n = 10)", (base, exp, expected) => {
    expect(baseOverExp(base, exp)).toBe(expected);
    expect(baseOverExpWithPow(base, exp)).toBe(expected);
    expect(baseOverExpWithLoop(base, exp)).toBe(expected);
});
