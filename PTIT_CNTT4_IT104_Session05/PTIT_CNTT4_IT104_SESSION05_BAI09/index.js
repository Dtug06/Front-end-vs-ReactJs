var Book = /** @class */ (function () {
    function Book(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getInfo = function () {
        return "".concat(this.id, ". ").concat(this.title, " - ").concat(this.author, " (").concat(this.year, ")");
    };
    Book.prototype.setInfo = function (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
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
    Library.prototype.deleteBookById = function (id) {
        var index = this.books.findIndex(function (b) { return b.getId() === id; });
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log("\u0110\u00E3 x\u00F3a s\u00E1ch c\u00F3 ID = ".concat(id));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch c\u00F3 ID = ".concat(id));
        }
    };
    Library.prototype.updateBookById = function (id, newTitle, newAuthor, newYear) {
        var book = this.books.find(function (b) { return b.getId() === id; });
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
            console.log("\u0110\u00E3 c\u1EADp nh\u1EADt s\u00E1ch ID = ".concat(id));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch c\u00F3 ID = ".concat(id));
        }
    };
    Library.prototype.searchBookByTitle = function (keyword) {
        var result = this.books.filter(function (book) {
            return book.getTitle().toLowerCase().includes(keyword.toLowerCase());
        });
        if (result.length > 0) {
            console.log("ket qua tim kieems \"".concat(keyword, "\":"));
            result.forEach(function (book) { return console.log(book.getInfo()); });
        }
        else {
            console.log("khong tim thay vs tu khoa \"".concat(keyword, "\""));
        }
    };
    return Library;
}());
var b1 = new Book(1, "Book1", "Văn A", 2020);
var b2 = new Book(2, "Java cơ bản", "Thị B", 2018);
var b3 = new Book(3, "Học Python", "Văn C", 2021);
var b4 = new Book(4, "C++ Nâng Cao", "Văn D", 2017);
var b5 = new Book(5, "Cấu trúc dữ liệu", "Thị E", 2019);
var library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.showBooks();
library.updateBookById(2, "Java nâng cao", "Thị B", 2022);
library.deleteBookById(4);
library.searchBookByTitle("java");
library.showBooks();
