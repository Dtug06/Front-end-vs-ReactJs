function toNumber(value) {
    var num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        return "Không thể chia cho 0";
    return a / b;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0)
        return "Không có giai thừa cho số âm";
    var res = 1;
    for (var i = 2; i <= Math.floor(n); i++)
        res *= i;
    return res;
}
function handleCalc(operator) {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var num1 = toNumber(input1);
    var num2 = toNumber(input2);
    var result = "";
    switch (operator) {
        case "+":
            result = (num1 !== null && num2 !== null) ? add(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "-":
            result = (num1 !== null && num2 !== null) ? subtract(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "*":
            result = (num1 !== null && num2 !== null) ? multiply(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "/":
            result = (num1 !== null && num2 !== null) ? divide(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "^":
            result = (num1 !== null && num2 !== null) ? power(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "√":
            result = (num1 !== null && num2 !== null) ? sqrt(num1, num2) : " Dữ liệu không hợp lệ";
            break;
        case "!":
            result = (num1 !== null) ? factorial(num1) : " Dữ liệu không hợp lệ";
            break;
    }
    document.getElementById("result").innerText = "K\u1EBFt qu\u1EA3: ".concat(result);
}
