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

class CheckingAccount extends Account {
    overdraftLimit: number

    constructor(accountNumber: string, balance: number = 0, overdraftLimit: number = 0) {
        super(accountNumber, balance)
        this.overdraftLimit = overdraftLimit
    }

    withdraw(amount: number) {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount
            this.history.push(`Withdraw: -${amount}`)
        }
    }
}

const savingAcc = new SavingAccount("S-001", 1000, 0.05)
savingAcc.deposit(500)
savingAcc.withdraw(300)
savingAcc.withdraw(2000)
savingAcc.showHistory()

const checkingAcc = new CheckingAccount("C-001", 500, 1000)
checkingAcc.deposit(200)
checkingAcc.withdraw(1000)
checkingAcc.withdraw(800)
checkingAcc.showHistory()
