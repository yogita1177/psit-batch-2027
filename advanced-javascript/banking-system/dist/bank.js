"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const current_account_1 = require("./current-account");
const fixed_deposit_account_1 = require("./fixed-deposit-account");
const saving_account_1 = require("./saving-account");
class Bank {
    constructor() {
        this.accounts = new Map();
    }
    createAccount(accountHolderName, accountType, amount, years) {
        let account;
        switch (accountType) {
            case "CURRENT":
                account = new current_account_1.CurrentAccount(accountHolderName);
                break;
            case "SAVINGS":
                account = new saving_account_1.SavingsAccount(accountHolderName);
                break;
            case "FIXED_DEPOSIT":
                account = new fixed_deposit_account_1.FixedDepositAccount(accountHolderName, amount !== null && amount !== void 0 ? amount : 0, years !== null && years !== void 0 ? years : 1);
                break;
            default:
                throw new Error("Invalid account type");
        }
        this.accounts.set(account.getAccountNumber(), account);
        return account;
    }
    getAllAccount() {
        return Array.from(this.accounts.values());
    }
}
exports.Bank = Bank;
