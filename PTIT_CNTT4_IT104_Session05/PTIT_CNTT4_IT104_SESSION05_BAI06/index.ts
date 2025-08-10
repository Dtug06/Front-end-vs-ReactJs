// Định nghĩa lớp Book có 2 thuộc tính title và author, cả 2 thuộc tính đều có modifier là private.
// Định nghĩa lớp Library có 1 thuộc tính books là mảng sách trong thư viện. Trong lớp Library sẽ có 2 phương thức lần lượt để thêm và xem danh sách các quyển sách trong thư viện.
// Khởi tạo 5 đối tượng từ lớp Book, 1 đối tượng từ lớp thư viện. Thêm 5 quyển sách vừa tạo vào trong thư viện, sau đó xem danh sách các quyển sách trong thư viện.
class Book{
    private title:string;
    private author:string;
    constructor(title:string,author:string){
        this.title=title;
        this.author=author;
    }
     public getInfo(): string {
        return `${this.title} - ${this.author}`;
    }
}
class Library{
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }
    public showBooks(): void {
        console.log("show u:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}
let b1 = new Book("book1", " Văn A");
let b2 = new Book("Java cơ bản", " Thị B");
let b3 = new Book("Học Python", " Văn C");
let b4 = new Book("C++ Nâng Cao", " Văn D");
let b5 = new Book("Cấu trúc dữ liệu", "Thị E");

let library = new Library();

library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);

library.showBooks();