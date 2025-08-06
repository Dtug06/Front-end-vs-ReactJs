var num1;
var num2;
var num3;
var num4 = "10";
var num5 = true;
num1 = Number(prompt("Nhập so:"));
num2 = Number(prompt("Nhập so:"));
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(num1, num2));
console.log(num4 + num5); //ket qua la 10true toán tử + khi string + bất kì sẽ ép kiểu true=> "true"
