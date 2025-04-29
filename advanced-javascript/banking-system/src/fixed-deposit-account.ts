import { Account } from "./account";

export class FixedDepositAccount extends Account {
  private interestRate: number;
  private maturityDate: Date;

  constructor(holderName: string, amount: number, years: number) {
    super(holderName);
    this.maturityDate = new Date();
    this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years);
    this.interestRate = FixedDepositAccount.calculateInterestRate(
      amount,
      years
    );
    this.deposit(amount);
  }

  static calculateInterestRate(amount: number, years: number): number {
    return 7.5;
  }

  withdraw(amount: number): void {
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
