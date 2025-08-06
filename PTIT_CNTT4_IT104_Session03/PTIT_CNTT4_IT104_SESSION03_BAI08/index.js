function toNumber(value) {
    var num = typeof value === "number" ? value : Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var x = toNumber(a);
    var y = toNumber(b);
    return (x !== null && y !== null) ? x + y : " Tham số không hợp lệ!";
}
function subtract(a, b) {
    var x = toNumber(a);
    var y = toNumber(b);
    return (x !== null && y !== null) ? x - y : " Tham số không hợp lệ!";
}
function multiply(a, b) {
    var x = toNumber(a);
    var y = toNumber(b);
    return (x !== null && y !== null) ? x * y : " Tham số không hợp lệ!";
}
function divide(a, b) {
    var x = toNumber(a);
    var y = toNumber(b);
    if (x === null || y === null)
        return " Tham số không hợp lệ!";
    if (y === 0)
        return " Không thể chia cho 0!";
    return x / y;
}
console.log(add(10, "20"));
console.log(subtract("100", "30"));
console.log(multiply("5", 4));
console.log(divide("20", 5));
console.log(divide(10, "0"));
console.log(add("abc", 1));
