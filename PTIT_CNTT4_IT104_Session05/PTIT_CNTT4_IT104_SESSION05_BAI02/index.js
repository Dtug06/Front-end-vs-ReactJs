// Định nghĩa lớp Student với các thuộc tính: 
// id: number 
// age: number
// email: string 
// Khai báo mảng để chứa các sinh viên được tạo ra từ lớp đã định nghĩa.
// Tạo ra các thực thể sinh viên và lưu vào mảng, tiến hành duyệt mảng và in ra các sinh viên trong mảng.
var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    return Student;
}());
var listStudent = [];
var student1 = new Student(1, 20, "tuan2006@gmail.com");
var student2 = new Student(2, 20, "her2006@gmail.com");
listStudent.push(student1);
listStudent.push(student2);
listStudent.forEach(function (s) {
    console.log("ID: ".concat(s.id, ", Age: ").concat(s.age, ", Email: ").concat(s.email));
});
