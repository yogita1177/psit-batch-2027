"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const account_1 = require("./account");
class SavingsAccount extends account_1.Account {
    constructor(holderName) {
        super(holderName);
        this.withdrawlLimit = 100000;
    }
    withdraw(amount) {
        if (this.balance - amount < SavingsAccount.MIN_BALANCE) {
            throw new Error("Minimum balance must be maintained");
        }
        if (amount > this.withdrawlLimit) {
            throw new Error("Withdrawal limit exceeded");
        }
        if (this.balance < amount) {
            throw new Error("Insufficient balance");
        }
        this.balance -= amount;
        this.transactions.push({
            type: "WITHDRAWAL",
            amount,
            timestamp: new Date(),
            description: "Withdrawal Done",
        });
    }
    updateWithdrawalLimit(amount) {
        if (amount > SavingsAccount.MAXIMUM_WITHDRAWL_LIMIT) {
            throw new Error("Withdrawal limit cannot exceed 1,000,000");
        }
        this.withdrawlLimit = amount;
    }
}
exports.SavingsAccount = SavingsAccount;
SavingsAccount.interestRate = 0.04;
SavingsAccount.MIN_BALANCE = 1000;
SavingsAccount.MAXIMUM_WITHDRAWL_LIMIT = 1000000;
