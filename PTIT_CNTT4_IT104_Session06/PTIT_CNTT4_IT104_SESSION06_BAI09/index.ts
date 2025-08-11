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
        private lendedBooks: LendedBook[] = [],
        private status: string = "Active"
    ) {}

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getContact(): string {
        return this.contact;
    }
    getStatus(): string {
        return this.status;
    }
    setStatus(newStatus: string): void {
        this.status = newStatus;
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

    registerMember(id: number, name: string, contact: string): void {
        const newMember = new Member(id, name, contact);
        this.members.push(newMember);
    }

    blockMember(id: number): void {
        const member = this.members.find(m => m.getId() === id);
        if (member) {
            member.setStatus("Blocked");
        }
    }

    showMembers(): void {
        console.log("Danh sách thành viên:");
        this.members.forEach(m => {
            console.log(
                `ID: ${m.getId()}, Name: ${m.getName()}, Contact: ${m.getContact()}, Status: ${m.getStatus()}`
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

library.registerMember(1, "Alice", "alice@example.com");
library.registerMember(2, "Bob", "bob@example.com");
library.registerMember(3, "Charlie", "charlie@example.com");

library.blockMember(2);

library.showMembers();
