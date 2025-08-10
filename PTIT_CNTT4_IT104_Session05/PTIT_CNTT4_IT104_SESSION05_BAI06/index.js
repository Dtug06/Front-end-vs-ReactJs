// Định nghĩa lớp Book có 2 thuộc tính title và author, cả 2 thuộc tính đều có modifier là private.
// Định nghĩa lớp Library có 1 thuộc tính books là mảng sách trong thư viện. Trong lớp Library sẽ có 2 phương thức lần lượt để thêm và xem danh sách các quyển sách trong thư viện.
// Khởi tạo 5 đối tượng từ lớp Book, 1 đối tượng từ lớp thư viện. Thêm 5 quyển sách vừa tạo vào trong thư viện, sau đó xem danh sách các quyển sách trong thư viện.
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " - ").concat(this.author);
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        console.log("show u:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". ").concat(book.getInfo()));
        });
    };
    return Library;
}());
var b1 = new Book("book1", " Văn A");
var b2 = new Book("Java cơ bản", " Thị B");
var b3 = new Book("Học Python", " Văn C");
var b4 = new Book("C++ Nâng Cao", " Văn D");
var b5 = new Book("Cấu trúc dữ liệu", "Thị E");
var library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.showBooks();
