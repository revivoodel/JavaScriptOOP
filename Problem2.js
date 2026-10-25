class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            throw new Error("not balance");
        }
        else {
            this.balance -= amount;
        }
    }
}


class Bank {
    constructor() {
        this.list = [];
    }

    addAccount(account) {
        this.list.push(account);
    }


    transfer(fromName, toName, amount) {
        const from = this.list.find((account) => account.owner === fromName);
        const to = this.list.find((account) => account.owner === toName);

        if (!from || !to) {
            throw new Error("Account not found");
        }

        from.withdraw(amount);
        to.deposit(amount);
    }


    showBalances() {
        this.list.forEach((account) => console.log(`owner: ${account.owner} balance:${account.balance}`));
    }

}
