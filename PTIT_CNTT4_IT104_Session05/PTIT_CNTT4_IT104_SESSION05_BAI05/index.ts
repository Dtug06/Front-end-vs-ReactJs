// Định nghĩa lớp Rectangle:
// Lớp Rectangle có 2 thuộc tính:
// width: Chiều rộng (kiểu number), có modifier private.
// height: Chiều dài (kiểu number), có modifier private.
// Cung cấp phương thức để truy cập và thay đổi giá trị của 2 thuộc tính này.
// Thêm 2 phương thức vào lớp Rectangle:
// Tính diện tích: Phương thức trả về diện tích hình chữ nhật (width * height).
// Tính chu vi: Phương thức trả về chu vi hình chữ nhật (2 * (width + height)).
// Khởi tạo đối tượng Rectangle:
// Tạo một đối tượng từ lớp Rectangle.
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng.
// Cập nhật lại kích cỡ của đối tượng và thực hiện lại các phép tính (diện tích, chu vi) sau khi cập nhật.
class Rectangle {
    private width:number;
    private height:number;
    constructor(width:number,height:number){
        this.height=height;
        this.width=width;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        this.width = width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    area(height:number,width:number):number{
        return this.height*this.width;
    }
    circumference(height:number,width:number):number{
        return (this.height*this.width)*2;
    }
}
let rec1=new Rectangle(10,20);
console.log(`Chiều rộng: ${rec1.getWidth()}`);
console.log(`Chiều dài: ${rec1.getHeight()}`);
console.log(`Chu vi: ${rec1.circumference()}`);
console.log(`Diện tích: ${rec1.area()}`);
rec1.setWidth(15);
rec1.setHeight(25);
console.log(`Chiều rộng: ${rec1.getWidth()}`);
console.log(`Chiều dài: ${rec1.getHeight()}`);
console.log(`Chu vi: ${rec1.circumference()}`);
console.log(`Diện tích: ${rec1.area()}`);

