import { Bank } from "./bank";

var pnbBank: Bank = new Bank();
var account = pnbBank.createAccount("Sam", "CURRENT");
// console.log(account.getBalance());
account.deposit(1000);
// console.log(account.getBalance());
account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.getTransactionHistory());

var account2 = pnbBank.createAccount("Mary", "FIXED_DEPOSIT", 100000, 5);
// console.log(account2.getBalance());
// account2.withdraw(50000);
// console.log(account2.getTransactionHistory());

var account3 = pnbBank.createAccount("John Doe", "SAVINGS");
// console.log(account.getBalance());
account3.deposit(100000);
// console.log(account.getBalance());
account3.withdraw(5000);
account3.withdraw(5000);
// console.log(account.getBalance());
// console.log(account.getTransactionHistory());

console.log(pnbBank.getAllAccount());
