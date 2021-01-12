function greatestCommonDivisor_GCD(arg1, arg2) {
    let numOne = Number(arg1);
    let numTwo = Number(arg2);

    while(numTwo !== 0) {
        let t = numTwo;
        numTwo = numOne % numTwo;
        numOne = t;
    }
    return numOne;

}

console.log(greatestCommonDivisor_GCD(2154, 458))