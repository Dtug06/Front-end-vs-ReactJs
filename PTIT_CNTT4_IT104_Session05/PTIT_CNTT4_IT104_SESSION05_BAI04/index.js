// Định nghĩa lại lớp Vehicle và thêm các access modifier cho các thuộc tính của lớp. 
// Thuộc tính name là public
// Thuộc tính year là protected 
// Thuộc tính company là private. 
// Ngoài ra hãy thêm một thuộc tính mới là id và sử dụng từ khóa readonly để đảm bảo rằng id không thể thay đổi. 
// Tạo ra một thực thể và in các thông tin ra màn hình để kiểm tra.
var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.printInfo = function () {
        console.log("ID: ".concat(this.id));
        console.log("T\u00EAn xe: ".concat(this.name));
        console.log("N\u0103m s\u1EA3n xu\u1EA5t: ".concat(this.year));
        console.log("H\u00E3ng s\u1EA3n xu\u1EA5t: ".concat(this.company));
    };
    return Vehicle;
}());
var car = new Vehicle("xe001", "Toyota Camry", 2023, "Toyota");
car.printInfo();
