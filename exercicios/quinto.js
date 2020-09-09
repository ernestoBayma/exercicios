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

const showAsCurrency = (value) => {
    if (!isNaN(value)) {
        const dotIndex = findDot(value);
        if (dotIndex >= 0) {
            const decimalPart = getDecimalPartAsString(value, dotIndex);
            const integerPart = getIntegerPartAsString(value, dotIndex);
            const currencyStr = `R$${integerPart},${decimalPart}`;
            console.log(currencyStr);
            return currencyStr;
        } else {
            const currencyStr = `R$${value},00`;
            console.log(currencyStr);
            return currencyStr;
        }
    } else {
        console.log("Value is not a number");
    }
};

module.exports = showAsCurrency;
