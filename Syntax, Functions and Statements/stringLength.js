function stringLength(arg1, arg2, arg3){
let lenOne = arg1.length;
let lenTwo = arg2.length;
let lenThree = arg3.length;
let totalLen = lenOne+lenTwo+lenThree;
let avrLen = totalLen/3;
console.log(totalLen);
console.log(Math.floor(avrLen));
}
stringLength('chocolate', 'ice cream', 'cake')