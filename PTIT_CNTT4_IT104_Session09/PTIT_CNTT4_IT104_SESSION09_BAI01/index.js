var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(name, email, shippingAddress) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    Customer.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", Address: ").concat(this.shippingAddress);
    };
    Customer.nextId = 1;
    return Customer;
}());
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.sell = function (quantity) {
        if (quantity > this.stock) {
            throw new Error("Not enough stock!");
        }
        this.stock -= quantity;
    };
    Product.prototype.restock = function (quantity) {
        this.stock += quantity;
    };
    Product.nextId = 1;
    return Product;
}());
var ElectronicsProduct = /** @class */ (function (_super) {
    __extends(ElectronicsProduct, _super);
    function ElectronicsProduct(name, price, stock, warrantyPeriod) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.warrantyPeriod = warrantyPeriod;
        return _this;
    }
    ElectronicsProduct.prototype.getProductInfo = function () {
        return "".concat(this.name, " - Warranty: ").concat(this.warrantyPeriod, " months");
    };
    ElectronicsProduct.prototype.getShippingCost = function (distance) {
        return ElectronicsProduct.SHIPPING_COST;
    };
    ElectronicsProduct.prototype.getCategory = function () {
        return "Electronics";
    };
    ElectronicsProduct.SHIPPING_COST = 50000;
    return ElectronicsProduct;
}(Product));
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(name, price, stock, size, color) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    ClothingProduct.prototype.getProductInfo = function () {
        return "".concat(this.name, " - Size: ").concat(this.size, ", Color: ").concat(this.color);
    };
    ClothingProduct.prototype.getShippingCost = function (distance) {
        return ClothingProduct.SHIPPING_COST;
    };
    ClothingProduct.prototype.getCategory = function () {
        return "Clothing";
    };
    ClothingProduct.SHIPPING_COST = 25000;
    return ClothingProduct;
}(Product));
var Order = /** @class */ (function () {
    function Order(customer, products) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce(function (sum, item) { return sum + item.product.price * item.quantity; }, 0);
    }
    Order.prototype.getDetails = function () {
        var productList = this.products
            .map(function (p) { return "".concat(p.product.name, " x ").concat(p.quantity); })
            .join(", ");
        return "Order ID: ".concat(this.orderId, ", Customer: ").concat(this.customer.name, ", Products: [").concat(productList, "], Total: ").concat(this.totalAmount);
    };
    Order.nextId = 1;
    return Order;
}());
var Store = /** @class */ (function () {
    function Store() {
        this.products = [];
        this.customers = [];
        this.order = [];
    }
    Store.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Store.prototype.createOrder = function (customerId, productQuantities) {
        var newOrder = new Order();
    };
    return Store;
}());
