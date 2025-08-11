interface changeSpeed{
    speedUp(up:number):void;
    slowDown(down:number):void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(speed:number){
        this.speed=speed;
    }
  speedUp(up:number){
    this.speed+=up;
  }
  slowDown(down:number){
    this.speed-=down;
  }
  stop(){
    this.speed=0;
  }
}
let vehicle=new Vehicle(100);
console.log(vehicle.speedUp(10));
console.log(vehicle.slowDown(90));
console.log(vehicle.stop());

