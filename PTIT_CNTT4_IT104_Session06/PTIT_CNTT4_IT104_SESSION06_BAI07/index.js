var Student = /** @class */ (function () {
    function Student(name, id) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(function (stu) {
            console.log("ID: ".concat(stu.getId(), ", Name: ").concat(stu.getName()));
        });
    };
    Classroom.prototype.addStudent = function (stu) {
        this.students.push(stu);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.filter(function (stu) { return stu.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var stu = allStudents.find(function (stu) { return stu.getId() === id; });
        if (stu) {
            this.students.push(stu);
            allStudents = allStudents.filter(function (s) { return s.getId() !== id; });
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh c\u00F3 id = ".concat(id, " trong allStudents"));
        }
    };
    Classroom.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (stu) { return stu.getId() === id; });
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh c\u00F3 id = ".concat(id, " trong l\u1EDBp"));
        }
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var stu = this.students.find(function (stu) { return stu.getId() === id; });
        if (stu) {
            stu.setName(newName);
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh c\u00F3 id = ".concat(id, " trong l\u1EDBp"));
        }
    };
    return Classroom;
}());
var s1 = new Student("A", 1);
var s2 = new Student("B", 2);
var s3 = new Student("C", 3);
var s4 = new Student("D", 4);
var s5 = new Student("E", 5);
var s6 = new Student("F", 6);
allStudents.push(s1, s2, s3, s4, s5, s6);
var class1 = new Classroom();
var class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("== Lớp 1 ==");
class1.showStudents();
console.log("== Lớp 2 ==");
class2.showStudents();
class1.removeStudent(2);
class1.editStudent(1, "Anh");
class1.showStudents();
console.log(allStudents);
