'use strict';

function celsToFahrConversion(temperature) {
    let convertedTemp = temperature / 5 * 9 + 32;
    console.log(convertedTemp);
}
function fahrToCelsConversion(temperature) {
    let convertedTemp = (temperature - 32) * 5 / 9;
    console.log(convertedTemp);
}

celsToFahrConversion(21);
celsToFahrConversion(32);
fahrToCelsConversion(68);

function celsToFahrConversionWithPrompt() {
    const temperature = prompt("What's the temperature in C that you would like to be converted to F?");
    let convertedTemp = temperature / 5 * 9 + 32;
    alert(convertedTemp);
}
function fahrToCelsConversionWithPrompt() {
    const temperature = prompt("What's the temperature in F that you would like to be converted to C?");
    let convertedTemp = (temperature - 32) * 5 / 9;
    alert(convertedTemp);
}

celsToFahrConversionWithPrompt();
fahrToCelsConversionWithPrompt();

function multiply(x, y) {
    console.log(x * y);
}
multiply(3, 8);
multiply(15, 45);

function getMultiplier(x) {
    return function multiply2(y) {
        return x * y;
    }
}
let multiplyBySeven = getMultiplier(7);
let multiplyByEight = getMultiplier(8);
console.log(multiplyBySeven(9));
console.log(multiplyByEight(9));
