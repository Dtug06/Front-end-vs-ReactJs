interface Student{name:string,age:number,email:string}
let student:Student={
    name:"TuanDEpTrai",
    age:20,
    email:"tuan20062012@gmail.com"
}
function print(student:Student):void{
    console.log(`Ten toi la ${student.name},${student.age} tuoi, email cua toi ${student.email}`);
    
    
}
print(student);