var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.speedUp = function (up) {
        this.speed += up;
    };
    Vehicle.prototype.slowDown = function (down) {
        this.speed -= down;
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    return Vehicle;
}());
var vehicle = new Vehicle(100);
console.log(vehicle);
vehicle.speedUp(10)
console.log(vehicle);
vehicle.slowDown(90)
console.log(vehicle);
vehicle.stop()
