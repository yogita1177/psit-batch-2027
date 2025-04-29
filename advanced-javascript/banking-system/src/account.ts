import { Transaction } from "./transaction";
import { v4 as uuidv4 } from "uuid";

export abstract class Account {
  protected balance: number;
  protected transactions: Transaction[];
  protected accountNumber: string;
  protected holderName: string;

  constructor(holderName: string) {
    this.balance = 0;
    this.transactions = [];
    this.accountNumber = uuidv4();
    this.holderName = holderName;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Amount must be greater than 0");
    this.balance += amount;
    this.transactions.push({
      type: "DEPOSIT",
      amount,
      timestamp: new Date(),
      description: "Deposit Done",
    });
  }

  abstract withdraw(amount: number): void;

  getTransactionHistory() {
    return { name: this.holderName, transactions: this.transactions };
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }
}
