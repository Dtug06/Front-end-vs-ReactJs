// Định nghĩa lớp Student với các thuộc tính: 
// id: number 
// age: number
// email: string 
// Khai báo mảng để chứa các sinh viên được tạo ra từ lớp đã định nghĩa.
// Tạo ra các thực thể sinh viên và lưu vào mảng, tiến hành duyệt mảng và in ra các sinh viên trong mảng.
class Student{
    id:number;
    age:number;
    email:string
    constructor(id:number,age:number,email:string){
        this.id=id;
        this.age=age;
        this.email=email
    }
}
let listStudent:Student[]=[];
let student1=new Student(1,20,"tuan2006@gmail.com")
let student2=new Student(2,20,"her2006@gmail.com")
listStudent.push(student1);
listStudent.push(student2);
listStudent.forEach(s => {
    console.log(`ID: ${s.id}, Age: ${s.age}, Email: ${s.email}`);
});