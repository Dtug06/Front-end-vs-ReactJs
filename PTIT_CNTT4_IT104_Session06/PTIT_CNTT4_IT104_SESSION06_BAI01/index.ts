// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.
// phương thức getName để lấy ra tên của hình .
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// getSize để in ra các kích cỡ của hình .
abstract class Shape{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract getName():void;
    abstract getSize(height:number,width:number):number;
}
class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(name:string,height:number,width:number){
        super(name);
        this.width=width;
        this.height=height
    }
    getName(){
        console.log(this.name);
    }
    getSize(height: number, width: number): number {
        return this.height*this.width
    }
}
let rect = new Rectangle("Hình chữ nhật", 5, 10);
rect.getName(); 
console.log(rect.getSize(rect.height, rect.width)); 
