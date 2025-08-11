class Student {
    private id: number;
    private name: string;

    constructor(name: string, id: number) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

let allStudents: Student[] = [];

class Classroom {
    students: Student[] = [];


    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(stu => {
            console.log(`ID: ${stu.getId()}, Name: ${stu.getName()}`);
        });
    }

   
    addStudent(stu: Student): void {
        this.students.push(stu);
    }

  
    filterStudent(id: number): Student[] {
        return this.students.filter(stu => stu.getId() === id);
    }

 
    addStudentInClass(id: number): void {
    const stu = allStudents.find(stu => stu.getId() === id);
    if (stu) {
        this.students.push(stu);
        allStudents = allStudents.filter(s => s.getId() !== id);
    } else {
        console.log(`Không tìm thấy học sinh có id = ${id} trong allStudents`);
    }
}

}


let s1 = new Student("A", 1);
let s2 = new Student("B", 2);
let s3 = new Student("C", 3);
let s4 = new Student("D", 4);
let s5 = new Student("E", 5);
let s6 = new Student("F", 6);

allStudents.push(s1, s2, s3, s4, s5, s6);

let class1 = new Classroom();
let class2 = new Classroom();

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
console.log(allStudents); 
