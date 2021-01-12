function sumOfNumbersN_M(arg1, arg2) {
    let numOne = Number(arg1);
    let numTwo = Number(arg2);
    let sum = 0;
    for (let a = numOne; a <= numTwo; a++) {
        sum += a;
    }
    return sum;
}

console.log(sumOfNumbersN_M('-8', '20'))