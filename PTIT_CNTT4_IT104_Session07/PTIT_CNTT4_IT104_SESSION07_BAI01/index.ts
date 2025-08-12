class Employee{
    name:string;
    commpany:string;
    phone:string;
    constructor(name:string,commpany:string,phone:string){
        this.name=name;
        this.commpany=commpany;
        this.phone=phone;
    }
    printInfo(){
        console.log(this.name);
        console.log(this.commpany);
        console.log(this.phone);
    }
}
class Manager extends Employee{
    teamSize:number;
    constructor(name:string,commpany:string,phone:string,teamSize:number){
        super(name,commpany,phone);
        this.name=name;
        this.commpany=commpany;
        this.phone=phone;
        this.teamSize=teamSize;
    }
    printInfo(): void {
        console.log(this.name);
        console.log(this.commpany);
        console.log(this.phone);
        console.log(this.teamSize);
    }
}
 let mana1=new Manager("Tuan","Rikkei","0373060230",5)
 mana1.printInfo();