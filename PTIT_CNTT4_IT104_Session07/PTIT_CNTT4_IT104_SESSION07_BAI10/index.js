var MenuItem = /** @class */ (function () {
    function MenuItem(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return MenuItem;
}());
var Table = /** @class */ (function () {
    function Table(id, capacity, available // true = còn trống, false = đã đặt
    ) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
    return Table;
}());
var Reservation = /** @class */ (function () {
    function Reservation(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
    return Reservation;
}());
var Order = /** @class */ (function () {
    function Order(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    Order.prototype.getTotal = function () {
        return this.items.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    return Order;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    Restaurant.prototype.addMenuItem = function (item) {
        this.menu.push(item);
    };
    Restaurant.prototype.addTable = function (table) {
        this.tables.push(table);
    };
    Restaurant.prototype.makeReservation = function (customerName, tableId) {
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log("Bàn đã được đặt!");
            return;
        }
        var newReservation = new Reservation(this.reservations.length + 1, customerName, tableId);
        this.reservations.push(newReservation);
        table.available = false;
        console.log("\u0110\u1EB7t b\u00E0n th\u00E0nh c\u00F4ng cho ".concat(customerName, "."));
    };
    Restaurant.prototype.placeOrder = function (tableId, items) {
        var _a;
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        var newOrder = new Order((this.orders.length + 1).toString(), tableId);
        (_a = newOrder.items).push.apply(_a, items);
        this.orders.push(newOrder);
        console.log("\u0110\u01A1n h\u00E0ng \u0111\u00E3 \u0111\u01B0\u1EE3c t\u1EA1o cho b\u00E0n ".concat(tableId, "."));
    };
    Restaurant.prototype.generateBill = function (tableId) {
        var table = this.tables.find(function (t) { return t.id === tableId; });
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        var tableOrders = this.orders.filter(function (o) { return o.tableId === tableId; });
        var total = tableOrders.reduce(function (sum, order) { return sum + order.getTotal(); }, 0);
        console.log("T\u1ED5ng ti\u1EC1n b\u00E0n ".concat(tableId, ": ").concat(total, " VN\u0110"));
        this.orders = this.orders.filter(function (o) { return o.tableId !== tableId; });
        table.available = true;
    };
    return Restaurant;
}());
