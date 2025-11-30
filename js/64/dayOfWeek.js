'use strict';

const dayOfWeek =  (function (){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];
    return{
        getDayName(number){
            return daysOfWeek[number-1];
        },
        getDayNumber(dayName){
            return daysOfWeek.findIndex((x) => x === dayName) + 1;
        }
    };    
})();

//const myFunction = dayOfWeek();
//console.log(myFunction.getDayName(3));
//console.log(myFunction.getDayNumber('Sunday'));
console.log(dayOfWeek.getDayName(4));
console.log(dayOfWeek.getDayNumber('Tuesday'));

const interestCalculator = function createInterestPlans(){
    let interestRate;
    let years;
    return {
        setRate(rate){
            interestRate = rate;
        },
        setYears(yrs){
            years = yrs;
        },
        calculateInterest(principal){
            return console.log(principal*interestRate*years);
        }
    }
}

const test = interestCalculator();
test.setYears(5);
test.setRate(0.07);
test.calculateInterest(10000);