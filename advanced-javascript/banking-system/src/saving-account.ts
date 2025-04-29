import { Account } from "./account";

export class SavingsAccount
  extends Account
  implements WithdrawalLimitUpdatable
{
  private static interestRate: number = 0.04;
  private static MIN_BALANCE = 1000;
  private static MAXIMUM_WITHDRAWL_LIMIT = 1000000;
  private withdrawlLimit: number;

  constructor(holderName: string) {
    super(holderName);
    this.withdrawlLimit = 100000;
  }

  withdraw(amount: number): void {
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

  updateWithdrawalLimit(amount: number): void {
    if (amount > SavingsAccount.MAXIMUM_WITHDRAWL_LIMIT) {
      throw new Error("Withdrawal limit cannot exceed 1,000,000");
    }
    this.withdrawlLimit = amount;
  }
}
