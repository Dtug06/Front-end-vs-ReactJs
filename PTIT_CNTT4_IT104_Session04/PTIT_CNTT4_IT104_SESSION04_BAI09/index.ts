type Product = {
    id: string;
    name: string;
    price: number;
};

type Item = {
    product: Product;
    quantity: number;
    note?: string;
};

type Order = {
    orderId: string;
    customerName: string;
    isPaid: boolean;
    deliveryAddress: string;
    items: Item[];
};

type Invoice = {
    invoiceId: string;
    createdAt: Date;
    orders: Order[];
};

const invoice: Invoice = {
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
function calculateInvoiceTotal(invoice: Invoice): number {
    let total = 0;
    for (const order of invoice.orders) {
        for (const item of order.items) {
            total += item.product.price * item.quantity;
        }
    }
    return total;
}
function getUnpaidOrders(invoice: Invoice): Order[] {
    return invoice.orders.filter(order => !order.isPaid);
}
function printInvoice(invoice: Invoice): void {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    console.log(` HÓA ĐƠN: #${invoice.invoiceId}`);
    console.log(` Ngày tạo: ${invoice.createdAt.toISOString().split('T')[0]}\n`);
    for (const order of invoice.orders) {
        console.log(`🧑‍💼 ĐƠN HÀNG #${order.orderId} – ${order.customerName}`);
        let orderTotal = 0;
        for (const item of order.items) {
            const productTotal = item.product.price * item.quantity;
            orderTotal += productTotal;
            const noteText = item.note ? ` (${item.note})` : "";
            console.log(`${item.product.name} × ${item.quantity} → ${formatter.format(productTotal)}${noteText}`);
        }
        console.log(`Tổng đơn: ${formatter.format(orderTotal)}`);
        console.log(`Trạng thái: ${order.isPaid ? ' ĐÃ THANH TOÁN' : ' CHƯA THANH TOÁN'}\n`);
    }
    const totalInvoice = calculateInvoiceTotal(invoice);
    console.log(` Tổng cộng hóa đơn: ${formatter.format(totalInvoice)}`);
}
