function circleArea(arg) {
    let type = typeof (arg);
    if (type == 'number') {
        let s = Math.PI * Math.pow(arg, 2);
        console.log(s.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea('name')