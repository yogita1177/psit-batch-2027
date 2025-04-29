import { Account } from "./account";
import { CurrentAccount } from "./current-account";
import { FixedDepositAccount } from "./fixed-deposit-account";
import { SavingsAccount } from "./saving-account";

export class Bank {
  private accounts: Map<string, Account>;

  constructor() {
    this.accounts = new Map<string, Account>();
  }

  createAccount(
    accountHolderName: string,
    accountType: string,
    amount?: number,
    years?: number
  ): Account {
    let account;
    switch (accountType) {
      case "CURRENT":
        account = new CurrentAccount(accountHolderName);
        break;
      case "SAVINGS":
        account = new SavingsAccount(accountHolderName);
        break;
      case "FIXED_DEPOSIT":
        account = new FixedDepositAccount(
          accountHolderName,
          amount ?? 0,
          years ?? 1
        );
        break;
      default:
        throw new Error("Invalid account type");
    }
    this.accounts.set(account.getAccountNumber(), account);
    return account;
  }

  getAllAccount(): Account[] {
    return Array.from(this.accounts.values());
  }
}
