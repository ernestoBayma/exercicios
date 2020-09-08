const divisionWithRemaider = (dividend, divider) => {
    const division = Math.floor(dividend / divider);
    const remaider = dividend / divider - division;

    console.log(`result of the division of ${dividend} / ${divider} = 
    ${division} with remaider ${remaider}`);
};

divisionWithRemaider(5, 2);
divisionWithRemaider(10, 2);
divisionWithRemaider(3, 2);
divisionWithRemaider(0, 1);
