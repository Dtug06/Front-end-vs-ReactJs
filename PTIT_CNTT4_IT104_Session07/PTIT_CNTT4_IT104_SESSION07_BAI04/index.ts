abstract class Person{
   name:string;
   constructor(name:string){
    this.name=name;
   }
   displayInfo(){
    console.log(this.name);
   }
}
class Student extends Person{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
        this.name=name
    } 
    displayInfo(): void {
        console.log(this.name);
        console.log(this.id);
    }
}
class Teacher extends Person {
    subject:string;
    constructor(name:string,subject:string){
        super(name);
        this.name=name;
        this.subject=subject
    }
    displayInfo(): void {
        console.log(this.subject);
        console.log(this.name);
    }
}
let teacher=new Teacher("Back","Lap trinh ReactJs");
let student=new Student("Tuan",2);
teacher.displayInfo();
student.displayInfo();
