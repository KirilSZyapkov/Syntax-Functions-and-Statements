function wordsUppercase(input) {
    let pattern = /[A-Za-z]+/g;
    let match = input.match(pattern);
    let result = [];
    if (match !== null) {
        match.forEach(element => {
            element = element.toLocaleUpperCase();
            result.push(element);
        })

    }
    return result.join(', ');
}

console.log(wordsUppercase('1111'));