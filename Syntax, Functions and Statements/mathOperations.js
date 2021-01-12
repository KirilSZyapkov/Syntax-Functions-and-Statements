function mathOperations(arg1, arg2, arg3) {
    let numOne = Number(arg1);
    let numTwo = Number(arg2);
    let operator = arg3;
    let result = 0;

    switch (operator) {
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '%':
            result = numOne % numTwo;
            break;
        case '**':
            result = numOne ** numTwo;
            break;
        default:
            break;
    }
console.log(result);
}

mathOperations(3, 5.5, '*')