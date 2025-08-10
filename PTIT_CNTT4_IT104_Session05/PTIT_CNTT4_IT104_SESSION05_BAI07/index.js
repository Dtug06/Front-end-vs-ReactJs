var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getInfo = function () {
        return "".concat(this.id, ". ").concat(this.title, " - ").concat(this.author);
    };
    Book.prototype.setInfo = function (title, author) {
        this.title = title;
        this.author = author;
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
        console.log("Danh sách sách:");
        this.books.forEach(function (book) {
            console.log(book.getInfo());
        });
    };
    Library.prototype.updateBookById = function (id, newTitle, newAuthor) {
        var book = this.books.find(function (b) { return b.getId() === id; });
        if (book) {
            book.setInfo(newTitle, newAuthor);
        }
        else {
            console.log("khom tom thay sach c\u00F3 ID = ".concat(id));
        }
    };
    return Library;
}());
var b1 = new Book(1, "book1", "Văn A");
var b2 = new Book(2, "Java cơ bản", "Thị B");
var b3 = new Book(3, "Học Python", "Văn C");
var b4 = new Book(4, "C++ Nâng Cao", "Văn D");
var b5 = new Book(5, "Cấu trúc dữ liệu", "Thị E");
var library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.showBooks();
library.updateBookById(3, "pyho lỏ", "Văn Cập Nhật");
library.showBooks();
