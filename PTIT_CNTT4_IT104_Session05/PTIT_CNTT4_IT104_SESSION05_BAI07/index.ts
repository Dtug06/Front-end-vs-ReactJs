class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getInfo(): string {
        return `${this.id}. ${this.title} - ${this.author}`;
    }

    public setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        console.log("Danh sách sách:");
        this.books.forEach((book) => {
            console.log(book.getInfo());
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor);
        } else {
            console.log(`khom tom thay sach có ID = ${id}`);
        }
    }
}

let b1 = new Book(1, "book1", "Văn A");
let b2 = new Book(2, "Java cơ bản", "Thị B");
let b3 = new Book(3, "Học Python", "Văn C");
let b4 = new Book(4, "C++ Nâng Cao", "Văn D");
let b5 = new Book(5, "Cấu trúc dữ liệu", "Thị E");

let library = new Library();

library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);

library.showBooks();
library.updateBookById(3, "pyho lỏ", "Văn Cập Nhật");
library.showBooks();
