// Định nghĩa lại lớp Vehicle và thêm các access modifier cho các thuộc tính của lớp. 
// Thuộc tính name là public
// Thuộc tính year là protected 
// Thuộc tính company là private. 
// Ngoài ra hãy thêm một thuộc tính mới là id và sử dụng từ khóa readonly để đảm bảo rằng id không thể thay đổi. 
// Tạo ra một thực thể và in các thông tin ra màn hình để kiểm tra.
class Vehicle {
    public name: string;       
    protected year: number;   
    private company: string;   
    public readonly id: string; 
    constructor(id: string, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng sản xuất: ${this.company}`);
    }
}
let car = new Vehicle("xe001", "Toyota Camry", 2023, "Toyota");
car.printInfo();