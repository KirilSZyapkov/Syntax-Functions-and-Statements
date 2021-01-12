function aggregateElements(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverseSum = input.reduce((a, b) => a + (1 / b), 0);
    let concInput = input.join('');
    console.log(sum);
    console.log(inverseSum);
    console.log(concInput);
}

aggregateElements([1, 2, 3])