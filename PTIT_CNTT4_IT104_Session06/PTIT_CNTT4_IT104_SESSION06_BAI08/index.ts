class Book {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private stock: number,
        private status: string
    ) {}

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getStock(): number {
        return this.stock;
    }
    getStatus(): string {
        return this.status;
    }
}

class Member {
    constructor(
        private id: number,
        private name: string,
        private contact: string,
        private lendedBooks: LendedBook[],
        private status: string
    ) {}

    getId(): number {
        return this.id;
    }
}

class LendedBook {
    constructor(
        private memberId: number,
        private bookId: number,
        private dueDate: Date
    ) {}
}

class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(
                `ID: ${b.getId()}, Title: ${b.getTitle()}, Author: ${b.getAuthor()}, Stock: ${b.getStock()}, Status: ${b.getStatus()}`
            );
        });
    }
}

let library = new Library();

let b1 = new Book(1, "Book One", "Author A", 5, "Available");
let b2 = new Book(2, "Book Two", "Author B", 3, "Available");
let b3 = new Book(3, "Book Three", "Author C", 0, "Out of stock");

library.addBook(b1);
library.addBook(b2);
library.addBook(b3);

library.showBooks();
