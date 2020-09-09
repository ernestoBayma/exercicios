const findDot = (value) => value.toString().search(/[/.]/g);
const getDecimalPartAsString = (value, from) => {
    let substr = value.toString().substring(from + 1);
    switch (substr.length) {
        case 0:
            {
                return (substr += "00");
            }
        case 1:
            {
                return (substr += "0");
            }
        default:
            {
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
            console.log(`R$${integerPart},${decimalPart}`);
        } else {
            console.log(`R$${value},00`);
        }
    } else {
        console.log("Value is not a number")
    }
};

showAsCurrency(0.30000000000000004);
showAsCurrency(0.3);
showAsCurrency(0.5243);
showAsCurrency("0.5243");
showAsCurrency(1000);
showAsCurrency("1000");
showAsCurrency("1.");
showAsCurrency(1248);
showAsCurrency("1248");

