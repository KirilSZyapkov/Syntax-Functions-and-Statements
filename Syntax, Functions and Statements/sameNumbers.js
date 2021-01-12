function sameNumbers(arg) {
    arg = arg + "";
    let num = Number(arg[0]);
    let sum = arg.split('');
    for (let a = 1; a < arg.length; a++) {
        if (num !== Number(arg[a])) {
            return false + "\n" + sum.reduce((a, b) => a + Number(b), 0);
        }

    }
    return true + "\n" + sum.reduce((a, b) => a + Number(b), 0);

}

console.log(sameNumbers(1234))