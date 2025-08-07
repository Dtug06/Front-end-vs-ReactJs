// Product = {
;
var product = {
    id: "btt1",
    name: "Tuan",
    price: 100,
    category: {
        id: "id1",
        name: "banana",
    },
    discount: 50
};
var product1 = {
    id: "btt2",
    name: "Minh",
    price: 100,
    category: {
        id: "id2",
        name: "orange",
    },
    discount: 20
};
var product2 = {
    id: "btt3",
    name: "Kimure",
    price: 1000,
    category: {
        id: "id5",
        name: "ringo",
    },
    discount: 10
};
function getFinalPrice(product) {
    if (typeof product.discount === "number" && !isNaN(product.discount)) {
        return product.price -= product.discount;
    }
    return product.price;
}
function printProductInfo(product) {
    console.log("Ten ".concat(product.name));
    console.log("Gia goc ".concat(product.price));
    console.log("Gia sau khi giam".concat(getFinalPrice(product)));
    console.log("Danh muc ".concat(product.category.name));
}
printProductInfo(product);
printProductInfo(product1);
printProductInfo(product2);
