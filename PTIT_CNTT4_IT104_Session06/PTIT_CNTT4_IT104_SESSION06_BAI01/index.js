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
// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.
// phương thức getName để lấy ra tên của hình .
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// getSize để in ra các kích cỡ của hình .
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, height, width) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getName = function () {
        console.log(this.name);
    };
    Rectangle.prototype.getSize = function (height, width) {
        return this.height * this.width;
    };
    return Rectangle;
}(Shape));
var rect = new Rectangle("Hình chữ nhật", 5, 10);
rect.getName();
console.log(rect.getSize(rect.height, rect.width));
