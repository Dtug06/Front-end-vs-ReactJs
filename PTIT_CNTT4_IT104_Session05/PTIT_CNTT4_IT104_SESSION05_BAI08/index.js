var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
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
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch c\u00F3 ID = ".concat(id));
        }
    };
    Library.prototype.searchBookByTitle = function (keyword) {
        var result = this.books.filter(function (book) {
            return book.getTitle().toLowerCase().includes(keyword.toLowerCase());
        });
        if (result.length > 0) {
            console.log("ket qua \"".concat(keyword, "\":"));
            result.forEach(function (book) { return console.log(book.getInfo()); });
        }
        else {
            console.log("kogn tim thay \"".concat(keyword, "\""));
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
library.searchBookByTitle("java");
library.searchBookByTitle("c++");
library.searchBookByTitle("golang");
