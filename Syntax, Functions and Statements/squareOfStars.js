function squareOfStars(arg) {
    let num = arg;

    if (arg === undefined) {
        for (let a = 0; a < 5; a++) {
            console.log('* '.repeat(5));
        }
    } else {
        for (let a = 0; a < num; a++) {
            console.log('* '.repeat(num));
        }
    }
}

squareOfStars(1)
squareOfStars(2)
squareOfStars(5)
squareOfStars()