class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `${this.id}. ${this.title} - ${this.author} (${this.year})`;
    }

    public setInfo(title: string, author: string, year: number): void {
        this.title = title;
        this.author = author;
        this.year = year;
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

    public deleteBookById(id: number): void {
        const index = this.books.findIndex(b => b.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID = ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID = ${id}`);
        }
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
            console.log(`Đã cập nhật sách ID = ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID = ${id}`);
        }
    }

    public searchBookByTitle(keyword: string): void {
        const result = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (result.length > 0) {
            console.log(`ket qua tim kieems "${keyword}":`);
            result.forEach(book => console.log(book.getInfo()));
        } else {
            console.log(`khong tim thay vs tu khoa "${keyword}"`);
        }
    }
}

let b1 = new Book(1, "Book1", "Văn A", 2020);
let b2 = new Book(2, "Java cơ bản", "Thị B", 2018);
let b3 = new Book(3, "Học Python", "Văn C", 2021);
let b4 = new Book(4, "C++ Nâng Cao", "Văn D", 2017);
let b5 = new Book(5, "Cấu trúc dữ liệu", "Thị E", 2019);

let library = new Library();
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
