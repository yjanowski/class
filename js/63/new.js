'use strict';

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) {
            console.log(`Failed condition at spot ${i} in the array with value ${array[i]}`);
            return false;
        }

    }
}

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            console.log(`Passed condition at spot ${i} in the array with value ${array[i]}`);
            return true;
        }

    }
}

function onlyIf(array, testCB, actionCB) {
    for (let i = 0; i < array.length; i++) {
        if (testCB(array[i]) === true) {
            console.log(`The value at spot ${i} in the array passed with value of ${array[i]} and is now ${actionCB(array[i])}`);
        }
    }
}
function onlyIf2(array, testCB, actionCB){
    const filteredArray = array.filter((item) => testCB());
    filteredArray.forEach(element => {actionCB});
}
const numbers = [8, 9, 10, 11, 12, 6, 13, 14, 15, 16, 17, 18, 9, 3, 2, 4, 2];
const letters = ['C', 'A', 'c', 'd', 'E', 'f', 'g', 'h']
const numbers2 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119];
function numberIsSmallerThan7(number) {
    if (number >= 7) {
        return false;
    }
    return true;
}

function isLowerCase(letter) {
    if (letter === letter.toLowerCase()) {
        return true;
    }
    return false;
}
function isMultipleOf7(number) {
    if (number % 7 === 0) {
        return true;
    }
    return false;
}
function calculateDiscount(itemPrice){
    return itemPrice * 0.8;
}
every(numbers, numberIsSmallerThan7);
every(letters, isLowerCase);
every(numbers2, isMultipleOf7);
numbers.every(numberIsSmallerThan7);
numbers2.every(isMultipleOf7);
some(numbers, numberIsSmallerThan7);
some(letters, isLowerCase);
onlyIf(numbers, numberIsSmallerThan7, calculateDiscount);
onlyIf2(numbers, numberIsSmallerThan7, calculateDiscount);