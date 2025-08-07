var invoice = {
    invoiceId: 'INV001',
    createdAt: new Date('2024-05-14'),
    orders: [
        {
            orderId: 'ORD001',
            customerName: 'Nguyễn Văn A',
            isPaid: true,
            deliveryAddress: 'Hà Nội',
            items: [
                { product: { id: 'P01', name: 'Áo sơ mi', price: 250000 }, quantity: 2 },
                { product: { id: 'P02', name: 'Quần jean', price: 400000 }, quantity: 1 }
            ]
        },
        {
            orderId: 'ORD002',
            customerName: 'Trần Thị B',
            isPaid: false,
            deliveryAddress: 'TP.HCM',
            items: [
                { product: { id: 'P03', name: 'Váy hoa', price: 700000 }, quantity: 1, note: 'size M' }
            ]
        }
    ]
};
printInvoice(invoice);
function calculateInvoiceTotal(invoice) {
    var total = 0;
    for (var _i = 0, _a = invoice.orders; _i < _a.length; _i++) {
        var order = _a[_i];
        for (var _b = 0, _c = order.items; _b < _c.length; _b++) {
            var item = _c[_b];
            total += item.product.price * item.quantity;
        }
    }
    return total;
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(function (order) { return !order.isPaid; });
}
function printInvoice(invoice) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    console.log(" H\u00D3A \u0110\u01A0N: #".concat(invoice.invoiceId));
    console.log(" Ng\u00E0y t\u1EA1o: ".concat(invoice.createdAt.toISOString().split('T')[0], "\n"));
    for (var _i = 0, _a = invoice.orders; _i < _a.length; _i++) {
        var order = _a[_i];
        console.log("\uD83E\uDDD1\u200D\uD83D\uDCBC \u0110\u01A0N H\u00C0NG #".concat(order.orderId, " \u2013 ").concat(order.customerName));
        var orderTotal = 0;
        for (var _b = 0, _c = order.items; _b < _c.length; _b++) {
            var item = _c[_b];
            var productTotal = item.product.price * item.quantity;
            orderTotal += productTotal;
            var noteText = item.note ? " (".concat(item.note, ")") : "";
            console.log("".concat(item.product.name, " \u00D7 ").concat(item.quantity, " \u2192 ").concat(formatter.format(productTotal)).concat(noteText));
        }
        console.log("T\u1ED5ng \u0111\u01A1n: ".concat(formatter.format(orderTotal)));
        console.log("Tr\u1EA1ng th\u00E1i: ".concat(order.isPaid ? ' ĐÃ THANH TOÁN' : ' CHƯA THANH TOÁN', "\n"));
    }
    var totalInvoice = calculateInvoiceTotal(invoice);
    console.log(" T\u1ED5ng c\u1ED9ng h\u00F3a \u0111\u01A1n: ".concat(formatter.format(totalInvoice)));
}
