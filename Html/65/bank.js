'use strict';

const bankAccount = {
    balance: 1000,

    performTransaction: function (transactionAmount) {
        return {
            balance: this.balance + transactionAmount
        }
    }

}

console.log(bankAccount.performTransaction(100));

function createBankAccount(balanceInput) {
    balance: balanceInput,
        function performTransaction(transactionAmount) {
            return {
                balance: this.balance + transactionAmount

            }
        }

}
const bankAccount1 = createBankAccount(1000);
console.log(bankAccount1);