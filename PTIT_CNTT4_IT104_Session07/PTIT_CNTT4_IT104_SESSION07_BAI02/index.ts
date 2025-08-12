class Vehicle{
   protected name:string;
   protected speed:number;
   protected id:number;
   constructor(name:string,speed:number,id:number){
    this.id=id;
    this.name=name;
    this.speed=speed;
   }
   slowDown(down:number){
    this.speed-=down;
   }
   speedUp(up:number){
    this.speed+=up;
   }
   showSpeed(){
    console.log(this.speed);
   }
}
class Bicycle extends Vehicle {
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
    super(name,id,speed);
    this.id=id;
    this.name=name;
    this.speed=speed;
    this.gear=gear;
   }
    showInfo(){
    console.log(this.id);
    console.log(this.name);
    console.log(this.speed);
    console.log(this.gear);
    }
}
let bucycle=new Bicycle("Xe dap",10,1,30)
bucycle.showInfo();