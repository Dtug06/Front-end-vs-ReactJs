abstract class User{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    abstract birdYear(age:number):number;// khi sử dụng method asbtract ta không cần khai báo toàn bộ(method trừu tượng);
    getInfo(){
        console.log(this.name);
        console.log(this.age);
    }//trong class abstract có thể sử dụng method bình thường và trừu tượng :D
}
class Phone extends User {
    phone:number;
    constructor(phone:number,name:string,age:number){
        super(name,age);
        this.name=name;
        this.age=age;
        this.phone=phone;
    }
    birdYear(age:number):number{//khi lớp con kế thùa từ lớp tt, bắt buộc pahir overide lại
        return 22025-this.age;
    }
}