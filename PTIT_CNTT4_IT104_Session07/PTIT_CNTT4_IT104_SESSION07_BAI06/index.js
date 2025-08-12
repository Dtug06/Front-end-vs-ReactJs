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
    function Account(id, userName, pass, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.pass = pass;
        this.isLogin = isLogin;
        this.role = role;
    }
    Account.prototype.logOut = function () {
        if (this.isLogin == "true") {
            console.log("Dang xuat thanh cong !!");
            this.isLogin = "false";
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, pass, isLogin, role, status) {
        var _this = _super.call(this, id, userName, pass, isLogin, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function () {
        if (this.status === "active") {
            this.isLogin = "true";
            console.log("T\u00E0i kho\u1EA3n ".concat(this.userName, " \u0111\u0103ng nh\u1EADp th\u00E0nh c\u00F4ng!"));
        }
        else if (this.status === "banned") {
            console.log("T\u00E0i kho\u1EA3n ".concat(this.userName, " \u0111\u00E3 b\u1ECB kh\u00F3a!"));
        }
    };
    return userAcc;
}(Account));
var adminAcc = /** @class */ (function (_super) {
    __extends(adminAcc, _super);
    function adminAcc(id, userName, pass, isLogin) {
        return _super.call(this, id, userName, pass, isLogin, "admin") || this;
    }
    adminAcc.prototype.login = function () {
        this.isLogin = "true";
        console.log("Admin ".concat(this.userName, " \u0111\u00E3 \u0111\u0103ng nh\u1EADp"));
    };
    adminAcc.prototype.banUser = function (user) {
        if (user.status !== "banned") {
            user.status = "banned";
            console.log("Ng\u01B0\u1EDDi d\u00F9ng ".concat(user.userName, " \u0111\u00E3 b\u1ECB c\u1EA5m"));
        }
        else {
            console.log("Ng\u01B0\u1EDDi d\u00F9ng ".concat(user.userName, " \u0111\u00E3 b\u1ECB c\u1EA5m t\u1EEB tr\u01B0\u1EDBc"));
        }
    };
    return adminAcc;
}(Account));
var user1 = new userAcc(1, "nam123", "123456", "false", "user", "active");
user1.login();
user1.logOut();
var user2 = new userAcc(2, "hung456", "abcdef", "false", "user", "banned");
user2.login();
var adminAccount = new adminAcc(0, "Tuândmin", "doanhtuan70@", "true");
adminAccount.banUser(user1);
