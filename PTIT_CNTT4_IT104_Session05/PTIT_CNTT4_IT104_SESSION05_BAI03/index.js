// Định nghĩa lớp Employee có các thuộc tính: 
// name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
// printInfo(): phương thức để In ra tất cả thuộc tính
// Tạo ra một thực thể từ lớp Employee và gọi phương thức printInfo() để in ra các thuộc tính
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    };
    return Employee;
}());
var empl1 = new Employee("Tuan", "unknow", "0373020230");
empl1.printInfo();
