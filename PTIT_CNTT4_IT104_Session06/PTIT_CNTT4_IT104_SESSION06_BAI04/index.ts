interface Geometry{
    calculateArea():number;
    calculatePerimeter():number;
}
class Circle implements Geometry{
    private radius:number;
    constructor(radius:number){
        this.radius=radius;
    }
    calculateArea():number{
        return 3.14*(this.radius*this.radius);
    }
    calculatePerimeter(): number {
        return 2*3.14*this.radius;
    }
}
class  Rectangle implements Geometry{
    private height:number;
    private width:number;
    constructor(a:number,b:number){
        this.height=a;
        this.width=b;
    }
    calculateArea(): number {
        return this.width*this.height;
    }
    calculatePerimeter(): number {
        return (this.height+this.width)*2
    }
}
let rec1=new Rectangle(10,20);
console.log(rec1.calculateArea());
console.log(rec1.calculatePerimeter());
let circ1=new Circle(10);
console.log(circ1.calculateArea());
console.log(circ1.calculatePerimeter());


