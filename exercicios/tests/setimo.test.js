const bhaskara = require("../setimo");

test("formula de bhaskara", () => {
    expect(bhaskara(3, -5, 12)).toBe("Delta é negativo");
    expect(bhaskara(1, 4, -21)).toStrictEqual([3, -7]);
});
