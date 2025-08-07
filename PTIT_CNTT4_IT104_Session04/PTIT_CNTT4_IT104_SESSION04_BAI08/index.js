function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(" ĐƠN HÀNG\n");
    console.log("M\u00E3 \u0111\u01A1n: #".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName, "\n"));
    console.log(" Sản phẩm:\n");
    order.items.forEach(function (item) {
        var name = item.product.name;
        var quantity = item.quantity;
        var price = item.product.price * quantity;
        console.log("".concat(name, " \u00D7 ").concat(quantity, " \u2192 ").concat(price.toLocaleString("vi-VN"), " VND"));
    });
    var total = calculateOrderTotal(order);
    console.log("\n T\u1ED5ng c\u1ED9ng: ".concat(total.toLocaleString("vi-VN"), " VND"));
    if (order.note) {
        console.log(" Ghi ch\u00FA: ".concat(order.note));
    }
}
var shirt = { id: "P001", name: "Áo sơ mi", price: 250000 };
var pants = { id: "P002", name: "Quần tây", price: 400000 };
var myOrder = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: shirt, quantity: 2 },
        { product: pants, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(myOrder);
