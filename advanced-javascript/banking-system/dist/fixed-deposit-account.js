"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDepositAccount = void 0;
const account_1 = require("./account");
class FixedDepositAccount extends account_1.Account {
    constructor(holderName, amount, years) {
        super(holderName);
        this.maturityDate = new Date();
        this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years);
        this.interestRate = FixedDepositAccount.calculateInterestRate(amount, years);
        this.deposit(amount);
    }
    static calculateInterestRate(amount, years) {
        return 7.5;
    }
    withdraw(amount) {
        if (this.maturityDate > new Date()) {
            throw new Error("Cannot withdraw before maturity date");
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
}
exports.FixedDepositAccount = FixedDepositAccount;
