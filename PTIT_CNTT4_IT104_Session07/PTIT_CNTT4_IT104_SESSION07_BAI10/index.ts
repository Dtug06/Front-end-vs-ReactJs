class MenuItem {
    constructor(
        public id: string,
        public name: string,
        public price: number
    ) {}
}

class Table {
    constructor(
        public id: number,
        public capacity: number,
        public available: boolean // true = còn trống, false = đã đặt
    ) {}
}

class Reservation {
    constructor(
        public id: number,
        public customerName: string,
        public tableId: number
    ) {}
}

class Order {
    items: MenuItem[] = [];

    constructor(
        public id: string,
        public tableId: number
    ) {}

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class Restaurant {
    menu: MenuItem[] = [];
    tables: Table[] = [];
    reservations: Reservation[] = [];
    orders: Order[] = [];

    addMenuItem(item: MenuItem) {
        this.menu.push(item);
    }

    addTable(table: Table) {
        this.tables.push(table);
    }

    makeReservation(customerName: string, tableId: number) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log("Bàn đã được đặt!");
            return;
        }
        const newReservation = new Reservation(
            this.reservations.length + 1,
            customerName,
            tableId
        );
        this.reservations.push(newReservation);
        table.available = false;
        console.log(`Đặt bàn thành công cho ${customerName}.`);
    }

    placeOrder(tableId: number, items: MenuItem[]) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        const newOrder = new Order(
            (this.orders.length + 1).toString(),
            tableId
        );
        newOrder.items.push(...items);
        this.orders.push(newOrder);
        console.log(`Đơn hàng đã được tạo cho bàn ${tableId}.`);
    }

    generateBill(tableId: number) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        const tableOrders = this.orders.filter(o => o.tableId === tableId);
        const total = tableOrders.reduce((sum, order) => sum + order.getTotal(), 0);

        console.log(`Tổng tiền bàn ${tableId}: ${total} VNĐ`);
        this.orders = this.orders.filter(o => o.tableId !== tableId);

      
        table.available = true;
    }
}
