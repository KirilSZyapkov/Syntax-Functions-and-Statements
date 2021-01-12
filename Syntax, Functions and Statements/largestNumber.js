function largestNumber(arg1, arg2, arg3){
if(arg1>arg2 && arg1>arg3){
    console.log(`The largest number is ${arg1}.`);
} else if (arg2>arg1 && arg2>arg3){
    console.log(`The largest number is ${arg2}.`);
} else {
    console.log(`The largest number is ${arg3}.`);
}
}
largestNumber(-3, -5, -22.5)