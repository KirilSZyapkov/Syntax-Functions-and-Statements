function fruit(arg1, arg2, arg3){
    let fruits = arg1;
    let weight = Number(arg2/1000);
    let price = Number(arg3);
    let money = weight * price;

    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruits}.`

}
console.log(fruit('apple', 1563, 2.35))