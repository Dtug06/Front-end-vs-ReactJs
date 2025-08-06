let num1: number;
let num2: number;
let num3: number;
let num4: string="10";
let num5: boolean=true;
num1=Number(prompt("Nhập so:"));
num2=Number(prompt("Nhập so:"));
function sum(num1:number,num2:number):number{
    return num1+num2
}
console.log(sum(num1,num2));
console.log(num4+num5);//ket qua la 10true toán tử + khi string + bất kì sẽ ép kiểu true=> "true"



