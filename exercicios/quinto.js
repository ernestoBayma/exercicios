const findDot = (value) => value.toString().search(/[/.]/g);

const getDecimalPartAsString = (value, from) => {
    let substr = value.toString().substring(from + 1);
    switch (substr.length) {
        case 0: {
            return (substr += "00");
        }
        case 1: {
            return (substr += "0");
        }
        default: {
            return substr.substring(0, 2);
        }
    }
};

const getIntegerPartAsString = (value, to) => value.toString().substring(0, to);

const formatIntegerPart = (value) => {
    let elemsArray = value.toString().split("");
    const len = elemsArray.length;
    if (len > 3) {
        // Se a quantidade de digitos for um numero multiplo de 3 
        // calculamos o numero subtraido por um
        const howManyDots =
            len % 3 === 1 ? Math.floor(len / 3) : Math.floor((len - 1) / 3);
        let currIndex = len;
        for (let i = 0; i < howManyDots; i++) {
            currIndex -= 3;
            elemsArray.splice(currIndex, 0, ".");
        }

        return elemsArray.join("");
    }

    return value;
};

const showAsCurrency = (value) => {
    if (!isNaN(value)) {
        const dotIndex = findDot(value);
        if (dotIndex >= 0) {
            const decimalPart = getDecimalPartAsString(value, dotIndex);
            const integerPart = formatIntegerPart(
                getIntegerPartAsString(value, dotIndex)
            );
            const currencyStr = `R$${integerPart},${decimalPart}`;
            console.log(currencyStr);
            return currencyStr;
        } else {
            const currencyStr = `R$${formatIntegerPart(value)},00`;
            console.log(currencyStr);
            return currencyStr;
        }
    } else {
        console.log("Value is not a number");
    }
};

module.exports = showAsCurrency;
