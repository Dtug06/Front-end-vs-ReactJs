// Định nghĩa lớp Rectangle:
// Lớp Rectangle có 2 thuộc tính:
// width: Chiều rộng (kiểu number), có modifier private.
// height: Chiều dài (kiểu number), có modifier private.
// Cung cấp phương thức để truy cập và thay đổi giá trị của 2 thuộc tính này.
// Thêm 2 phương thức vào lớp Rectangle:
// Tính diện tích: Phương thức trả về diện tích hình chữ nhật (width * height).
// Tính chu vi: Phương thức trả về chu vi hình chữ nhật (2 * (width + height)).
// Khởi tạo đối tượng Rectangle:
// Tạo một đối tượng từ lớp Rectangle.
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng.
// Cập nhật lại kích cỡ của đối tượng và thực hiện lại các phép tính (diện tích, chu vi) sau khi cập nhật.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.area = function (height, width) {
        return this.height * this.width;
    };
    Rectangle.prototype.circumference = function (height, width) {
        return (this.height * this.width) * 2;
    };
    return Rectangle;
}());
var rec1 = new Rectangle(10, 20);
console.log("Chi\u1EC1u r\u1ED9ng: ".concat(rec1.getWidth()));
console.log("Chi\u1EC1u d\u00E0i: ".concat(rec1.getHeight()));
console.log("Chu vi: ".concat(rec1.circumference()));
console.log("Di\u1EC7n t\u00EDch: ".concat(rec1.area()));
rec1.setWidth(15);
rec1.setHeight(25);
console.log("Chi\u1EC1u r\u1ED9ng: ".concat(rec1.getWidth()));
console.log("Chi\u1EC1u d\u00E0i: ".concat(rec1.getHeight()));
console.log("Chu vi: ".concat(rec1.circumference()));
console.log("Di\u1EC7n t\u00EDch: ".concat(rec1.area()));
