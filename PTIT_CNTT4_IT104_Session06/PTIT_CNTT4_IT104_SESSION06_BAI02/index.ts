abstract class Job{
    type:string;
    constructor(type:string){
        this.type=type;
    }
    getType():void{
        console.log(this.type);
    }
    abstract calculateSalary(workingHour:number):number;
}
class PartimeJob extends Job{
    workingHour:number;
    constructor(workingHour:number,type:string){
        super(type);
        this.type=this.type;
        this.workingHour=workingHour;
    }
    calculateSalary(workingHour: number): number {
        return workingHour*30000;
    }
    getInfo(){
        console.log(this.type);
        console.log(this.workingHour);
        console.log(this.calculateSalary(this.workingHour));  
    }
}
class FullTimeJob extends Job{
    fullTime=10000000;
    constructor(type:string){
        super(type);
    }
    calculateSalary(workingHour: number): number {
        return this.fullTime;
    }
    getInfo(){
        console.log(this.type);
        console.log(this.calculateSalary(this.fullTime)); //hoi lang nhang :DD
    }
}
let partTimeJob=new PartimeJob(3,"waiter");
let fullTimeJob=new FullTimeJob("Rua bon cau");
fullTimeJob.getInfo();
partTimeJob.getInfo();
