type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};
function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}
function printOrder(order: Order): void {
  console.log(" ĐƠN HÀNG\n");
  console.log(`Mã đơn: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}\n`);
  console.log(" Sản phẩm:\n");

  order.items.forEach(item => {
    const name = item.product.name;
    const quantity = item.quantity;
    const price = item.product.price * quantity;
    console.log(`${name} × ${quantity} → ${price.toLocaleString("vi-VN")} VND`);
  });
  const total = calculateOrderTotal(order);
  console.log(`\n Tổng cộng: ${total.toLocaleString("vi-VN")} VND`);
  if (order.note) {
    console.log(` Ghi chú: ${order.note}`);
  }
}
const shirt: Product = { id: "P001", name: "Áo sơ mi", price: 250000 };
const pants: Product = { id: "P002", name: "Quần tây", price: 400000 };

const myOrder: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: shirt, quantity: 2 },
    { product: pants, quantity: 1 }
  ],
  note: "Giao sau 18h"
};
printOrder(myOrder);
