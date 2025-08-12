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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    Vehicle.prototype.slowDown = function (down) {
        this.speed -= down;
    };
    Vehicle.prototype.speedUp = function (up) {
        this.speed += up;
    };
    Vehicle.prototype.showSpeed = function () {
        console.log(this.speed);
    };
    return Vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, speed, id, gear) {
        var _this = _super.call(this, name, id, speed) || this;
        _this.id = id;
        _this.name = name;
        _this.speed = speed;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.speed);
        console.log(this.gear);
    };
    return Bicycle;
}(Vehicle));
var bucycle = new Bicycle("Xe dap", 10, 1, 30);
bucycle.showInfo();
