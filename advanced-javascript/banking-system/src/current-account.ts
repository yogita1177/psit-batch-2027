import { Account } from "./account";

export class CurrentAccount extends Account {
  constructor(holderName: string) {
    super(holderName);
  }

  withdraw(amount: number): void {
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
