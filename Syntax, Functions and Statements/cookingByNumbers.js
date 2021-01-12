function cookingByNumbers(...param) {
    let num = Number(param.shift());
    for (let a = 0; a < param.length; a++) {
        let comand = param[a];
        switch (comand) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case  'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;
            default:
                break;
        }
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')