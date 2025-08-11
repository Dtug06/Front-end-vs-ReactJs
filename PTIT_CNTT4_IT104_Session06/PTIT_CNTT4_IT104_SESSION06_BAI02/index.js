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
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    Job.prototype.getType = function () {
        console.log(this.type);
    };
    return Job;
}());
var PartimeJob = /** @class */ (function (_super) {
    __extends(PartimeJob, _super);
    function PartimeJob(workingHour, type) {
        var _this = _super.call(this, type) || this;
        _this.type = _this.type;
        _this.workingHour = workingHour;
        return _this;
    }
    PartimeJob.prototype.calculateSalary = function (workingHour) {
        return workingHour * 30000;
    };
    PartimeJob.prototype.getInfo = function () {
        console.log(this.type);
        console.log(this.workingHour);
        console.log(this.calculateSalary(this.workingHour));
    };
    return PartimeJob;
}(Job));
var FullTimeJob = /** @class */ (function (_super) {
    __extends(FullTimeJob, _super);
    function FullTimeJob(type) {
        var _this = _super.call(this, type) || this;
        _this.fullTime = 10000000;
        return _this;
    }
    FullTimeJob.prototype.calculateSalary = function (workingHour) {
        return this.fullTime;
    };
    FullTimeJob.prototype.getInfo = function () {
        console.log(this.type);
        console.log(this.calculateSalary(this.fullTime)); //hoi lang nhang :DD
    };
    return FullTimeJob;
}(Job));
var partTimeJob = new PartimeJob(3, "waiter");
var fullTimeJob = new FullTimeJob("Rua bon cau");
fullTimeJob.getInfo();
partTimeJob.getInfo();
