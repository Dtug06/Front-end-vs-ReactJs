const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
  { name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } }
];
function calculate(products) {
  let totalBeforeDiscount = 0;
  let totalAfterDiscount = 0;
  let details = [];
  products.forEach(p => {
    let { name, price, discount, quantity, bulkDiscount } = p;
    totalBeforeDiscount += price * quantity;
    if (bulkDiscount && quantity >= bulkDiscount.minQuantity) {
      discount += bulkDiscount.extraDiscount;
    }
    const finalPrice = Math.round(price * (1 - discount));
    const subtotal = finalPrice * quantity;
    totalAfterDiscount += subtotal;
    details.push({
      name,
      finalPrice,
      quantity,
      subtotal
    });
  });
  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details
  };
}
const result = calculate(products);
console.log(result);

