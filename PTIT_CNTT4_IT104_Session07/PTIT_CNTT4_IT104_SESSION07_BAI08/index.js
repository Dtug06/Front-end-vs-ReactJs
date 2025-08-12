var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push("Deposit: +".concat(amount));
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("Withdraw: -".concat(amount));
        }
    };
    Account.prototype.showHistory = function () {
        console.log("Transaction history of ".concat(this.accountNumber, ":"));
        this.history.forEach(function (h) { return console.log(h); });
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        if (balance === void 0) { balance = 0; }
        if (interestRate === void 0) { interestRate = 0; }
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && this.balance - amount >= 0) {
            this.balance -= amount;
            this.history.push("Withdraw: -".concat(amount));
        }
    };
    return SavingAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, balance, overdraftLimit) {
        if (balance === void 0) { balance = 0; }
        if (overdraftLimit === void 0) { overdraftLimit = 0; }
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push("Withdraw: -".concat(amount));
        }
    };
    return CheckingAccount;
}(Account));
var savingAcc = new SavingAccount("S-001", 1000, 0.05);
savingAcc.deposit(500);
savingAcc.withdraw(300);
savingAcc.withdraw(2000);
savingAcc.showHistory();
var checkingAcc = new CheckingAccount("C-001", 500, 1000);
checkingAcc.deposit(200);
checkingAcc.withdraw(1000);
checkingAcc.withdraw(800);
checkingAcc.showHistory();
