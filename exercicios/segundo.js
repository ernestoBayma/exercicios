const checkIfTriangle = (a = 1, b = 1, c = 1) => a + b > c && a + c > b && c + b > a;

const whichType = function (a, b, c) {
    if (a === b && a === c) {
        return "equilateral";
    } else if ((a === b && a !== c) || (a === c && a !== b)) {
        return "isosceles";
    }
    return "scalene";
};

const triangleClassification = function (a = 1, b = 1, c = 1) {
    if (checkIfTriangle(a, b, c)) {
        const type = whichType(a, b, c);
        console.log(`this is a ${type} triangle`);
        return type;
    } else {
        console.log(
            `Is not possible to form a triangle from the values ${a}, ${b}, ${c}`
        );
        return "invalid";
    }
};

module.exports = triangleClassification;
