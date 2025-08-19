class Customer {
    private static nextId = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}

abstract class Product {
    private static nextId = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number) {
        if (quantity > this.stock) {
            throw new Error("Not enough stock!");
        }
        this.stock -= quantity;
    }

    restock(quantity: number) {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;
    static readonly SHIPPING_COST = 50000;

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `${this.name} - Warranty: ${this.warrantyPeriod} months`;
    }

    getShippingCost(distance: number): number {
        return ElectronicsProduct.SHIPPING_COST;
    }

    getCategory(): string {
        return "Electronics";
    }
}

 class ClothingProduct extends Product {
    size: string;
    color: string;
    static readonly SHIPPING_COST = 25000;
    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo(): string {
        return `${this.name} - Size: ${this.size}, Color: ${this.color}`;
    }
    getShippingCost(distance: number): number {
        return ClothingProduct.SHIPPING_COST;
    }

    getCategory(): string {
        return "Clothing";
    }
}

class Order {
    private static nextId = 1;
    orderId: number;
    customer: Customer;
    products: { product: Product, quantity: number }[];
    totalAmount: number;

    constructor(customer: Customer, products: { product: Product, quantity: number }[]) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }

    getDetails(): string {
        const productList = this.products
            .map(p => `${p.product.name} x ${p.quantity}`)
            .join(", ");
        return `Order ID: ${this.orderId}, Customer: ${this.customer.name}, Products: [${productList}], Total: ${this.totalAmount}`;
    }
}
class Store {
    products:Product[]=[];
    customers:Customer[]=[];
    order:Order[]=[];
    addProduct(product:Product){
        this.products.push(product);
    }
    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null{
        let newOrder=new Order()
    }
}

 