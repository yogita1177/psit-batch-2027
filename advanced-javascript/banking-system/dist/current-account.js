"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const account_1 = require("./account");
class CurrentAccount extends account_1.Account {
    constructor(holderName) {
        super(holderName);
    }
    withdraw(amount) {
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
exports.CurrentAccount = CurrentAccount;
