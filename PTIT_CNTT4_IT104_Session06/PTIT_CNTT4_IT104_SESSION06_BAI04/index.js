var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return 3.14 * (this.radius * this.radius);
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * 3.14 * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.height = a;
        this.width = b;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (this.height + this.width) * 2;
    };
    return Rectangle;
}());
var rec1 = new Rectangle(10, 20);
console.log(rec1.calculateArea());
console.log(rec1.calculatePerimeter());
var circ1 = new Circle(10);
console.log(circ1.calculateArea());
console.log(circ1.calculatePerimeter());
