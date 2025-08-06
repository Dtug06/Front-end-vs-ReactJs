function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number | string {
  if (b === 0) return "Không thể chia cho 0";
  return a / b;
}
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0) return "Không có giai thừa cho số âm";
  let res = 1;
  for (let i = 2; i <= Math.floor(n); i++) res *= i;
  return res;
}

function handleCalc(operator: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const num1 = toNumber(input1);
  const num2 = toNumber(input2);
  let result: number | string = "";
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
  document.getElementById("result")!.innerText = `Kết quả: ${result}`;
}
