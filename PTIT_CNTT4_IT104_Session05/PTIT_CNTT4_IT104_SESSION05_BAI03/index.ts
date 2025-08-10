// Định nghĩa lớp Employee có các thuộc tính: 
// name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
// printInfo(): phương thức để In ra tất cả thuộc tính
// Tạo ra một thực thể từ lớp Employee và gọi phương thức printInfo() để in ra các thuộc tính
class Employee{
    name:string;
    protected company:string;
    private phone:string;
    constructor(name:string,company:string,phone:string){
        this.name=name;
        this.company=company;
        this.phone=phone
    }
    printInfo(){
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
let empl1=new Employee("Tuan","unknow","0373020230");
empl1.printInfo();
