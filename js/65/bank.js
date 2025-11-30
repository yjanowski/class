(function (){
    'use strict';

    function createBankAccount(initialBalance, title){
        return {
        balance: initialBalance,
        name: title,
       // performTransaction: function(transactionAmount){
        //    this.balance += transactionAmount;
       // }
        };
    }

const savingsAccount = createBankAccount(1000, 'Savings Account');
const checkingAccount = createBankAccount(500, 'Checking Account');
function performTransaction(transactionAmount){
            this.balance += transactionAmount;
}

console.log(savingsAccount.balance);
console.log(checkingAccount.balance);
performTransaction.call(savingsAccount, 500);
console.log(`${savingsAccount.name}'s balance is ${savingsAccount.balance}`);
performTransaction.call(checkingAccount, 500);
console.log(`${checkingAccount.name}'s balance is ${checkingAccount.balance}`);


performTransaction.call(savingsAccount, 500);
console.log(`${savingsAccount.name}'s balance is ${savingsAccount.balance}`);
performTransaction.call(checkingAccount, 500);
console.log(`${checkingAccount.name}'s balance is ${checkingAccount.balance}`);


performTransaction.call(savingsAccount, 500);
console.log(`${savingsAccount.name}'s balance is ${savingsAccount.balance}`);
performTransaction.call(checkingAccount, 500);
console.log(`${checkingAccount.name}'s balance is ${checkingAccount.balance}`);

performTransaction.call(savingsAccount, -500);
console.log(`${savingsAccount.name}'s Saving Account's balance is ${savingsAccount.balance}`);
performTransaction.call(checkingAccount, -500);
console.log(`${checkingAccount.name}'s balance is ${checkingAccount.balance}`);

const depositFiftyInSavings = performTransaction.bind(savingsAccount, 50);
const depositFiftyInChecking = performTransaction.bind(checkingAccount, 50);

depositFiftyInSavings();
console.log(`${savingsAccount.name}'s balance is ${savingsAccount.balance}`);
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();
depositFiftyInSavings();

console.log(`${savingsAccount.name}'s balance is ${savingsAccount.balance}`);


depositFiftyInChecking();
console.log(`${checkingAccount.name}'s balance is ${checkingAccount.balance}`);

















}());
