class Account {
    public accountNumber: string
    protected balance: number
    protected history: string[]
    protected status: string

    constructor(accountNumber: string, balance: number = 0) {
        this.accountNumber = accountNumber
        this.balance = balance
        this.history = []
        this.status = "active"
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount
            this.history.push(`Deposit: +${amount}`)
        }
    }

    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            this.history.push(`Withdraw: -${amount}`)
        }
    }

    showHistory() {
        console.log(`Transaction history of ${this.accountNumber}:`)
        this.history.forEach(h => console.log(h))
    }
}

class SavingAccount extends Account {
    interestRate: number

    constructor(accountNumber: string, balance: number = 0, interestRate: number = 0) {
        super(accountNumber, balance)
        this.interestRate = interestRate
    }

    withdraw(amount: number) {
        if (amount > 0 && this.balance - amount >= 0) {
            this.balance -= amount
            this.history.push(`Withdraw: -${amount}`)
        }
    }
}

const acc = new SavingAccount("123456", 1000, 0.05)
acc.deposit(500)
acc.withdraw(300)
acc.withdraw(1200)
acc.showHistory()
