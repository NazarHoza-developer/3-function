"use strict";
//1
function getMaxDigit(number) {
    let maxDigit = 0;
    let digitStr = number.toString();
    let digitArr = digitStr.split('');
    for (let i = 1; i < digitArr.length; i++) {
        if (maxDigit < +digitArr[i]) {
            maxDigit = digitArr[i];
        }
    }

    return maxDigit;
}
const maxDigit = getMaxDigit(1236);
console.log(maxDigit);
//2
function degree(number, pow) {
    let result = 1;
    for (let i = 1; i <= pow ; i++){
        result = result * number;  
    }
    return result;`1`
}

// 3
function formatName (name2){
if (!name2) {
    return '';
}
name2 = stiring(name2);
let letter = name2.split('');
letter[0] = letter[0].toUpperCase();
for (let i = 1; i < letter.length; i++) {
    letter[i] = letter[i].toLowerCase();
}
 return letter;
}
//7-8
function convertCurrency(value) {
    let indexDollar = value.indexOf("$");
    let indexUAH = value.toUpperCase().indexOf("UAH");
    let result = "";
    if ( indexDollar !== -1) {
        result = value.substr(0, indexDollar) * 25 + " грн.";
    } else if (indexUAH !== -1) {
        result = value.substr(0, indexUAH) / 25 + "$"; 
    } else {
        result = "error";
    }
    return result;

}
// console.log(convertCurrency("1000uah"))
// console.log(convertCurrency("1000UAH"))

//12
function isPalyndrom(name) {
 return name.toLowerCase() === name.split("").reverse().join("").toLowerCase();
}
console.log(isPalyndrom("кокос"));