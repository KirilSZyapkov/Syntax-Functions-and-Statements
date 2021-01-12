function validityChecker(arg1, arg2, arg3, arg4) {
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    function result(a, b, c, d) {
        let distance = Math.sqrt((c - a) ** 2 + (d - b) ** 2);
        if (Number.isInteger(distance)){
            return 'valid';
        } else {
            return 'invalid'
        }
    }

    return `{${x1}, ${y1}} to {0, 0} is ${result(x1, y1, 0, 0)}`
        + '\n' + `{${x2}, ${y2}} to {0, 0} is ${result(x2, y2, 0, 0)}`
        + '\n' + `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result(x1, y1, x2, y2)}`
}

console.log(validityChecker(3, 0, 0, 4))