var Book = /** @class */ (function () {
    function Book(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getStock = function () {
        return this.stock;
    };
    Book.prototype.getStatus = function () {
        return this.status;
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
    Member.prototype.getId = function () {
        return this.id;
    };
    return Member;
}());
var LendedBook = /** @class */ (function () {
    function LendedBook(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    return LendedBook;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function (b) {
            console.log("ID: ".concat(b.getId(), ", Title: ").concat(b.getTitle(), ", Author: ").concat(b.getAuthor(), ", Stock: ").concat(b.getStock(), ", Status: ").concat(b.getStatus()));
        });
    };
    return Library;
}());
var library = new Library();
var b1 = new Book(1, "Book One", "Author A", 5, "Available");
var b2 = new Book(2, "Book Two", "Author B", 3, "Available");
var b3 = new Book(3, "Book Three", "Author C", 0, "Out of stock");
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.showBooks();
