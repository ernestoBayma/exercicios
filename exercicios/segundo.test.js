const triangleClassification = require("./segundo");

test("equilateral triangle", () => {
    expect(triangleClassification(10, 10, 10)).toBe("equilateral");
});

test("scalene triangle", () => {
    expect(triangleClassification(15, 20, 30)).toBe("scalene");
});

test("isosceles triangle", () => {
    expect(triangleClassification(10, 10, 15)).toBe("isosceles");
});

test("not a valid triangle", () => {
    expect(triangleClassification(1, 2, 3)).toBe("invalid");
});
